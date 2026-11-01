# Santhosh — From silicon to systems

A responsive Next.js / React / TypeScript portfolio based on the approved charcoal and signal-green design. Oracle is the main feature, followed by four distinct employers and three independent projects.

## Run locally

```sh
npm install
npm run dev -- --port 3000
```

Open http://localhost:3000. Node.js 20+ is recommended. `npm run typecheck` validates TypeScript. `npm run build` exports a deployable static site to `out/`. For static preview: `python3 -m http.server 3000 --directory out`.

## Replace any image

1. Copy your image (JPG, PNG, WebP, AVIF or SVG) into `public/images/`.
2. Open `app/content.ts`.
3. Replace the appropriate entry in `images` with a regular image definition. Example:

```ts
voicy: {
  src: '/images/my-voice-agent.webp',
  alt: 'My voice agent visualization',
},
```

Keep the entry name (`voicy`) and replace its entire `atlas(...)` value. Do **not** retain `atlasIndex` for a normal image. The layout and interactions stay intact. The artwork keys are `hardware`, `voicy`, `tcs`, `vb`, `exposys`, `edge`, `highlighter`, and `munchies`. `hardware` appears in the hero and Oracle showcase. Any image dimensions work; square or nearly square images with dark backgrounds work best. Images are contained, never stretched. An optional `position: 'center'` sets alignment.

Bundled original illustrations use a single local atlas, displayed as eight independent CSS regions. It is self-contained and requires no image hosting. The illustrations, including the UNO Q style board, are conceptual rather than technical product photography. The actual interactive board model is independent CSS 3D geometry and is not affected by changing artwork.

## Edit text, links and résumé

All experience, skills, projects, image definitions and contact links live in `app/content.ts`. Set `profile.github` to your public GitHub URL to display the GitHub link. Set `profile.resume` to a PDF URL to use your own résumé; otherwise the résumé button opens a printable page generated from the same content. Set each project's `href` to enable its external project link. Empty links are hidden so visitors never encounter dummy destinations.

Colors, typography and breakpoints live in `app/globals.css`. Fonts use Google Fonts with system fallbacks; self-host them if you need a fully offline site.

## Interactions

- Oracle: Boot flow / Recovery / Multimedia tabs, component hotspots, selectable boot stages.
- “Explore 3D model”: actual CSS 3D geometry, drag or use the keyboard-accessible rotation slider, assemble/explode the heatsink and reset orientation.
- Voicy: STT / LLM / TTS controls and animated voice waveform.
- TCS: 5G / LTE / Transport node controls.
- Responsive mobile menu, scroll reveals, scroll progress, email copy, hover motion.
- System reduced-motion preferences disable decorative movement.

No backend, API keys, analytics, or paid services are required. Contact uses your mail client. The recovery and telemetry views illustrate the work; they are not live device connections.

## Deploy

Run `npm run build`, then upload `out/` to a static host such as Cloudflare Pages, Netlify or GitHub Pages (root custom domain). For Vercel, use the Next.js preset. For deployment to a subdirectory, configure Next.js `basePath` and prefix local image paths accordingly.

The workspace currently reuses the neighboring project's dependency folder via symlink. A fresh checkout or copy only needs `npm install`; do not distribute `node_modules` or `.next`.

## GitHub Pages: santhureddie/portfolio

The Pages workflow builds and publishes the site at https://santhureddie.github.io/portfolio/.
Select **GitHub Actions** in the repository's Settings → Pages publishing source.
The workflow sets `NEXT_PUBLIC_BASE_PATH=/portfolio`, which prefixes Next.js assets,
illustrations and résumé links. Local development leaves it unset and stays at `/`.

To reproduce the Pages build:

```sh
npm ci --registry=https://registry.npmjs.org
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

The lockfile uses public npm tarball URLs. Avoid regenerating it against an internal
corporate registry: GitHub-hosted runners cannot fetch those private URLs.
Pull requests build without publishing; merging to `main` publishes automatically.
