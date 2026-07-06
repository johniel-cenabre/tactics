import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';

// "Battle Start" splash shown briefly when the playing phase begins. Light DOM.
class BattleStart extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  render() {
    const on = uiState.value.battleStart;
    return html`
      <div id="battle-start-overlay" class="${on ? 'visible' : ''}" aria-hidden="${on ? 'false' : 'true'}">
        <div class="battle-start-content">
          <div class="battle-start-message">Battle Start</div>
          <div class="battle-start-sword-bar" role="progressbar">
            <div class="battle-start-sword-bar-fill"></div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('battle-start', BattleStart);
