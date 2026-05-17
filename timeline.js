/* =========================================================================
   Genech ES — Premium Teaser Timeline Engine
   Time-driven overlay engine reading video.currentTime every frame.
   ========================================================================= */

(() => {
  'use strict';

  // ----- DOM refs -----
  const video       = document.getElementById('video');
  const frame       = document.getElementById('frame');
  const stage       = document.getElementById('stage');
  const colorTint   = document.getElementById('colorTint');
  const lensFlare   = document.getElementById('lensFlare');
  const lightLeak   = document.getElementById('lightLeak');
  const dust        = document.getElementById('dust');
  const fog         = document.getElementById('fog');
  const chromaGl    = document.getElementById('chromaGlitch');
  const grain       = document.getElementById('grain');
  const vignette    = document.getElementById('vignette');
  const flash       = document.getElementById('flash');
  const blackFade   = document.getElementById('blackFade');
  // --- New overlay refs ---
  const letterTop   = document.getElementById('letterTop');
  const letterBot   = document.getElementById('letterBot');
  const hudCorners  = document.getElementById('hudCorners');
  const hudTC       = document.getElementById('hudTC');
  const hudVF       = document.getElementById('hudVF');
  const hudTime     = document.getElementById('hudTime');
  const phaseLabel  = document.getElementById('phaseLabel');
  const phaseLabelText = document.getElementById('phaseLabelText');
  const reticle     = document.getElementById('reticle');
  const ballTracer  = document.getElementById('ballTracer');
  const tracerPath  = document.getElementById('tracerPath');
  const tracerBall  = document.getElementById('tracerBall');
  const speedLines  = document.getElementById('speedLines');
  const swipe       = document.getElementById('swipe');
  const innerFrame  = document.getElementById('innerFrame');
  const glitchSlice = document.getElementById('glitchSlice');
  const irisOverlay = document.getElementById('irisOverlay');
  const barsOverlay = document.getElementById('barsOverlay');
  const shapeJersey = document.getElementById('shapeJersey');
  const shapeJerseyPath = document.getElementById('shapeJerseyPath');
  const shapeCross  = document.getElementById('shapeCross');
  const shapeCrossPath  = document.getElementById('shapeCrossPath');
  const shapeTrophy = document.getElementById('shapeTrophy');
  const shapeTrophyPath = document.getElementById('shapeTrophyPath');
  const goalTrace1     = document.getElementById('goalTrace1');
  const goalTrace1Path = document.getElementById('goalTrace1Path');
  const goalTrace1Ring = document.getElementById('goalTrace1Ring');
  const goalTrace1Dot  = document.getElementById('goalTrace1Dot');
  const goalTrace1Target = document.getElementById('goalTrace1Target');
  const reveal      = document.getElementById('reveal');
  const revealBg    = document.getElementById('revealBgGlow');
  const revealFog   = document.getElementById('revealFog');
  const revealParts = document.getElementById('revealParticles');
  const ringOuter   = document.getElementById('ringOuter');
  const ringInner   = document.getElementById('ringInner');
  const logoGhost   = document.getElementById('logoGhost');
  const logoFull    = document.getElementById('logoFull');
  const lightSweep  = document.getElementById('lightSweep');
  const flashRing   = document.getElementById('flashRing');
  const burst       = document.getElementById('burst');
  const smokeBack   = document.getElementById('smokeBack');
  const smokeMid    = document.getElementById('smokeMid');
  const smokeFront  = document.getElementById('smokeFront');
  const finalGenech = document.getElementById('finalGenech');
  const finalES     = document.getElementById('finalES');
  const final1971   = document.getElementById('final1971');
  const finalFade   = document.getElementById('finalFade');

  // Fresh reveal refs (15s reveal replacing outro card + pitch reveal)
  const freshReveal   = document.getElementById('freshReveal');
  const frParticlesEl = document.getElementById('frParticles');
  const frArcWhiteEl  = document.getElementById('frArcWhite');
  const frArcGoldEl   = document.getElementById('frArcGold');
  const frLogoGhostEl = document.getElementById('frLogoGhost');
  const frLogoEl      = document.getElementById('frLogo');
  const frRingEl      = document.getElementById('frRing');
  const frBurstEl     = document.getElementById('frBurst');
  const frFlashEl     = document.getElementById('frFlash');
  const outroCard   = document.getElementById('outroCard');
  const outroLine1  = document.getElementById('outroLine1');
  const outroLine2  = document.getElementById('outroLine2');
  const outroUnderline = document.getElementById('outroUnderline');
  const outroWords1 = outroLine1.querySelectorAll('.ol-word');
  const outroDots   = outroLine1.querySelector('.ol-dots');
  const outroWords2 = outroLine2.querySelectorAll('.ol-word');
  const outroHalo   = document.getElementById('outroHalo');
  const outroEmbers = document.getElementById('outroEmbers');
  const outroStreak = document.getElementById('outroStreak');

  // --- Void reveal (12s, V2) refs ---
  const pitchReveal     = document.getElementById('pitchReveal');
  const vrStars         = document.getElementById('vrStars');
  const vrBeam1         = document.getElementById('vrBeam1');
  const vrBeam2         = document.getElementById('vrBeam2');
  const vrBeam3         = document.getElementById('vrBeam3');
  const prSmokeBack     = document.getElementById('prSmokeBack');
  const prSmokeMid      = document.getElementById('prSmokeMid');
  const prSmokeFront    = document.getElementById('prSmokeFront');
  const vrReflection    = document.getElementById('vrReflection');
  const vrHorizon       = document.getElementById('vrHorizon');
  const prLogoWrap      = document.getElementById('prLogoWrap');
  const prLogo          = null; // replaced by layered parts
  const prLogoGlow      = document.getElementById('prLogoGlow');
  const prRing          = document.getElementById('prRing');
  // Logo parts (revealed in crescendo)
  const lpHermits       = document.getElementById('lpHermits');
  const lpShield        = document.getElementById('lpShield');
  const lpCross         = document.getElementById('lpCross');
  const lpOuter         = document.getElementById('lpOuter');
  const lpText          = document.getElementById('lpText');
  const prParticles     = document.getElementById('prParticles');
  const prText          = document.getElementById('prText');
  const prOpener        = document.getElementById('prOpener');

  // Build slow rising gold embers inside the outro card
  (function buildEmbers() {
    if (!outroEmbers) return;
    const COUNT = 30;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('span');
      const x = Math.random() * 100;
      const dur = 8 + Math.random() * 10;
      const delay = -Math.random() * dur;
      const size = 1.5 + Math.random() * 2.5;
      const dx = (Math.random() - 0.5) * 60;
      s.style.cssText = `position:absolute;left:${x}%;bottom:-20px;width:${size}px;height:${size}px;border-radius:50%;background:#F5C518;box-shadow:0 0 8px #F5C518, 0 0 16px rgba(245,197,24,0.5);opacity:0;animation:emberRise ${dur}s linear ${delay}s infinite;--ex:${dx}px;`;
      outroEmbers.appendChild(s);
    }
    if (!document.getElementById('emberKeyframes')) {
      const style = document.createElement('style');
      style.id = 'emberKeyframes';
      style.textContent = `@keyframes emberRise {
        0%   { transform: translate(0, 0) scale(0.6); opacity: 0; }
        10%  { opacity: 0.85; }
        90%  { opacity: 0.7; }
        100% { transform: translate(var(--ex, 0), -110vh) scale(1.1); opacity: 0; }
      }`;
      document.head.appendChild(style);
    }
  })();

  // ----- Controls -----
  const playPause   = document.getElementById('playPause');
  const seek        = document.getElementById('seek');
  const tcLabel     = document.getElementById('timecode');
  const phaseJump   = document.getElementById('phaseJump');
  const controls    = document.getElementById('controls');
  const muteBtn     = document.getElementById('muteBtn');
  const hideUI      = document.getElementById('hideUI');

  // ----- Constants -----
  const DURATION = 77;          // total master timeline (seconds) — includes 2s freeze hold
  const VIDEO_DURATION_FALLBACK = 73;
  const FPS = 24;
  const F = 1 / FPS;            // 1 frame duration

  // Phase boundaries (seconds)
  const P1_START = 0,    P1_END = 10;
  const P2_START = 10,   P2_END = 23;
  const P3_START = 23,   P3_END = 39;
  const P4_START = 39,   P4_END = 57.5;   // extended resolution
  const P5_START = 57.5, P5_END = 72.5;   // smoke reveal (15s)
  const P6_START = 72.5, P6_END = 73;     // final fade

  // Reveal sub-sequences (legacy, kept for any references)
  const SA_START = 57.5,    SA_END = 60;
  const SB_START = 60,      SB_END = 65;
  const SC_START = 65,      SC_END = 72.5;

  // Smoke reveal milestones (relative to P5_START)
  const SMK_BILLOW_IN  = 0;     // 0  → 2.0s : smoke billows in
  const SMK_PEAK_END   = 6.0;   // 2.0 → 6.0s : peak density, churn
  const SMK_PARTING    = 6.0;   // 6.0 → 11s  : smoke parts to reveal logo
  const SMK_LOGO_FULL  = 10.5;  // logo fully clear by 10.5s
  const SMK_TEXT_IN    = 11.0;  // texts start appearing
  const SMK_FREEZE     = 13.0;  // freeze + drift zoom
  const SMK_END        = 15.0;

  // Key impact moments
  const T_FIRST_IMPACT = 18.0;
  const T_BREATH1_START = 18.4;
  const T_BREATH1_END   = 22.8;
  const T_CLIMAX_A      = 37.8;
  const T_CLIMAX_B      = 38.26;
  const T_BREATH2_START = 38.6;
  const T_BREATH2_END   = 42.5;
  const T_P4_FADE       = 56.5;
  const T_P4_FADE_END   = 57.5;

  // ----- Intro freeze (extend first plan by FREEZE_DUR seconds) -----
  const FREEZE_VT  = 2.5;   // video time at which we freeze the frame
  const FREEZE_DUR = 2.0;   // hold duration
  function videoTimeFromMaster(mT) {
    if (mT < FREEZE_VT) return mT;
    if (mT < FREEZE_VT + FREEZE_DUR) return FREEZE_VT;
    return mT - FREEZE_DUR;
  }
  function masterTimeFromVideo(vT) {
    if (vT < FREEZE_VT) return vT;
    return vT + FREEZE_DUR;
  }

  // ----- Helpers (clamp / lerp / eases) -----
  const clamp  = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp   = (a, b, t) => a + (b - a) * t;
  const norm   = (t, a, b) => clamp((t - a) / Math.max(1e-6, b - a), 0, 1);
  const easeOut    = t => 1 - Math.pow(1 - t, 3);
  const easeIn     = t => t * t * t;
  const easeInOut  = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
  const easeOutBack= t => { const c1=1.70158, c3=c1+1; return 1 + c3*Math.pow(t-1,3) + c1*Math.pow(t-1,2); };
  const pulse = (t, peak, width) => Math.max(0, 1 - Math.abs(t - peak) / width);

  function formatTC(t) {
    t = Math.max(0, t);
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // ----- Build smoke clouds (3 layers) — STAGE / SHOW SMOKE from screen center -----
  (function buildSmoke() {
    function fill(layer, count, opts) {
      for (let i = 0; i < count; i++) {
        const c = document.createElement('div');
        c.className = 'smoke-cloud';
        if (opts.goldChance && Math.random() < opts.goldChance) {
          c.classList.add('tinted-gold');
        }
        const size = opts.minSize + Math.random() * opts.sizeRange;
        c.style.width  = size + 'px';
        c.style.height = size + 'px';
        c.style.left   = '50%';
        c.style.top    = '50%';
        c.style.marginLeft = -size/2 + 'px';
        c.style.marginTop  = -size/2 + 'px';
        const angle = Math.random() * Math.PI * 2;
        const upBias = -0.25;
        const vx = Math.cos(angle) * opts.driftRange;
        const vy = Math.sin(angle) * opts.driftRange + upBias * opts.driftRange;
        c.dataset.vx = vx.toFixed(2);
        c.dataset.vy = vy.toFixed(2);
        c.dataset.speed  = (0.7 + Math.random() * 0.6).toFixed(3);
        c.dataset.phase  = (Math.random() * Math.PI * 2).toFixed(3);
        c.dataset.delay  = (Math.random() * opts.delay).toFixed(3);
        c.dataset.life   = (opts.lifeBase + Math.random() * opts.lifeRange).toFixed(2);
        c.dataset.swirl  = (Math.random() * 2 - 1).toFixed(3);
        layer.appendChild(c);
      }
    }
    fill(smokeBack,  14, { minSize: 580, sizeRange: 320,
                           driftRange: 280, delay: 0.6,
                           lifeBase: 4.0, lifeRange: 1.5,
                           goldChance: 0 });
    fill(smokeMid,   16, { minSize: 460, sizeRange: 280,
                           driftRange: 380, delay: 0.5,
                           lifeBase: 3.5, lifeRange: 1.5,
                           goldChance: 0.15 });
    fill(smokeFront, 18, { minSize: 380, sizeRange: 220,
                           driftRange: 500, delay: 0.4,
                           lifeBase: 3.0, lifeRange: 1.5,
                           goldChance: 0.35 });
  })();

  // ----- Build void reveal smoke + particles + stars -----
  (function buildVoidReveal() {
    function makeCloud(layer, opts) {
      const c = document.createElement('div');
      c.className = 'pr-cloud';
      const size = opts.minSize + Math.random() * opts.sizeRange;
      // Centrally concentrated horizontal distribution (40-60% with 25% spread)
      const baseX = 50 + (Math.random() - 0.5) * opts.horizSpread;
      c.style.width  = size + 'px';
      c.style.height = size + 'px';
      c.style.left   = baseX + '%';
      c.style.bottom = '-220px';
      c.style.marginLeft = -size/2 + 'px';
      c.dataset.swayAmp  = (15 + Math.random() * 25).toFixed(1);
      c.dataset.swayFreq = (0.3 + Math.random() * 0.4).toFixed(3);
      c.dataset.phase    = (Math.random() * Math.PI * 2).toFixed(3);
      c.dataset.rise     = (opts.riseBase + Math.random() * opts.riseRange).toFixed(0);
      c.dataset.delay    = (Math.random() * opts.delay).toFixed(3);
      c.dataset.yOffset  = (Math.random() * opts.yOffsetRange).toFixed(0);
      layer.appendChild(c);
    }
    // Smoke rising — centrally concentrated
    for (let i = 0; i < 14; i++) makeCloud(prSmokeBack,  { minSize: 480, sizeRange: 220, riseBase: 950,  riseRange: 200, delay: 0.6, yOffsetRange: 60,  horizSpread: 60 });
    for (let i = 0; i < 16; i++) makeCloud(prSmokeMid,   { minSize: 380, sizeRange: 200, riseBase: 1050, riseRange: 200, delay: 0.5, yOffsetRange: 100, horizSpread: 70 });
    for (let i = 0; i < 18; i++) makeCloud(prSmokeFront, { minSize: 300, sizeRange: 160, riseBase: 1150, riseRange: 200, delay: 0.4, yOffsetRange: 140, horizSpread: 80 });

    // Gold particles orbiting logo
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('span');
      const ang = (Math.random() * Math.PI * 2);
      const r   = 200 + Math.random() * 240;
      const speed = (0.3 + Math.random() * 0.5) * (Math.random() < 0.5 ? 1 : -1);
      p.dataset.ang   = ang.toFixed(3);
      p.dataset.r     = r.toFixed(0);
      p.dataset.speed = speed.toFixed(3);
      p.dataset.life  = (Math.random()).toFixed(3);
      prParticles.appendChild(p);
    }

    // Star field — ~80 stars, varied size + brightness + twinkle phase
    for (let i = 0; i < 80; i++) {
      const s = document.createElement('span');
      const size = 1.5 + Math.random() * 2.5;
      // Constrain to interior (no stars in the corners)
      s.style.left   = (6 + Math.random() * 88) + '%';
      s.style.top    = (6 + Math.random() * 88) + '%';
      s.style.width  = size + 'px';
      s.style.height = size + 'px';
      s.dataset.baseOp = (0.25 + Math.random() * 0.55).toFixed(3);
      s.dataset.twink  = (0.5 + Math.random() * 2).toFixed(3); // twinkle freq
      s.dataset.phase  = (Math.random() * Math.PI * 2).toFixed(3);
      vrStars.appendChild(s);
    }
  })();
  const prParticleNodes = Array.from(prParticles.children);
  const prCloudsBack  = Array.from(prSmokeBack.children);
  const prCloudsMid   = Array.from(prSmokeMid.children);
  const prCloudsFront = Array.from(prSmokeFront.children);
  const vrStarNodes   = Array.from(vrStars.children);
  (function buildDust() {
    const COUNT = 24;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('span');
      const x = Math.random() * 100;
      const dur = 12 + Math.random() * 14;
      const delay = -Math.random() * dur;
      const size = 1 + Math.random() * 2.5;
      s.style.left = x + '%';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.animationDuration = dur + 's';
      s.style.animationDelay = delay + 's';
      s.style.opacity = 0.4 + Math.random() * 0.4;
      dust.appendChild(s);
    }
  })();

  // ----- Build reveal gold particles (~35) -----
  (function buildRevealParts() {
    const COUNT = 35;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('span');
      const x = Math.random() * 100;
      const dur = 6 + Math.random() * 8;
      const delay = -Math.random() * dur;
      const size = 1.5 + Math.random() * 3;
      const dx = (Math.random() - 0.5) * 80;
      s.style.left = x + '%';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.setProperty('--dx', dx + 'px');
      s.style.animationDuration = dur + 's';
      s.style.animationDelay = delay + 's';
      revealParts.appendChild(s);
    }
  })();

  // ----- Build burst particles (40 spans, radial) -----
  (function buildBurst() {
    const COUNT = 40;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('span');
      const angle = (i / COUNT) * 360 + Math.random() * 6;
      const dist  = 220 + Math.random() * 220;
      s.dataset.angle = angle;
      s.dataset.dist  = dist;
      s.style.transform = `rotate(${angle}deg) translate(0px, 0px)`;
      burst.appendChild(s);
    }
  })();
  const burstNodes = Array.from(burst.children);

  // =========================================================================
  // FRESH REVEAL — build particles + burst, define helpers
  // =========================================================================
  const FRESH_START    = 62.5;
  const FRESH_END      = 72.5;
  const FRSHOT_FRAMES  = 152;
  const FRSHOT         = 2.80;             // seconds per shot (10s reveal total)
  const FRTOTAL        = 10.0;
  const FRPHASE5_END   = 3 * FRSHOT;       // 8.40
  const FRC1           = 2 * Math.PI * 430;
  const FRC2           = 2 * Math.PI * 360;
  const FRLOGO_SIZE    = 760;
  const frf = (n) => (n / FRSHOT_FRAMES) * FRSHOT;

  // easeInQuad (timeline.js already has easeIn/easeOut/easeInOut = cubic)
  const easeInQuad = (t) => t * t;

  let frParticleData = [];
  let frBurstData    = [];
  (function buildFreshReveal() {
    function rng(seed) {
      let s = seed >>> 0;
      return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff; };
    }
    // 40 ambient gold particles
    const r = rng(71);
    for (let i = 0; i < 40; i++) {
      const p = {
        bx: 80 + r() * 920,
        by: 200 + r() * 1500,
        size: 1 + r() * 2.3,
        speed: 0.6 + r() * 1.4,
        phase: r() * Math.PI * 2,
        drift: r() * 60 - 30,
        angVel: 0.15 + r() * 0.35,
        orbR: 240 + r() * 280,
      };
      const span = document.createElement('span');
      span.style.width  = p.size + 'px';
      span.style.height = p.size + 'px';
      span.style.boxShadow = `0 0 ${4 + p.size * 2}px #F5C518`;
      frParticlesEl.appendChild(span);
      p.node = span;
      frParticleData.push(p);
    }
    // 50 burst particles
    const r2 = rng(91);
    for (let i = 0; i < 50; i++) {
      const b = {
        ang: r2() * Math.PI * 2,
        v:   380 + r2() * 520,
        size: 2 + r2() * 3,
        delay: r2() * 0.05,
      };
      const span = document.createElement('span');
      span.style.width  = b.size + 'px';
      span.style.height = b.size + 'px';
      span.style.marginLeft = (-b.size / 2) + 'px';
      span.style.marginTop  = (-b.size / 2) + 'px';
      span.style.boxShadow  = `0 0 ${6 + b.size * 3}px #F5C518`;
      frBurstEl.appendChild(span);
      b.node = span;
      frBurstData.push(b);
    }
  })();

  function frUpdateParticles(localT, orbit, conv, alphaScale) {
    for (const p of frParticleData) {
      let x = p.bx + Math.sin(localT * p.speed + p.phase) * 28 + p.drift;
      let y = p.by - localT * 22 * p.speed;
      while (y < -20) y += 1960;
      if (orbit > 0) {
        const ang = p.phase + localT * p.angVel;
        const rR  = p.orbR * (1 - conv * 0.7);
        const ox  = 540 + Math.cos(ang) * rR;
        const oy  = 960 + Math.sin(ang) * rR * 0.85;
        x = x * (1 - orbit) + ox * orbit;
        y = y * (1 - orbit) + oy * orbit;
      }
      const a = alphaScale * (0.6 + 0.4 * Math.sin(localT * 1.7 + p.phase));
      p.node.style.transform = `translate(${(x - p.size / 2).toFixed(1)}px, ${(y - p.size / 2).toFixed(1)}px)`;
      p.node.style.opacity = Math.max(0, a).toFixed(3);
    }
  }

  function frSetArcs(whiteEnd, goldEnd, alpha) {
    frArcWhiteEl.setAttribute('stroke-dasharray', `${FRC1 * whiteEnd} ${FRC1}`);
    frArcWhiteEl.setAttribute('stroke-dashoffset', FRC1 * 0.25);
    frArcWhiteEl.style.opacity = (0.85 * alpha).toFixed(3);
    frArcGoldEl.setAttribute('stroke-dasharray', `${FRC2 * goldEnd} ${FRC2}`);
    frArcGoldEl.setAttribute('stroke-dashoffset', FRC2 * 0.25 - FRC2 * (15 / 360));
    frArcGoldEl.style.opacity = (0.9 * alpha).toFixed(3);
  }

  function frSetLogo(ghostAlpha, ghostBlur, fullAlpha, sweepX, scale, glow) {
    frLogoGhostEl.style.opacity = ghostAlpha.toFixed(3);
    frLogoGhostEl.style.filter = `blur(${ghostBlur}px) brightness(0.55) saturate(0.4)`;
    frLogoGhostEl.style.transform = `scale(${scale.toFixed(3)})`;
    frLogoEl.style.opacity = fullAlpha.toFixed(3);
    frLogoEl.style.transform = `scale(${scale.toFixed(3)})`;
    frLogoEl.style.filter = glow > 0
      ? `drop-shadow(0 0 ${(10 + glow * 18).toFixed(0)}px rgba(245,197,24,${(0.45 * glow).toFixed(2)}))`
      : '';
    if (sweepX !== null) {
      const pct = (sweepX / FRLOGO_SIZE) * 100;
      const feather = (220 / FRLOGO_SIZE) * 100;
      const mask = `linear-gradient(90deg, transparent ${(pct - feather).toFixed(1)}%, black ${(pct - feather / 2).toFixed(1)}%, black ${(pct + feather / 2).toFixed(1)}%, transparent ${(pct + feather).toFixed(1)}%)`;
      frLogoEl.style.webkitMaskImage = mask;
      frLogoEl.style.maskImage = mask;
    } else {
      frLogoEl.style.webkitMaskImage = '';
      frLogoEl.style.maskImage = '';
    }
  }

  function updateFreshReveal(t) {
    if (t < FRESH_START - 0.3) {
      freshReveal.style.opacity = 0;
      return;
    }

    const rt = clamp(t - FRESH_START, 0, FRTOTAL);
    freshReveal.style.opacity = clamp(norm(t, FRESH_START - 0.3, FRESH_START + 0.1), 0, 1);

    if (rt < FRSHOT) {
      // ----- SHOT A — Preparation (0 -> 4.20s) -----
      const lt = rt;
      const pAlpha = clamp(lt / frf(36), 0, 1) * 0.55;
      frUpdateParticles(lt, 0, 0, pAlpha);

      const tWhite = clamp((lt - frf(37)) / frf(35), 0, 1);
      const whiteEnd = easeInOut(tWhite) * 0.30;
      const tGold = clamp((lt - frf(73)) / frf(35), 0, 1);
      let goldEnd = easeInOut(tGold) * 0.55;
      const tGold2 = clamp((lt - frf(109)) / frf(40), 0, 1);
      goldEnd += (0.80 - 0.55) * easeOut(tGold2) * (tGold >= 1 ? 1 : 0);
      frSetArcs(whiteEnd, goldEnd, 1);

      let gh = 0, ghBlur = 22;
      if (lt > frf(73)) gh = 0.08 * clamp((lt - frf(73)) / frf(36), 0, 1);
      if (lt > frf(109)) {
        const tg = clamp((lt - frf(109)) / frf(43), 0, 1);
        gh = 0.08 + 0.07 * tg;
        ghBlur = 22 - 8 * tg;
      }
      frSetLogo(gh, ghBlur, 0, null, 1, 0);

      frRingEl.style.opacity  = 0;
      frBurstEl.style.opacity = 0;
      frFlashEl.style.opacity = 0;

    } else if (rt < 2 * FRSHOT) {
      // ----- SHOT B — Revelation (4.20 -> 8.40s) -----
      const lt = rt - FRSHOT;
      const orbit = clamp((lt - frf(50)) / frf(80), 0, 1);
      const conv  = clamp((lt - frf(82)) / frf(34), 0, 1);
      frUpdateParticles(lt + FRSHOT, orbit, conv, 0.65);
      frSetArcs(0.30, 0.80, 1);

      let ghost;
      if (lt < frf(6)) ghost = 0.15 + 0.20 * (lt / frf(6));
      else if (lt < frf(82)) ghost = 0.35;
      else ghost = 0.35 - 0.20 * clamp((lt - frf(82)) / frf(70), 0, 1);

      let sweepX = null, fullAlpha = 0;
      if (lt >= frf(7) && lt <= frf(82)) {
        const tt = easeInOut(clamp((lt - frf(7)) / frf(75), 0, 1));
        sweepX = -100 + tt * (FRLOGO_SIZE + 200);
        fullAlpha = 1;
      } else if (lt > frf(82)) {
        fullAlpha = 0.90 + 0.05 * clamp((lt - frf(82)) / frf(34), 0, 1);
      }
      let scale = 1;
      if (lt >= frf(117)) {
        const u = (lt - frf(117)) / frf(24);
        scale = 1 + 0.01 * Math.sin(u * Math.PI);
      }
      const glow = clamp(lt / FRSHOT, 0, 1);
      const ghostBlur = Math.max(0, 14 - 14 * clamp(lt / frf(50), 0, 1));
      frSetLogo(ghost, ghostBlur, fullAlpha, sweepX, scale, glow);

      frRingEl.style.opacity  = 0;
      frBurstEl.style.opacity = 0;
      frFlashEl.style.opacity = 0;

    } else if (rt < 3 * FRSHOT) {
      // ----- SHOT C — Affirmation (8.40 -> 12.60s) -----
      const lt = rt - 2 * FRSHOT;
      const partAlpha = 0.6 - 0.4 * clamp(lt / frf(80), 0, 1);
      frUpdateParticles(lt + 2 * FRSHOT, 1, 0.85, partAlpha);

      // Arcs fade out smoothly
      const fadeAlpha = 0.7 - 0.5 * easeInOut(clamp(lt / FRSHOT, 0, 1));
      frSetArcs(0.30, 0.80, fadeAlpha);

      // Breath pulsation F4-60, no big growth here (growth is in ending)
      let scale = 1;
      if (lt >= frf(4) && lt <= frf(60)) {
        const u = (lt - frf(4)) / frf(56);
        scale = 1 + 0.02 * Math.sin(u * Math.PI * 2);
      }
      const glow = clamp(lt / frf(20), 0, 1) * 0.9;
      frSetLogo(0, 0, 1, null, scale, glow);

      // Light ring (frames 1-24 ~ 0.66s)
      const ringT = (lt - frf(1)) / frf(24);
      if (ringT >= 0 && ringT <= 1) {
        const eased = easeOut(ringT);
        const ringScale = 0.02 + eased * 2.6;
        frRingEl.style.transform = `scale(${ringScale.toFixed(3)})`;
        frRingEl.style.opacity = ((1 - ringT) * 0.8).toFixed(3);
      } else {
        frRingEl.style.opacity = 0;
      }

      // Burst particles
      const burstSince = lt - frf(1);
      if (burstSince >= 0 && burstSince <= 2.5) {
        frBurstEl.style.opacity = 1;
        for (const b of frBurstData) {
          const tt = Math.max(0, burstSince - b.delay);
          const x = Math.cos(b.ang) * b.v * tt;
          const y = Math.sin(b.ang) * b.v * tt + 0.5 * 220 * tt * tt;
          const op = clamp(1 - tt / 2, 0, 1);
          const sc = 1 - tt / 3;
          if (sc <= 0) {
            b.node.style.opacity = 0;
          } else {
            b.node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${sc.toFixed(3)})`;
            b.node.style.opacity = op.toFixed(3);
          }
        }
      } else {
        frBurstEl.style.opacity = 0;
      }

      // Flash (~5 frames)
      const flashF = (lt - frf(1)) * 24;
      let flashOp = 0;
      if (flashF >= 0 && flashF <= 6) {
        if (flashF < 1)      flashOp = flashF;
        else if (flashF < 2) flashOp = 1 - (flashF - 1) * 0.6;
        else if (flashF < 3) flashOp = 0.4 * (1 - (flashF - 2));
        else                 flashOp = 0.1 * (1 - (flashF - 3) / 2);
        flashOp = Math.max(0, flashOp);
      }
      frFlashEl.style.opacity = flashOp.toFixed(3);

    } else {
      // ----- ENDING (12.60 -> 15.00s) — single continuous logo growth + fade -----
      const lt = rt - 3 * FRSHOT;
      const dur = FRTOTAL - 3 * FRSHOT;   // 2.40
      const tt = clamp(lt / dur, 0, 1);
      const fade = easeInQuad(tt);

      const scale = 1 + 0.65 * easeOut(tt);   // 100% -> 165%, one continuous ease
      const logoOp = 1 - fade;

      for (const p of frParticleData) p.node.style.opacity = 0;
      frSetArcs(0, 0, 0);
      frRingEl.style.opacity  = 0;
      frBurstEl.style.opacity = 0;
      frFlashEl.style.opacity = 0;

      frSetLogo(0, 0, logoOp, null, scale, 0.9 * logoOp);
    }
  }

  // =========================================================================
  // PHASE-BASED COLOR GRADING (applied to video CSS filter)
  // =========================================================================
  function gradeForTime(t) {
    // Defaults
    let sat = 0.85, con = 1.14, bri = 0.95, hue = -4, sepia = 0;

    if (t < P1_END) {
      // Phase 1: cold, slightly desaturated
      const k = norm(t, P1_START, P1_END);
      sat = lerp(0.7, 0.85, k);
      con = lerp(1.20, 1.16, k);
      bri = lerp(0.78, 0.92, k);
      hue = lerp(-12, -6, k);
    } else if (t < P2_END) {
      // Phase 2: neutral, building
      const k = norm(t, P2_START, P2_END);
      sat = lerp(0.85, 0.95, k);
      con = lerp(1.16, 1.18, k);
      bri = lerp(0.92, 0.96, k);
      hue = lerp(-6, -2, k);
    } else if (t < P3_END) {
      // Phase 3: action — pushes contrast, drops sat
      sat = 0.72;
      con = 1.28;
      bri = 0.94;
      hue = 0;
      // climax B: near-monochrome
      if (t >= T_CLIMAX_B && t < T_CLIMAX_B + 0.34) {
        sat = 0.35;
        con = 1.4;
        bri = 0.88;
      }
      // big breath after climax: golden hour
      if (t >= T_BREATH2_START && t < T_BREATH2_END) {
        const k = norm(t, T_BREATH2_START, T_BREATH2_END);
        sat = lerp(0.9, 1.1, k);
        con = 1.15;
        bri = lerp(0.96, 1.02, k);
        hue = lerp(8, 14, k);
        sepia = 0.12;
      }
    } else if (t < P4_END) {
      // Phase 4: warm, golden, resolution
      const k = norm(t, P4_START, P4_END);
      sat = lerp(1.0, 0.85, k);
      con = lerp(1.16, 1.2, k);
      bri = lerp(1.0, 0.85, k);
      hue = lerp(12, 16, k);
      sepia = lerp(0.18, 0.25, k);
    } else {
      // Phase 5+: video hidden behind reveal anyway
      sat = 0.85; con = 1.18; bri = 0.7; hue = 8; sepia = 0.15;
    }

    return `saturate(${sat.toFixed(2)}) contrast(${con.toFixed(2)}) ` +
           `brightness(${bri.toFixed(2)}) hue-rotate(${hue.toFixed(1)}deg) ` +
           `sepia(${sepia.toFixed(2)})`;
  }

  // Phase color tint overlay (warm/cold wash on top of video)
  function tintForTime(t) {
    if (t < P1_END) {
      // cold blue wash
      const k = norm(t, P1_START, P1_END);
      const a = lerp(0.32, 0.14, k);
      return { bg: `linear-gradient(180deg, rgba(20,38,80,${a}), rgba(8,18,42,${a*0.7}))`, op: 1 };
    }
    if (t < P2_END) {
      return { bg: 'rgba(20,32,64,0.10)', op: 0.55 };
    }
    if (t < P3_END) {
      if (t >= T_BREATH2_START && t < T_BREATH2_END) {
        const k = norm(t, T_BREATH2_START, T_BREATH2_END);
        return { bg: `linear-gradient(180deg, rgba(255,180,60,${0.30*k}), rgba(255,140,40,${0.15*k}))`, op: 1 };
      }
      return { bg: 'rgba(10,20,40,0.12)', op: 0.5 };
    }
    if (t < P4_END) {
      const k = norm(t, P4_START, P4_END);
      const a = lerp(0.20, 0.34, k);
      return { bg: `linear-gradient(180deg, rgba(255,180,70,${a}), rgba(180,90,30,${a*0.6}))`, op: 1 };
    }
    return { bg: 'rgba(8,18,42,0.3)', op: 1 };
  }

  // =========================================================================
  // CAMERA MOVEMENT (push in, drift, shake, zoom punch)
  // =========================================================================
  function cameraForTime(t) {
    // Returns { scale, tx, ty, rot }
    let s = 1, tx = 0, ty = 0, rot = 0;

    if (t < P1_END) {
      // Slow push in 100% → 105%
      const k = norm(t, 1.5, P1_END);
      s = lerp(1.00, 1.05, easeOut(k));
      // subtle drift
      tx = Math.sin(t * 0.4) * 4;
      ty = Math.cos(t * 0.3) * 3;
    } else if (t < P2_END) {
      // Alternating push/pull every 4s
      const cycle = ((t - P2_START) / 4) % 2;
      if (cycle < 1) s = lerp(1.00, 1.06, cycle);
      else           s = lerp(1.06, 1.00, cycle - 1);
      tx = Math.sin(t * 0.5) * 3;

      // First impact zoom punch
      const dt = t - T_FIRST_IMPACT;
      if (dt >= 0 && dt < 0.5) {
        if (dt < 4*F) s += lerp(0, 0.12, dt / (4*F));
        else          s += lerp(0.12, 0.08, (dt - 4*F) / (12*F));
        // shake during impact
        if (dt < 0.5) {
          tx += (Math.random() - 0.5) * 10;
          ty += (Math.random() - 0.5) * 6;
        }
      }
      // Breath after first impact: pull out slow
      if (t >= T_BREATH1_START && t < T_BREATH1_END) {
        const k = norm(t, T_BREATH1_START, T_BREATH1_END);
        s = lerp(1.08, 1.00, easeOut(k));
      }
    } else if (t < P3_END) {
      // Action — fast cuts + zoom punches every ~1.5s
      const cycle = ((t - P3_START) % 1.6);
      s = 1.03 + Math.sin(cycle * 4) * 0.02;
      // micro shakes
      if (Math.random() < 0.1) {
        tx = (Math.random() - 0.5) * 3;
        ty = (Math.random() - 0.5) * 2;
      }
      // Climax A: violent zoom punch + shake
      const dtA = t - T_CLIMAX_A;
      if (dtA >= 0 && dtA < 0.46) {
        s = lerp(1.0, 1.14, Math.min(1, dtA / (4*F)));
        tx = (Math.random() - 0.5) * 14;
        ty = (Math.random() - 0.5) * 10;
      }
      // Climax B: monochrome + zoom held
      const dtB = t - T_CLIMAX_B;
      if (dtB >= 0 && dtB < 0.34) {
        s = 1.18;
        tx = (Math.random() - 0.5) * 6;
      }
      // Breath 2: slow pull out
      if (t >= T_BREATH2_START && t < T_BREATH2_END) {
        const k = norm(t, T_BREATH2_START, T_BREATH2_END);
        s = lerp(1.10, 1.00, easeOut(k));
        tx = Math.sin(t * 0.3) * 4;
        ty = Math.cos(t * 0.2) * 3;
      }
    } else if (t < P4_END) {
      // Resolution — slow drift, push in
      const k = norm(t, P4_START, P4_END);
      s = lerp(1.00, 1.08, easeInOut(k));
      tx = Math.sin(t * 0.35) * 5;
      ty = Math.cos(t * 0.28) * 4;
      rot = Math.sin(t * 0.4) * 0.3;
    }

    return { s, tx, ty, rot };
  }

  // =========================================================================
  // INTRO/INTER BLACK FADE
  // =========================================================================
  function blackFadeForTime(t) {
    // Opening black 0-1.5s
    if (t < 1.5) return 1 - easeOut(norm(t, 0.6, 1.5)) * 0.0;
    if (t < 2.5) return 1 - easeOut(norm(t, 1.0, 2.5));
    // Phase 4 → Phase 5 transition fade to night
    if (t >= T_P4_FADE && t < T_P4_FADE_END) {
      return easeIn(norm(t, T_P4_FADE, T_P4_FADE_END));
    }
    if (t >= T_P4_FADE_END && t < P5_START + 0.5) return 1;
    return 0;
  }

  // =========================================================================
  // FLASH (impacts)
  // =========================================================================
  function flashForTime(t) {
    let a = 0;
    // First impact (3 frames)
    const dt1 = t - T_FIRST_IMPACT;
    if (dt1 >= 0 && dt1 < 3*F) a = Math.max(a, 0.95 * (1 - dt1 / (3*F)));
    // Climax A (3 frames)
    const dtA = t - T_CLIMAX_A;
    if (dtA >= 0 && dtA < 3*F) a = Math.max(a, 1.0 * (1 - dtA / (3*F)));
    // Climax B start (2 frames)
    const dtB = t - T_CLIMAX_B;
    if (dtB >= 0 && dtB < 2*F) a = Math.max(a, 0.85);
    return a;
  }

  // =========================================================================
  // CHROMATIC GLITCH (impacts + reveal seq B start)
  // =========================================================================
  function chromaForTime(t) {
    let a = 0;
    const dt1 = t - T_FIRST_IMPACT;
    if (dt1 >= 0 && dt1 < 6*F) a = Math.max(a, 0.8 * (1 - dt1 / (6*F)));
    const dtA = t - T_CLIMAX_A;
    if (dtA >= 0 && dtA < 6*F) a = Math.max(a, 1.0 * (1 - dtA / (6*F)));
    // Reveal sequence B opening glitch (6 frames)
    const dtR = t - SB_START;
    if (dtR >= 0 && dtR < 6*F) a = Math.max(a, 0.9 * (1 - dtR / (6*F)));
    return a;
  }

  // =========================================================================
  // KINETIC TEXT — REMOVED (per request, only final reveal text remains)
  // =========================================================================
  function updateKineticText(t) { /* disabled */ }

  // =========================================================================
  // BROADCAST HUD — brackets, REC timecode, viewfinder data, phase label
  // =========================================================================
  function tcToHud(t) {
    const totalFrames = Math.floor(t * FPS);
    const hh = Math.floor(totalFrames / (FPS*3600));
    const mm = Math.floor((totalFrames / (FPS*60)) % 60);
    const ss = Math.floor((totalFrames / FPS) % 60);
    const ff = totalFrames % FPS;
    return [hh, mm, ss, ff].map(n => String(n).padStart(2,'0')).join(':');
  }

  function updateHUD(t) {
    // HUD entirely disabled per request (no REC, no chapter labels, no viewfinder data)
  }

  // =========================================================================
  // LETTERBOX bars (cinematic crop)
  // =========================================================================
  function updateLetterbox(t) {
    let topY = -100, botY = 100;
    // Letterbox only at climax B (brief cinematic compression in action phase)
    const dtB = t - T_CLIMAX_B;
    if (dtB >= 0 && dtB < 0.6) {
      const k = dtB < 0.1 ? norm(dtB, 0, 0.1) : 1 - norm(dtB, 0.4, 0.6);
      topY = lerp(-100, 0, k);
      botY = lerp(100, 0, k);
    }
    letterTop.style.transform = `translateY(${topY}%)`;
    letterBot.style.transform = `translateY(${botY}%)`;
  }

  // =========================================================================
  // SWIPE WIPES (transition feel between phases / cuts)
  // =========================================================================
  // SWIPE WIPES — remaining cuts (long navy swipe at 56.4 removed per request)
  const SWIPES = [];
  // DISSOLVE BLINKS — brief black flash (kept for one cinematic splice)
  const BLINKS = [
    { t: 21.6, dur: 0.18, peak: 0.55 },
  ];
  // IRIS TRANSITIONS — disabled per request
  const IRISES = [];
  // VERTICAL BARS SWEEP — disabled per request
  const BARS = [];
  // VIGNETTE PULSES — vignette suddenly intensifies and releases
  const VIG_PULSES = [
    { t: 26.8, dur: 0.45, boost: 0.35 },
  ];

  function updateSwipe(t) {
    let active = null;
    for (const sw of SWIPES) {
      if (t >= sw.t && t < sw.t + sw.dur) { active = sw; break; }
    }
    if (!active) { swipe.style.opacity = 0; return; }
    const k = norm(t, active.t, active.t + active.dur);
    const angle = active.dir === 'diag' ? 135 : 90;
    let x;
    if (active.dir === 'left') x = lerp(140, -40, k);
    else                       x = lerp(-40, 140, k);
    const grad = `linear-gradient(${angle}deg,
      transparent ${x - 22}%,
      ${active.color} ${x - 4}%,
      ${active.color} ${x + 4}%,
      transparent ${x + 22}%)`;
    swipe.style.background = grad;
    swipe.style.opacity = 1;
  }

  function updateIris(t) {
    let active = null;
    for (const ir of IRISES) {
      if (t >= ir.t - 0.02 && t < ir.t + ir.dur) { active = ir; break; }
    }
    if (!active) { irisOverlay.style.opacity = 0; return; }
    const k = norm(t, active.t, active.t + active.dur);
    let r;
    if (active.mode === 'open') r = lerp(0, 130, easeInOut(k));     // opens: covered → reveal
    else                        r = lerp(130, 0, easeInOut(k));     // closes
    irisOverlay.style.background = `radial-gradient(circle at 50% 50%, transparent ${r}%, ${active.color} ${r + 2}%)`;
    irisOverlay.style.opacity = 1;
  }

  function updateBars(t) {
    let active = null;
    for (const b of BARS) {
      if (t >= b.t && t < b.t + b.dur) { active = b; break; }
    }
    if (!active) { barsOverlay.style.opacity = 0; return; }
    const k = norm(t, active.t, active.t + active.dur);
    const phase = k < 0.5 ? k * 2 : (1 - k) * 2;
    const fill = phase * 100;
    barsOverlay.style.background =
      `repeating-linear-gradient(90deg,
        rgba(8,18,42,0.95) 0,
        rgba(8,18,42,0.95) 8.3333%,
        transparent 8.3333%,
        transparent 16.6667%)`;
    barsOverlay.style.clipPath = `inset(${100 - fill}% 0 0 0)`;
    barsOverlay.style.opacity = 1;
  }

  function blinkAmount(t) {
    let a = 0;
    for (const b of BLINKS) {
      const dt = t - b.t;
      if (dt < 0 || dt > b.dur) continue;
      const half = b.dur / 2;
      const v = dt < half
        ? (dt / half) * b.peak
        : (1 - (dt - half) / half) * b.peak;
      a = Math.max(a, v);
    }
    return a;
  }
  function vignetteBoost(t) {
    let b = 0;
    for (const v of VIG_PULSES) {
      const dt = t - v.t;
      if (dt < 0 || dt > v.dur) continue;
      const half = v.dur / 2;
      const cur = dt < half
        ? (dt / half) * v.boost
        : (1 - (dt - half) / half) * v.boost;
      b = Math.max(b, cur);
    }
    return b;
  }

  // =========================================================================
  // GLITCH SLICE bands (datamosh feel)
  // =========================================================================
  const GLITCHES = [
    { t: 14.6, dur: 0.35 },
    { t: 19.2, dur: 0.40 },
    { t: 28.9, dur: 0.32 },
    { t: 33.4, dur: 0.28 },
    { t: T_CLIMAX_A, dur: 0.45 },
    { t: T_CLIMAX_B, dur: 0.30 },
    { t: SB_START,   dur: 0.30 },
  ];
  function updateGlitchSlice(t) {
    let op = 0, offset = 0;
    for (const g of GLITCHES) {
      if (t >= g.t && t < g.t + g.dur) {
        const k = norm(t, g.t, g.t + g.dur);
        op = Math.max(op, (1 - k) * 0.9);
        offset = (Math.random() - 0.5) * 28;
      }
    }
    glitchSlice.style.opacity = op;
    glitchSlice.style.transform = `translateX(${offset}px)`;
  }

  // =========================================================================
  // SPEED LINES (radial)
  // =========================================================================
  function updateSpeedLines(t) {
    let op = 0, scale = 1;
    // First impact
    const dt1 = t - T_FIRST_IMPACT;
    if (dt1 >= 0 && dt1 < 0.5) {
      op = lerp(0.6, 0, norm(dt1, 0, 0.5));
      scale = lerp(0.5, 2.2, norm(dt1, 0, 0.5));
    }
    // Pre-climax build (36 → 37.7) tension that converges
    if (t >= 36 && t < 37.7) {
      const k = norm(t, 36, 37.7);
      op = Math.max(op, 0.45 * k);
      scale = lerp(2.4, 0.7, k);
    }
    // Climax A burst
    const dtA = t - T_CLIMAX_A;
    if (dtA >= 0 && dtA < 0.5) {
      op = Math.max(op, lerp(0.85, 0, norm(dtA, 0, 0.5)));
      scale = lerp(0.5, 2.6, norm(dtA, 0, 0.5));
    }
    speedLines.style.opacity = op;
    speedLines.style.transform = `scale(${scale})`;
  }

  // =========================================================================
  // RETICLE — DISABLED per request
  // =========================================================================
  function updateReticle(t) {
    reticle.style.opacity = 0;
  }

  // =========================================================================
  // BALL TRACER — DISABLED per request
  // =========================================================================
  const TRACERS = [];
  function updateBallTracer(t) {
    ballTracer.style.opacity = 0;
    tracerBall.setAttribute('opacity', 0);
  }

  // =========================================================================
  // GOAL TRACE 1 — ball-tracking ring + trajectory toward top corner
  // =========================================================================
  // Edit these coordinates if the ball position needs adjustment.
  const GOAL1 = {
    t: 31.75,
    flight: 0.75,
    hold: 0.0,
    fade: 0.25,
    startX: 740, startY: 898,
    cpX: 560,    cpY: 760,
    endX: 420,   endY: 680,
  };
  let _goalPathBuilt = false;
  let _goalPathLen = 0;
  function buildGoalPath() {
    if (_goalPathBuilt) return;
    const g = GOAL1;
    const d = `M ${g.startX} ${g.startY} Q ${g.cpX} ${g.cpY} ${g.endX} ${g.endY}`;
    goalTrace1Path.setAttribute('d', d);
    _goalPathLen = goalTrace1Path.getTotalLength();
    goalTrace1Path.style.strokeDasharray = _goalPathLen;
    goalTrace1Path.style.strokeDashoffset = _goalPathLen;
    _goalPathBuilt = true;
  }
  function updateGoalTrace(t) {
    buildGoalPath();
    const g = GOAL1;
    const total = g.flight + g.hold + g.fade;
    const dt = t - g.t;
    if (dt < -0.4 || dt > total) {
      goalTrace1.style.opacity = 0;
      goalTrace1Ring.setAttribute('opacity', 0);
      goalTrace1Dot.setAttribute('opacity', 0);
      goalTrace1Target.setAttribute('opacity', 0);
      return;
    }
    // Pre-roll: ring locks on ball before kick
    if (dt < 0) {
      const lock = norm(dt, -0.4, 0);
      goalTrace1.style.opacity = lock;
      const pulseR = 40 + Math.sin(t * 12) * 4;
      goalTrace1Ring.setAttribute('cx', g.startX);
      goalTrace1Ring.setAttribute('cy', g.startY);
      goalTrace1Ring.setAttribute('r',  pulseR.toFixed(1));
      goalTrace1Ring.setAttribute('opacity', lock);
      goalTrace1Dot.setAttribute('cx', g.startX);
      goalTrace1Dot.setAttribute('cy', g.startY);
      goalTrace1Dot.setAttribute('opacity', lock);
      goalTrace1Target.setAttribute('opacity', lock * 0.5);
      goalTrace1Path.style.strokeDashoffset = _goalPathLen;
      return;
    }
    let phase, op;
    if (dt < g.flight) {
      phase = easeOut(dt / g.flight);
      op = 1;
    } else if (dt < g.flight + g.hold) {
      phase = 1;
      op = 1;
    } else {
      phase = 1;
      op = 1 - norm(dt, g.flight + g.hold, total);
    }
    goalTrace1.style.opacity = op;
    goalTrace1Path.style.strokeDashoffset = (_goalPathLen * (1 - phase)).toFixed(1);
    const pt = goalTrace1Path.getPointAtLength(_goalPathLen * phase);
    goalTrace1Ring.setAttribute('cx', pt.x.toFixed(1));
    goalTrace1Ring.setAttribute('cy', pt.y.toFixed(1));
    goalTrace1Dot.setAttribute('cx', pt.x.toFixed(1));
    goalTrace1Dot.setAttribute('cy', pt.y.toFixed(1));
    // Ring sizing: tight during flight, burst on impact, settle
    let ringR = 38;
    if (dt < g.flight) {
      ringR = lerp(42, 28, dt / g.flight) + Math.sin(t * 14) * 2;
    } else {
      const it = dt - g.flight;
      if (it < 0.18) ringR = lerp(28, 76, it / 0.18);
      else           ringR = lerp(76, 40, norm(it, 0.18, 0.6));
      ringR += Math.sin(t * 12) * 2;
    }
    goalTrace1Ring.setAttribute('r', ringR.toFixed(1));
    goalTrace1Ring.setAttribute('opacity', op);
    goalTrace1Dot.setAttribute('opacity', op);
    // Lucarne target marker fades as ball arrives
    let targetOp = 0;
    if (dt < g.flight * 0.7) targetOp = 0.6;
    else if (dt < g.flight)  targetOp = lerp(0.6, 0, norm(dt, g.flight * 0.7, g.flight));
    goalTrace1Target.setAttribute('opacity', (targetOp * op).toFixed(2));
  }
  // =========================================================================
  const SHAPES = [
    // All shape overlays removed per request
  ];
  function updateShapeOverlays(t) {
    for (const s of SHAPES) {
      if (!s.path.dataset.len) {
        const len = s.path.getTotalLength();
        s.path.dataset.len = len;
        s.path.style.strokeDasharray = len;
        s.path.style.strokeDashoffset = len;
      }
      const len = parseFloat(s.path.dataset.len);
      const dt = t - s.t;
      const total = s.draw + s.hold + s.fade;
      if (dt < 0 || dt > total) { s.svg.style.opacity = 0; continue; }

      let drawnPct, op;
      if (dt < s.draw) {
        drawnPct = easeInOut(dt / s.draw);
        op = Math.min(1, dt / 0.25);
      } else if (dt < s.draw + s.hold) {
        drawnPct = 1;
        const p = (dt - s.draw) / s.hold;
        op = 0.85 + Math.sin(p * Math.PI * 3) * 0.15;
      } else {
        drawnPct = 1;
        op = 1 - norm(dt, s.draw + s.hold, total);
      }
      s.path.style.strokeDashoffset = (len * (1 - drawnPct)).toFixed(1);
      s.svg.style.opacity = op;
    }
  }

  // =========================================================================
  // MASTER OVERLAY DISPATCH
  // =========================================================================
  function updateOverlays(t) {
    updateHUD(t);
    updateLetterbox(t);
    updateSwipe(t);
    updateGlitchSlice(t);
    updateSpeedLines(t);
    updateReticle(t);
    updateBallTracer(t);
    updateShapeOverlays(t);
    updateGoalTrace(t);
    updateIris(t);
    updateBars(t);
  }

  // =========================================================================
  // OVERLAYS situationnels (lens flare, light leak, dust, fog)
  // =========================================================================
  function updateSituational(t) {
    // Lens flare: brief in P1 (sunset feel), again in P3 breath
    let lensA = 0;
    if (t > 4 && t < 9)  lensA = pulse(t, 6.5, 2.5) * 0.45;
    if (t > T_BREATH2_START && t < T_BREATH2_END)
      lensA = Math.max(lensA, 0.6 * norm(t, T_BREATH2_START, T_BREATH2_START + 1.5));
    if (t >= T_BREATH1_START && t < T_BREATH1_END)
      lensA = Math.max(lensA, 0.35 * norm(t, T_BREATH1_START, T_BREATH1_START + 1.2));
    lensFlare.style.opacity = lensA;
    // Slow horizontal drift
    lensFlare.style.transform = `rotate(-2deg) translateX(${Math.sin(t*0.2)*40}px)`;

    // Light leak — warm corner during contemplative + P4
    let leakA = 0;
    if (t > 5 && t < 9)  leakA = 0.35 * pulse(t, 7, 2);
    if (t >= T_BREATH2_START && t < T_BREATH2_END) leakA = Math.max(leakA, 0.5);
    if (t >= P4_START && t < P4_END) {
      leakA = Math.max(leakA, 0.25 + 0.25 * norm(t, P4_START, P4_END));
    }
    lightLeak.style.opacity = leakA;

    // Dust particles — contemplative phases
    let dustA = 0;
    if (t > 3 && t < P2_END) dustA = 0.6;
    if (t >= T_BREATH1_START && t < T_BREATH1_END) dustA = 0.9;
    if (t >= T_BREATH2_START && t < T_BREATH2_END) dustA = 0.95;
    if (t >= P4_START && t < P4_END) dustA = 0.6;
    dust.style.opacity = dustA;

    // Fog — low horizon
    let fogA = 0;
    if (t < P1_END) fogA = 0.45 * easeOut(norm(t, 1.5, 4.5));
    if (t >= T_BREATH2_START && t < T_BREATH2_END) fogA = 0.65;
    if (t >= P4_START && t < P4_END) fogA = 0.35;
    fog.style.opacity = fogA;

    // Grain intensity — boost on slow plans
    let grainA = 0.15;
    if (t < P1_END) grainA = 0.22;
    if (t >= T_BREATH1_START && t < T_BREATH1_END) grainA = 0.25;
    if (t >= T_BREATH2_START && t < T_BREATH2_END) grainA = 0.27;
    if (t >= P5_START) grainA = 0.20;
    if (t >= P6_START) grainA = 0.24;
    grain.style.opacity = grainA;

    // Vignette boost
    let vigA = 0.85;
    if (t < P1_END) vigA = 0.95;
    if (t >= P5_START) vigA = 0.95;
    if (t >= SC_START + 4) vigA = 1.0;
    if (t >= P6_START) vigA = 1.1;
    vignette.style.opacity = vigA + vignetteBoost(t);
  }

  // =========================================================================
  // REVEAL — SMOKE / FUMIGÈNE (Phase 5, 15s starting at P5_START)
  // =========================================================================
  // Cache cloud nodes for fast iteration
  let _cloudCache = null;
  function cloudNodes() {
    if (!_cloudCache) {
      _cloudCache = {
        back:  Array.from(smokeBack.children),
        mid:   Array.from(smokeMid.children),
        front: Array.from(smokeFront.children),
      };
    }
    return _cloudCache;
  }

  function animateCloudGroup(nodes, t, revealT, opts) {
    // STAGE SMOKE: clouds erupt from center, drift outward, expand, fade.
    for (const c of nodes) {
      const vx    = parseFloat(c.dataset.vx);
      const vy    = parseFloat(c.dataset.vy);
      const speed = parseFloat(c.dataset.speed);
      const phase = parseFloat(c.dataset.phase);
      const delay = parseFloat(c.dataset.delay);
      const life  = parseFloat(c.dataset.life);
      const swirl = parseFloat(c.dataset.swirl);

      const lt = (revealT - delay) * speed * opts.timeMul;
      if (lt < 0) {
        c.style.opacity = 0;
        c.style.transform = `translate(0,0) scale(0.15)`;
        continue;
      }
      const drag = 0.55;
      const factor = (1 - Math.exp(-lt * drag)) / drag;
      const dx = vx * factor + Math.sin(t * 0.5 * speed + phase) * 28;
      const dy = vy * factor + Math.cos(t * 0.55 * speed + phase) * 28 - lt * 18;
      const rot = swirl * lt * 24;
      const sc = opts.baseScale + Math.min(1.2, lt * 0.32);
      let cloudOp;
      if (lt < 0.30) cloudOp = lt / 0.30;
      else if (lt < life - 0.8) cloudOp = 1;
      else if (lt < life) cloudOp = 1 - (lt - (life - 0.8)) / 0.8;
      else cloudOp = 0;
      c.style.opacity = cloudOp;
      c.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
    }
  }

  function updateReveal(t) {
    // ---- OUTRO TEXT (57.5 → 62.5) then FRESH 15s→10s REVEAL (62.5 → 72.5) ----

    // Hide all legacy smoke/pitch reveal layers permanently
    reveal.style.opacity = 0;
    smokeBack.style.opacity = 0;
    smokeMid.style.opacity = 0;
    smokeFront.style.opacity = 0;
    logoFull.style.opacity = 0;
    finalGenech.style.opacity = 0;
    finalES.style.opacity = 0;
    final1971.style.opacity = 0;
    revealBg.style.opacity = 0;
    revealFog.style.opacity = 0;
    pitchReveal.style.opacity = 0;

    // ----- OUTRO CARD (57.5 → 62.5) -----
    const OUTRO_START = 57.5;
    const OUTRO_END   = 62.5;
    if (t < OUTRO_START) {
      outroCard.style.opacity = 0;
      outroWords1.forEach(w => w.classList.remove('show'));
      outroWords2.forEach(w => w.classList.remove('show'));
      outroDots.classList.remove('show');
      outroLine1.style.opacity = 0;
      outroLine2.style.opacity = 0;
      outroUnderline.style.width = '0px';
    } else if (t < OUTRO_END) {
      const fadeIn  = clamp(norm(t, OUTRO_START, OUTRO_START + 0.5), 0, 1);
      const fadeOut = clamp(norm(t, OUTRO_END - 0.5, OUTRO_END), 0, 1);
      const cardOp  = fadeIn * (1 - fadeOut);
      outroCard.style.opacity = cardOp;

      if (outroHalo) {
        const haloK = clamp(norm(t, OUTRO_START + 0.3, OUTRO_START + 2.8), 0, 1);
        const breath = 1 + Math.sin((t - OUTRO_START) * 0.8) * 0.04;
        outroHalo.style.opacity = (haloK * cardOp).toFixed(3);
        outroHalo.style.transform = `scale(${breath.toFixed(3)})`;
      }
      if (outroEmbers) outroEmbers.style.opacity = (clamp(norm(t, OUTRO_START + 0.5, OUTRO_START + 1.5), 0, 1) * cardOp).toFixed(3);
      if (outroStreak) {
        const streakBase = clamp(norm(t, OUTRO_START + 1.0, OUTRO_START + 2.0), 0, 1) * 0.55;
        const streakPulse = pulse(t, OUTRO_START + 2.5, 0.5) * 0.6;
        outroStreak.style.opacity = ((streakBase + streakPulse) * cardOp).toFixed(3);
      }

      // Line 1 (4 words "PUISER DANS NOS RACINES...")
      const L1_START = OUTRO_START + 0.5;
      const wordGap1 = 0.22;
      if (t >= L1_START) {
        outroLine1.style.opacity = 1;
        outroWords1.forEach((w, i) => {
          if (t >= L1_START + i * wordGap1) w.classList.add('show');
          else w.classList.remove('show');
        });
        if (t >= L1_START + outroWords1.length * wordGap1 + 0.08) outroDots.classList.add('show');
        else outroDots.classList.remove('show');
      } else {
        outroLine1.style.opacity = 0;
      }
      // Line 2 (7 words "POUR ÉCRIRE LA SUITE DE NOTRE HISTOIRE")
      const L2_START = OUTRO_START + 1.6;
      const wordGap2 = 0.13;
      if (t >= L2_START) {
        outroLine2.style.opacity = 1;
        outroWords2.forEach((w, i) => {
          if (t >= L2_START + i * wordGap2) w.classList.add('show');
          else w.classList.remove('show');
        });
      } else {
        outroLine2.style.opacity = 0;
      }
      // Underline
      const UL_START = OUTRO_START + 2.7;
      if (t >= UL_START) {
        const uk = clamp(norm(t, UL_START, UL_START + 0.6), 0, 1);
        outroUnderline.style.width = (uk * 460).toFixed(0) + 'px';
      } else {
        outroUnderline.style.width = '0px';
      }
      // Subtle breath on line 2
      if (t >= OUTRO_START + 3.0) {
        const bp = Math.sin((t - OUTRO_START - 3.0) * 1.6) * 0.03;
        outroLine2.style.transform = `translateY(0) scale(${(1 + bp).toFixed(3)})`;
      } else {
        outroLine2.style.transform = 'translateY(0)';
      }
      // Fresh reveal stays hidden during outro
      freshReveal.style.opacity = 0;
      finalFade.style.opacity = 0;
      return;
    } else {
      outroCard.style.opacity = 0;
    }

    // ----- FRESH REVEAL (62.5 → 72.5) -----
    updateFreshReveal(t);

    // Final fade (cross-fade in reveal ending + black hold after FRESH_END)
    if (t >= FRESH_START + FRPHASE5_END) {
      const lt = t - (FRESH_START + FRPHASE5_END);
      const dur = FRTOTAL - FRPHASE5_END;
      const fade = easeInQuad(clamp(lt / dur, 0, 1));
      finalFade.style.opacity = Math.max(fade, t >= FRESH_END ? 1 : 0);
    } else {
      finalFade.style.opacity = 0;
    }
  }

  // =========================================================================
  // VOID REVEAL — 12s, Angers SCO style (dark void + smoke + beams + reflection)
  // Kept for reference but no longer called — fresh reveal handles everything.
  // =========================================================================
  function updatePitchReveal(t) {
    const REV_START = 63.0;
    const rt = t - REV_START; // 0..12

    pitchReveal.style.opacity = clamp(norm(t, REV_START - 0.5, REV_START + 0.1), 0, 1);

    // ---- PHASE 1 (0-1.5s): void fade in + stars twinkle ----
    const bgFade = clamp(norm(rt, 0, 1.5), 0, 1);
    const bgEase = 1 - Math.pow(1 - bgFade, 2);
    prOpener.style.opacity = 1 - bgEase;

    // Star field — twinkle
    for (const s of vrStarNodes) {
      const baseOp = parseFloat(s.dataset.baseOp);
      const twink  = parseFloat(s.dataset.twink);
      const phase  = parseFloat(s.dataset.phase);
      // Stars fade in during phase 1, persist
      const fadeK = clamp(norm(rt, 0.2, 1.8), 0, 1);
      const flicker = 0.7 + Math.sin(t * twink + phase) * 0.3;
      s.style.opacity = (baseOp * fadeK * flicker).toFixed(3);
    }

    // ---- PHASE 2 (1.5-5s): smoke rises centrally ----
    let backOp, midOp, frontOp;
    if (rt < 1.5) {
      backOp = midOp = frontOp = 0;
    } else if (rt < 4.0) {
      const k = norm(rt, 1.5, 4.0);
      backOp  = k * 0.75;
      midOp   = k * 0.55;
      frontOp = k * 0.40;
    } else if (rt < 9.5) {
      backOp  = lerp(0.75, 0.45, norm(rt, 4.0, 9.5));
      midOp   = lerp(0.55, 0.30, norm(rt, 4.0, 9.5));
      frontOp = lerp(0.40, 0.22, norm(rt, 4.0, 9.5));
    } else {
      const k = norm(rt, 9.5, 12.0);
      backOp  = lerp(0.45, 0.30, k);
      midOp   = lerp(0.30, 0.20, k);
      frontOp = lerp(0.22, 0.15, k);
    }
    prSmokeBack.style.opacity  = backOp;
    prSmokeMid.style.opacity   = midOp;
    prSmokeFront.style.opacity = frontOp;

    // Animate each cloud — rises, sways, scales
    function animateClouds(nodes, opts) {
      for (const c of nodes) {
        const swayAmp  = parseFloat(c.dataset.swayAmp);
        const swayFreq = parseFloat(c.dataset.swayFreq);
        const phase    = parseFloat(c.dataset.phase);
        const rise     = parseFloat(c.dataset.rise);
        const delay    = parseFloat(c.dataset.delay);
        const yOffset  = parseFloat(c.dataset.yOffset);
        const lt = Math.max(0, (rt - 1.5 - delay));
        const riseK = 1 - Math.exp(-lt * opts.riseRate);
        const dy = -rise * riseK - yOffset;
        const dx = Math.sin(t * swayFreq + phase) * swayAmp;
        const sc = opts.baseScale + Math.min(0.5, lt * 0.12);
        c.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(${sc.toFixed(3)})`;
      }
    }
    animateClouds(prCloudsBack,  { riseRate: 0.45, baseScale: 1.0  });
    animateClouds(prCloudsMid,   { riseRate: 0.60, baseScale: 1.0  });
    animateClouds(prCloudsFront, { riseRate: 0.80, baseScale: 1.05 });

    // ---- PHASE 3 (4-6.5s, persists to 12): vertical light beams ----
    let beamOp = 0;
    if (rt >= 4.0 && rt < 6.5) beamOp = norm(rt, 4.0, 6.0);
    else if (rt >= 6.5 && rt < 9.5) beamOp = lerp(1, 1.1, norm(rt, 6.5, 9.5));   // intensify slightly with logo
    else if (rt >= 9.5)            beamOp = lerp(1.1, 0.7, norm(rt, 9.5, 12.0));

    // Subtle drift on the side beams
    const beamSway = Math.sin(t * 0.4) * 6;
    vrBeam1.style.opacity = (beamOp * 0.6).toFixed(3);
    vrBeam2.style.opacity = (beamOp * 0.85).toFixed(3);
    vrBeam3.style.opacity = (beamOp * 0.6).toFixed(3);
    vrBeam1.style.transform = `rotate(-3deg) translateX(${beamSway.toFixed(1)}px)`;
    vrBeam3.style.transform = `rotate(3deg) translateX(${(-beamSway).toFixed(1)}px)`;

    // ---- PHASE 4 (5-9s): logo CRESCENDO reveal — 5 parts in sequence ----
    //  5.0 → 5.4 · ring burst + opener glow (anticipation)
    //  5.4 → 6.0 · 1) HERMITES        (anneau de figures)
    //  6.0 → 6.6 · 2) BLASON          (forme du bouclier, désaturée)
    //  6.6 → 7.2 · 3) CROIX + ÉTOILES (le bouclier prend ses couleurs)
    //  7.2 → 7.8 · 4) RONDS OUTER     (anneau doré extérieur)
    //  7.8 → 8.4 · 5) ÉCRITURES       (GENECH + ENTENTE SPORTIVE + 1971)
    //  8.4 → 9.0 · consolidation + breath

    function partOp(rt, start, dur) {
      if (rt < start) return 0;
      if (rt < start + dur) return easeInOut((rt - start) / dur);
      return 1;
    }
    function partFlash(rt, start) {
      // Brief brightness/drop-shadow spike for 0.25s after each part lands
      const dt = rt - start;
      if (dt < 0 || dt > 0.45) return 0;
      return Math.sin((dt / 0.45) * Math.PI);
    }

    const opH = partOp(rt, 5.4, 0.6);
    const opS = partOp(rt, 6.0, 0.6);
    const opC = partOp(rt, 6.6, 0.6);
    const opO = partOp(rt, 7.2, 0.6);
    const opT = partOp(rt, 7.8, 0.6);

    lpHermits.style.opacity = opH;
    lpShield.style.opacity  = opS;
    lpCross.style.opacity   = opC;
    lpOuter.style.opacity   = opO;
    lpText.style.opacity    = opT;

    // Brief gold flash on each part as it crosses its mid-fade
    const flashH = partFlash(rt, 5.55);
    const flashS = partFlash(rt, 6.15);
    const flashC = partFlash(rt, 6.75);
    const flashO = partFlash(rt, 7.35);
    const flashT = partFlash(rt, 7.95);
    function flashFilter(amount, isShield) {
      if (amount <= 0) return isShield ? 'saturate(0.05) brightness(0.55)' : '';
      const bri = 1 + amount * 0.8;
      const shadow = `drop-shadow(0 0 ${(amount * 18).toFixed(0)}px rgba(245,235,180,${(amount * 0.85).toFixed(2)}))`;
      if (isShield) {
        // Keep desat but flash brightens briefly
        return `saturate(0.05) brightness(${(0.55 + amount * 0.5).toFixed(2)}) ${shadow}`;
      }
      return `brightness(${bri.toFixed(2)}) ${shadow}`;
    }
    lpHermits.style.filter = flashFilter(flashH, false);
    lpShield.style.filter  = flashFilter(flashS, true);
    lpCross.style.filter   = flashFilter(flashC, false);
    lpOuter.style.filter   = flashFilter(flashO, false);
    lpText.style.filter    = flashFilter(flashT, false);

    // Ring burst at 5.0-5.4 (anticipation before parts appear)
    let logoScale;
    if (rt < 5.0) {
      logoScale = 0;
      prRing.style.opacity = 0;
      prLogoGlow.style.opacity = 0;
    } else if (rt < 5.4) {
      // Ring expansion
      const rk = clamp((rt - 5.0) / 0.4, 0, 1);
      prRing.style.opacity = lerp(0.85, 0, rk);
      const rScale = lerp(0.3, 9.0, easeOut(rk));
      prRing.style.transform = `scale(${rScale.toFixed(2)})`;
      logoScale = lerp(0.0, 0.25, rk);
      prLogoGlow.style.opacity = rk * 0.4;
    } else if (rt < 9.0) {
      // Wrap grows continuously while parts fade in
      logoScale = lerp(0.25, 1.0, easeInOut((rt - 5.4) / 3.6));
      prRing.style.opacity = 0;
      prLogoGlow.style.opacity = lerp(0.4, 0.7, (rt - 5.4) / 3.6);
    } else {
      // Apogee + breath
      const breath = 1 + Math.sin((rt - 9.0) * 1.6) * 0.012;
      logoScale = breath;
      prLogoGlow.style.opacity = 0.65 + Math.sin(rt * 2.2) * 0.06;
      prRing.style.opacity = 0;
    }

    // Compute a "global logo opacity" approximation for the reflection + drop-shadow scaling
    const logoOp = Math.max(opH, opS, opC, opO, opT);
    prLogoWrap.style.transform = `scale(${logoScale.toFixed(3)})`;

    // ---- Reflection appears only once the logo is fully assembled (t' ≥ 8.4) ----
    if (rt >= 8.4) {
      const refK = clamp(norm(rt, 8.4, 9.2), 0, 1);
      const skew = Math.sin(t * 1.2) * 1.5;
      vrReflection.style.opacity = refK;
      vrReflection.style.transform = `scale(${logoScale.toFixed(3)}) skewX(${skew.toFixed(2)}deg)`;
      vrHorizon.style.opacity = refK;
    } else {
      vrReflection.style.opacity = 0;
      vrHorizon.style.opacity = 0;
    }

    // ---- Gold particles (orbit, apogee only) ----
    if (rt >= 7.0 && rt < 12.0) {
      const partOp = clamp(norm(rt, 7.0, 8.0), 0, 1) * (1 - norm(rt, 11.0, 12.0));
      prParticles.style.opacity = partOp;
      const cx = 540;
      const cy = 1920 * 0.45;
      prParticleNodes.forEach((p, i) => {
        const ang   = parseFloat(p.dataset.ang);
        const r     = parseFloat(p.dataset.r) * Math.min(1, logoScale);
        const speed = parseFloat(p.dataset.speed);
        const life  = parseFloat(p.dataset.life);
        const a = ang + (rt - 7.0) * speed * 0.9;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.75;
        const flicker = 0.7 + Math.sin((rt + life * 6) * 4) * 0.3;
        p.style.transform = `translate(${(x - 540).toFixed(1)}px, ${(y - 960).toFixed(1)}px)`;
        p.style.opacity = flicker;
      });
    } else {
      prParticles.style.opacity = 0;
    }

    // ---- ENTENTE SPORTIVE text (apogee, around t' 10s) ----
    if (rt >= 10.0 && rt < 12.0) {
      const k = clamp(norm(rt, 10.0, 10.5), 0, 1);
      prText.style.opacity = k;
      prText.style.clipPath = `inset(${lerp(100, 0, easeOut(k))}% 0 0 0)`;
    } else {
      prText.style.opacity = 0;
    }

    // ---- Final fade after t' 12 ----
    if (rt >= 12.0) {
      finalFade.style.opacity = clamp(norm(rt, 12.0, 12.5), 0, 1);
    } else {
      finalFade.style.opacity = 0;
    }
  }

  function hideFinalTexts() {
    finalGenech.style.opacity = 0;
    finalES.style.opacity = 0;
    final1971.style.opacity = 0;
  }

  // =========================================================================
  // MASTER UPDATE LOOP
  // =========================================================================
  let masterT = 0;
  let lastWall = performance.now();
  let lastScreenLabelUpdate = -1;

  function update() {
    const now = performance.now();
    const dt = (now - lastWall) / 1000;
    lastWall = now;

    // Master clock with freeze handling
    const inFreeze = (masterT >= FREEZE_VT && masterT < FREEZE_VT + FREEZE_DUR);
    if (inFreeze) {
      if (!video.paused) video.pause();
      if (video.duration && Math.abs(video.currentTime - FREEZE_VT) > 0.05) {
        try { video.currentTime = FREEZE_VT; } catch (e) {}
      }
      if (!isPaused) masterT += dt;
    } else if (video.duration && !isNaN(video.duration)) {
      if (!video.paused && video.currentTime < video.duration - 0.05) {
        masterT = masterTimeFromVideo(video.currentTime);
      } else if (!isPaused) {
        masterT += dt;
      }
    } else if (!isPaused) {
      masterT += dt;
    }

    if (masterT >= DURATION) {
      masterT = DURATION;
      isPaused = true;
      playPause.textContent = '▶';
    }

    const t = videoTimeFromMaster(masterT);

    // Apply all systems
    // 1. Video color grade + camera
    const cam = cameraForTime(t);
    video.style.filter = gradeForTime(t);
    video.style.transform = `scale(${cam.s}) translate(${cam.tx}px, ${cam.ty}px) rotate(${cam.rot}deg)`;

    // 2. Color tint overlay
    const tint = tintForTime(t);
    colorTint.style.background = tint.bg;
    colorTint.style.opacity = tint.op;

    // 3. Black fade (intro + P4→P5) + dissolve blinks
    blackFade.style.opacity = Math.max(blackFadeForTime(t), blinkAmount(t));

    // 4. Flash + chroma glitch
    flash.style.opacity = flashForTime(t);
    chromaGl.style.opacity = chromaForTime(t);

    // 5. Situational overlays
    updateSituational(t);

    // 6. Kinetic text
    updateKineticText(t);

    // 6b. Broadcast HUD + ball tracers + swipes + glitch slices
    updateOverlays(t);

    // 7. Reveal layer (P5)
    updateReveal(t);

    // 8. Apply chroma filter to video at impact moments
    const chromaA = chromaForTime(t);
    if (chromaA > 0.3) {
      if (!video.dataset.glitched) {
        video.style.filter += ' url(#chromaGlitchFilter)';
        video.dataset.glitched = '1';
      }
    } else {
      delete video.dataset.glitched;
    }

    // UI updates
    if (Math.floor(masterT) !== lastScreenLabelUpdate) {
      lastScreenLabelUpdate = Math.floor(masterT);
      frame.dataset.screenLabel = 'Genech Teaser ' + formatTC(masterT);
      tcLabel.textContent = formatTC(masterT) + ' / 01:17';
      seek.value = masterT;
      updatePhaseButtons(masterT);
    }

    requestAnimationFrame(update);
  }

  // =========================================================================
  // CONTROLS
  // =========================================================================
  let isPaused = true;
  function play() {
    isPaused = false;
    if (masterT >= DURATION - 0.1) { masterT = 0; }
    const vt = videoTimeFromMaster(masterT);
    if (video.duration && vt < video.duration) {
      try { video.currentTime = vt; } catch (e) {}
      if (!(masterT >= FREEZE_VT && masterT < FREEZE_VT + FREEZE_DUR)) {
        video.play().catch(()=>{});
      }
    }
    playPause.textContent = '⏸';
    try { localStorage.setItem('genech-playing', '1'); } catch (e) {}
  }
  function pause() {
    isPaused = true;
    video.pause();
    playPause.textContent = '▶';
    try { localStorage.setItem('genech-playing', '0'); } catch (e) {}
  }
  function seekTo(t) {
    masterT = clamp(t, 0, DURATION);
    const vt = videoTimeFromMaster(masterT);
    if (video.duration && vt < video.duration) {
      try { video.currentTime = vt; } catch (e) {}
    }
    if (masterT >= FREEZE_VT && masterT < FREEZE_VT + FREEZE_DUR) {
      if (!video.paused) video.pause();
    } else if (!isPaused && video.paused) {
      video.play().catch(()=>{});
    }
    try { localStorage.setItem('genech-time', String(masterT)); } catch (e) {}
  }

  playPause.addEventListener('click', () => {
    if (isPaused) play(); else pause();
  });
  seek.addEventListener('input', (e) => {
    seekTo(parseFloat(e.target.value));
  });
  phaseJump.addEventListener('click', (e) => {
    const t = e.target.dataset.t;
    if (t !== undefined) seekTo(parseFloat(t));
  });
  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
  });
  hideUI.addEventListener('click', () => {
    controls.classList.toggle('hidden');
  });
  // Click anywhere on the frame to play/pause (except controls)
  frame.addEventListener('click', () => {
    if (isPaused) play(); else pause();
  });
  // Keyboard: space to play/pause, ←/→ to seek
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); if (isPaused) play(); else pause(); }
    else if (e.code === 'ArrowLeft')  seekTo(masterT - 1);
    else if (e.code === 'ArrowRight') seekTo(masterT + 1);
    else if (e.code === 'KeyM') { video.muted = !video.muted; muteBtn.textContent = video.muted ? '🔇' : '🔊'; }
    else if (e.code === 'KeyH') controls.classList.toggle('hidden');
  });

  function updatePhaseButtons(t) {
    const buttons = phaseJump.querySelectorAll('button');
    buttons.forEach(b => {
      const bt = parseFloat(b.dataset.t);
      b.classList.toggle('active', t >= bt && t < bt + 12);
    });
  }

  // =========================================================================
  // STAGE SCALING
  // =========================================================================
  function scaleStage() {
    const vh = window.innerHeight - 90; // controls
    const vw = window.innerWidth - 40;
    const scale = Math.min(vh / 1920, vw / 1080, 1);
    frame.style.transform = `scale(${scale})`;
  }
  window.addEventListener('resize', scaleStage);
  scaleStage();

  // =========================================================================
  // VIDEO READY
  // =========================================================================
  video.muted = true; // start muted to allow autoplay
  video.addEventListener('loadedmetadata', () => {
    // Restore last position
    try {
      const t = parseFloat(localStorage.getItem('genech-time') || '0');
      if (!isNaN(t) && t > 0 && t < DURATION - 0.5) {
        seekTo(t);
      }
    } catch (e) {}
  });
  video.addEventListener('ended', () => {
    // Video ended — but timeline continues to 73s
    // Master clock will increment via dt
  });

  // Initial state
  blackFade.style.opacity = 1;
  pause();
  // Auto-play after a moment (if user allows)
  requestAnimationFrame(update);

  // Expose for tweaks panel
  window.GENECH = {
    play, pause, seekTo, video, getT: () => masterT,
    setMuted: (m) => { video.muted = m; muteBtn.textContent = m ? '🔇' : '🔊'; },
  };

})();
