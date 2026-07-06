// Class win/loss/kill bookkeeping (DEV only). Kept isolated so it can be a no-op
// outside dev builds without touching combat logic.

import { CLASS_KEYS } from '../data/classes.js';
import { DEV_MODE } from '../config.js';

export const CLASS_RECORD = CLASS_KEYS.reduce((acc, k) => {
  acc[k] = { battles: 0, kills: 0, deaths: 0, wins: 0, losses: 0 };
  return acc;
}, {});

function resolveKillCreditingUnit(killerUnit, unitsList) {
  if (!killerUnit || killerUnit.summonedBy == null || !Array.isArray(unitsList)) return killerUnit;
  const summoner = unitsList.find((u) => u.id === killerUnit.summonedBy);
  return summoner != null ? summoner : killerUnit;
}

export function recordClassKill(killerUnit, victimUnit, unitsList) {
  if (!DEV_MODE) return;
  const creditUnit = resolveKillCreditingUnit(killerUnit, unitsList);
  const killerClass = creditUnit?.class;
  if (CLASS_KEYS.includes(killerClass) && CLASS_RECORD[killerClass]) {
    CLASS_RECORD[killerClass].kills++;
  }
  if (victimUnit?.summonedBy != null) return;
  const victimClass = victimUnit?.class;
  if (CLASS_KEYS.includes(victimClass) && CLASS_RECORD[victimClass]) {
    CLASS_RECORD[victimClass].deaths++;
  }
}

export function recordGameOver(unitsList, winningPlayer) {
  if (!DEV_MODE) return null;
  for (const u of unitsList) {
    if (!u || !CLASS_RECORD[u.class]) continue;
    CLASS_RECORD[u.class].battles++;
    if (winningPlayer != null) {
      if (u.player === winningPlayer) CLASS_RECORD[u.class].wins++;
      else CLASS_RECORD[u.class].losses++;
    }
  }
  const table = CLASS_KEYS.map((k) => {
    const r = CLASS_RECORD[k];
    const total = r.wins + r.losses || 1;
    return {
      class: k,
      battles: r.battles,
      kills: r.kills,
      deaths: r.deaths,
      wins: r.wins,
      losses: r.losses,
      winRate: r.wins + r.losses > 0 ? ((r.wins / total) * 100).toFixed(1) + '%' : '-',
      lossRate: r.wins + r.losses > 0 ? ((r.losses / total) * 100).toFixed(1) + '%' : '-',
    };
  });
  console.table(table);
  return table;
}
