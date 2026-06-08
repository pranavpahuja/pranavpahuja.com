# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio/marketing site for Pranav Pahuja (pranavpahuja.com), built with Astro + React + Tailwind CSS v4.

## Commands

- `npm run dev` — start local dev server at `localhost:4321`
- `npm run build` — build production site to `./dist/`
- `npm run preview` — preview the production build locally
- `npm run astro -- check` — run Astro's type checker

There is no test suite.

Linting/formatting is handled via `lint-staged` + Biome (`biome check --write` / `biome format --write`) on pre-commit for `*.{js,jsx,ts,tsx,json}`. Despite `.eslintrc.json` referencing `next/core-web-vitals`, this is an Astro (not Next.js) project — that config is a leftover and not the active linting path.

## Architecture

- **Astro is the framework.** Pages live in `src/pages/` (currently just `index.astro`, a single-page site composed by importing and stacking section components in order).
- **Components are mixed Astro/.astro and React/.tsx.** Static, content-heavy sections (Header, Hero, Services, Timeline, Certifications, Engagement, Contact, Footer, AnimatedBackground) are `.astro`. Interactive/stateful sections (Stats, Testimonials, ResumeViewer) are React `.tsx` components hydrated via Astro client directives (`client:visible`, `client:load`) — pick the directive based on whether the component needs to be interactive immediately on load vs. only when scrolled into view.
- **`Layout.astro`** (`src/layouts/Layout.astro`) is the shared HTML shell: sets up `<head>` (meta tags, Open Graph/Twitter cards, JSON-LD schema.org `ProfilePage` data, canonical URL), wraps every page's `<slot />`, mounts the global `ResumeViewer` modal (`client:load`), and contains a `DOMContentLoaded` script that wires up an `IntersectionObserver` to add `.is-visible` to any `.fade-in-section` element for scroll-triggered fade-in animations.
- **`ResumeViewer`** is a global modal mounted once in the layout and opened from anywhere by dispatching a `window` custom event named `open-resume-modal` (e.g. `window.dispatchEvent(new Event('open-resume-modal'))`). It renders the PDF at `/resume_cv/cv.pdf` (served from `public/resume_cv/`) in an iframe with print/download/open-in-new-tab actions, animated with `framer-motion`.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (configured in `astro.config.mjs`), with custom theme/fonts in `tailwind.config.mjs` and global styles in `src/styles/global.css`. The custom font is "Space Grotesk" (`font-grotesk`), loaded locally via `global.css`.
- **Assets**: optimized images live in `src/assets/images/`; static/public files (favicon, resume PDF, etc.) live in `public/`.
- **Env**: `.env.example` documents `PAGE_ACCESS_PASSWORD`, used to gate protected pages/routes — currently the only environment variable in use.
