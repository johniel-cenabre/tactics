import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { TileType, TILE_COLORS } from '../../world/tile-types.js';
import { CLASS_KEYS, CLASSES } from '../../data/classes.js';

const TERRAIN_TOOLS = [
  { id: TileType.GRASS, label: 'Grass' },
  { id: TileType.PATH, label: 'Path' },
  { id: TileType.TREE, label: 'Tree' },
  { id: TileType.WATER, label: 'Water' },
  { id: TileType.ROCK, label: 'Rock' },
  { id: TileType.BASE_BOTTOM, label: 'Base P1' },
  { id: TileType.BASE_TOP, label: 'Base P2' },
  { id: TileType.CENTER, label: 'Center' },
];

const FACING_OPTIONS = [
  { label: 'North', glyph: '↑', facing: { dx: 0, dy: -1 } },
  { label: 'East', glyph: '→', facing: { dx: 1, dy: 0 } },
  { label: 'South', glyph: '↓', facing: { dx: 0, dy: 1 } },
  { label: 'West', glyph: '←', facing: { dx: -1, dy: 0 } },
];

function hexCss(n) {
  return `#${(n >>> 0).toString(16).padStart(6, '0')}`;
}

class MapEditor extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  _ed() {
    return uiState.value.editor || {};
  }

  _download() {
    actions.editorSave();
  }

  _onFile(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const map = JSON.parse(String(reader.result));
        actions.editorLoad(map);
      } catch (err) {
        actions.editorError(err.message || 'Failed to load map.');
      }
    };
    reader.readAsText(file);
  }

  render() {
    if (uiState.value.screen !== 'editor') return html``;
    const ed = this._ed();
    const tool = ed.tool || 'terrain';
    const tileType = ed.tileType != null ? ed.tileType : TileType.PATH;
    const height = ed.height != null ? ed.height : 1;
    const unitPlayer = ed.unitPlayer || 1;
    const unitClass = ed.unitClass || 'knight';
    const unitLevel = ed.unitLevel || 1;
    const unitFacing = ed.unitFacing || (unitPlayer === 1 ? { dx: 0, dy: -1 } : { dx: 0, dy: 1 });
    const w = ed.w || 35;
    const h = ed.h || 25;

    return html`
      <aside id="map-editor-panel" aria-label="Map editor">
        <header class="me-header">
          <h2 class="me-title">Map Maker</h2>
          <button type="button" class="me-btn me-btn-ghost" @click=${() => actions.closeEditor()}>Back</button>
        </header>

        <div class="me-field">
          <label for="me-name">Map name</label>
          <input id="me-name" type="text" .value=${ed.mapName || 'Untitled'}
            @input=${(e) => actions.editorSetName(e.target.value)} />
        </div>

        <div class="me-row">
          <div class="me-field me-field-half">
            <label for="me-w">Width</label>
            <input id="me-w" type="number" min="5" max="50" .value=${String(w)}
              @change=${(e) => actions.editorResize(Number(e.target.value), h)} />
          </div>
          <div class="me-field me-field-half">
            <label for="me-h">Height</label>
            <input id="me-h" type="number" min="5" max="50" .value=${String(h)}
              @change=${(e) => actions.editorResize(w, Number(e.target.value))} />
          </div>
        </div>

        <section class="me-section">
          <h3 class="me-section-title">Terrain</h3>
          <div class="me-swatches" role="group" aria-label="Tile type">
            ${TERRAIN_TOOLS.map((t) => html`
              <button type="button"
                class="me-swatch ${tool === 'terrain' && tileType === t.id ? 'selected' : ''}"
                title=${t.label}
                style="--swatch:${hexCss(TILE_COLORS[t.id])}"
                @click=${() => actions.editorSetTileType(t.id)}>
                <span class="me-swatch-chip"></span>
                <span class="me-swatch-label">${t.label}</span>
              </button>
            `)}
          </div>
          <div class="me-field">
            <label>Height</label>
            <div class="me-height-row" role="group" aria-label="Tile height">
              ${[0, 1, 2].map((n) => html`
                <button type="button"
                  class="me-btn me-height-btn ${height === n ? 'selected' : ''}"
                  @click=${() => actions.editorSetHeight(n)}>${n}</button>
              `)}
            </div>
          </div>
        </section>

        <section class="me-section">
          <h3 class="me-section-title">Units</h3>
          <div class="me-team-row" role="group" aria-label="Team">
            <button type="button"
              class="me-btn me-team-btn ${tool === 'unit' && unitPlayer === 1 ? 'selected' : ''}"
              @click=${() => actions.editorSetUnitPlayer(1)}>Player 1</button>
            <button type="button"
              class="me-btn me-team-btn p2 ${tool === 'unit' && unitPlayer === 2 ? 'selected' : ''}"
              @click=${() => actions.editorSetUnitPlayer(2)}>Player 2</button>
          </div>
          <div class="me-field">
            <label for="me-class">Class</label>
            <select id="me-class"
              @change=${(e) => actions.editorSetUnitClass(e.target.value)}>
              ${CLASS_KEYS.map((k) => html`
                <option value=${k} ?selected=${unitClass === k}>${CLASSES[k].name}</option>
              `)}
            </select>
          </div>
          <div class="me-field">
            <label>Level</label>
            <div class="me-height-row" role="group" aria-label="Unit level">
              ${[1, 2, 3].map((n) => html`
                <button type="button"
                  class="me-btn me-height-btn ${tool === 'unit' && unitLevel === n ? 'selected' : ''}"
                  @click=${() => actions.editorSetUnitLevel(n)}>${n}</button>
              `)}
            </div>
          </div>
          <div class="me-field">
            <label>Facing</label>
            <div class="me-facing-grid" role="group" aria-label="Unit facing direction">
              ${FACING_OPTIONS.map(({ label, glyph, facing }) => html`
                <button type="button"
                  class="me-btn me-facing-btn ${tool === 'unit'
                    && unitFacing.dx === facing.dx && unitFacing.dy === facing.dy ? 'selected' : ''}"
                  title=${label}
                  aria-label=${label}
                  @click=${() => actions.editorSetUnitFacing(facing)}>${glyph}</button>
              `)}
            </div>
          </div>
          <button type="button"
            class="me-btn me-btn-block ${tool === 'erase' ? 'selected' : ''}"
            @click=${() => actions.editorSetTool('erase')}>Erase unit</button>
          <p class="me-hint">${ed.unitCount || 0} unit(s) placed</p>
        </section>

        <section class="me-actions">
          <button type="button" class="me-btn me-btn-block" @click=${() => actions.editorNew()}>New</button>
          <button type="button" class="me-btn me-btn-block me-btn-primary" @click=${() => this._download()}>Save JSON</button>
          <label class="me-btn me-btn-block me-file-btn">
            Load JSON
            <input type="file" accept="application/json,.json" hidden @change=${(e) => this._onFile(e)} />
          </label>
        </section>

        ${ed.error ? html`<p class="me-error">${ed.error}</p>` : ''}
        <p class="me-hint">Click to paint. Drag to pan. Shift+drag to brush. Ctrl+drag to rotate. Scroll to zoom.</p>
      </aside>
    `;
  }
}
customElements.define('map-editor', MapEditor);
