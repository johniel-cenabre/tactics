import { LitElement, html } from 'lit';
import { SignalWatcher } from '../../core/store.js';
import './mode-select.js';
import './hud.js';
import './turn-menu.js';
import './draft-panel.js';
import './unit-preview.js';
import './game-over.js';
import './battle-start.js';
import './rotate-overlay.js';
import './online-connect.js';

// Root overlay. Sits above #canvas-wrap and hosts every screen/overlay. Each child
// decides its own visibility from the store, so app-root just mounts them all.
class AppRoot extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  render() {
    return html`
      <mode-select-screen></mode-select-screen>
      <hud-bar></hud-bar>
      <draft-panel></draft-panel>
      <turn-menu></turn-menu>
      <unit-preview></unit-preview>
      <battle-start></battle-start>
      <game-over-screen></game-over-screen>
      <rotate-overlay></rotate-overlay>
      <online-connect></online-connect>
    `;
  }
}
customElements.define('app-root', AppRoot);
