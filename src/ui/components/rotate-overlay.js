import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';

// Prompts the user to rotate to landscape during gameplay on small portrait screens.
// Hidden on mode-select so users can configure a match in portrait. Light DOM.
class RotateOverlay extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  render() {
    if (uiState.value.screen !== 'game') return html``;
    return html`
      <div id="rotate-overlay" aria-hidden="true">
        <div class="rotate-overlay-icon">↻</div>
        <p class="rotate-overlay-text">Rotate to landscape for the best experience.<br />The board needs horizontal space to play.</p>
      </div>
    `;
  }
}
customElements.define('rotate-overlay', RotateOverlay);
