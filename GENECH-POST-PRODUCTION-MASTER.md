# GENECH ENTENTE SPORTIVE — DOSSIER DE POST-PRODUCTION MASTER
## Reverse Engineering Film Angers SCO + Application Genech

---

## FICHE TECHNIQUE DES DEUX VIDÉOS

### Film de référence — Angers SCO
| Paramètre | Valeur |
|-----------|--------|
| Résolution | 640 × 360 px (SD — version compressée) |
| Durée | **61,72 secondes** |
| Frame rate | **24 fps** (cinéma) |
| Codec | H.264 / AVC1 + AAC |
| Total frames | 1 481 |
| Total scènes | **34 scenes** identifiées |
| Total I-frames | 92 keyframes |

### Vidéo Genech (à monter)
| Paramètre | Valeur |
|-----------|--------|
| Résolution | **1080 × 1920 px** (9:16 vertical — Instagram/TikTok/Reels) |
| Durée source | **73,35 secondes** |
| Codec | H.264 / MP4 |
| Audio | AAC stéréo |
| Filigrane | clideo.com → **méthode de suppression ci-dessous** |

---

## PARTIE 1 — REVERSE ENGINEERING COMPLET : FILM ANGERS SCO

### 1.1 — Structure en 6 phases (données réelles extraites)

L'analyse des 92 keyframes et 34 scènes révèle une architecture précise :

```
PHASE 1 — INTRO        [00:00 → 00:08.83]   8.83s  |  2 scènes  |  0.23 cuts/sec
PHASE 2 — MONTÉE       [00:08.83 → 00:19.29] 10.46s  |  7 scènes  |  0.67 cuts/sec
PHASE 3 — EXPLOSION    [00:19.29 → 00:32.67] 13.37s  | 13 scènes  |  0.97 cuts/sec
PHASE 4 — RÉSOLUTION   [00:32.67 → 00:42.67] 10.00s  |  7 scènes  |  0.70 cuts/sec
PHASE 5 — LOGO REVEAL  [00:42.67 → 00:58.67] 15.99s  |  3 scènes  |  0.19 cuts/sec
PHASE 6 — ENDING       [00:58.67 → 01:01.66]  3.00s  |  2 scènes  |  final
```

**Ratio logo reveal : 25,9% de la vidéo** (1 seconde sur 4 est consacrée au reveal)

---

### 1.2 — Découpage plan par plan EXACT (données brutes)

#### PHASE 1 — INTRO [00:00 → 00:08.83]

| Scène | TC Début | TC Fin | Durée | Analyse |
|-------|----------|--------|-------|---------|
| 1 | 00:00.00 | 00:05.33 | **5.33s** | Plan contemplatif long — établissement du ton |
| 2 | 00:05.33 | 00:08.83 | **3.50s** | Transition identitaire — logo/stade/ambiance |

**Signature rythmique intro : 4,42s moyen** — Plans larges, lents, émotionnels.
Équivalent à 0,23 coupures/seconde — quasi-statique, hypnotique.

---

#### PHASE 2 — MONTÉE [00:08.83 → 00:19.29]

| Scène | TC Début | TC Fin | Durée | Analyse |
|-------|----------|--------|-------|---------|
| 3 | 00:08.83 | 00:10.38 | 1.54s | Premier plan action |
| 4 | 00:10.38 | 00:12.25 | 1.88s | Plan identité club |
| 5 | 00:12.25 | 00:13.50 | 1.25s | Insert détail |
| 6 | 00:13.50 | 00:15.00 | 1.50s | Plan moyen joueur |
| 7 | 00:15.00 | 00:15.62 | **0.62s** | Plan flash — accélération |
| 8 | 00:15.62 | 00:16.00 | **0.38s** ⚡ | **FLASH IMPACT** — coupure-choc |
| 9 | 00:16.00 | 00:19.29 | **3.29s** 🌬️ | **RESPIRATION** — plan long après impact |

> **Point clé à 00:15.62** : Flash de 0,38s suivi immédiatement d'un plan de 3,29s.
> C'est la signature du style premium : choc intense → pause respiratoire.
> **Reproduire impérativement** sur la vidéo Genech.

---

#### PHASE 3 — EXPLOSION [00:19.29 → 00:32.67]

| Scène | TC Début | TC Fin | Durée | Analyse |
|-------|----------|--------|-------|---------|
| 10 | 00:19.29 | 00:20.33 | 1.04s | Début action |
| 11 | 00:20.33 | 00:21.12 | 0.79s | Plan serré |
| 12 | 00:21.12 | 00:22.25 | 1.12s | Plan moyen |
| 13 | 00:22.25 | 00:24.58 | 2.33s | Plan long — émotion |
| 14 | 00:24.58 | 00:25.17 | **0.58s** | Flash/insert |
| 15 | 00:25.17 | 00:26.12 | 0.96s | Plan serré |
| 16 | 00:26.12 | 00:26.67 | **0.54s** | Flash |
| 17 | 00:26.67 | 00:27.67 | 1.00s | Plan action |
| 18 | 00:27.67 | 00:29.33 | 1.67s | Plan large |
| 19 | 00:29.33 | 00:30.79 | 1.46s | Plan moyen |
| 20 | 00:30.79 | 00:32.00 | 1.21s | Plan serré |
| 21 | 00:32.00 | 00:32.38 | **0.38s** ⚡ | **FLASH IMPACT #2** |
| 22 | 00:32.38 | 00:32.67 | **0.29s** ⚡ | **FLASH #3 — minimum du film** |

> **0,29s = 7 frames à 24fps** — Plan le plus court du film entier.
> Le style accélère jusqu'à l'insoutenable, puis coupe brutalement vers...

---

#### PHASE 4 — RÉSOLUTION [00:32.67 → 00:42.67]

| Scène | TC Début | TC Fin | Durée | Analyse |
|-------|----------|--------|-------|---------|
| 23 | 00:32.67 | 00:35.88 | **3.21s** 🌬️ | **GRANDE RESPIRATION** — plan large calme |
| 24 | 00:35.88 | 00:37.33 | 1.46s | Plan contemplatif |
| 25 | 00:37.33 | 00:38.58 | 1.25s | Plan identité |
| 26 | 00:38.58 | 00:39.67 | 1.08s | Plan ralenti |
| 27 | 00:39.67 | 00:40.79 | 1.12s | Plan émotionnel |
| 28 | 00:40.79 | 00:41.50 | 0.71s | Plan flash doux |
| 29 | 00:41.50 | 00:42.67 | 1.17s | Plan de transition → reveal |

> **Signature clé** : Après les 0,29s à 00:32.38, plan de 3,21s immédiat.
> Même motif qu'en phase 2 : flash court → longue respiration = **double respiration** dans le film.

---

#### PHASE 5 — LOGO REVEAL [00:42.67 → 00:58.67]

**LE MOMENT LE PLUS IMPORTANT DU FILM**

| Scène | TC Début | TC Fin | Durée | Frames | Rôle |
|-------|----------|--------|-------|--------|------|
| 30 | 00:42.67 | 00:48.00 | **5.33s** | 128f | ACTE A — Préparation / Apparition |
| 31 | 00:48.00 | 00:53.33 | **5.33s** | 128f | ACTE B — Révélation / Construction |
| 32 | 00:53.33 | 00:58.67 | **5.33s** | 128f | ACTE C — Affirmation / Logo complet |

**Les 3 shots logo font EXACTEMENT 128 frames chacun à 24fps = 5,3333... secondes.**
Ce n'est pas un hasard — c'est une décision artistique symétrique et délibérée.

---

#### PHASE 6 — ENDING [00:58.67 → 01:01.66]

| Scène | TC Début | TC Fin | Durée | Analyse |
|-------|----------|--------|-------|---------|
| 33 | 00:58.67 | 00:59.54 | 0.88s | Plan de sortie |
| 34 | 00:59.54 | 01:01.66 | 2.12s | Fondu final / freeze |

---

### 1.3 — Signature rythmique mesurée (données exactes)

| Phase | Durée | Scènes | Moy. plan | Cuts/sec | Intensité |
|-------|-------|--------|-----------|----------|-----------|
| Intro | 8.83s | 2 | 4.42s | 0.23 | ● |
| Montée | 10.46s | 7 | 1.49s | 0.67 | ●●● |
| Explosion | 13.37s | 13 | 1.03s | 0.97 | ●●●●● |
| Résolution | 10.00s | 7 | 1.43s | 0.70 | ●●● |
| Logo Reveal | 15.99s | 3 | 5.33s | 0.19 | ●● (intentionnel) |
| Ending | 3.00s | 2 | 1.50s | 0.33 | ● |

**Courbe d'intensité réelle : ↗↗↗↗↑↑ PEAK ↘↘↘ PAUSE SACRÉE ●**

---

### 1.4 — Points d'impact identifiés

Deux moments-clés structurants dans le film :

```
IMPACT #1 — 00:15.62
  Flash 0.38s → Plan 3.29s (ratio 1:8.7)
  Premier choc + première grande respiration

IMPACT #2 — 00:32.38–00:32.67  
  Deux flashs consécutifs : 0.38s + 0.29s
  Plan 3.21s immédiat après
  Le CLIMAX d'action → bascule vers la résolution
  
TRANSITION VERS LE REVEAL — 00:42.67
  Cut net vers le noir/silence
  Début des 3 × 5.33s du logo
```

---

### 1.5 — Cadence musicale déduite

À 24fps, les I-frames révèlent le BPM probable :
- Cluster dense frames 213–243 (acte 3) : ~8 cuts en 1,25s = ~384 BPM en rafale
- Rythme action principal : 1 cut/sec = tempo posé ~60–80 BPM underlay
- **BPM probable de la musique : 120–130 BPM** (tempo club standard, double-temps apparent)
- Logo reveal : 5.33s par shot = 3 × 5.33s = exactement **2 mesures de 4/4 à 90 BPM** chacune

---

## PARTIE 2 — APPLICATION À GENECH : PLAN DE MONTAGE ADAPTÉ

### 2.1 — Adaptation de la structure Angers SCO → Genech

La vidéo Genech dure 73,35s. En appliquant les mêmes ratios :

| Phase | Ratio Angers | Durée Genech adaptée | TC |
|-------|-------------|---------------------|-----|
| Intro | 14.3% | **10.5s** | 00:00 → 00:10.50 |
| Montée | 16.9% | **12.4s** | 00:10.50 → 00:22.90 |
| Explosion | 21.7% | **15.9s** | 00:22.90 → 00:38.80 |
| Résolution | 16.2% | **11.9s** | 00:38.80 → 00:50.70 |
| Logo Reveal | 25.9% | **19.0s** | 00:50.70 → 01:09.70 |
| Ending | 4.9% | **3.6s** | 01:09.70 → 01:13.35 |

---

### 2.2 — Timeline complète Genech (plan de montage)

#### PHASE 1 — INTRO GENECH [00:00 → 00:10.50]

```
PLAN 1 [00:00 → 00:05.50] — 5.5s
├── Contenu : Noir absolu → première texture (herbe, ballon, maillot marine)
├── Vitesse : 40% (slowmo)
├── Audio   : Sub-drone 40Hz montant de -∞ à -18dB
├── Overlay : Grain 35mm opacité 10% (début progressif)
└── Sortie  : Cut direct

PLAN 2 [00:05.50 → 00:10.50] — 5.0s
├── Contenu : Plan large — terrain Genech, contre-jour, golden hour
├── Vitesse : 60% (léger ralenti)
├── Audio   : Atmosphère stade lointaine filtrée + début musique
├── Overlay : Vignette douce + grain 15%
├── Typo    : AUCUNE — laisser respirer
└── Sortie  : Dissolve 15 frames vers PHASE 2
```

---

#### PHASE 2 — MONTÉE GENECH [00:10.50 → 00:22.90]

```
PLAN 3 [00:10.50 → 00:12.00] — 1.5s  → Plan maillot / écusson macro
PLAN 4 [00:12.00 → 00:13.88] — 1.88s → Plan joueur dos à caméra
PLAN 5 [00:13.88 → 00:15.13] — 1.25s → Insert crampons / herbe
PLAN 6 [00:15.13 → 00:16.63] — 1.5s  → Plan moyen : geste technique

⚡ IMPACT #1 GENECH — 00:16.63
PLAN 7 [00:16.63 → 00:17.25] — 0.62s → Flash/insert ultra-rapide
PLAN 8 [00:17.25 → 00:17.63] — 0.38s → FLASH BLANC 9 frames (impact)
      └── Scale 100→108% en 4f + Glitch RGB ±6px
🌬️ RESPIRATION #1
PLAN 9 [00:17.63 → 00:20.92] — 3.29s → Plan large contemplatif
      └── Slowmo 40%, horizon/stade, musique prend le dessus

PLAN 10 [00:20.92 → 00:21.96] — 1.04s → Insert regard joueur
PLAN 11 [00:21.96 → 00:22.75] — 0.79s → Plan serré : mains/ballon
PLAN 12 [00:22.75 → 00:22.90] — 0.15s → Flash léger de transition
```

**Typographie PHASE 2 :**
- "GENECH" apparaît @ 00:20.92 (pendant la respiration)
- Font : Bebas Neue, blanc, tracking +200, 96px
- Animation : Masque coulissant gauche → droite, 12 frames

---

#### PHASE 3 — EXPLOSION GENECH [00:22.90 → 00:38.80]

```
PLAN 13 [00:22.90 → 00:24.23] — 1.33s → Action : frappe / sprint
PLAN 14 [00:24.23 → 00:24.81] — 0.58s → Insert flash : visage effort
PLAN 15 [00:24.81 → 00:25.77] — 0.96s → Plan serré : duel physique
PLAN 16 [00:25.77 → 00:26.31] — 0.54s → Flash : célébration
PLAN 17 [00:26.31 → 00:27.31] — 1.00s → Plan moyen : équipe
PLAN 18 [00:27.31 → 00:28.98] — 1.67s → Plan large : terrain plein cadre
PLAN 19 [00:28.98 → 00:30.44] — 1.46s → Slow : geste iconique
PLAN 20 [00:30.44 → 00:31.65] — 1.21s → Plan émotion : supporter

⚡⚡ DOUBLE IMPACT — 00:31.65 (climax du film)
PLAN 21 [00:31.65 → 00:32.03] — 0.38s → FLASH IMPACT A
PLAN 22 [00:32.03 → 00:32.32] — 0.29s → FLASH IMPACT B (plan LE PLUS COURT)
      └── Glitch RGB maximal ±10px, 3 frames
      └── Audio : double kick 808 + crash métallique
      └── Scale 100→115% brutal
```

> **Ce moment à 00:31.65 est le climax absolu.** 0.67 secondes totales de choc pur.
> Immédiatement suivi de la plus grande respiration du film.

---

#### PHASE 4 — RÉSOLUTION GENECH [00:38.80 → 00:50.70]

```
🌬️ GRANDE RESPIRATION — 00:32.32 → 00:35.53 (3.21s)
PLAN 23 [00:32.32 → 00:35.53] — 3.21s → Plan TRÈS large, calme soudain
      └── Ralenti 30%, lumière chaude, stade ou terrain vide
      └── Audio : musique monte seule, SFX disparaissent
      └── Grain boost : 15% → 25% pendant ce plan

PLAN 24 [00:35.53 → 00:36.99] — 1.46s → Regard capitaine
PLAN 25 [00:36.99 → 00:38.24] — 1.25s → Plan équipe — communion
PLAN 26 [00:38.24 → 00:39.32] — 1.08s → Insert écusson cousu
PLAN 27 [00:39.32 → 00:40.44] — 1.12s → Plan émotionnel — mains
PLAN 28 [00:40.44 → 00:41.15] — 0.71s → Plan de transition doux
PLAN 29 [00:41.15 → 00:42.32] — 1.17s → Dernier plan "football" → cut noir
      └── Audio : musique commence sa montée orchestrale finale
```

---

#### PHASE 5 — LOGO REVEAL GENECH [00:42.32 → 01:01.32]

**Structure strictement identique à Angers SCO : 3 shots de durée égale**
Durée totale : 19.0s → chaque shot = **6.33s** (152 frames @ 24fps)

---

##### SHOT LOGO A [00:42.32 → 00:48.65] — PRÉPARATION (6.33s)

```
Frames 1–48 (2s) — Fond et atmosphère
├── Fond : Noir profond #050C1E
├── Particules dorées #F5C518 : entrent depuis le bas, ascension lente
│   └── CC Particle World : Birth Rate 2.0, Longevity 3s, Gravity -0.1
├── Fumée bleutée très subtile (opacité 8%) depuis les coins
├── Sub-drone monte de -24dB à -12dB
└── Respiration musicale : cordes basses, tension

Frames 49–96 (2s) — Premier fragment : L'arc extérieur
├── Cercle extérieur du badge : Trim Paths 0% → 45%
│   └── Stroke blanc 2px, opacité 40%
│   └── Rotation : dessin dans le sens horaire
├── Lens flare anamorphique horizontal effleure l'arc
│   └── Position : bord supérieur gauche → centre haut
├── Audio : Whoosh grave 800ms + résonance

Frames 97–152 (2.33s) — Deuxième fragment : L'anneau doré
├── Arc doré #F5C518 : Trim Paths 0% → 70% (plus rapide)
│   └── Légère lueur glow : rayon 8px, intensité 0.6
├── Blur background : 12px sur zone centrale (logo fantôme)
├── Premier aperçu du blason : très flou, impressionniste
├── Audio : Harmonic rise +3 demi-tons
│   └── Cordes violoncelles commencent leur montée
```

---

##### SHOT LOGO B [00:48.65 → 00:54.98] — RÉVÉLATION (6.33s)

```
Frames 1–20 (0.83s) — Glitch révélateur
├── RGB Split : décalage ±8px sur R et B, vert centré
├── Turbulent Displace : échelle 40, quantité 6, 3 frames
├── Logo ghost @ 40% opacité visible sous le glitch
├── Audio : impact métallique court + glitch sonore 3 frames
└── Stabilisation immédiate

Frames 21–96 (3.17s) — Balayage lumineux (light sweep reveal)
├── Logo base : opacité 35% (ghost)
├── Masque rectangle coulissant gauche → droite
│   └── Feather : 100px (bord très doux)
│   └── Vitesse : position -700px → +700px en 76 frames (ease in/out)
│   └── Derrière le masque : logo @ 100% opacité
├── Effet CC Light Sweep synchronisé au masque
│   └── Direction : 90°, Width 0.3, Sweep Intensity 60%
├── Texture métal brossé : Multiply 15% sur le logo
├── Audio : MONTÉE ORCHESTRALE PRINCIPALE
│   └── Violons + cuivres + basses en crescendo
│   └── Ce moment = plus forte montée de la musique

Frames 97–128 (1.33s) — Pré-impact
├── Logo visible @ 80% — presque complet
├── Anneau doré lumineux pulsation douce
├── Particules or commencent burst radial depuis le centre G
├── Audio : dernier souffle avant l'impact
│   └── Basse qui monte seule, tension maximale
└── Suspense : le logo retient son souffle
```

---

##### SHOT LOGO C [00:54.98 → 01:01.32] — AFFIRMATION (6.33s)

```
Frame 1 — IMPACT RÉVÉLATEUR (= le frame le plus important de la vidéo)
├── Flash blanc 2 frames : Opacity 100% → 0%
├── Logo : apparition 100% visible, net, propre
├── Burst particules or : radial depuis G central
│   └── CC Particle World : burst, Velocity 1.2, 40 particules, Fade
├── Light ring : anneau lumineux or #F5C518 s'expansant
│   └── Scale 0% → 200% en 20 frames
│   └── Opacité 80% → 0% (disparaît en s'éloignant)
├── Audio : IMPACT — kick 808 60Hz + crash orchestral
│   └── Moment le plus fort de la vidéo sonore

Frames 3–60 (2.42s) — Affirmation du logo
├── Logo centré, scale légère pulsation : 100% → 102% → 100% (breath)
│   └── 30 frames pour le cycle complet
├── Glow doré : 8px, opacité 35%
├── Particules retombent doucement (gravité légère)
├── Audio : note orchestrale tenue, violoncelles graves

Frames 61–120 (2.5s) — Typographie reveal
├── Texte 1 : "ENTENTE SPORTIVE"
│   └── Police : Bebas Neue, or #F5C518, tracking +250, 48px
│   └── Position : sous le logo, décalé légèrement bas
│   └── Animation : masque révélateur bas → haut, 12 frames
│   └── Apparition @ frame 61
├── Texte 2 : "GENECH"
│   └── Police : Bebas Neue, blanc, tracking +150, 96px
│   └── Position : au-dessus du logo
│   └── Animation : tracking expansion 0 → +150 + fade in, 8 frames
│   └── Apparition @ frame 72
├── Texte 3 : "1971"
│   └── Police : Montserrat Light, gris #AAAAAA, 32px, tracking +400
│   └── Animation : fade in pur, 12 frames
│   └── Apparition @ frame 88
├── Audio : musique s'apaise, cordes graves restent

Frames 121–152 (1.33s) — Freeze iconique
├── Tout figé — logo + textes
├── Drift zoom très lent : scale 100% → 102% sur 32 frames
├── Grain film boost : 15% → 20%
├── Vignette renforcée : force 0.4 → 0.6
├── Audio : note finale tenue + fade out 2s
└── Dernière frame : silence absolu
```

---

#### PHASE 6 — ENDING GENECH [01:01.32 → 01:13.35]

```
PLAN 33 [01:01.32 → 01:02.20] — 0.88s → Plan de sortie optionnel
PLAN 34 [01:02.20 → 01:13.35] — 11.15s → Fondu final au noir
      └── Fade to black : 3 secondes
      └── Logo reste en surimpression sur le noir final (opacité 30%)
      └── Silence ou ambiance stade lointaine de plus en plus douce
```

---

## PARTIE 3 — EFFETS ET TECHNIQUES : RECETTES COMPLÈTES

### 3.1 — Suppression filigrane clideo.com

**Technique 1 — Content-Aware Fill (After Effects)**
```
1. Identifier la position du filigrane (probablement bas-gauche ou bas-centre)
2. Dans AE : Calque > Nouveau > Calque de solide (couleur proche du fond)
3. Outils Roto Brush ou Masque sur la zone exacte du filigrane
4. Appliquer Content-Aware Fill (Frame Sampling = 30fps)
5. AE génère un calque de remplacement automatique
```

**Technique 2 — Clone + Motion Tracking**
```
1. Dupliquer un calque de la vidéo
2. Positionner le duplicata pour couvrir le filigrane
3. Motion Tracker (AE) : tracker la zone stable proche du filigrane
4. Lier le calque couvrant au tracker
5. Ajuster l'opacité et les masques frame par frame si nécessaire
```

**Technique 3 — Crop (si filigrane marginal)**
```
Si filigrane < 5% de la hauteur et en bordure :
1. Rogner la vidéo : Top/Bottom crop de 4-5%
2. Re-scaler à 1080×1920
3. Perte de composition mineure, rapide et propre
```

---

### 3.2 — Étalonnage cinématographique (inspiré du style Angers SCO)

#### Palette Genech
```
Noirs cible    : #050C1E  (bleu nuit — JAMAIS noir pur)
Midtones       : Légèrement désaturés (-15 global)
Highlights or  : #F5C518  (boost +30 saturation sélective sur jaune)
Accent bleu    : #1E3FAE  (renforcer lors des plans maillot/terrain)
Skin tones     : +5° hue rotation (légèrement chaud)
```

#### Nœuds DaVinci Resolve
```
Node 1 — Log Input    : Input Transform → Custom (Rec.709 to LogC sim.)
Node 2 — Primary Corr : Lift -0.05 | Gamma +0.02 | Gain -0.08
Node 3 — Hue Shift    : Curves Hue vs Hue : légère rotation vers teal
Node 4 — Selective Sat: Qualifier : sélection jaune → Saturation +30
Node 5 — Film Grain   : Grain Module : Size 1.2, Mix 15%, Luma 80%
Node 6 — Vignette     : Power Window circulaire → Opacity 40% Multiply
Node 7 — Output       : Output Transform → Rec.709
```

#### LUT Premiere Pro (Lumetri)
```
Creative Look : "SL Clean Contrast" ou "Fuji F125 Kodak 2393"
Fading Film   : +8
Sharpen       : +15
Saturation    : -15 (sur le Look, compense la désaturation)
Lumetri Manual:
  - Shadows : -40, Highlights : -20, Whites : -10, Blacks : -30
  - Clarity : +8, Dehaze : 0
  - HSL : Jaune Sat +35, Bleu Sat +10
```

---

### 3.3 — Tableau récapitulatif des transitions

| Type | Frames | Usage | TC Genech |
|------|--------|-------|-----------|
| Hard cut | 0f | Phase 3 — action pure | 00:22.90 → 00:38.80 |
| Flash blanc | 2–9f | Impacts #1 et #2 | 00:17.25 / 00:31.65 |
| Zoom punch | 4f | Impacts forts | 00:17.25 / 00:31.65 |
| Glitch RGB | 3f | Climax + début reveal | 00:31.65 / 00:48.65 |
| Dissolve | 10–15f | Phase 1, 4, transitions douces | 00:05.50 / 00:38.80 |
| Fade to black | 20–30f | Transition → Logo Reveal | 00:42.32 |
| Trim Paths | 30f | Cercle auto-dessiné logo | 00:43.82 |
| Light Sweep | 76f | Révélation logo balayage | 00:49.48 |
| Flash reveal | 2f | Logo complet apparaît | 00:54.98 |

---

### 3.4 — Sound Design : Architecture complète

#### Logique des 5 layers

```
L1 — SUB DRONE [toute la vidéo]
     Fréquence : 40Hz square wave
     Volume    : -24dB constant, léger vibrato
     Rôle      : Tension souterraine permanente

L2 — MUSIQUE [00:05.50 → fin]
     Recommandation : orchestrale électronique 120–130 BPM
     Volume    : -6dB (headroom pour les SFX)
     Mix       : Sidechain sur les impacts SFX (duck -6dB, 200ms)
     References: Hans Zimmer style, TRON Legacy, Interstellar impact moments

L3 — SFX IMPACTS [00:17.25 / 00:31.65 / 00:54.98]
     Kick 808 50–60Hz   : -3dB, attack 0ms, release 300ms
     Crash métallique   : -6dB, fréquences 200Hz–4kHz
     Whoosh directionnel: -6dB, durée 6 frames, stéréo large

L4 — AMBIANCE TERRAIN [sous-texte discret]
     Foule lointaine filtrée (HPF 2kHz) : -20dB
     Contact ballon, herbe             : -24dB
     Réverb stadium longue (decay 3s)  : send 30%

L5 — LOGO REVEAL AUDIO [00:42.32 → 01:01.32]
     00:42.32 : Sub-drone seul + particule sonore grave montante
     00:43.82 : Whoosh métallique grave (contour logo)
     00:48.65 : Glitch audio 3 frames + résonance grave
     00:49.48 : Montée orchestrale principale (crescendo 76 frames)
     00:54.98 : CLIMAX — kick 808 + crash + tutti orchestral
     00:55.10 : Note tenue violoncelles (après impact)
     01:01.32 : Fade out musical 12 secondes
     01:13.35 : Silence absolu
```

#### Points de synchronisation impératifs

| Timecode | Événement audio | Événement visuel |
|----------|----------------|-----------------|
| 00:00.00 | Silence absolu | Noir |
| 00:05.50 | Drone + début musique | Premier plan terrain |
| 00:17.25 | Impact #1 kick | Flash blanc 9f |
| 00:22.90 | Beat drop principal | Début action |
| 00:31.65 | Double impact | Flash 0.38s + 0.29s |
| 00:32.32 | Musique seule | Respiration 3.21s |
| 00:42.32 | Musique coupe / respire | Fondu noir → reveal |
| 00:49.48 | Crescendo orchestral | Balayage logo |
| 00:54.98 | CLIMAX SONORE | Logo complet |
| 01:01.32 | Décroissance | Typos + freeze |
| 01:13.35 | Silence | Dernière frame |

---

## PARTIE 4 — PROMPT ULTRA-PRÉCIS POUR AGENT IA

```
=== BRIEF MONTAGE PREMIUM — GENECH ENTENTE SPORTIVE ===
Référence : Film Angers SCO (61.72s, 24fps, 34 scenes, structure 6 phases)
Cible     : 1080×1920 px, 73.35s, 24fps, vertical 9:16

--- IDENTITÉ VISUELLE ---
Club        : Genech Entente Sportive (Hauts-de-France, France, fondé 1971)
Couleurs    : Marine #0D1B4B / Bleu royal #1E3FAE / Or #F5C518 / Blanc #FFFFFF
Badge       : Circulaire, blason croix dorée, 4 étoiles, lettre "G", "GENECH" haut, "ENTENTE SPORTIVE" bas

--- ÉTAPE 0 : SUPPRESSION FILIGRANE ---
Supprimer filigrane "cledio.com" sur toute la durée de la vidéo.
Méthode : Content-Aware Fill + masque sur zone filigrane.

--- ÉTAPE 1 : ÉTALONNAGE (appliquer en premier) ---
Base : Désaturation globale -15
Noirs : lift -0.05, teinte bleu nuit #050C1E
Highlights : Boost saturation sélective jaune/or +30
S-curve : +15 highlights / -20 shadows
Grain 35mm : taille 1.2px, opacité 15%, mode Overlay
Vignette : force 0.6, radius 65%, mode Multiply
Aberration chromatique : ±0.5px RGB, pulsation aux coupures fortes

--- ÉTAPE 2 : STRUCTURE 6 PHASES ---

PHASE 1 INTRO [00:00–00:10.50] :
2 plans | Moy. 5s | 0.23 cuts/sec
Plan 1 [0:00–0:05.50] : Noir → texture macro (herbe/ballon), slowmo 40%
Plan 2 [0:05.50–0:10.50] : Plan large terrain contre-jour, slowmo 60%
Transitions : Dissolve 15f entre plans

PHASE 2 MONTÉE [00:10.50–00:22.90] :
7 plans | Moy. 1.49s | 0.67 cuts/sec
Plans 3–6 : Maillot/écusson/joueur/technique, cuts progressivement plus courts
IMPACT #1 @ 00:16.63 : Flash blanc 9f + Scale 100→108% + Glitch RGB ±6px
RESPIRATION #1 [00:17.63–00:20.92] : Plan large 3.29s, slowmo, musique
Plans 10–12 : Insert regard/mains, accélération douce

PHASE 3 EXPLOSION [00:22.90–00:38.80] :
13 plans | Moy. 1.03s | 0.97 cuts/sec
Coupures sèches uniquement. Aucune transition. Hard cuts.
Flash blanc 2f + Zoom punch 4f aux plans 14, 16
CLIMAX @ 00:31.65 : Double flash 0.38s + 0.29s + Glitch RGB ±10px maximal
Audio : Double kick 808 + crash métallique

PHASE 4 RÉSOLUTION [00:32.32–00:42.32] :
7 plans | Moy. 1.43s | 0.70 cuts/sec
RESPIRATION #2 [00:32.32–00:35.53] : Plan 3.21s, slow 30%, musique seule
Plans 24–29 : Décelération, émotions, écusson, regards, terrain vide
Sortie : Fondu noir 20f → REVEAL

PHASE 5 LOGO REVEAL [00:42.32–01:01.32] :
STRUCTURE IDENTIQUE ANGERS SCO : 3 shots × 6.33s chacun (152 frames @ 24fps)

SHOT A [00:42.32–00:48.65] = PRÉPARATION :
- Fond #050C1E + particules dorées montantes (CC Particle World, Add blend)
- Contour cercle : Trim Paths 0→45%, stroke blanc 2px, sens horaire
- Anneau or : Trim Paths 0→70%, glow 8px or
- Blur blason central : 12px, ghost 30% opacité
- Audio : drone + whoosh grave + résonance

SHOT B [00:48.65–00:54.98] = RÉVÉLATION :
- Glitch RGB ±8px 3 frames (matérialisation)
- Light Sweep : masque feather 100px, gauche→droite, 76 frames ease
- CC Light Sweep synchro, Direction 90°, Width 0.3
- Texture métal brossé Multiply 15%
- Crescendo orchestral synchronisé au balayage

SHOT C [00:54.98–01:01.32] = AFFIRMATION :
- Flash blanc 2f → logo 100% visible
- Burst particules or radial depuis centre (CC Particle World, burst)
- Light ring or expansif Scale 0→200% en 20f, opacité 80→0%
- Pulsation breath : Scale 100→102→100%, 30 frames
- Glow edge or : rayon 8px, opacité 35%, mode Add
- Typo "ENTENTE SPORTIVE" : or #F5C518, Bebas Neue, masque bas, 12f @ frame 61
- Typo "GENECH" : blanc, 96px, tracking expansion 0→+150 + fade, 8f @ frame 72
- Typo "1971" : gris #AAAAAA, 32px, fade in 12f @ frame 88
- Freeze final : Scale 100→102% lent, grain 20%, vignette 0.6

PHASE 6 ENDING [01:01.32–01:13.35] :
Fondu au noir 3s. Logo en surimpression 30% opacité.
Audio : fade out musical 12s. Silence absolu dernière frame.

--- OVERLAYS TOUTE LA VIDÉO ---
V1 : Grain 35mm (Overlay 15%) — permanent
V2 : Vignette Multiply 40% — permanent
V3 : Aberration chromatique ±0.5px — pulsation aux impacts
V4 : Lens flares anamorphiques horizontaux — plans contre-jour (Add 25–35%)
V5 : Particules or #F5C518 — phases 5 uniquement (Add 60%)

--- TRANSITIONS ---
Hard cut  : Phase 3 exclusivement
Flash 2–9f: Impacts #1 #2 et logo reveal
Zoom 4f   : Impacts (Scale 100→108–115%)
Glitch 3f : Climax + début Shot B
Dissolve 10–15f : Phases 1, 4 transitions
Fondu noir 20f : Avant et après logo reveal
Trim Paths 30f : Contour logo Shot A
Light Sweep 76f: Logo Shot B
Flash 2f  : Logo Shot C apparition

--- AUDIO ---
Syncs obligatoires :
- 00:17.25 : Impact #1 kick 808
- 00:22.90 : Beat drop
- 00:31.65 : Double impact + crash
- 00:49.48 : Crescendo orchestral (76f)
- 00:54.98 : CLIMAX absolu
- 01:13.35 : Silence absolu

--- QUALITÉ FINALE ---
Codec : H.265 ou H.264, bitrate 20 Mbps
Format : 1080×1920 @ 24fps
Audio : AAC 320kbps stéréo
Rendu : Agence créative haut niveau, zéro effet template
=== FIN DU BRIEF ===
```

---

## PARTIE 5 — RECOMMANDATIONS PRATIQUES

### 5.1 — Logiciels (ordre de priorité)

| Tâche | Outil n°1 | Outil n°2 (gratuit) |
|-------|-----------|---------------------|
| Montage | Premiere Pro | DaVinci Resolve |
| Étalonnage | DaVinci Resolve | Lumetri (Premiere) |
| VFX / Logo Reveal | After Effects | Fusion (DaVinci) |
| Tracking / Masque watermark | Mocha Pro / AE | DaVinci Tracker |
| Son | Adobe Audition | Audacity |
| Rendu | Adobe Media Encoder | Handbrake |

### 5.2 — Sélection des rushs Genech

**Plans INDISPENSABLES à filmer ou sélectionner :**
1. Plan macro : Écusson Genech cousu sur maillot (gros plan, bokeh)
2. Plan contre-jour : Joueur dos caméra, soleil derrière (golden hour)
3. Plan action : Frappe, sprint, duel (capturer @ 120fps pour slowmo)
4. Plan équipe : Communion, regard collectif, épaule-à-épaule
5. Plan contemplatif : Terrain vide, stade, herbe en macro

**À ÉVITER :**
- Plans surexposés (brûlés = impossible à étalonner)
- Shaky cam non intentionnel
- Plans avec textes en fond ou panneaux publicitaires
- Plans trop courts (< 5 secondes de rush)

### 5.3 — Ordre de travail (workflow 8 étapes)

```
1. SUPPRESSION FILIGRANE clideo.com (première chose)
2. IMPORT + ÉTALONNAGE de base sur tous les rushs
3. SÉLECTION des 30 meilleurs plans (5 catégories)
4. MONTAGE ossature sans effets (respect timecodes)
5. SYNCHRONISATION sur la musique (BPM)
6. AJOUT transitions et effets
7. LOGO REVEAL (séquence indépendante, assembler en dernier)
8. MIXAGE AUDIO + RENDU FINAL
```

### 5.4 — Checklist qualité avant livraison

- [ ] Filigrane cledio.com supprimé
- [ ] Noirs à #050C1E (jamais noir pur)
- [ ] Grain 35mm visible sur tout le film
- [ ] Impact #1 @ 00:17.25 : Flash + kick 808
- [ ] Climax @ 00:31.65 : Double flash 0.38s + 0.29s
- [ ] Logo reveal = 3 shots égaux (6.33s chacun)
- [ ] Flash blanc logo @ 00:54.98 synchronisé sur la musique
- [ ] Typos apparaissent pendant Shot C (frames 61, 72, 88)
- [ ] Silence absolu sur la dernière frame
- [ ] Vérification sur mobile (format 9:16)
- [ ] Volume audio sur casque + haut-parleur

---

*Basé sur l'analyse réelle du film Angers SCO : 61.72s | 24fps | 34 scènes | 92 keyframes*
*Adapté pour Genech Entente Sportive : 1080×1920 | 73.35s | Format 9:16*
*Niveau : Agence créative premium | © Document usage interne production*
