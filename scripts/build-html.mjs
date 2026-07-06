// Generates the production index.html at the repo root (for GitHub Pages) from
// the source template in src/, pointing at the bundled game.js instead of the
// dev bundle. Keeping the deploy output at the root preserves the existing
// GitHub Pages workflow (.github/workflows/static.yml uploads the whole repo).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const template = readFileSync(join(root, 'src', 'index.html'), 'utf8');
const html = template.replace('game.bundle.js', 'game.js');
writeFileSync(join(root, 'index.html'), html);
console.log('Wrote index.html');
