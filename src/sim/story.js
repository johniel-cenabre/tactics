// Story-mode objective evaluation. Pure: reads state.story + units/turnCount.

import { getEnemyBaseTiles } from '../world/worldgen.js';

function coreAlive(state, player) {
  return state.units.some((u) => u.player === player && u.hp > 0 && !u.summonedBy);
}

function findByTag(state, tag) {
  if (!tag) return null;
  return state.units.find((u) => u.tag === tag) || null;
}

function isOnTile(unit, tiles) {
  if (!unit || !tiles?.length) return false;
  return tiles.some((t) => (t.x | 0) === unit.x && (t.y | 0) === unit.y);
}

function resolveReachTiles(state, obj) {
  if (obj?.tiles?.length) return obj.tiles;
  if (obj?.target === 'enemyBase' && state.world) {
    return getEnemyBaseTiles(state.world, 1).map((t) => ({ x: t.gx, y: t.gy }));
  }
  return [];
}

function winEliminate(state) {
  return !coreAlive(state, 2);
}

function winBoss(state, obj) {
  const boss = findByTag(state, obj.tag || 'boss');
  return !boss || boss.hp <= 0;
}

function winSurvive(state, obj) {
  const turns = Math.max(0, obj.turns | 0);
  return state.turnCount >= turns;
}

function winReach(state, obj) {
  const tiles = resolveReachTiles(state, obj);
  if (tiles.length === 0) return false;
  const by = obj.by === 'all' ? 'all' : 'any';
  let candidates;
  if (obj.unitTag) {
    const u = findByTag(state, obj.unitTag);
    candidates = u && u.hp > 0 && u.player === 1 ? [u] : [];
  } else {
    candidates = state.units.filter((u) => u.player === 1 && u.hp > 0 && !u.summonedBy);
  }
  if (candidates.length === 0) return false;
  if (by === 'all') return candidates.every((u) => isOnTile(u, tiles));
  return candidates.some((u) => isOnTile(u, tiles));
}

function checkWinEntry(state, obj) {
  if (!obj || !obj.type) return false;
  switch (obj.type) {
    case 'eliminate': return winEliminate(state);
    case 'boss': return winBoss(state, obj);
    case 'survive': return winSurvive(state, obj);
    case 'reach': return winReach(state, obj);
    default: return false;
  }
}

function checkLoseProtect(state, obj) {
  const vip = findByTag(state, obj.tag);
  return !vip || vip.hp <= 0;
}

/**
 * @returns {{ outcome: 'win'|'lose'|null, title: string|null }}
 */
export function evaluateStory(state) {
  const story = state.story;
  if (!story) return { outcome: null, title: null };

  const objectives = story.objectives || { win: [{ type: 'eliminate' }], lose: [] };

  // Lose conditions first.
  if (!coreAlive(state, 1)) {
    return { outcome: 'lose', title: 'Defeat — your army has fallen.' };
  }
  for (const l of objectives.lose || []) {
    if (l.type === 'protect' && checkLoseProtect(state, l)) {
      return { outcome: 'lose', title: `Defeat — ${l.tag || 'VIP'} was lost.` };
    }
  }

  const winList = objectives.win?.length ? objectives.win : [{ type: 'eliminate' }];
  if (winList.every((w) => checkWinEntry(state, w))) {
    return { outcome: 'win', title: 'Victory!' };
  }

  return { outcome: null, title: null };
}

/** Progress strings for the HUD. */
export function storyObjectiveProgress(state) {
  const story = state.story;
  if (!story) return [];
  const objectives = story.objectives || {};
  const lines = [];

  for (const w of objectives.win || []) {
    if (w.type === 'eliminate') {
      const alive = state.units.filter((u) => u.player === 2 && u.hp > 0 && !u.summonedBy).length;
      lines.push({ text: `Defeat all enemies (${alive} remaining)`, done: alive === 0 });
    } else if (w.type === 'boss') {
      const boss = findByTag(state, w.tag || 'boss');
      const dead = !boss || boss.hp <= 0;
      lines.push({ text: dead ? 'Boss defeated' : `Defeat boss: ${boss?.name || w.tag}`, done: dead });
    } else if (w.type === 'survive') {
      const turns = w.turns | 0;
      lines.push({
        text: `Survive ${turns} turns (${Math.min(state.turnCount, turns)}/${turns})`,
        done: state.turnCount >= turns,
      });
    } else if (w.type === 'reach') {
      const text = w.unitTag
        ? `Escort ${w.unitTag} to the objective`
        : w.target === 'enemyBase'
          ? 'Reach the enemy base'
          : 'Reach the objective';
      lines.push({ text, done: checkWinEntry(state, w) });
    }
  }
  for (const l of objectives.lose || []) {
    if (l.type === 'protect') {
      const vip = findByTag(state, l.tag);
      const alive = vip && vip.hp > 0;
      lines.push({
        text: alive ? `Protect ${vip.name || l.tag}` : `${l.tag || 'VIP'} fallen`,
        done: !alive,
        danger: true,
      });
    }
  }
  return lines;
}
