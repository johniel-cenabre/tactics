// Skill system: availability, targeting, and effect application. Effect behavior
// is delegated to the effect registry (sim/effects). This module builds the
// EffectContext that handlers use and wires it to combat + summon + events.

import { CLASS_SKILLS, getSkillEffectDisplayTitle } from '../data/skills.js';
import { getEffectiveStat } from './unit.js';
import { hasLineOfSight, getTilesInManhattanRange } from '../world/grid.js';
import { applyDamage, applyKnockback } from './combat.js';
import { getEffectHandler } from './effects/index.js';

/** Skills for a unit with disabled flags computed. */
export function getAvailableSkills(state, unit) {
  if (!unit) return [];
  const skillList =
    unit.summonedSkills && unit.summonedSkills.length > 0
      ? unit.summonedSkills
      : unit.class && CLASS_SKILLS[unit.class]
        ? CLASS_SKILLS[unit.class]
        : [];
  return skillList.map((s) => ({
    ...s,
    disabled:
      s.disabled === true ||
      unit.level < (s.level || 1) ||
      (s.hpCost && unit.hp < s.hpCost) ||
      (s.cost != null && unit.mp < s.cost) ||
      (s.effectKey === 'reanimate' && state.deadCorpseCount <= 0),
  }));
}

/** Valid target tiles (with the target unit) for a skill. */
export function getSkillTargetTiles(state, unit, skill) {
  const out = [];
  const range = skill.range || 0;
  const { world } = state;
  const ux = unit.x;
  const uy = unit.y;
  if (skill.target === 'self') {
    out.push({ gx: ux, gy: uy, targetUnit: null });
    return out;
  }
  for (const o of state.units) {
    if (o.hp <= 0) continue;
    const d = Math.abs(ux - o.x) + Math.abs(uy - o.y);
    if (d > range) continue;
    if (skill.target === 'enemy') {
      if (o.player === unit.player) continue;
    } else if (skill.target === 'ally') {
      if (o.player !== unit.player) continue;
    }
    if (range >= 2 && !hasLineOfSight(world, ux, uy, o.x, o.y)) continue;
    out.push({ gx: o.x, gy: o.y, targetUnit: o });
  }
  return out;
}

/** All tiles within a skill's range (for highlighting). */
export function getSkillRangeTiles(state, unit, skill) {
  const { world } = state;
  const range = skill.range || 0;
  const tiles = [];
  if (skill.target === 'self') {
    tiles.push({ gx: unit.x, gy: unit.y });
    return tiles;
  }
  const distMap = getTilesInManhattanRange(world, unit.x, unit.y, range);
  distMap.forEach((d, k) => {
    const gx = k % world.w;
    const gy = (k / world.w) | 0;
    if (range >= 2 && !hasLineOfSight(world, unit.x, unit.y, gx, gy)) return;
    tiles.push({ gx, gy });
  });
  return tiles;
}

/**
 * Apply a skill's effect. Assumes MP/HP costs and targeting were validated by
 * the caller. `summonApi.reanimate` is optional (only reanimate needs it).
 */
export function applySkillEffect(ctx, unit, target, skill, summonApi = {}) {
  const effectKey = skill.effectKey;
  const handler = getEffectHandler(effectKey);
  const displayName = getSkillEffectDisplayTitle(effectKey);
  ctx.emit('floatingText', { gx: unit.x, gy: unit.y, text: displayName, kind: 'skill-name' });

  const effectCtx = {
    u: unit,
    t: target,
    state: ctx.state,
    rng: ctx.rng,
    getEff: getEffectiveStat,
    damage: (victim, d, opts = {}) =>
      applyDamage(ctx, {
        attacker: unit,
        victim,
        amount: d,
        isHeal: opts.heal,
        isSpell: opts.spell,
        preHit: opts.preHit,
      }),
    statText: (gx, gy, text, isBuff) =>
      ctx.emit('floatingText', { gx, gy, text, kind: isBuff ? 'buff' : 'debuff' }),
    knockback: (u, t, tiles) => applyKnockback(ctx, u, t, tiles),
    reanimate: summonApi.reanimate,
  };

  if (handler) handler(effectCtx);

  ctx.emit('unitStatsChanged', { unit });
  if (target) ctx.emit('unitStatsChanged', { unit: target });
  ctx.emit('skillResolved', { unit, target, skill });
}
