import { describe, it, expect } from 'vitest';
import { GameState } from '../src/sim/state.js';
import { flatWorld, makeCtx } from './helpers.js';
import { buildInitiativeOrder } from '../src/sim/summon.js';
import { endTurn, checkGameOver } from '../src/sim/turn.js';

function unit(over = {}) {
  return { id: 1, player: 1, x: 0, y: 0, hp: 30, maxHp: 30, mp: 5, maxMp: 5, str: 12, agi: 8, vit: 10, dex: 15, luk: 4, int: 6, range: 1, ...over };
}

function playingState() {
  const state = new GameState({ seed: 1 });
  state.world = flatWorld(10, 10);
  state.phase = 'playing';
  const a = unit({ id: 1, player: 1, agi: 12, x: 1, y: 1 });
  const b = unit({ id: 2, player: 2, agi: 6, x: 2, y: 2 });
  state.units = [a, b];
  state.rebuildIndexes();
  state.initiativeOrder = buildInitiativeOrder(state);
  state.currentTurnIndex = 0;
  return state;
}

describe('turn / initiative', () => {
  it('orders initiative by agility descending', () => {
    const state = playingState();
    expect(state.initiativeOrder).toEqual([1, 2]);
    expect(state.getActiveUnit().id).toBe(1);
  });

  it('endTurn advances to the next unit and increments the turn count', () => {
    const state = playingState();
    const { ctx } = makeCtx(state);
    const payload = endTurn(ctx);
    expect(state.currentTurnIndex).toBe(1);
    expect(state.getActiveUnit().id).toBe(2);
    expect(state.turnCount).toBe(1);
    expect(state.currentPlayer).toBe(2);
    expect(payload).toEqual({ unit: state.getActiveUnit(), currentPlayer: 2, turnCount: 1 });
  });

  it('wrapping the order rebuilds initiative and resets the index', () => {
    const state = playingState();
    const { ctx } = makeCtx(state);
    endTurn(ctx); // -> unit 2
    endTurn(ctx); // wraps -> unit 1, new round
    expect(state.currentTurnIndex).toBe(0);
    expect(state.getActiveUnit().id).toBe(1);
    expect(state.turnCount).toBe(2);
  });

  it('endTurn clears the acted flags for the next unit', () => {
    const state = playingState();
    state.hasMoved = true;
    state.hasAttacked = true;
    const { ctx } = makeCtx(state);
    endTurn(ctx);
    expect(state.hasMoved).toBe(false);
    expect(state.hasAttacked).toBe(false);
  });

  it('checkGameOver declares the surviving player the winner', () => {
    const state = playingState();
    state.getUnitById(2).hp = 0;
    const { ctx, events } = makeCtx(state);
    checkGameOver(ctx);
    const go = events.find((e) => e.type === 'gameOver');
    expect(go).toBeTruthy();
    expect(go.payload.winner).toBe(1);
    expect(state.phase).toBe('gameover');
  });
});
