// Thin bootstrap. Creates the deterministic sim, the command bus, the presentation
// layer, and the controllers (input/AI/net), then wires the match lifecycle. All
// cross-layer communication flows through the event bus and the command bus, so
// this file only connects the pieces — no game rules live here.

import { EventBus } from './core/events.js';
import { createSettings, DEFAULT_SETTINGS } from './config.js';
import { GameState } from './sim/state.js';
import { GameController } from './sim/commands.js';
import { createWorld } from './world/worldgen.js';
import { startDraft } from './sim/draft.js';

import { createRenderer } from './render/index.js';
import { CameraController } from './camera/camera-controller.js';
import { InputController } from './input/input-controller.js';

import { bindStore } from './ui/store-bindings.js';
import { actions } from './ui/actions.js';
import { patchUi, uiState } from './core/store.js';
import './ui/components/app-root.js';

import { Transport } from './net/transport.js';
import { NetPlay } from './net/netplay.js';

import { DraftAI } from './ai/draft-ai.js';
import { PlayingAI } from './ai/playing-ai.js';
import { resetClassRecord } from './sim/records.js';

function main() {
  const container = document.getElementById('canvas-wrap');
  const bus = new EventBus();
  const state = new GameState({ seed: Date.now() });
  // Boot with a throwaway world so the renderer has terrain to build; startMatch
  // replaces it with the configured one.
  state.world = createWorld({
    w: DEFAULT_SETTINGS.gridW,
    h: DEFAULT_SETTINGS.gridH,
    centerPlazaRadius: DEFAULT_SETTINGS.centerPlazaRadius,
    seed: state.rng.next() * 1e9,
  });

  const controller = new GameController(state, bus);
  const renderer = createRenderer(container, state, bus);
  controller.setAnimator(renderer.animator);

  const camera = new CameraController(renderer.view, renderer.tween);
  renderer.units.cameraFollow = (pos) => camera.follow(pos);

  // Outbound intent sink. Offline it applies locally; online it goes through the
  // netplay sender (apply locally + forward to the peer). `send` is the single
  // origination point used by input and the action hub.
  let outboundDispatch = (intent) => controller.dispatch(intent);
  const send = (intent) => outboundDispatch(intent);

  const input = new InputController({ view: renderer.view, state, controller, camera, highlights: renderer.highlights, bus, dispatch: send, units: renderer.units });

  bindStore(state, bus);

  const clearDraftHighlights = () => renderer.highlights.clear();
  bus.on('draftStarted', clearDraftHighlights);
  bus.on('draftTurnChanged', () => {
    if (!state.draft.pendingClassKey) clearDraftHighlights();
  });
  bus.on('draftPickChosen', ({ placementTiles }) => {
    if (placementTiles?.length) renderer.highlights.show(placementTiles, 'placement');
  });
  bus.on('unitPlaced', clearDraftHighlights);
  bus.on('draftComplete', clearDraftHighlights);

  // CPU ownership is mode-aware (pvcpu: P2, cvcpu: both). Online players are never AI.
  const isCPU = (player) => state.isCPUPlayer(player);
  new DraftAI({ state, controller, bus, isCPU });
  new PlayingAI({ state, controller, bus, isCPU });

  // Recenter the camera on the active unit each turn.
  const recenter = ({ unit } = {}) => { if (unit) camera.centerOn(unit.x, unit.y); };
  bus.on('turnChanged', recenter);
  bus.on('playingStarted', recenter);

  // Draft finished -> battle-start splash -> begin playing.
  bus.on('draftComplete', () => {
    patchUi({ battleStart: true, draft: null });
    setTimeout(() => {
      controller.startPlaying();
      patchUi({ battleStart: false });
    }, 2500);
  });

  // Watch mode (cvcpu) can run a series of games for balance stats.
  let seriesCfg = null;
  let seriesTotal = 1;
  let seriesPlayed = 0;
  let seriesTimer = null;

  function clearSeriesTimer() {
    if (seriesTimer != null) {
      clearTimeout(seriesTimer);
      seriesTimer = null;
    }
  }

  function startMatch(cfg, { continueSeries = false } = {}) {
    clearSeriesTimer();
    state.gameMode = cfg.mode;
    state.aiDraftPreference = cfg.aiDraftPreference || 'balanced';
    const seed = cfg.seed != null ? cfg.seed : (Date.now() >>> 0);

    if (cfg.mode === 'cvcpu') {
      if (!continueSeries) {
        seriesCfg = { ...cfg };
        delete seriesCfg.seed;
        seriesTotal = Math.max(1, Number(cfg.numGames) || 1);
        seriesPlayed = 0;
        resetClassRecord();
      }
    } else {
      seriesCfg = null;
      seriesTotal = 1;
      seriesPlayed = 0;
    }

    const isShort = (cfg.mode === 'pvp' || cfg.mode === 'online') && cfg.mapMode === 'short';
    state.settings = createSettings({
      gridW: isShort ? 27 : (cfg.gridW || DEFAULT_SETTINGS.gridW),
      gridH: isShort ? 15 : (cfg.gridH || DEFAULT_SETTINGS.gridH),
      centerPlazaRadius: isShort ? 0.35 : (cfg.centerPlazaRadius || DEFAULT_SETTINGS.centerPlazaRadius),
      maxTurns: isShort ? 100 : (cfg.maxTurns || DEFAULT_SETTINGS.maxTurns),
      draftPicksPerPlayer: cfg.numUnits || DEFAULT_SETTINGS.draftPicksPerPlayer,
      moveDurationMs: cfg.moveDurationMs != null ? cfg.moveDurationMs : DEFAULT_SETTINGS.moveDurationMs,
    });

    state.rng.reseed(seed);
    state.clearUnits();
    state.world = createWorld({
      w: state.settings.gridW,
      h: state.settings.gridH,
      centerPlazaRadius: state.settings.centerPlazaRadius,
      seed,
    });
    renderer.view.setWorld(state.world);
    bus.emit('worldRebuilt', {});
    input.clearSelection();

    patchUi({ screen: 'game', phase: 'draft', gameMode: cfg.mode, gameOver: null, battleStart: false, previewUnit: null });
    startDraft(controller.ctx);
  }

  // After a watch-mode game ends, brief pause then start the next (if any).
  bus.on('gameOver', () => {
    if (state.gameMode !== 'cvcpu' || !seriesCfg) return;
    seriesPlayed++;
    const more = seriesPlayed < seriesTotal;
    if (more) {
      const go = uiState.value.gameOver;
      if (go) patchUi({ gameOver: { ...go, classRecord: null } });
      clearSeriesTimer();
      seriesTimer = setTimeout(() => {
        seriesTimer = null;
        startMatch({ ...seriesCfg }, { continueSeries: true });
      }, 2000);
    }
  });

  function toModeSelect() {
    clearSeriesTimer();
    seriesCfg = null;
    seriesTotal = 1;
    seriesPlayed = 0;
    state.phase = 'draft';
    input.clearSelection();
    patchUi({ screen: 'mode-select', gameOver: null, battleStart: false, draft: null, previewUnit: null, selectedUnit: null });
  }

  // --- Online (WebRTC copy/paste signaling) ---
  // The sim is deterministic and intent-driven, so online play just needs both
  // peers to apply the same intents against the same seed. The host picks the seed
  // and match config and embeds them in the offer code; the guest echoes its name
  // in the reply code. On connect, both build the identical match.
  let net = null; // { transport, netplay }
  let onlineCfg = null;
  let onlineSeed = 0;
  let onlineName = '';
  let onlineHostName = 'Player 1';
  let onlineGuestName = 'Player 2';

  function teardownNet() {
    if (net && net.transport) { try { net.transport.close(); } catch (_) {} }
    net = null;
    outboundDispatch = (intent) => controller.dispatch(intent);
  }

  function startOnlineMatch(localPlayerNumber, names) {
    state.localPlayerNumber = localPlayerNumber;
    state.playerNames = { 1: names[1] || 'Player 1', 2: names[2] || 'Player 2' };
    outboundDispatch = (intent) => net.netplay.sendLocal(intent);
    startMatch({ mode: 'online', mapMode: onlineCfg.mapMode, numUnits: onlineCfg.numUnits, seed: onlineSeed });
    net.netplay.markReady();
    patchUi({ online: null });
  }

  function onOnlineConnected(localPlayerNumber, names) {
    net.netplay = new NetPlay({ transport: net.transport, controller, localPlayerNumber });
    startOnlineMatch(localPlayerNumber, names);
  }

  function onOnlineClosed() {
    if (uiState.value.online) patchUi({ online: { ...uiState.value.online, error: 'Connection lost.' } });
  }

  actions.onlineStart = (cfg) => {
    onlineCfg = cfg;
    teardownNet();
    patchUi({ online: { view: 'menu', error: '' } });
  };

  actions.onlineCancel = () => {
    teardownNet();
    patchUi({ online: null });
  };

  actions.onlineHost = async (name) => {
    onlineName = name || 'Player 1';
    onlineSeed = (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0;
    const transport = new Transport();
    net = { transport, netplay: null };
    transport.onOpen = () => onOnlineConnected(1, { 1: onlineName, 2: onlineGuestName });
    transport.onClose = onOnlineClosed;
    try {
      const sdp = await transport.createOffer();
      const offer = btoa(JSON.stringify({ sdp, seed: onlineSeed, cfg: onlineCfg, name: onlineName }));
      patchUi({ online: { view: 'hosting', offer, error: '' } });
    } catch (err) {
      patchUi({ online: { view: 'menu', error: err.message || 'Failed to create offer.' } });
    }
  };

  actions.onlineHostConnect = async (replyCode) => {
    if (!net || !net.transport) return;
    try {
      const { sdp, name } = JSON.parse(atob(String(replyCode).trim()));
      onlineGuestName = name || 'Player 2';
      const cur = uiState.value.online || {};
      patchUi({ online: { ...cur, error: '', waiting: true } });
      await net.transport.acceptAnswer(sdp);
    } catch (err) {
      const cur = uiState.value.online || {};
      patchUi({ online: { ...cur, waiting: false, error: err.message || 'Invalid reply code.' } });
    }
  };

  actions.onlineJoin = async (offerCode, name) => {
    onlineName = name || 'Player 2';
    try {
      const parsed = JSON.parse(atob(String(offerCode).trim()));
      onlineSeed = parsed.seed;
      onlineCfg = parsed.cfg || { mapMode: 'long', numUnits: DEFAULT_SETTINGS.draftPicksPerPlayer };
      onlineHostName = parsed.name || 'Player 1';
      const transport = new Transport();
      net = { transport, netplay: null };
      transport.onOpen = () => onOnlineConnected(2, { 1: onlineHostName, 2: onlineName });
      transport.onClose = onOnlineClosed;
      const answerSdp = await transport.acceptOffer(parsed.sdp);
      const answer = btoa(JSON.stringify({ sdp: answerSdp, name: onlineName }));
      patchUi({ online: { view: 'joined', answer, error: '' } });
    } catch (err) {
      patchUi({ online: { view: 'joining', error: err.message || 'Invalid host code.' } });
    }
  };

  // Wire the UI action hub.
  actions.startMatch = (cfg) => startMatch(cfg);
  actions.toModeSelect = () => { teardownNet(); toModeSelect(); };
  actions.draftPick = (classKey) => {
    if (state.gameMode === 'online' && controller.currentDraftPlayer !== state.localPlayerNumber) return;
    send({ type: 'draftPick', classKey });
  };
  actions.attack = () => input.enterAttackMode();
  actions.skill = (index) => input.enterSkillMode(index);
  actions.endTurn = () => {
    if (state.gameMode === 'online' && !state.isHumanTurn()) return;
    if (input.mode === 'facing') return;
    input.enterFacingMode();
  };
  actions.cancel = () => input.clearSelection();

  patchUi({ screen: 'mode-select' });
}

main();
