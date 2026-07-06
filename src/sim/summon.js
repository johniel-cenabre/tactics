// Summoning, reanimation, and the death cascade.
//
// Death is a pure state change that emits events: 'unitDied' (renderer plays the
// topple animation), and the controller listens for the active unit dying to
// schedule an endTurn. Summoned units die with their summoner; reanimate
// consumes the freshest corpse.

import { CLASS_KEYS } from '../data/classes.js';
import { CLASS_LOOK } from '../data/class-look.js';
import { CLASS_SKILLS } from '../data/skills.js';
import { isWalkable } from '../world/grid.js';
import { getEffectiveStat } from './unit.js';
import { recordClassKill } from './records.js';

export function buildInitiativeOrder(state) {
  return state.units
    .filter((u) => u.hp > 0)
    .sort((a, b) => {
      const agiA = getEffectiveStat(a, 'agi');
      const agiB = getEffectiveStat(b, 'agi');
      if (agiB !== agiA) return agiB - agiA;
      return getEffectiveStat(b, 'dex') - getEffectiveStat(a, 'dex');
    })
    .map((u) => u.id);
}

/** Preferred tile to place a summoned unit: in front, else any adjacent free tile. */
export function getSummonPosition(state, summoner, facingAngle) {
  const { world } = state;
  const occupied = new Set(state.units.filter((u) => u.hp > 0).map((u) => u.y * world.w + u.x));
  const inBounds = (gx, gy) => gx >= 0 && gx < world.w && gy >= 0 && gy < world.h;
  const valid = (gx, gy) => inBounds(gx, gy) && isWalkable(world, gx, gy) && !occupied.has(gy * world.w + gx);

  const angle = facingAngle != null ? facingAngle : summoner.player === 1 ? Math.PI : 0;
  const frontGx = summoner.x - Math.round(Math.cos(angle));
  const frontGy = summoner.y + Math.round(Math.sin(angle));
  if (valid(frontGx, frontGy)) return { gx: frontGx, gy: frontGy };

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (const [dx, dy] of dirs) {
    const gx = summoner.x + dx;
    const gy = summoner.y + dy;
    if (valid(gx, gy)) return { gx, gy };
  }
  return null;
}

/**
 * Summon a new unit. Preserves the active unit's initiative slot when re-sorting.
 * @returns {object|null} the summoned unit, or null if no valid tile
 */
export function summonUnit(ctx, summoner, stats, skills, opts = {}) {
  const { state } = ctx;
  const pos =
    opts.position && opts.position.gx != null && opts.position.gy != null
      ? { gx: opts.position.gx, gy: opts.position.gy }
      : getSummonPosition(state, summoner, opts.facingAngle);
  if (!pos) return null;

  const appearanceClass = stats.class && CLASS_KEYS.includes(stats.class) ? stats.class : 'knight';
  const hairColor = stats.hairColor != null ? stats.hairColor : (CLASS_LOOK[appearanceClass] || CLASS_LOOK.knight).hair;
  const unitPlayer = opts.ownerPlayer != null ? opts.ownerPlayer : summoner.player;

  const unit = {
    id: state.ids.next(),
    player: unitPlayer,
    x: pos.gx,
    y: pos.gy,
    level: stats.level != null ? stats.level : 1,
    name: stats.name != null ? stats.name : 'Summoned',
    class: appearanceClass,
    hairColor,
    hp: stats.hp != null ? stats.hp : 10,
    maxHp: stats.maxHp != null ? stats.maxHp : 10,
    mp: stats.mp != null ? stats.mp : 5,
    maxMp: stats.maxMp != null ? stats.maxMp : 5,
    str: stats.str != null ? stats.str : 5,
    agi: stats.agi != null ? stats.agi : 5,
    vit: stats.vit != null ? stats.vit : 5,
    dex: stats.dex != null ? stats.dex : 5,
    luk: stats.luk != null ? stats.luk : 5,
    int: stats.int != null ? stats.int : 5,
    range: stats.range != null ? stats.range : 1,
  };
  if (!opts.omitSummonedBy) unit.summonedBy = summoner.id;
  if (Array.isArray(skills) && skills.length > 0) unit.summonedSkills = skills;

  state.addUnit(unit);

  const actorIdPreservingTurn =
    state.phase === 'playing' && state.initiativeOrder.length > 0 && state.currentTurnIndex >= 0 && state.currentTurnIndex < state.initiativeOrder.length
      ? state.initiativeOrder[state.currentTurnIndex]
      : null;
  state.initiativeOrder = buildInitiativeOrder(state);
  if (actorIdPreservingTurn != null) {
    const newIdx = state.initiativeOrder.indexOf(actorIdPreservingTurn);
    if (newIdx >= 0) state.currentTurnIndex = newIdx;
  }

  ctx.emit('unitSummoned', { unit, grayscale: !!opts.useGrayscaleAppearance });
  ctx.emit('initiativeChanged', {});
  return unit;
}

export function reanimateDeadUnit(ctx, summoner, deadUnit) {
  const { state } = ctx;
  const idx = state.units.indexOf(deadUnit);
  if (idx === -1) return null;
  state.removeUnit(deadUnit);
  state.deadCorpseCount = Math.max(0, state.deadCorpseCount - 1);
  ctx.emit('unitRemoved', { unit: deadUnit });

  const appearanceClass = deadUnit.class && CLASS_KEYS.includes(deadUnit.class) ? deadUnit.class : 'knight';
  const hairColor = deadUnit.hairColor != null ? deadUnit.hairColor : (CLASS_LOOK[appearanceClass] || CLASS_LOOK.knight).hair;
  const q = (v) => Math.max(1, Math.floor(((v || 0) * 6) / 7));
  const stats = {
    name: 'Reanimated ' + deadUnit.name,
    class: appearanceClass,
    hairColor,
    level: deadUnit.level,
    hp: q(deadUnit.maxHp),
    maxHp: q(deadUnit.maxHp),
    mp: q(deadUnit.maxMp),
    maxMp: q(deadUnit.maxMp),
    str: q(deadUnit.str),
    agi: q(deadUnit.agi),
    vit: q(deadUnit.vit),
    dex: q(deadUnit.dex),
    luk: q(deadUnit.luk),
    int: q(deadUnit.int),
    range: deadUnit.range,
  };
  const skills =
    deadUnit.summonedSkills && deadUnit.summonedSkills.length > 0
      ? deadUnit.summonedSkills.slice()
      : (CLASS_SKILLS[appearanceClass] || []).slice();
  const occupied = new Set(state.units.filter((u) => u.hp > 0).map((u) => u.y * state.world.w + u.x));
  const cx = deadUnit.x;
  const cy = deadUnit.y;
  const corpseTileFree = isWalkable(state.world, cx, cy) && !occupied.has(cy * state.world.w + cx);
  const summonOpts = { useGrayscaleAppearance: true, ownerPlayer: summoner.player, omitSummonedBy: true };
  if (corpseTileFree) summonOpts.position = { gx: cx, gy: cy };
  const raised = summonUnit(ctx, summoner, stats, skills, summonOpts);
  if (raised) raised.isReanimated = true;
  return raised;
}

/**
 * Kill a unit: update bookkeeping, cascade summoned deaths, emit events.
 * Returns true if the currently-active initiative unit died.
 */
export function handleUnitDeath(ctx, unit, killer, opts = {}) {
  const { state } = ctx;
  state.removeUnitFromTileIndex(unit);
  if (!unit.isReanimated) state.deadCorpseCount++;
  unit.deathOrder = ++state.deathOrderSeq;
  recordClassKill(killer, unit, state.units);
  ctx.emit('floatingText', { gx: unit.x, gy: unit.y, text: 'DEAD', kind: 'damage' });
  ctx.emit('unitDied', { unit, killer });

  const summonedIds = state.units.filter((u) => u.summonedBy === unit.id && u.hp > 0).map((u) => u.id);
  summonedIds.forEach((summonedId) => {
    const summoned = state.getUnitById(summonedId);
    if (summoned) {
      summoned.hp = 0;
      handleUnitDeath(ctx, summoned, null, { skipSync: true });
    }
  });

  const activeDied =
    state.phase === 'playing' && state.initiativeOrder.length > 0 && unit.id === state.initiativeOrder[state.currentTurnIndex];

  return activeDied;
}
