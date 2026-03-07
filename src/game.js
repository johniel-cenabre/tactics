/**
 * Turn-based tile tactics game — Three.js (3D)
 * World: path from base to base (circular corridor), obstacles enclose the path.
 */

import * as THREE from 'three';

const GRID_W = 37;
const GRID_H = 27;
const TILE_SIZE = 0.95;
const BASE_HEIGHT = 0.35;
const DRAFT_PICKS_PER_PLAYER = 5;
const MAX_TURNS = 200;
const MOVE_DURATION_MS = 100;

const TileType = {
  PATH: 0,
  GRASS: 1,
  TREE: 2,
  WATER: 3,
  ROCK: 4,
  BASE_TOP: 5,
  BASE_BOTTOM: 6,
  CENTER: 7,
};

const CLASS_KEYS = ['knight', 'mage', 'monk', 'ghoul', 'lancer', 'hunter', 'assassin', 'berserker', 'witch', 'ninja', 'samurai', 'werewolf'];

const CLASSES = {
  knight:   { name: 'Knight',   gender: 'male',  hp: 27, maxHp: 27, mp: 5,  maxMp: 5,  str: 13, agi: 8,  vit: 13, dex: 10, luk: 4,  int: 7,  range: 1 },
  mage:    { name: 'Mage',     gender: 'female', hp: 17, maxHp: 17, mp: 22, maxMp: 22, str: 6,  agi: 4,  vit: 5,  dex: 4,  luk: 13, int: 15, range: 4 },
  monk:    { name: 'Monk',     gender: 'male',   hp: 23, maxHp: 23, mp: 12, maxMp: 12, str: 10, agi: 10, vit: 10, dex: 9,  luk: 9,  int: 10, range: 1 },
  ghoul:   { name: 'Ghoul',    gender: 'male',   hp: 21, maxHp: 21, mp: 6,  maxMp: 6,  str: 11, agi: 9,  vit: 9,  dex: 11, luk: 11, int: 5,  range: 1 },
  lancer:  { name: 'Lancer',   gender: 'female', hp: 22, maxHp: 22, mp: 7,  maxMp: 7,  str: 13, agi: 11, vit: 10, dex: 6,  luk: 5,  int: 8,  range: 2 },
  hunter:  { name: 'Hunter',   gender: 'female', hp: 19, maxHp: 19, mp: 9,  maxMp: 9,  str: 7,  agi: 5,  vit: 7,  dex: 15, luk: 12, int: 5,  range: 6 },
  assassin:{ name: 'Assassin', gender: 'female', hp: 18, maxHp: 18, mp: 10, maxMp: 10, str: 9,  agi: 14, vit: 6,  dex: 14, luk: 10, int: 4,  range: 1 },
  berserker:{ name: 'Berserker', gender: 'male', hp: 30, maxHp: 30, mp: 2,  maxMp: 2,  str: 15, agi: 7,  vit: 12, dex: 8,  luk: 6,  int: 2,  range: 1 },
  witch:   { name: 'Witch',    gender: 'female', hp: 16, maxHp: 16, mp: 24, maxMp: 24, str: 5,  agi: 6,  vit: 4,  dex: 5,  luk: 14, int: 14, range: 3 },
  ninja:   { name: 'Ninja',    gender: 'female', hp: 20, maxHp: 20, mp: 12, maxMp: 12, str: 8,  agi: 15, vit: 7,  dex: 12, luk: 8,  int: 9,  range: 1 },
  samurai: { name: 'Samurai',  gender: 'male',   hp: 24, maxHp: 24, mp: 8,  maxMp: 8,  str: 12, agi: 12, vit: 8,  dex: 13, luk: 7,  int: 6,  range: 1 },
  werewolf:{ name: 'Werewolf', gender: 'male',   hp: 25, maxHp: 25, mp: 4,  maxMp: 4,  str: 14, agi: 13, vit: 11, dex: 7,  luk: 6,  int: 3,  range: 1 },
};

const CLASS_LOOK = {
  knight:   { primary: 0x696969, secondary: 0x8B4513, hair: 0xC4A484, cape: 0x333333 },
  mage:     { primary: 0xFFFDD0, secondary: 0x333333, hair: 0xCBC3E3, cape: 0x4A0E4E },
  monk:     { primary: 0xFFFFE4, secondary: 0xF5F5F5, hair: 0x2c1810 },
  ghoul:    { primary: 0x008080, secondary: 0x654321, hair: 0x008080, skin: 0x008080 },
  lancer:   { primary: 0x305CDE, secondary: 0xFFFDD0, hair: 0xF1EAD2, cape: 0xDC143C },
  hunter:   { primary: 0x808000, secondary: 0x92400e, hair: 0x78866B, cape: 0xF5F5F5 },
  assassin: { primary: 0x0F0E47, secondary: 0xF5F5F5, hair: 0x280137 },
  berserker:{ primary: 0x0A0A0A, secondary: 0x0F0E47, hair: 0x0A0A0A, cape: 0x111111 },
  witch:    { primary: 0xF5F5F5, secondary: 0x800020, hair: 0xFFFFE4, cape: 0x228B22 },
  ninja:    { primary: 0x04141c, secondary: 0x486581, hair: 0x486581 },
  samurai:  { primary: 0xD3D3D3, secondary: 0x36454F, hair: 0x36454F },
  werewolf: { primary: 0xA9A9A9, secondary: 0xDCDCDC, hair: 0xC0C0C0 },
};

const CLASS_IMAGES = {
  knight:   'https://creator.nightcafe.studio/jobs/OlIWpAye2LeM5gPkAGEI/OlIWpAye2LeM5gPkAGEI--1--xc223.jpg',
  mage:     'https://media.craiyon.com/2025-08-13/bLqz0LbwSIynOcUHty4Maw.webp',
  monk:     'https://cdnb.artstation.com/p/assets/images/images/028/576/499/large/ahruna-art-oct17.jpg?1594859688',
  ghoul:    'https://i.pinimg.com/736x/d3/cc/41/d3cc41778d05dec0371a69e29659f792.jpg',
  lancer:   'https://i.redd.it/zolf64gpoa0c1.jpg',
  hunter:   'https://coolvibe.com/wp-content/uploads/2011/02/hunter.jpg',
  assassin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2-NBPpPOU7duYgN_k_9oFKZ5hJjU28qyoA&s',
  berserker:'https://entertainment.inquirer.net/files/2016/07/top_bg.jpg',
  witch:    'https://w0.peakpx.com/wallpaper/382/134/HD-wallpaper-evil-witch-witch-female-dress-white-hair-evil-black-woman-girl-darkness-anime-dark-beauty-lady-long-hair.jpg',
  ninja:    'https://i.pinimg.com/474x/02/88/60/0288609778e53701b7e64051d7164922.jpg',
  samurai:  'https://files.idyllic.app/files/static/3120390?width=256&optimizer=image',
  werewolf: 'https://i.pinimg.com/736x/1f/95/27/1f9527c6255465547d664f19dd11967c.jpg',
};

const CLASS_SKILLS = {
  ninja: [
    {
      name: 'Blind',
      description: 'Steals 1 dex from an enemy unit.',
      cost: 6,
      target: 'enemy',
      range: 1,
      level: 2,
      effect: (unit, target) => blind({ unit, target, mp: 6, level: 2 }),
    }, 
    {

    }
  ],
};

function createWorld() {
  const w = GRID_W;
  const h = GRID_H;
  const path = Array.from({ length: h }, () => Array(w).fill(false));
  const height = Array.from({ length: h }, () => Array(w).fill(0));
  const type = Array.from({ length: h }, () => Array(w).fill(TileType.GRASS));

  const topBaseX = Math.floor(w / 2);
  const botBaseX = Math.floor(w / 2);
  const topBaseY = 0;
  const botBaseY = h - 1;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = topBaseX + dx;
      const y = topBaseY + dy;
      if (x >= 0 && x < w && y >= 0 && y < h) {
        path[y][x] = true;
        type[y][x] = TileType.BASE_TOP;
        height[y][x] = 1;
      }
    }
  }
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = botBaseX + dx;
      const y = botBaseY + dy;
      if (x >= 0 && x < w && y >= 0 && y < h) {
        path[y][x] = true;
        type[y][x] = TileType.BASE_BOTTOM;
        height[y][x] = 1;
      }
    }
  }

  const centerX = Math.floor(w / 2);
  const centerY = Math.floor(h / 2);
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = centerX + dx;
      const y = centerY + dy;
      if (x >= 0 && x < w && y >= 0 && y < h) {
        path[y][x] = true;
        type[y][x] = TileType.CENTER;
        height[y][x] = 1;
      }
    }
  }

  // Two arcs (left and right) from bottom base to top base — do not connect through center plaza
  const pathCells = new Set();
  const inCenterPlaza = (x, y) =>
    Math.abs(x - centerX) <= 2 && Math.abs(y - centerY) <= 1;
  const addPath = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    if (inCenterPlaza(x, y)) return;
    pathCells.add(y * w + x);
  };
  const cx = Math.floor(w / 2);
  const cy = Math.floor(h / 2);
  const radius = Math.min(w, h) * 0.28;
  const numSamples = Math.max(60, (h + w) * 2);
  for (let arc = 0; arc < 2; arc++) {
    const centerXArc = arc === 0 ? cx - radius : cx + radius;
    const thetaStart = arc === 0 ? Math.PI / 2 : -Math.PI / 2;
    const thetaEnd = arc === 0 ? (Math.PI * 3) / 2 : Math.PI / 2;
    for (let i = 0; i <= numSamples; i++) {
      const t = i / numSamples;
      const theta = thetaStart + t * (thetaEnd - thetaStart);
      const px = centerXArc + radius * Math.cos(theta);
      const py = cy + radius * Math.sin(theta);
      const gx = Math.round(px);
      const gy = Math.round(py);
      addPath(gx, gy);
      addPath(gx + 1, gy);
      addPath(gx - 1, gy);
      addPath(gx, gy + 1);
      addPath(gx, gy - 1);
    }
  }
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let dilate = 0; dilate < 1; dilate++) {
    const toAdd = [];
    pathCells.forEach((k) => {
      const x = k % w;
      const y = (k / w) | 0;
      for (const [dx, dy] of dirs) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
        const nk = ny * w + nx;
        if (!pathCells.has(nk)) toAdd.push(nk);
      }
    });
    toAdd.forEach((k) => pathCells.add(k));
  }
  pathCells.forEach((k) => {
    const x = k % w;
    const y = (k / w) | 0;
    if (type[y][x] === TileType.BASE_TOP || type[y][x] === TileType.BASE_BOTTOM || type[y][x] === TileType.CENTER) return;
    path[y][x] = true;
    type[y][x] = TileType.PATH;
    height[y][x] = 1;
  });

  // Connector path: cross the map through the arc midpoints and the center plaza
  const leftArcMidX = Math.round(cx - radius * 1.6);
  const rightArcMidX = Math.round(cx + radius * 1.6);
  const leftArcX = Math.round(cx - radius);
  const rightArcX = Math.round(cx + radius);
  const bridgeHalfWidth = 1; // 3 tiles thick
  for (let by = centerY - bridgeHalfWidth; by <= centerY + bridgeHalfWidth; by++) {
    if (by < 0 || by >= h) continue;
    for (let bx = leftArcMidX; bx <= rightArcMidX; bx++) {
      if (bx < 0 || bx >= w) continue;
      path[by][bx] = true;
      if (type[by][bx] !== TileType.CENTER && type[by][bx] !== TileType.BASE_TOP && type[by][bx] !== TileType.BASE_BOTTOM) {
        type[by][bx] = TileType.PATH;
      }
      height[by][bx] = Math.max(height[by][bx], 1);
    }
  }

  // Side paths: connect arcs to top and bottom bases (path along both sides of each base)
  function fillPathStrip(yStart, yEnd, xStart, xEnd) {
    const y0 = Math.max(1, Math.min(yStart, yEnd));
    const y1 = Math.min(h - 2, Math.max(yStart, yEnd));
    const x0 = Math.max(1, Math.min(xStart, xEnd));
    const x1 = Math.min(w - 2, Math.max(xStart, xEnd));
    for (let yy = y0; yy <= y1; yy++) {
      for (let xx = x0; xx <= x1; xx++) {
        if (type[yy][xx] === TileType.BASE_TOP || type[yy][xx] === TileType.BASE_BOTTOM || type[yy][xx] === TileType.CENTER) continue;
        path[yy][xx] = true;
        type[yy][xx] = TileType.PATH;
        height[yy][xx] = 1;
      }
    }
  }
  const topBaseRows = 3;
  const botBaseRows = 3;
  fillPathStrip(topBaseY, topBaseY + topBaseRows - 1, leftArcX, topBaseX - 1);
  fillPathStrip(topBaseY, topBaseY + topBaseRows - 1, topBaseX + 1, rightArcX);
  fillPathStrip(botBaseY - botBaseRows + 1, botBaseY, leftArcX, botBaseX - 1);
  fillPathStrip(botBaseY - botBaseRows + 1, botBaseY, botBaseX + 1, rightArcX);

  for (let dy = -1; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = topBaseX + dx;
      const y = topBaseY + dy;
      if (x >= 0 && x < w && y >= 0 && y < h) {
        path[y][x] = true;
        type[y][x] = TileType.BASE_TOP;
        height[y][x] = 1;
      }
    }
  }
  for (let dy = -2; dy <= 1; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const x = botBaseX + dx;
      const y = botBaseY + dy;
      if (x >= 0 && x < w && y >= 0 && y < h) {
        path[y][x] = true;
        type[y][x] = TileType.BASE_BOTTOM;
        height[y][x] = 1;
      }
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (path[y][x]) continue;
      if (type[y][x] === TileType.BASE_TOP || type[y][x] === TileType.BASE_BOTTOM || type[y][x] === TileType.CENTER) continue;
      const r = Math.random();
      if (r < 0.35) {
        type[y][x] = TileType.TREE;
        height[y][x] = 1 + Math.floor(Math.random() * 2);
      } else if (r < 0.55) {
        type[y][x] = TileType.WATER;
        height[y][x] = 0;
      } else {
        type[y][x] = TileType.ROCK;
        height[y][x] = 1 + Math.floor(Math.random() * 2);
      }
    }
  }

  return { w, h, path, height, type, topBaseX, topBaseY, botBaseX, botBaseY };
}

function getBaseTiles(world, player, occupiedKeys) {
  const baseType = player === 1 ? TileType.BASE_BOTTOM : TileType.BASE_TOP;
  const out = [];
  for (let gy = 0; gy < world.h; gy++) {
    for (let gx = 0; gx < world.w; gx++) {
      if (world.type[gy][gx] !== baseType) continue;
      if (occupiedKeys && occupiedKeys.has(gy * world.w + gx)) continue;
      out.push({ gx, gy });
    }
  }
  return out;
}

function isWalkable(world, x, y) {
  if (x < 0 || x >= world.w || y < 0 || y >= world.h) return false;
  const t = world.type[y][x];
  if (t === TileType.TREE || t === TileType.WATER || t === TileType.ROCK) return false;
  return true;
}

function getReachable(world, startX, startY, maxMoves, units, movingUnit) {
  const key = (x, y) => y * world.w + x;
  const dist = new Map();
  dist.set(key(startX, startY), 0);
  const queue = [{ x: startX, y: startY, d: 0 }];
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const blockEnemies = units != null && movingUnit != null;
  while (queue.length) {
    const { x, y, d } = queue.shift();
    if (d >= maxMoves) continue;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      if (!isWalkable(world, nx, ny)) continue;
      if (blockEnemies) {
        const occupant = units.find((u) => u.hp > 0 && u.x === nx && u.y === ny);
        if (occupant && occupant.player !== movingUnit.player) continue;
      }
      const k = key(nx, ny);
      if (dist.has(k)) continue;
      const nd = d + 1;
      dist.set(k, nd);
      queue.push({ x: nx, y: ny, d: nd });
    }
  }
  return dist;
}

/** Tiles within Manhattan distance <= range (for attack range). Returns Map key -> dist (1..range). */
function getTilesInManhattanRange(world, centerX, centerY, range) {
  const dist = new Map();
  for (let gy = 0; gy < world.h; gy++) {
    for (let gx = 0; gx < world.w; gx++) {
      const d = Math.abs(gx - centerX) + Math.abs(gy - centerY);
      if (d >= 1 && d <= range) dist.set(gy * world.w + gx, d);
    }
  }
  return dist;
}

function getPath(world, startX, startY, endX, endY, units, movingUnit) {
  if (startX === endX && startY === endY) return [{ x: startX, y: startY }];
  const key = (x, y) => y * world.w + x;
  const parent = new Map();
  const queue = [{ x: startX, y: startY }];
  parent.set(key(startX, startY), null);
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function canPass(x, y) {
    if (!isWalkable(world, x, y)) return false;
    const occupant = units.find((u) => u.hp > 0 && u.x === x && u.y === y);
    if (!occupant) return true;
    return occupant.id === movingUnit.id || occupant.player === movingUnit.player;
  }

  while (queue.length) {
    const { x, y } = queue.shift();
    if (x === endX && y === endY) {
      const pathArr = [];
      let cur = { x: endX, y: endY };
      while (cur) {
        pathArr.unshift(cur);
        cur = parent.get(key(cur.x, cur.y));
      }
      return pathArr;
    }
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;
      const k = key(nx, ny);
      if (parent.has(k)) continue;
      if (!canPass(nx, ny)) continue;
      parent.set(k, { x, y });
      queue.push({ x: nx, y: ny });
    }
  }
  return null;
}

const colors = {
  [TileType.PATH]: 0x5a7a5a,
  [TileType.GRASS]: 0x2d4a2d,
  [TileType.TREE]: 0x1e3d1e,
  [TileType.WATER]: 0x1a4a6a,
  [TileType.ROCK]: 0x5a5a5a,
  [TileType.BASE_TOP]: 0x7a4a4a,
  [TileType.BASE_BOTTOM]: 0x4a5a7a,
  [TileType.CENTER]: 0xd4b84a,
};

function halfW(world) {
  return (world.w * TILE_SIZE) / 2;
}
function halfH(world) {
  return (world.h * TILE_SIZE) / 2;
}

function buildTileMesh(world) {
  const group = new THREE.Group();
  const hw = halfW(world);
  const hh = halfH(world);
  const groundGeo = new THREE.BoxGeometry(TILE_SIZE * 0.98, BASE_HEIGHT, TILE_SIZE * 0.98);
  const sharedMat = new THREE.MeshStandardMaterial({ roughness: 0.88, metalness: 0.02 });

  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      const t = world.type[y][x];
      const elev = world.height[y][x];
      const color = colors[t];
      const topY = BASE_HEIGHT + elev * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const mat = sharedMat.clone();
      mat.color.setHex(color);
      const mesh = new THREE.Mesh(groundGeo, mat);
      mesh.position.set(
        x * TILE_SIZE - hw + TILE_SIZE / 2,
        topY / 2,
        y * TILE_SIZE - hh + TILE_SIZE / 2
      );
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { gx: x, gy: y, type: t };
      group.add(mesh);

      const px = x * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = y * TILE_SIZE - hh + TILE_SIZE / 2;

      if (t === TileType.TREE) {
        const trunkH = 0.5 + Math.random() * 0.2;
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.14, trunkH, 8),
          new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.95 })
        );
        trunk.position.set(px, surfaceY + trunkH / 2, pz);
        trunk.castShadow = true;
        group.add(trunk);
        const foliage = new THREE.Mesh(
          new THREE.ConeGeometry(0.45, 0.9, 8),
          new THREE.MeshStandardMaterial({ color: 0x2d5a2d, roughness: 0.9 })
        );
        foliage.position.set(px, surfaceY + trunkH + 0.35, pz);
        foliage.castShadow = true;
        group.add(foliage);
      } else if (t === TileType.WATER) {
        const water = new THREE.Mesh(
          new THREE.PlaneGeometry(TILE_SIZE * 0.9, TILE_SIZE * 0.9),
          new THREE.MeshStandardMaterial({
            color: 0x2a6a9a,
            roughness: 0.2,
            metalness: 0.3,
            transparent: true,
            opacity: 0.92,
          })
        );
        water.rotation.x = -Math.PI / 2;
        water.position.set(px, surfaceY + 0.02, pz);
        water.receiveShadow = true;
        group.add(water);
      } else if (t === TileType.ROCK) {
        const s = 0.25 + Math.random() * 0.15;
        const rock = new THREE.Mesh(
          new THREE.DodecahedronGeometry(s, 0),
          new THREE.MeshStandardMaterial({ color: 0x6a6a6a, roughness: 0.9 })
        );
        rock.position.set(px + (Math.random() - 0.5) * 0.2, surfaceY + s - 0.2, pz + (Math.random() - 0.5) * 0.2);
        rock.rotation.set(Math.random(), Math.random(), Math.random());
        rock.castShadow = true;
        group.add(rock);
      }
    }
  }
  return group;
}

function main() {
  const world = createWorld();
  const container = document.getElementById('canvas-wrap');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1e24);
  scene.fog = new THREE.Fog(0x1a1e24, 30, 90);

  const cx = (world.w * TILE_SIZE) / 2;
  const cz = (world.h * TILE_SIZE) / 2;
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 200);
  const INITIAL_ZOOM = 20;
  const cameraOffset = new THREE.Vector3(12, 38, 16).normalize().multiplyScalar(INITIAL_ZOOM);
  const cameraTarget = new THREE.Vector3();
  const _zoomDir = new THREE.Vector3();
  const panPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const panIntersect = new THREE.Vector3();
  const zoomDir = new THREE.Vector3();
  let isPanning = false;
  let isRotating = false;
  let ctrlKeyOnDown = false;
  let prevPointerNdc = null;
  const CLICK_DRAG_THRESHOLD_PX = 5;
  const ROTATE_SENSITIVITY = 0.004;
  const ELEVATION_MIN = -Math.PI * 0.4;
  const ELEVATION_MAX = Math.PI * 0.4;
  const _orbitOffset = new THREE.Vector3();
  let pointerDownPixel = { x: 0, y: 0 };
  const ZOOM_MIN = 1;
  const ZOOM_MAX = 40;
  const ZOOM_SENSITIVITY = 0.08;

  const ambient = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xfff5e6, 1.1);
  sun.position.set(30, 50, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 120;
  sun.shadow.camera.left = -50; sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
  scene.add(sun);

  const tilesGroup = buildTileMesh(world);
  scene.add(tilesGroup);

  const units = [];
  let nextUnitId = 1;
  const unitMeshes = new Map();
  const hw = halfW(world);
  const hh = halfH(world);
  function worldPos(gx, gy) {
    const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
    const surfaceY = topY / 2 + BASE_HEIGHT / 2;
    return new THREE.Vector3(
      gx * TILE_SIZE - hw + TILE_SIZE / 2,
      surfaceY,
      gy * TILE_SIZE - hh + TILE_SIZE / 2
    );
  }

  function createHumanFigure(player, classKey, hairColor) {
    const look = CLASS_LOOK[classKey] || CLASS_LOOK.knight;
    const primary = look.primary;
    const secondary = look.secondary;
    const gender = (CLASSES[classKey] && CLASSES[classKey].gender) || 'male';
    const hairHex = hairColor != null ? hairColor : 0x3d2314;
    const torsoMat = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: 0.25,
      roughness: 0.5,
    });
    const legMat = new THREE.MeshStandardMaterial({
      color: secondary,
      metalness: 0.2,
      roughness: 0.55,
    });
    const armMat = new THREE.MeshStandardMaterial({
      color: primary,
      metalness: 0.25,
      roughness: 0.5,
    });
    const skin = new THREE.MeshStandardMaterial({
      color: look.skin != null ? look.skin : 0xe8b4a0,
      metalness: 0.1,
      roughness: 0.7,
    });
    const group = new THREE.Group();

    const legH = 0.28;
    const legW = 0.08;
    const legD = 0.08;
    const leftLeg = new THREE.Mesh(
      new THREE.BoxGeometry(legW, legH, legD),
      legMat
    );
    leftLeg.position.set(-0.06, legH / 2, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    const rightLeg = new THREE.Mesh(
      new THREE.BoxGeometry(legW, legH, legD),
      legMat
    );
    rightLeg.position.set(0.06, legH / 2, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);

    const torsoH = 0.28;
    const torsoW = 0.2;
    const torsoD = 0.12;
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(torsoW, torsoH, torsoD),
      torsoMat
    );
    torso.position.set(0, legH + torsoH / 2, 0);
    torso.castShadow = true;
    group.add(torso);

    const armW = 0.06;
    const armH = 0.22;
    const armD = 0.06;
    const leftArm = new THREE.Mesh(
      new THREE.BoxGeometry(armW, armH, armD),
      armMat
    );
    leftArm.position.set(-(torsoW / 2 + armW / 2), legH + torsoH - 0.08, 0);
    leftArm.castShadow = true;
    group.add(leftArm);
    const rightArm = new THREE.Mesh(
      new THREE.BoxGeometry(armW, armH, armD),
      armMat
    );
    rightArm.position.set(torsoW / 2 + armW / 2, legH + torsoH - 0.08, 0);
    rightArm.castShadow = true;
    group.add(rightArm);

    if (look.cape != null) {
      const capeW = torsoW * 1.35;
      const capeH = legH + torsoH * 0.15;
      const capeGeo = new THREE.PlaneGeometry(capeW, capeH);
      const capeMat = new THREE.MeshStandardMaterial({
        color: look.cape,
        metalness: 0.15,
        roughness: 0.8,
        side: THREE.DoubleSide,
      });
      const cape = new THREE.Mesh(capeGeo, capeMat);
      cape.position.set(0, legH + capeH / 2 - 0.02, -torsoD / 2 - 0.02);
      cape.rotation.y = Math.PI;
      cape.castShadow = true;
      group.add(cape);
    }

    const headRadius = 0.1;
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(headRadius, 12, 10),
      skin
    );
    head.position.set(0, legH + torsoH + headRadius, 0);
    head.castShadow = true;
    group.add(head);

    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e });
    const leftEye = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 8, 6),
      eyeMat
    );
    leftEye.position.set(-0.032, 0.028, headRadius * 0.92);
    head.add(leftEye);
    const rightEye = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 8, 6),
      eyeMat
    );
    rightEye.position.set(0.032, 0.028, headRadius * 0.92);
    head.add(rightEye);

    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x2d1f1f });
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.045, 0.012, 0.008),
      mouthMat
    );
    mouth.position.set(0, -0.028, headRadius * 0.92);
    head.add(mouth);

    const hairMat = new THREE.MeshStandardMaterial({
      color: hairHex,
      metalness: 0.05,
      roughness: 0.85,
    });
    if (gender === 'female') {
      const hairTop = new THREE.Mesh(
        new THREE.SphereGeometry(headRadius * 0.85, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.45),
        hairMat
      );
      hairTop.position.set(0, headRadius * 0.35, -headRadius * 0.2);
      hairTop.castShadow = true;
      head.add(hairTop);
      const hairLong = new THREE.Mesh(
        new THREE.BoxGeometry(headRadius * 1.1, headRadius * 2.2, headRadius * 0.5),
        hairMat
      );
      hairLong.position.set(0, -headRadius * 0.6, -headRadius * 0.95);
      hairLong.castShadow = true;
      head.add(hairLong);
    } else {
      const hairShort = new THREE.Mesh(
        new THREE.SphereGeometry(headRadius * 0.82, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.35),
        hairMat
      );
      hairShort.position.set(0, headRadius * 0.5, -headRadius * 0.15);
      hairShort.castShadow = true;
      head.add(hairShort);
    }

    group.userData.leftLeg = leftLeg;
    group.userData.rightLeg = rightLeg;
    group.userData.leftArm = leftArm;
    group.userData.rightArm = rightArm;
    return group;
  }

  function setWalkPose(mesh, t) {
    const u = mesh.userData;
    if (!u.leftLeg) return;
    const phase = t * Math.PI * 2;
    const legSwing = 0.4;
    const armSwing = 0.35;
    u.leftLeg.rotation.x = Math.sin(phase) * legSwing;
    u.rightLeg.rotation.x = Math.sin(phase + Math.PI) * legSwing;
    u.leftArm.rotation.y = Math.sin(phase + Math.PI) * armSwing;
    u.rightArm.rotation.y = Math.sin(phase) * armSwing;
  }

  function resetWalkPose(mesh) {
    const u = mesh.userData;
    if (!u.leftLeg) return;
    u.leftLeg.rotation.x = 0;
    u.rightLeg.rotation.x = 0;
    u.leftArm.rotation.y = 0;
    u.rightArm.rotation.y = 0;
  }

  function addUnitToScene(unit) {
    const body = createHumanFigure(unit.player, unit.class, unit.hairColor);
    body.position.copy(worldPos(unit.x, unit.y));
    body.castShadow = true;
    body.userData.unitId = unit.id;
    scene.add(body);
    unitMeshes.set(unit.id, body);
  }

  function levelUpUnit(unit) {
    if (unit.level >= 3) return;
    const hpRatio = unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
    unit.level += 1;
    const boost = (v) => Math.max(1, Math.ceil(v * 1.1));
    const boostStat = (v) => Math.max(1, Math.ceil(v * 1.1));
    unit.maxHp = boost(unit.maxHp);
    unit.maxMp = boost(unit.maxMp);
    unit.hp = Math.max(1, Math.min(unit.maxHp, Math.ceil(hpRatio * unit.maxHp)));
    unit.mp = Math.max(1, Math.min(unit.maxMp, Math.ceil(hpRatio * unit.maxMp)));
    unit.str = boostStat(unit.str);
    unit.agi = boostStat(unit.agi);
    unit.vit = boostStat(unit.vit);
    unit.dex = boostStat(unit.dex);
    unit.luk = boostStat(unit.luk);
    unit.int = boostStat(unit.int);
    if (unit.range > 2) {
      unit.range = boostStat(unit.range);
    }
  }

  const CAMERA_TWEEN_MS = 430;
  let cameraTweenActive = false;
  const _startTarget = new THREE.Vector3(); 
  const _startPosition = new THREE.Vector3();
  const _endTarget = new THREE.Vector3();
  const _endPosition = new THREE.Vector3();

  function centerCameraOnCurrentPlayer(instant = false) {
    let unit = null;
    if (phase === 'playing' && initiativeOrder.length > 0) {
      const uid = initiativeOrder[currentTurnIndex];
      unit = units.find((u) => u.id === uid && u.hp > 0);
    }
    if (!unit) unit = units.find((u) => u.player === currentPlayer && u.hp > 0);
    if (!unit) return;
    let zoomDist = camera.position.distanceTo(cameraTarget);
    if (zoomDist < 0.1) zoomDist = INITIAL_ZOOM;
    _zoomDir.copy(camera.position).sub(cameraTarget).normalize();
    if (_zoomDir.lengthSq() < 0.01) _zoomDir.copy(cameraOffset).normalize();
    _endTarget.copy(worldPos(unit.x, unit.y));
    _endPosition.copy(_endTarget).add(_zoomDir.clone().multiplyScalar(zoomDist));

    if (instant || cameraTweenActive) {
      cameraTarget.copy(_endTarget);
      camera.position.copy(_endPosition);
      camera.lookAt(cameraTarget);
      return;
    }

    cameraTweenActive = true;
    _startTarget.copy(cameraTarget);
    _startPosition.copy(camera.position);
    const startTime = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - startTime) / CAMERA_TWEEN_MS);
      const eased = t * (2 - t);
      cameraTarget.lerpVectors(_startTarget, _endTarget, eased);
      camera.position.lerpVectors(_startPosition, _endPosition, eased);
      camera.lookAt(cameraTarget);
      if (t < 1) requestAnimationFrame(tick);
      else cameraTweenActive = false;
    }
    requestAnimationFrame(tick);
  }

  let turnCount = 0;
  let currentPlayer = 1;
  let phase = 'draft';
  let gameMode = 'pvp';
  let availableClasses = new Set(CLASS_KEYS);
  let draftPickIndex = 0;
  let pendingClassKey = null;
  let placementTileKeys = new Set();
  let initiativeOrder = [];
  let currentTurnIndex = 0;
  let selectedUnitId = null;
  let reachable = new Map();
  let previewUnitId = null;

  function showUnitPreviewCard(unit) {
    if (!unit || unit.hp <= 0) return;
    previewUnitId = unit.id;
    const card = document.getElementById('unit-preview-card');
    const imgEl = document.getElementById('unit-preview-image');
    const nameEl = document.getElementById('unit-preview-name');
    const metaEl = document.getElementById('unit-preview-meta');
    const statsEl = document.getElementById('unit-preview-stats');
    card.classList.remove('player-1', 'player-2');
    card.classList.add(unit.player === 1 ? 'player-1' : 'player-2');
    card.classList.toggle('level-2', unit.level >= 2 && unit.level < 3);
    card.classList.toggle('level-3', unit.level >= 3);
    imgEl.src = CLASS_IMAGES[unit.class] || '';
    imgEl.alt = unit.name;
    nameEl.textContent = unit.name;
    metaEl.textContent = `Lv.${unit.level} ${unit.class} — Player ${unit.player}`;
    statsEl.innerHTML = [
      ['HP', `${unit.hp}/${unit.maxHp}`],
      ['MP', `${unit.mp}/${unit.maxMp}`],
      ['STR', unit.str],
      ['AGI', unit.agi],
      ['VIT', unit.vit],
      ['DEX', unit.dex],
      ['LUK', unit.luk],
      ['INT', unit.int],
    ].map(([label, val]) => `<span class="stat-label">${label}</span><span class="stat-val${label === 'HP' ? ' stat-val-hp' : ''}">${val}</span>`).join('');
    const lowHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) < 0.3;
    card.classList.toggle('low-hp', lowHp);
    card.style.display = 'block';
  }

  function hideUnitPreviewCard() {
    previewUnitId = null;
    const card = document.getElementById('unit-preview-card');
    card.classList.remove('low-hp', 'level-2', 'level-3');
    card.style.display = 'none';
  }
  let isUnitMoving = false;
  let isAttackMode = false;
  let hasMoved = false;
  let hasAttacked = false;
  let isChoosingFacing = false;
  let allowedFacingAngles = [];
  const highlightGroup = new THREE.Group();
  scene.add(highlightGroup);
  const highlightMaterials = [];

  const unitBordersGroup = new THREE.Group();
  scene.add(unitBordersGroup);
  const unitBorderMaterials = [];

  const TILE_BORDER_SIZE = TILE_SIZE;
  const TILE_BORDER_THICKNESS = 0.02;
  const PLAYER1_BORDER_COLOR = 0x3366ff;
  const PLAYER2_BORDER_COLOR = 0xcc3333;

  function createSquareBorderGeometry(size, thickness) {
    const half = size / 2;
    const inner = half - thickness;
    const shape = new THREE.Shape();
    shape.moveTo(-half, -half);
    shape.lineTo(half, -half);
    shape.lineTo(half, half);
    shape.lineTo(-half, half);
    shape.lineTo(-half, -half);
    const hole = new THREE.Path();
    hole.moveTo(-inner, -inner);
    hole.lineTo(inner, -inner);
    hole.lineTo(inner, inner);
    hole.lineTo(-inner, inner);
    hole.lineTo(-inner, -inner);
    shape.holes.push(hole);
    return new THREE.ShapeGeometry(shape);
  }

  const sharedBorderGeometry = createSquareBorderGeometry(TILE_BORDER_SIZE, TILE_BORDER_THICKNESS);

  function updateUnitTileBorders(excludeUnitId = null) {
    unitBorderMaterials.forEach((m) => m.dispose());
    unitBorderMaterials.length = 0;
    while (unitBordersGroup.children.length) {
      const c = unitBordersGroup.children[0];
      unitBordersGroup.remove(c);
    }
    units.filter((u) => u.hp > 0 && u.id !== excludeUnitId).forEach((unit) => {
      const gx = unit.x;
      const gy = unit.y;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.02;
      const color = unit.player === 1 ? PLAYER1_BORDER_COLOR : PLAYER2_BORDER_COLOR;
      const borderMat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const borderMesh = new THREE.Mesh(sharedBorderGeometry, borderMat);
      borderMesh.rotation.x = -Math.PI / 2;
      borderMesh.position.set(px, y, pz);
      unitBordersGroup.add(borderMesh);
      unitBorderMaterials.push(borderMat);
    });
  }

  const turnPointerHeight = 1.15;
  const turnPointerMesh = (() => {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.25, 8),
      new THREE.MeshBasicMaterial({ color: 0xffdd44 })
    );
    cone.rotation.x = Math.PI;
    cone.visible = false;
    scene.add(cone);
    return cone;
  })();

  function updateActiveUnitPointer() {
    if (phase !== 'playing' || initiativeOrder.length === 0 || isChoosingFacing) {
      turnPointerMesh.visible = false;
      turnPointerMesh.removeFromParent();
      scene.add(turnPointerMesh);
      return;
    }
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    if (!unit || unit.hp <= 0) {
      turnPointerMesh.visible = false;
      turnPointerMesh.removeFromParent();
      scene.add(turnPointerMesh);
      return;
    }
    const unitMesh = unitMeshes.get(uid);
    if (!unitMesh) {
      turnPointerMesh.visible = false;
      return;
    }
    turnPointerMesh.removeFromParent();
    unitMesh.add(turnPointerMesh);
    turnPointerMesh.position.set(0, turnPointerHeight, 0);
    turnPointerMesh.visible = true;
  }

  function getAllowedFacingAngles(unit) {
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const angles = [];
    for (const [dx, dy] of dirs) {
      const nx = unit.x + dx;
      const ny = unit.y + dy;
      if (!isWalkable(world, nx, ny)) continue;
      const occupied = units.some((o) => o.id !== unit.id && o.x === nx && o.y === ny && o.hp > 0);
      if (occupied) continue;
      angles.push(Math.atan2(dx, dy));
    }
    return angles;
  }

  function snapToAllowedFacing(angle) {
    if (allowedFacingAngles.length === 0) return angle;
    if (allowedFacingAngles.length === 1) return allowedFacingAngles[0];
    let best = allowedFacingAngles[0];
    let bestDiff = Math.abs(normalizeAngle(angle - best));
    for (let i = 1; i < allowedFacingAngles.length; i++) {
      const d = Math.abs(normalizeAngle(angle - allowedFacingAngles[i]));
      if (d < bestDiff) {
        bestDiff = d;
        best = allowedFacingAngles[i];
      }
    }
    return best;
  }

  function normalizeAngle(a) {
    while (a > Math.PI) a -= 2 * Math.PI;
    while (a < -Math.PI) a += 2 * Math.PI;
    return a;
  }

  const facingArrowHeight = 1.2;
  const facingArrowMesh = (() => {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.35, 8),
      new THREE.MeshBasicMaterial({ color: 0x44aaff })
    );
    cone.rotation.x = -Math.PI / 2;
    cone.visible = false;
    scene.add(cone);
    return cone;
  })();

  function updateFacingFromPointer(clientX, clientY) {
    if (!isChoosingFacing || initiativeOrder.length === 0 || allowedFacingAngles.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    const mesh = unitMeshes.get(uid);
    if (!unit || !mesh) return;
    pointerToNdc(clientX, clientY);
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(tilesGroup.children, true);
    if (intersects.length === 0) return;
    const unitWorld = worldPos(unit.x, unit.y);
    const point = intersects[0].point;
    const dx = point.x - unitWorld.x;
    const dz = point.z - unitWorld.z;
    if (dx * dx + dz * dz < 1e-6) return;
    const angle = Math.atan2(dx, dz);
    mesh.rotation.y = snapToAllowedFacing(angle);
  }

  function showFacingArrow() {
    if (initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    const mesh = unitMeshes.get(uid);
    if (!unit || !mesh) return;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    allowedFacingAngles = dirs.map(([dx, dy]) => Math.atan2(dx, dy));
    facingArrowMesh.removeFromParent();
    mesh.add(facingArrowMesh);
    facingArrowMesh.position.set(0, facingArrowHeight, 0);
    facingArrowMesh.rotation.x = -Math.PI / 2;
    facingArrowMesh.rotation.y = 0;
    facingArrowMesh.rotation.z = Math.PI;
    facingArrowMesh.visible = true;
    mesh.rotation.y = allowedFacingAngles[0];
  }

  function hideFacingArrow() {
    facingArrowMesh.visible = false;
    facingArrowMesh.removeFromParent();
    scene.add(facingArrowMesh);
  }

  const DRAFT_ORDER = (() => {
    const n = DRAFT_PICKS_PER_PLAYER;
    const order = [1];
    for (let i = 0; i < Math.floor((n - 1) / 2); i++) order.push(2, 2, 1, 1);
    if (n % 2 === 1) order.push(2);
    else { order.push(2, 2); order.push(1); }
    return order;
  })();

  function getCurrentDraftPlayer() {
    return DRAFT_ORDER[draftPickIndex];
  }

  function getCurrentPlayerPickCount() {
    const p = getCurrentDraftPlayer();
    let count = 0;
    for (let i = 0; i < draftPickIndex; i++) {
      if (DRAFT_ORDER[i] === p) count++;
    }
    return count + 1;
  }

  function startDraftPhase() {
    phase = 'draft';
    draftPickIndex = 0;
    availableClasses = new Set(CLASS_KEYS);
    pendingClassKey = null;
    placementTileKeys.clear();
    clearHighlights();
    updateDraftUI();
    document.getElementById('turn-menu').style.display = 'none';
    document.getElementById('draft-panel').style.display = 'flex';
  }

  function endDraftPhase() {
    phase = 'playing';
    turnCount = 0;
    initiativeOrder = units.slice().sort((a, b) => {
      if (b.agi !== a.agi) return b.agi - a.agi;
      return b.dex - a.dex;
    }).map((u) => u.id);
    currentTurnIndex = 0;
    while (currentTurnIndex < initiativeOrder.length && units.find((u) => u.id === initiativeOrder[currentTurnIndex]).hp <= 0) {
      currentTurnIndex++;
    }
    if (currentTurnIndex >= initiativeOrder.length) currentTurnIndex = 0;
    const currentUnit = units.find((u) => u.id === initiativeOrder[currentTurnIndex]);
    currentPlayer = currentUnit ? currentUnit.player : 1;
    hasMoved = false;
    hasAttacked = false;
    selectedUnitId = initiativeOrder[currentTurnIndex];
    document.getElementById('draft-panel').style.display = 'none';
    document.getElementById('turn-menu').style.display = 'flex';
    const placementCardEl = document.getElementById('draft-placement-card');
    if (placementCardEl) {
      placementCardEl.style.display = 'none';
      placementCardEl.innerHTML = '';
    }
    clearHighlights();
    updateUnitTileBorders();
    updateTurnUI();
    updateActiveUnitPointer();
    centerCameraOnCurrentPlayer(true);
  }

  function updateDraftUI() {
    const draftPanel = document.getElementById('draft-panel');
    const draftTitle = document.getElementById('draft-title');
    const draftClasses = document.getElementById('draft-classes');
    const draftMessage = document.getElementById('draft-message');
    const turnEl = document.getElementById('turn-player');
    const placementCardEl = document.getElementById('draft-placement-card');
    if (pendingClassKey) {
      draftPanel.style.display = 'none';
      turnEl.textContent = `Draft: Player ${getCurrentDraftPlayer()} — place ${CLASSES[pendingClassKey].name}`;
      const p = getCurrentDraftPlayer();
      placementCardEl.style.display = 'flex';
      placementCardEl.style.left = p === 1 ? '24px' : '';
      placementCardEl.style.right = p === 2 ? '24px' : '';
      const selectedClassKeys = [
        ...units.filter((u) => u.player === p).map((u) => u.class),
        pendingClassKey,
      ];
      const renderCard = (key, isCurrent) => {
        const c = CLASSES[key];
        return `
        <div class="draft-class-card${isCurrent ? ' draft-class-card-current' : ''}">
          <img class="draft-class-card-image" src="${CLASS_IMAGES[key] || ''}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${c.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${c.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${c.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${c.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${c.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${c.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${c.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${c.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${c.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${c.range}</span>
            </div>
          </div>
        </div>
      `;
      };
      const DRAFT_PLACEMENT_MAX_ROWS = 3;
      if (selectedClassKeys.length > DRAFT_PLACEMENT_MAX_ROWS) {
        placementCardEl.classList.add('draft-placement-cols');
        const columns = [];
        for (let i = 0; i < selectedClassKeys.length; i += DRAFT_PLACEMENT_MAX_ROWS) {
          columns.push(selectedClassKeys.slice(i, i + DRAFT_PLACEMENT_MAX_ROWS));
        }
        const lastIndex = selectedClassKeys.length - 1;
        placementCardEl.innerHTML = columns.map((colKeys, colIndex) => {
          const isCurrentCol = colIndex === columns.length - 1;
          const cardsHtml = colKeys.map((key, i) => {
            const globalIndex = colIndex * DRAFT_PLACEMENT_MAX_ROWS + i;
            const isCurrent = globalIndex === lastIndex;
            return renderCard(key, isCurrent);
          }).join('');
          return `<div class="draft-placement-col${isCurrentCol ? ' draft-placement-col-current' : ''}">${cardsHtml}</div>`;
        }).join('');
      } else {
        placementCardEl.classList.remove('draft-placement-cols');
        placementCardEl.innerHTML = selectedClassKeys.map((key, i) => {
          const isCurrent = i === selectedClassKeys.length - 1;
          return renderCard(key, isCurrent);
        }).join('');
      }
      if (gameMode === 'pvcpu' && getCurrentDraftPlayer() === 2) setTimeout(runDraftAI, 500);
      if (gameMode === 'cvcpu') setTimeout(runDraftAI, 500);
      return;
    }
    placementCardEl.style.display = 'none';
    placementCardEl.innerHTML = '';
    if (phase === 'draft') {
      draftPanel.style.display = 'flex';
    }
    const p = getCurrentDraftPlayer();
      draftTitle.textContent = `Player ${p}: Pick a class (${getCurrentPlayerPickCount()}/${DRAFT_PICKS_PER_PLAYER})`;
      draftMessage.textContent = '';
      draftClasses.innerHTML = '';
      turnEl.textContent = `Draft: Player ${p} — pick a class`;
      CLASS_KEYS.forEach((key) => {
        const isAvailable = availableClasses.has(key);
        const c = CLASSES[key];
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'draft-class-card' + (isAvailable ? '' : ' draft-class-card-selected');
        card.disabled = !isAvailable;
        card.innerHTML = `
          <img class="draft-class-card-image" src="${CLASS_IMAGES[key] || ''}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="draft-class-card-body">
            <div class="draft-class-card-name">${c.name}</div>
            <div class="draft-class-card-stats">
              <span class="draft-stat-label">HP</span><span class="draft-stat-value">${c.hp}</span>
              <span class="draft-stat-label">MP</span><span class="draft-stat-value">${c.mp}</span>
              <span class="draft-stat-label">STR</span><span class="draft-stat-value">${c.str}</span>
              <span class="draft-stat-label">AGI</span><span class="draft-stat-value">${c.agi}</span>
              <span class="draft-stat-label">VIT</span><span class="draft-stat-value">${c.vit}</span>
              <span class="draft-stat-label">DEX</span><span class="draft-stat-value">${c.dex}</span>
              <span class="draft-stat-label">LUK</span><span class="draft-stat-value">${c.luk}</span>
              <span class="draft-stat-label">INT</span><span class="draft-stat-value">${c.int}</span>
              <span class="draft-stat-label">Range</span><span class="draft-stat-value">${c.range}</span>
            </div>
          </div>
        `;
        if (isAvailable) card.addEventListener('click', () => pickClass(key));
        draftClasses.appendChild(card);
      });
    if (gameMode === 'pvcpu' && getCurrentDraftPlayer() === 2) setTimeout(runDraftAI, 500);
    if (gameMode === 'cvcpu') setTimeout(runDraftAI, 500);
  }

  function pickClass(classKey) {
    if (!availableClasses.has(classKey) || pendingClassKey) return;
    pendingClassKey = classKey;
    const p = getCurrentDraftPlayer();
    const occupied = new Set(units.map((u) => u.y * world.w + u.x));
    const tiles = getBaseTiles(world, p, occupied);
    placementTileKeys = new Set(tiles.map((t) => t.gy * world.w + t.gx));
    showPlacementHighlights(tiles);
    updateDraftUI();
  }

  function placeUnit(gx, gy) {
    if (!pendingClassKey) return;
    const p = getCurrentDraftPlayer();
    const k = gy * world.w + gx;
    if (!placementTileKeys.has(k)) return;
    const template = CLASSES[pendingClassKey];
    const unit = {
      id: nextUnitId++,
      player: p,
      x: gx,
      y: gy,
      level: 1,
      name: template.name,
      class: pendingClassKey,
      hairColor: (CLASS_LOOK[pendingClassKey] || CLASS_LOOK.knight).hair,
      hp: template.hp,
      maxHp: template.maxHp,
      mp: template.mp,
      maxMp: template.maxMp,
      str: template.str,
      agi: template.agi,
      vit: template.vit,
      dex: template.dex,
      luk: template.luk,
      int: template.int,
      range: template.range,
    };
    units.push(unit);
    addUnitToScene(unit);
    const mesh = unitMeshes.get(unit.id);
    if (mesh) {
      mesh.rotation.y = unit.player === 1 ? Math.PI : 0;
    }
    availableClasses.delete(pendingClassKey);
    pendingClassKey = null;
    placementTileKeys.clear();
    clearHighlights();
    draftPickIndex++;
    if (draftPickIndex >= 2 * DRAFT_PICKS_PER_PLAYER) {
      endDraftPhase();
      return;
    }
    updateDraftUI();
  }

  function updateTurnUI() {
    const turnEl = document.getElementById('turn-player');
    const menuLabel = document.getElementById('menu-label');
    const turnMenu = document.getElementById('turn-menu');
    const unitInfo = document.getElementById('unit-info');
    const unitNameEl = document.getElementById('unit-name');
    const unitLevelClassEl = document.getElementById('unit-level-class');
    const unitStatsEl = document.getElementById('unit-stats');
    const unitClassImageEl = document.getElementById('unit-class-image');

    turnMenu.classList.remove('player-1', 'player-2');
    turnMenu.classList.add(currentPlayer === 1 ? 'player-1' : 'player-2');
    turnMenu.classList.toggle('level-2', false);
    turnMenu.classList.toggle('level-3', false);

    if (phase === 'playing' && initiativeOrder.length > 0) {
      const currentUid = initiativeOrder[currentTurnIndex];
      const currentUnitAlive = units.find((u) => u.id === currentUid && u.hp > 0);
      if (currentUnitAlive && (selectedUnitId == null || !units.find((u) => u.id === selectedUnitId && u.hp > 0))) {
        selectedUnitId = currentUid;
      }
    }

    if (selectedUnitId != null) {
      const u = units.find((x) => x.id === selectedUnitId);
      if (u && u.hp > 0) {
        unitInfo.classList.remove('no-unit');
        const lowHp = u.maxHp > 0 && (u.hp / u.maxHp) < 0.25;
        turnMenu.classList.toggle('low-hp', lowHp);
        turnMenu.classList.toggle('level-2', u.level >= 2 && u.level < 3);
        turnMenu.classList.toggle('level-3', u.level >= 3);
        unitNameEl.textContent = u.name;
        unitLevelClassEl.textContent = `Lv.${u.level} ${u.class}`;
        unitClassImageEl.src = CLASS_IMAGES[u.class] || '';
        unitClassImageEl.alt = u.name;
        unitStatsEl.innerHTML = [
          ['HP', `${u.hp}/${u.maxHp}`],
          ['MP', `${u.mp}/${u.maxMp}`],
          ['STR', u.str],
          ['AGI', u.agi],
          ['VIT', u.vit],
          ['DEX', u.dex],
          ['LUK', u.luk],
          ['INT', u.int],
        ].map(([label, val]) => `<span>${label}</span><span class="stat-val${label === 'HP' ? ' stat-val-hp' : ''}">${val}</span>`).join('');
      } else {
        turnMenu.classList.remove('low-hp', 'level-2', 'level-3');
        unitInfo.classList.add('no-unit');
        unitNameEl.textContent = '— Select a unit —';
        unitLevelClassEl.textContent = '';
        unitStatsEl.textContent = '';
        unitClassImageEl.src = '';
        unitClassImageEl.alt = '';
      }
    } else {
      turnMenu.classList.remove('low-hp', 'level-2', 'level-3');
      unitInfo.classList.add('no-unit');
      unitNameEl.textContent = '— Select a unit —';
      unitLevelClassEl.textContent = '';
      unitStatsEl.textContent = '';
      unitClassImageEl.src = '';
      unitClassImageEl.alt = '';
    }

    if (selectedUnitId != null) {
      turnEl.textContent = `Player ${currentPlayer} — Unit ${unitNameEl.innerHTML} active`;
    } else {
      const currentUnit = initiativeOrder.length ? units.find((u) => u.id === initiativeOrder[currentTurnIndex]) : null;
      turnEl.textContent = currentUnit ? `${currentUnit.name} (Player ${currentPlayer})` : `Player ${currentPlayer}`;
    }
    menuLabel.textContent = `Player ${currentPlayer}`;

    const btnAttack = document.getElementById('btn-attack');
    const btnSkill = document.getElementById('btn-skill');
    const btnSpell = document.getElementById('btn-spell');
    const btnEnd = document.getElementById('btn-end');
    if (gameMode === 'cvcpu' && phase === 'playing') {
      btnAttack.disabled = true;
      btnSkill.disabled = true;
      btnSpell.disabled = true;
      if (btnEnd) btnEnd.disabled = true;
      turnEl.textContent = `Player ${currentPlayer} (CPU)`;
    } else if (isChoosingFacing) {
      btnAttack.disabled = true;
      btnSkill.disabled = true;
      btnSpell.disabled = true;
      turnEl.textContent = 'Click on map to choose facing direction';
    } else if (phase === 'playing') {
      btnAttack.disabled = hasAttacked;
      btnSkill.disabled = false;
      btnSpell.disabled = false;
      if (btnEnd) btnEnd.disabled = false;
    }
    if (phase === 'playing') {
      const turnNum = Math.min(turnCount + 1, MAX_TURNS);
      turnEl.textContent = (turnEl.textContent || '') + ` — Turn ${turnNum}/${MAX_TURNS}`;
      const turnsLeftEl = document.getElementById('turns-left');
      const turnsLeftValueEl = document.getElementById('turns-left-value');
      if (turnsLeftEl && turnsLeftValueEl) {
        turnsLeftEl.style.display = '';
        const turnsLeft = Math.max(0, MAX_TURNS - turnCount);
        turnsLeftValueEl.textContent = String(turnsLeft);
        turnsLeftEl.classList.toggle('turns-left-low', turnsLeft <= 10);
      }
    } else {
      const turnsLeftEl = document.getElementById('turns-left');
      if (turnsLeftEl) turnsLeftEl.style.display = 'none';
    }
    if (phase === 'playing' && isCPUPlayer(currentPlayer) && !isUnitMoving) setTimeout(runPlayingAI, 700);
  }

  function endTurn() {
    hideUnitPreviewCard();
    isAttackMode = false;
    isChoosingFacing = false;
    allowedFacingAngles = [];
    hideFacingArrow();
    clearHighlights();
    const n = initiativeOrder.length;
    if (n === 0) return;
    const currentUid = initiativeOrder[currentTurnIndex];
    const currentUnit = units.find((u) => u.id === currentUid);
    if (currentUnit && currentUnit.hp > 0) {
      const gx = currentUnit.x;
      const gy = currentUnit.y;
      if (world.type[gy][gx] === TileType.CENTER && currentUnit.level === 1) levelUpUnit(currentUnit);
      const enemyBase = currentUnit.player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
      if (world.type[gy][gx] === enemyBase && currentUnit.level === 2) levelUpUnit(currentUnit);
    }
    turnCount++;
    if (turnCount >= MAX_TURNS) {
      endGameByTurnLimit();
      return;
    }
    let next = (currentTurnIndex + 1) % n;
    let steps = 0;
    while (steps < n) {
      const uid = initiativeOrder[next];
      const u = units.find((x) => x.id === uid);
      if (u && u.hp > 0) break;
      next = (next + 1) % n;
      steps++;
    }
    currentTurnIndex = next;
    const nextUnit = units.find((u) => u.id === initiativeOrder[currentTurnIndex]);
    currentPlayer = nextUnit ? nextUnit.player : 1;
    hasMoved = false;
    hasAttacked = false;
    selectedUnitId = initiativeOrder[currentTurnIndex];
    selectedUnitId = initiativeOrder[currentTurnIndex];
    updateTurnUI();
    updateActiveUnitPointer();
    centerCameraOnCurrentPlayer();
  }

  document.getElementById('btn-attack').addEventListener('click', () => {
    if (isUnitMoving) return;
    if (hasAttacked) return;
    if (phase !== 'playing' || initiativeOrder.length === 0) return;
    hideUnitPreviewCard();
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    if (!unit || unit.hp <= 0) return;
    const range = unit.range != null ? unit.range : 1;
    selectedUnitId = uid;
    isAttackMode = true;
    reachable = getTilesInManhattanRange(world, unit.x, unit.y, range);
    showAttackRange(reachable);
    updateTurnUI();
  });
  document.getElementById('btn-skill').addEventListener('click', () => {
    if (isUnitMoving) return;
    // TODO: skill mode
  });
  document.getElementById('btn-spell').addEventListener('click', () => {
    if (isUnitMoving) return;
    // TODO: spell mode
  });
  document.getElementById('btn-end').addEventListener('click', () => {
    if (isUnitMoving) return;
    if (isChoosingFacing) return;
    if (phase !== 'playing' || initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    if (!unit || unit.hp <= 0) return;
    isChoosingFacing = true;
    selectedUnitId = null;
    isAttackMode = false;
    reachable = new Map();
    clearHighlights();
    showFacingArrow();
    updateActiveUnitPointer();
    const turnEl = document.getElementById('turn-player');
    turnEl.textContent = 'Click on map to choose facing direction';
    updateTurnUI();
  });

  cameraTarget.set(0, 8, 0);
  camera.position.copy(cameraTarget).add(cameraOffset);
  camera.lookAt(cameraTarget);

  const modeOverlay = document.getElementById('mode-select-overlay');
  const btnPvP = document.getElementById('mode-pvp');
  const btnPvCPU = document.getElementById('mode-pvcpu');
  const btnCvCPU = document.getElementById('mode-cvcpu');
  if (modeOverlay && btnPvP && btnPvCPU) {
    btnPvP.addEventListener('click', () => {
      gameMode = 'pvp';
      modeOverlay.classList.add('hidden');
      startDraftPhase();
    });
    btnPvCPU.addEventListener('click', () => {
      gameMode = 'pvcpu';
      modeOverlay.classList.add('hidden');
      startDraftPhase();
    });
    if (btnCvCPU) {
      btnCvCPU.addEventListener('click', () => {
        gameMode = 'cvcpu';
        modeOverlay.classList.add('hidden');
        startDraftPhase();
      });
    }
  } else {
    startDraftPhase();
  }

  function isCPUPlayer(player) {
    return (gameMode === 'pvcpu' && player === 2) || gameMode === 'cvcpu';
  }

  function pickBalancedClass() {
    const available = CLASS_KEYS.filter((k) => availableClasses.has(k));
    if (available.length === 0) return null;
    const statKeys = ['hp', 'maxHp', 'mp', 'str', 'agi', 'vit', 'dex', 'luk', 'int'];
    let bestKey = available[0];
    let bestVariance = Infinity;
    for (const key of available) {
      const c = CLASSES[key];
      if (!c) continue;
      const values = statKeys.map((s) => c[s] ?? 0);
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
      if (variance < bestVariance) {
        bestVariance = variance;
        bestKey = key;
      }
    }
    return bestKey;
  }

  function runDraftAI() {
    if (phase !== 'draft' || !isCPUPlayer(getCurrentDraftPlayer())) return;
    if (!pendingClassKey) {
      const key = pickBalancedClass();
      if (key) pickClass(key);
      setTimeout(runDraftAI, 500);
      return;
    }
    const tiles = Array.from(placementTileKeys);
    if (tiles.length > 0) {
      const k = tiles[Math.floor(Math.random() * tiles.length)];
      const gx = k % world.w;
      const gy = Math.floor(k / world.w);
      placeUnit(gx, gy);
    }
  }

  function getCenterTiles() {
    const out = [];
    for (let gy = 0; gy < world.h; gy++)
      for (let gx = 0; gx < world.w; gx++)
        if (world.type[gy][gx] === TileType.CENTER) out.push({ gx, gy });
    return out;
  }

  function getEnemyBaseTiles(player) {
    const out = [];
    const baseType = player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
    for (let gy = 0; gy < world.h; gy++)
      for (let gx = 0; gx < world.w; gx++)
        if (world.type[gy][gx] === baseType) out.push({ gx, gy });
    return out;
  }

  function manhattanDist(ax, ay, bx, by) {
    return Math.abs(ax - bx) + Math.abs(ay - by);
  }

  function getEnemiesInRange(unit) {
    const range = unit.range != null ? unit.range : 1;
    const enemies = [];
    for (const o of units) {
      if (o.hp <= 0 || o.player === unit.player) continue;
      const d = manhattanDist(unit.x, unit.y, o.x, o.y);
      if (d <= range && d > 0) enemies.push({ target: o, dist: d });
    }
    return enemies;
  }

  function isAllyInDanger(unit) {
    const allies = units.filter((u) => u.hp > 0 && u.player === unit.player && u.id !== unit.id);
    for (const ally of allies) {
      const enemiesNear = units.filter((u) => u.hp > 0 && u.player !== unit.player);
      for (const en of enemiesNear) {
        const r = en.range != null ? en.range : 1;
        const d = manhattanDist(en.x, en.y, ally.x, ally.y);
        if (d <= r) return true;
      }
    }
    return false;
  }

  function performMove(unit, toGx, toGy, onDone) {
    const path = getPath(world, unit.x, unit.y, toGx, toGy, units, unit);
    if (!path || path.length <= 1) {
      if (onDone) onDone();
      return;
    }
    selectedUnitId = null;
    clearHighlights();
    isUnitMoving = true;
    updateUnitTileBorders(unit.id);
    const mesh = unitMeshes.get(unit.id);
    let stepIndex = 1;

    function animateStep() {
      if (stepIndex >= path.length) {
        unit.x = path[path.length - 1].x;
        unit.y = path[path.length - 1].y;
        isUnitMoving = false;
        resetWalkPose(mesh);
        updateUnitTileBorders();
        reachable = new Map();
        hasMoved = true;
        if (onDone) onDone();
        return;
      }
      const from = path[stepIndex - 1];
      const to = path[stepIndex];
      const startPos = worldPos(from.x, from.y).clone();
      const endPos = worldPos(to.x, to.y).clone();
      const dx = endPos.x - startPos.x;
      const dz = endPos.z - startPos.z;
      if (dx * dx + dz * dz > 1e-6) mesh.rotation.y = Math.atan2(dx, dz);
      const startTime = performance.now();
      function tick(now) {
        const t = Math.min(1, (now - startTime) / MOVE_DURATION_MS);
        const eased = t * (2 - t);
        mesh.position.lerpVectors(startPos, endPos, eased);
        setWalkPose(mesh, t);
        if (t < 1) requestAnimationFrame(tick);
        else { stepIndex++; animateStep(); }
      }
      requestAnimationFrame(tick);
    }
    animateStep();
  }

  function performAttack(unit, target) {
    const evasionMax = target.agi * 0.7 + target.luk * 0.3;
    const evasionRoll = Math.random() * evasionMax;
    const isHit = evasionRoll <= unit.dex;
    if (isHit) {
      const rawDamage = (unit.str * 0.7 + unit.dex * 0.1 + unit.int * 0.07) - (target.vit * 0.3 + target.luk * 0.1);
      const damage = Math.max(1, Math.floor(rawDamage));
      target.hp = Math.max(0, target.hp - damage);
      showFloatingCombatText(target.x, target.y, String(damage), false);
      if (target.hp <= 0) handleUnitDeath(target);
    } else {
      showFloatingCombatText(target.x, target.y, 'MISS', true);
    }
    hasAttacked = true;
    selectedUnitId = null;
    isAttackMode = false;
    clearHighlights();
    if (hasMoved) setTimeout(() => endTurn(), 400);
    else setTimeout(() => updateTurnUI(), 400);
  }

  function runPlayingAI() {
    if (phase !== 'playing' || !isCPUPlayer(currentPlayer) || isUnitMoving || initiativeOrder.length === 0) return;
    const uid = initiativeOrder[currentTurnIndex];
    const unit = units.find((u) => u.id === uid);
    if (!unit || unit.hp <= 0) return;

    const reachableDist = getReachable(world, unit.x, unit.y, unit.agi, units, unit);
    const reachableTiles = [];
    reachableDist.forEach((d, k) => {
      if (d === 0) return;
      const gx = k % world.w;
      const gy = Math.floor(k / world.w);
      const occupied = units.some((o) => o.id !== unit.id && o.x === gx && o.y === gy && o.hp > 0);
      if (!occupied) reachableTiles.push({ gx, gy, dist: d });
    });

    const enemiesInRange = getEnemiesInRange(unit);
    const centerTiles = getCenterTiles();
    const enemyBaseTiles = getEnemyBaseTiles(unit.player);
    const lowHpThreshold = 0.35;
    const isLowHp = unit.maxHp > 0 && (unit.hp / unit.maxHp) < lowHpThreshold;

    function closestTileToTargets(tiles, targets) {
      if (targets.length === 0) return null;
      let best = null;
      let bestDist = Infinity;
      for (const t of tiles) {
        let total = 0;
        for (const g of targets) total += manhattanDist(t.gx, t.gy, g.gx, g.gy);
        if (total < bestDist) { bestDist = total; best = t; }
      }
      return best;
    }

    /** Pick the reachable tile that gets closest to the target region (min distance to nearest target). */
    function farthestReachableTowardTargets(tiles, targets) {
      if (targets.length === 0 || tiles.length === 0) return null;
      let best = null;
      let bestMinDist = Infinity;
      for (const t of tiles) {
        const minDistToTarget = Math.min(...targets.map((g) => manhattanDist(t.gx, t.gy, g.gx, g.gy)));
        if (minDistToTarget < bestMinDist) { bestMinDist = minDistToTarget; best = t; }
      }
      return best;
    }

    const reachableKeys = new Set(reachableTiles.map((t) => t.gy * world.w + t.gx));

    /** Return the farthest tile along the path that is reachable this turn (path[0] = current pos). */
    function farthestReachableOnPath(path, maxSteps) {
      if (!path || path.length <= 1) return null;
      const limit = Math.min(maxSteps, path.length - 1);
      for (let i = limit; i >= 1; i--) {
        const p = path[i];
        const k = p.y * world.w + p.x;
        if (reachableKeys.has(k)) return { gx: p.x, gy: p.y };
      }
      return null;
    }

    /** Farthest path step within maxSteps that is unoccupied (allows passing through allies toward base). */
    function farthestUnoccupiedOnPath(path, maxSteps) {
      if (!path || path.length <= 1) return null;
      const limit = Math.min(maxSteps, path.length - 1);
      for (let i = limit; i >= 1; i--) {
        const p = path[i];
        const occupied = units.some((o) => o.id !== unit.id && o.hp > 0 && o.x === p.x && o.y === p.y);
        if (!occupied) return { gx: p.x, gy: p.y };
      }
      return null;
    }

    /** Find the shortest path from unit to any target; return { path, target } or null. */
    function getPathToNearestTarget(targets) {
      let bestPath = null;
      let bestTarget = null;
      let bestLen = Infinity;
      for (const g of targets) {
        const path = getPath(world, unit.x, unit.y, g.gx, g.gy, units, unit);
        if (path && path.length > 1 && path.length < bestLen) {
          bestLen = path.length;
          bestPath = path;
          bestTarget = g;
        }
      }
      return bestPath && bestTarget ? { path: bestPath, target: bestTarget } : null;
    }

    function safestReachableTile() {
      const enemies = units.filter((u) => u.hp > 0 && u.player !== unit.player);
      if (enemies.length === 0) return reachableTiles[0];
      let best = null;
      let bestMinDist = -1;
      for (const t of reachableTiles) {
        const minDist = Math.min(...enemies.map((e) => manhattanDist(t.gx, t.gy, e.x, e.y)));
        if (minDist > bestMinDist) { bestMinDist = minDist; best = t; }
      }
      return best;
    }

    /** After attacking: retreat tile that is away from enemies and close to allies. */
    function bestRetreatTowardAlliesTile() {
      const enemies = units.filter((u) => u.hp > 0 && u.player !== unit.player);
      const allies = units.filter((u) => u.hp > 0 && u.player === unit.player && u.id !== unit.id);
      if (enemies.length === 0) return reachableTiles[0];
      let best = null;
      let bestScore = -Infinity;
      for (const t of reachableTiles) {
        const minDistToEnemy = Math.min(...enemies.map((e) => manhattanDist(t.gx, t.gy, e.x, e.y)));
        const minDistToAlly = allies.length > 0
          ? Math.min(...allies.map((a) => manhattanDist(t.gx, t.gy, a.x, a.y)))
          : 0;
        const score = minDistToEnemy - minDistToAlly;
        if (score > bestScore) { bestScore = score; best = t; }
      }
      return best;
    }

    /** For ranged units: reachable tile that keeps at least one enemy in range but maximizes distance to nearest enemy. */
    function bestKiteTile() {
      const range = unit.range != null ? unit.range : 1;
      const enemies = units.filter((u) => u.hp > 0 && u.player !== unit.player);
      if (enemies.length === 0) return null;
      let best = null;
      let bestMinDistToEnemy = -1;
      for (const t of reachableTiles) {
        const minDistToEnemy = Math.min(...enemies.map((e) => manhattanDist(t.gx, t.gy, e.x, e.y)));
        const hasEnemyInRange = enemies.some((e) => manhattanDist(t.gx, t.gy, e.x, e.y) <= range);
        if (hasEnemyInRange && minDistToEnemy > bestMinDistToEnemy) {
          bestMinDistToEnemy = minDistToEnemy;
          best = t;
        }
      }
      return best;
    }

    if (hasAttacked) {
      if (hasMoved) {
        endTurn();
        return;
      }
      const retreat = bestRetreatTowardAlliesTile();
      if (retreat && (retreat.gx !== unit.x || retreat.gy !== unit.y)) {
        performMove(unit, retreat.gx, retreat.gy, () => setTimeout(endTurn, 400));
        return;
      }
      endTurn();
      return;
    }

    if (isAllyInDanger(unit) && enemiesInRange.length > 0) {
      enemiesInRange.sort((a, b) => a.target.hp - b.target.hp || a.dist - b.dist);
      const target = enemiesInRange[0].target;
      performAttack(unit, target);
      return;
    }

    if (enemiesInRange.length > 0) {
      enemiesInRange.sort((a, b) => a.target.hp - b.target.hp || a.dist - b.dist);
      const target = enemiesInRange[0].target;
      performAttack(unit, target);
      return;
    }

    if (isLowHp && reachableTiles.length > 0 && !hasMoved) {
      const lowHpEnemiesInRange = enemiesInRange.filter(
        (e) => e.target.maxHp > 0 && (e.target.hp / e.target.maxHp) < lowHpThreshold
      );
      if (lowHpEnemiesInRange.length > 0) {
        lowHpEnemiesInRange.sort((a, b) => a.target.hp - b.target.hp || a.dist - b.dist);
        performAttack(unit, lowHpEnemiesInRange[0].target);
        return;
      }
      if (unit.level === 2 && enemyBaseTiles.length > 0) {
        const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
        if (!onEnemyBase) {
          const result = getPathToNearestTarget(enemyBaseTiles);
          const veryCloseBy = result != null && result.path.length <= 3;
          if (veryCloseBy) {
            const toward = farthestUnoccupiedOnPath(result.path, unit.agi);
            if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
              performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
              return;
            }
            const fallback = farthestReachableTowardTargets(reachableTiles, enemyBaseTiles);
            if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
              performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
              return;
            }
          }
        }
      }
      const safe = safestReachableTile();
      if (safe && manhattanDist(unit.x, unit.y, safe.gx, safe.gy) > 0) {
        performMove(unit, safe.gx, safe.gy, () => setTimeout(runPlayingAI, 600));
        return;
      }
      endTurn();
      return;
    }

    const turnsLeft = MAX_TURNS - turnCount;
    if (turnsLeft <= 10 && centerTiles.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter) {
        const result = getPathToNearestTarget(centerTiles);
        const toward = result ? farthestUnoccupiedOnPath(result.path, unit.agi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, centerTiles);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (unit.level === 1 && centerTiles.length > 0 && !hasMoved) {
      const onCenter = centerTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onCenter && reachableTiles.length > 0) {
        const result = getPathToNearestTarget(centerTiles);
        const toward = result ? farthestUnoccupiedOnPath(result.path, unit.agi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, centerTiles);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (unit.level === 2 && enemyBaseTiles.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onEnemyBase) {
        const result = getPathToNearestTarget(enemyBaseTiles);
        const veryCloseBy = result != null && result.path.length <= 3;
        if (veryCloseBy) {
          const toward = farthestUnoccupiedOnPath(result.path, unit.agi);
          if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
            performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
            return;
          }
          const fallback = farthestReachableTowardTargets(reachableTiles, enemyBaseTiles);
          if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
            performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
            return;
          }
        }
      }
    }

    const enemies = units.filter((u) => u.hp > 0 && u.player !== unit.player);
    const isLevel2Ranged = unit.level === 2 && (unit.range != null && unit.range >= 2);
    if (isLevel2Ranged && enemies.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const kite = bestKiteTile();
      if (kite && (kite.gx !== unit.x || kite.gy !== unit.y)) {
        performMove(unit, kite.gx, kite.gy, () => setTimeout(runPlayingAI, 600));
        return;
      }
    }

    if (enemies.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      function pathToAdjacentOf(enemy) {
        let bestPath = null;
        for (const [dx, dy] of dirs) {
          const ax = enemy.x + dx;
          const ay = enemy.y + dy;
          if (!isWalkable(world, ax, ay)) continue;
          const occupied = units.some((u) => u.hp > 0 && u.x === ax && u.y === ay);
          if (occupied) continue;
          const path = getPath(world, unit.x, unit.y, ax, ay, units, unit);
          if (path && path.length > 1 && (!bestPath || path.length < bestPath.length)) bestPath = path;
        }
        return bestPath;
      }
      const pathable = [];
      for (const e of enemies) {
        const path = pathToAdjacentOf(e);
        if (path) pathable.push({ enemy: e, path });
      }
      if (pathable.length > 0) {
        const weakPathable = pathable.filter(
          (p) => p.enemy.maxHp > 0 && (p.enemy.hp / p.enemy.maxHp) < lowHpThreshold
        );
        const candidates = weakPathable.length > 0 ? weakPathable : pathable;
        candidates.sort((a, b) => a.path.length - b.path.length || a.enemy.hp - b.enemy.hp);
        const chosen = candidates[0];
        const toward = farthestReachableOnPath(chosen.path, unit.agi);
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    if (unit.level === 2 && enemyBaseTiles.length > 0 && !hasMoved && reachableTiles.length > 0) {
      const onEnemyBase = enemyBaseTiles.some((c) => c.gx === unit.x && c.gy === unit.y);
      if (!onEnemyBase) {
        const result = getPathToNearestTarget(enemyBaseTiles);
        const toward = result ? farthestUnoccupiedOnPath(result.path, unit.agi) : null;
        if (toward && (toward.gx !== unit.x || toward.gy !== unit.y)) {
          performMove(unit, toward.gx, toward.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
        const fallback = farthestReachableTowardTargets(reachableTiles, enemyBaseTiles);
        if (fallback && (fallback.gx !== unit.x || fallback.gy !== unit.y)) {
          performMove(unit, fallback.gx, fallback.gy, () => setTimeout(runPlayingAI, 600));
          return;
        }
      }
    }

    endTurn();
  }

  function clearHighlights() {
    highlightMaterials.length = 0;
    while (highlightGroup.children.length) {
      const c = highlightGroup.children[0];
      highlightGroup.remove(c);
      c.geometry.dispose();
      c.material.dispose();
    }
  }

  const HIGHLIGHT_SQUARE_SIZE = 0.82;
  const HIGHLIGHT_GLOW_SIZE = 1.02;

  function showPlacementHighlights(tileList) {
    clearHighlights();
    tileList.forEach(({ gx, gy }) => {
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowGeo = new THREE.PlaneGeometry(HIGHLIGHT_GLOW_SIZE, HIGHLIGHT_GLOW_SIZE);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x22aa44, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareGeo = new THREE.PlaneGeometry(HIGHLIGHT_SQUARE_SIZE, HIGHLIGHT_SQUARE_SIZE);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0x44cc66, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(squareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      squareMesh.userData.gx = gx;
      squareMesh.userData.gy = gy;
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
  }

  function showReachable(distMap) {
    clearHighlights();
    distMap.forEach((d, k) => {
      if (d === 0) return;
      const gx = k % world.w;
      const gy = (k / world.w) | 0;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowGeo = new THREE.PlaneGeometry(HIGHLIGHT_GLOW_SIZE, HIGHLIGHT_GLOW_SIZE);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x3399ff, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareGeo = new THREE.PlaneGeometry(HIGHLIGHT_SQUARE_SIZE, HIGHLIGHT_SQUARE_SIZE);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0x66b3ff, transparent: true, opacity: 0.65, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(squareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
  }

  function showAttackRange(distMap) {
    clearHighlights();
    distMap.forEach((d, k) => {
      if (d === 0) return;
      const gx = k % world.w;
      const gy = (k / world.w) | 0;
      const topY = BASE_HEIGHT + world.height[gy][gx] * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = gx * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = gy * TILE_SIZE - hh + TILE_SIZE / 2;
      const y = surfaceY + 0.01;
      const glowGeo = new THREE.PlaneGeometry(HIGHLIGHT_GLOW_SIZE, HIGHLIGHT_GLOW_SIZE);
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x992222, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.set(px, y, pz);
      highlightGroup.add(glowMesh);
      highlightMaterials.push(glowMat);
      const squareGeo = new THREE.PlaneGeometry(HIGHLIGHT_SQUARE_SIZE, HIGHLIGHT_SQUARE_SIZE);
      const squareMat = new THREE.MeshBasicMaterial({ color: 0xcc4444, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const squareMesh = new THREE.Mesh(squareGeo, squareMat);
      squareMesh.rotation.x = -Math.PI / 2;
      squareMesh.position.set(px, y + 0.01, pz);
      highlightGroup.add(squareMesh);
      highlightMaterials.push(squareMat);
    });
  }

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  function pointerToNdc(clientX, clientY) {
    const rect = container.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    return { x: pointer.x, y: pointer.y };
  }

  function handleMapClick(ndcX, ndcY) {
    if (isUnitMoving) return;
    pointer.x = ndcX;
    pointer.y = ndcY;
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(tilesGroup.children, true);
    if (intersects.length === 0) return;
    let obj = intersects[0].object;
    while (obj && (obj.userData.gx == null || obj.userData.gy == null)) obj = obj.parent;
    if (!obj || obj.userData.gx == null) return;
    const gx = obj.userData.gx;
    const gy = obj.userData.gy;

    if (phase === 'draft' && pendingClassKey) {
      const k = gy * world.w + gx;
      if (placementTileKeys.has(k)) {
        placeUnit(gx, gy);
      }
      return;
    }

    if (phase !== 'playing') return;
    if (gameMode === 'cvcpu') return;

    if (isChoosingFacing) {
      const uid = initiativeOrder[currentTurnIndex];
      const unit = units.find((u) => u.id === uid);
      const mesh = unitMeshes.get(uid);
      if (unit && mesh && allowedFacingAngles.length > 0) {
        const unitWorld = worldPos(unit.x, unit.y);
        const clickWorld = worldPos(gx, gy);
        const dx = clickWorld.x - unitWorld.x;
        const dz = clickWorld.z - unitWorld.z;
        const angle = dx * dx + dz * dz > 1e-6 ? Math.atan2(dx, dz) : mesh.rotation.y;
        mesh.rotation.y = snapToAllowedFacing(angle);
      }
      endTurn();
      return;
    }

    if (selectedUnitId != null && isAttackMode) {
      const u = units.find((x) => x.id === selectedUnitId);
      if (!u || u.player !== currentPlayer) return;
      const k = gy * world.w + gx;
      const target = units.find((o) => o.x === gx && o.y === gy && o.hp > 0);
      if (target && target.id === initiativeOrder[currentTurnIndex] && target.player === currentPlayer) {
        isAttackMode = false;
        selectedUnitId = target.id;
        if (!hasMoved) {
          reachable = getReachable(world, target.x, target.y, target.agi, units, target);
          showReachable(reachable);
        } else {
          clearHighlights();
          reachable = new Map();
        }
        updateTurnUI();
        return;
      }
      if (!reachable.has(k) || reachable.get(k) === 0) return;
      if (target && target.player !== currentPlayer) {
        const evasionMax = target.agi + target.luk * 0.3;
        const evasionRoll = Math.random() * evasionMax;
        const isHit = evasionRoll <= u.dex;
        if (isHit) {
          const rawDamage = (u.str * 0.7 + u.dex * 0.1 + u.int * 0.07) - (target.vit * 0.3 + target.luk * 0.1);
          const damage = Math.max(1, Math.floor(rawDamage));
          target.hp = Math.max(0, target.hp - damage);
          showFloatingCombatText(target.x, target.y, String(damage), false);
          if (target.hp <= 0) handleUnitDeath(target);
        } else {
          showFloatingCombatText(target.x, target.y, 'MISS', true);
        }
        hasAttacked = true;
        selectedUnitId = null;
        isAttackMode = false;
        clearHighlights();
        if (hasMoved) endTurn();
        else updateTurnUI();
      }
      return;
    }

    const unitAt = units.find((u) => u.x === gx && u.y === gy && u.hp > 0);
    if (unitAt) {
      if (unitAt.id === initiativeOrder[currentTurnIndex] && unitAt.player === currentPlayer) {
        hideUnitPreviewCard();
        selectedUnitId = unitAt.id;
        isAttackMode = false;
        if (!hasMoved) {
          reachable = getReachable(world, gx, gy, unitAt.agi, units, unitAt);
          showReachable(reachable);
        } else {
          clearHighlights();
          reachable = new Map();
        }
        updateTurnUI();
        return;
      }
      clearHighlights();
      reachable = new Map();
      isAttackMode = false;
      showUnitPreviewCard(unitAt);
      updateTurnUI();
      return;
    }

    hideUnitPreviewCard();

    if (selectedUnitId != null) {
      if (isAttackMode) return;
      const u = units.find((x) => x.id === selectedUnitId);
      if (!u || u.player !== currentPlayer) return;
      const k = gy * world.w + gx;
      if (!reachable.has(k) || reachable.get(k) === 0) return;
      const occupied = units.some((o) => o.id !== u.id && o.x === gx && o.y === gy && o.hp > 0);
      if (occupied) return;
      if (isUnitMoving) return;
      if (hasMoved) return;

      const path = getPath(world, u.x, u.y, gx, gy, units, u);
      if (!path || path.length <= 1) return;

      selectedUnitId = null;
      clearHighlights();
      isUnitMoving = true;
      updateUnitTileBorders(u.id);
      const MOVE_DURATION_MS = 220;
      const mesh = unitMeshes.get(u.id);
      let stepIndex = 1;

      function animateStep() {
        if (stepIndex >= path.length) {
          u.x = path[path.length - 1].x;
          u.y = path[path.length - 1].y;
          isUnitMoving = false;
          resetWalkPose(mesh);
          updateUnitTileBorders();
          reachable = new Map();
          hasMoved = true;
          if (hasAttacked) endTurn();
          else updateTurnUI();
          return;
        }
        const from = path[stepIndex - 1];
        const to = path[stepIndex];
        const startPos = worldPos(from.x, from.y).clone();
        const endPos = worldPos(to.x, to.y).clone();
        const dx = endPos.x - startPos.x;
        const dz = endPos.z - startPos.z;
        if (dx * dx + dz * dz > 1e-6) {
          mesh.rotation.y = Math.atan2(dx, dz);
        }
        const startTime = performance.now();

        function tick(now) {
          const t = Math.min(1, (now - startTime) / MOVE_DURATION_MS);
          const eased = t * (2 - t);
          mesh.position.lerpVectors(startPos, endPos, eased);
          setWalkPose(mesh, t);
          if (t < 1) requestAnimationFrame(tick);
          else {
            stepIndex++;
            animateStep();
          }
        }
        requestAnimationFrame(tick);
      }
      animateStep();
    }
  }

  function onPointerDown(e) {
    pointerDownPixel.x = e.clientX;
    pointerDownPixel.y = e.clientY;
    ctrlKeyOnDown = e.ctrlKey;
    prevPointerNdc = pointerToNdc(e.clientX, e.clientY);
    container.style.cursor = e.ctrlKey ? 'grabbing' : 'grabbing';
  }

  function onPointerMove(e) {
    if (isChoosingFacing) {
      updateFacingFromPointer(e.clientX, e.clientY);
      return;
    }
    if (prevPointerNdc == null) return;
    const dx = e.clientX - pointerDownPixel.x;
    const dy = e.clientY - pointerDownPixel.y;
    if (!isPanning && !isRotating && (Math.abs(dx) > CLICK_DRAG_THRESHOLD_PX || Math.abs(dy) > CLICK_DRAG_THRESHOLD_PX)) {
      if (e.ctrlKey || ctrlKeyOnDown) isRotating = true;
      else isPanning = true;
    }
    if (isRotating) {
      _orbitOffset.copy(camera.position).sub(cameraTarget);
      const r = _orbitOffset.length();
      if (r < 0.001) return;
      let azimuth = Math.atan2(_orbitOffset.x, _orbitOffset.z);
      let elevation = Math.asin(Math.max(-1, Math.min(1, _orbitOffset.y / r)));
      azimuth -= dx * ROTATE_SENSITIVITY;
      elevation += dy * ROTATE_SENSITIVITY;
      elevation = Math.max(ELEVATION_MIN, Math.min(ELEVATION_MAX, elevation));
      _orbitOffset.x = r * Math.cos(elevation) * Math.sin(azimuth);
      _orbitOffset.y = r * Math.sin(elevation);
      _orbitOffset.z = r * Math.cos(elevation) * Math.cos(azimuth);
      camera.position.copy(cameraTarget).add(_orbitOffset);
      camera.lookAt(cameraTarget);
      pointerDownPixel.x = e.clientX;
      pointerDownPixel.y = e.clientY;
    } else if (isPanning) {
      const currNdc = pointerToNdc(e.clientX, e.clientY);
      panPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, cameraTarget.y, 0));
      raycaster.setFromCamera(new THREE.Vector2(prevPointerNdc.x, prevPointerNdc.y), camera);
      raycaster.ray.intersectPlane(panPlane, panIntersect);
      const prevWorld = panIntersect.clone();
      raycaster.setFromCamera(new THREE.Vector2(currNdc.x, currNdc.y), camera);
      raycaster.ray.intersectPlane(panPlane, panIntersect);
      const delta = prevWorld.sub(panIntersect);
      cameraTarget.add(delta);
      camera.position.add(delta);
      camera.lookAt(cameraTarget);
      prevPointerNdc = { x: currNdc.x, y: currNdc.y };
    }
  }

  function onPointerUp(e) {
    if (prevPointerNdc != null && !isPanning && !isRotating) {
      const ndc = pointerToNdc(e.clientX, e.clientY);
      handleMapClick(ndc.x, ndc.y);
    }
    prevPointerNdc = null;
    isPanning = false;
    isRotating = false;
    ctrlKeyOnDown = false;
    container.style.cursor = 'grab';
  }

  function onWheel(e) {
    e.preventDefault();
    const dist = camera.position.distanceTo(cameraTarget);
    const newDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, dist + e.deltaY * ZOOM_SENSITIVITY));
    zoomDir.copy(cameraTarget).sub(camera.position).normalize();
    camera.position.copy(cameraTarget).sub(zoomDir.multiplyScalar(newDist));
    camera.lookAt(cameraTarget);
  }

  container.style.cursor = 'grab';
  container.addEventListener('mousedown', onPointerDown);
  container.addEventListener('mousemove', onPointerMove);
  container.addEventListener('mouseup', onPointerUp);
  container.addEventListener('mouseleave', onPointerUp);
  container.addEventListener('wheel', onWheel, { passive: false });

  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const combatTextLayer = document.createElement('div');
  combatTextLayer.id = 'combat-text-layer';
  container.appendChild(combatTextLayer);

  const _projVec = new THREE.Vector3();
  function showFloatingCombatText(gx, gy, text, isMiss) {
    _projVec.copy(worldPos(gx, gy));
    _projVec.y += 1.2;
    _projVec.project(camera);
    const w = container.clientWidth;
    const h = container.clientHeight;
    const x = (_projVec.x * 0.5 + 0.5) * w;
    const y = (1 - (_projVec.y * 0.5 + 0.5)) * h;
    const el = document.createElement('div');
    el.className = 'combat-text-float ' + (isMiss ? 'miss' : 'damage');
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    combatTextLayer.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  }

  function handleUnitDeath(unit) {
    showFloatingCombatText(unit.x, unit.y, 'DEAD', false);
    setTimeout(() => {
      const mesh = unitMeshes.get(unit.id);
      if (mesh) {
        scene.remove(mesh);
        unitMeshes.delete(unit.id);
      }
      updateUnitTileBorders();
      checkGameOver();
    }, 1600);
  }

  function checkGameOver() {
    if (phase !== 'playing') return;
    const p1Alive = units.some((u) => u.player === 1 && u.hp > 0);
    const p2Alive = units.some((u) => u.player === 2 && u.hp > 0);
    if (!p1Alive) {
      showGameOver(2);
    } else if (!p2Alive) {
      showGameOver(1);
    }
  }

  function endGameByTurnLimit() {
    const centerTiles = getCenterTiles();
    const centerKeys = new Set(centerTiles.map((c) => c.gy * world.w + c.gx));
    const p1OnCenter = units.filter((u) => u.hp > 0 && u.player === 1 && centerKeys.has(u.y * world.w + u.x)).length;
    const p2OnCenter = units.filter((u) => u.hp > 0 && u.player === 2 && centerKeys.has(u.y * world.w + u.x)).length;
    let winningPlayer = null;
    let title = '';
    if (p1OnCenter > p2OnCenter) {
      winningPlayer = 1;
      title = `Time's up! Player 1 wins! (${p1OnCenter} vs ${p2OnCenter} units on center base)`;
    } else if (p2OnCenter > p1OnCenter) {
      winningPlayer = 2;
      title = `Time's up! Player 2 wins! (${p2OnCenter} vs ${p1OnCenter} units on center base)`;
    } else {
      const p1TotalHp = units.filter((u) => u.hp > 0 && u.player === 1).reduce((sum, u) => sum + u.hp, 0);
      const p2TotalHp = units.filter((u) => u.hp > 0 && u.player === 2).reduce((sum, u) => sum + u.hp, 0);
      if (p1TotalHp > p2TotalHp) {
        winningPlayer = 1;
        title = `Time's up! Draw on center — Player 1 wins on total HP (${p1TotalHp} vs ${p2TotalHp})`;
      } else if (p2TotalHp > p1TotalHp) {
        winningPlayer = 2;
        title = `Time's up! Draw on center — Player 2 wins on total HP (${p2TotalHp} vs ${p1TotalHp})`;
      } else {
        title = `Draw! (equal units on center: ${p1OnCenter}, equal HP)`;
      }
    }
    showGameOver(winningPlayer, title);
  }

  function showGameOver(winningPlayer, titleOverride) {
    phase = 'gameover';
    document.getElementById('turn-menu').style.display = 'none';
    hideUnitPreviewCard();
    clearHighlights();
    const overlay = document.getElementById('game-over-overlay');
    const titleEl = document.getElementById('game-over-title');
    const cardsEl = document.getElementById('game-over-cards');
    titleEl.textContent = titleOverride != null ? titleOverride : `Player ${winningPlayer} wins!`;
    const winnerUnits = units.filter((u) => u.player === (winningPlayer != null ? winningPlayer : 1));
    cardsEl.innerHTML = winnerUnits.map((unit) => {
      const c = unit;
      const levelClass = unit.level >= 3 ? ' level-3' : unit.level >= 2 ? ' level-2' : '';
      const lowHpClass = c.maxHp > 0 && (c.hp / c.maxHp) < 0.3 ? ' low-hp' : '';
      return `
        <div class="game-over-card${levelClass}${lowHpClass}">
          <img class="game-over-card-image" src="${CLASS_IMAGES[unit.class] || ''}" alt="${c.name}" referrerpolicy="no-referrer" onerror="this.style.background='#21262d';this.onerror=null" />
          <div class="game-over-card-body">
            <div class="game-over-card-name">${c.name}</div>
            <div class="game-over-card-meta">Lv.${c.level} ${c.class} — HP ${c.hp}/${c.maxHp}</div>
            <div class="game-over-card-stats">
              <span class="stat-label">HP</span><span class="stat-val stat-val-hp">${c.hp}/${c.maxHp}</span>
              <span class="stat-label">MP</span><span class="stat-val">${c.mp}/${c.maxMp}</span>
              <span class="stat-label">STR</span><span class="stat-val">${c.str}</span>
              <span class="stat-label">AGI</span><span class="stat-val">${c.agi}</span>
              <span class="stat-label">VIT</span><span class="stat-val">${c.vit}</span>
              <span class="stat-label">DEX</span><span class="stat-val">${c.dex}</span>
              <span class="stat-label">LUK</span><span class="stat-val">${c.luk}</span>
              <span class="stat-label">INT</span><span class="stat-val">${c.int}</span>
              <span class="stat-label">Range</span><span class="stat-val">${c.range}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
    overlay.classList.add('visible');
  }

  function animate(now = 0) {
    requestAnimationFrame(animate);
    const pulse = 0.6 + 0.4 * Math.sin(now * 0.004);
    for (let i = 0; i < highlightMaterials.length; i++) {
      const base = i % 2 === 0 ? 0.4 : 0.7;
      highlightMaterials[i].opacity = base * pulse;
    }
    renderer.render(scene, camera);
  }
  animate();
}

main();
