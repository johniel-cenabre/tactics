// Damage-dealing effect handlers. Damage math is ported verbatim from the
// original game. `ctx.damage(victim, d, { heal, spell })` centralizes the hit
// roll, floating text, vodoo mirror, and death handling.

export const damageEffects = {
  arcaneBolt(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.ceil(getEff(u, 'int') * 0.9 - (getEff(t, 'int') * 0.4 + getEff(t, 'luk') * 0.3)));
    ctx.damage(t, d, { spell: true });
  },

  pierce(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'str') * 0.6));
    ctx.damage(t, d);
  },

  snipe(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'dex') * 0.8 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  execute(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'agi') * 0.8 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  berserk(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    ctx.damage(t, Math.max(1, Math.floor(getEff(u, 'str') * 0.8 - getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(u, 3, { selfCost: true });
  },

  drain(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const dHp = Math.max(1, Math.ceil(getEff(u, 'int') * 0.6 - (getEff(t, 'int') * 0.4 + getEff(t, 'luk') * 0.3)));
    const dMp = Math.max(1, Math.ceil(getEff(u, 'int') * 0.3 - (getEff(t, 'int') * 0.4 + getEff(t, 'luk') * 0.3)));
    ctx.damage(t, dHp, { spell: true });
    ctx.damage(u, dHp + dMp, { heal: true });
    t.mp = Math.max(1, (t.mp || 0) - dMp);
    ctx.statText(u.x, u.y, `+${dHp} HP and +${dMp} MP`, true);
    ctx.statText(t.x, t.y, `-${dHp} HP and -${dMp} MP`, false);
  },

  shuriken(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.ceil(getEff(u, 'dex') * 0.7 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  chokuto(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'str') * 0.4 + getEff(u, 'dex') * 0.4 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  bite(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'str') * 0.7 + getEff(u, 'agi') * 0.1 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  judgement(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor((u.maxHp - u.hp) - (getEff(t, 'int') * 0.2 + getEff(t, 'luk') * 0.1)));
    ctx.damage(t, d, { spell: true });
  },

  exorcise(ctx) {
    const { t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor((t.maxHp - t.hp) * 1.3 - (getEff(t, 'int') * 0.2 + getEff(t, 'luk') * 0.1)));
    ctx.damage(t, d, { spell: true });
  },

  ambush(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'luk') * 0.8 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d);
  },

  feast(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'str') * 0.8 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    const isHit = ctx.damage(t, d);
    if (isHit) ctx.damage(u, d, { heal: true });
  },

  concoct(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'int') * 0.8 - (getEff(t, 'int') * 0.4 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d, { spell: true });
    const lukVal = Math.max(1, Math.floor(d * 0.5));
    u.luk = Math.max(1, (u.luk || 0) + lukVal);
    ctx.statText(u.x, u.y, `+${lukVal} LUK`, true);
  },

  bloodSuck(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor((u.mp * 0.6 + getEff(u, 'int') * 0.6) - (t.hp * 0.3 + getEff(t, 'luk') * 0.1)));
    const isHit = ctx.damage(t, d, { spell: true });
    if (isHit) ctx.damage(u, d, { heal: true });
  },

  gnaw(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.floor(getEff(u, 'str') - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    ctx.damage(t, d, { spell: true });
    ctx.damage(u, d, { heal: true });
  },

  malediction(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.ceil((getEff(u, 'int') * 0.4 + getEff(u, 'luk') * 0.3) - (getEff(t, 'int') * 0.3 + getEff(t, 'luk') * 0.2)));
    const dVal = Math.max(1, Math.ceil(d * 0.3));
    t.tempDebuff = { luk: dVal, int: dVal, str: dVal, vit: dVal, agi: dVal, dex: dVal, duration: 3 };
    ctx.damage(t, d, { spell: true });
    ctx.statText(t.x, t.y, `-${dVal} ALL STATS`, false);
  },

  skewer(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const d = Math.max(1, Math.ceil(getEff(u, 'dex') * 0.8 - (getEff(t, 'vit') * 0.3 + getEff(t, 'luk') * 0.2)));
    t.tempDebuff = { agi: d, duration: 3 };
    ctx.statText(t.x, t.y, `-${d} AGI`, false);
  },
};
