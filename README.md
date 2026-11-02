# Santhosh Kumar Reddy Jampana — Portfolio

**From silicon. To systems.**

My personal engineering portfolio, showcasing work across embedded Linux, ARM64 platforms, boot and recovery systems, voice AI, telecom networks, and connected devices.

[Portfolio](https://santhureddie.github.io/portfolio/) · [LinkedIn](https://www.linkedin.com/in/santhoshjampana/) · [GitHub](https://github.com/santhureddie) · [Email](mailto:santhoshkumarreddyjampana@gmail.com)

## About me

I’m an Embedded Linux and Platform Software Engineer based in Redwood City, California. My work spans ARM64 bring-up, Linux boot architecture, transactional operating-system updates, hardware–software integration, and intelligent edge applications.

I enjoy following problems across layers—from firmware and bootloaders to Linux services, multimedia pipelines, and cloud-connected workflows.

## What’s inside

- **Oracle:** ARM64 platform integration, bootc/OSTree migration, GRUB2 watchdog protection, automatic rollback, accelerated multimedia, and IoT infrastructure exploration.
- **Voicy Labs:** Voice AI services supporting leasing-office call handling and appointment workflows, helping staff focus on customers who need their attention.
- **Tata Consultancy Services:** Telecom simulation and distributed services across 5G, LTE, and transport nodes.
- **VB Engineering:** Android geolocation alerts, offline caching, and reliable notifications.
- **Exposys Data Labs:** Arduino-based soil moisture monitoring and MQTT telemetry.

Personal projects include an **Edge AI Voice Assistant**, **Skills Highlighter** browser extension, and **Munchies** food-ordering application.

## Features

- Interactive CSS 3D hardware model with rotation and assembled/exploded views.
- Selectable Linux boot, recovery, and multimedia views.
- IoT onboarding, telemetry, and lifecycle exploration.
- Voice-pipeline and telecom-node interactions.
- Responsive layouts, readable typography, and reduced-motion support.
- Printable résumé generated from shared portfolio content.
- Independently replaceable images and centralized content configuration.
- Static export with GitHub Pages deployment.

The hardware and office illustrations are conceptual visuals. Interactive system views explain the work; they are not live connections to devices or employer systems.

## Tech stack

**Next.js · React · TypeScript · CSS · GitHub Actions · GitHub Pages**

The site uses CSS 3D transforms and animations without a separate 3D rendering library. No backend or API keys are required.

## Run locally

Use Node.js 22 and npm.

```bash
git clone https://github.com/santhureddie/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

If your machine hits a file-watcher limit, use:

```bash
WATCHPACK_POLLING=true npm run dev
```

## Project structure

```text
app/
├── content.ts          # Experience, projects, skills, links, and image definitions
├── page.tsx            # Portfolio layout and interactive components
├── globals.css         # Styling, typography, animations, and responsive layouts
├── layout.tsx          # Root layout and page metadata
└── resume/
    └── page.tsx        # Printable résumé
public/
└── images/             # Illustrations and replacement images
.github/
└── workflows/
    └── nextjs.yml      # Build and GitHub Pages deployment
next.config.ts          # Static export and deployment path configuration
```

## Customize content and images

Edit **`app/content.ts`** to update experience, accomplishments, projects, skills, contact information, and image paths. Edit **`app/globals.css`** for colors, typography, spacing, and responsive behavior.

To replace an image:

1. Add your file to `public/images/`.
2. Update the corresponding entry in `images` inside `app/content.ts`:

```ts
voicy: {
  src: '/images/my-call-assistant.webp',
  alt: 'Appointment booking and call assistance for leasing offices',
},
```

Replace the entire existing value. For a standalone image, omit `atlasIndex`; that property is only for the bundled illustration sheet. Use the local `/images/...` path—the application adds the deployment prefix automatically.

Set `profile.github`, `profile.resume`, and each project’s `href` to enable those links. Empty optional links are hidden. If no external résumé URL is provided, the site uses its built-in printable résumé page.

## Build and deploy

Check types and create a static export:

```bash
npm run typecheck
npm run build
```

The deployable website is generated in **`out/`**. To preview that export:

```bash
python3 -m http.server 3000 --directory out
```

For GitHub Pages at `/portfolio/`, build with:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

In the repository, select **Settings → Pages → Source → GitHub Actions**. The included workflow checks and builds pull requests, then publishes pushes to `main` at:

**https://santhureddie.github.io/portfolio/**

The workflow sets `NEXT_PUBLIC_BASE_PATH=/portfolio` for the application, image paths, and résumé links. If you rename the repository or move to a root custom domain, update this setting in `.github/workflows/nextjs.yml` accordingly.

Dependencies use the public npm registry so GitHub-hosted runners can install them without access to an internal corporate registry.

## Contact

Interested in embedded Linux, platform software, edge AI, or connected systems?

- **Email:** [santhoshkumarreddyjampana@gmail.com](mailto:santhoshkumarreddyjampana@gmail.com)
- **LinkedIn:** [santhoshjampana](https://www.linkedin.com/in/santhoshjampana/)
- **GitHub:** [santhureddie](https://github.com/santhureddie)
