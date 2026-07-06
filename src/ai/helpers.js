// Shared playing-phase AI utilities: pathing heuristics, combat estimates, and
// tile scoring. Pure functions over GameState so they are testable headlessly.

import { MIN_REACHABLE_MOVES } from '../config.js';
import {
  getReachable, getPath, getPathToNearestOfTargets,
  hasLineOfSight, hasActiveTempAgiDebuff, isWalkable,
} from '../world/grid.js';
import { getEffectiveStat, facingToward } from '../sim/unit.js';
import { getAvailableSkills } from '../sim/skills.js';
import { directionalMultiplier } from '../sim/combat.js';
import { getCenterTiles, getEnemyBaseTiles } from '../world/worldgen.js';

export const LOW_HP_THRESHOLD = 0.25;
export const CRITICAL_HP_RATIO = 0.03;
export const HEAL_HP_RATIO_THRESHOLD = 0.5;
export const LOW_HP_ENEMY_THRESHOLD = 0.35;
// A basic attack is only counted on for securing a kill when it lands this often.
export const RELIABLE_HIT_CHANCE = 0.8;

export const DAMAGE_KEYS = new Set([
  'arcaneBolt', 'feast', 'pierce', 'snipe', 'berserk', 'drain', 'shuriken', 'chokuto',
  'bite', 'execute', 'judgement', 'exorcise', 'ambush', 'powerShot', 'concoct',
  'bloodSuck', 'gnaw', 'malediction', 'skewer',
]);
export const HEAL_KEYS = new Set(['chakra', 'sacrifice']);
export const BUFF_KEYS = new Set([
  'brave', 'focus', 'bloodlust', 'iaido', 'howl', 'mantra', 'sanctuary', 'windWalk',
  'forge', 'fortify', 'warCry', 'foresight', 'overheal', 'rapid', 'vodoo',
]);
export const DEBUFF_KEYS = new Set(['impale', 'poison', 'gaze', 'debilitate', 'bash', 'infect']);
export const PERMANENT_DEBUFF_KEYS = new Set([
  'dominate', 'manaDrain', 'weaken', 'cripple', 'hex', 'blind', 'raid',
]);
export const SUMMON_KEYS = new Set(['reanimate']);

export function manhattan(ax, ay, bx, by) {
  return Math.abs(ax - bx) + Math.abs(ay - by);
}

export function turnsLeft(state) {
  return state.settings.maxTurns - state.turnCount;
}

export function hpRatio(unit) {
  return unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
}

export function isCriticalHp(unit) {
  return unit.maxHp > 0 && hpRatio(unit) < CRITICAL_HP_RATIO;
}

export function isLowHpUnit(unit) {
  return unit.maxHp > 0 && hpRatio(unit) < LOW_HP_THRESHOLD;
}

export function livingEnemies(state, unit) {
  return state.units.filter((u) => u.hp > 0 && u.player !== unit.player);
}

export function livingAllies(state, unit) {
  return state.units.filter((u) => u.hp > 0 && u.player === unit.player && u.id !== unit.id);
}

export function occupiedKeys(state, excludeUnitId = null) {
  const keys = new Set();
  for (const u of state.units) {
    if (u.hp <= 0 || u.id === excludeUnitId) continue;
    keys.add(state.tileKey(u.x, u.y));
  }
  return keys;
}

export function unitAgiMoves(unit) {
  const eff = getEffectiveStat(unit, 'agi');
  return hasActiveTempAgiDebuff(unit) ? Math.max(0, eff) : Math.max(MIN_REACHABLE_MOVES, eff);
}

export function getReachableTiles(state, unit) {
  const { world } = state;
  const moves = unitAgiMoves(unit);
  const map = getReachable(world, unit.x, unit.y, moves, state.units, unit);
  const occupied = occupiedKeys(state, unit.id);
  const tiles = [];
  map.forEach((d, k) => {
    if (d === 0 || occupied.has(k)) return;
    tiles.push({ gx: k % world.w, gy: (k / world.w) | 0, dist: d });
  });
  return tiles;
}

export function effectiveRange(state, unit, { skipSkills = false } = {}) {
  const attackRange = unit.range != null ? unit.range : 1;
  if (skipSkills) return attackRange;
  const skills = getAvailableSkills(state, unit).filter(
    (s) => !s.disabled && unit.mp >= s.cost && s.target === 'enemy',
  );
  const maxSkill = skills.length ? Math.max(...skills.map((s) => s.range || 0)) : 0;
  return Math.max(attackRange, maxSkill);
}

export function isRangedUnitForAi(unit, effRange, skipSkills) {
  if (skipSkills) return false;
  return unit.level >= 2 && effRange >= 2;
}

export function estimateBasicDamage(attacker, target) {
  const raw =
    getEffectiveStat(attacker, 'str') * 0.7 +
    getEffectiveStat(attacker, 'dex') * 0.2 +
    getEffectiveStat(attacker, 'int') * 0.1 -
    (getEffectiveStat(target, 'vit') * 0.3 + getEffectiveStat(target, 'luk') * 0.2);
  return Math.max(1, Math.floor(raw));
}

export function estimateHitChance(attacker, target) {
  const evasionMax =
    getEffectiveStat(target, 'agi') * 0.7 + getEffectiveStat(target, 'luk') * 0.3;
  const dex = getEffectiveStat(attacker, 'dex');
  return Math.min(1, dex / Math.max(0.001, evasionMax));
}

/** Flanking damage multiplier for an attacker standing at (gx, gy) hitting target. */
export function attackMultiplierFrom(gx, gy, target) {
  return directionalMultiplier({ x: gx, y: gy }, target);
}

/** Optimistic max basic-attack damage (assumes hits; counts double attack + flanking). */
export function maxBasicAttackDamage(attacker, target) {
  let dmg = estimateBasicDamage(attacker, target);
  if (attacker.tempBuff?.doubleAttack === true) dmg *= 2;
  return dmg * directionalMultiplier(attacker, target);
}

export function canKillWithBasicAttack(attacker, target) {
  return maxBasicAttackDamage(attacker, target) >= target.hp;
}

/** Expected basic-attack damage, discounted by how often the attack lands. */
export function estimateExpectedDamage(attacker, target) {
  return maxBasicAttackDamage(attacker, target) * estimateHitChance(attacker, target);
}

/** A kill we can count on: lethal on hit AND lands reliably (not an evasive target). */
export function reliablyKillsWithBasicAttack(attacker, target) {
  return (
    canKillWithBasicAttack(attacker, target) &&
    estimateHitChance(attacker, target) >= RELIABLE_HIT_CHANCE
  );
}

export function getEnemiesInRangeFrom(world, gx, gy, enemies, range) {
  const list = [];
  for (const o of enemies) {
    const d = manhattan(gx, gy, o.x, o.y);
    if (d > 0 && d <= range && hasLineOfSight(world, gx, gy, o.x, o.y)) {
      list.push({ target: o, dist: d });
    }
  }
  return list;
}

export function buildEnemiesInRangeByTile(world, reachableTiles, enemies, range) {
  const map = new Map();
  for (const t of reachableTiles) {
    const k = t.gy * world.w + t.gx;
    map.set(k, getEnemiesInRangeFrom(world, t.gx, t.gy, enemies, range));
  }
  return map;
}

export function farthestReachableOnPath(path, reachableKeys, world) {
  if (!path || path.length <= 1) return null;
  for (let i = path.length - 1; i >= 1; i--) {
    const p = path[i];
    if (reachableKeys.has(p.y * world.w + p.x)) return { gx: p.x, gy: p.y };
  }
  return null;
}

export function farthestUnoccupiedOnPath(path, maxSteps, occupied, world) {
  if (!path || path.length <= 1) return null;
  const limit = Math.min(maxSteps, path.length - 1);
  for (let i = limit; i >= 1; i--) {
    const p = path[i];
    if (!occupied.has(p.y * world.w + p.x)) return { gx: p.x, gy: p.y };
  }
  return null;
}

export function farthestReachableTowardTargets(tiles, targets) {
  if (!targets.length || !tiles.length) return null;
  let best = null;
  let bestMinDist = Infinity;
  for (const t of tiles) {
    let minDist = Infinity;
    for (const g of targets) minDist = Math.min(minDist, manhattan(t.gx, t.gy, g.gx, g.gy));
    if (minDist < bestMinDist) {
      bestMinDist = minDist;
      best = t;
    }
  }
  return best;
}

/**
 * How exposed a tile is to enemy attacks. An enemy that can strike the tile right
 * now counts double; one that could close the gap and strike counts single. Higher
 * is more dangerous.
 *
 * When `selfFacing` is supplied, an enemy already in range is further weighted by
 * the flanking multiplier it would earn against that facing — so standing with
 * your back to a nearby threat scores as more dangerous than facing it. Potential
 * (out-of-range) threats stay facing-agnostic because the enemy still gets to
 * choose its approach angle.
 */
export function tileThreatScore(world, gx, gy, enemies, selfFacing = null) {
  let score = 0;
  for (const e of enemies) {
    const d = manhattan(gx, gy, e.x, e.y);
    if (d === 0) continue;
    const r = e.range != null ? e.range : 1;
    if (d <= r && hasLineOfSight(world, gx, gy, e.x, e.y)) {
      const mult = selfFacing ? directionalMultiplier(e, { x: gx, y: gy, facing: selfFacing }) : 1;
      score += 2 * mult;
      continue;
    }
    const reach = r + Math.max(1, getEffectiveStat(e, 'agi'));
    if (d <= reach) score += 1;
  }
  return score;
}

/**
 * Reachable tile with the least incoming threat; ties broken by distance to enemies.
 * When `self` is supplied, threat is flank-aware: each tile is scored using the
 * facing the unit would arrive with (the direction it moves to reach the tile), so
 * among equally exposed tiles it prefers ones that don't turn its back on a threat.
 */
export function safestTileAgainstThreat(world, tiles, enemies, self = null) {
  if (!tiles.length) return null;
  if (!enemies.length) return tiles[0];
  let best = null;
  let bestThreat = Infinity;
  let bestDist = -1;
  for (const t of tiles) {
    const facing = self ? (facingToward(self.x, self.y, t.gx, t.gy) || self.facing) : null;
    const threat = tileThreatScore(world, t.gx, t.gy, enemies, facing);
    let minDist = Infinity;
    for (const e of enemies) minDist = Math.min(minDist, manhattan(t.gx, t.gy, e.x, e.y));
    if (threat < bestThreat || (threat === bestThreat && minDist > bestDist)) {
      bestThreat = threat;
      bestDist = minDist;
      best = t;
    }
  }
  return best;
}

/** Ids of enemies that can currently hit at least one ally (pressure to relieve). */
export function enemiesThreateningAllies(state, enemies, allies) {
  const { world } = state;
  const ids = new Set();
  for (const en of enemies) {
    const r = en.range != null ? en.range : 1;
    for (const ally of allies) {
      const d = manhattan(en.x, en.y, ally.x, ally.y);
      if (d > 0 && d <= r && hasLineOfSight(world, en.x, en.y, ally.x, ally.y)) {
        ids.add(en.id);
        break;
      }
    }
  }
  return ids;
}

export function safestReachableTile(tiles, enemies) {
  if (!tiles.length) return null;
  if (!enemies.length) return tiles[0];
  let best = null;
  let bestMinDist = -1;
  for (const t of tiles) {
    let minDist = Infinity;
    for (const e of enemies) minDist = Math.min(minDist, manhattan(t.gx, t.gy, e.x, e.y));
    if (minDist > bestMinDist) {
      bestMinDist = minDist;
      best = t;
    }
  }
  return best;
}

export function bestRetreatTowardAlliesTile(tiles, unit, enemies, allies) {
  if (!tiles.length) return null;
  if (!enemies.length) return tiles[0];
  const isHighHp = hpRatio(unit) >= 0.6;
  let best = null;
  let bestScore = -Infinity;
  for (const t of tiles) {
    let minDistToEnemy = Infinity;
    for (const e of enemies) minDistToEnemy = Math.min(minDistToEnemy, manhattan(t.gx, t.gy, e.x, e.y));
    let minDistToAlly = allies.length ? Infinity : 999;
    for (const a of allies) minDistToAlly = Math.min(minDistToAlly, manhattan(t.gx, t.gy, a.x, a.y));
    const score = isHighHp
      ? (minDistToAlly < minDistToEnemy ? minDistToEnemy - 1000 : minDistToEnemy)
      : minDistToEnemy - minDistToAlly;
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }
  return best;
}

export function bestKiteTile(reachableTiles, enemies, range, world) {
  if (!enemies.length) return null;
  let best = null;
  let bestMinDist = -1;
  for (const t of reachableTiles) {
    let minDistToEnemy = Infinity;
    for (const e of enemies) minDistToEnemy = Math.min(minDistToEnemy, manhattan(t.gx, t.gy, e.x, e.y));
    let hasEnemyInRange = false;
    for (const e of enemies) {
      const d = manhattan(t.gx, t.gy, e.x, e.y);
      if (d > 0 && d <= range && hasLineOfSight(world, t.gx, t.gy, e.x, e.y)) {
        hasEnemyInRange = true;
        break;
      }
    }
    if (hasEnemyInRange && minDistToEnemy > bestMinDist) {
      bestMinDist = minDistToEnemy;
      best = t;
    }
  }
  return best;
}

export function powerupTiles(state) {
  const tiles = [];
  state.powerups.forEach((_, key) => {
    tiles.push({ gx: key % state.world.w, gy: (key / state.world.w) | 0 });
  });
  return tiles;
}

export function isAllyInDanger(state, unit, enemies, allies) {
  const { world } = state;
  for (const ally of allies) {
    for (const en of enemies) {
      const r = en.range != null ? en.range : 1;
      const d = manhattan(en.x, en.y, ally.x, ally.y);
      if (d > 0 && d <= r && hasLineOfSight(world, en.x, en.y, ally.x, ally.y)) return true;
    }
  }
  return false;
}

export function pathToNearestTarget(state, unit, targets) {
  const result = getPathToNearestOfTargets(state.world, unit.x, unit.y, targets, state.units, unit);
  if (!result || result.path.length <= 1) return null;
  return result;
}

export function moveIntent(unit, gx, gy) {
  return { type: 'move', unitId: unit.id, toGx: gx, toGy: gy };
}

const CARDINAL_DIRS = [
  { dx: 0, dy: 1 },
  { dx: 0, dy: -1 },
  { dx: 1, dy: 0 },
  { dx: -1, dy: 0 },
];

/** All cardinal facings that stay on the board. */
export function cardinalFacingsForUnit(state, unit) {
  const { world } = state;
  return CARDINAL_DIRS.filter(({ dx, dy }) => {
    const gx = unit.x + dx;
    const gy = unit.y + dy;
    return gx >= 0 && gx < world.w && gy >= 0 && gy < world.h;
  }).map(({ dx, dy }) => ({ dx, dy }));
}

/** Highlight targets when choosing facing: open adjacent tiles and tiles with units. */
export function facingHighlightTiles(state, unit) {
  const { world } = state;
  const tiles = [];
  for (const { dx, dy } of CARDINAL_DIRS) {
    const gx = unit.x + dx;
    const gy = unit.y + dy;
    if (gx < 0 || gx >= world.w || gy < 0 || gy >= world.h) continue;
    if (state.getUnitAtTile(gx, gy)) {
      tiles.push({ gx, gy });
      continue;
    }
    if (isWalkable(world, gx, gy)) tiles.push({ gx, gy });
  }
  return tiles;
}

/** Adjacent tiles the unit may face toward (includes tiles occupied by other units). */
export function facingOptionsForUnit(state, unit) {
  return facingHighlightTiles(state, unit).map(({ gx, gy }) => ({
    dx: gx - unit.x,
    dy: gy - unit.y,
    gx,
    gy,
  }));
}

/** Closest enemy the unit can plausibly meet: prefer in-range threats, then nearest in LOS. */
export function closestEnemyEncounter(state, unit, enemies) {
  const { world } = state;
  let best = null;
  let bestDist = Infinity;
  let bestTier = 3; // 0 = in range now, 1 = in LOS, 2 = no LOS

  for (const e of enemies) {
    if (!e || e.hp <= 0) continue;
    const d = manhattan(unit.x, unit.y, e.x, e.y);
    if (d === 0) continue;
    const r = e.range != null ? e.range : 1;
    const los = hasLineOfSight(world, unit.x, unit.y, e.x, e.y);
    const tier = d <= r && los ? 0 : los ? 1 : 2;
    if (tier > bestTier) continue;
    if (tier < bestTier || d < bestDist) {
      best = e;
      bestDist = d;
      bestTier = tier;
    }
  }
  return best;
}

/** Best allowed cardinal facing to point at a target tile (exact axis when possible). */
export function pickFacingTowardTarget(unit, target, facings) {
  if (!facings.length || !target) return unit.facing;
  const ideal = facingToward(unit.x, unit.y, target.x, target.y);
  if (ideal && facings.some((f) => f.dx === ideal.dx && f.dy === ideal.dy)) return ideal;

  const tx = target.x - unit.x;
  const ty = target.y - unit.y;
  const tl = Math.hypot(tx, ty) || 1;
  let best = facings[0];
  let bestDot = -Infinity;
  for (const f of facings) {
    const dot = (tx / tl) * f.dx + (ty / tl) * f.dy;
    if (dot > bestDot) {
      bestDot = dot;
      best = f;
    }
  }
  return best;
}

/** End-turn facing: point at the nearest enemy encounter using a valid cardinal. */
export function pickDefensiveFacing(state, unit, enemies) {
  let facings = facingOptionsForUnit(state, unit).map(({ dx, dy }) => ({ dx, dy }));
  if (!facings.length) facings = cardinalFacingsForUnit(state, unit);
  if (!facings.length) return unit.facing;

  const target = closestEnemyEncounter(state, unit, enemies);
  if (!target) return unit.facing;
  return pickFacingTowardTarget(unit, target, facings);
}

export function endTurnIntent(unit, facing = null) {
  const intent = { type: 'endTurn', unitId: unit.id };
  if (facing) intent.facing = facing;
  return intent;
}

/** End turn with a flank-aware defensive facing (used by the playing AI). */
export function endTurnWithFacing(state, unit) {
  const enemies = state.units.filter((u) => u.player !== unit.player && u.hp > 0);
  return endTurnIntent(unit, pickDefensiveFacing(state, unit, enemies));
}

export function attackIntent(unit, target) {
  return { type: 'attack', unitId: unit.id, targetId: target.id };
}

export function skillIntent(unit, skillIndex, target) {
  return {
    type: 'skill',
    unitId: unit.id,
    skillIndex,
    targetId: target?.id ?? unit.id,
  };
}

export function moveTowardTargets(state, unit, targets, reachableTiles, occupied) {
  const { world } = state;
  if (!targets.length || !reachableTiles.length) return null;
  const moves = unitAgiMoves(unit);
  const result = pathToNearestTarget(state, unit, targets);
  if (result) {
    const toward = farthestUnoccupiedOnPath(result.path, moves, occupied, world);
    if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) return moveIntent(unit, toward.gx, toward.gy);
  }
  const fallback = farthestReachableTowardTargets(reachableTiles, targets);
  if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
    return moveIntent(unit, fallback.gx, fallback.gy);
  }
  return null;
}

export function centerAndBaseTiles(state, unit, occupied) {
  const { world } = state;
  const centerTiles = getCenterTiles(world);
  const enemyBaseTiles = getEnemyBaseTiles(world, unit.player);
  const centerKeys = new Set(centerTiles.map((c) => state.tileKey(c.gx, c.gy)));
  const unoccupiedCenter = centerTiles.filter((t) => !occupied.has(state.tileKey(t.gx, t.gy)));
  const unoccupiedBase = enemyBaseTiles.filter((t) => !occupied.has(state.tileKey(t.gx, t.gy)));
  return {
    centerTiles,
    enemyBaseTiles,
    centerKeys,
    centerTargets: unoccupiedCenter.length ? unoccupiedCenter : centerTiles,
    baseTargets: unoccupiedBase.length ? unoccupiedBase : enemyBaseTiles,
  };
}

/** Step toward a tile from which the unit can basic-attack an enemy this turn. */
export function attemptMoveWithinAttackRange(state, unit, attackRange, enemies, reachableTiles) {
  const { world } = state;
  if (!enemies.length || !reachableTiles.length) return null;
  const moves = unitAgiMoves(unit);
  const occupied = new Set();
  for (const u of state.units) {
    if (u.hp > 0) occupied.add(state.tileKey(u.x, u.y));
  }
  const reachableKeys = new Set(reachableTiles.map((t) => state.tileKey(t.gx, t.gy)));

  function pathToTileInAttackRangeOf(enemy, requireReachable) {
    let bestPath = null;
    const r = attackRange;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx === 0 && dy === 0) continue;
        if (Math.abs(dx) + Math.abs(dy) > r) continue;
        const tx = enemy.x + dx;
        const ty = enemy.y + dy;
        if (tx < 0 || tx >= world.w || ty < 0 || ty >= world.h) continue;
        if (!isWalkable(world, tx, ty)) continue;
        if (!hasLineOfSight(world, tx, ty, enemy.x, enemy.y)) continue;
        if (occupied.has(state.tileKey(tx, ty))) continue;
        const path = getPath(world, unit.x, unit.y, tx, ty, state.units, unit);
        const steps = path ? path.length - 1 : Infinity;
        const ok = path && path.length > 1 && (!requireReachable || steps <= moves);
        if (ok && (!bestPath || path.length < bestPath.length)) bestPath = path;
      }
    }
    return bestPath;
  }

  const pathable = [];
  for (const e of enemies) {
    const path = pathToTileInAttackRangeOf(e, true);
    if (path) pathable.push({ enemy: e, path });
  }
  if (pathable.length) {
    const weak = pathable.filter((p) => isLowHpUnit(p.enemy));
    const candidates = weak.length ? weak : pathable;
    candidates.sort((a, b) => {
      if (weak.length) return a.enemy.hp - b.enemy.hp || a.path.length - b.path.length;
      return a.path.length - b.path.length || a.enemy.hp - b.enemy.hp;
    });
    const targetEnemy = candidates[0].enemy;

    // Among tiles we can reach this turn that can strike the chosen enemy, prefer
    // the best attack angle (back > side > front), then the shortest walk.
    const attackTiles = reachableTiles.filter(
      (t) => {
        const d = manhattan(t.gx, t.gy, targetEnemy.x, targetEnemy.y);
        return d > 0 && d <= attackRange && hasLineOfSight(world, t.gx, t.gy, targetEnemy.x, targetEnemy.y);
      },
    );
    if (attackTiles.length) {
      attackTiles.sort(
        (a, b) =>
          attackMultiplierFrom(b.gx, b.gy, targetEnemy) - attackMultiplierFrom(a.gx, a.gy, targetEnemy) ||
          (a.dist || 0) - (b.dist || 0),
      );
      const best = attackTiles[0];
      if (best.gx !== unit.x || best.gy !== unit.y) return moveIntent(unit, best.gx, best.gy);
    }

    const toward = farthestReachableOnPath(candidates[0].path, reachableKeys, world);
    if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
      return moveIntent(unit, toward.gx, toward.gy);
    }
  }
  return null;
}

/** Draft placement: spread units by picking the tile farthest from allies. */
export function pickSpreadPlacementTile(state, player, tiles) {
  if (!tiles.length) return null;
  const allies = state.units.filter((u) => u.hp > 0 && u.player === player);
  if (!allies.length) return tiles[0];
  let best = tiles[0];
  let bestDist = -1;
  for (const t of tiles) {
    let minAlly = Infinity;
    for (const a of allies) minAlly = Math.min(minAlly, manhattan(t.gx, t.gy, a.x, a.y));
    if (minAlly > bestDist) {
      bestDist = minAlly;
      best = t;
    }
  }
  return best;
}
