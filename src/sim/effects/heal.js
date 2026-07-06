// Heal / MP effect handlers.

export const healEffects = {
  chakra(ctx) {
    const { u, t, getEff } = ctx;
    ctx.damage(u, Math.max(1, Math.floor(getEff(u, 'int') * 0.3 + getEff(u, 'luk') * 0.15)), { heal: true });
    if (!t) return;
    ctx.damage(t, Math.max(1, Math.floor(getEff(u, 'int') * 0.3 + getEff(t, 'luk') * 0.15)), { heal: true });
  },

  sacrifice(ctx) {
    const { u, t, getEff } = ctx;
    const d = Math.max(1, Math.floor(getEff(u, 'int') * 0.5));
    ctx.damage(t, d, { heal: true });
    ctx.damage(u, 3, { selfCost: true });
  },

  // MP steal. Fixes a bug in the original where the stolen amount was written to
  // the target's STR instead of subtracted from its MP.
  manaDrain(ctx) {
    const { u, t, getEff } = ctx;
    if (!t) return;
    const dVal = Math.max(1, Math.floor(getEff(t, 'int') * 0.3));
    t.mp = Math.max(1, (t.mp || 0) - dVal);
    u.mp = (u.mp || 0) + dVal;
    ctx.statText(t.x, t.y, `-${dVal} MP`, false);
    ctx.statText(u.x, u.y, `+${dVal} MP`, true);
  },
};
