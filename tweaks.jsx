/* Tweaks panel for Genech Teaser */
const { useState, useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "grainIntensity": 1.0,
  "vignetteIntensity": 1.0,
  "showGoldParticles": true,
  "showLensFlare": true,
  "showLightLeak": true,
  "showFog": true,
  "logoSize": 620,
  "musicMuted": true,
  "speed": 1.0
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  // Apply tweaks live
  useEffect(() => {
    const grain = document.getElementById('grain');
    const vignette = document.getElementById('vignette');
    if (grain)    grain.style.setProperty('--tweak-grain', t.grainIntensity);
    if (vignette) vignette.style.setProperty('--tweak-vig', t.vignetteIntensity);
    document.documentElement.style.setProperty('--tw-grain', t.grainIntensity);
    document.documentElement.style.setProperty('--tw-vig', t.vignetteIntensity);

    const lens = document.getElementById('lensFlare');
    const leak = document.getElementById('lightLeak');
    const fog  = document.getElementById('fog');
    const parts = document.getElementById('revealParticles');
    if (lens) lens.style.visibility = t.showLensFlare ? 'visible' : 'hidden';
    if (leak) leak.style.visibility = t.showLightLeak ? 'visible' : 'hidden';
    if (fog)  fog.style.visibility  = t.showFog ? 'visible' : 'hidden';
    if (parts) parts.style.visibility = t.showGoldParticles ? 'visible' : 'hidden';

    const logoGhost = document.getElementById('logoGhost');
    const logoFull  = document.getElementById('logoFull');
    if (logoGhost) { logoGhost.style.width = t.logoSize + 'px'; logoGhost.style.height = t.logoSize + 'px'; }
    if (logoFull)  { logoFull.style.width  = t.logoSize + 'px'; logoFull.style.height  = t.logoSize + 'px'; }

    const v = document.getElementById('video');
    if (v) {
      v.muted = t.musicMuted;
      v.playbackRate = t.speed;
    }
  }, [t]);

  return (
    <TweaksPanel title="Tweaks · Genech Teaser">
      <TweakSection title="Texture">
        <TweakSlider label="Grain"    value={t.grainIntensity}    onChange={v => setTweak('grainIntensity', v)}    min={0} max={2} step={0.05}/>
        <TweakSlider label="Vignette" value={t.vignetteIntensity} onChange={v => setTweak('vignetteIntensity', v)} min={0} max={1.5} step={0.05}/>
      </TweakSection>

      <TweakSection title="Atmosphère">
        <TweakToggle label="Lens flare anamorphique" value={t.showLensFlare} onChange={v => setTweak('showLensFlare', v)}/>
        <TweakToggle label="Light leak chaud"         value={t.showLightLeak} onChange={v => setTweak('showLightLeak', v)}/>
        <TweakToggle label="Fumée volumétrique"       value={t.showFog} onChange={v => setTweak('showFog', v)}/>
        <TweakToggle label="Particules dorées"        value={t.showGoldParticles} onChange={v => setTweak('showGoldParticles', v)}/>
      </TweakSection>

      <TweakSection title="Logo & playback">
        <TweakSlider label="Taille logo (px)" value={t.logoSize} onChange={v => setTweak('logoSize', v)} min={400} max={820} step={10}/>
        <TweakSlider label="Vitesse" value={t.speed} onChange={v => setTweak('speed', v)} min={0.25} max={2} step={0.05}/>
        <TweakToggle label="Couper le son source" value={t.musicMuted} onChange={v => setTweak('musicMuted', v)}/>
      </TweakSection>

      <TweakSection title="Sauter à une phase">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:6}}>
          <TweakButton label="P1 · Intro"      onClick={() => window.GENECH?.seekTo(0)}/>
          <TweakButton label="P2 · Montée"     onClick={() => window.GENECH?.seekTo(12)}/>
          <TweakButton label="P3 · Action"     onClick={() => window.GENECH?.seekTo(25)}/>
          <TweakButton label="P4 · Résolution" onClick={() => window.GENECH?.seekTo(41)}/>
          <TweakButton label="P5 · Reveal fumigène" onClick={() => window.GENECH?.seekTo(59.5)}/>
          <TweakButton label="P5 · Logo émerge"     onClick={() => window.GENECH?.seekTo(64.5)}/>
          <TweakButton label="P5 · Textes"          onClick={() => window.GENECH?.seekTo(70)}/>
          <TweakButton label="P6 · Outro"           onClick={() => window.GENECH?.seekTo(74)}/>
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

const host = document.getElementById('tweaks-host');
ReactDOM.createRoot(host).render(<TweaksApp/>);
