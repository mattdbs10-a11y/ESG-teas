# PROMPT FINAL — CLAUDE DESIGN
## Genech Entente Sportive · Transformation complète de A à Z
### Version directement copiable

---

> **MODE D'EMPLOI**
> 1. Ouvre Claude Design
> 2. Attache : ta vidéo source MP4 + le logo PNG du club
> 3. Copie TOUT le texte ci-dessous et colle-le dans Claude Design
> 4. Le prompt couvre l'intégralité de la vidéo — pas seulement le reveal

---

```
Tu es un directeur de post-production senior d'une agence sportive premium.

Je te fournis deux fichiers :
- Une vidéo source MP4 (1080×1920 · 9:16 · 73 secondes environ)
- Un logo PNG du club Genech Entente Sportive (fond transparent)

Ta mission : transformer intégralement cette vidéo de la première
à la dernière frame pour en faire un teaser football premium.
Tu vas appliquer la direction artistique complète décrite ci-dessous
sur TOUTE la vidéo, de A à Z, pas uniquement sur le reveal final.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 0 · NETTOYAGE — FAIRE EN PREMIER, AVANT TOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Supprime le filigrane "cledio.com" présent sur toute la durée de la
vidéo source. Utilise un masque clone ou Content-Aware Fill sur la
zone concernée. La vidéo de travail doit être propre avant tout effet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 1 · COLOR GRADING — APPLIQUER SUR TOUS LES PLANS DE LA VIDÉO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Applique ce traitement colorimétrique sur CHAQUE plan de la vidéo :

LES NOIRS : Ne jamais utiliser le noir pur #000000.
Tous les noirs de la vidéo doivent tirer vers le bleu nuit #050C1E.
Remonte très légèrement le lift des canaux R, G, B avec une dominante
bleue. Le noir le plus profond visible doit rester #050C1E.

LA SATURATION : Désature l'ensemble de −15.
Puis resature sélectivement : boost +35 sur les jaunes et les ors
(couleur #F5C518 du club), et boost +12 sur les bleus (maillot #1E3FAE).
Désature les verts (herbe) de −20 pour qu'ils restent neutres.

LE CONTRASTE : Applique une courbe en S modérée.
Descends les ombres de −20 points. Comprime les hautes lumières
de −15 points. Les blancs ne doivent jamais brûler.

LA TEMPÉRATURE : Variable selon la phase de la vidéo.
Début de la vidéo (intro) : légèrement froid (−200K).
Milieu (action) : neutre.
Fin avant le reveal : très chaud, doré, golden hour (+400 à +500K).

VARIATIONS PAR MOMENT :
- Plans d'action rapide : pousse le contraste à +20, désature à −25.
  Les couleurs doivent presque partir vers le noir et blanc aux impacts.
- Plans lents et contemplatifs : plus chaud, plus doux, grain visible,
  température +300 à +500K, tons or amplifiés.
- Plans de transition vers le reveal : très chaud, presque sépia doré.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 2 · OVERLAYS PERMANENTS — SUR TOUTE LA DURÉE DE LA VIDÉO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ces éléments visuels doivent être présents de la frame 1 à la dernière.
Ils ne s'éteignent jamais. Crée des calques dédiés au-dessus de tout.

GRAIN 35MM : Applique un grain de film 35mm sur toute la vidéo.
Taille des particules 1.2px, monochrome, distribution gaussienne.
Opacité 15% en mode Overlay. Pendant les plans lents et poétiques,
monte l'opacité à 25%. Pendant le reveal final, maintiens à 20%.
Ce grain ne doit jamais être absent d'une seule frame.

VIGNETTE : Applique une vignette circulaire permanente sur toute
la vidéo. Couleur #050C1E (bleu nuit, jamais noir pur), rayon 65%
du cadre, force 0.5 en mode Multiply. Renforce à 0.7 pendant le
reveal du logo. Monte à 0.8 sur le fondu final. Ne jamais supprimer.

ABERRATION CHROMATIQUE : Décale le canal rouge de +0.4px vers la
droite et le canal bleu de −0.4px vers la gauche en permanence,
opacité 20% au repos en mode Normal. Aux moments d'impact (voir
étape 4), fais exploser ce décalage à ±8px et opacité 80–100%
pendant 1 frame, puis redescends en 6 frames. Ajoute aussi des
lignes de scan horizontales très discrètes (1px, espacement 4px,
opacité 3%) pour une texture légère permanente.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 3 · OVERLAYS SITUATIONNELS — SELON LE CONTENU DES PLANS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ajoute ces éléments sur les plans qui le permettent visuellement.

SUR LES PLANS CONTRE-JOUR ET EN PLEINE LUMIÈRE :
Ajoute un lens flare anamorphique horizontal, de style cinéma.
Le streak doit être bleu-blanc, long (70% de la largeur du cadre),
en mode Add, opacité 25 à 35%. Il doit sembler naturel, lié à la
source lumineuse dans le plan.

SUR LES PLANS CONTEMPLATIFS ET LENTS :
Ajoute une légère fuite de lumière (light leak) chaude orange-ambrée
dans un coin supérieur, mode Screen, opacité 15 à 25%.
Ajoute aussi des particules de poussière très lentes ascendantes,
points de 1 à 3px, 20 à 30 points visibles, opacité 10 à 20%.
Ajoute une légère fumée volumétrique bleu sombre (#1E2B4A)
sur l'horizon bas du plan, mode Screen, opacité 6 à 12%.

SUR LES PLANS D'ÉCUSSON ET DE LOGO (plans macro du maillot) :
Ajoute un glow doré (#F5C518) sur les éléments dorés du maillot
et de l'écusson. Rayon 8px, intensité 0.7, mode Add, opacité 30%.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 4 · RYTHME, TRANSITIONS ET EFFETS — TOUTE LA VIDÉO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

La vidéo suit une structure en 6 phases avec un rythme très précis.
Applique les effets de montage suivants sur toute la timeline.

── PHASE 1 · INTRO [0:00 → 0:10] ──────────────────────────────────

Ces 10 premières secondes sont contemplatices et sombres.
Le ton est posé, lourd, mystérieux. Aucune action.
Vitesse des plans : 40 à 45% (slowmo profond).
Commence par 1.5 secondes de noir #050C1E absolu.
Puis un premier plan macro très flou (herbe, ballon, texture)
qui se clarifie progressivement, Blur 20px → 8px.
Puis un plan large du terrain en contre-jour.
Transitions entre ces plans : dissolve doux de 15 frames.
Aucune typographie sur ces 10 secondes.
Mouvement caméra : push in très lent (Scale 100% → 104%)
sur toute la durée du plan.

── PHASE 2 · MONTÉE [0:10 → 0:23] ─────────────────────────────────

La vidéo commence à s'identifier. Plans du club, du maillot, des
joueurs. L'énergie monte progressivement.
Vitesse des plans : 65 à 80% (ralenti modéré).
Transitions : hard cuts entre les plans.
Mouvements caméra : alternance push in et pull out lents.

À environ 0:18, place le PREMIER IMPACT de la vidéo :
Un plan ultra-court (10 frames = 0.4 secondes) d'une action soudaine.
Sur ce plan : flash blanc 3 frames (opacité 0→100→0), scale 100→112%
en 4 frames, shake ±5px, aberration chromatique à 80%, scan lines 15%.
Immédiatement après (0:19), place un plan long de 3.5 à 4 secondes
en slowmo 35%. C'est la première grande respiration de la vidéo.
La musique reprend seule. Aucun SFX. Plan large, calme, contemplé.

Sur ce plan de respiration, fais apparaître le premier texte :
"GENECH" en Bebas Neue 96px blanc #FFFFFF tracking +200,
révélé par un masque coulissant de gauche à droite en 12 frames.
Sous le titre, "ENTENTE SPORTIVE" en Bebas Neue 48px or #F5C518
tracking +250, révélé par tracking expansion en 8 frames.
Les deux textes disparaissent en fade out 8 frames avant
la fin du plan de respiration.

── PHASE 3 · ACTION [0:23 → 0:39] ─────────────────────────────────

C'est le cœur de la vidéo. Énergie maximale. Football pur.
RÈGLE ABSOLUE : hard cuts uniquement dans cette phase.
Aucun dissolve, aucun fondu. Coupe sèche à chaque plan.
Vitesse des plans : 55 à 100% (temps réel pour les impacts).
Avant chaque coupe, ajoute un whoosh directionnel (4 frames, −14dB).
Mouvements caméra : zoom punch aux impacts (Scale 100→108% en 4f),
shake aux moments de choc (±4px, 6 à 12 frames).

Les plans doivent aller de 0.3 à 2.5 secondes chacun.
L'enchaînement doit ressembler à : plan moyen → plan serré → plan
flash court → plan large émotionnel → retour accélération.

À environ 0:38, place le DOUBLE CLIMAX de la vidéo :
Plan A — 11 frames (0.45s) : choc intense. Flash blanc, glitch
RGB split ±8px pendant 3 frames, Kick 808 48Hz −2dB.
Plan B — 8 frames (0.34s) : LE PLAN LE PLUS COURT DE LA VIDÉO.
Quasi monochrome, saturation −35, contraste +30. Kick 808 45Hz −1dB
le plus fort de toute la vidéo, crash orchestral, double sub-bass.
Sidechain duck −12dB sur la musique.

Immédiatement après ce double choc, place la GRANDE RESPIRATION :
Un plan de 3.5 à 4 secondes en slowmo 30%, très large, très calme.
C'est le moment le plus lent de toute la vidéo après l'impact le
plus fort. La musique reprend seule. Aucun SFX. Température +500K,
golden hour, grain 25%, lens flare fort.

── PHASE 4 · RÉSOLUTION [0:39 → 0:51] ─────────────────────────────

La tension descend. Plans émotionnels, regards, communion d'équipe.
Vitesse des plans : 55 à 70%.
Transitions : retour aux hard cuts pour les plans d'action,
dissolve 8 frames pour les plans contemplatis.
Ajoute un second texte "GENECH ENTENTE SPORTIVE" en or #F5C518
sur un plan de l'écusson ou du capitaine.
Le dernier plan de cette phase finit en fondu au noir en 24 frames.
Ce fondu au noir marque la bascule vers le reveal du logo.

── PHASE 5 · REVEAL DU LOGO [0:51 → 1:10] ─────────────────────────

Voir l'étape 5 ci-dessous pour le détail complet.

── PHASE 6 · ENDING [1:10 → 1:13] ─────────────────────────────────

Fondu au noir progressif sur 62 frames.
Le logo reste en surimpression fantôme (opacité 25%) pendant
le fondu. Le grain reste visible dans le noir.
La musique finit son fade out. Silence absolu sur la dernière frame.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 5 · REVEAL FINAL DU LOGO [0:51 → 1:10] — 19 SECONDES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Le reveal fait 19 secondes divisées en 3 séquences égales de 6.33s.
Fond de toute cette séquence : #050C1E (jamais noir pur).
Le logo PNG fourni est le seul élément graphique principal.

── SÉQUENCE A [0:51 → 0:57] · 6.33s · PRÉPARATION ─────────────────

Commence dans le noir #050C1E absolu hérité du fondu de la phase 4.

Pendant les 1.5 premières secondes :
Des particules dorées #F5C518 entrent par le bas du cadre et montent
lentement. Points de 1 à 2px, 8 points visibles au départ, opacité
qui monte de 0 à 30%, mode Add. Une fumée bleutée très subtile
(#1E2B4A, opacité 6%) apparaît dans les coins inférieurs.
Sons : sub-drone 40Hz qui monte de −28dB à −20dB.

Pendant les 1.5 secondes suivantes :
Le cercle extérieur du badge commence à se dessiner lui-même,
comme tracé à la main. Utilise un Trim Paths animé : le trait
va de 0% à 30% en sens horaire depuis le sommet. Stroke blanc
2px, glow blanc rayon 6px, opacité 50%. La densité des particules
monte à 15 points. Sons : whoosh grave métallique 200Hz −15dB.

Pendant les 1.5 secondes suivantes :
L'anneau doré interne commence à se dessiner à son tour.
Trim Paths 0% → 55%, stroke #F5C518 3px, glow or rayon 10px,
opacité 70%. Un lens flare effleure l'arc. En fond, le logo
entier apparaît en fantôme très flou (opacité 8%, blur 20px),
comme une image subluminale qu'on ne voit pas encore vraiment.
Sons : violoncelles graves démarrent, montée douce −20dB.

Pendant les 1.83 dernières secondes :
Les arcs se stabilisent. Le logo fantôme gagne légèrement
en clarté (opacité 15%, blur 14px). 25 particules or orbitent
autour du futur emplacement du logo. Tension qui monte.
Sons : sub-drone −14dB, basse pulsée au tempo de la musique.

── SÉQUENCE B [0:57 → 1:03] · 6.33s · RÉVÉLATION ──────────────────

Sur les 6 premières frames (0.25s) :
Glitch révélateur. Sépare les canaux RGB : rouge +8px à droite,
bleu −8px à gauche, vert centré. Ajoute une distorsion fractale
légère (Turbulent Displace échelle 40, quantité 6). Lignes de scan
20% d'opacité. Le logo fantôme monte soudainement à 35% d'opacité.
Sons : impact métallique court −12dB, glitch audio 3 frames.
Le crescendo orchestral démarre SIMULTANÉMENT à cette frame.

Pendant les 3.17 secondes suivantes (le cœur du reveal) :
C'est le balayage révélateur (light sweep). Voici comment :
Crée deux versions du logo. Version A en fantôme 35% d'opacité
(base permanente visible). Version B en pleine opacité 100%,
masquée par un rectangle avec un bord très flou (feather 100px).
Fais glisser ce masque de la gauche vers la droite sur toute
cette durée, en mouvement fluide Ease IO. Là où le masque passe,
le logo apparaît à pleine résolution comme s'il s'allumait.
Synchronise un effet de lumière (light sweep, CC Light Sweep
à 90°) qui suit le masque. Applique une texture de métal brossé
sur le logo (multiply 15%). 35 particules or orbitent en mode Add.
Sons : violons, altos, cuivres montent ensemble. La musique
doit atteindre son volume maximum EXACTEMENT quand le balayage
est terminé. Ce crescendo de 3.17 secondes est le plus important.

Pendant les 2.92 secondes suivantes :
Le logo est révélé à 90%. Le dernier bord droit reste légèrement
en ghost pour maintenir la tension. Le glow doré s'intensifie
(rayon 12px). Les particules convergent vers le centre.
Sons : cuivres en montée finale, sub-drone fort −8dB.
Dernier souffle avant l'impact. Quasi silence musical.

── SÉQUENCE C [1:03 → 1:10] · 6.33s · AFFIRMATION ─────────────────

FRAME 1 — LA FRAME LA PLUS IMPORTANTE DE TOUTE LA VIDÉO :
Flash blanc à 100% d'opacité. 1 frame uniquement, pas plus.
Le logo apparaît simultanément à 100% visible, net, complet.
Des particules dorées explosent en burst radial depuis le centre
du "G" (Birth Rate 8, Velocity 1.5, couleur #F5C518, mode Add).
Un anneau lumineux or (#F5C518) s'expansionne depuis le centre :
Scale 0% → 260% en 24 frames, opacité 80% → 0%, mode Add.
Sons : kick 808 45Hz −1dB (le plus fort de toute la vidéo),
tutti orchestral tous instruments −3dB, sub-bass 30Hz −6dB.
Sidechain duck −12dB sur la musique, recovery 500ms.

Pendant les 2.33 secondes suivantes :
Le logo est pleinement visible, stable. Il pulse légèrement
comme s'il respirait : Scale 100% → 102% → 100% en 30 frames.
Un glow doré entoure le logo (rayon 8px, intensité 0.7, α35%).
Les particules retombent doucement. Sons : note tenue violoncelles.

À 2.33 secondes depuis le début de cette séquence :
Apparition de "ENTENTE SPORTIVE" en Bebas Neue 52px or #F5C518
tracking +250, révélé par un masque qui s'ouvre de bas en haut
en 12 frames. Position sous le logo. Glow or rayon 4px.

À 2.79 secondes depuis le début de cette séquence :
Apparition de "GENECH" en Bebas Neue 100px blanc #FFFFFF
tracking +150, révélé par tracking expansion de 0 à +150 en 8f.
Position au-dessus du logo.

À 3.29 secondes depuis le début de cette séquence :
Apparition de "1971" en Montserrat Light 30px gris #CCCCCC
tracking +500, fade in en 12 frames. Position sous "ENTENTE SPORTIVE".

Sur les 2 dernières secondes (freeze iconique) :
Tout est figé. Logo + 3 textes complets. Un drift zoom très lent
(Scale 100% → 102% sur 48 frames, Ease Out progressif). Le grain
monte à 22%. La vignette se renforce légèrement (0.5 → 0.65).
Sons : musique fade out progressif. Ambiance stade très lointaine.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 6 · MOUVEMENTS CAMÉRA — APPLIQUER SUR CHAQUE PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sur chaque plan de la vidéo (hors reveal), applique un mouvement
numérique selon la logique suivante :

Plans d'intro et d'identité : push in lent (Scale 100→108% sur
toute la durée du plan, Ease In). Le cadre avance imperceptiblement.

Plans contemplatifs et respirations : pull out lent (Scale 108→100%,
Ease Out) combiné avec un drift organique très subtil (±4px position,
±0.3° rotation, très lente fréquence 0.3Hz).

Plans d'action : zoom punch aux impacts (Scale 100→112% en 4 frames,
puis retour à 108% en 12 frames). Shake aux flashs (±5px X, ±3px Y,
12Hz aléatoire, pendant 6 à 12 frames).

Plans de détail (inserts macro) : tilt up numérique (+40px Y → 0px
sur la durée du plan, Ease IO).

Sur la phase du reveal du logo : AUCUN mouvement de caméra.
Le logo révélé doit être absolument stable. Le seul mouvement
autorisé est le drift zoom très lent du freeze final (102% en 48f).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÉTAPE 7 · SOUND DESIGN — SUR TOUTE LA VIDÉO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Construit une architecture sonore en 5 layers simultanés.

LAYER 1 · SUB-DRONE continu toute la vidéo
Fréquence 38–42Hz, onde carrée, légère modulation 0.3Hz.
Volume −28dB en intro, monte progressivement jusqu'à −8dB
au climax du reveal, puis fade out vers −∞ sur les 50 dernières frames.

LAYER 2 · MUSIQUE PRINCIPALE à partir de 0:10
Style orchestral-électronique, tempo 120–130 BPM.
Démarre à −18dB, monte progressivement. Peak −6dB au climax du reveal.
À chaque impact SFX, la musique ducke de −8 à −12dB pendant 200ms
avant de reprendre (sidechain).

LAYER 3 · SFX IMPACTS sur les moments clés
À chaque coupe de la phase action : whoosh directionnel 4 frames −14dB.
Premier impact (vers 0:18) : kick 808 52Hz −3dB + crash métal −8dB.
Double climax (vers 0:38) : deux kicks consécutifs 48Hz −2dB puis
45Hz −1dB, crash tutti orchestral −5dB, sub-bass 30Hz −6dB tail 2s.
Flash logo reveal (1:03) : kick 808 45Hz −1dB le plus fort de tout,
tutti orchestral −3dB, sub-bass −6dB tail 4s.

LAYER 4 · AMBIANCE TERRAIN permanente très discrète
Foule de stade filtrée (HPF 2kHz), −22dB, réverb stadium decay 4s.
Disparaît pendant les respirations, revient en filigrane pendant le reveal.

LAYER 5 · CRESCENDO RÉVÉLATION de 0:57 à 1:03 (la séquence B)
Montée orchestrale de 3.17 secondes : violons + altos + cuivres.
Ce crescendo est le plus long et le plus important de la vidéo.
Il doit culminer exactement à la fin du balayage lumineux,
juste avant le flash de la séquence C.

SILENCE ABSOLU sur la toute dernière frame. Rien. Zéro Hz.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÈGLES ABSOLUES — NE JAMAIS ENFREINDRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✗  Le noir pur #000000 est interdit. Toujours #050C1E.
✗  Dissolve ou fondu en phase action (0:23 → 0:39) est interdit.
✗  Le flash du logo en séquence C ne doit durer que 1 frame exactement.
✗  Les 3 séquences du reveal doivent être strictement égales (6.33s chacune).
✗  Aucun texte ne doit avoir une ombre portée. Glow subtil uniquement.
✗  Aucun tracking de texte inférieur à +150.
✗  Le grain 35mm ne doit jamais être absent d'une seule frame.
✗  Le frame rate final est 24fps. Pas 25, pas 30.
✗  Aucun effet template visible. Tout doit sembler crafté à la main.
✗  La dernière frame doit être en silence absolu.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÉSULTAT ATTENDU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Un teaser de football premium de 73 secondes pour le club Genech
Entente Sportive, traité de A à Z avec une direction artistique
cinématographique complète. La vidéo entière doit avoir la qualité
d'une production Nike Football ou Champions League.
Format de rendu : 1080×1920 · 9:16 · 24fps · H.265 · 20Mbps.
```
