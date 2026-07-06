// Draft system: snake pick order, class selection, and unit placement. Operates
// on state.draft and emits events; the Lit draft UI and the draft AI both drive
// it through the command layer.

import { CLASS_KEYS } from '../data/classes.js';
import { createUnit } from './unit.js';
import { getBaseTiles, sortTilesByDistanceToCenter } from '../world/worldgen.js';

/** Snake order of player numbers for `picksPerPlayer` picks each. */
export function computeDraftOrder(picksPerPlayer) {
  const n = picksPerPlayer;
  const order = [1];
  for (let i = 0; i < Math.floor((n - 1) / 2); i++) order.push(2, 2, 1, 1);
  if (n % 2 === 1) order.push(2);
  else {
    order.push(2, 2);
    order.push(1);
  }
  return order;
}

export function getCurrentDraftPlayer(state) {
  return state.draft.order[state.draft.pickIndex];
}

export function getCurrentPlayerPickCount(state) {
  const p = getCurrentDraftPlayer(state);
  return state.draft.pickCountByPlayer[p] + 1;
}

export function startDraft(ctx) {
  const { state, rng } = ctx;
  const picks = state.settings.draftPicksPerPlayer;
  state.phase = 'draft';
  state.deathOrderSeq = 0;
  state.deadCorpseCount = 0;
  state.powerups.clear();
  state.powerupSpawnedTurnsLeft = { 30: false, 20: false, 10: false };

  const d = state.draft;
  d.order = computeDraftOrder(picks);
  d.pickIndex = 0;
  d.pickCountByPlayer = { 1: 0, 2: 0 };
  d.availableClasses = new Set(CLASS_KEYS);
  d.classOrder = rng.shuffle([...CLASS_KEYS]);
  d.pendingClassKey = null;
  d.selectedClassKey = null;
  d.placementTiles = [];

  ctx.emit('draftStarted', { player: getCurrentDraftPlayer(state), pickCount: getCurrentPlayerPickCount(state), picksPerPlayer: picks });
}

/** Choose a class; computes the valid placement tiles for the current player. */
export function pickClass(ctx, classKey) {
  const { state } = ctx;
  const d = state.draft;
  if (!d.availableClasses.has(classKey) || d.pendingClassKey) return false;
  d.pendingClassKey = classKey;
  const p = getCurrentDraftPlayer(state);
  const occupied = new Set(state.units.map((u) => state.tileKey(u.x, u.y)));
  const tiles = getBaseTiles(state.world, p, occupied);
  d.placementTiles = sortTilesByDistanceToCenter(state.world, tiles);
  ctx.emit('draftPickChosen', { player: p, classKey, placementTiles: d.placementTiles });
  return true;
}

/** Place the pending class at (gx,gy); advances the draft. */
export function placeUnit(ctx, gx, gy) {
  const { state } = ctx;
  const d = state.draft;
  if (!d.pendingClassKey) return false;
  const p = getCurrentDraftPlayer(state);
  const k = state.tileKey(gx, gy);
  if (!d.placementTiles.some((t) => state.tileKey(t.gx, t.gy) === k)) return false;

  const classKey = d.pendingClassKey;
  const unit = createUnit({ id: state.ids.next(), player: p, classKey, x: gx, y: gy });
  state.addUnit(unit);
  ctx.emit('unitPlaced', { unit });

  d.availableClasses.delete(classKey);
  d.pendingClassKey = null;
  d.placementTiles = [];
  d.pickCountByPlayer[p]++;
  d.pickIndex++;

  const picks = state.settings.draftPicksPerPlayer;
  if (d.pickIndex >= 2 * picks) {
    ctx.emit('draftComplete', {});
    return true;
  }
  ctx.emit('draftTurnChanged', {
    player: getCurrentDraftPlayer(state),
    pickCount: getCurrentPlayerPickCount(state),
    picksPerPlayer: picks,
  });
  return true;
}
