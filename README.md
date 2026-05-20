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
  data.ts               site content (typed)
  types.ts              shared content types
  components/
    icons.tsx           inline SVG icon set
    Brand.tsx           logo mark + wordmark
    primitives.tsx      Counter, Reveal, SectionHeader, Spark, etc.
  sections/             one file per page section
```

## Legacy

The original in-browser-Babel prototype lives in `legacy/` (not built or
deployed). It is kept for reference only.
