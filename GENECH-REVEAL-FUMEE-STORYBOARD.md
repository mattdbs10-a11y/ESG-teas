# REVEAL LOGO — FUMÉE + SCALE UP + EXIT TOP
## Genech Entente Sportive · Storyboard & Prompt Claude Design
### Version mise à jour avec l'image de fond réelle

---

## ANALYSE DE L'IMAGE DE FOND

```
┌─────────────────────────────────────────────────────────────────┐
│  ZONE A · CIEL SUPÉRIEUR [0–55% de la hauteur]                 │
│  Nuages bleu-gris dramatiques · gris-lilas #7A8BA0             │
│  Très photogénique · le logo sortira vers cette zone           │
│                                                                 │
│  ZONE B · CIEL CENTRAL [55–70%]                                │
│  Rayons de lumière orange qui percent les nuages               │
│  Couleurs : or #E8851A · orange #D4641A · rose #C97A85         │
│  C'est la source lumineuse principale de l'image               │
│  → La fumée sera rétroéclairée par ces tons chauds             │
│                                                                 │
│  ZONE C · HORIZON [70–80%]                                     │
│  Lumière orange intense · arbres en silhouette noire           │
│  Lignes électriques en travers · pylône d'éclairage            │
│                                                                 │
│  ZONE D · TERRAIN [80–100%]                                    │
│  Joueurs en silhouette · gazon sombre · but blanc gauche       │
│  → La fumée entrera depuis cette zone                          │
└─────────────────────────────────────────────────────────────────┘
```

**Ce fond est parfait pour ce reveal :**
- La lumière orange de l'horizon rétroéclaire naturellement la fumée
- Le ciel dramatique amplifie l'impact du logo qui monte vers lui
- Les silhouettes des joueurs ancrent la vidéo dans le football
- Le logo sortira dans le ciel dramatique — effet "élévation" maximal
- Les couleurs or/orange du coucher de soleil sont exactement les couleurs du club

---

## FICHE TECHNIQUE

| Paramètre | Valeur |
|-----------|--------|
| Format | 1080 × 1920 px · 9:16 vertical |
| Durée totale | **12 secondes** (288 frames @ 24fps) |
| Fond | Terrain football coucher de soleil · ciel dramatique orange/bleu |
| Éléments | Fond image · Fumée · Logo PNG · Typographie optionnelle |
| Style | Cinématographique premium · contre-jour · dramatique golden hour |

---

## COLOR GRADING DU FOND

Le fond est déjà cinématographique. Les ajustements à appliquer :

```
Saturation globale  : −10 (légère désaturation · ton film)
Highlights ciel     : −15 (ne pas brûler les zones orange)
Shadows terrain     : −20 (silhouettes encore plus sombres)
Lift bleu-nuit      : très léger décalage bleu dans les noirs (#050C1E)
Contraste           : +10 (renforcer le séparateur clair/sombre)
Clarté              : +8 (détail nuages)
Température         : +100K (renforcer le côté golden hour)
Grain 35mm          : 1.2px · α 15% · Overlay · PERMANENT
Vignette            : #050C1E · Force 0.55 · Radius 65% · PERMANENT
Push In lent        : Scale 100% → 106% sur 12s (légère progression)
```

**Effet recherché :** Le fond doit sembler tiré d'un film de football
de prestige. Les joueurs en silhouette restent lisibles mais sombres.
Le ciel orange doit être dramatique sans être surexposé.

---

## STORYBOARD — DÉCOUPAGE FRAME PAR FRAME

```
TIMELINE VISUELLE

00:00 ──────────────────────────────────────────── 00:12
  │                                                  │
  │ [FOND TERRAIN + CIEL]────────────────────────── │ Push In
  │                                                  │
  │              [FUMÉE BAS TERRAIN → HORIZON]───── │
  │                   Rétroéclairée par l'orange     │
  │                       │                          │
  │                       │  [LOGO NAÎT]──[GROSSIT]─►│ ↑ EXIT CIEL
  │                                                  │
  ├──────┼────────────────┼──────────────────────────┤
  0s     2s               4s              8s  10s   12s
```

---

### ▶ FRAME 1–48 · [00:00 → 00:02] · ÉTABLISSEMENT DU FOND

```
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░ CIEL NUAGEUX BLEU-GRIS ░░░░░░░░░░░░░░           │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░            │
│                                                                 │
│  ▓▓▓▓▓▓▓ RAYONS ORANGE / LUMIÈRE QUI PERCE ▓▓▓▓▓▓▓            │
│                                                                 │
│  ████  Silhouettes arbres + joueurs + but  ██████              │
│─────────────────────────────────────────────────────────────────│
│  ████████ GAZON SOMBRE — TERRAIN ██████████████████            │
└─────────────────────────────────────────────────────────────────┘
 Fondu depuis le noir · 48f · Ease In logarithmique
```

**ACTION :**
L'image de fond apparaît progressivement depuis le noir.
On découvre le terrain, les joueurs en silhouette, le ciel dramatique.
Ce plan doit s'installer avec une sensation de grandeur et de mélancolie.

**EFFETS :**
```
Opacity fond : 0% → 100% · 48f · Ease In logarithmique
               Pas linéaire — l'image "naît" progressivement

Color grading : Voir section ci-dessus (appliquer dès la 1ère frame)

LUZ_01 Lens flare : Positionné sur la source de lumière orange
                    à l'horizon · α 0% → 20% · Mode Add
                    Horizontal streak bleu-blanc qui émerge avec le fond

Mouvement      : Push In Scale 100% @ F1 (s'exécute sur toute la durée)
```

**SON :**
```
F1  : Silence absolu
F20 : Bruit de vent doux · −35dB · très filtré
F36 : Sub-drone 40Hz · −32dB · naissance imperceptible
F48 : Sub-drone −28dB · on le sent plus qu'on l'entend
```

---

### ▶ FRAME 49–144 · [00:02 → 00:06] · ENTRÉE DE LA FUMÉE

```
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░ CIEL DRAMATIQUE ░░░░░░░░░░░░░░░░░░             │
│                                                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                │ ← MILIEU
│  ▓ Fumée monte · rétroéclairée par l'orange horizon ▓          │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒            │
│  ▒▒▒▒▒▒▒▒  Fumée effilochée · bords vapeur  ▒▒▒▒▒▒▒            │
│  ████  Silhouettes joueurs · but · arbres   █████              │
│─────────────────────────────────────────────────────────────────│
│  ████████████ TERRAIN / FUMÉE ÉPAISSE ██████████████           │ ← ENTRÉE
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
La fumée entre par le bas (zone terrain) et monte vers le milieu
de l'image (zone horizon / ciel bas). Elle est rétroéclairée
par la lumière orange du coucher de soleil — ce qui lui donne
une teinte chaude naturelle sur ses bords inférieurs.

**CONSTRUCTION DE LA FUMÉE — 3 COUCHES :**

```
COUCHE 1 · Fumée principale (base, épaisse)
  Couleur        : #1A1530 (bleu-violet sombre) → teintes sombres
                   NB : les bords s'illumineront naturellement
                   grâce aux tons orange du fond (mode Screen)
  Position Y     : +1400px @ F49 (sous le cadre)
               → +250px @ F144 (milieu de l'image)
  Mouvement      : Ease Out · rapide au départ · ralentit en arrivant
  Opacity        : 0% @ F49 → 65% @ F96 → 55% @ F144
  Mode fusion    : Screen (laisse transparaître le fond orange)
  Largeur        : 115% du cadre · déborde sur les côtés
  Turbulence     : Fractal Noise · Evolution 0.3 · Scale 200%
                   Mouvement horizontal ±25px · organique · lent

COUCHE 2 · Fumée secondaire (vaporeuse, plus haute)
  Couleur        : #2A2545 (bleu-mauve) légèrement plus claire
  Position Y     : +80px au-dessus couche 1 (monte plus haut)
  Opacity        : 0% → 40% → 35%
  Mode fusion    : Screen
  Blur           : 8px · bords très doux
  Turbulence     : plus rapide · drift horizontal doux

COUCHE 3 · Fumée de bord (effilochée, vapeur fine)
  Couleur        : Blanc très pâle #E8E8FF
  Position Y     : Bord avant · la plus haute des 3 couches
  Opacity        : 0% → 18% · très subtile
  Mode fusion    : Screen
  Blur           : 20px · presque immatérielle

INTERACTION AVEC LE FOND :
  Le mode Screen laisse transparaître la lumière orange du fond
  à travers la fumée. Les bords inférieurs de la fumée semblent
  naturellement rétroéclairés par le coucher de soleil.
  NE PAS ajouter de lumière artificielle orange sur la fumée —
  le fond fait ce travail naturellement.
```

**LUMIÈRE DANS LA FUMÉE :**
```
Glow or anticipateur : LUZ_03 #F5C518 · très diffus
  Position   : Centre du cadre · mi-hauteur de la fumée
  Rayon      : 150px (très large · impression de présence imminente)
  Opacity    : 0% @ F49 → 20% @ F120 → 30% @ F144
  Mode       : Add
  Rôle       : Le logo va apparaître ici · la lumière le précède

Particules ascendantes :
  Couleur    : Blanc très pâle #F0F0E0
  Taille     : 1–2px · 12 points
  Vitesse    : 0.4px/frame · ascendants
  Opacity    : 15% · Mode Screen
  Apparition : @ F72 dans la fumée
```

**SON :**
```
F49  : Whoosh grave atmosphérique · −22dB · montée sur 48f
F72  : Sub-drone −20dB · s'affirme
F96  : Cordes graves · pizzicato très doux · −28dB
F120 : Harmonie montante dans les cordes · note tenue · −24dB
F144 : Tension s'installe · le glow or dit que quelque chose arrive
```

---

### ▶ FRAME 97–192 · [00:04 → 00:08] · NAISSANCE ET CROISSANCE DU LOGO

```
[F97–F120 · Naissance]
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░ CIEL DRAMATIQUE ░░░░░░░░░░░░░░░░░░            │
│                                                                 │
│                      ·  ◎  ·                                   │ ← logo minuscule
│                    · logo  ·                                    │   flou · fantôme
│                      ·     ·                                    │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓ FUMÉE STABLE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          │
│─────────────────────────────────────────────────────────────────│
│  ████████████████████████████████████████████████              │
└─────────────────────────────────────────────────────────────────┘

[F168–F192 · Croissance avancée]
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░ CIEL DRAMATIQUE ░░░░░░░░░░░░░░░░░░            │
│                                                                 │
│             ╔══════════════════════╗                            │
│             ║                      ║  ← logo grossit           │
│             ║   ★  GENECH  ★       ║     couleurs reviennent   │
│             ╚══════════════════════╝                            │
│  ▓▓▓▓▓▓  fumée repoussée autour  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          │
│─────────────────────────────────────────────────────────────────│
└─────────────────────────────────────────────────────────────────┘
```

**POSITION DU LOGO :**
Centre horizontal · verticalement au tiers supérieur de la fumée,
soit approximativement au niveau de l'horizon — là où la lumière
orange du fond est la plus intense. Cette position crée un effet
de rétroéclairage naturel sur le logo.

**APPARITION — NAISSANCE [F97–F120 · 1 seconde] :**
```
Scale       : 0% → 15% · Ease Out
Opacity     : 0% → 55% · Ease In
Blur        : 25px → 12px · le logo émerge du flou
Position    : Centre du cadre · légèrement au-dessus de la fumée
Saturation  : −40 (logo quasi monochrome · fantomatique)
Couleur     : Très désaturé · silhouette sombre

LUZ_05 Light Ring au moment de l'apparition :
  Scale 0% → 180% · 24f · or #F5C518 · Opacity 70→0% · Mode Add
  L'anneau s'expanse depuis le point zéro du logo

LUZ_03 Glow rétroéclairage :
  Couleur : Mélange #E8851A (orange du fond) + #F5C518 (or club)
  Rayon   : 40px · Opacity 50% · Mode Add
  Effet   : Le logo semble rétroéclairé par le coucher de soleil
```

**CROISSANCE [F121–F192 · 3 secondes] :**
```
Scale       : 15% @ F121 → 85% @ F192
              Courbe : Ease IO avec légère accélération au milieu
              NI trop rapide · NI trop lente · fluide et organique
Opacity     : 55% → 100% · logo devient pleinement solide @ F168
Blur        : 12px → 0px · netteté progressive
Saturation  : −40 → 0 · les couleurs navyblue/gold reviennent
              Les couleurs arrivent progressivement · ce n'est pas brusque

INTERACTION FUMÉE + LOGO :
  Crée un masque de dispersion autour du logo grandissant.
  Dans un rayon de 30px autour du bord du logo :
  réduire l'opacité de la fumée de 20%.
  Effet : le logo repousse doucement la fumée en grandissant.
  La fumée se "plie" autour de lui sans le traverser.

GLOW RÉTROÉCLAIRAGE ÉVOLUE :
  Glow orange-or sur contour du logo :
  @ F121 : Rayon 40px · or+orange · Opacity 50%
  @ F168 : Rayon 15px · or #F5C518 · Opacity 40%
  @ F192 : Rayon 8px · or pur · Opacity 35%
  L'aura passe d'un halo large imprécis à un glow net sur le contour

TEXTURE MÉTAL BROSSÉ :
  TEX_03 · Multiply 12% · apparaît @ F144 progressivement
  Renforce la matière "solide" du logo en train de se former

PARTICULES OR :
  CC Particle World @ F144 :
  Birth Rate 2.0 · 20 pts · #F5C518 · Mode Add
  Orbitent autour du logo · rayon d'orbite suit la scale du logo
  Vitesse 0.8 · Gravity −0.05 · remontent légèrement
```

**SON :**
```
F97  : Impact doux · résonance grave · −18dB · "quelque chose naît"
F97  : Harmonie +2 demi-tons dans les cordes
F120 : Crescendo commence · violons entrent · −20dB
F144 : Altos rejoignent · montée plus marquée · −16dB
F168 : Cuivres très doux en arrière-plan · −18dB
F192 : Musique atteint 60% de son intensité maximum
       Logo presque complet · tension musicale forte
```

---

### ▶ FRAME 193–240 · [00:08 → 00:10] · APOGÉE — LOGO PLEIN FACE AU CIEL

```
┌─────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░ CIEL NUAGEUX DRAMATIQUE ░░░░░░░░░░░░░░░░░          │
│                                                                 │
│           ╔════════════════════════════════╗                    │
│           ║  ★  ★   ★   ★               ║                    │
│           ║          G                    ║  ← 100%            │
│           ║  GENECH   ENTENTE SPORTIVE   ║     net · complet  │
│           ╚════════════════════════════════╝                    │
│                                                                 │
│  ░░░░░░░░░  Fumée s'efface doucement  ░░░░░░░░░░░░░           │
│  ████  silhouettes joueurs à peine visibles  ████              │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le logo est pleinement révélé, devant le ciel dramatique orange.
C'est l'image la plus forte de la séquence.
La fumée commence à s'effacer doucement vers le bas.
Un seul battement de respiration avant la sortie.

**LOGO :**
```
Scale       : 85% → 100% · F193–F216 · Ease Out très progressif
Opacity     : 100% stable
Blur        : 0px · parfaitement net
Saturation  : 0 · couleurs club pleines (marine, or, blanc)
Contraste logo : +8 (le logo s'affirme face au ciel)

Glow or     : Rayon 8px · α 35% · Mode Add
              Le glow or résonne avec les tons orange du fond

Pulsation "breath" :
  Scale : 100% → 102% → 100% · 1 cycle sur 24 frames
  Ease IO · Le logo "respire" · organique · vivant

Lumière rétro naturelle du fond :
  Le coucher de soleil orange du fond éclaire le dessous du logo
  Renforcé par un Glow directionnel depuis le bas :
  LUZ_03 · direction bas → haut · Rayon 60px · Orange #E8851A
  α 25% · Mode Add · L'underlight donne de la profondeur
```

**FUMÉE — DÉBUT D'EFFACEMENT :**
```
Couches 1+2 : Opacity 55% → 20% sur 48f · Ease Out lent
              La fumée descend légèrement en s'effaçant (+15px Y)
              Elle ne disparaît pas brusquement · fondu naturel
Couche 3    : Opacity 18% → 5% · quasi fantôme
```

**TYPOGRAPHIE :**
```
@ F216 (9ème seconde) : Apparition "ENTENTE SPORTIVE"
  Police   : Bebas Neue · 44px · or #F5C518 · tracking +250
  Position : Centré · sous le logo · Y +420px
  Animation: Masque bas→haut · 12 frames · Ease IO
  Glow     : LUZ_03 · Rayon 4px · or · α 20%
  Ombre    : AUCUNE — underlight orange naturel du fond suffit
```

**SON :**
```
F193 : IMPACT SONORE — le plus fort avant le climax
       Kick 808 · 52Hz · −6dB
       Crash léger · −12dB
       Musique atteint 80% · tous les éléments

F216 : Note tenue · violoncelles · −8dB · stabilisation
F240 : Musique commence légère décroissance · prépare la sortie
       Un whoosh très subtil commence déjà en sous-main
```

---

### ▶ FRAME 241–288 · [00:10 → 00:12] · SORTIE VERS LE CIEL

```
[F241 — Logo commence à monter]
┌─────────────────────────────────────────────────────────────────┐
│         ↑↑  ╔══════════════════╗  ↑↑                           │
│              ║   logo monte    ║      ← Scale grossit
│              ╚══════════════════╝         en montant
│                                                                 │
│  ░░░░ CIEL — le logo monte DANS le ciel dramatique ░░░░        │
│                                                                 │
│  ▒▒▒▒▒▒▒▒  Fumée résiduelle très légère  ▒▒▒▒▒▒▒▒▒           │
│  ████  terrain · silhouettes · quasi seuls  ████               │
└─────────────────────────────────────────────────────────────────┘

[F288 — Logo sorti · fond seul]
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ░░░░░░░░ CIEL NUAGEUX DRAMATIQUE SEUL ░░░░░░░░░░░░           │
│                     [logo disparu]                              │
│  ▓▓▓▓▓▓▓▓  lumière orange horizon  ▓▓▓▓▓▓▓▓▓▓▓▓▓             │
│  ████  joueurs en silhouette · terrain  ████████               │
└─────────────────────────────────────────────────────────────────┘
```

**ACTION :**
Le logo monte vers le ciel dramatique et sort du cadre par le haut.
Il grossit légèrement en montant (effet d'élan, de propulsion).
Il se dissout progressivement dans le ciel — pas une coupe.
La fumée s'évapore complètement. Le fond reste seul, majestueux.

**LOGO — SORTIE :**
```
Position Y  : 0px @ F241 → −1350px @ F288
              Ease In fort : lent au départ → accélère fortement
              Le mouvement est d'abord hésitant puis explosif

Scale       : 100% @ F241 → 135% @ F288 · Ease In
              Le logo grossit en montant — donne une sensation
              de propulsion · comme un décollage

Opacity     : 100% @ F241 → 100% @ F260 → 0% @ F288 · Ease Out
              Se dissout dans le ciel · ne s'arrête pas brusquement

Blur        : 0px @ F241 → 6px @ F288
              Légère perte de netteté dans le mouvement

Motion Blur : Activé · direction verticale · force 70%
              Trainée verticale qui accentue la vitesse

Glow sortie : LUZ_03 or · s'intensifie légèrement (Rayon 15px)
              avant de disparaître avec le logo

EFFET TRAINÉE LUMINEUSE (optionnel premium) :
  Dupliquer le logo · décaler de +8 frames en arrière
  Opacity calque duplicata : 15% · Blur 12px · Mode Add
  Crée une impression de sillage lumineux dans le ciel
```

**TYPOGRAPHIE — SORTIE :**
```
"ENTENTE SPORTIVE" suit le logo avec un délai de 4 frames
  Position Y : suit logo Y + 420px constant
  Opacity    : fade out commence @ F260 → 0% @ F285
```

**FUMÉE — DISSOLUTION FINALE :**
```
Toutes couches : Opacity → 0% sur 48f · Ease Out très progressif
Position Y     : +25px supplémentaires (légère élévation finale)
La fumée ne disparaît pas elle s'évapore · mouvement naturel
```

**FOND — IMAGE FINALE :**
```
Le fond terrain/ciel reste visible seul
LUZ_01 Lens flare orange horizon : α 20% → 30% (légèrement renforcé)
Le fond reprend "son espace" · fin sur l'image de départ
Fondu au noir optionnel : 24f si la séquence est intégrée dans un montage
```

**SON :**
```
F241 : Whoosh ascendant · grave → aigu sur 48 frames · −12dB
       Monte en fréquence avec le logo (synchronisé)
F241 : Musique commence son fade out · progressif
F260 : Résonance grave finale · note tenue longue · −10dB
F288 : Musique presque silencieuse
       Fin : silence ou ambiance terrain · vent doux · bruit de stade lointain
```

---

## RÉCAPITULATIF TIMING COMPLET

| Frames | TC | Durée | Phase | Action |
|--------|----|-------|-------|--------|
| F1–48 | 00:00–00:02 | 2s | FOND | Fond apparaît · color grading · atmosphere |
| F49–96 | 00:02–00:04 | 2s | FUMÉE A | Fumée entre par le bas · monte rapidement |
| F97–144 | 00:04–00:06 | 2s | FUMÉE B + LOGO | Fumée stable · logo naît (overlap) |
| F145–192 | 00:06–00:08 | 2s | CROISSANCE | Logo grossit 15%→85% · fumée stable |
| F193–240 | 00:08–00:10 | 2s | APOGÉE | Logo 100% · ciel · typographie |
| F241–288 | 00:10–00:12 | 2s | EXIT | Logo sort vers le ciel dramatique |

---

## PROMPT — DIRECTEMENT COPIABLE DANS CLAUDE DESIGN

```
Tu es un directeur artistique motion design premium.
Crée une animation de reveal de logo de 12 secondes.

ASSETS FOURNIS :
- Image de fond (jointe) : terrain de football au coucher de soleil.
  Ciel dramatique en bleu-gris dans le haut, nuages avec rayons de
  lumière orange/doré qui percent en bas du ciel. Silhouettes de
  joueurs sur le terrain en premier plan, arbres en contre-jour,
  pylône d'éclairage, but blanc à gauche.
- Logo PNG (joint) : Genech Entente Sportive, fond transparent.
  Badge circulaire, bleu marine #0D1B4B, croix dorée, 4 étoiles or,
  lettre G centrale, "GENECH" en haut, "ENTENTE SPORTIVE" en bas.

COULEURS DU CLUB :
Marine #0D1B4B · Bleu royal #1E3FAE · Or #F5C518 · Blanc #FFFFFF
Fond noir de référence : #050C1E (jamais #000000)

FORMAT : 1080×1920 px · 9:16 · 12 secondes · 24fps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR GRADING DU FOND À APPLIQUER EN PREMIER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applique ce traitement sur l'image de fond :
Désaturation légère −10. Baisser les hautes lumières du ciel −15
pour ne pas brûler les zones oranges. Assombrir les ombres du terrain
−20 (joueurs encore plus en silhouette). Légère dominante bleue dans
les noirs (#050C1E). Contraste +10. Clarté nuages +8. Température
+100K (renforcer le golden hour). Grain 35mm permanent (1.2px, α15%,
Overlay). Vignette circulaire permanente (couleur #050C1E, force 0.55,
radius 65%, Multiply). Push In très lent : Scale 100%→106% sur 12s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SÉQUENCE COMPLÈTE À RÉALISER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECONDES 0–2 · LE FOND APPARAÎT :
L'image de fond entre en fondu depuis le noir sur 2 secondes,
Ease In logarithmique (pas linéaire · l'image naît progressivement).
Ajoute un lens flare horizontal positionné sur la source de lumière
orange à l'horizon, opacité 0→20%, mode Add.
Sons : silence 1s · sub-drone 40Hz −32dB à partir de la seconde 1.5.

SECONDES 2–6 · LA FUMÉE ENTRE PAR LE BAS :
Une fumée organique entre par le bas du cadre et monte jusqu'au
milieu de l'image (à hauteur de l'horizon environ) en 4 secondes.
La lumière orange du fond doit naturellement rétroéclairer la fumée
grâce au mode Screen — ne pas ajouter de lumière orange artificielle.

Construis la fumée en 3 couches en mode Screen :
Couche 1 (épaisse) : Fractal Noise #1A1530, part hors cadre bas,
arrive à mi-image en 4s, Ease Out, opacité 0→65→55%,
largeur 115%, turbulence 0.3, dérive horizontale ±25px.
Couche 2 (vaporeuse) : couleur #2A2545, 80px plus haute que couche 1,
opacité 0→40%, Blur 8px, bords effilochés.
Couche 3 (fine) : blanc pâle #E8E8FF, bord avant, opacité 0→18%,
Blur 20px, quasi immatérielle.

À partir de la seconde 3, fais apparaître un glow très diffus doré
(#F5C518, rayon 150px, opacité 0→30%, Mode Add) au centre du cadre
dans la fumée : le logo va arriver ici, la lumière le précède.
Des particules blanches très légères (1px, 12 points, 15% opacité)
montent lentement dans la fumée en mode Screen.
Sons : whoosh atmosphérique grave −22dB · cordes graves
très douces −28dB à la seconde 3.

SECONDES 4–8 · LE LOGO NAÎT ET GROSSIT :
Le logo apparaît au centre du cadre, dans la fumée, positionné
à hauteur de l'horizon (là où la lumière orange est la plus forte).
Il naît minuscule et grossit jusqu'à 85% de la largeur du cadre.

Naissance (secondes 4–5) :
Scale 0%→15%, Opacity 0%→55%, Blur 25px→12px.
Le logo est flou, désaturé à −40 (quasi fantôme sombre).
Au moment de l'apparition : un anneau lumineux or (Scale 0→180%,
Opacity 70→0%, 24 frames, Mode Add) explose depuis le centre.
Un glow de rétroéclairage (mélange orange #E8851A + or #F5C518,
rayon 40px, opacité 50%, Mode Add) entoure le logo comme s'il
était éclairé par le coucher de soleil.

Croissance (secondes 5–8) :
Scale 15%→85% en courbe Ease IO fluide.
Opacity 55%→100%. Blur 12px→0px.
Saturation −40→0 (les couleurs navy/or reviennent progressivement).
Le glow de rétroéclairage se resserre : rayon 40px→8px, devient
un glow or pur (#F5C518) net sur le contour du logo.
Texture métal brossé en Multiply 12% à partir de la seconde 5.5.
La fumée se "plie" légèrement autour du logo qui grossit : réduis
l'opacité de la fumée de 20% dans un rayon de 30px autour du logo.
Des particules or (20 pts, #F5C518, Mode Add) orbitent autour.
Sons : impact doux grave −18dB à la naissance · crescendo orchestre
(violons + altos + cuivres) pendant toute la croissance.

SECONDES 8–10 · APOGÉE — LOGO PLEIN FACE AU CIEL DRAMATIQUE :
Le logo finit sa croissance à 100%, parfaitement net, couleurs pleines.
Il pulse une fois (Scale 100→102→100%, Ease IO, 1 seconde).
Glow or rayon 8px α35% stable. Un glow directionnel bas→haut
orange (#E8851A, rayon 60px, α25%) simule le rétroéclairage
naturel du coucher de soleil sur le dessous du badge.
La fumée s'efface doucement vers le bas (opacity 55→20%).
À la seconde 8.5 : fais apparaître "ENTENTE SPORTIVE" en Bebas Neue
44px or #F5C518 tracking +250, révélé par masque bas→haut en 12f,
positionné sous le logo. Glow or rayon 4px sur le texte.
Sons : kick 808 52Hz −6dB à la seconde 8 · note tenue violoncelles.

SECONDES 10–12 · LE LOGO SORT VERS LE CIEL :
Le logo monte vers le haut du cadre et sort de l'image en 2 secondes.
Le ciel dramatique orange-bleu est son horizon de sortie.

Mouvement : Position Y de 0 à −1350px, Ease In fort (lent puis
accélère fortement, comme un décollage).
Scale : 100%→135% (grossit en montant · sensation d'élan · décollage).
Opacity : 100% stable → disparaît seulement à partir de la seconde 11
(0% à la seconde 12). Se dissout dans le ciel · ne coupe pas.
Blur mouvement vertical : force 70% (trainée de vitesse).
"ENTENTE SPORTIVE" suit avec 4 frames de délai, même trajectoire.
La fumée s'évapore totalement (opacity→0%, Ease Out, 2 secondes).
Le fond terrain/ciel reste seul, légèrement plus lumineux.
Sons : whoosh ascendant grave→aigu synchronisé au mouvement · −12dB.
Fade out musical · silence ou ambiance terrain à la fin.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÈGLES ABSOLUES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗ Jamais de noir pur #000000 · fond de référence #050C1E
✗ Grain 35mm présent sur toute la durée · jamais absent
✗ Vignette présente sur toute la durée · jamais absente
✗ La fumée est en mode Screen · elle laisse transparaître le fond
✗ Ne pas coloriser la fumée en orange artificiel · laisser le fond
  rétroéclairer naturellement à travers le mode Screen
✗ La sortie du logo ne s'arrête pas · il sort complètement du cadre
✗ La fumée ne coupe pas brusquement · Ease Out naturel
✗ Aucun effet template visible · crafté à la main

RÉSULTAT ATTENDU :
Un reveal cinématographique qui exploite le coucher de soleil
dramatique comme rétroéclairage naturel de la fumée et du logo.
La fumée monte du terrain comme une brume d'avant-match.
Le logo emerge de cette brume, rétroéclairé par l'or du ciel.
Il s'élève vers le ciel dramatique comme une icône qui transcende.
Niveau : agence créative football haut de gamme.
Format rendu : 1080×1920 · 24fps · H.265 · fond alpha si possible.
```

---

*Document mis à jour avec image de fond réelle*
*Terrain football · coucher de soleil dramatique · ciel nuageux or/bleu*
*Genech Entente Sportive · 1080×1920 · 12 secondes · 24fps*
