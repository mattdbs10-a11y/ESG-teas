# REVEAL LOGO — FUMÉE + SCALE UP + EXIT TOP
## Genech Entente Sportive · Storyboard & Prompt Claude Design

---

## FICHE TECHNIQUE

| Paramètre | Valeur |
|-----------|--------|
| Format | 1080 × 1920 px · 9:16 vertical |
| Durée totale | **12 secondes** (288 frames @ 24fps) |
| Éléments | Fond image · Fumée · Logo PNG · Typographie optionnelle |
| Style | Cinématographique premium · sombre · dramatique |

---

## STORYBOARD — DÉCOUPAGE FRAME PAR FRAME

```
TIMELINE VISUELLE

00:00 ──────────────────────────────────────────── 00:12
  │                                                  │
  │ [FOND]──────────────────────────────────────────│
  │                                                  │
  │         [FUMÉE BAS → MILIEU]────────────────────│
  │                    │                             │
  │                    │    [LOGO NAÎT]──[GROSSIT]──►│ EXIT TOP
  │                                                  │
```

---

### ▶ FRAME 1–48 · [00:00 → 00:02] · ÉTABLISSEMENT DU FOND

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                   [ IMAGE DE FOND ]                             │
│                                                                 │
│              Entrée en fondu progressif                         │
│              Opacity 0% → 100% sur 48 frames                   │
│                                                                 │
│                                                                 │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│                    [RIEN EN BAS]                                 │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le fond apparaît en fondu depuis le noir.
Aucun autre élément n'est encore visible.

**EFFETS SUR LE FOND :**
```
Opacity      : 0% @ F1 → 100% @ F48 · Ease In logarithmique
Color grading: Désaturation −20 · Lift bleu #050C1E · Contraste +15
               Le fond doit être sombre et cinématographique
Vignette     : Circulaire · force 0.6 · #050C1E · Mode Multiply
Grain 35mm   : 1.2px · α 12% · Mode Overlay
Push In lent : Scale 100% @ F1 → 105% @ F288 (tout le plan · très lent)
```

**SON :**
```
F1  : Silence total
F24 : Sub-drone 40Hz · −30dB · entrée très douce
F40 : Ambiance lointaine très filtrée · −35dB
```

---

### ▶ FRAME 49–144 · [00:02 → 00:06] · ENTRÉE DE LA FUMÉE

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   [ IMAGE DE FOND ]                             │
│                                                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓  FUMÉE MONTE  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              │ ← milieu
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │
│─────────────────────────────────────────────────────────────────│
│ ████████████████ FUMÉE ÉPAISSE (bas) █████████████████         │ ← entrée
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
La fumée entre par le bas du cadre et monte progressivement
vers le milieu de l'image. Elle arrive à mi-hauteur du cadre
à la fin de cette phase.

**CONSTRUCTION DE LA FUMÉE :**
```
COUCHE 1 · Fumée principale (épaisse, basse)
  Source         : Fractal Noise animé OU particle system
  Couleur        : #1A1A2E (bleu-noir très sombre) → #2A2A4A (bleu foncé)
  Position Y départ : +1200px (sous le cadre, invisible)
  Position Y arrivée : +200px (milieu bas du cadre) @ F144
  Mouvement      : Ease Out (démarrage rapide, ralentit en montant)
  Opacité        : 0% @ F49 → 70% @ F96 → 60% @ F144
  Mode fusion    : Screen
  Largeur        : 110% du cadre (déborde légèrement sur les côtés)
  Turbulence     : Évolution organique · Fractal évolutif · vitesse 0.3

COUCHE 2 · Fumée secondaire (légère, vaporeuse)
  Couleur        : #3A3A6A (bleu moyen) plus claire que couche 1
  Position Y     : Suit couche 1 avec +80px de décalage (monte plus haut)
  Opacité        : 0% → 40% → 35%
  Mode fusion    : Screen
  Turbulence     : Plus rapide · organique · direction légèrement oblique

COUCHE 3 · Fumée de bord (effilochée)
  Couleur        : #FFFFFF très pâle
  Position Y     : Bord avant de la fumée (le plus haut)
  Opacité        : 0% → 20% · très vaporeuse · effilochée
  Mode fusion    : Screen · Blur 15px
```

**COMPORTEMENT ORGANIQUE :**
La fumée ne monte pas droit. Elle a une légère dérive horizontale
(±30px) et une turbulence interne continue. Les bords supérieurs
s'effilochent comme une vraie fumée de scène.

**EFFETS SUPPLÉMENTAIRES :**
```
Lumière dans la fumée : LUZ_03 Glow or #F5C518
  Position : centre du cadre, hauteur mi-fumée
  Rayon    : 120px très diffus
  Opacité  : 0% @ F49 → 25% @ F120 → 35% @ F144
  Mode     : Add
  Effet    : La fumée semble éclairée de l'intérieur · anticipation du logo

Particules légères : Points blancs 1px · ascendants dans la fumée
  Densité  : 15 points · vitesse 0.3px/frame
  Opacité  : 20% · Mode Screen
```

**SON :**
```
F49  : Whoosh atmosphérique grave · montée sur 48f · −22dB
F72  : Sub-drone monte à −20dB
F100 : Cordes graves démarrent très doucement · −28dB · ambiance
F144 : Tension musicale s'installe · note tenue
```

---

### ▶ FRAME 97–192 · [00:04 → 00:08] · NAISSANCE ET CROISSANCE DU LOGO

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   [ IMAGE DE FOND ]                             │
│                                                                 │
│                         ·  ·                                    │
│                      ·    ○    ·          ← logo naît PETIT    │
│                         ·  ·                                    │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              │
│  ░░░░░░░░░░░░░░░  FUMÉE STABLE  ░░░░░░░░░░░░░░░░░              │
│─────────────────────────────────────────────────────────────────│
│  ████████████████████████████████████████████████              │
└─────────────────────────────────────────────────────────────────┘

              ↓↓ Plus tard dans la phase ↓↓

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   [ IMAGE DE FOND ]                             │
│                                                                 │
│                     ╔═══════════╗                               │
│                     ║           ║    ← logo GROSSIT             │
│                     ║   GENECH  ║                               │
│                     ╚═══════════╝                               │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓              │
│─────────────────────────────────────────────────────────────────│
│  ████████████████████████████████████████████████              │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le logo émerge du cœur de la fumée, minuscule, et grossit
progressivement jusqu'à remplir le centre du cadre.
Il naît dans/à travers la fumée comme s'il se matérialisait.

**APPARITION DU LOGO — PHASE 1 · Naissance [F97–F120 · 1s] :**
```
Scale    : 0% @ F97 → 15% @ F120 · Ease Out
Opacity  : 0% @ F97 → 60% @ F120 · Ease In
Blur     : 20px @ F97 → 10px @ F120 (logo flou qui se clarifie)
Position : Centre du cadre · légèrement au-dessus de la fumée
Couleur  : Saturation −30 au départ (logo presque désaturé · fantomatique)
Glow     : LUZ_03 Glow or #F5C518 · Rayon 30px · α 40% · Mode Add
```

**CROISSANCE DU LOGO — PHASE 2 · Grossissement [F121–F192 · 3s] :**
```
Scale    : 15% @ F121 → 85% @ F192 · Ease IO (courbe en S)
           La croissance est fluide, organique, pas mécanique
Opacity  : 60% @ F121 → 100% @ F168 (logo devient net et plein)
Blur     : 10px @ F121 → 0px @ F168 (netteté progressive)
Position : Reste centré pendant toute la phase
Saturation: −30 @ F121 → 0 @ F180 (couleurs reviennent progressivement)
Glow     : Rayon 30px → 8px · l'aura se resserre sur le logo
Grain logo: TEX_03 Métal brossé · Multiply 12% pendant toute la phase
```

**INTERACTION FUMÉE + LOGO :**
```
La fumée s'organise autour du logo qui grossit.
Ajoute un masque de dispersion : là où le logo est solide,
la fumée est légèrement repoussée (opacité réduite de 15% dans
le rayon du logo). Effet : le logo fend la fumée en grandissant.

Particules or : commencent à orbiter autour du logo @ F144
CC Particle World : Birth Rate 1.5 · 15 pts · or #F5C518 · Mode Add
```

**EFFETS DE LUMIÈRE :**
```
F97  : LUZ_05 Light Ring · Scale 0→150% · 24f · or · Mode Add
       L'anneau s'expanse depuis le point d'apparition
F120 : LUZ_03 Glow or contour du logo · Rayon 15px → 8px sur 72f
F144 : LUZ_01 Lens Flare horizontal discret · α 20% sur le logo
```

**SON :**
```
F97  : Impact doux · résonance grave · −18dB · naissance du logo
F97  : Montée harmonique dans la musique · +2 demi-tons
F120 : Cordes s'épaississent · crescendo commence
F144 : Cuivres entrent discrètement · −16dB
F168 : Montée musicale s'intensifie · anticipation de la sortie
F192 : Peak de tension musicale · logo pleinement visible
```

---

### ▶ FRAME 193–240 · [00:08 → 00:10] · APOGÉE — LOGO PLEIN CADRE

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│               ╔═══════════════════════╗                         │
│               ║                       ║                         │
│               ║   ★  ★  ★  ★         ║                         │
│               ║       G              ║  ← LOGO COMPLET         │
│               ║   ★             ★    ║     À 85–100%           │
│               ╚═══════════════════════╝                         │
│  ░░░░░░░░░░░░░  FUMÉE S'EFFACE  ░░░░░░░░░░░░░░░░░░░            │
│─────────────────────────────────────────────────────────────────│
│  ▓▓▓▓  Fumée résiduelle basse  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le logo est à son maximum. Court moment de présence pleine.
La fumée commence à s'effacer doucement sur le bas.
C'est le seul moment où le logo est vu en entier, propre, net.

**LOGO :**
```
Scale    : 85% @ F193 → 100% @ F216 · Ease Out très doux
Opacity  : 100% stable
Blur     : 0px · parfaitement net
Glow     : LUZ_03 or rayon 8px · α 30% · stable
Pulsation: Scale 100% → 102% → 100% sur 24f (1 respiration)
```

**FUMÉE :**
```
Couches 1+2 : Opacity 60% → 20% sur 48f · Ease Out
              La fumée ne disparaît pas, elle s'efface vers le bas
              Position Y: remonte très légèrement (+20px)
Couche 3    : Opacity 20% → 5% · quasi disparue
```

**TYPOGRAPHIE OPTIONNELLE :**
```
Si souhaité, faire apparaître @ F216 :
"ENTENTE SPORTIVE" · Bebas Neue · 44px · or #F5C518 · tracking +250
ANIM : Masque bas→haut · 12 frames
Position : sous le logo · Y +420px
```

**SON :**
```
F193 : IMPACT SONORE · kick 808 grave −6dB · crash léger −12dB
       Musique atteint son peak · tous les éléments présents
F216 : Note tenue · violoncelles −8dB · stabilisation
F240 : Musique légèrement décroissante · prépare la sortie
```

---

### ▶ FRAME 241–288 · [00:10 → 00:12] · SORTIE VERS LE HAUT

```
┌─────────────────────────────────────────────────────────────────┐
│          ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑              │
│                ╔═══════════╗ ← LOGO SORT PAR LE HAUT            │
│                ║           ║                                     │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│  ░░░░░░░░░░░░░  Fumée résiduelle s'efface  ░░░░░░░░░░░          │
│─────────────────────────────────────────────────────────────────│
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            │
└─────────────────────────────────────────────────────────────────┘

              [FOND + FUMÉE RÉSIDUELLE SEULS]

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   [ IMAGE DE FOND ]                             │
│                         seul                                    │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le logo monte vers le haut du cadre et sort de l'image.
Il grossit légèrement en montant (effet de perspective/élan).
La fumée se dissipe doucement. Le fond reste seul à la fin.

**LOGO — SORTIE :**
```
Position Y : 0px @ F241 → −1300px @ F288 · Ease In (accélère en montant)
Scale      : 100% @ F241 → 130% @ F288 · Ease In (grossit en montant)
             Donne une sensation d'élan, de propulsion vers le ciel
Opacity    : 100% @ F241 → 100% @ F264 → 0% @ F288 · Ease Out final
             Le logo se dissout en sortant (ne s'arrête pas brusquement)
Blur       : 0px @ F241 → 8px @ F288 · léger flou de mouvement
Motion blur: Activer · direction verticale · force 60%

OPTIONNEL — Effet de lumière sur la sortie :
LUZ_01 Lens flare vertical (à la place du horizontal) · α 30%
Le logo laisse une traînée lumineuse en montant
```

**FUMÉE — DISSOLUTION :**
```
Toutes couches : Opacity → 0% sur 48f · Ease Out
Position Y     : +30px supplémentaires (s'élève légèrement en disparaissant)
La fumée ne coupe pas brutalement — elle s'évapore naturellement
```

**FOND — FINAL :**
```
Le fond reste visible seul, légèrement plus lumineux
Opacity fond : 100% stable
On voit le fond propre · fin de séquence
Fondu au noir optionnel : 24f si la séquence précède autre chose
```

**SON :**
```
F241 : Whoosh ascendant grave → aigu · −12dB · durée 48f
       Simule la propulsion vers le haut
F241 : Musique commence fade out progressif
F264 : Impact final · résonance · note grave tenue −10dB
F288 : Silence ou transition musicale
```

---

## RÉCAPITULATIF TIMING

| Frames | Timecode | Durée | Phase | Action principale |
|--------|----------|-------|-------|------------------|
| F1–48 | 00:00–00:02 | 2s | FOND | Fond apparaît en fondu |
| F49–144 | 00:02–00:06 | 4s | FUMÉE | Fumée entre par le bas → monte au milieu |
| F97–192 | 00:04–00:08 | 4s | LOGO | Logo naît dans la fumée → grossit |
| F193–240 | 00:08–00:10 | 2s | APOGÉE | Logo plein + fumée s'efface |
| F241–288 | 00:10–00:12 | 2s | EXIT | Logo sort vers le haut |

*Note : F97–F144 = overlap fumée + logo (simultanés)*

---

## PROMPT — DIRECTEMENT COPIABLE DANS CLAUDE DESIGN

```
Tu es un directeur artistique motion design premium.
Crée une animation de reveal de logo de 12 secondes.

ASSETS FOURNIS :
- Image de fond (jointe)
- Logo PNG Genech Entente Sportive (fond transparent · badge circulaire
  bleu marine avec croix dorée, 4 étoiles or, lettre G, texte
  GENECH en haut, ENTENTE SPORTIVE en bas)

COULEURS DU CLUB :
Marine #0D1B4B · Bleu royal #1E3FAE · Or #F5C518 · Blanc #FFFFFF
Fond noir : #050C1E uniquement · jamais #000000

FORMAT : 1080×1920 px · 9:16 · 12 secondes · 24fps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SÉQUENCE COMPLÈTE À RÉALISER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECONDES 0–2 · LE FOND APPARAÎT :
L'image de fond entre en fondu depuis le noir sur 2 secondes.
Applique sur le fond : désaturation −20, noirs bleutés (#050C1E),
contraste cinématographique, vignette circulaire (force 0.6,
couleur #050C1E, mode Multiply), grain 35mm (1.2px, α 15%, Overlay),
push in très lent (Scale 100→105% sur toute la durée de l'animation).
Aucun autre élément visible ces 2 premières secondes.
Sons : silence 1s → sub-drone 40Hz qui monte doucement −30dB.

SECONDES 2–6 · LA FUMÉE ENTRE PAR LE BAS :
Une fumée épaisse et organique entre par le bas du cadre et monte
progressivement jusqu'au milieu de l'image en 4 secondes.

Construis la fumée en 3 couches superposées en mode Screen :
Couche 1 (épaisse, basse) : Fractal Noise animé, couleur #1A1A2E,
position de départ hors cadre bas, arrive à mi-image en 4s,
mouvement Ease Out, opacité 0→70→60%, largeur 110% du cadre,
turbulence organique lente (évolution 0.3).
Couche 2 (vaporeuse) : couleur #3A3A6A plus claire, 80px plus haute
que couche 1, opacité 0→40→35%, bords effilochés, légère dérive.
Couche 3 (effilochée) : couleur blanc très pâle, bord avant,
opacité 0→20%, Blur 15px, Mode Screen.

Dans la fumée, à partir de la seconde 3 : une lumière intérieure
dorée (#F5C518) diffuse et chaude (glow très large rayon 120px,
opacité 0→25%, mode Add) comme si quelque chose allumait
la fumée de l'intérieur. Des particules légères blanches 1px
montent lentement dans la fumée (15 points, opacité 20%, Screen).
Sons : whoosh atmosphérique grave sur 2s −22dB · cordes graves
très douces démarrent à la seconde 3 −28dB.

SECONDES 4–8 · LE LOGO NAÎT ET GROSSIT :
Le logo apparaît au centre du cadre, dans la fumée, minuscule,
puis grossit progressivement jusqu'à atteindre 85% de la taille
du cadre à la seconde 8.

Naissance (secondes 4–5) :
Scale 0% → 15%, Opacity 0% → 60%, Blur 20px → 10px.
Le logo est flou et désaturé au départ (−30 saturation).
Un anneau lumineux or (Scale 0→150%, Opacity 80→0%, 24f, Mode Add)
explose depuis le centre au moment d'apparition.
Un glow or large (rayon 30px, α 40%, Mode Add) entoure le logo.

Croissance (secondes 5–8) :
Scale 15% → 85% en courbe Ease IO (fluide, organique).
Opacity 60% → 100%. Blur 10px → 0px.
Saturation −30 → 0 (les couleurs reviennent progressivement).
Le glow se resserre (rayon 30px → 8px).
Une texture de métal brossé en Multiply 15% sur le logo.
La fumée est légèrement repoussée autour du logo qui grossit
(réduis l'opacité de la fumée de 15% dans le rayon du logo).
Des particules or (15 pts, #F5C518, Mode Add) orbitent autour.
Sons : impact doux grave −18dB à la naissance · crescendo orchestre
(violons + altos + cuivres) pendant toute la croissance −16→−8dB.

SECONDES 8–10 · APOGÉE — LOGO NET ET COMPLET :
Le logo finit de grossir jusqu'à 100% · Parfaitement net · Couleurs
pleines · Glow or rayon 8px α30% stable.
Le logo pulse une fois : Scale 100→102→100% en 1 seconde (respiration).
La fumée commence à s'effacer doucement vers le bas (opacity 60→20%).
À la seconde 8.5, fais apparaître sous le logo :
"ENTENTE SPORTIVE" · Bebas Neue · 44px · or #F5C518 · tracking +250
Révélé par masque bas→haut en 12 frames. Position Y +420px.
Sons : impact kick 808 grave −6dB à la seconde 8 · note tenue −8dB.

SECONDES 10–12 · LE LOGO SORT VERS LE HAUT :
Le logo monte vers le haut du cadre et sort de l'image en 2 secondes.
Position Y : 0 → −1300px · Ease In (il accélère en montant).
Scale : 100% → 130% (il grossit légèrement en montant · sensation d'élan).
Opacity : 100% → 100% → 0% (se dissout en sortant, pas de coupure brutale).
Blur de mouvement vertical : force 60% (trainée de vitesse).
La typographie "ENTENTE SPORTIVE" suit le mouvement avec un léger délai
de 4 frames (elle part juste après le logo).
La fumée s'évapore complètement (opacity → 0% en 2s, Ease Out).
Le fond reste visible seul, légèrement plus lumineux qu'au début.
Sons : whoosh ascendant grave→aigu −12dB sur 2s · fade out musical.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÈGLES ABSOLUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Jamais de noir pur #000000 · utiliser #050C1E
✗ Grain 35mm présent sur toute la durée · jamais absent
✗ Vignette présente sur toute la durée · jamais absente
✗ La fumée ne coupe pas brutalement · toujours Ease Out
✗ La sortie du logo ne s'arrête pas · il sort du cadre jusqu'à
  disparaître complètement
✗ Aucun effet template visible · tout doit sembler crafté

RÉSULTAT ATTENDU :
Un reveal cinématographique premium · sombre · dramatique.
La fumée prépare l'arrivée · le logo se révèle avec puissance ·
il sort vers le ciel comme une icône qui s'élève.
Niveau : agence créative haut de gamme.
Format rendu : 1080×1920 · 24fps · H.265 · fond alpha si possible.
```

---

*Document : Reveal Fumée + Scale + Exit Top · Genech Entente Sportive*
*Format 1080×1920 · 12 secondes · 24fps*
