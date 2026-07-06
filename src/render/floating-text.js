// DOM floating combat text (damage numbers, MISS, skill names, LEVEL UP). Projects a
// world tile position to screen space each frame for the life of the label.

export class FloatingText {
  constructor(sceneView) {
    this.view = sceneView;
    this.layer = document.createElement('div');
    this.layer.id = 'combat-text-layer';
    sceneView.container.appendChild(this.layer);
  }

  _spawn(worldGetter, text, className, yOffset, durationMs) {
    const el = document.createElement('div');
    el.className = className;
    el.textContent = text;
    el.style.position = 'absolute';
    this.layer.appendChild(el);
    const view = this.view;
    const start = performance.now();
    let frameCount = 0;
    const proj = view.worldPos(0, 0).clone();
    const update = () => {
      worldGetter(proj);
      proj.y += yOffset;
      proj.project(view.camera);
      const w = view.container.clientWidth;
      const h = view.container.clientHeight;
      el.style.left = (proj.x * 0.5 + 0.5) * w + 'px';
      el.style.top = (1 - (proj.y * 0.5 + 0.5)) * h + 'px';
    };
    const tick = () => {
      if (frameCount % 2 === 0) update();
      frameCount++;
      if (performance.now() - start < durationMs) requestAnimationFrame(tick);
      else el.remove();
    };
    requestAnimationFrame(tick);
  }

  showCombat(gx, gy, text, isMiss, extraClass) {
    const className = 'combat-text-float ' + (isMiss ? 'miss' : 'damage') + (extraClass ? ' ' + extraClass : '');
    const yOffset = extraClass === 'skill-name' ? 1.7 : 1.2;
    this._spawn((out) => this.view.worldPos(gx, gy, out), text, className, yOffset, 1400);
  }

  showLevelUp(gx, gy, levelClass) {
    const className = 'combat-text-float ' + (levelClass || 'levelup');
    this._spawn((out) => this.view.worldPos(gx, gy, out), 'LEVEL UP!', className, 1.2, 1500);
  }
}
