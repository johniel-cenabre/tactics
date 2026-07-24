// Translates sim events into UI store patches. This is the only place that reads
// the sim and writes the store, giving one-directional flow: sim -> events ->
// store -> Lit components. Components never touch the sim except via ui/actions.

import { patchUi, uiState } from '../core/store.js';
import { unitSummary, getEffectiveStat } from '../sim/unit.js';
import { getAvailableSkills } from '../sim/skills.js';
import { getCurrentDraftPlayer, getCurrentPlayerPickCount } from '../sim/draft.js';
import { storyObjectiveProgress } from '../sim/story.js';
import { CLASS_IMAGES } from '../data/class-look.js';
import { getStageIndex } from '../data/stages.js';
import { unlockNextAfter } from '../data/story-progress.js';

export function bindStore(state, bus) {
  const activeUnit = () => (state.phase === 'playing' ? state.getActiveUnit() : null);

  const skillsFor = (unit) => {
    if (!unit) return [];
    return getAvailableSkills(state, unit).map((s, index) => ({
      index,
      name: s.name,
      cost: s.cost || 0,
      hpCost: s.hpCost || 0,
      level: s.level || 1,
      description: s.description || '',
      disabled: !!s.disabled,
      target: s.target,
    }));
  };

  const syncHud = () => {
    const unit = activeUnit();
    const storyHud = state.story
      ? {
          stageId: state.story.stageId,
          stageIndex: state.story.stageIndex,
          objectives: storyObjectiveProgress(state),
        }
      : null;
    patchUi({
      phase: state.phase,
      gameMode: state.gameMode,
      currentPlayer: state.currentPlayer,
      turnCount: state.turnCount,
      maxTurns: state.settings.maxTurns,
      turnsLeft: state.phase === 'playing' ? state.settings.maxTurns - state.turnCount : null,
      isHumanTurn: state.phase === 'playing' ? state.isHumanTurn() : false,
      selectedUnit: unitSummary(unit),
      availableSkills: skillsFor(unit),
      story: storyHud,
      actionState: {
        attackMode: false,
        skillMode: false,
        choosingFacing: false,
        hasMoved: state.hasMoved,
        hasAttacked: state.hasAttacked,
      },
    });
  };

  const isHumanDraftTurn = (player) => {
    if (state.gameMode === 'cvcpu') return false;
    if ((state.gameMode === 'pvcpu' || state.gameMode === 'story') && player !== 1) return false;
    if (state.gameMode === 'online' && player !== state.localPlayerNumber) return false;
    return true;
  };

  const syncDraft = () => {
    const d = state.draft;
    if (!d) { patchUi({ draft: null }); return; }
    const player = getCurrentDraftPlayer(state);
    patchUi({
      phase: 'draft',
      gameMode: state.gameMode,
      currentPlayer: player,
      draft: {
        player,
        pickCount: getCurrentPlayerPickCount(state),
        pendingClassKey: d.pendingClassKey || null,
        availableClasses: d.availableClasses ? Array.from(d.availableClasses) : [],
        pickedClasses: state.units.filter((u) => u.player === player).map((u) => u.class),
        picksPerPlayer: state.settings.draftPicksPerPlayer,
        isHumanTurn: isHumanDraftTurn(player),
      },
    });
  };

  // --- Playing HUD ---
  bus.on('playingStarted', syncHud);
  bus.on('turnChanged', syncHud);
  bus.on('afterEndTurn', syncHud);
  bus.on('actionResolved', syncHud);
  bus.on('initiativeChanged', syncHud);
  bus.on('unitStatsChanged', () => {
    const unit = activeUnit();
    patchUi({ selectedUnit: unitSummary(unit), availableSkills: skillsFor(unit) });
  });

  bus.on('selectionChanged', ({ unit, mode }) => {
    patchUi({
      selectedUnit: unitSummary(unit || activeUnit()),
      availableSkills: skillsFor(unit || activeUnit()),
      actionState: {
        ...uiState.value.actionState,
        attackMode: mode === 'attack',
        skillMode: mode === 'skill',
        choosingFacing: mode === 'facing',
      },
    });
  });

  bus.on('previewUnit', ({ unit }) => patchUi({ previewUnit: unitSummary(unit) }));

  // --- Draft ---
  bus.on('draftStarted', syncDraft);
  bus.on('draftPickChosen', syncDraft);
  bus.on('draftTurnChanged', syncDraft);
  bus.on('unitPlaced', syncDraft);
  bus.on('draftComplete', () => patchUi({ draft: null }));

  // --- Game over ---
  bus.on('gameOver', ({ winner, title, classRecord, outcome, stageId }) => {
    const winnerPlayer = winner != null ? winner : 1;
    const cards = state.units
      .filter((u) => u.player === winnerPlayer && !u.summonedBy)
      .map((u) => ({
        id: u.id,
        name: u.name,
        class: u.class,
        level: u.level,
        hp: u.hp,
        maxHp: u.maxHp,
        mp: u.mp,
        maxMp: u.maxMp,
        lowHp: u.maxHp > 0 && u.hp / u.maxHp < 0.3,
        stats: {
          str: getEffectiveStat(u, 'str'),
          agi: getEffectiveStat(u, 'agi'),
          vit: getEffectiveStat(u, 'vit'),
          dex: getEffectiveStat(u, 'dex'),
          luk: getEffectiveStat(u, 'luk'),
          int: getEffectiveStat(u, 'int'),
        },
      }));
    let nextStageId = null;
    if (outcome === 'win' && stageId) {
      const idx = getStageIndex(stageId);
      if (idx >= 0) {
        unlockNextAfter(idx);
        // nextStageId resolved by UI via STAGES; store index for buttons
        nextStageId = idx + 1;
      }
    }
    patchUi({
      phase: 'gameover',
      gameOver: {
        winner,
        title: title || (winner ? `Player ${winner} wins!` : 'Draw'),
        cards,
        classRecord: classRecord || null,
        outcome: outcome || null,
        stageId: stageId || null,
        nextStageIndex: nextStageId,
      },
    });
  });

  // Story objectives also update after moves/deaths
  bus.on('unitMoved', () => {
    if (state.story) syncHud();
  });
  bus.on('unitDied', () => {
    if (state.story) syncHud();
  });

  return { syncHud, syncDraft, imageFor: (cls) => CLASS_IMAGES[cls] };
}

export { getEffectiveStat };
