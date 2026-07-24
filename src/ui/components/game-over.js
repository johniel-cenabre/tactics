import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { CLASS_IMAGES } from '../../data/class-look.js';
import { STAGES } from '../../data/stages.js';

const STAT_KEYS = ['str', 'agi', 'vit', 'dex', 'luk', 'int'];

// End-of-match overlay: winner title, surviving unit cards, optional dev class
// record table. Light DOM to reuse #game-over-overlay styles.
class GameOver extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  _levelClass(level) {
    if (level >= 3) return 'level-3';
    if (level >= 2) return 'level-2';
    return '';
  }

  _renderCard(c) {
    const levelClass = this._levelClass(c.level);
    return html`
      <div class="game-over-card ${levelClass} ${c.lowHp ? 'low-hp' : ''}">
        <img class="game-over-card-image" src="${CLASS_IMAGES[c.class] || ''}" alt="" referrerpolicy="no-referrer" />
        <div class="game-over-card-body">
          <div class="game-over-card-name">${c.name}</div>
          <div class="game-over-card-meta">Lv.${c.level} ${c.class} — HP ${c.hp}/${c.maxHp}</div>
          <div class="game-over-card-stats">
            <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${c.hp}/${c.maxHp}</span>
            <span class="stat-label">MP</span><span class="stat-val">${c.mp}/${c.maxMp}</span>
            ${STAT_KEYS.map((k) => html`
              <span class="stat-label">${k.toUpperCase()}</span>
              <span class="stat-val">${c.stats[k]}</span>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  _renderClassRecord(rows) {
    return html`
      <div class="game-over-class-record">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Battles</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>Loss %</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((r) => html`
              <tr>
                <td class="class-name">${r.class}</td>
                <td>${r.battles}</td>
                <td>${r.kills}</td>
                <td>${r.deaths}</td>
                <td>${r.wins}</td>
                <td>${r.losses}</td>
                <td>${r.winRate}</td>
                <td>${r.lossRate}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }

  _storyButtons(go) {
    const hasNext = go.outcome === 'win'
      && go.nextStageIndex != null
      && STAGES[go.nextStageIndex];
    return html`
      <div class="game-over-actions">
        <button type="button" class="mode-play-btn" @click=${() => actions.retryStage()}>
          <span class="mode-play-text">Retry</span>
        </button>
        ${hasNext ? html`
          <button type="button" class="mode-play-btn" @click=${() => actions.nextStage()}>
            <span class="mode-play-text">Next level</span>
          </button>
        ` : ''}
        <button type="button" class="mode-play-btn mode-play-btn-secondary" @click=${() => actions.openStorySelect()}>
          <span class="mode-play-text">Level select</span>
        </button>
        <button type="button" class="mode-play-btn mode-play-btn-secondary" @click=${() => actions.toModeSelect()}>
          <span class="mode-play-text">Main menu</span>
        </button>
      </div>
    `;
  }

  render() {
    const go = uiState.value.gameOver;
    if (!go) return html``;
    const cards = go.cards || [];
    const isStory = !!go.outcome;

    return html`
      <div id="game-over-overlay" class="visible ${isStory ? `story-${go.outcome}` : ''}">
        <div class="game-over-title">${go.title}</div>
        <div class="game-over-cards">
          ${cards.map((c) => this._renderCard(c))}
        </div>
        ${go.classRecord ? this._renderClassRecord(go.classRecord) : ''}
        ${isStory
          ? this._storyButtons(go)
          : html`
            <button type="button" class="mode-play-btn" @click=${() => actions.toModeSelect()}>
              <span class="mode-play-text">Main menu</span>
            </button>
          `}
      </div>
    `;
  }
}
customElements.define('game-over-screen', GameOver);
