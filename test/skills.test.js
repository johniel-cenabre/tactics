import { describe, it, expect } from 'vitest';
import { GameState } from '../src/sim/state.js';
import { flatWorld, makeCtx } from './helpers.js';
import { applySkillEffect } from '../src/sim/skills.js';

function unit(over = {}) {
  return { id: 1, player: 1, x: 0, y: 0, hp: 30, maxHp: 30, mp: 5, maxMp: 5, str: 12, agi: 8, vit: 10, dex: 15, luk: 4, int: 10, range: 1, ...over };
}

describe('skill effects', () => {
  it('manaDrain moves MP from target to caster (not STR — original bug fixed)', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const caster = unit({ int: 20, mp: 2 });
    const target = unit({ id: 2, player: 2, x: 1, y: 0, int: 30, mp: 8, str: 12 });
    state.units = [caster, target];
    const { ctx } = makeCtx(state);
    const targetStrBefore = target.str;
    applySkillEffect(ctx, caster, target, { effectKey: 'manaDrain', target: 'enemy', range: 3 });
    expect(target.str).toBe(targetStrBefore); // STR untouched
    expect(target.mp).toBeLessThan(8); // MP drained
    expect(caster.mp).toBeGreaterThan(2); // MP gained
  });

  it('arcaneBolt damages an enemy', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const caster = unit({ int: 30 });
    const target = unit({ id: 2, player: 2, x: 2, y: 0, int: 2, luk: 1, hp: 30 });
    state.units = [caster, target];
    const { ctx } = makeCtx(state);
    applySkillEffect(ctx, caster, target, { effectKey: 'arcaneBolt', target: 'enemy', range: 3 });
    expect(target.hp).toBeLessThan(30);
  });

  it('chakra heals the caster', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const caster = unit({ int: 20, hp: 10, maxHp: 30 });
    state.units = [caster];
    const { ctx } = makeCtx(state);
    applySkillEffect(ctx, caster, null, { effectKey: 'chakra', target: 'self', range: 0 });
    expect(caster.hp).toBeGreaterThan(10);
  });

  it('sacrifice heals ally and costs caster HP without killing at 4+ HP', () => {
    const state = new GameState({ seed: 1 });
    state.world = flatWorld();
    const caster = unit({ class: 'paladin', int: 20, hp: 10, maxHp: 30 });
    const ally = unit({ id: 2, player: 1, x: 1, y: 0, hp: 5, maxHp: 30 });
    state.units = [caster, ally];
    const { ctx } = makeCtx(state);
    applySkillEffect(ctx, caster, ally, { effectKey: 'sacrifice', target: 'ally', range: 3 });
    expect(ally.hp).toBeGreaterThan(5);
    expect(caster.hp).toBe(7);
    expect(caster.hp).toBeGreaterThan(0);
  });
});
