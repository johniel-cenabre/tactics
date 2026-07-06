// Terrain mesh builder. Consumes a world (from world/worldgen.js) and produces a
// Three.js Group: instanced walkable ground + merged outside terrain (grass, water,
// rock, tree roots) + individual tree meshes. Pure rendering, no game rules.

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TILE_SIZE, BASE_HEIGHT } from '../config.js';
import { TileType, TILE_COLORS as colors } from '../world/tile-types.js';

export function halfW(world) {
  return (world.w * TILE_SIZE) / 2;
}
export function halfH(world) {
  return (world.h * TILE_SIZE) / 2;
}

export function createTilingNoiseTexture(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.floor(128 + (Math.random() - 0.5) * 80);
    data[i] = data[i + 1] = data[i + 2] = v;
    data[i + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  tex.needsUpdate = true;
  return tex;
}

function applySolidVertexColors(geometry, cr, cg, cb) {
  const pos = geometry.getAttribute('position');
  if (!pos) return;
  const n = pos.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = cr;
    arr[i * 3 + 1] = cg;
    arr[i * 3 + 2] = cb;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(arr, 3));
}

export function buildTileMesh(world) {
  const group = new THREE.Group();
  const hw = halfW(world);
  const hh = halfH(world);
  const groundGeo = new THREE.BoxGeometry(TILE_SIZE, BASE_HEIGHT, TILE_SIZE);
  const noiseBumpMap = createTilingNoiseTexture(64);
  const baseRoughness = 0.88;
  const baseMetalness = 0.02;
  const treeGroups = [];
  group.userData.swayingFoliage = [];
  const sharedTrunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.9 });
  sharedTrunkMat.bumpMap = noiseBumpMap;
  sharedTrunkMat.bumpScale = 0.12;
  const sharedFoliageMat = new THREE.MeshStandardMaterial({ color: 0x2d5a2d, roughness: 0.85 });
  sharedFoliageMat.bumpMap = noiseBumpMap;
  sharedFoliageMat.bumpScale = 0.18;
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.14, 1, 6);
  const coneGeoLo = new THREE.ConeGeometry(0.45, 0.9, 5);
  const coneGeoMid = new THREE.ConeGeometry(0.34, 0.45, 5);
  const coneGeoTop = new THREE.ConeGeometry(0.23, 0.4, 5);

  const rootRadius = 0.12;
  function buildCrisscrossLineGeometry(px, pz, surfaceY) {
    const ly = surfaceY + 0.02;
    const points = [
      [px - rootRadius, ly, pz - rootRadius], [px + rootRadius, ly, pz + rootRadius],
      [px - rootRadius, ly, pz + rootRadius], [px + rootRadius, ly, pz - rootRadius],
      [px - rootRadius + 0.06, ly, pz - rootRadius + 0.06], [px + rootRadius - 0.06, ly, pz + rootRadius - 0.06],
      [px - rootRadius + 0.06, ly, pz + rootRadius - 0.06], [px + rootRadius - 0.06, ly, pz - rootRadius + 0.06],
    ];
    const vertices = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      vertices[i * 3] = points[i][0];
      vertices[i * 3 + 1] = points[i][1];
      vertices[i * 3 + 2] = points[i][2];
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return lineGeo;
  }

  let insideCount = 0;
  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      if (world.path[y][x]) insideCount++;
    }
  }

  const groundMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: baseRoughness, metalness: baseMetalness,
    bumpMap: noiseBumpMap, bumpScale: 0.12,
  });
  const instancedGround = new THREE.InstancedMesh(groundGeo, groundMat, insideCount);
  instancedGround.userData.tileGridGround = true;
  instancedGround.userData.insideTileGx = new Uint16Array(insideCount);
  instancedGround.userData.insideTileGy = new Uint16Array(insideCount);
  instancedGround.castShadow = false;
  instancedGround.receiveShadow = true;
  instancedGround.frustumCulled = false;

  const outsideGroundGeoms = [];
  const outsideWaterGeoms = [];
  const outsideRockGeoms = [];
  const outsideLineGeoms = [];

  const _dummy = new THREE.Object3D();
  const _instColor = new THREE.Color();
  const _m4 = new THREE.Matrix4();
  const _quat = new THREE.Quaternion();
  const _euler = new THREE.Euler();
  const _vec3 = new THREE.Vector3();
  const _scaleOne = new THREE.Vector3(1, 1, 1);

  let instanceIndex = 0;
  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      const t = world.type[y][x];
      const elev = world.height[y][x];
      const color = colors[t];
      const topY = BASE_HEIGHT + elev * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = x * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = y * TILE_SIZE - hh + TILE_SIZE / 2;
      const cr = ((color >> 16) & 0xff) / 255;
      const cg = ((color >> 8) & 0xff) / 255;
      const cb = (color & 0xff) / 255;
      let fr = cr, fg = cg, fb = cb;
      if (t === TileType.PATH || t === TileType.TREE || t === TileType.ROCK) {
        const dirtR = 0.42, dirtG = 0.26, dirtB = 0.14;
        const mix = Math.random() * 0.45;
        fr = cr * (1 - mix) + dirtR * mix;
        fg = cg * (1 - mix) + dirtG * mix;
        fb = cb * (1 - mix) + dirtB * mix;
      }
      if (t === TileType.TREE || t === TileType.ROCK) { fr *= 0.5; fg *= 0.5; fb *= 0.5; }
      const variation = 1 + (Math.random() - 0.5) * 0.12;
      const ffr = Math.min(1, fr * variation);
      const ffg = Math.min(1, fg * variation);
      const ffb = Math.min(1, fb * variation);

      if (world.path[y][x]) {
        instancedGround.userData.insideTileGx[instanceIndex] = x;
        instancedGround.userData.insideTileGy[instanceIndex] = y;
        _instColor.setRGB(ffr, ffg, ffb);
        instancedGround.setColorAt(instanceIndex, _instColor);
        _dummy.position.set(px, topY / 2, pz);
        _dummy.updateMatrix();
        instancedGround.setMatrixAt(instanceIndex, _dummy.matrix);
        instanceIndex++;
      } else {
        const gg = groundGeo.clone();
        _dummy.position.set(px, topY / 2, pz);
        _dummy.updateMatrix();
        gg.applyMatrix4(_dummy.matrix);
        applySolidVertexColors(gg, ffr, ffg, ffb);
        outsideGroundGeoms.push(gg);

        if (t === TileType.TREE) {
          outsideLineGeoms.push(buildCrisscrossLineGeometry(px, pz, surfaceY));
        } else if (t === TileType.WATER) {
          const wc = colors[TileType.WATER];
          const wr = ((wc >> 16) & 0xff) / 255;
          const wg = ((wc >> 8) & 0xff) / 255;
          const wb = (wc & 0xff) / 255;
          const wVariation = 1 + (Math.random() - 0.5) * 0.12;
          const wgPl = new THREE.PlaneGeometry(TILE_SIZE, TILE_SIZE);
          wgPl.rotateX(-Math.PI / 2);
          _dummy.position.set(px, surfaceY + 0.02, pz);
          _dummy.rotation.set(0, 0, 0);
          _dummy.scale.set(1, 1, 1);
          _dummy.updateMatrix();
          wgPl.applyMatrix4(_dummy.matrix);
          applySolidVertexColors(wgPl, Math.min(1, wr * wVariation), Math.min(1, wg * wVariation), Math.min(1, wb * wVariation));
          outsideWaterGeoms.push(wgPl);
        } else if (t === TileType.ROCK) {
          const pushRockGeom = (size, offX, offZ) => {
            const rg = new THREE.DodecahedronGeometry(size, 0);
            _euler.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
            _quat.setFromEuler(_euler);
            _vec3.set(px + offX, surfaceY + size - 0.2, pz + offZ);
            _m4.compose(_vec3, _quat, _scaleOne);
            rg.applyMatrix4(_m4);
            outsideRockGeoms.push(rg);
          };
          pushRockGeom(0.32 + Math.random() * 0.14, (Math.random() - 0.5) * 0.15, (Math.random() - 0.5) * 0.15);
          pushRockGeom(0.2 + Math.random() * 0.12, (Math.random() - 0.5) * 0.25, (Math.random() - 0.5) * 0.25);
          pushRockGeom(0.12 + Math.random() * 0.12, (Math.random() - 0.5) * 0.28, (Math.random() - 0.5) * 0.28);
        }
      }
    }
  }

  instancedGround.instanceMatrix.needsUpdate = true;
  if (instancedGround.instanceColor) instancedGround.instanceColor.needsUpdate = true;
  group.add(instancedGround);

  const disposeGeoms = (arr) => { for (let i = 0; i < arr.length; i++) arr[i].dispose(); };

  if (outsideGroundGeoms.length > 0) {
    const mergedG = mergeGeometries(outsideGroundGeoms);
    disposeGeoms(outsideGroundGeoms);
    if (mergedG) {
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: baseRoughness, metalness: baseMetalness, bumpMap: noiseBumpMap, bumpScale: 0.12 });
      const mesh = new THREE.Mesh(mergedG, mat);
      mesh.receiveShadow = true; mesh.castShadow = false; mesh.frustumCulled = false;
      mesh.userData.mergedOutsidePick = true;
      group.add(mesh);
    }
  }

  if (outsideLineGeoms.length > 0) {
    const mergedL = mergeGeometries(outsideLineGeoms);
    disposeGeoms(outsideLineGeoms);
    if (mergedL) {
      const lines = new THREE.LineSegments(mergedL, new THREE.LineBasicMaterial({ color: 0x0d0d0d, linewidth: 1 }));
      lines.frustumCulled = false;
      lines.raycast = function () {};
      group.add(lines);
    }
  }

  if (outsideRockGeoms.length > 0) {
    const mergedR = mergeGeometries(outsideRockGeoms);
    disposeGeoms(outsideRockGeoms);
    if (mergedR) {
      const rockMat = new THREE.MeshStandardMaterial({ color: 0x6a6a6a, roughness: 0.9 });
      rockMat.bumpMap = noiseBumpMap; rockMat.bumpScale = 0.2;
      const rockMesh = new THREE.Mesh(mergedR, rockMat);
      rockMesh.castShadow = true; rockMesh.frustumCulled = false;
      rockMesh.raycast = function () {};
      group.add(rockMesh);
    }
  }

  if (outsideWaterGeoms.length > 0) {
    const mergedW = mergeGeometries(outsideWaterGeoms);
    disposeGeoms(outsideWaterGeoms);
    if (mergedW) {
      const waterMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.08, metalness: 0.45, transparent: true, opacity: 0.94, bumpMap: noiseBumpMap, bumpScale: 0.03 });
      const waterMesh = new THREE.Mesh(mergedW, waterMat);
      waterMesh.receiveShadow = true; waterMesh.frustumCulled = false;
      waterMesh.raycast = function () {};
      group.add(waterMesh);
    }
  }

  for (let y = 0; y < world.h; y++) {
    for (let x = 0; x < world.w; x++) {
      if (world.path[y][x]) continue;
      if (world.type[y][x] !== TileType.TREE) continue;
      const elev = world.height[y][x];
      const topY = BASE_HEIGHT + elev * 0.35;
      const surfaceY = topY / 2 + BASE_HEIGHT / 2;
      const px = x * TILE_SIZE - hw + TILE_SIZE / 2;
      const pz = y * TILE_SIZE - hh + TILE_SIZE / 2;

      const treeGroup = new THREE.Group();
      treeGroup.userData = { gx: x, gy: y };
      treeGroup.position.set(px, surfaceY, pz);

      const atEdge = x === 0 || x === world.w - 1 || y === 0 || y === world.h - 1;
      const trunkH = atEdge ? 0.75 + Math.random() * 0.35 : 0.5 + Math.random() * 0.2;
      const trunk = new THREE.Mesh(trunkGeo, sharedTrunkMat);
      trunk.scale.y = trunkH;
      trunk.position.set(0, trunkH / 2, 0);
      trunk.castShadow = true;
      trunk.raycast = function () {};
      treeGroup.add(trunk);

      const coneRad = atEdge ? 0.52 : 0.45;
      const coneH = atEdge ? 1.05 : 0.9;
      const overlap = 0.12;
      const bottomH = coneH * 0.5, middleH = coneH * 0.45, topH = coneH * 0.4;
      const foliageGroup = new THREE.Group();
      foliageGroup.position.set(0, trunkH, 0);
      const bottomCone = new THREE.Mesh(coneGeoLo, sharedFoliageMat);
      bottomCone.scale.set(coneRad / 0.45, bottomH / 0.9, coneRad / 0.45);
      bottomCone.position.set(0, bottomH / 2, 0);
      bottomCone.castShadow = true;
      bottomCone.raycast = function () {};
      foliageGroup.add(bottomCone);
      const middleCone = new THREE.Mesh(coneGeoMid, sharedFoliageMat);
      middleCone.scale.set((coneRad * 0.75) / 0.34, middleH / 0.45, (coneRad * 0.75) / 0.34);
      middleCone.position.set(0, bottomH - overlap + middleH / 2, 0);
      middleCone.castShadow = true;
      middleCone.raycast = function () {};
      foliageGroup.add(middleCone);
      const topCone = new THREE.Mesh(coneGeoTop, sharedFoliageMat);
      topCone.scale.set((coneRad * 0.5) / 0.23, topH / 0.4, (coneRad * 0.5) / 0.23);
      topCone.position.set(0, bottomH - overlap + middleH - overlap + topH / 2, 0);
      topCone.castShadow = true;
      topCone.raycast = function () {};
      foliageGroup.add(topCone);
      treeGroup.add(foliageGroup);

      const gcx = (world.w - 1) * 0.5, gcy = (world.h - 1) * 0.5;
      const centerRadiusTiles = Math.max(3.5, Math.min(world.w, world.h) * 0.24);
      const distSq = (x - gcx) ** 2 + (y - gcy) ** 2;
      if (distSq <= centerRadiusTiles * centerRadiusTiles && Math.random() < 0.35) {
        group.userData.swayingFoliage.push({ group: foliageGroup, phase: Math.random() * Math.PI * 2 });
      }

      group.add(treeGroup);
      treeGroups.push(treeGroup);
    }
  }
  group.userData.treeGroups = treeGroups;
  return group;
}
