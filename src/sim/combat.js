// Combat resolution: hit/miss + damage math, HP application (with vodoo mirror
// and death), and knockback. Pure with respect to rendering: it mutates state
// and emits domain events via the provided SimContext.
//
// SimContext = { state, rng, emit(type,payload), onDeath(victim, killer) }

import { getEffectiveStat } from './unit.js';
import { getKnockbackResult } from '../world/grid.js';

// Flanking multipliers: striking a unit from behind hurts most, the sides less,
// and meeting it head-on the least.
export const FACING_FRONT_MULT = 0.95;
export const FACING_SIDE_MULT = 1.03;
export const FACING_BACK_MULT = 1.12;

/**
 * Damage multiplier based on where the attacker stands relative to the victim's
 * facing. Uses the dot product of the victim's facing with the direction to the
 * attacker: pointing at the attacker = front, away = back, otherwise a flank.
 */
export function directionalMultiplier(attacker, victim) {
  const f = victim && victim.facing;
  if (!attacker || !f || (f.dx === 0 && f.dy === 0)) return 1;
  const ax = attacker.x - victim.x;
  const ay = attacker.y - victim.y;
  if (ax === 0 && ay === 0) return 1;
  const al = Math.hypot(ax, ay);
  const fl = Math.hypot(f.dx, f.dy);
  const dot = (ax / al) * (f.dx / fl) + (ay / al) * (f.dy / fl);
  if (dot >= 0.5) return FACING_FRONT_MULT;
  if (dot <= -0.5) return FACING_BACK_MULT;
  return FACING_SIDE_MULT;
}

/** Roll a single basic-attack strike outcome. */
export function computeStrikeOutcome(attacker, target, rng) {
  const evasionMax = getEffectiveStat(target, 'agi') * 0.7 + getEffectiveStat(target, 'luk') * 0.3;
  const evasionRoll = rng.next() * Math.max(0.001, evasionMax);
  const isHit = evasionRoll <= getEffectiveStat(attacker, 'dex');
  let damage = 0;
  if (isHit) {
    const raw =
      getEffectiveStat(attacker, 'str') * 0.7 +
      getEffectiveStat(attacker, 'dex') * 0.2 +
      getEffectiveStat(attacker, 'int') * 0.1 -
      (getEffectiveStat(target, 'vit') * 0.3 + getEffectiveStat(target, 'luk') * 0.2);
    damage = Math.max(1, Math.floor(raw));
  }
  return { isHit, damage };
}

/** Strikes for a basic attack: one, plus a second if doubleAttack is active. */
export function computeStrikes(attacker, target, rng) {
  const strikes = [computeStrikeOutcome(attacker, target, rng)];
  if (attacker.tempBuff && attacker.tempBuff.doubleAttack === true && target.hp > 0) {
    strikes.push(computeStrikeOutcome(attacker, target, rng));
  }
  return strikes;
}

/**
 * When a unit with tempBuff.vodoo loses HP from a hit, mirror that loss onto the
 * linked enemy. Does not recurse.
 */
export function applyVodooMirrorHpLoss(ctx, damagedUnit, hpLost) {
  if (!damagedUnit || hpLost <= 0) return;
  const list = ctx.state.units;
  const tb = damagedUnit.tempBuff;
  if (!tb || tb.vodoo == null || (tb.duration != null && tb.duration <= 0)) return;
  const victimId = damagedUnit.id;
  for (let i = 0; i < list.length; i++) {
    const w = list[i];
    if (!w || w.hp <= 0 || w.id === victimId) continue;
    if (tb.vodoo === w.id) {
      w.hp = Math.max(0, w.hp - hpLost);
      ctx.emit('floatingText', { gx: w.x, gy: w.y, text: String(hpLost), kind: 'vodoo' });
      ctx.emit('unitStatsChanged', { unit: w });
      if (w.hp <= 0 && ctx.onDeath) ctx.onDeath(w, damagedUnit);
      break;
    }
  }
}

/**
 * Central HP change. Handles heal, spell/physical hit roll, floating text,
 * vodoo mirror, and death. Returns whether it hit (heals always "hit").
 *
 * @param {object} opts
 * @param {object} opts.attacker source unit (for hit roll / death credit)
 * @param {object} opts.victim
 * @param {number} opts.amount
 * @param {boolean} [opts.isHeal]
 * @param {boolean} [opts.isSpell] spells auto-hit
 * @param {boolean} [opts.preHit] force hit result (basic attack strikes)
 * @param {boolean} [opts.selfCost] voluntary HP cost (e.g. Sacrifice) — not a hit reaction
 */
export function applyDamage(ctx, opts) {
  const { attacker, victim } = opts;
  let amount = opts.amount;
  if (opts.isHeal) {
    victim.hp = Math.min(victim.maxHp, victim.hp + amount);
    ctx.emit('floatingText', { gx: victim.x, gy: victim.y, text: `+${amount}`, kind: 'heal' });
    ctx.emit('unitStatsChanged', { unit: victim });
    return true;
  }

  const isSelfDamage = victim === attacker;
  let isHit = true;
  if (opts.preHit !== undefined) {
    isHit = opts.preHit;
  } else if (!isSelfDamage && !opts.isSpell) {
    const evasionMax = getEffectiveStat(victim, 'agi') * 0.7 + getEffectiveStat(victim, 'luk') * 0.3;
    const evasionRoll = ctx.rng.next() * Math.max(0.001, evasionMax);
    isHit = evasionRoll <= getEffectiveStat(attacker, 'dex');
  }

  if (isHit) {
    // Flanking bonus for positional attacks (skipped for self-damage / environmental).
    if (!isSelfDamage && !opts.ignoreFacing) {
      amount = Math.max(1, Math.round(amount * directionalMultiplier(attacker, victim)));
    }
    victim.hp = Math.max(0, victim.hp - amount);
    ctx.emit('floatingText', { gx: victim.x, gy: victim.y, text: String(amount), kind: 'damage' });
    ctx.emit('unitStatsChanged', { unit: victim, selfCost: !!opts.selfCost });
    applyVodooMirrorHpLoss(ctx, victim, amount);
    if (victim.hp <= 0 && ctx.onDeath) ctx.onDeath(victim, attacker);
  } else {
    ctx.emit('floatingText', { gx: victim.x, gy: victim.y, text: 'MISS', kind: 'miss' });
  }
  return isHit;
}

/**
 * Apply a knockback from attacker onto target, moving it and applying collision
 * damage. Emits a 'unitKnockback' event with old/new coords for animation.
 */
export function applyKnockback(ctx, attacker, target, tilesToPush) {
  const { state } = ctx;
  const knock = getKnockbackResult(state.world, state.units, attacker, target, tilesToPush);
  const oldGx = target.x;
  const oldGy = target.y;
  target.x = knock.newGx;
  target.y = knock.newGy;
  state.updateUnitTileIndex(target, oldGx, oldGy);
  ctx.emit('unitKnockback', { unit: target, from: { gx: oldGx, gy: oldGy }, to: { gx: knock.newGx, gy: knock.newGy } });
  if (knock.collisionDamage > 0) {
    applyDamage(ctx, { attacker, victim: target, amount: knock.collisionDamage, ignoreFacing: true });
    if (target.hp > 0) ctx.emit('powerupCheck', { unit: target });
  } else {
    if (target.hp > 0) ctx.emit('powerupCheck', { unit: target });
  }
}
