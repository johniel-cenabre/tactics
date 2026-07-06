import { describe, it, expect } from 'vitest';
import { GameState } from '../src/sim/state.js';
import { flatWorld, makeCtx } from './helpers.js';
import {
  computeStrikeOutcome, computeStrikes, applyDamage,
  directionalMultiplier, FACING_FRONT_MULT, FACING_SIDE_MULT, FACING_BACK_MULT,
} from '../src/sim/combat.js';
import { Rng } from '../src/core/rng.js';

function unit(over = {}) {
  return { id: 1, player: 1, x: 0, y: 0, hp: 30, maxHp: 30, mp: 5, maxMp: 5, str: 12, agi: 8, vit: 10, dex: 20, luk: 4, int: 6, range: 1, ...over };
}

describe('combat', () => {
  it('computeStrikeOutcome is deterministic for a seed', () => {
    const a = unit();
    const b = unit({ id: 2, player: 2 });
    const r1 = new Rng(5);
    const r2 = new Rng(5);
    expect(computeStrikeOutcome(a, b, r1)).toEqual(computeStrikeOutcome(a, b, r2));
  });

  it('a high-dex attacker vs low-agi target hits for >=1', () => {
    const a = unit({ dex: 100 });
    const b = unit({ id: 2, player: 2, agi: 1, luk: 1 });
    const out = computeStrikeOutcome(a, b, new Rng(1));
    expect(out.isHit).toBe(true);
    expect(out.damage).toBeGreaterThanOrEqual(1);
  });

  it('doubleAttack yields two strikes', () => {
    const a = unit({ tempBuff: { doubleAttack: true } });
    const b = unit({ id: 2, player: 2 });
    expect(computeStrikes(a, b, new Rng(3)).length).toBe(2);
  });

  it('applyDamage reduces hp and reports death via onDeath', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const attacker = unit();
    const victim = unit({ id: 2, player: 2, hp: 5 });
    state.units = [attacker, victim];
    const { ctx, deaths } = makeCtx(state);
    applyDamage(ctx, { attacker, victim, amount: 5, preHit: true });
    expect(victim.hp).toBe(0);
    expect(deaths.length).toBe(1);
    expect(deaths[0].victim).toBe(victim);
  });

  it('directional multiplier ranks back > side > front', () => {
    const victim = unit({ x: 5, y: 5, facing: { dx: 0, dy: -1 } }); // faces up (-y)
    const front = directionalMultiplier({ x: 5, y: 4 }, victim);
    const back = directionalMultiplier({ x: 5, y: 6 }, victim);
    const side = directionalMultiplier({ x: 6, y: 5 }, victim);
    expect(front).toBe(FACING_FRONT_MULT);
    expect(side).toBe(FACING_SIDE_MULT);
    expect(back).toBe(FACING_BACK_MULT);
    expect(back).toBeGreaterThan(side);
    expect(side).toBeGreaterThan(front);
  });

  it('directional multiplier is 1 when the victim has no facing', () => {
    const victim = unit({ x: 5, y: 5 });
    expect(directionalMultiplier({ x: 5, y: 6 }, victim)).toBe(1);
  });

  it('applyDamage applies the flanking bonus for a back attack', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const attacker = unit({ x: 5, y: 6 });
    const victim = unit({ id: 2, player: 2, x: 5, y: 5, hp: 30, maxHp: 30, facing: { dx: 0, dy: -1 } });
    state.units = [attacker, victim];
    const { ctx } = makeCtx(state);
    applyDamage(ctx, { attacker, victim, amount: 10, preHit: true });
    expect(victim.hp).toBe(30 - Math.round(10 * FACING_BACK_MULT)); // 30 - 15 = 15
  });

  it('heals never exceed maxHp', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const u = unit({ hp: 28, maxHp: 30 });
    state.units = [u];
    const { ctx } = makeCtx(state);
    applyDamage(ctx, { attacker: u, victim: u, amount: 10, isHeal: true });
    expect(u.hp).toBe(30);
  });
});
