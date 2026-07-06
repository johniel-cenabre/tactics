import { describe, it, expect } from 'vitest';
import { GameState } from '../src/sim/state.js';
import { TileType } from '../src/world/tile-types.js';
import { flatWorld } from './helpers.js';
import { decidePlayingIntent } from '../src/ai/playing-ai.js';
import { FACING_FRONT_MULT } from '../src/sim/combat.js';
import {
  canKillWithBasicAttack,
  pickSpreadPlacementTile,
  maxBasicAttackDamage,
  tileThreatScore,
  safestTileAgainstThreat,
  pickDefensiveFacing,
} from '../src/ai/helpers.js';

function unit(over = {}) {
  return {
    id: 1,
    player: 1,
    x: 0,
    y: 0,
    hp: 30,
    maxHp: 30,
    mp: 10,
    maxMp: 10,
    str: 12,
    agi: 8,
    vit: 10,
    dex: 15,
    luk: 4,
    int: 6,
    range: 1,
    level: 1,
    class: 'knight',
    ...over,
  };
}

function playingState(over = {}) {
  const state = new GameState({ seed: 1 });
  state.world = flatWorld(10, 10);
  state.phase = 'playing';
  state.turnCount = 0;
  state.hasMoved = false;
  state.hasAttacked = false;
  Object.assign(state, over);
  state.rebuildIndexes();
  return state;
}

describe('AI helpers', () => {
  it('detects killable targets from basic attack damage', () => {
    const attacker = unit({ str: 20, dex: 20 });
    const target = unit({ id: 2, player: 2, hp: 5, vit: 1, luk: 1 });
    expect(maxBasicAttackDamage(attacker, target)).toBeGreaterThanOrEqual(5);
    expect(canKillWithBasicAttack(attacker, target)).toBe(true);
  });

  it('tileThreatScore weights back exposure higher than facing the threat', () => {
    const world = flatWorld(10, 10);
    const enemy = { x: 5, y: 6, range: 1, agi: 1 }; // directly south of the scored tile
    const facingEnemy = tileThreatScore(world, 5, 5, [enemy], { dx: 0, dy: 1 }); // faces south, toward it
    const backToEnemy = tileThreatScore(world, 5, 5, [enemy], { dx: 0, dy: -1 }); // faces north, back turned
    const neutral = tileThreatScore(world, 5, 5, [enemy]);
    expect(backToEnemy).toBeGreaterThan(facingEnemy);
    // Facing the threat applies the front multiplier; it must not be worse than the
    // facing-agnostic baseline (front multiplier <= 1).
    expect(facingEnemy).toBe(2 * FACING_FRONT_MULT);
    expect(neutral).toBe(2);
    expect(facingEnemy).toBeLessThanOrEqual(neutral);
  });

  it('pickDefensiveFacing turns toward an adjacent enemy', () => {
    const world = flatWorld(10, 10);
    const state = playingState();
    state.world = world;
    const self = unit({ x: 5, y: 5, facing: { dx: 0, dy: -1 } });
    const enemy = unit({ id: 2, player: 2, x: 5, y: 6, range: 1, agi: 1 });
    state.units = [self, enemy];
    state.rebuildIndexes();
    expect(pickDefensiveFacing(state, self, [enemy])).toEqual({ dx: 0, dy: 1 });
  });

  it('pickDefensiveFacing faces the closer of two enemies', () => {
    const world = flatWorld(10, 10);
    const state = playingState();
    state.world = world;
    const self = unit({ x: 5, y: 5, facing: { dx: 1, dy: 0 } });
    const near = unit({ id: 2, player: 2, x: 5, y: 6, range: 1, agi: 1 });
    const far = unit({ id: 3, player: 2, x: 8, y: 5, range: 1, agi: 1 });
    state.units = [self, near, far];
    state.rebuildIndexes();
    expect(pickDefensiveFacing(state, self, [near, far])).toEqual({ dx: 0, dy: 1 });
  });

  it('pickDefensiveFacing faces an adjacent enemy to the west', () => {
    const world = flatWorld(10, 10);
    const state = playingState();
    state.world = world;
    const self = unit({ x: 5, y: 5, facing: { dx: 0, dy: 1 } });
    const enemy = unit({ id: 2, player: 2, x: 4, y: 5, range: 1, agi: 1 });
    state.units = [self, enemy];
    state.rebuildIndexes();
    expect(pickDefensiveFacing(state, self, [enemy])).toEqual({ dx: -1, dy: 0 });
  });

  it('pickDefensiveFacing faces the nearest out-of-range enemy', () => {
    const world = flatWorld(10, 10);
    const state = playingState();
    state.world = world;
    const self = unit({ x: 5, y: 5, facing: { dx: 1, dy: 0 } });
    const enemy = unit({ id: 2, player: 2, x: 5, y: 7, range: 1, agi: 1 });
    state.units = [self, enemy];
    state.rebuildIndexes();
    expect(pickDefensiveFacing(state, self, [enemy])).toEqual({ dx: 0, dy: 1 });
  });

  it('safestTileAgainstThreat prefers not turning its back on equal-threat tiles', () => {
    const world = flatWorld(10, 10);
    const enemy = { x: 5, y: 5, range: 3, agi: 1 };
    const self = { x: 5, y: 2, facing: { dx: 0, dy: 1 } };
    // Both tiles are 2 away from the enemy and inside its range 3, but arriving at
    // (5,3) faces the enemy (front) while (5,7) turns the unit's back to it.
    const pick = safestTileAgainstThreat(
      world,
      [{ gx: 5, gy: 7, dist: 5 }, { gx: 5, gy: 3, dist: 1 }],
      [enemy],
      self,
    );
    expect(pick).toEqual({ gx: 5, gy: 3, dist: 1 });
  });

  it('picks placement tile farthest from allies', () => {
    const state = playingState();
    state.units = [
      unit({ id: 1, player: 2, x: 1, y: 1 }),
    ];
    state.rebuildIndexes();
    const tiles = [
      { gx: 1, gy: 2 },
      { gx: 5, gy: 5 },
      { gx: 2, gy: 1 },
    ];
    const pick = pickSpreadPlacementTile(state, 2, tiles);
    expect(pick).toEqual({ gx: 5, gy: 5 });
  });
});

describe('decidePlayingIntent', () => {
  it('attacks a killable enemy in range before advancing', () => {
    const state = playingState();
    const attacker = unit({ id: 1, player: 2, x: 3, y: 3, str: 25, dex: 20 });
    const weak = unit({ id: 2, player: 1, x: 4, y: 3, hp: 4, vit: 1 });
    const tank = unit({ id: 3, player: 1, x: 3, y: 4, hp: 40, vit: 20 });
    state.units = [attacker, weak, tank];
    state.initiativeOrder = [1];
    state.currentTurnIndex = 0;
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, attacker);
    expect(intent.type).toBe('attack');
    expect(intent.targetId).toBe(weak.id);
  });

  it('heals a low-HP ally when no kill is available', () => {
    const state = playingState();
    const paladin = unit({
      id: 1,
      player: 2,
      x: 2,
      y: 2,
      class: 'paladin',
      level: 2,
      mp: 10,
      hp: 20,
    });
    const ally = unit({ id: 2, player: 2, x: 3, y: 2, hp: 4, maxHp: 30 });
    const enemy = unit({ id: 3, player: 1, x: 8, y: 8, hp: 30 });
    state.units = [paladin, ally, enemy];
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, paladin);
    expect(intent.type).toBe('skill');
    expect(intent.targetId).toBe(ally.id);
  });

  it('moves toward center when turns are running out', () => {
    const state = playingState({ turnCount: 185, settings: { ...new GameState().settings, maxTurns: 200 } });
    const world = state.world;
    world.type[5][5] = TileType.CENTER;
    world.centerTiles = [{ gx: 5, gy: 5 }];

    const mover = unit({ id: 1, player: 2, x: 1, y: 1, agi: 12 });
    const enemy = unit({ id: 2, player: 1, x: 9, y: 9, hp: 30 });
    state.units = [mover, enemy];
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, mover);
    expect(intent.type).toBe('move');
    expect(intent.toGx !== mover.x || intent.toGy !== mover.y).toBe(true);
  });

  it('prefers a hittable target over an evasive low-value one', () => {
    const state = playingState();
    const attacker = unit({ id: 1, player: 2, x: 3, y: 3, str: 12, dex: 15, mp: 0 });
    const evasive = unit({ id: 2, player: 1, x: 4, y: 3, hp: 30, agi: 100, luk: 10 });
    const hittable = unit({ id: 3, player: 1, x: 2, y: 3, hp: 30, agi: 2, luk: 1 });
    state.units = [attacker, evasive, hittable];
    state.initiativeOrder = [1];
    state.currentTurnIndex = 0;
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, attacker);
    expect(intent.type).toBe('attack');
    expect(intent.targetId).toBe(hittable.id);
  });

  it('focuses an enemy threatening an ally when one is in danger', () => {
    const state = playingState();
    const attacker = unit({ id: 1, player: 2, x: 3, y: 3, str: 8, dex: 15, mp: 0 });
    const safeEnemy = unit({ id: 2, player: 1, x: 4, y: 3, hp: 30 });
    const threatEnemy = unit({ id: 3, player: 1, x: 2, y: 3, hp: 30 });
    const ally = unit({ id: 4, player: 2, x: 1, y: 3, hp: 30 });
    state.units = [attacker, safeEnemy, threatEnemy, ally];
    state.initiativeOrder = [1];
    state.currentTurnIndex = 0;
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, attacker);
    expect(intent.type).toBe('attack');
    expect(intent.targetId).toBe(threatEnemy.id);
  });

  it('moves behind an enemy to set up a flanking attack', () => {
    const state = playingState();
    // Enemy faces up (toward -y); the tile directly below it (5,4) is its back.
    const enemy = unit({ id: 2, player: 1, x: 5, y: 3, hp: 30, facing: { dx: 0, dy: -1 } });
    const mover = unit({ id: 1, player: 2, x: 5, y: 7, agi: 12, mp: 0 });
    state.units = [mover, enemy];
    state.initiativeOrder = [1];
    state.currentTurnIndex = 0;
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, mover);
    expect(intent.type).toBe('move');
    expect(intent.toGx).toBe(5);
    expect(intent.toGy).toBe(4);
  });

  it('level-2 units head for enemy base when plenty of turns remain', () => {
    const state = playingState({ turnCount: 10 });
    const world = state.world;
    world.type[0][5] = TileType.BASE_TOP;
    world.type[9][5] = TileType.BASE_BOTTOM;

    const lv2 = unit({ id: 1, player: 2, x: 5, y: 8, level: 2, agi: 10 });
    const enemy = unit({ id: 2, player: 1, x: 0, y: 0, hp: 30 });
    state.units = [lv2, enemy];
    state.rebuildIndexes();

    const intent = decidePlayingIntent(state, lv2);
    expect(intent.type).toBe('move');
    expect(intent.toGy).toBeGreaterThan(lv2.y);
  });
});
