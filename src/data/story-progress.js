// Local unlock progress for story mode. Index = highest unlocked stage (0-based).

const STORAGE_KEY = 'tactics.story.unlocked';

export function getUnlockedStageIndex() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0) return 0;
    return Math.floor(n);
  } catch {
    return 0;
  }
}

/** Unlock the stage at `index` (and everything before it). */
export function unlockStage(index) {
  const next = Math.max(0, Math.floor(Number(index) || 0));
  const cur = getUnlockedStageIndex();
  if (next <= cur) return cur;
  try {
    localStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    /* ignore quota / private mode */
  }
  return next;
}

/** After winning stage at `wonIndex`, unlock the next one. */
export function unlockNextAfter(wonIndex) {
  return unlockStage((wonIndex | 0) + 1);
}
