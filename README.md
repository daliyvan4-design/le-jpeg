# LE JPEG · Le média d'art

One page à parallaxe premium pour **LE JPEG**, le média d'art ivoirien et africain.
Esthétique glitch / compression JPEG, logo qui s'inverse automatiquement selon la
couleur de la section traversée.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** (design system dans `tailwind.config.ts`)
- **Framer Motion** — reveals, glitch, parallaxe (`useScroll` / `useTransform`)
- **Lenis** — smooth scroll
- **next/font** — Archivo Black, Poppins, DM Sans, Space Mono, Bricolage Grotesque
- Déploiement **Vercel**

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Build de production

```bash
npm run build && npm start
```

## Déployer sur Vercel

Le projet est prêt tel quel. Deux options :

- **Git** : pousser le repo puis « Import Project » sur [vercel.com](https://vercel.com). Vercel détecte Next.js automatiquement, aucune config requise.
- **CLI** : `npx vercel` (préversion) puis `npx vercel --prod`.

## Structure

```
app/
  layout.tsx        Fonts, metadata, smooth scroll global
  page.tsx          Assemble les 8 sections
  globals.css       Base + reset + prefers-reduced-motion
components/
  SmoothScroll.tsx  Wrapper Lenis (désactivé en reduced-motion)
  Header.tsx        Header fixe + bascule auto du logo (cream ↔ brick)
  GlitchText.tsx    Titre qui glitche à l'apparition + au hover
  Reveal.tsx        Reveal whileInView (Framer Motion)
  Parallax.tsx      Translation parallaxe basée sur le scroll
  sections/         Hero, Manifeste, Faisons, Qui, Rubriques, Couleurs, Identite, Footer
public/
  logo-rouge.png    Lettrage rouge — sections crème
  logo-creme.png    Lettrage crème — sections rouge (brick)
```

## Bascule du logo

Chaque `<section>` porte `data-theme="cream"` ou `data-theme="brick"`. Le header
détecte la section sous lui (via `getBoundingClientRect`) et crossfade entre les
deux logos avec un léger flash glitch pendant le switch.

## Notes design

- Palette et keyframes glitch centralisées dans `tailwind.config.ts`.
- Animations en `transform` / `opacity` uniquement (`will-change`), parallaxe
  allégée et smooth scroll coupés sous `prefers-reduced-motion`.
- Aucun tiret cadratin dans les textes affichés (virgule, deux-points ou point médian `·`).
- Les cartes membres (section « Qui ? ») utilisent des placeholders photo à remplacer.
