// Procedural humanoid figure builder. Pure Three.js: given a class + look, returns
// a Group whose userData exposes limb pivots for walk/attack posing.
//
// Limbs are capsules hung from joint pivots (hips / shoulders) so they swing from
// the correct point instead of spinning around their center. The torso tapers from
// shoulders to waist and a neck links it to the head, giving a rounded, more
// anatomical silhouette than the old all-box figure.

import * as THREE from 'three';
import { CLASS_LOOK } from '../data/class-look.js';
import { CLASSES } from '../data/classes.js';
import {
  sharedGeo, bodyMat, sharedMat,
  EYE_WHITE, PUPIL, SHINE, LINER, LIP, CHEEK, MOUTH,
  CAP_SEG, RAD_SEG, HEAD_SEG, HEAD_RINGS, LATHE_SEG, CYL_SEG,
} from './figure-assets.js';

const UNIT_COLOR_DARKEN = 0.62;

function castShadow(mesh, on = true) {
  mesh.castShadow = on;
  mesh.receiveShadow = false;
}

export function nudgeColor(hex, amount) {
  const r = ((hex >> 16) & 0xff) / 255;
  const g = ((hex >> 8) & 0xff) / 255;
  const b = (hex & 0xff) / 255;
  const v = 1 + (Math.random() - 0.5) * amount;
  return new THREE.Color(Math.min(1, r * v), Math.min(1, g * v), Math.min(1, b * v));
}

export function darkenColor(color, factor = UNIT_COLOR_DARKEN) {
  const c = color instanceof THREE.Color ? color : new THREE.Color(color);
  return new THREE.Color(Math.max(0, c.r * factor), Math.max(0, c.g * factor), Math.max(0, c.b * factor));
}

export function createHumanFigure(player, classKey, hairColor, bumpMap) {
  const look = CLASS_LOOK[classKey] || CLASS_LOOK.knight;
  const primary = darkenColor(nudgeColor(look.primary, 0.08));
  const secondary = darkenColor(nudgeColor(look.secondary, 0.08));
  const gender = (CLASSES[classKey] && CLASSES[classKey].gender) || 'male';
  const female = gender === 'female';
  const hairHex = hairColor != null ? hairColor : 0x3d2314;
  const skinColor = darkenColor(nudgeColor(look.skin != null ? look.skin : 0xe8b4a0, 0.06));
  const hairColorNudged = darkenColor(nudgeColor(hairHex, 0.08));
  const torsoMat = bodyMat('torso', primary.getHex(), bumpMap, { metalness: 0.3, roughness: 0.48, bumpScale: 0.1 });
  const legMat = bodyMat('leg', secondary.getHex(), bumpMap, { metalness: 0.24, roughness: 0.55, bumpScale: 0.1 });
  const armMat = torsoMat;
  const skin = bodyMat('skin', skinColor.getHex(), bumpMap, { metalness: 0.05, roughness: 0.72, bumpScale: 0.05 });

  const group = new THREE.Group();

  // Key dimensions kept identical to the previous figure so callers that hard-code
  // legH/torsoH/torsoD (slash mark, borders) stay aligned.
  const legH = 0.28, torsoH = 0.28, torsoD = 0.12, torsoW = 0.2;
  const armW = 0.06; // referenced by cape/apron placement below
  const headRadius = 0.1;
  const capGeo = (r, cyl) => sharedGeo(`cap:${r}:${cyl}`, () => new THREE.CapsuleGeometry(r, cyl, CAP_SEG, RAD_SEG));

  // A limb hung from a joint pivot: the pivot sits at the joint, the capsule hangs
  // straight down from it. Rotating the pivot swings the whole limb naturally.
  const makeLimb = (x, jointY, radius, length, material) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, jointY, 0);
    const cyl = Math.max(0.02, length - radius * 2);
    const mesh = new THREE.Mesh(capGeo(radius, cyl), material);
    mesh.position.y = -length / 2;
    castShadow(mesh);
    pivot.add(mesh);
    group.add(pivot);
    return { pivot, mesh, length };
  };

  // --- legs (pivot at the hip) ---
  const legLen = legH, legR = female ? 0.044 : 0.05;
  const leftLegJ = makeLimb(-0.06, legH, legR, legLen, legMat);
  const rightLegJ = makeLimb(0.06, legH, legR, legLen, legMat);
  const footMat = bodyMat('foot', darkenColor(secondary, 0.8).getHex(), bumpMap, { metalness: 0.1, roughness: 0.8, bumpScale: 0.08 });
  const footGeo = sharedGeo('foot', () => new THREE.BoxGeometry(0.075, 0.045, 0.12));
  const addFoot = (limb) => {
    const foot = new THREE.Mesh(footGeo, footMat);
    foot.position.set(0, -legLen / 2 + 0.022, 0.03);
    limb.mesh.add(foot);
  };
  addFoot(leftLegJ);
  addFoot(rightLegJ);

  const depthScale = torsoD / torsoW; // flatten front-to-back
  let waistR; // shared with the belt below so it hugs the actual waist

  // --- pelvis bridging the legs to the torso ---
  if (female) {
    // Wide but flat hips: broad side-to-side, shallow top-to-bottom, so the waist
    // pinch above stays visible (hourglass rather than a bulge).
    const hips = new THREE.Mesh(sharedGeo('hips', () => new THREE.SphereGeometry(0.086, HEAD_SEG, HEAD_RINGS)), legMat);
    hips.scale.set(1.3, 0.62, 0.95);
    hips.position.set(0, legH - 0.004, 0);
    castShadow(hips);
    group.add(hips);
  } else {
    const pelvis = new THREE.Mesh(capGeo(0.078, 0.04), legMat);
    pelvis.rotation.z = Math.PI / 2;
    pelvis.scale.set(1, 1.25, 0.75);
    pelvis.position.set(0, legH + 0.02, 0);
    castShadow(pelvis);
    group.add(pelvis);
  }

  if (female) {
    // --- hourglass torso via a lathe profile: pinched waist, flared chest ---
    waistR = 0.058;
    const profile = [
      new THREE.Vector2(0.060, 0.00), // waist (bottom)
      new THREE.Vector2(0.058, 0.03),
      new THREE.Vector2(0.070, 0.09),
      new THREE.Vector2(0.090, 0.15), // chest
      new THREE.Vector2(0.086, 0.20),
      new THREE.Vector2(0.088, 0.28), // shoulders (narrower than male)
    ];
    const torso = new THREE.Mesh(sharedGeo('fTorso', () => new THREE.LatheGeometry(profile, LATHE_SEG)), torsoMat);
    torso.position.set(0, legH, 0);
    torso.scale.z = depthScale + 0.06; // keep a little more depth for the bust
    castShadow(torso);
    group.add(torso);

    // Bust: two small, flattened spheres hugging the chest — a subtle curve, not
    // protruding orbs. Skipped when an apron/bodice covers the chest anyway.
    if (look.apron == null) {
      const bustR = 0.048, bustY = legH + 0.148, bustZ = 0.042;
      const bustGeo = sharedGeo('bust', () => new THREE.SphereGeometry(bustR, HEAD_SEG, HEAD_RINGS));
      for (const sx of [-1, 1]) {
        const bust = new THREE.Mesh(bustGeo, torsoMat);
        bust.position.set(sx * 0.033, bustY, bustZ);
        bust.scale.set(1, 0.86, 0.62);
        group.add(bust);
      }
    }

    const shoulderGeo = sharedGeo('fShoulder', () => new THREE.SphereGeometry(0.092, HEAD_SEG, HEAD_RINGS, 0, Math.PI * 2, 0, Math.PI * 0.6));
    const shoulders = new THREE.Mesh(shoulderGeo, torsoMat);
    shoulders.position.set(0, legH + torsoH - 0.02, 0);
    shoulders.scale.set(1.0, 0.55, depthScale + 0.1);
    castShadow(shoulders);
    group.add(shoulders);
  } else {
    // --- male torso (V-taper: broad shoulders, narrower waist) ---
    waistR = 0.072;
    const torso = new THREE.Mesh(sharedGeo('mTorso', () => new THREE.CylinderGeometry(0.108, waistR, torsoH, CYL_SEG, 1)), torsoMat);
    torso.position.set(0, legH + torsoH / 2, 0);
    torso.scale.z = depthScale;
    castShadow(torso);
    group.add(torso);
    const shoulderGeo = sharedGeo('mShoulder', () => new THREE.SphereGeometry(0.11, HEAD_SEG, HEAD_RINGS, 0, Math.PI * 2, 0, Math.PI * 0.6));
    const shoulders = new THREE.Mesh(shoulderGeo, torsoMat);
    shoulders.position.set(0, legH + torsoH - 0.02, 0);
    shoulders.scale.set(1.05, 0.6, depthScale + 0.08);
    castShadow(shoulders);
    group.add(shoulders);
  }

  // --- arms (pivot at the shoulder) ---
  const armLen = 0.22, armR = female ? 0.03 : 0.036;
  const shoulderY = legH + torsoH - 0.02;
  const shoulderX = (female ? 0.086 : torsoW / 2) + armR - 0.01;
  const leftArmJ = makeLimb(-shoulderX, shoulderY, armR, armLen, armMat);
  const rightArmJ = makeLimb(shoulderX, shoulderY, armR, armLen, armMat);
  const handGeo = sharedGeo('hand', () => new THREE.SphereGeometry(0.042, 6, 5));
  const addHand = (limb) => {
    const hand = new THREE.Mesh(handGeo, skin);
    hand.position.set(0, -armLen / 2, 0);
    limb.mesh.add(hand);
  };
  addHand(leftArmJ);
  addHand(rightArmJ);

  if (look.cape != null) {
    const capeW = torsoW * 1.95, capeWTop = capeW * 0.6, capeH = legH + torsoH * 0.28;
    const shape = new THREE.Shape();
    shape.moveTo(-capeWTop / 2, capeH / 2); shape.lineTo(capeWTop / 2, capeH / 2);
    shape.lineTo(capeW / 2, -capeH / 2); shape.lineTo(-capeW / 2, -capeH / 2); shape.closePath();
    const capeColor = darkenColor(nudgeColor(look.cape, 0.08)).getHex();
    const capeMat = bodyMat('cape', capeColor, bumpMap, { metalness: 0.15, roughness: 0.8, bumpScale: 0.12 });
    capeMat.side = THREE.DoubleSide;
    const cape = new THREE.Mesh(new THREE.ShapeGeometry(shape), capeMat);
    cape.position.set(0, legH + torsoH - capeH / 2 + 0.05, -torsoD / 2 - 0.02); cape.rotation.y = Math.PI; group.add(cape);
    const padRadius = 0.055, padY = legH + torsoH + 0.02, shoulderZ = 0.02, padX = torsoW / 2 + armW * 0.5;
    const padGeo = sharedGeo('capePad', () => new THREE.SphereGeometry(padRadius, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55));
    const leftPad = new THREE.Mesh(padGeo, capeMat);
    leftPad.position.set(-padX, padY, shoulderZ); leftPad.rotation.x = -Math.PI * 0.35; leftPad.rotation.z = Math.PI * 0.5; leftPad.scale.set(1.2, 0.85, 1.1); group.add(leftPad);
    const rightPad = new THREE.Mesh(padGeo, capeMat);
    rightPad.position.set(padX, padY, shoulderZ); rightPad.rotation.x = -Math.PI * 0.35; rightPad.rotation.z = -Math.PI * 0.5; rightPad.scale.set(1.2, 0.85, 1.1); group.add(rightPad);
  }

  if (look.belt != null) {
    const beltMat = bodyMat('belt', darkenColor(nudgeColor(look.belt, 0.08)).getHex(), bumpMap, { metalness: 0.2, roughness: 0.6, bumpScale: 0.1 });
    const beltR = waistR + 0.014;
    const belt = new THREE.Mesh(sharedGeo('belt', () => new THREE.CylinderGeometry(1, 1, 0.03, CYL_SEG)), beltMat);
    belt.scale.set(beltR, 1, beltR * (depthScale + (female ? 0.06 : 0)));
    belt.position.set(0, legH + (female ? 0.05 : 0.04), 0); group.add(belt);
  }

  if (look.apron != null) {
    const apronMat = bodyMat('apron', darkenColor(nudgeColor(look.apron, 0.08)).getHex(), bumpMap, { metalness: 0.08, roughness: 0.75, bumpScale: 0.12 });
    apronMat.side = THREE.DoubleSide;
    if (female) {
      // Female: a curved bodice/apron shell that wraps the front and arcs out over
      // the chest, so it drapes over (and hides) the bust instead of a flat panel
      // sitting behind it. Built from an open cylinder sector facing +Z.
      const apronTopY = legH + 0.235, apronBotY = legH - 0.02;
      const apronH = apronTopY - apronBotY;
      const thetaLen = Math.PI * 0.9;
      // theta 0 is +Z in CylinderGeometry, so center the sector on the front.
      const geo = sharedGeo('fApron', () => new THREE.CylinderGeometry(0.11, 0.118, 1, 16, 1, true, -thetaLen / 2, thetaLen));
      const apron = new THREE.Mesh(geo, apronMat);
      apron.scale.set(0.84, apronH, 0.7); // hug the torso width while the front clears the bust
      apron.position.set(0, (apronTopY + apronBotY) / 2, 0.008);
      group.add(apron);
      // Shoulder straps up to the neckline.
      const shoulderTopY = legH + torsoH + 0.02, strapX = 0.05, strapLen = shoulderTopY - apronTopY + 0.02;
      const strapGeo = sharedGeo('strap', () => new THREE.BoxGeometry(0.02, 1, 0.01));
      for (const sx of [-1, 1]) {
        const strap = new THREE.Mesh(strapGeo, apronMat);
        strap.scale.y = strapLen;
        strap.position.set(sx * strapX, (apronTopY + shoulderTopY) / 2, 0.062); strap.rotation.x = -0.12; group.add(strap);
      }
    } else {
      const apronW = torsoW * 0.95, apronH = legH * 0.85, apronTopY = legH + 0.2;
      const apron = new THREE.Mesh(sharedGeo('mApron', () => new THREE.PlaneGeometry(apronW, apronH)), apronMat);
      apron.position.set(0, apronTopY - apronH / 2, torsoD / 2 + 0.02); group.add(apron);
      const shoulderTopY = legH + torsoH + 0.02, strapX = torsoW / 2 + armW * 0.2, strapLen = shoulderTopY - apronTopY;
      const strapGeo = sharedGeo('mStrap', () => new THREE.BoxGeometry(0.018, 1, 0.008));
      const leftStrap = new THREE.Mesh(strapGeo, apronMat);
      leftStrap.scale.y = strapLen;
      leftStrap.position.set(-strapX, (apronTopY + shoulderTopY) / 2, torsoD / 2 + 0.015); group.add(leftStrap);
      const rightStrap = new THREE.Mesh(strapGeo, apronMat);
      rightStrap.scale.y = strapLen;
      rightStrap.position.set(strapX, (apronTopY + shoulderTopY) / 2, torsoD / 2 + 0.015); group.add(rightStrap);
    }
  }

  // --- neck + head ---
  const neck = new THREE.Mesh(sharedGeo('neck', () => new THREE.CylinderGeometry(0.032, 0.038, 0.06, 8)), skin);
  neck.position.set(0, legH + torsoH + 0.02, 0); castShadow(neck); group.add(neck);

  const headGeo = sharedGeo('head', () => new THREE.SphereGeometry(headRadius, HEAD_SEG, HEAD_RINGS));
  const head = new THREE.Mesh(headGeo, skin);
  head.position.set(0, legH + torsoH + headRadius, 0);
  head.scale.set(0.92, 1.05, 0.96); // slightly egg-shaped rather than a perfect ball
  castShadow(head); group.add(head);

  // --- face: flat, forward-facing decal features placed exactly on the head
  // surface (per-feature surfZ), for a clean anime-style look with no occlusion.
  // Female faces get bigger rounder eyes, eyeliner, soft lips and rosy cheeks.
  const r = headRadius;
  const surfZ = (x, y) => Math.sqrt(Math.max(0.0001, r * r - x * x - y * y));
  const flat = (radius, mat, seg = 12) => new THREE.Mesh(
    sharedGeo(`circle:${seg}:${radius}`, () => new THREE.CircleGeometry(radius, seg)),
    mat,
  );
  const irisPalette = female
    ? [0x5a8fd6, 0x4fb389, 0x9a6bd6, 0x46b3c9, 0xb5723f, 0x7d5adf]
    : [0x4a3526, 0x39301f, 0x2f4a38, 0x3a4a5c, 0x5a3a24];
  const irisColor = irisPalette[Math.floor(Math.random() * irisPalette.length)];
  const irisMat = sharedMat(`iris:${irisColor}`, () => new THREE.MeshBasicMaterial({ color: irisColor }));
  const browMat = bodyMat('brow', hairColorNudged.getHex(), null, { metalness: 0, roughness: 0.85, bumpScale: 0 });

  const eyeX = r * 0.36, eyeY = r * 0.12;
  const wR = r * (female ? 0.135 : 0.1);
  const eyeSX = female ? 1.02 : 1.0, eyeSY = female ? 1.35 : 0.78;
  for (const sx of [-1, 1]) {
    const eye = new THREE.Group();
    eye.position.set(sx * eyeX, eyeY, surfZ(eyeX, eyeY) + 0.002);
    head.add(eye);
    const white = flat(wR, EYE_WHITE); white.scale.set(eyeSX, eyeSY, 1); eye.add(white);
    const iris = flat(r * (female ? 0.095 : 0.07), irisMat); iris.position.set(0, -r * 0.012, 0.001); iris.scale.set(1, Math.min(1.2, eyeSY), 1); eye.add(iris);
    const pupil = flat(r * (female ? 0.05 : 0.038), PUPIL); pupil.position.set(0, -r * 0.012, 0.002); pupil.scale.set(1, Math.min(1.2, eyeSY), 1); eye.add(pupil);
    const shine = flat(r * 0.028, SHINE); shine.position.set(-sx * r * 0.03, r * 0.035, 0.003); eye.add(shine);
    if (female) { const s2 = flat(r * 0.015, SHINE); s2.position.set(sx * r * 0.025, -r * 0.03, 0.003); eye.add(s2); }
    // Upper lid / eyeliner across the top of the eye.
    const liner = new THREE.Mesh(new THREE.BoxGeometry(wR * 2 * eyeSX * 0.98, r * (female ? 0.03 : 0.022), 0.004), LINER);
    liner.position.set(0, wR * eyeSY * 0.82, 0.003); liner.rotation.z = sx * (female ? -0.03 : 0); eye.add(liner);
    // Eyebrow above.
    const browY = eyeY + r * (female ? 0.32 : 0.3);
    const brow = new THREE.Mesh(new THREE.BoxGeometry(r * 0.26, r * (female ? 0.026 : 0.05), 0.02), browMat);
    brow.position.set(sx * eyeX, browY, surfZ(eyeX, browY) + 0.002); brow.rotation.z = sx * (female ? -0.14 : -0.05); head.add(brow);
  }

  // Nose: a small soft skin bump on the surface.
  const noseY = -r * 0.05;
  const noseGeo = sharedGeo('nose', () => new THREE.SphereGeometry(0.045, 6, 5));
  const nose = new THREE.Mesh(noseGeo, skin);
  nose.position.set(0, noseY, surfZ(0, noseY)); nose.scale.set(0.85, 0.7, 0.55); head.add(nose);

  // Mouth.
  const mouthY = -r * 0.3;
  if (female) {
    const lip = flat(r * 0.08, LIP, 14);
    lip.position.set(0, mouthY, surfZ(0, mouthY) + 0.002); lip.scale.set(1.15, 0.5, 1); head.add(lip);
    for (const sx of [-1, 1]) {
      const cx = sx * r * 0.42, cy = -r * 0.1;
      const cheek = flat(r * 0.072, CHEEK, 10); cheek.position.set(cx, cy, surfZ(cx, cy) + 0.001); cheek.scale.set(1, 0.75, 1); head.add(cheek);
    }
  } else {
    const mouth = new THREE.Mesh(sharedGeo('mouthBox', () => new THREE.BoxGeometry(0.4, 0.05, 0.02)), MOUTH);
    mouth.scale.set(r, r, r);
    mouth.position.set(0, mouthY, surfZ(0, mouthY) + 0.002); head.add(mouth);
  }

  const hairMat = bodyMat('hair', hairColorNudged.getHex(), bumpMap, { metalness: 0.05, roughness: 0.85, bumpScale: 0.15 });
  const bangGeo = sharedGeo('bang', () => new THREE.ConeGeometry(0.22, 0.32, 5));
  const addBangs = (parent) => {
    const bangH = headRadius * 0.32, bangR = headRadius * 0.22;
    const leftBang = new THREE.Mesh(bangGeo, hairMat);
    leftBang.scale.set(bangR * 0.9 / 0.22, bangH / 0.32, bangR * 0.9 / 0.22);
    leftBang.position.set(-headRadius * 0.25, headRadius * 0.22, headRadius * 0.72); leftBang.rotation.x = 0.35; leftBang.rotation.z = 0.12; parent.add(leftBang);
    const rightBang = new THREE.Mesh(bangGeo, hairMat);
    rightBang.scale.set(bangR / 0.22, bangH / 0.32, bangR / 0.22);
    rightBang.position.set(headRadius * 0.28, headRadius * 0.18, headRadius * 0.68); rightBang.rotation.x = 0.28; rightBang.rotation.z = -0.1; parent.add(rightBang);
    const centerBang = new THREE.Mesh(bangGeo, hairMat);
    centerBang.scale.set(bangR * 0.7 / 0.22, bangH * 0.9 / 0.32, bangR * 0.7 / 0.22);
    centerBang.position.set(0, headRadius * 0.28, headRadius * 0.78); centerBang.rotation.x = 0.4; parent.add(centerBang);
  };
  const hairTopGeo = sharedGeo('hairTop', () => new THREE.SphereGeometry(0.92, HEAD_SEG, HEAD_RINGS, 0, Math.PI * 2, 0, Math.PI * 0.52));
  const hairLongGeo = sharedGeo('hairLong', () => new THREE.CapsuleGeometry(0.55, 1.5, CAP_SEG, RAD_SEG));
  if (gender === 'female') {
    const hairTop = new THREE.Mesh(hairTopGeo, hairMat);
    hairTop.scale.setScalar(headRadius);
    hairTop.position.set(0, headRadius * 0.28, -headRadius * 0.18); hairTop.rotation.y = 0.06; hairTop.rotation.x = -0.04; head.add(hairTop);
    const hairLong = new THREE.Mesh(hairLongGeo, hairMat);
    hairLong.scale.set(headRadius * 1.05, headRadius, headRadius * 0.5);
    hairLong.position.set(0, -headRadius * 0.6, -headRadius * 0.95); hairLong.rotation.z = 0.03; head.add(hairLong);
    addBangs(head);
  } else {
    const hairCap = new THREE.Mesh(hairTopGeo, hairMat);
    hairCap.scale.setScalar(headRadius * 0.9);
    hairCap.position.set(0, headRadius * 0.4, -headRadius * 0.12); hairCap.rotation.y = 0.08; hairCap.rotation.x = -0.05; hairCap.rotation.z = 0.04; head.add(hairCap);
    const hairSides = new THREE.Mesh(sharedGeo('hairSides', () => new THREE.SphereGeometry(0.75, 8, 6, Math.PI * 0.2, Math.PI * 0.6, 0, Math.PI * 0.4)), hairMat);
    hairSides.scale.setScalar(headRadius);
    hairSides.position.set(0, headRadius * 0.1, -headRadius * 0.05); hairSides.rotation.y = 0.1; head.add(hairSides);
    addBangs(head);
  }

  if (look.horns != null) {
    const hornsMat = bodyMat('horns', darkenColor(nudgeColor(look.horns, 0.08)).getHex(), bumpMap, { metalness: 0.12, roughness: 0.62, bumpScale: 0.1 });
    const band = new THREE.Mesh(sharedGeo('hornBand', () => new THREE.TorusGeometry(1.12, 0.22, 6, 16)), hornsMat);
    band.scale.setScalar(headRadius);
    band.rotation.x = Math.PI / 2; band.position.y = headRadius * 0.42; head.add(band);
    const hornR = headRadius * 0.48, hornH = headRadius * 2.55;
    const hornGeo = sharedGeo('horn', () => new THREE.ConeGeometry(0.48, 2.55, 6));
    const leftHorn = new THREE.Mesh(hornGeo, hornsMat);
    leftHorn.scale.set(hornR / 0.48, hornH / 2.55, hornR / 0.48);
    leftHorn.position.set(-headRadius * 1.02, headRadius * 0.18, headRadius * 0.02); leftHorn.rotation.set(-0.42, -0.32, 0.58); head.add(leftHorn);
    const rightHorn = new THREE.Mesh(hornGeo, hornsMat);
    rightHorn.scale.set(hornR / 0.48, hornH / 2.55, hornR / 0.48);
    rightHorn.position.set(headRadius * 1.02, headRadius * 0.18, headRadius * 0.02); rightHorn.rotation.set(-0.42, 0.32, -0.58); head.add(rightHorn);
  }

  // Expose joint pivots so the animation code swings whole limbs.
  group.userData.leftLeg = leftLegJ.pivot;
  group.userData.rightLeg = rightLegJ.pivot;
  group.userData.leftArm = leftArmJ.pivot;
  group.userData.rightArm = rightArmJ.pivot;
  group.userData.head = head;
  group.userData.woundedSeverity = 0;
  group.userData.damageRatio = 0;
  group.userData.poseMode = 'idle';
  return group;
}

/** Severity 0..1: slumped, guarded posture for wounded / exhausted units. */
export function setWoundedPose(mesh, severity) {
  mesh.userData.woundedSeverity = Math.max(0, Math.min(1, severity));
  applyWoundedPose(mesh);
}

export function clearWoundedPose(mesh) {
  mesh.userData.woundedSeverity = 0;
  mesh.userData.damageRatio = 0;
  applyWoundedPose(mesh);
  clearWoundedTint(mesh);
}

function effectiveSlump(mesh) {
  const u = mesh.userData;
  return Math.max(u.woundedSeverity || 0, (u.damageRatio || 0) * 0.25);
}

export function woundedSinkOffset(mesh) {
  return effectiveSlump(mesh) * 0.07;
}

/** Reapply the damaged posture; optional idlePhase (radians) adds labored breathing. */
export function refreshDamagedPose(mesh, idlePhase = 0) {
  applyWoundedPose(mesh, idlePhase);
}

function applyWoundedPose(mesh, idlePhase = 0) {
  const u = mesh.userData;
  const s = effectiveSlump(mesh);
  const baseY = u.baseY ?? mesh.position.y;
  const d = u.damageRatio || 0;

  if (s <= 0 && d <= 0) {
    mesh.rotation.x = 0;
    mesh.rotation.z = 0;
    mesh.scale.setScalar(1);
    mesh.position.y = baseY;
    if (u.head) u.head.rotation.set(0, 0, 0);
    if (u.leftArm) u.leftArm.rotation.set(0, 0, 0);
    if (u.rightArm) u.rightArm.rotation.set(0, 0, 0);
    if (u.leftLeg) u.leftLeg.rotation.set(0, 0, 0);
    if (u.rightLeg) u.rightLeg.rotation.set(0, 0, 0);
    return;
  }

  // Hunched forward, weight sinking, slight favor to one side.
  mesh.rotation.x = s * 0.24;
  mesh.rotation.z = s * 0.05;
  mesh.scale.setScalar(1 - s * 0.045);
  mesh.position.y = baseY - s * 0.07;

  if (u.head) {
    u.head.rotation.x = s * 0.28;
    u.head.rotation.z = -s * 0.06;
  }

  // Left arm hangs exhausted; right arm clutches the torso.
  if (u.leftArm) {
    u.leftArm.rotation.x = s * 0.48;
    u.leftArm.rotation.z = s * 0.14;
    u.leftArm.rotation.y = s * 0.1;
  }
  if (u.rightArm) {
    u.rightArm.rotation.x = s * 0.62;
    u.rightArm.rotation.y = -s * 0.38;
    u.rightArm.rotation.z = -s * 0.08;
  }

  // Knees buckle — legs staggered like struggling to stay upright.
  if (u.leftLeg) {
    u.leftLeg.rotation.x = -s * 0.16;
    u.leftLeg.rotation.z = s * 0.05;
  }
  if (u.rightLeg) {
    u.rightLeg.rotation.x = -s * 0.11;
    u.rightLeg.rotation.z = -s * 0.04;
  }

  // Labored breathing and weight shifts on any injured unit.
  if (idlePhase && d > 0) {
    const breathe = Math.sin(idlePhase) * 0.024 * d;
    const sway = Math.sin(idlePhase * 0.71 + 1.2) * 0.016 * d;
    mesh.rotation.x += breathe;
    mesh.rotation.z += sway;
    mesh.position.y -= Math.max(0, Math.sin(idlePhase * 0.88)) * 0.014 * Math.max(s, d * 0.5);
    if (u.head) u.head.rotation.x += Math.sin(idlePhase * 1.12) * 0.038 * d;
    if (u.rightArm && s > 0.15) u.rightArm.rotation.y += Math.sin(idlePhase * 1.35) * 0.045 * s;
    if (u.leftLeg && s > 0.25) u.leftLeg.rotation.x += Math.sin(idlePhase * 0.85) * 0.028 * s;
  }
}

/** Hit reaction layered on the current damaged pose. t: 0..1, intensity scales with hit size. */
export function setDamageFlinchPose(mesh, t, intensity = 0.5) {
  applyWoundedPose(mesh);
  const peak = Math.sin(t * Math.PI);
  const a = intensity * peak;
  const side = mesh.userData.flinchSide || 1;
  const u = mesh.userData;
  mesh.rotation.x -= a * 0.42;
  mesh.rotation.z += side * a * 0.2;
  mesh.position.y -= a * 0.065;
  if (u.head) {
    u.head.rotation.x += a * 0.58;
    u.head.rotation.z -= side * a * 0.16;
  }
  if (u.leftArm) {
    u.leftArm.rotation.x += a * 0.28;
    u.leftArm.rotation.z += side * a * 0.38;
  }
  if (u.rightArm) {
    u.rightArm.rotation.x -= a * 0.18;
    u.rightArm.rotation.z -= side * a * 0.22;
  }
  if (u.leftLeg) u.leftLeg.rotation.x += a * 0.14;
  if (u.rightLeg) u.rightLeg.rotation.x -= a * 0.1;
}

export function applyWoundedTint(mesh, severity) {
  const s = Math.max(0, Math.min(1, severity));
  const dim = 1 - s * 0.2;
  mesh.traverse((child) => {
    if (!child.isMesh || !child.material?.color) return;
    if (!child.userData.originalColor) child.userData.originalColor = child.material.color.clone();
    const o = child.userData.originalColor;
    child.material.color.setRGB(
      Math.min(1, o.r * dim + s * 0.05),
      o.g * dim * (1 - s * 0.1),
      o.b * dim * (1 - s * 0.12),
    );
  });
}

export function clearWoundedTint(mesh) {
  mesh.traverse((child) => {
    if (child.isMesh && child.material?.color && child.userData.originalColor) {
      child.material.color.copy(child.userData.originalColor);
    }
  });
}

export function syncWoundedBaseY(mesh) {
  const slump = effectiveSlump(mesh);
  mesh.userData.baseY = slump > 0 ? mesh.position.y + woundedSinkOffset(mesh) : mesh.position.y;
  if (slump > 0) applyWoundedPose(mesh);
}

export function setWalkPose(mesh, t) {
  const u = mesh.userData;
  if (!u.leftLeg) return 0;
  const s = u.woundedSeverity || 0;
  const d = u.damageRatio || 0;
  const slump = Math.max(s, d * 0.25);
  const amp = 1 - slump * 0.55;

  // Two stride cycles per tile — a short tactical jog rather than a stroll.
  const phase = t * Math.PI * 4;
  const stride = Math.sin(phase);

  const leftBase = slump ? -slump * 0.16 : 0;
  const rightBase = slump ? -slump * 0.11 : 0;
  const legSwing = stride * 0.64 * amp;
  // Extra knee lift on the leading leg each step.
  u.leftLeg.rotation.x = leftBase + legSwing - Math.max(0, -stride) * 0.26 * amp;
  u.rightLeg.rotation.x = rightBase - legSwing - Math.max(0, stride) * 0.26 * amp;
  if (slump > 0) {
    u.leftLeg.rotation.z = slump * 0.05;
    u.rightLeg.rotation.z = -slump * 0.04;
  } else {
    u.leftLeg.rotation.z = stride * 0.04 * amp;
    u.rightLeg.rotation.z = -stride * 0.04 * amp;
  }

  const armPump = Math.sin(phase + Math.PI) * 0.62 * amp;
  const rightPump = Math.sin(phase) * 0.62 * amp;
  if (u.leftArm) {
    u.leftArm.rotation.x = slump * 0.48 + armPump;
    u.leftArm.rotation.y = slump * 0.1 - armPump * 0.08;
    u.leftArm.rotation.z = slump * 0.14 + armPump * 0.06;
  }
  if (u.rightArm) {
    u.rightArm.rotation.x = slump * 0.62 + rightPump;
    u.rightArm.rotation.y = -slump * 0.38 + rightPump * 0.08;
    u.rightArm.rotation.z = -slump * 0.08 - rightPump * 0.06;
  }

  // Lean into the run with a subtle side-to-side balance shift.
  const jogLean = 0.15 * amp;
  mesh.rotation.x = slump * 0.24 + jogLean;
  mesh.rotation.z = slump * 0.05 + Math.sin(phase) * 0.028 * amp;

  if (u.head) {
    u.head.rotation.x = slump * 0.28 + jogLean * 0.4;
    u.head.rotation.z = slump * -0.06;
  }

  // Vertical bob — peaks twice per tile as each foot lands.
  return Math.abs(Math.sin(phase)) * 0.045 * amp;
}

export function resetWalkPose(mesh) {
  const u = mesh.userData;
  if (!u.leftLeg) return;
  if ((u.woundedSeverity || 0) > 0) {
    applyWoundedPose(mesh);
    return;
  }
  u.leftLeg.rotation.set(0, 0, 0);
  u.rightLeg.rotation.set(0, 0, 0);
  u.leftArm.rotation.set(0, 0, 0);
  u.rightArm.rotation.set(0, 0, 0);
  mesh.rotation.x = 0;
  mesh.rotation.z = 0;
  if (u.head) u.head.rotation.set(0, 0, 0);
}

/** 0..1 lunge envelope — peaks at the strike frame, eases out on recovery. */
export function meleeLungeFactor(t) {
  if (t <= 0.22) return (t / 0.22) * 0.12;
  if (t <= 0.42) {
    const u = (t - 0.22) / 0.2;
    return 0.12 + u * u * (3 - 2 * u) * 0.88;
  }
  const u = (t - 0.42) / 0.58;
  return 1 - u * u;
}

/** Procedural melee pose: wind-up → strike → follow-through. style: 'slash' | 'thrust'. */
export function setMeleeAttackPose(mesh, t, { style = 'slash' } = {}) {
  const u = mesh.userData;
  if (!u.leftArm) return;
  const s = u.woundedSeverity || 0;
  const amp = 1 - s * 0.45;

  let wind = 0;
  let strike = 0;
  if (t <= 0.22) {
    wind = t / 0.22;
  } else if (t <= 0.42) {
    wind = 1;
    strike = (t - 0.22) / 0.2;
    strike = strike * strike * (3 - 2 * strike);
  } else {
    const recover = (t - 0.42) / 0.58;
    const ease = 1 - recover * recover;
    wind = ease;
    strike = ease;
  }

  const wBase = s * 0.62;
  const wLeftArm = s * 0.48;
  const wLeftLeg = s ? -s * 0.16 : 0;
  const wRightLeg = s ? -s * 0.11 : 0;
  const wHead = s * 0.28;
  const wTorsoX = s * 0.24;
  const wTorsoZ = s * 0.05;

  if (style === 'thrust') {
    const extend = wind * 0.25 + strike * 0.95;
    const armX = extend * 1.05 * amp;
    if (u.rightArm) {
      u.rightArm.rotation.x = wBase + armX;
      u.rightArm.rotation.y = (s > 0 ? -s * 0.38 : 0) - wind * 0.12 * amp;
      u.rightArm.rotation.z = -wind * 0.08 * amp;
    }
    if (u.leftArm) {
      u.leftArm.rotation.x = wLeftArm + armX * 0.82;
      u.leftArm.rotation.y = (s > 0 ? s * 0.1 : 0) + wind * 0.08 * amp;
    }
    mesh.rotation.x = wTorsoX + (strike * 0.18 - wind * 0.06) * amp;
    mesh.rotation.z = wTorsoZ;
    if (u.leftLeg) u.leftLeg.rotation.x = wLeftLeg - strike * 0.22 * amp;
    if (u.rightLeg) u.rightLeg.rotation.x = wRightLeg + strike * 0.28 * amp;
    if (u.head) u.head.rotation.x = wHead - strike * 0.1 * amp;
    return;
  }

  // Slash: wind the weapon arm back, then swing through with torso twist.
  const armWind = wind * -1.15 * amp;
  const armStrike = strike * 1.65 * amp;
  if (u.rightArm) {
    u.rightArm.rotation.x = wBase + armWind + armStrike;
    u.rightArm.rotation.y = (s > 0 ? -s * 0.38 : 0) - wind * 0.42 * amp + strike * 0.2 * amp;
    u.rightArm.rotation.z = -wind * 0.32 * amp + strike * 0.12 * amp;
  }
  if (u.leftArm) {
    u.leftArm.rotation.x = wLeftArm + wind * 0.42 * amp - strike * 0.12 * amp;
    u.leftArm.rotation.y = (s > 0 ? s * 0.1 : 0) + wind * 0.22 * amp;
    u.leftArm.rotation.z = (s > 0 ? s * 0.14 : 0) + wind * 0.06 * amp;
  }
  mesh.rotation.x = wTorsoX + (-wind * 0.1 + strike * 0.16) * amp;
  mesh.rotation.z = wTorsoZ + (wind * 0.08 - strike * 0.05) * amp;
  if (u.leftLeg) u.leftLeg.rotation.x = wLeftLeg + wind * 0.14 * amp - strike * 0.2 * amp;
  if (u.rightLeg) u.rightLeg.rotation.x = wRightLeg - wind * 0.1 * amp + strike * 0.24 * amp;
  if (u.head) u.head.rotation.x = wHead + wind * 0.1 * amp - strike * 0.06 * amp;
}

export function resetAttackPose(mesh) {
  const u = mesh.userData;
  if (!u.leftArm) return;
  if ((u.woundedSeverity || 0) > 0) {
    applyWoundedPose(mesh);
    return;
  }
  u.leftArm.rotation.set(0, 0, 0);
  u.rightArm.rotation.set(0, 0, 0);
  u.leftLeg.rotation.set(0, 0, 0);
  u.rightLeg.rotation.set(0, 0, 0);
  if (u.head) u.head.rotation.set(0, 0, 0);
  mesh.rotation.x = 0;
  mesh.rotation.z = 0;
}

const deathSmooth = (x) => x * x * (3 - 2 * x);

/** Fatal collapse: stagger → buckle → fall to the ground. */
export function setDeathPose(mesh, t) {
  const u = mesh.userData;
  if (!u.leftLeg) return;
  const side = u.deathFallSide || 1;
  const baseY = u.deathBaseY ?? u.baseY ?? mesh.position.y;

  const staggerT = deathSmooth(Math.min(1, t / 0.14));
  const collapseT = deathSmooth(Math.min(1, Math.max(0, (t - 0.1) / 0.42)));
  const fallT = deathSmooth(Math.min(1, Math.max(0, (t - 0.45) / 0.55)));
  const staggerFade = 1 - Math.min(1, collapseT * 1.5);

  mesh.rotation.x =
    staggerT * staggerFade * -0.3 +
    collapseT * 0.65 +
    fallT * 0.1;
  mesh.rotation.z = side * (
    staggerT * staggerFade * 0.26 +
    collapseT * 0.14 +
    fallT * Math.PI * 0.47
  );

  const sink = collapseT * 0.2 + fallT * 0.34;
  mesh.position.y = baseY - sink;
  mesh.scale.setScalar(1 - fallT * 0.07);

  const legBuckle = collapseT * 0.62 + fallT * 0.38;
  u.leftLeg.rotation.x = -legBuckle + side * fallT * 0.18;
  u.leftLeg.rotation.z = side * (collapseT * 0.12 + fallT * 0.05);
  u.rightLeg.rotation.x = -legBuckle * 0.92 - side * fallT * 0.12;
  u.rightLeg.rotation.z = -side * (collapseT * 0.1 + fallT * 0.04);

  u.leftArm.rotation.x = collapseT * 0.95 + fallT * 0.55;
  u.leftArm.rotation.z = side * (collapseT * 0.58 + fallT * 1.05);
  u.leftArm.rotation.y = collapseT * 0.28;
  u.rightArm.rotation.x = collapseT * 0.78 + fallT * 0.68;
  u.rightArm.rotation.z = -side * (collapseT * 0.42 + fallT * 0.88);
  u.rightArm.rotation.y = -collapseT * 0.2;

  if (u.head) {
    u.head.rotation.x = staggerT * staggerFade * 0.45 + collapseT * 0.55 + fallT * 0.22;
    u.head.rotation.z = -side * (collapseT * 0.08 + fallT * 0.28);
  }
}

/** Desaturate and dim the figure as life fades. */
export function applyDeathTint(mesh, t) {
  const fade = Math.max(0, Math.min(1, t));
  const dim = 1 - fade * 0.38;
  mesh.traverse((child) => {
    if (!child.isMesh || !child.material?.color) return;
    if (!child.userData.originalColor) child.userData.originalColor = child.material.color.clone();
    const o = child.userData.originalColor;
    child.material.color.setRGB(
      o.r * dim,
      o.g * dim * (1 - fade * 0.18),
      o.b * dim * (1 - fade * 0.24),
    );
  });
}
