// Assembles the presentation layer and wires it to the sim event bus. Returns the
// pieces main.js needs (scene view for camera/input, the animator for the command
// bus, and the highlight helper for the input controller).

import { TweenScheduler } from '../core/tween.js';
import { SceneView } from './scene.js';
import { UnitRenderer } from './units.js';
import { Highlights } from './highlights.js';
import { PowerupRenderer } from './powerups.js';
import { FloatingText } from './floating-text.js';

export function createRenderer(container, state, bus) {
  const view = new SceneView(container, state.world);
  const tween = new TweenScheduler();
  tween.onFrame = () => view.setPresentationActive({ camera: view._cameraActive, tweens: tween.active });

  const units = new UnitRenderer(view, state, bus, tween);
  const highlights = new Highlights(view);
  const powerups = new PowerupRenderer(view, bus);
  const floatingText = new FloatingText(view);

  bus.on('floatingText', ({ gx, gy, text, kind }) => {
    const isMiss = kind === 'miss';
    const extraClass = kind === 'damage' || kind === 'miss' ? undefined : kind;
    floatingText.showCombat(gx, gy, text, isMiss, extraClass);
  });
  bus.on('levelUp', ({ unit }) => {
    // Color the LEVEL UP text by the unit's new tier (orange at 2, purple at 3).
    const levelClass = unit.level >= 3 ? 'levelup level3' : unit.level >= 2 ? 'levelup level2' : 'levelup';
    floatingText.showLevelUp(unit.x, unit.y, levelClass);
  });

  view.start();

  return { view, tween, units, highlights, powerups, floatingText, animator: units };
}
