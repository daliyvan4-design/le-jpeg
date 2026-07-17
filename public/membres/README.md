# Photos de l'équipe JPEG

Un emplacement est réservé pour chaque membre. Dépose ta photo ici en
respectant **exactement** le nom de fichier ci-dessous. Dès qu'un fichier est
présent, il remplace automatiquement l'emplacement réservé sur le site (aucune
ligne de code à toucher).

| Fichier à déposer | Membre (dans `lib/members.ts`) |
| ----------------- | ------------------------------ |
| `membre-1.jpg`    | Direction artistique · Fondateur |
| `membre-2.jpg`    | Rédaction en chef |
| `membre-3.jpg`    | Photographie |
| `membre-4.jpg`    | Réalisation · Vidéo |
| `membre-5.jpg`    | Design & Motion |
| `membre-6.jpg`    | Digital & Développement |

## Format conseillé

- Orientation **portrait, ratio 4:5** (ex. 800 × 1000 px ou plus).
- **JPG** ou **WEBP** (recommandé), qualité ~80 %.
- Cadrage serré sur le visage / buste.

## Comment ça marche (surnom + description ↔ bonne photo)

Tout est lié dans **une seule entrée** par membre dans `lib/members.ts` :
`photo`, `name`, `nickname`, `role`, `desc`. Comme le chemin de la photo vit
dans le même objet que le surnom et la description, ils ne peuvent pas se
retrouver décalés.

- Pour changer un nom / surnom / rôle / texte : édite l'entrée correspondante
  dans `lib/members.ts`.
- Pour changer le nom d'un fichier photo : change aussi le champ `photo` de la
  même entrée.
- Pour ajouter ou retirer un membre : ajoute / enlève une entrée du tableau,
  la grille et les emplacements s'adaptent tout seuls.
