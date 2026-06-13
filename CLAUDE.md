# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio/resume website for https://praphull.com. It's a data-driven single-page application built with SvelteKit, styled with Bulma, and deployed to Netlify.

## Common Commands

### Development
- `npm run dev` — Start the Vite dev server with hot reload (runs on http://localhost:5173)
- `npm run dev -- --open` — Start dev server and open in browser
- `npm run check` — Run TypeScript/Svelte type checking
- `npm run check:watch` — Run type checking in watch mode

### Building & Deployment
- `npm run build` — Build the production static site (outputs to `build/` directory)
- `npm run preview` — Preview the production build locally (runs on http://localhost:4173)

### Package Management
- Uses `yarn` (see package.json for dependencies)
- Node.js >= 20 required (see .nvmrc for version)

## Project Architecture

### Data-Driven Design
The site is structured around a single `Info` type (`src/lib/types.ts`) that contains:
- `tags` — Technology skills with names, titles, and optional URLs/hashes
- `contactDetails` — LinkedIn, GitHub, Skype, Email with icons and URLs
- `experience` — Years of experience per technology
- `certifications` — Lightbend certifications with badge links
- `courses` — Coursera courses with certificate IDs

This data is generated server-side in `src/routes/+page.server.ts` via the `getInfo()` function and passed to components. The site is fully prerendered (`export const prerender = true`), making it a static site.

### Component Structure
- **`src/routes/`** — SvelteKit route components
  - `+page.svelte` — Main page layout: imports and composes all section components
  - `+page.server.ts` — Data generation (Info object); called once at build time
  - `+layout.svelte` — Root layout that imports global styles

- **`src/lib/static/`** — Section components (content-heavy, data-driven)
  - `NavBar.svelte` — Navigation bar with tech tag links
  - `Intro.svelte` — Left-side introduction card
  - `AboutMe.svelte` — About section using Info.tags
  - `Summary.svelte` — Professional summary
  - `Employment.svelte` — Employment history
  - `Projects.svelte` — Project showcase
  - `Skills.svelte` — Skills organized by category
  - `Education.svelte` — Education details
  - `Footer.svelte` — Footer with contact details

- **`src/lib/components/`** — Reusable UI components (generic, composable)
  - `Card.svelte` — Generic card wrapper
  - `Content.svelte` — Content section with heading
  - `WideSection.svelte` — Full-width section container
  - `EmptySection.svelte` — Empty state placeholder
  - `EmploymentDetails.svelte` — Employment history item
  - `Tip.svelte` — Styled tip/note component

### Styling
- **Framework:** Bulma CSS (v0.9.4) with Bulma Tooltip extension
- **Preprocessor:** SCSS via svelte-preprocess
- **Variables:** `src/variables.scss` is prepended to all SCSS files via:
  - `svelte.config.js` (for Svelte component `<style>`)
  - `vite.config.js` (for CSS imports)
- **Global styles:** `src/app.scss` (imported in `+layout.svelte`)

### Deployment
- **Host:** Netlify
- **Adapter:** `@sveltejs/adapter-netlify` (configured in `svelte.config.js`)
- **Base path:** Production site is served at `/praphull.com` (see `svelte.config.js` `paths.base`)
- **Build command:** `npm run build` (specified in `netlify.toml`)
- **Output:** Static files in `build/` directory

## Key Configuration Files

- `svelte.config.js` — SvelteKit + Netlify adapter config; sets up SCSS preprocessing and base path
- `vite.config.js` — Vite build config; SCSS preprocessor options
- `tsconfig.json` — TypeScript strict mode enabled; extends `.svelte-kit/tsconfig.json`
- `netlify.toml` — Netlify build command and output directory
- `.nvmrc` — Node.js version lock (v20)

## Development Notes

- The site is fully prerendered at build time, so all pages are static HTML. No server-side rendering happens in production.
- All data (skills, experience, certifications, courses) is defined in `+page.server.ts` and injected into components. To update content, edit the `getInfo()` function.
- SvelteKit's `$lib` alias resolves to `src/lib/`.
- Bulma classes are used directly in templates for layout and styling (no custom CSS framework wrapper).
- Type safety is strict (`tsconfig.json` has `strict: true` and `checkJs: true`).
