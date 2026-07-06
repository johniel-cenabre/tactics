// Effect registry: maps a skill's `effectKey` to its handler. Assembling it from
// category modules keeps each effect a small, isolated unit. Adding a skill
// effect means adding one function to a category file (or a new file) and it is
// automatically available here.

import { buffEffects } from './buffs.js';
import { damageEffects } from './damage.js';
import { healEffects } from './heal.js';
import { specialEffects } from './special.js';

export const EFFECTS = {
  ...buffEffects,
  ...damageEffects,
  ...healEffects,
  ...specialEffects,
};

export function getEffectHandler(effectKey) {
  return EFFECTS[effectKey] || null;
}
