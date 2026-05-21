# Lucidly Site

Landing site for Lucidly — institutional execution for tokenized onchain strategies.

Built with **Vite + React 18 + TypeScript**.

## Develop

```bash
npm install
npm run dev        # dev server with HMR at http://localhost:5173
```

## Build

```bash
npm run build      # type-checks, then bundles to dist/
npm run preview    # serve the production build locally
npm run typecheck  # type-check only
```

## Deploy

`npm run build` produces a static `dist/` folder — host it on any static
provider (Vercel, Netlify, GitHub Pages, S3/CloudFront, etc.).

- **Vercel / Netlify:** framework preset "Vite", build command `npm run build`,
  output directory `dist`.

## Structure

```
src/
  main.tsx              app entry
  App.tsx               section composition
  styles.css            design tokens + global styles
  data.tsx              site content (typed; .tsx so FAQ answers can embed JSX)
  types.ts              shared content types
  config.ts             feature flags
  components/
    icons.tsx           inline SVG icon set
    Brand.tsx           logo mark + wordmark
    HeroSketch.tsx      decorative engraved tradfi backdrop for the hero
    WordRotate.tsx      animated word swap in the headline
    primitives.tsx      Counter, Reveal, SectionHeader, Spark, etc.
  hooks/
    useLiveTvl.ts       fetches the latest daily TVL (rendered as "AUM")
    useSyUsdApy.ts      fetches syUSD vault APY since inception
    useVaultApys.ts     fetches per-vault APYs for strategy cards
  sections/             one file per page section
```
