// Playing-phase AI. Produces one intent per activation through the command bus.
// Decision logic mirrors the original cascade: skills, attacks, powerups, retreat,
// turn-limit center rush, and level-2 base leveling.

import { getAvailableSkills, getSkillTargetTiles } from '../sim/skills.js';
import { getEffectiveStat, facingToward } from '../sim/unit.js';
import { getPath } from '../world/grid.js';
import {
  LOW_HP_ENEMY_THRESHOLD,
  HEAL_HP_RATIO_THRESHOLD,
  HEAL_KEYS,
  DAMAGE_KEYS,
  BUFF_KEYS,
  DEBUFF_KEYS,
  PERMANENT_DEBUFF_KEYS,
  SUMMON_KEYS,
  manhattan,
  turnsLeft,
  hpRatio,
  isCriticalHp,
  isLowHpUnit,
  livingEnemies,
  livingAllies,
  occupiedKeys,
  unitAgiMoves,
  getReachableTiles,
  effectiveRange,
  isRangedUnitForAi,
  reliablyKillsWithBasicAttack,
  estimateHitChance,
  attackMultiplierFrom,
  buildEnemiesInRangeByTile,
  getEnemiesInRangeFrom,
  farthestReachableOnPath,
  farthestUnoccupiedOnPath,
  farthestReachableTowardTargets,
  safestTileAgainstThreat,
  tileThreatScore,
  bestRetreatTowardAlliesTile,
  bestKiteTile,
  powerupTiles,
  isAllyInDanger,
  enemiesThreateningAllies,
  pathToNearestTarget,
  moveIntent,
  endTurnWithFacing,
  attackIntent,
  skillIntent,
  moveTowardTargets,
  centerAndBaseTiles,
  attemptMoveWithinAttackRange,
} from './helpers.js';

function pickBestAttackTarget(unit, enemiesInRange, priorityIds = null) {
  if (!enemiesInRange.length) return null;
  let pool = enemiesInRange;
  // Bias toward specific enemies (e.g. those threatening an ally) when any are in range.
  if (priorityIds && priorityIds.size) {
    const pri = enemiesInRange.filter((e) => priorityIds.has(e.target.id));
    if (pri.length) pool = pri;
  }
  // Prefer a kill we can count on; among those, the most reliable, then weakest/closest.
  const reliableKills = pool.filter((e) => reliablyKillsWithBasicAttack(unit, e.target));
  if (reliableKills.length) {
    reliableKills.sort(
      (a, b) =>
        estimateHitChance(unit, b.target) - estimateHitChance(unit, a.target) ||
        a.target.hp - b.target.hp ||
        a.dist - b.dist,
    );
    return reliableKills[0].target;
  }
  // Otherwise focus the enemy we can most dependably bring down: low HP is good,
  // low hit chance (evasive) inflates the score, and a flanking angle (bigger
  // damage multiplier) lowers it — so back/side targets are preferred.
  const score = (e) =>
    e.target.hp /
    (attackMultiplierFrom(unit.x, unit.y, e.target) * Math.max(0.05, estimateHitChance(unit, e.target)));
  const scored = pool.slice().sort((a, b) => score(a) - score(b) || a.dist - b.dist);
  return scored[0]?.target ?? null;
}

function getEnemyTargets(state, unit, skill) {
  return getSkillTargetTiles(state, unit, skill)
    .filter((t) => t.targetUnit)
    .map((t) => t.targetUnit);
}

function pickSkill(state, unit, ctx) {
  const {
    enemiesInRange,
    enemiesInRangeByTile,
    reachableTiles,
    hasLowHpEnemyInRange,
    hasLowHpEnemyReachable,
  } = ctx;
  const available = getAvailableSkills(state, unit);
  const hasKillPotential = hasLowHpEnemyInRange || (!state.hasMoved && hasLowHpEnemyReachable);
  let chosen = null;
  let chosenTarget = null;
  let chosenIndex = -1;

  const setChoice = (skill, target, index) => {
    chosen = skill;
    chosenTarget = target;
    chosenIndex = index;
  };

  if (!hasKillPotential) {
    for (let i = 0; i < available.length; i++) {
      const skill = available[i];
      if (skill.disabled || unit.mp < skill.cost) continue;
      if (!HEAL_KEYS.has(skill.effectKey)) continue;
      const lowHpTargets = getSkillTargetTiles(state, unit, skill).filter(
        (t) => t.targetUnit && hpRatio(t.targetUnit) < HEAL_HP_RATIO_THRESHOLD,
      );
      if (lowHpTargets.length) {
        const toHeal = lowHpTargets.sort((a, b) => a.targetUnit.hp - b.targetUnit.hp)[0].targetUnit;
        setChoice(skill, toHeal, i);
        break;
      }
    }
  }

  if (!chosen && !hasKillPotential) {
    const deadUnits = state.units.filter((u) => u.hp <= 0 && !u.isReanimated);
    for (let i = 0; i < available.length; i++) {
      const skill = available[i];
      if (skill.disabled || unit.mp < skill.cost) continue;
      if (skill.effectKey === 'reanimate' && !deadUnits.length) continue;
      if (SUMMON_KEYS.has(skill.effectKey)) {
        setChoice(skill, unit, i);
        break;
      }
    }
  }

  if (!chosen && !hasKillPotential) {
    const hasEnemyNearby =
      enemiesInRange.length > 0 ||
      reachableTiles.some((t) => (enemiesInRangeByTile.get(state.tileKey(t.gx, t.gy)) || []).length > 0);
    if (hasEnemyNearby) {
      const buffSkills = available
        .map((s, index) => ({ skill: s, index }))
        .filter(({ skill }) => !skill.disabled && BUFF_KEYS.has(skill.effectKey))
        .sort((a, b) => (b.skill.level || 1) - (a.skill.level || 1));
      for (const { skill, index: idx } of buffSkills) {
        const hasActiveBuff = unit.tempBuff && unit.tempBuff.duration > 0;
        if (skill.target === 'self') {
          if (skill.effectKey === 'bloodlust' && hpRatio(unit) > 0.8) continue;
          if (!hasActiveBuff) {
            setChoice(skill, unit, idx);
            break;
          }
        }
        if (skill.target === 'ally') {
          if (skill.effectKey === 'overheal' && hpRatio(unit) > 0.7) continue;
          const allyTargets = getSkillTargetTiles(state, unit, skill)
            .filter((t) => t.targetUnit)
            .map((t) => t.targetUnit);
          if (!allyTargets.length) continue;
          const withoutBuff = allyTargets.filter((a) => !a.tempBuff || a.tempBuff.duration <= 0);
          const toBuff = (withoutBuff.length ? withoutBuff : allyTargets).sort((a, b) => a.hp - b.hp)[0];
          if (toBuff.tempBuff && toBuff.tempBuff.duration > 0) continue;
          if (skill.effectKey === 'overheal' && hpRatio(toBuff) > 0.7) continue;
          setChoice(skill, toBuff, idx);
          break;
        }
        if (skill.target === 'enemy') {
          let enemyTargets = getEnemyTargets(state, unit, skill);
          if (skill.effectKey === 'vodoo' && unit.tempBuff?.vodoo) {
            enemyTargets = enemyTargets.filter((e) => e.id !== unit.tempBuff.vodoo);
          }
          if (enemyTargets.length) {
            setChoice(skill, enemyTargets.sort((a, b) => a.hp - b.hp)[0], idx);
            break;
          }
        }
      }
    }
  }

  if (!chosen) {
    // Score every usable damage skill and take the global best target rather than
    // whichever skill happens to come first: prefer the lowest-HP victim (most
    // likely to finish), tie-broken by the cheaper skill.
    let bestCand = null;
    for (let i = 0; i < available.length; i++) {
      const skill = available[i];
      if (skill.disabled || unit.mp < skill.cost) continue;
      if (!DAMAGE_KEYS.has(skill.effectKey)) continue;
      if (skill.effectKey === 'feast' && hpRatio(unit) > 0.7) continue;
      if (skill.effectKey === 'berserk' && hpRatio(unit) < 0.25) continue;
      if (skill.effectKey === 'shuriken' && enemiesInRange.length > 0) continue;
      if (skill.effectKey === 'judgement' && hpRatio(unit) > 0.7) continue;
      const enemyTargets = getEnemyTargets(state, unit, skill);
      if (!enemyTargets.length) continue;
      const lowHp = enemyTargets.filter((e) => hpRatio(e) < LOW_HP_ENEMY_THRESHOLD);
      const pool = lowHp.length ? lowHp : enemyTargets;
      const toHit = skill.type === 'spell'
        ? pool.reduce((best, e) => {
            if (!best) return e;
            const c = getEffectiveStat(e, 'int') - getEffectiveStat(best, 'int');
            return c < 0 || (c === 0 && e.hp < best.hp) ? e : best;
          }, null)
        : pool.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null);
      if (!toHit) continue;
      if (
        !bestCand ||
        toHit.hp < bestCand.target.hp ||
        (toHit.hp === bestCand.target.hp && (skill.cost || 0) < (bestCand.skill.cost || 0))
      ) {
        bestCand = { skill, index: i, target: toHit };
      }
    }
    if (bestCand) setChoice(bestCand.skill, bestCand.target, bestCand.index);
  }

  if (!chosen && !hasKillPotential) {
    for (let i = 0; i < available.length; i++) {
      const skill = available[i];
      if (skill.disabled || unit.mp < skill.cost) continue;
      if (!PERMANENT_DEBUFF_KEYS.has(skill.effectKey)) continue;
      const enemyTargets = getEnemyTargets(state, unit, skill);
      if (!enemyTargets.length) continue;
      setChoice(skill, enemyTargets.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null), i);
      break;
    }
  }

  if (!chosen && !hasKillPotential) {
    for (let i = 0; i < available.length; i++) {
      const skill = available[i];
      if (skill.disabled || unit.mp < skill.cost) continue;
      if (!DEBUFF_KEYS.has(skill.effectKey)) continue;
      const enemyTargets = getEnemyTargets(state, unit, skill);
      const notDebuffed = enemyTargets.filter((e) => !e.tempDebuff || e.tempDebuff.duration <= 0);
      if (!notDebuffed.length) continue;
      setChoice(
        skill,
        notDebuffed.reduce((best, e) => (!best || e.hp < best.hp ? e : best), null),
        i,
      );
      break;
    }
  }

  if (!chosen || !chosenTarget || chosenIndex < 0) return null;
  const target = chosen.target === 'self' ? unit : chosenTarget;
  return skillIntent(unit, chosenIndex, target);
}

function moveTowardPowerups(state, unit, reachableTiles, occupied) {
  const puTiles = powerupTiles(state);
  if (!puTiles.length || !reachableTiles.length) return null;
  return moveTowardTargets(state, unit, puTiles, reachableTiles, occupied);
}

/** Push toward the objective: enemy base first for level-2 pushers, else the center. */
function advanceTowardObjective(state, unit, ctx) {
  const { reachableTiles, occupied, prioritizeEnemyBase, enemyBaseTiles, baseTargets, centerTargets } = ctx;
  if (!reachableTiles.length) return null;
  if (prioritizeEnemyBase && enemyBaseTiles.length) {
    const onBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
    if (!onBase) {
      const m = moveTowardTargets(state, unit, baseTargets, reachableTiles, occupied);
      if (m) return m;
    }
  }
  return moveTowardTargets(state, unit, centerTargets, reachableTiles, occupied);
}

/** Retreat to a less-exposed reachable tile when hurt and currently threatened. */
function lowHpRetreat(state, unit, reachableTiles, enemies) {
  if (!isLowHpUnit(unit) || !reachableTiles.length) return null;
  const { world } = state;
  const here = tileThreatScore(world, unit.x, unit.y, enemies, unit.facing);
  if (here <= 0) return null;
  const safe = safestTileAgainstThreat(world, reachableTiles, enemies, unit);
  if (!safe || (safe.gx === unit.x && safe.gy === unit.y)) return null;
  const safeFacing = facingToward(unit.x, unit.y, safe.gx, safe.gy) || unit.facing;
  if (tileThreatScore(world, safe.gx, safe.gy, enemies, safeFacing) < here) {
    return moveIntent(unit, safe.gx, safe.gy);
  }
  return null;
}

function postAttackMove(state, unit, ctx) {
  const {
    enemies,
    allies,
    reachableTiles,
    occupied,
    effRange,
    isRangedAi,
    centerTiles,
    centerKeys,
    centerTargets,
    baseTargets,
    enemyBaseTiles,
    prioritizeEnemyBase,
    tl,
  } = ctx;
  const { world } = state;
  const moves = unitAgiMoves(unit);
  const reachableKeys = new Set(reachableTiles.map((t) => state.tileKey(t.gx, t.gy)));

  if (isRangedAi && enemies.length && state.powerups.size > 0) {
    const m = moveTowardPowerups(state, unit, reachableTiles, occupied);
    if (m) return m;
  }

  if (tl <= 20 && centerTiles.length) {
    const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
    if (onCenter) {
      const otherCenter = reachableTiles.filter(
        (t) => centerKeys.has(state.tileKey(t.gx, t.gy)) && (t.gx !== unit.x || t.gy !== unit.y),
      );
      const away = safestTileAgainstThreat(world, otherCenter, enemies, unit);
      if (away) return moveIntent(unit, away.gx, away.gy);
      return endTurnWithFacing(state, unit);
    }
    const result = pathToNearestTarget(state, unit, centerTargets);
    if (result) {
      const toward = farthestUnoccupiedOnPath(result.path, moves, occupied, world);
      if (toward) return moveIntent(unit, toward.gx, toward.gy);
    }
    const fallback = farthestReachableTowardTargets(reachableTiles, centerTargets);
    if (fallback) return moveIntent(unit, fallback.gx, fallback.gy);
    return endTurnWithFacing(state, unit);
  }

  const retreat0 = lowHpRetreat(state, unit, reachableTiles, enemies);
  if (retreat0) return retreat0;

  if (!isLowHpUnit(unit) && reachableTiles.length) {
    const m = advanceTowardObjective(state, unit, ctx);
    if (m) return m;
  }

  if (isCriticalHp(unit) && tl > 20) {
    const { enemiesInRangeByTile } = ctx;
    let moveTowardLowHp = null;
    let bestEnemyHp = Infinity;
    for (const t of reachableTiles) {
      const inRange = enemiesInRangeByTile.get(state.tileKey(t.gx, t.gy)) || [];
      const lowHp = inRange.filter((x) => isLowHpUnit(x.target));
      if (!lowHp.length) continue;
      const minHp = Math.min(...lowHp.map((x) => x.target.hp));
      if (minHp < bestEnemyHp) {
        bestEnemyHp = minHp;
        moveTowardLowHp = t;
      }
    }
    if (moveTowardLowHp) {
      const path = getPath(world, unit.x, unit.y, moveTowardLowHp.gx, moveTowardLowHp.gy, state.units, unit);
      const toward = path ? farthestReachableOnPath(path, reachableKeys, world) : null;
      if (toward) return moveIntent(unit, toward.gx, toward.gy);
    }
    const safe = safestTileAgainstThreat(world, reachableTiles, enemies, unit);
    if (safe) return moveIntent(unit, safe.gx, safe.gy);
    return endTurnWithFacing(state, unit);
  }

  const kite = isRangedAi ? bestKiteTile(reachableTiles, enemies, effRange, world) : null;
  if (kite) return moveIntent(unit, kite.gx, kite.gy);

  const retreat = bestRetreatTowardAlliesTile(reachableTiles, unit, enemies, allies);
  if (retreat) return moveIntent(unit, retreat.gx, retreat.gy);

  return endTurnWithFacing(state, unit);
}

export function decidePlayingIntent(state, unit) {
  const enemies = livingEnemies(state, unit);
  const allies = livingAllies(state, unit);
  const reachableTiles = getReachableTiles(state, unit);
  const occupied = occupiedKeys(state, unit.id);
  const skipSkills = unit.tempBuff?.doubleAttack === true;
  const effRange = effectiveRange(state, unit, { skipSkills });
  const attackRange = unit.range != null ? unit.range : 1;
  const isRangedAi = isRangedUnitForAi(unit, effRange, skipSkills);
  const tl = turnsLeft(state);
  const prioritizeEnemyBase = unit.level === 2 && tl > 20;
  const { centerTiles, enemyBaseTiles, centerKeys, centerTargets, baseTargets } =
    centerAndBaseTiles(state, unit, occupied);

  const enemiesInRange = getEnemiesInRangeFrom(state.world, unit.x, unit.y, enemies, attackRange);
  const enemiesInRangeByTile = buildEnemiesInRangeByTile(
    state.world, reachableTiles, enemies, effRange,
  );
  const hasLowHpEnemyInRange = enemiesInRange.some((e) => isLowHpUnit(e.target));
  const hasLowHpEnemyReachable =
    hasLowHpEnemyInRange ||
    reachableTiles.some((t) => {
      const inRange = enemiesInRangeByTile.get(state.tileKey(t.gx, t.gy)) || [];
      return inRange.some((e) => isLowHpUnit(e.target));
    });

  const ctx = {
    enemies,
    allies,
    reachableTiles,
    occupied,
    effRange,
    attackRange,
    isRangedAi,
    centerTiles,
    centerKeys,
    centerTargets,
    baseTargets,
    enemyBaseTiles,
    prioritizeEnemyBase,
    tl,
    enemiesInRange,
    enemiesInRangeByTile,
    hasLowHpEnemyInRange,
    hasLowHpEnemyReachable,
  };

  if (enemies.length === 0) {
    if (!state.hasMoved && reachableTiles.length) {
      const targets = prioritizeEnemyBase ? baseTargets : centerTargets;
      const m = moveTowardTargets(state, unit, targets, reachableTiles, occupied);
      if (m) return m;
    }
    return endTurnWithFacing(state, unit);
  }

  if (state.hasAttacked) {
    if (state.hasMoved) return null; // controller emits turnEndRequested with facing
    return postAttackMove(state, unit, ctx);
  }

  // Secure a kill with a free basic attack before spending MP on a skill.
  if (enemiesInRange.length) {
    const lethal = enemiesInRange.filter((e) => reliablyKillsWithBasicAttack(unit, e.target));
    if (lethal.length) {
      const target = pickBestAttackTarget(unit, lethal);
      if (target) return attackIntent(unit, target);
    }
  }

  if (!skipSkills) {
    const skill = pickSkill(state, unit, ctx);
    if (skill) return skill;
  }

  if (enemiesInRange.length) {
    // When an ally is under threat, focus enemies that can hit that ally to relieve
    // pressure; reliable kills still take precedence inside pickBestAttackTarget.
    const priorityIds = isAllyInDanger(state, unit, enemies, allies)
      ? enemiesThreateningAllies(state, enemies, allies)
      : null;
    const target = pickBestAttackTarget(unit, enemiesInRange, priorityIds);
    if (target) return attackIntent(unit, target);
  }

  if (skipSkills) {
    const m = attemptMoveWithinAttackRange(state, unit, attackRange, enemies, reachableTiles);
    if (m) return m;
  }

  if (!state.hasMoved) {
    // Hurt and exposed with no attack available: fall back to safer ground.
    if (!hasLowHpEnemyReachable) {
      const retreat = lowHpRetreat(state, unit, reachableTiles, enemies);
      if (retreat) return retreat;
    }

    if (!hasLowHpEnemyReachable && state.powerups.size > 0) {
      const m = moveTowardPowerups(state, unit, reachableTiles, occupied);
      if (m) return m;
    }

    if (tl <= 20 && centerTiles.length) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter) {
        const result = pathToNearestTarget(state, unit, centerTargets);
        const pathToCenter = result?.path ?? null;
        const unitDist = Math.min(...centerTiles.map((c) => manhattan(unit.x, unit.y, c.gx, c.gy)));
        let moveTowardWeakOnPath = null;
        let bestPathIndex = -1;
        for (const t of reachableTiles) {
          const k = state.tileKey(t.gx, t.gy);
          const minCenter = Math.min(...centerTiles.map((c) => manhattan(t.gx, t.gy, c.gx, c.gy)));
          if (minCenter > unitDist) continue;
          const fromHere = enemiesInRangeByTile.get(k) || [];
          if (!fromHere.some((e) => isLowHpUnit(e.target))) continue;
          const pathIndex = pathToCenter
            ? pathToCenter.findIndex((p) => p.x === t.gx && p.y === t.gy)
            : 0;
          if (pathIndex > bestPathIndex) {
            bestPathIndex = pathIndex;
            moveTowardWeakOnPath = t;
          }
        }
        if (moveTowardWeakOnPath) {
          const path = getPath(
            state.world, unit.x, unit.y,
            moveTowardWeakOnPath.gx, moveTowardWeakOnPath.gy,
            state.units, unit,
          );
          const reachableKeys = new Set(reachableTiles.map((t) => state.tileKey(t.gx, t.gy)));
          const toward = path ? farthestReachableOnPath(path, reachableKeys, state.world) : null;
          if (toward) return moveIntent(unit, toward.gx, toward.gy);
        }
        const m = moveTowardTargets(state, unit, centerTargets, reachableTiles, occupied);
        if (m) return m;
      }
    }

    if (tl <= 10 && centerTiles.length) {
      const m = moveTowardTargets(state, unit, centerTargets, reachableTiles, occupied);
      if (m) return m;
    }

    if (tl > 20 && prioritizeEnemyBase && enemyBaseTiles.length) {
      const onBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onBase) {
        const m = moveTowardTargets(state, unit, baseTargets, reachableTiles, occupied);
        if (m) return m;
      }
    }

    if (tl > 20 && isCriticalHp(unit)) {
      const safe = safestTileAgainstThreat(state.world, reachableTiles, enemies, unit);
      if (safe) return moveIntent(unit, safe.gx, safe.gy);
    }

    const m = attemptMoveWithinAttackRange(state, unit, effRange, enemies, reachableTiles);
    if (m) return m;

    if (tl > 20 && !isLowHpUnit(unit)) {
      const adv = advanceTowardObjective(state, unit, ctx);
      if (adv) return adv;
    }
  }

  return endTurnWithFacing(state, unit);
}

export class PlayingAI {
  constructor({ state, controller, bus, isCPU }) {
    this.state = state;
    this.controller = controller;
    this.bus = bus;
    this.isCPU = isCPU;
    this._busy = false;

    const tick = () => this._maybeAct();
    const endFacing = () => this._endWithFacing();
    bus.on('playingStarted', tick);
    bus.on('turnChanged', tick);
    bus.on('actionResolved', tick);
    bus.on('initiativeChanged', tick);
    bus.on('turnEndRequested', endFacing);
  }

  async _endWithFacing() {
    const state = this.state;
    if (state.phase !== 'playing' || !this.isCPU(state.currentPlayer)) return;
    if (!state.hasMoved || !state.hasAttacked) return;
    const unit = state.getActiveUnit();
    if (!unit || unit.hp <= 0) {
      await this.controller.dispatch({ type: 'endTurn' });
      return;
    }
    await this.controller.dispatch(endTurnWithFacing(state, unit));
  }

  _maybeAct() {
    const state = this.state;
    if (state.phase !== 'playing' || this._busy) return;
    if (!this.isCPU(state.currentPlayer)) return;
    this._busy = true;
    setTimeout(() => this._act(), 350);
  }

  async _act() {
    const state = this.state;
    try {
      if (state.phase !== 'playing' || !this.isCPU(state.currentPlayer)) return;
      const unit = state.getActiveUnit();
      if (!unit || unit.hp <= 0) {
        await this.controller.dispatch({ type: 'endTurn' });
        return;
      }
      const intent = decidePlayingIntent(state, unit);
      await this.controller.dispatch(intent || endTurnWithFacing(state, unit));
    } finally {
      this._busy = false;
      if (!(state.hasMoved && state.hasAttacked)) this._maybeAct();
    }
  }
}
