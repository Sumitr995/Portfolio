# Portfolio — Agent Guide

## Dev commands
| Command | Action |
|---------|--------|
| `bun dev` | Start Vite dev server |
| `bun run build` | Production build to `dist/` |
| `bun run preview` | Preview production build |
| `bun run lint` | ESLint (flat config, no Prettier) |

Always use `bun` (lockfile: `bun.lock`), never `npm` or `pnpm`.

## Architecture
- **React 19 + Vite 7** SPA, bundled with `@vitejs/plugin-react`.
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (NOT PostCSS/`tailwind.config`). CSS lives in `src/index.css` with `@import "tailwindcss"`.
- **Routing**: React Router DOM v7, all pages lazy-loaded via `React.lazy` in `AppRoutes.jsx`.
- **Path alias**: `@/` → `src/` (configured in `vite.config.js` and `jsconfig.json`).
- **No test framework** or test scripts exist.

## Project structure
```
src/
  components/
    ui/           — Generic UI kit (shadcn-style, new-york, JSX not TSX)
    Features/     — Feature-specific components grouped by page (About/, Home/, etc.)
    other/        — Miscellaneous (Preloader)
    WorkExperience/
  pages/          — Route-level page components (lazy-loaded)
  Data/           — Static data files
  Info/           — Info/config files
  Utils/          — Utility components (e.g. ScrollToTop)
  lib/utils.js    — cn() helper (clsx + tailwind-merge)
  context/context.js — AppContext (empty shell)
```

## Dark mode
- Class-based: `.dark` on `<html>`. Toggled via localStorage key `"theme"` (values: `"light"`, `"dark"`, `"system"`).
- Default is `"system"`. System preference changes are listened to at runtime.
- Theme initialization runs in `main.jsx` before React render (avoids flash).

## Vercel deployment
`vercel.json` rewrites all routes to `/` for SPA client-side routing.

## UI conventions
- Components in `components.json` reference external registries (magicui, aceternity, react-bits, coss) — these are third-party shadcn registries, not local.
- CSS variables for colors use `oklch()` with `.dark` overrides. Animations are defined in `index.css` (marquee, glitch, 404 float).
