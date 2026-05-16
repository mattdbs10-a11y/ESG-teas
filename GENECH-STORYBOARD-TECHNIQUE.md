# GENECH ENTENTE SPORTIVE
## DOSSIER DE POST-PRODUCTION — VOLUME II
### Storyboard Technique Complet · Niveau Agence Créative

---

> **Référence :** Film Angers SCO (61.72s · 24fps · 34 scènes)
> **Cible :** Genech Entente Sportive · 1080×1920px · 73.35s · 24fps · 9:16
> **Ratio d'échelle :** ×1.1884 (durées Angers → Genech)

---

## LÉGENDE TECHNIQUE

```
TC        = Timecode MM:SS.FF
f         = Frames à 24fps
IN / OUT  = Transition entrante / sortante du plan
SFX       = Sound Effect
BG        = Background
FG        = Foreground
α         = Opacité (0–100%)
Ease IO   = Ease In + Out (courbe de Bézier symétrique)
```

---

## MASTER COLOR GRADING GLOBAL

Applicable sur toute la timeline avant tout effet.

### LUT de base

```
Type        : Custom S-Log2 → Rec.709
Saturation  : −15 global
Hue Offset  : −5° (léger virage vers le teal/bleu)
Lift (RGB)  : R −0.03 / G −0.04 / B −0.02  → noirs bleutés
Gamma       : +0.02 uniforme
Gain        : −0.08 (highlights légèrement comprimés)
S-Curve     : Blacks −20 pts / Whites −15 pts (courbe en S modérée)
```

### Saturation sélective (HSL)

```
Jaune/Or    : Hue 45–65°  → Saturation +35, Luminance +5
Bleu royal  : Hue 210–240° → Saturation +12
Vert herbe  : Hue 100–140° → Saturation −20 (désaturer l'herbe)
Rouge       : Hue 355–15°  → Saturation −10
Skin tones  : Hue 15–40°   → Hue Rotation +4° (plus chaud)
```

### Overlays permanents (toutes phases)

```
LAYER A — Grain 35mm
  Taille      : 1.2px
  α           : 15%
  Mode fusion : Overlay
  Distribution: Luma-weighted (plus fort dans les midtones)

LAYER B — Vignette
  Type        : Circulaire
  Rayon       : 65% du cadre
  Force       : 0.5
  Mode fusion : Multiply
  Couleur     : #050C1E (bleu nuit — jamais noir pur)

LAYER C — Aberration chromatique
  Décalage R  : +0.4px X, −0.2px Y
  Décalage B  : −0.4px X, +0.2px Y
  α           : 20% repos / 80% aux impacts (keyframed)
  Mode fusion : Normal

LAYER D — Bruit de scan
  Type        : Lignes horizontales fines (1px, espacement 4px)
  α           : 3% permanent (quasi invisible mais présent)
  Mode fusion : Overlay
```

---

## TYPOGRAPHIE — SYSTÈME GLOBAL

### Polices

```
TITRE PRINCIPAL  : Bebas Neue  · Regular · tracking +200
TITRE SECONDAIRE : Bebas Neue  · Regular · tracking +150
CORPS / DATE     : Montserrat  · Light   · tracking +400
SLOGAN           : Montserrat  · ExtraBold · tracking +80
```

### Couleurs texte

```
Blanc pur   : #FFFFFF  → titres principaux
Or club     : #F5C518  → accents, "ENTENTE SPORTIVE"
Gris perle  : #CCCCCC  → dates, sous-titres
Or sombre   : #B8960A  → textes en superposition lumineuse
```

### Animations — Bibliothèque des mouvements

```
ANIM_01 — MASQUE COULISSANT HORIZONTAL
  Frame 0   : Masque X = −120px (texte caché)
  Frame 12  : Masque X = 0px (texte révélé) · Ease IO
  Frame 70  : Masque X = 0px (stable)
  Frame 80  : Opacity 0% · fade out 10f

ANIM_02 — TRACKING EXPANSION
  Frame 0   : Tracking 0 · Opacity 0%
  Frame 8   : Tracking +150 · Opacity 100% · Ease IO
  Frame 72  : Tracking +200 · Opacity 80%
  Frame 82  : Tracking +600 · Opacity 0% (dispersion)

ANIM_03 — MASQUE VERTICAL (bas → haut)
  Frame 0   : Masque Y = +80px (texte caché sous)
  Frame 12  : Masque Y = 0px · Ease IO
  Frame 80  : Masque Y = 0px (stable)

ANIM_04 — GLITCH TEXTE (pour impact)
  Frame 0   : Position normale
  Frame 1   : X +8px · Scale 102%
  Frame 2   : X −6px · Scale 98%
  Frame 3   : X 0px  · Scale 100% (retour)
  RGB split sur texte : ±4px pendant 2 frames

ANIM_05 — FADE PROGRESSIF
  Frame 0   : Opacity 0%
  Frame 16  : Opacity 100% · Ease In (logarithmique)
  Frame 80  : Opacity 100%
  Frame 96  : Opacity 0% · Ease Out

ANIM_06 — SCALE REVEAL (pour logo)
  Frame 0   : Scale 85% · Opacity 0% · Blur 8px
  Frame 20  : Scale 100% · Opacity 100% · Blur 0px · Ease IO
```

---

## EFFETS CAMÉRA NUMÉRIQUES — BIBLIOTHÈQUE

```
CAM_01 — PUSH IN LENT
  Scale start : 100%  →  Scale end : 108%
  Durée       : durée totale du plan
  Ease        : Ease In (démarre doucement, accélère à la fin)

CAM_02 — PULL OUT LENT
  Scale start : 108%  →  Scale end : 100%
  Durée       : durée totale du plan
  Ease        : Ease Out

CAM_03 — ZOOM PUNCH IMPACT
  Frame 0   : Scale 100%
  Frame 4   : Scale 112% · Ease In
  Frame 12  : Scale 108% · Ease Out (reste légèrement zoomé)

CAM_04 — SHAKE SUBTIL (vibration organique)
  Amplitude X : ±3px · Amplitude Y : ±2px
  Fréquence   : 12 Hz (aléatoire, Wiggle AE)
  Durée       : 6–12 frames aux impacts

CAM_05 — DRIFT LENT (hand-held simulé)
  Position    : Wiggle(0.3, 4) — très lent, amplitude 4px
  Rotation    : Wiggle(0.2, 0.3°)
  Applicable  : plans contemplatifs uniquement

CAM_06 — TILT UP NUMÉRIQUE
  Position Y start : +40px  →  Position Y end : 0px
  Durée            : durée totale du plan · Ease IO

CAM_07 — PAN HORIZONTAL
  Position X start : −30px  →  Position X end : +30px
  Durée            : durée totale du plan · Ease IO
```

---

## EFFETS DE LUMIÈRE — BIBLIOTHÈQUE

```
LUZ_01 — LENS FLARE ANAMORPHIQUE
  Type     : Horizontal streak (bleu-blanc)
  Longueur : 60–80% de la largeur du cadre
  α        : 20–35%
  Mode     : Add (Screen)
  Trigger  : Plans contre-jour / highlight fort

LUZ_02 — LIGHT LEAK (fuite lumière)
  Type     : Tache chaude orange-ambrée
  Position : Coin supérieur (aléatoire)
  α        : 15–25%
  Mode     : Screen
  Durée    : Plan entier, keyframé entre 0 et max α

LUZ_03 — GLOW DORÉ (halo or)
  Couleur  : #F5C518
  Rayon    : 8–15px selon l'élément
  Seuil    : 60%
  Intensité: 0.6–1.2
  Mode     : Add

LUZ_04 — LIGHT SWEEP (balayage)
  Direction : 90° (gauche → droite)
  Width     : 0.25
  Intensity : 60%
  Sweep     : de X=−600px à X=+600px · vitesse linéaire

LUZ_05 — LIGHT RING (anneau expansif)
  Forme    : Ellipse stroke, épaisseur 3px
  Couleur  : #F5C518
  Scale    : 0% → 250% · durée 24 frames
  Opacity  : 80% → 0% (disparaît en s'expansant)
  Mode     : Add

LUZ_06 — VIGNETTE FLASH (éclat intérieur)
  Type     : Vignette inverse (centre lumineux)
  Couleur  : #FFFFFF
  α        : 0% → 100% → 0% · durée 4 frames (flash)
  Mode     : Screen

LUZ_07 — CONTRE-JOUR SYNTHÉTIQUE
  Sun position : coin supérieur
  Halo radius  : 120px
  Couleur      : #FFF5D0 (blanc chaud)
  α            : 40%
  Mode         : Screen
```

---

## TEXTURES — BIBLIOTHÈQUE

```
TEX_01 — GRAIN 35MM
  Taille particule : 1.2px · Monochrome
  Distribution     : Gaussienne
  α                : 12–25% selon phase

TEX_02 — BRUIT NUMÉRIQUE (digital noise)
  Type   : RVB bruité
  Taille : 1px
  α      : 5–8%
  Mode   : Overlay (s'intègre dans les midtones)

TEX_03 — TEXTURE BÉTON / MÉTAL (pour le logo)
  Type   : Normal map métallique brossé
  α      : 15%
  Mode   : Multiply
  Source : Texture stock haute résolution métal brossé #303030

TEX_04 — POUSSIÈRE / PARTICULES
  Élément : Points blancs 1–3px, déplacement aléatoire
  Density : 30–80 particules selon moment
  Vitesse : 0.2–0.5px/frame ascendant
  α        : 40–70% individuel

TEX_05 — FUMÉE VOLUMÉTRIQUE
  Type    : Fractal noise animé
  Couleur : #1E2B4A (bleu sombre)
  α       : 6–12%
  Mode    : Screen
  Échelle : Très large (slow movement, evolutive)

TEX_06 — SCAN LINES (lignes TV)
  Épaisseur : 1px blanc
  Espacement: 4px
  α          : 3% permanent · 15% aux glitchs
  Mode       : Overlay
```

---

---

# STORYBOARD TECHNIQUE — PLAN PAR PLAN

---

## ══════════════════════════════════
## PHASE 1 — INTRO [00:00.00 → 00:10.49]
## Durée : 10.49s · 2 plans · Atmosphère
## ══════════════════════════════════

---

### ▶ PLAN P01 — [00:00.00 → 00:06.33] · 152 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                   [NOIR ABSOLU → TEXTURE]                       │
│                                                                 │
│           Macro herbe mouillée · Profondeur de champ            │
│                    Flou bokeh f/1.4                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :**
- Frames 1–36 (1.5s) : Noir pur #000000 — silence total
- Frames 37–72 (1.5s) : Fondu vers macro herbe/ballon — très flou (Blur 20px → 8px progressif)
- Frames 73–152 (3.3s) : Texture pleine — herbe humide, reflets dorés, profondeur 35mm

**TRANSITION ENTRANTE :** Fondu au noir · 36 frames · Ease In logarithmique

**TRANSITION SORTANTE :** Dissolve organique · 15 frames · Ease IO

**MOUVEMENT CAMÉRA :** CAM_01 Push In lent · Scale 100% → 104% sur 152f

**VITESSE :** 40% (slowmo) · Speed ramping : 30% @ frame 1 → 45% @ frame 152

**COLOR GRADING :**
```
Phase       : Noirs dominants → émergence progressive de la couleur
Lift        : −0.08 (noirs très profonds au départ)
Saturation  : −30 frame 1 → −15 frame 152 (progressif)
Température : −200K (froid au début, se réchauffe)
Grain       : TEX_01 · α 8% → 18% progressif
```

**OVERLAYS :**
```
F01  TEX_01 Grain    · α 8%  (montée progressive)
F36  TEX_05 Fumée    · α 6%  (entrée depuis bas gauche)
F60  LUZ_02 LightLeak· α 12% (coin supérieur, très subtil)
```

**EFFETS DE LUMIÈRE :** Aucun — intentionnel. Pureté du noir initial.

**TEXTURES :** TEX_01 Grain + TEX_05 Fumée volumétrique subtile

**TYPOGRAPHIE :** AUCUNE sur ce plan

**SOUND DESIGN :**
```
F01  : Silence absolu · durée exacte 1.5s
F37  : Sub-drone 38Hz · entrée de −∞ dB → −28dB · attack 1.5s
F60  : Réverbération de stade filtrée · HPF 2.5kHz · α −32dB
F100 : Sub-drone monte à −22dB · léger vibrato 0.3Hz
```

---

### ▶ PLAN P02 — [00:06.33 → 00:10.49] · 100 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                 │
│         [PLAN LARGE — TERRAIN GENECH — CONTRE-JOUR]             │
│                                                                 │
│    Stade/terrain en silhouette · Soleil bas horizon             │
│         Ligne de but ou butte de corner visible                 │
│                                                                 │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :**
- Terrain vu en plan d'ensemble · Joueurs en silhouette ou absent
- Lumière de golden hour · Herbe brillante · Brouillard de fond optionnel
- Présence discrète d'éléments club (but, panneaux, etc.)

**TRANSITION ENTRANTE :** Dissolve depuis P01 · 15 frames · Ease IO

**TRANSITION SORTANTE :** Cut direct vers P03

**MOUVEMENT CAMÉRA :** CAM_05 Drift lent + CAM_07 Pan horizontal −30px → 0px sur 100f

**VITESSE :** 60% (slow motion modéré)

**COLOR GRADING :**
```
Température : +300K (chaud — golden hour orange/ambre)
Lift bleu   : +0.02B (sépare les noirs vers le bleu)
Highlights  : −10 (ne pas brûler le ciel)
Saturation  : −10 global / Jaune +40 sélectif (herbe et ciel)
Contraste   : +15 (profondeur cinéma)
```

**OVERLAYS :**
```
PERM  TEX_01 Grain    · α 18%
PERM  LUZ_01 Lens Flare anamorphique · α 28% · position soleil
      LUZ_02 Light Leak coin sup droite · α 20%
      TEX_05 Fumée légère horizon bas · α 8%
```

**EFFETS DE LUMIÈRE :**
- LUZ_01 Flare anamorphique centré sur le soleil (horizontal, bleu-blanc)
- LUZ_07 Contre-jour synthétique · α 35% si manque de lumière dans le rush

**TEXTURES :** TEX_01 + TEX_05 horizon

**TYPOGRAPHIE :** AUCUNE — espace visuel libre

**SOUND DESIGN :**
```
F01  : Sub-drone stable −22dB
F01  : Début musique principale · fade in depuis −∞ · 48f pour atteindre −18dB
F20  : Ambiance stade lointaine · HPF 3kHz · −28dB
F80  : Légère montée drone vers −18dB · anticipation
```

---

## ══════════════════════════════════
## PHASE 2 — BUILD [00:10.49 → 00:22.92]
## Durée : 12.43s · 7 plans · Identité montante
## ══════════════════════════════════

---

### ▶ PLAN P03 — [00:10.49 → 00:12.34] · 44 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    ████████████████████                         │
│                    █                  █                         │
│                    █   MAILLOT MACRO  █  ◄─ ECU COUSU          │
│                    █                  █                         │
│                    ████████████████████                         │
│                                                                 │
│           Texture tissu · Écusson Genech en gros plan           │
│                    Bokeh f/1.8 · Profond                        │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Macro extrême sur le maillot bleu marine. L'écusson Genech doit être visible, net, centré. Tissu maillot en texture premier plan + fond flou.

**TRANSITION ENTRANTE :** Cut direct depuis P02

**TRANSITION SORTANTE :** Hard cut vers P04

**MOUVEMENT CAMÉRA :** CAM_01 Push In · Scale 100% → 106% sur 44f · Ease In

**VITESSE :** 80% (léger ralenti)

**COLOR GRADING :**
```
Boost bleu  : Saturation sélective bleu +20
Or écusson  : Saturation sélective jaune +40 / Luminance +8
Lift        : −0.06
Vignette    : Force 0.6 (encadrer l'écusson)
```

**OVERLAYS :**
```
TEX_01 Grain · α 18%
TEX_03 Métal brossé sur écusson · α 12% · Mode Multiply
LUZ_03 Glow doré sur les dorures de l'écusson · α 30%
```

**EFFETS DE LUMIÈRE :** LUZ_03 Glow or #F5C518 sur le bord de l'écusson

**TEXTURES :** TEX_01 + TEX_03 sur zone écusson uniquement (masque)

**TYPOGRAPHIE :** AUCUNE

**SOUND DESIGN :**
```
F01  : Musique −18dB stable
F01  : SFX tissu/friction · −30dB très discret
F44  : Whoosh discret 4f (anticipation du prochain cut) · −24dB
```

---

### ▶ PLAN P04 — [00:12.34 → 00:14.56] · 53 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│         [JOUEUR DOS À LA CAMÉRA — PLAN MOYEN]                  │
│                                                                 │
│      Regard vers le terrain · Maillot Genech visible            │
│         Numéro dans le dos · Silhouette forte                   │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Joueur dos caméra, maillot Genech, regard horizon. Plan moyen (taille → tête). Posture de défi. Fond : terrain flou ou stade.

**TRANSITION ENTRANTE :** Hard cut depuis P03

**TRANSITION SORTANTE :** Hard cut vers P05

**MOUVEMENT CAMÉRA :** CAM_02 Pull Out lent · Scale 106% → 100% sur 53f

**VITESSE :** 70% (slow motion marqué)

**COLOR GRADING :**
```
Contrejour renforcé : Highlights −20 / Shadows −15
Silhouette          : Lift −0.08 (assombrir le sujet)
Température         : +200K (ambiance chaleureuse derrière)
Saturation globale  : −15
```

**OVERLAYS :**
```
TEX_01 Grain · α 20%
LUZ_01 Lens Flare sur épaule/nuque si contre-jour · α 22%
LUZ_07 Contre-jour synthétique en halo · α 30%
```

**EFFETS DE LUMIÈRE :** LUZ_07 contre-jour synthétique · Halo autour de la silhouette

**TYPOGRAPHIE :**
```
Apparition "GENECH" @ frame 20
  Police   : Bebas Neue · 96px · #FFFFFF · tracking +200
  Position : Centré bas · Y +320px du centre
  ANIM_01 Masque coulissant · durée 12f · Ease IO
  Disparition : fade out 8f @ frame 48
```

**SOUND DESIGN :**
```
F01  : Musique −16dB (légère montée)
F20  : Stinger subtil dans la musique (accompagne l'apparition du texte)
```

---

### ▶ PLAN P05 — [00:14.56 → 00:16.04] · 36 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         [INSERT ULTRA-SERRÉ — CRAMPONS / HERBE]                │
│                                                                 │
│    Crampons posés sur l'herbe · Macro · Profondeur de champ    │
│       Herbe mouillée · Détail matière · Silence visuel         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Insert macro extrême · Crampons ou semelles sur herbe verte mouillée. Profondeur de champ maximale. Plan de "matière".

**TRANSITION ENTRANTE :** Hard cut depuis P04

**TRANSITION SORTANTE :** Hard cut vers P06

**MOUVEMENT CAMÉRA :** CAM_06 Tilt Up numérique · +20px → 0px · 36f · Ease IO

**VITESSE :** 50% (slow motion fort)

**COLOR GRADING :**
```
Désaturation herbe  : Vert Saturation −25 (herbe neutre, pas criarde)
Boost matière       : Contraste +20 / Clarté +15
Noir crampon        : Lift −0.10 (matière sombre profonde)
```

**OVERLAYS :**
```
TEX_01 Grain · α 22%
TEX_04 Poussière · α 25% · density 20 pts
```

**EFFETS DE LUMIÈRE :** Aucun — plan de matière pure

**TYPOGRAPHIE :** AUCUNE

**SOUND DESIGN :**
```
F01  : Musique −16dB
F01  : SFX herbe/crampons · bruit de contact · −24dB · court (6f)
```

---

### ▶ PLAN P06 — [00:16.04 → 00:17.83] · 43 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│       [PLAN MOYEN — GESTE TECHNIQUE / JONGLE / PASSE]          │
│                                                                 │
│    Joueur de profil · Geste football · Corps en mouvement      │
│           Ballon en jeu · Fond de terrain flou                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Plan moyen d'un geste technique — jongle, contrôle orienté, frappe de précision. Le sujet doit être coupé à la taille. Fond flou (terrain ou tribunes).

**TRANSITION ENTRANTE :** Hard cut depuis P05

**TRANSITION SORTANTE :** Hard cut vers P07 (tension montante)

**MOUVEMENT CAMÉRA :** CAM_05 Drift léger · Wiggle(0.4, 3) · très organique

**VITESSE :** 65%

**COLOR GRADING :**
```
Standard global + boost contrejour
Highlights skin : +5 (joueur lisible)
```

**OVERLAYS :**
```
TEX_01 Grain · α 18%
LUZ_02 Light Leak coin · α 15%
```

**TYPOGRAPHIE :** AUCUNE

**SOUND DESIGN :**
```
F01  : Musique −14dB (montée progressive)
F30  : SFX contact ballon · impact cuir · −18dB · 3f
```

---

### ▶ PLAN P07 — [00:17.83 → 00:18.56] · 18 frames

```
┌──────────────────────────────────┐
│  [FLASH / INSERT COURT — 0.74s]  │
│  Plan serré visage · regard cam  │
│  Yeux du joueur · Détermination  │
└──────────────────────────────────┘
```

**CONTENU :** Plan très serré sur le visage / les yeux du joueur. Regard caméra. Intense. Court.

**TRANSITION ENTRANTE :** Hard cut (instantané)

**TRANSITION SORTANTE :** Hard cut vers P08

**MOUVEMENT CAMÉRA :** CAM_03 Zoom Punch · Scale 100% → 108% · 4f

**VITESSE :** 100% (temps réel — choc)

**COLOR GRADING :**
```
Contraste maximal : +25
Highlights yeux   : +10 (regard lumineux)
Désaturation      : −20 (noir et blanc presque)
```

**OVERLAYS :**
```
TEX_01 Grain · α 25% (augmenté pour le choc)
LAYER_C Aberration chromatique · α 40% (pulsation)
```

**TYPOGRAPHIE :** AUCUNE

**SOUND DESIGN :**
```
F01  : SFX Whoosh entrant · directionnel gauche → droite · −12dB · 6f
F10  : Anticipation : drop de fréquence grave · −18dB
```

---

### ▶ PLAN P08 — [00:18.56 → 00:19.01] · 10 frames ⚡

```
██████████████████████████████████████
█                                    █
█    ⚡ FLASH IMPACT #1 — 10f        █
█    0.45 secondes — CHOC MAXIMAL    █
█                                    █
██████████████████████████████████████
```

**CONTENU :** Plan ultra-court — insert de frappe / impact / explosion d'action. 10 frames = 0.45 seconde. Le plan le plus court de la phase BUILD.

**TRANSITION ENTRANTE :** Flash blanc 3f avant le cut (overlappé sur P07 fin)

**TRANSITION SORTANTE :** Flash blanc 3f au début de P09

**MOUVEMENT CAMÉRA :** CAM_04 Shake · ±5px · 10f entiers

**VITESSE :** 100% (impact en temps réel)

**COLOR GRADING :**
```
Surexposition intentionnelle : Gain +0.20
Désaturation : −30 (quasi noir et blanc d'impact)
Contraste   : +30
```

**OVERLAYS :**
```
LUZ_06 Flash intérieur · α 0% → 80% → 0% sur 10f
TEX_02 Bruit numérique · α 25% · Mode Overlay
LAYER_C Aberration chromatique · α 80% (pic maximum)
TEX_06 Scan lines · α 15% (glitch)
```

**EFFETS DE LUMIÈRE :** LUZ_06 Éclat blanc instantané

**TYPOGRAPHIE :** AUCUNE

**SOUND DESIGN :**
```
F01  : 🔊 IMPACT KICK 808 · 52Hz · −3dB · Attack 0ms · Release 250ms
F01  : Crash métallique · 200Hz–4kHz · −8dB
F01  : Whoosh sortant · −12dB · 6f
F01  : Sidechain sur musique : duck −8dB · 200ms recovery
```

> **Ce plan est le premier grand choc émotionnel.** Tout ce qui précède en a préparé l'arrivée.

---

### ▶ PLAN P09 — [00:19.01 → 00:22.92] · 94 frames 🌬️

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│         [RESPIRATION #1 — PLAN LARGE CONTEMPLATIF]             │
│                                                                 │
│    Terrain Genech vu de loin · Équipe au loin · Golden Hour    │
│       Slowmo profond · Espace visuel maximal · Silence          │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Grand plan d'ensemble. Terrain et joueurs vus de loin, en silhouette. Espace, profondeur, grandeur. C'est le "souffle" après l'impact P08.

**TRANSITION ENTRANTE :** Flash blanc 3f (hérité de P08) qui s'efface sur ce plan

**TRANSITION SORTANTE :** Hard cut vers P10

**MOUVEMENT CAMÉRA :** CAM_02 Pull Out · Scale 105% → 100% · 94f + CAM_05 Drift très doux

**VITESSE :** 35% (slow motion profond — quasi arrêt)

**COLOR GRADING :**
```
Température     : +400K (très chaud — golden)
Highlights      : −15 (ne pas brûler le ciel orange)
Saturation jaune: +45 (herbe et lumière or)
Saturation global: −8 (doux, soyeux)
Lift bleu       : +0.01B (atmosphère légère)
Grain           : TEX_01 · α 25% (renforcé — plan "poétique")
```

**OVERLAYS :**
```
TEX_01 Grain · α 25%
LUZ_01 Lens Flare · α 35% (présent tout le plan)
LUZ_02 Light Leak orange · α 20%
TEX_05 Fumée horizon · α 10%
TEX_04 Poussière · α 15% · très lente
```

**EFFETS DE LUMIÈRE :** LUZ_01 full · LUZ_02 coin supérieur

**TYPOGRAPHIE :**
```
Frame 20 : Apparition "ENTENTE SPORTIVE"
  Police   : Bebas Neue · 48px · or #F5C518 · tracking +250
  Position : Centré bas · Y +400px
  ANIM_02 Tracking expansion · 8f
  Disparition fade out 8f @ frame 80

Frame 36 : Apparition "1971"
  Police   : Montserrat Light · 28px · #CCCCCC · tracking +500
  Position : Centré · Y +460px (sous "ENTENTE SPORTIVE")
  ANIM_05 Fade progressif · 16f
  Disparition fade out 10f @ frame 88
```

**SOUND DESIGN :**
```
F01  : Musique remonte seule · −18dB → −12dB sur 48f
F01  : Ambiance stade · −24dB · reveille légèrement
F01  : Réverbération longue du crash P08 (decay 2s) encore présente
F48  : Musique atteint −12dB · tempo se pose
F80  : Légère montée harmonique dans la musique · anticipation P10
```

---

## ══════════════════════════════════
## PHASE 3 — ACTION [00:22.92 → 00:38.83]
## Durée : 15.91s · 13 plans · Énergie maximale
## ══════════════════════════════════

> **Règle absolue de cette phase : HARD CUTS UNIQUEMENT.**
> Aucune transition, aucun fondu. Coupes sèches instantanées.
> La caméra est une arme.

---

### ▶ PLAN P10 — [00:22.92 → 00:24.16] · 30 frames

**CONTENU :** Sprint ou accélération d'un joueur · Plan de côté ou derrière · Vitesse pure

**TRANSITION IN :** Hard cut | **TRANSITION OUT :** Hard cut

**MOUVEMENT :** CAM_01 Push In agressif · Scale 100% → 112% · 30f · Ease In fort

**VITESSE :** 80% | **COLOR :** Standard action + contraste +15

**OVERLAYS :** TEX_01 α20% · LUZ_02 α15%

**SOUND :** Whoosh directionnel · −15dB · 4f au cut entrant

---

### ▶ PLAN P11 — [00:24.16 → 00:25.10] · 22 frames

**CONTENU :** Plan serré · Visage effort · Course ou frappe

**TRANSITION IN :** Hard cut | **TRANSITION OUT :** Hard cut

**MOUVEMENT :** CAM_04 Shake · ±4px · 22f entiers

**VITESSE :** 60% | **COLOR :** Contraste +20 · Désaturation −20

**OVERLAYS :** TEX_01 α22% · LAYER_C aberration α35%

**SOUND :** SFX contact ballon −20dB @ F10

---

### ▶ PLAN P12 — [00:25.10 → 00:26.44] · 33 frames

**CONTENU :** Plan large · Duel physique · 2 joueurs · Tension

**TRANSITION IN :** Hard cut | **TRANSITION OUT :** Hard cut

**MOUVEMENT :** CAM_05 Drift discret · Wiggle(0.5, 3)

**VITESSE :** 75% | **COLOR :** Standard

**OVERLAYS :** TEX_01 α18% · LUZ_01 α20% si possible

**SOUND :** Musique −11dB · montée progressive

---

### ▶ PLAN P13 — [00:26.44 → 00:29.21] · 66 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│       [PLAN LE PLUS LONG DE LA PHASE ACTION — 2.77s]           │
│                                                                 │
│    Célébration · Équipe rassemblée · Émotion collective        │
│         ou Tir cadré avec puissance et netteté                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Le plan "respiration" de la phase action. Plus long, plus émotionnel. Célébration, regard collectif, ou un beau geste technique au ralenti.

**TRANSITION IN :** Hard cut | **TRANSITION OUT :** Hard cut

**MOUVEMENT :** CAM_02 Pull Out · Scale 108% → 100% · 66f · Ease Out

**VITESSE :** 50% (slow-motion prononcé — moment d'émotion)

**COLOR GRADING :**
```
Température : +150K (légèrement plus chaud)
Saturation  : −10 global / Or +30 sélectif
Grain       : α 22%
```

**OVERLAYS :**
```
TEX_01 α22% · LUZ_02 α20% · TEX_04 Poussière α20%
```

**TYPOGRAPHIE :**
```
Frame 10 : Chiffre ou stat optionnel
  Ex: "DEPUIS 1971" · Montserrat ExtraBold · 36px · or #F5C518
  ANIM_05 Fade in 16f · Disparition fade out 10f @ frame 55
```

**SOUND :**
```
F01  : Musique −10dB · beat visible
F33  : Stinger mélodique dans la musique (motif principal)
```

---

### ▶ PLANS P14 à P20 — [00:29.21 → 00:38.03]

> Série de 7 plans courts (0.70s → 1.97s). Structure identique.

| Plan | TC Début | Durée | Frames | Vitesse | Mouvement | Contenu |
|------|----------|-------|--------|---------|-----------|---------|
| P14 | 00:29.21 | 0.70s | 17f | 100% | CAM_03 Zoom Punch | Insert flash · frappe |
| P15 | 00:29.91 | 1.13s | 27f | 80% | CAM_01 Push In | Plan serré technique |
| P16 | 00:31.04 | 0.65s | 16f | 100% | CAM_03 Zoom Punch | Flash célébration |
| P17 | 00:31.70 | 1.19s | 28f | 70% | CAM_05 Drift | Plan moyen équipe |
| P18 | 00:32.88 | 1.97s | 48f | 65% | CAM_02 Pull Out | Plan large terrain |
| P19 | 00:34.86 | 1.74s | 41f | 55% | CAM_05 Drift | Slowmo geste iconique |
| P20 | 00:36.59 | 1.44s | 35f | 60% | CAM_01 Push In | Plan émotion supporter |

**Règles communes P14–P20 :**
- HARD CUT entrée ET sortie pour tous
- LAYER_C Aberration chromatique : α 30–50% (pulsation à chaque cut)
- TEX_01 Grain : α 20–25%
- Whoosh directionnel −14dB à chaque cut entrant (4 frames)
- LUZ_02 Light Leak : α 10–20% (aléatoire selon plan)

**SOUND P14–P20 :**
```
Chaque cut entrant : Whoosh 4f · −14dB
P14 F01 : SFX impact frappe · −10dB
P16 F01 : SFX foule réaction · −18dB · court (12f)
P18 F01 : Musique −9dB · bass drop ressenti
P19 F24 : Stinger montant (anticipation du climax)
```

---

### ▶ PLAN P21 — [00:38.03 → 00:38.48] · 11 frames ⚡

```
████████████████████████████████████████████████
█                                              █
█   ⚡ FLASH IMPACT #2a — 11 frames — 0.45s   █
█   PREMIER CHOC DU DOUBLE CLIMAX             █
█                                              █
████████████████████████████████████████████████
```

**CONTENU :** Plan ultra-court. Impact physique violent ou frappe en puissance. Énergie maximale.

**TRANSITION IN :** Hard cut + Glitch RGB ±8px · 3f

**TRANSITION OUT :** Hard cut immédiat vers P22 (pas de pause)

**MOUVEMENT :** CAM_03 Zoom Punch · Scale 100% → 115% · 6f · brutal

**VITESSE :** 100%

**COLOR GRADING :**
```
Surexposition : Gain +0.25
Saturation    : −35 (quasi monochrome)
Contraste     : +30
```

**OVERLAYS :**
```
LUZ_06 Flash intérieur · α 60% sur 4f
LAYER_C Aberration chromatique · α 90% (maximum absolu)
TEX_06 Scan lines · α 20%
TEX_02 Bruit numérique · α 20%
```

**SOUND :**
```
F01 : 🔊 KICK 808 · 48Hz · −2dB (plus fort que l'impact #1)
F01 : Crash métallique · −6dB
F01 : Sidechain musique duck −10dB · 150ms
```

---

### ▶ PLAN P22 — [00:38.48 → 00:38.83] · 8 frames ⚡⚡

```
████████████████████████████████████████████████
█                                              █
█   ⚡⚡ FLASH IMPACT #2b — 8 frames — 0.34s  █
█   LE PLAN LE PLUS COURT DE TOUTE LA VIDÉO  █
█   CLIMAX ABSOLU — POINT DE NON-RETOUR       █
█                                              █
████████████████████████████████████████████████
```

**CONTENU :** 8 FRAMES. 1/3 de seconde. Plan de choc pur — ballon, impact, explosion, lumière. N'importe quel plan très dynamique. Ce plan doit être parfait car il est le pivot de toute la narration.

**TRANSITION IN :** Hard cut depuis P21 (zéro pause)

**TRANSITION OUT :** Hard cut → P23 (GRANDE RESPIRATION)

**MOUVEMENT :** CAM_04 Shake maximal · ±8px X · ±5px Y · 8f

**VITESSE :** 100%

**COLOR GRADING :**
```
Surexposition maximale : Gain +0.35 (proche du blanc)
Saturation             : −40 (monochrome presque total)
Lift                   : −0.15 (noirs encore présents pour contraste)
```

**OVERLAYS :**
```
LUZ_06 Flash full · α 90% frame 1–2 · décroissance 6f
LAYER_C Aberration · α 100% (peak absolu)
TEX_06 Scan lines · α 25%
TEX_02 Bruit numérique · α 30%
TEX_04 Poussière · α 40% (explosion de particules)
```

**SOUND :**
```
F01 : 🔊🔊 DOUBLE IMPACT
      Kick 808 · 45Hz · −1dB (le plus fort de la vidéo)
      Kick 808 secondaire · 70Hz · −4dB (décalé 2f)
      Crash orchestral · −5dB · sustain 3s
      Sidechain duck −12dB · 100ms
F01 : Sub-bass drop · 30Hz · −6dB · tail 2s
```

> **CE MOMENT EST LE CLIMAX ABSOLU.**
> Tout a été construit pour arriver ici. La respiration qui suit est d'autant
> plus puissante que le choc qui précède a été intense.

---

## ══════════════════════════════════
## PHASE 4 — RÉSOLUTION [00:38.83 → 00:50.71]
## Durée : 11.88s · 7 plans · Descente émotionnelle
## ══════════════════════════════════

---

### ▶ PLAN P23 — [00:38.83 → 00:42.64] · 91 frames 🌬️🌬️

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                                                                 │
│          [GRANDE RESPIRATION #2 — 3.81s]                       │
│                                                                 │
│    Plan panoramique large · Terrain vide ou joueurs au repos   │
│       Lumière dorée rasante · Silence relatif · Grandeur       │
│                                                                 │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Le plan le plus calme de toute la vidéo, juste après le double choc. Terrain, ciel, horizon. Largeur maximale. Joueurs au repos ou absents. Respiration.

**TRANSITION IN :** Flash blanc 3f (hérité de P22) + Dissolve 10f · transition douce

**TRANSITION OUT :** Dissolve 12f vers P24

**MOUVEMENT :** CAM_02 Pull Out · Scale 110% → 100% · 91f · Ease Out très progressif

**VITESSE :** 30% (slowmo profond — quasi arrêt sur image)

**COLOR GRADING :**
```
Température : +500K (très chaud, doré, mélancolique)
Saturation  : −5 global / Or +40 / Bleu +15 ciel
Highlights  : −20 (ciel maîtrisé)
Shadows     : −15 (noirs riches)
Grain       : TEX_01 · α 28% (renforcé — moment poétique)
Vignette    : Force 0.6 → légèrement renforcée
```

**OVERLAYS :**
```
TEX_01 Grain · α 28% (maximum phase 4)
LUZ_01 Lens Flare · α 38% (présent et assumé)
LUZ_02 Light Leak chaude · α 25%
TEX_05 Fumée horizon bas · α 12%
TEX_04 Poussière très lente · α 12%
```

**EFFETS DE LUMIÈRE :** LUZ_01 + LUZ_02 conjointement · lumière chaude maximale

**TYPOGRAPHIE :** AUCUNE · respiration visuelle totale

**SOUND DESIGN :**
```
F01  : Crash P22 encore en décroissance · tail 1.5s
F01  : Musique reprend seule · SFX DISPARUS · −16dB → −10dB sur 60f
F01  : Ambiance stade revient · HPF 2kHz · −22dB · Reverb stadium 4s
F48  : La musique domine tout seule · moment lyrique
F80  : Premier élément de tension réapparaît (cordes basses)
```

---

### ▶ PLANS P24 à P29 — [00:42.64 → 00:50.71]

Série de décompression · Plans contemplatifs et émotionnels.

| Plan | TC | Durée | Frames | Vitesse | Mouvement | Contenu |
|------|----|-------|--------|---------|-----------|---------|
| P24 | 00:42.64 | 1.72s | 42f | 55% | CAM_01 Push In | Regard capitaine |
| P25 | 00:44.36 | 1.49s | 35f | 60% | CAM_05 Drift | Plan équipe communion |
| P26 | 00:45.85 | 1.30s | 31f | 65% | CAM_06 Tilt Up | Insert écusson cousu |
| P27 | 00:47.15 | 1.33s | 32f | 60% | CAM_05 Drift | Plan émotionnel mains |
| P28 | 00:48.48 | 0.84s | 21f | 70% | CAM_01 Push In | Plan flash doux |
| P29 | 00:49.32 | 1.39s | 33f | 65% | CAM_02 Pull Out | Dernier plan terrain → noir |

**Transitions P24–P29 :**
- P23→P24 : Dissolve 12f
- P24→P25 : Hard cut
- P25→P26 : Hard cut
- P26→P27 : Dissolve 8f (doux)
- P27→P28 : Hard cut
- P28→P29 : Hard cut
- P29→P30 : **Fondu au noir 24f** → bascule vers le REVEAL

**Overlays P24–P29 :**
```
TEX_01 Grain · α 20–25%
LUZ_02 Light Leak · α 12–18%
LUZ_01 Lens Flare discret · α 15% (P24, P26 uniquement)
TEX_04 Poussière · α 10% (P24, P25)
```

**Typographie P24–P29 :**
```
P26 Frame 8 : "GENECH ENTENTE SPORTIVE"
  Police : Bebas Neue · 52px · or #F5C518 · tracking +180
  ANIM_01 Masque coulissant gauche → droite · 12f
  Disparition fade 8f @ frame 28

P29 Frame 15 : Aucun texte · silence visuel · prépare le reveal
```

**Sound P24–P29 :**
```
P24 F01 : Musique −10dB · motif mélodique en avant
P26 F01 : SFX subtil tissu (écusson) · −30dB
P28 F01 : Whoosh très doux · −22dB · 8f (transition vers reveal)
P29 F01 : Musique commence sa montée orchestrale finale
P29 F20 : Cordes s'épaississent · tension douce remonte
P29 F33 : Coupure → fondu au noir 24f (musique continue sous le noir)
```

---

## ══════════════════════════════════
## PHASE 5 — LOGO REVEAL [00:50.71 → 01:09.73]
## Durée : 19.02s · 3 × 152 frames · Moment sacré
## ══════════════════════════════════

> **Architecture stricte :** 3 shots identiques de 152 frames (6.33s @ 24fps)
> Directement calquée sur la structure Angers SCO (3 × 128f proportionnel)
> Le logo Genech occupe **25.9% de la durée totale** — ratio intentionnel

---

### ▶ PLAN P30 — [00:50.71 → 00:57.04] · 152 frames
### SHOT A — PRÉPARATION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ·  ·    ·       ·     ·         ·    ·   ·       ·    ·     │ ← Particules or
│                                                                 │
│              ╭─ ─ ─ ─ ─ ─ ─╮                                  │ ← Contour
│            ╭─   début arc   ─╮                                 │
│           ─  se dessine...    ─                                 │
│            ╰─              ─╯                                  │
│                                                                 │
│          [FOND NOIR #050C1E + FUMÉE + PARTICULES]               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**TRANSITION IN :** Fondu au noir 24f (hérité de P29) → ce plan commence dans le noir

**TRANSITION OUT :** Cut direct vers P31 (pas de transition — continuité visuelle)

#### Décomposition frame par frame

**Frames 1–36 (1.5s) — LE VIDE**
```
Fond      : #050C1E absolument pur
Particules : TEX_04 or #F5C518 · 8 pts · entrée par le bas très lente
             Birth rate 0.5 · Longevity 4s · Velocity 0.15 · Gravity −0.08
             Mode Add · α 0% → 30% progressif
Fumée     : TEX_05 · α 0% → 6% · entrée coins inférieurs
Audio     : Sub-drone 40Hz · −28dB → −20dB · attack 1.5s
            Réverb stade lointaine · −35dB
```

**Frames 37–72 (1.5s) — PREMIER ARC**
```
Élément   : Cercle extérieur du badge · Trim Paths 0% → 30%
            Stroke blanc #FFFFFF · 2px · α 0% → 50%
            Rotation sens horaire depuis le haut (0°)
            Ease IO sur le mouvement du masque
Effet     : LUZ_03 Glow blanc sur l'arc · Rayon 6px · α 25%
            Le trait "dessine" le cercle progressivement
Particules: Densité monte à 15 pts · α 35%
Audio     : Whoosh métallique grave · 200Hz · −15dB · 800ms
            Résonance grave après (decay 2s)
```

**Frames 73–108 (1.5s) — ANNEAU DORÉ**
```
Élément   : Anneau or interne · Trim Paths 0% → 55%
            Stroke #F5C518 · 3px · α 0% → 70%
            Décalé de 15° par rapport au cercle blanc
Effet     : LUZ_03 Glow or · Rayon 10px · Intensité 0.8 · α 40%
            LUZ_01 Lens Flare anamorphique · effleure l'arc · α 20%
Ghost logo: Logo entier · α 8% · Blur 20px (impressionniste)
Audio     : Harmonic rise +3 demi-tons · −18dB
            Violoncelles démarrent · cordes basses · −20dB
```

**Frames 109–152 (1.83s) — BLASON FANTÔME**
```
Arc blanc : Trim Paths → 55% (stable)
Arc or    : Trim Paths → 80%
Ghost logo: α 8% → 15% · Blur 20px → 14px (légère clarification)
Particules: 25 pts · α 45% · commence à circuler autour du futur logo
Fumée     : Commence à s'organiser en cercle très vague
Audio     : Cordes s'épaississent · crescendo très début
            Sub-drone monte à −14dB
            Basse grave pulsée à 120 BPM · −22dB (tempo)
```

**COLOR GRADING P30 :**
```
Fond            : #050C1E strict (jamais noir pur)
Particules or   : Saturation +60 sur la zone des particules
Blur global     : 0px (le fond doit être net et sombre)
Grain           : TEX_01 · α 20%
Vignette        : Force 0.7 (renforcée — focus au centre)
```

**OVERLAYS P30 :**
```
TEX_01 Grain · α 20%
TEX_04 Particules or · α variable (voir détail ci-dessus)
TEX_05 Fumée · α 6% → 10%
LUZ_03 Glow arcs (masqué sur les arcs uniquement)
```

---

### ▶ PLAN P31 — [00:57.04 → 01:03.38] · 152 frames
### SHOT B — RÉVÉLATION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         ██████████████████████████████████████████             │
│         █ G|L|I|T|C|H ─────────────────────────█             │
│         █                [BALAYAGE LUMINEUX →]  █             │
│         █           Logo se révèle de gauche   █             │
│         █              à droite progressivement █             │
│         ██████████████████████████████████████████             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**TRANSITION IN :** Cut direct (continuité avec P30)

**TRANSITION OUT :** Cut direct vers P32

#### Décomposition frame par frame

**Frames 1–6 (0.25s) — GLITCH RÉVÉLATEUR**
```
Effet     : RGB Split · décalage R +8px X / B −8px X · G centré
            Turbulent Displace · Échelle 40 · Quantité 6
            TEX_06 Scan lines · α 20%
Logo ghost: α 35% (augmenté soudain depuis 15%)
Audio     : Impact métallique court · −12dB
            Glitch sonore · −16dB · 3 frames
            La montée orchestrale démarre SIMULTANÉMENT
```

**Frames 7–82 (3.17s) — LIGHT SWEEP REVEAL**
```
Calque A  : Logo ghost · α 35% constant (base)
Calque B  : Logo full · α 100% · masqué par rectangle
Masque    : Position X : −700px @ F7 → +700px @ F82
            Feather : 100px (bord très doux)
            Ease IO : démarrage et fin progressifs
CC Light Sweep (synchro) :
            Center : suit le masque
            Direction : 90°
            Width : 0.3
            Sweep Intensity : 65%
Texture   : TEX_03 Métal brossé · α 15% · Mode Multiply (sur logo)
Particules: TEX_04 · 35 pts · orbitent autour du logo · α 50%
Audio     : MONTÉE ORCHESTRALE PRINCIPALE
            Violons + Alto + Violoncelles · crescendo sur 76f (3.17s)
            Cuivres entrent @ F40 · −12dB
            Musique atteint −6dB @ F82 (volume maximum)
            Basse grave pulsée · −16dB · tempo
```

**Frames 83–116 (1.42s) — PRÉ-IMPACT**
```
Masque    : Logo 90% révélé · seul bord droit encore en ghost
Arc blanc : α 80% (complété à 100% Trim Paths)
Arc or    : α 90% · Glow intensifié rayon 12px
Particules: 45 pts · densité maximale · convergent vers centre
Ghost fond: Bleu royal #1E3FAE commence à apparaître en halo
Audio     : Cuivres montée finale · tension maximale
            Crescendo approche du PEAK
            Sub-drone · −8dB (présent, grave, fort)
            Silence mental du spectateur · retenue
```

**Frames 117–152 (1.5s) — SUSPENSION**
```
Logo      : 95% révélé · suspension intentionnelle
            Scale pulsation : 100% → 101% → 100% · 24f
Particules: Convergence complète vers le centre G
Audio     : Basse seule · sub-drone · retenue orchestrale
            Les cordes tiennent une note · tension ultime
            Dernières frames : quasi silence sonore avant l'impact
```

**COLOR GRADING P31 :**
```
Fond            : #050C1E
Logo zone       : Boost luminosité légère (+5) pour le balayage
Métal brossé    : TEX_03 · Multiply 15% sur logo
Particules      : Add blend · saturation or +60
Grain           : TEX_01 · α 18%
```

---

### ▶ PLAN P32 — [01:03.38 → 01:09.73] · 152 frames
### SHOT C — AFFIRMATION

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     F1 : ████████████ FLASH BLANC ████████████                 │
│                            ↓                                    │
│              ╔══════════════════════╗                           │
│              ║   [LOGO COMPLET]     ║  ← Glow or               │
│              ║   GENECH ENTENTE     ║                           │
│              ╚══════════════════════╝                           │
│                                                                 │
│              ENTENTE SPORTIVE                                   │
│                   GENECH                                        │
│                    1971                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**TRANSITION IN :** Cut direct depuis P31

**TRANSITION OUT :** Dissolve 20f vers P33

#### Décomposition frame par frame

**Frame 1 — L'IMPACT (= LA FRAME LA PLUS IMPORTANTE DE LA VIDÉO)**
```
LUZ_06 Flash blanc : α 100% · Frame unique
Logo              : 100% visible · net · propre · Scale 100%
Tout se révèle en UNE frame.
```

**Frames 2–3 — DÉCROISSANCE FLASH**
```
LUZ_06 : α 100% → 40% → 0%
Logo visible à 100%
```

**Frames 1–4 — BURST PARTICULES (simultané)**
```
CC Particle World :
  Position   : Centre du "G" (centre exact du logo)
  Birth Rate : 8.0 (burst instantané)
  Longevity  : 2.0s
  Velocity   : 1.5
  Gravity    : 0.15 (légère chute)
  Type       : Faded Sphere
  Birth Size : 0.08
  Death Size : 0.005
  Birth Color: #F5C518
  Death Color: #F5C51800 (transparent)
  Mode       : Add
```

**Frames 1–24 — LIGHT RING EXPANSIF**
```
LUZ_05 Light Ring :
  Forme   : Ellipse stroke · 3px · #F5C518
  F1      : Scale 0%  · α 80%
  F12     : Scale 120% · α 50%
  F24     : Scale 260% · α 0%
  Mode    : Add
  Ease    : Ease Out (accélère en s'éloignant)
```

**Frames 4–60 (2.33s) — AFFIRMATION DU LOGO**
```
Logo      : 100% visible · stable
Scale pulsation (breath) :
  F4   : Scale 100%
  F18  : Scale 102% · Ease IO
  F34  : Scale 100% · Ease IO
  F50  : Scale 101%
  F60  : Scale 100%
Glow or   : LUZ_03 · Rayon 8px · Intensité 0.7 · α 35%
Arc blanc : Trim Paths 100% · α 60% · s'estompe progressivement
Arc or    : LUZ_03 plein · α 70%
Particules: Retombée douce (gravité 0.15) · 2s de decay
Audio     : Crash orchestral decay · −5dB → −14dB sur 48f
            Note tenue · violoncelles graves · −10dB
            Sub-drone · −12dB stable
```

**Frames 61–72 (0.46s) — TYPO 1 : "ENTENTE SPORTIVE"**
```
Police    : Bebas Neue · 52px · or #F5C518 · tracking +250
Position  : Centré horizontal · Y +380px (bas du logo)
Animation : ANIM_03 Masque vertical (bas → haut) · 12f · Ease IO
Glow texte: LUZ_03 · Rayon 4px · or · α 20%
```

**Frames 73–80 (0.33s) — TYPO 2 : "GENECH"**
```
Police    : Bebas Neue · 100px · blanc #FFFFFF · tracking +150
Position  : Centré · Y −340px (haut du logo)
Animation : ANIM_02 Tracking expansion 0 → +150 + fade 8f
```

**Frames 89–100 (0.46s) — TYPO 3 : "1971"**
```
Police    : Montserrat Light · 30px · gris #CCCCCC · tracking +500
Position  : Centré · Y +450px (sous "ENTENTE SPORTIVE")
Animation : ANIM_05 Fade progressif · 12f
```

**Frames 101–110 (0.42s) — TYPO 4 OPTIONNELLE : SLOGAN**
```
Si le club a un slogan ou devise :
Police    : Montserrat ExtraBold · 22px · or sombre #B8960A · tracking +80
Position  : Centré · Y +510px
Animation : ANIM_05 Fade · 10f · discret
```

**Frames 101–152 (2.17s) — FREEZE ICONIQUE FINAL**
```
Tout figé  : Logo + textes complets
Drift zoom : Scale 100% → 102% sur 52f · Ease Out très lent
Grain boost: TEX_01 · α 15% → 22%
Vignette   : Force 0.5 → 0.65 (légère intensification)
Particules : Dernier souffle · quelques points résiduels
Arc or     : α 70% → 30% (s'efface progressivement)
```

**COLOR GRADING P32 :**
```
Frame 1   : Surexposition momentanée (flash) · Gain +0.30 · Frame 1 uniquement
Frame 2+  : Retour normal
Logo zone : Boost luminosité +8 · Contraste +10
Fond      : #050C1E strict
Or logo   : Saturation sélective jaune +50
Grain     : TEX_01 · α 20% → 22%
Vignette  : Force 0.5 → 0.65
```

**SOUND P32 :**
```
F01   : 🔊🔊🔊 CLIMAX SONORE TOTAL
        Kick 808 · 45Hz · −1dB (le plus fort de la vidéo)
        Crash orchestral tutti · −3dB · tous les instruments
        Cuivres ff · −6dB
        Sub-bass · 30Hz · −6dB · tail 4s
        Sidechain duck musique −12dB · 50ms · recovery 500ms

F06   : Décroissance crash · musique reprend sa place
        Note tenue violoncelles · −8dB
        Cordes s'apaisent progressivement

F61   : Stinger léger accompagne "ENTENTE SPORTIVE" · −20dB
F73   : Stinger plus fort accompagne "GENECH" · −18dB

F101  : Musique transition vers fade out · −10dB → −16dB sur 51f
        Ambiance stade revient en filigrane · −28dB · feutre

F150  : Quasi silence · seuls sub-drone et reverb persistants
F152  : Sub-drone fade to zero · Silence total imminent
```

---

## ══════════════════════════════════
## PHASE 6 — ENDING [01:09.73 → 01:13.35]
## Durée : 3.62s · 2 plans · Résolution
## ══════════════════════════════════

---

### ▶ PLAN P33 — [01:09.73 → 01:10.76] · 25 frames

**CONTENU :** Plan de sortie optionnel — logo en fondu ou plan terrain très lent

**TRANSITION IN :** Dissolve 20f depuis P32

**TRANSITION OUT :** Dissolve 15f vers P34

**MOUVEMENT :** CAM_02 Pull Out · Scale 102% → 100% · 25f

**VITESSE :** 40%

**OVERLAYS :** TEX_01 α22% · Vignette α40%

**SOUND :** Musique fade out continue · −16dB → −22dB

---

### ▶ PLAN P34 — [01:10.76 → 01:13.35] · 62 frames

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        [NOIR FINAL]                             │
│                                                                 │
│          Logo Genech en surimpression · α 25% · centré         │
│          Fondu au noir progressif · 3 secondes                  │
│                                                                 │
│                     ░░ Grain visible ░░                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**CONTENU :** Fondu final au noir. Logo reste en fantôme (α 25%) pendant la disparition. Grain visible. Vignette maximum. L'image s'éteint.

**TRANSITION IN :** Dissolve 15f depuis P33

**TRANSITION OUT :** Fondu noir 62f complets (2.58s) · Ease Out

**MOUVEMENT :** Aucun

**OVERLAYS :**
```
TEX_01 Grain · α 22% (encore présent dans le noir)
Logo ghost · α 25% → 0% sur 62f
Vignette · Force 0.8 (maximum)
```

**TYPOGRAPHIE :** Logo uniquement · en transparence · fondu progressif

**SOUND :**
```
F01  : Musique −22dB → −∞ sur 50f (fade out complet)
F01  : Sub-drone −20dB → −∞ sur 62f
F50  : SILENCE ABSOLU
F62  : Dernière frame · silence total
       Pas un seul Hz dans le mix
```

---

## ANNEXE A — RÉCAPITULATIF TIMING DES IMPACTS SONORES

| Frame | Timecode | Événement | Fréquence | Niveau | Durée |
|-------|----------|-----------|-----------|--------|-------|
| F01 | 00:00.00 | Silence absolu | — | −∞ | 36f |
| F37 | 00:01.54 | Sub-drone démarre | 38Hz | −28dB | continu |
| F247 | 00:10.29 | Musique démarre | — | −18dB | continu |
| F445 | 00:18.54 | **Impact #1** | 52Hz kick | −3dB | 1f |
| F445 | 00:18.54 | Crash métal | 200Hz | −8dB | 12f |
| F551 | 00:22.96 | Beat drop | — | −9dB | — |
| F760 | 00:31.67 | Stinger montant | — | — | 24f |
| F913 | 00:38.04 | **Impact #2a** | 48Hz kick | −2dB | 1f |
| F924 | 00:38.50 | **Impact #2b** | 45Hz kick | −1dB | 1f |
| F924 | 00:38.50 | Double crash tutti | tous | −5dB | 72f |
| F933 | 00:38.88 | Musique seule | — | −16dB | — |
| F1217 | 00:50.71 | Drone reveal démarre | 40Hz | −20dB | — |
| F1292 | 00:53.83 | Arcs + Whoosh grave | 200Hz | −15dB | 19f |
| F1370 | 00:57.08 | Glitch audio | — | −12dB | 3f |
| F1370 | 00:57.08 | Crescendo orchestral | — | montant | 76f |
| F1522 | 01:03.42 | **CLIMAX** Flash + tutti | 45Hz | −1dB | 1f |
| F1522 | 01:03.42 | Tutti orchestral peak | all | −3dB | 48f |
| F1582 | 01:05.92 | Note tenue violoncelles | 60Hz | −8dB | 120f |
| F1760 | 01:13.33 | SILENCE ABSOLU | — | −∞ | final |

---

## ANNEXE B — RÉCAPITULATIF TRANSITIONS

| Plan | → Plan | Type | Frames | Notes |
|------|--------|------|--------|-------|
| Noir | P01 | Fade in | 36f | Logarithmique |
| P01 | P02 | Dissolve | 15f | Ease IO |
| P02 | P03 | Hard cut | 0f | — |
| P03 | P04 | Hard cut | 0f | — |
| P04 | P05 | Hard cut | 0f | — |
| P05 | P06 | Hard cut | 0f | — |
| P06 | P07 | Hard cut | 0f | — |
| P07 | P08 | Flash blanc 3f | 3f | Overlap sur fin P07 |
| P08 | P09 | Flash blanc 3f | 3f | Overlap sur début P09 |
| P09 | P10 | Hard cut | 0f | — |
| P10 | P11 | Hard cut | 0f | — |
| P11 | P12 | Hard cut | 0f | — |
| P12 | P13 | Hard cut | 0f | — |
| P13 | P14 | Hard cut | 0f | — |
| P14 | P15 | Hard cut | 0f | — |
| P15 | P16 | Hard cut | 0f | — |
| P16 | P17 | Hard cut | 0f | — |
| P17 | P18 | Hard cut | 0f | — |
| P18 | P19 | Hard cut | 0f | — |
| P19 | P20 | Hard cut | 0f | — |
| P20 | P21 | Hard cut | 0f | — |
| P21 | P22 | Hard cut | 0f | Glitch RGB 3f au cut |
| P22 | P23 | Flash blanc 3f + Dissolve | 3f+10f | Transition climax |
| P23 | P24 | Dissolve | 12f | Ease IO |
| P24 | P25 | Hard cut | 0f | — |
| P25 | P26 | Hard cut | 0f | — |
| P26 | P27 | Dissolve | 8f | Doux |
| P27 | P28 | Hard cut | 0f | — |
| P28 | P29 | Hard cut | 0f | — |
| P29 | Noir | Fondu noir | 24f | Ease Out |
| Noir | P30 | (commence dans le noir) | — | Pas de transition |
| P30 | P31 | Cut direct | 0f | Continuité logo |
| P31 | P32 | Cut direct | 0f | Continuité logo |
| P32 | P33 | Dissolve | 20f | Apaisement |
| P33 | P34 | Dissolve | 15f | — |
| P34 | Fin | Fondu noir | 62f | Ease Out total |

---

## ANNEXE C — CHECKLIST MONTEUR

### Avant d'exporter
- [ ] Filigrane cledio.com supprimé (vérifier frame 1 et frame dernier)
- [ ] LUT appliquée sur tous les plans (node 1 DaVinci ou Lumetri)
- [ ] Grain 35mm présent sur toute la timeline (pas de plan "trop propre")
- [ ] Vignette active sur toute la timeline
- [ ] Noirs à #050C1E (jamais #000000) — vérifier avec scope
- [ ] Impact #1 @ F445 : kick 808 synchronisé à la frame (pas à la seconde)
- [ ] Impact #2 double @ F913–F924 : deux kicks distincts, espacés de 11f
- [ ] Logo reveal : 3 plans de 152f chacun (vérifier durée exacte)
- [ ] Flash blanc P32 F1 : 1 frame uniquement (pas 2, pas 3)
- [ ] Typos P32 : apparitions @ frames 61 / 73 / 89 / 101
- [ ] Silence absolu sur la dernière frame (vérifier avec compteur de silence)
- [ ] Rendu @ 24fps (pas 25, pas 30 — correspondance référence Angers SCO)
- [ ] Format : 1080×1920 (vérifier metadata avant livraison)
- [ ] Bitrate : minimum 15 Mbps (20 Mbps recommandé pour les noirs profonds)

### Test qualité final
- [ ] Visualisation sur smartphone vertical (format natif)
- [ ] Visualisation sur casque audio (vérifier les basses du sub-drone)
- [ ] Visualisation sur haut-parleur (vérifier que les impacts passent)
- [ ] Zoom sur le logo reveal : net, sans artéfacts de compression
- [ ] Les noirs du reveal sont profonds (pas de banding sur les gradients)

---

*Volume II — Storyboard Technique Complet*
*Basé sur reverse engineering réel : Angers SCO · 61.72s · 24fps · 92 keyframes analysés*
*Genech Entente Sportive · 1080×1920 · 73.35s · 24fps*
*Niveau : Agence de post-production professionnelle*
