import { describe, it, expect } from 'vitest';
import { GameState } from '../src/sim/state.js';
import { createUnit } from '../src/sim/unit.js';
import { evaluateStory } from '../src/sim/story.js';
import { computeDraftOrder, startDraft } from '../src/sim/draft.js';
import { TileType } from '../src/world/tile-types.js';
import { flatWorld, makeCtx } from './helpers.js';

function storyState(objectives, units) {
  const state = new GameState({ seed: 1 });
  state.world = flatWorld(8, 8);
  state.phase = 'playing';
  state.gameMode = 'story';
  state.story = { stageId: 'test', stageIndex: 0, objectives };
  state.turnCount = 0;
  let id = 1;
  for (const u of units) {
    state.addUnit(createUnit({
      id: id++,
      player: u.player,
      classKey: u.class || 'knight',
      x: u.x,
      y: u.y,
      level: u.level || 1,
      tag: u.tag || null,
    }));
  }
  return state;
}

describe('computeDraftOrder solo', () => {
  it('builds snake order for two players', () => {
    expect(computeDraftOrder(3)).toEqual([1, 2, 2, 1, 1, 2]);
  });

  it('builds solo order for player 1 only', () => {
    expect(computeDraftOrder(3, [1])).toEqual([1, 1, 1]);
    expect(computeDraftOrder(1, [1])).toEqual([1]);
  });
});

describe('startDraft story options', () => {
  it('sets totalPicks and restricted class pool for solo draft', () => {
    const state = new GameState({ seed: 42 });
    state.world = flatWorld(8, 8);
    const { ctx } = makeCtx(state, 42);
    startDraft(ctx, {
      players: [1],
      picksPerPlayer: 2,
      classPool: new Set(['knight', 'mage']),
    });
    expect(state.draft.order).toEqual([1, 1]);
    expect(state.draft.totalPicks).toBe(2);
    expect(state.draft.availableClasses.has('knight')).toBe(true);
    expect(state.draft.availableClasses.has('mage')).toBe(true);
    expect(state.draft.availableClasses.has('assassin')).toBe(false);
  });
});

describe('evaluateStory', () => {
  it('wins on eliminate when all P2 core units are dead', () => {
    const state = storyState(
      { win: [{ type: 'eliminate' }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 2, y: 2 },
      ],
    );
    expect(evaluateStory(state).outcome).toBe(null);
    state.units.find((u) => u.player === 2).hp = 0;
    expect(evaluateStory(state).outcome).toBe('win');
  });

  it('loses when all P1 core units are dead', () => {
    const state = storyState(
      { win: [{ type: 'eliminate' }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 2, y: 2 },
      ],
    );
    state.units.find((u) => u.player === 1).hp = 0;
    expect(evaluateStory(state).outcome).toBe('lose');
  });

  it('wins on boss when tagged enemy dies', () => {
    const state = storyState(
      { win: [{ type: 'boss', tag: 'boss' }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 3, y: 3 },
        { player: 2, x: 4, y: 4, tag: 'boss', class: 'berserker' },
      ],
    );
    expect(evaluateStory(state).outcome).toBe(null);
    state.units.find((u) => u.tag === 'boss').hp = 0;
    expect(evaluateStory(state).outcome).toBe('win');
  });

  it('loses on protect when VIP dies', () => {
    const state = storyState(
      { win: [{ type: 'eliminate' }], lose: [{ type: 'protect', tag: 'vip' }] },
      [
        { player: 1, x: 1, y: 1, tag: 'vip' },
        { player: 1, x: 2, y: 1 },
        { player: 2, x: 4, y: 4 },
      ],
    );
    state.units.find((u) => u.tag === 'vip').hp = 0;
    expect(evaluateStory(state).outcome).toBe('lose');
  });

  it('wins on survive after enough turns', () => {
    const state = storyState(
      { win: [{ type: 'survive', turns: 5 }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 4, y: 4 },
      ],
    );
    expect(evaluateStory(state).outcome).toBe(null);
    state.turnCount = 5;
    expect(evaluateStory(state).outcome).toBe('win');
  });

  it('wins on reach when a P1 unit stands on a target tile', () => {
    const state = storyState(
      { win: [{ type: 'reach', tiles: [{ x: 7, y: 7 }] }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 4, y: 4 },
      ],
    );
    expect(evaluateStory(state).outcome).toBe(null);
    const u = state.units.find((x) => x.player === 1);
    u.x = 7;
    u.y = 7;
    expect(evaluateStory(state).outcome).toBe('win');
  });

  it('wins on reach enemyBase when a P1 unit stands on BASE_TOP', () => {
    const state = storyState(
      { win: [{ type: 'reach', target: 'enemyBase' }], lose: [] },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 4, y: 4 },
      ],
    );
    state.world.type[0][0] = TileType.BASE_TOP;
    expect(evaluateStory(state).outcome).toBe(null);
    const u = state.units.find((x) => x.player === 1);
    u.x = 0;
    u.y = 0;
    expect(evaluateStory(state).outcome).toBe('win');
  });

  it('requires all win objectives', () => {
    const state = storyState(
      {
        win: [
          { type: 'boss', tag: 'boss' },
          { type: 'eliminate' },
        ],
        lose: [],
      },
      [
        { player: 1, x: 1, y: 1 },
        { player: 2, x: 3, y: 3 },
        { player: 2, x: 4, y: 4, tag: 'boss' },
      ],
    );
    state.units.find((u) => u.tag === 'boss').hp = 0;
    expect(evaluateStory(state).outcome).toBe(null); // grunt still alive
    state.units.find((u) => u.player === 2 && !u.tag).hp = 0;
    expect(evaluateStory(state).outcome).toBe('win');
  });
});
