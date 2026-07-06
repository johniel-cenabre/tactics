// Draft configuration and AI draft preferences (pure data + a couple of helpers).

import { CLASS_KEYS } from './classes.js';

export const AI_DRAFT_PREFERENCE_OPTIONS = [
  { value: 'balanced', label: 'Balanced (lineup mix)' },
  { value: 'tanky', label: 'Tanky (HP + VIT)' },
  { value: 'aggressive', label: 'Aggressive (STR + AGI)' },
  { value: 'scout', label: 'Scout (high AGI)' },
  { value: 'ranged', label: 'Ranged (DEX + range)' },
  { value: 'caster', label: 'Caster (INT + MP)' },
  { value: 'random', label: 'Random' },
  { value: 'custom', label: 'Custom order' },
];

/** When preference is 'custom', AI picks first available from this order. */
export const AI_DRAFT_CUSTOM_ORDER = [...CLASS_KEYS];

/** Role buckets for balanced draft: each class appears in at most one. */
export const BALANCED_ROLES = {
  tank: ['knight', 'berserker', 'werewolf', 'ghoul', 'barbarian'],
  melee: ['samurai', 'assassin', 'ninja', 'bandit', 'lancer'],
  support: ['paladin', 'monk', 'blacksmith', 'exorcist', 'oracle'],
  ranged: ['ranger', 'amazon', 'hunter', 'alchemist', 'cannibal'],
  caster: ['mage', 'witch', 'vampire', 'necromancer', 'shaman'],
};

export const BALANCED_RATIOS = { tank: 2, melee: 2, support: 1, ranged: 1, caster: 1 };

/** classKey -> role bucket (for draft AI). */
export const CLASS_DRAFT_ROLE = (() => {
  const out = {};
  for (const [role, list] of Object.entries(BALANCED_ROLES)) {
    for (const ck of list) out[ck] = role;
  }
  return out;
})();

/** Target count per role, scaled to lineup size. */
export function getBalancedTargets(lineupSize) {
  const n = Math.max(1, lineupSize);
  const keys = Object.keys(BALANCED_RATIOS);
  const total = keys.reduce((s, k) => s + (BALANCED_RATIOS[k] ?? 0), 0);
  const targets = {};
  let sum = 0;
  for (const k of keys) {
    const t = Math.floor((n * (BALANCED_RATIOS[k] ?? 0)) / total);
    targets[k] = t;
    sum += t;
  }
  let remainder = n - sum;
  const bySmallestFirst = [...keys].sort((a, b) => {
    if (targets[a] !== targets[b]) return targets[a] - targets[b];
    return (BALANCED_RATIOS[b] ?? 0) - (BALANCED_RATIOS[a] ?? 0);
  });
  for (let i = 0; remainder > 0 && i < bySmallestFirst.length; i++) {
    targets[bySmallestFirst[i]]++;
    remainder--;
  }
  return targets;
}
