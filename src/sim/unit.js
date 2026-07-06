// Unit factory + stat helpers. A "unit" is a plain object (an entity of stat +
// position + status components); these helpers keep its shape consistent and
// compute effective stats including temporary buffs/debuffs.

import { CLASSES } from '../data/classes.js';
import { CLASS_LOOK } from '../data/class-look.js';

/** Team-default facing as a grid vector: P1 (bottom) looks up, P2 (top) looks down. */
export function defaultFacing(player) {
  return player === 1 ? { dx: 0, dy: -1 } : { dx: 0, dy: 1 };
}

/** Facing vector (components in {-1,0,1}) pointing from one tile toward another. */
export function facingToward(fromX, fromY, toX, toY) {
  const dx = Math.sign(toX - fromX);
  const dy = Math.sign(toY - fromY);
  if (dx === 0 && dy === 0) return null;
  return { dx, dy };
}

/** Create a live unit object from a class template. */
export function createUnit({ id, player, classKey, x, y, level = 1 }) {
  const template = CLASSES[classKey];
  const look = CLASS_LOOK[classKey] || CLASS_LOOK.knight;
  return {
    id,
    player,
    x,
    y,
    level,
    facing: defaultFacing(player),
    name: template.name,
    class: classKey,
    hairColor: look.hair,
    hp: template.hp,
    maxHp: template.maxHp,
    mp: template.mp,
    maxMp: template.maxMp,
    str: template.str,
    agi: template.agi,
    vit: template.vit,
    dex: template.dex,
    luk: template.luk,
    int: template.int,
    range: template.range,
    // runtime-only fields added lazily: tempBuff, tempDebuff, summonedBy,
    // summonedSkills, isReanimated, deathOrder
  };
}

export function getEffectiveStat(unit, key) {
  const base = unit[key] != null ? unit[key] : 0;
  const buff = unit.tempBuff && unit.tempBuff[key] != null ? unit.tempBuff[key] : 0;
  const debuff = unit.tempDebuff && unit.tempDebuff[key] != null ? unit.tempDebuff[key] : 0;
  return base + buff - debuff;
}

/** HTML snippet showing base plus buff/debuff deltas (for UI stat rows). */
export function formatStatWithBuffs(unit, key) {
  const base = unit[key] != null ? unit[key] : 0;
  const buff = unit.tempBuff && unit.tempBuff[key] != null ? unit.tempBuff[key] : 0;
  const debuff = unit.tempDebuff && unit.tempDebuff[key] != null ? unit.tempDebuff[key] : 0;
  let html = String(base);
  if (buff > 0) html += ` <span class="stat-val-buff">+${buff}</span>`;
  if (debuff > 0) html += ` <span class="stat-val-debuff">-${debuff}</span>`;
  return html;
}

export function isLowHp(unit) {
  return unit && unit.hp > 0 && unit.hp <= unit.maxHp * 0.25;
}

const STAT_KEYS = ['str', 'agi', 'vit', 'dex', 'luk', 'int'];

/** Plain serializable snapshot for the UI store (no functions/meshes). */
export function unitSummary(unit) {
  if (!unit) return null;
  const stats = {};
  for (const k of STAT_KEYS) stats[k] = formatStatWithBuffs(unit, k);
  return {
    id: unit.id,
    player: unit.player,
    name: unit.name,
    class: unit.class,
    level: unit.level,
    hp: unit.hp,
    maxHp: unit.maxHp,
    mp: unit.mp,
    maxMp: unit.maxMp,
    range: unit.range,
    lowHp: isLowHp(unit),
    poison: unit.tempDebuff && unit.tempDebuff.poison ? unit.tempDebuff.poison : 0,
    autoHeal: unit.tempBuff && unit.tempBuff.heal ? unit.tempBuff.heal : 0,
    statsHtml: stats,
  };
}
