# Project Gemini: Engineering Portfolio

This is a modern, high-performance personal portfolio built with React 19, Vite, and Bun. The project features a modular architecture, advanced animations, and a data-driven design.

## Project Overview

- **Purpose:** Professional showcase for Sumit Rathod (Full Stack Developer).
- **Core Tech:** React 19, Vite 7, Bun (Runtime/PackageManager), Tailwind CSS v4.
- **UI & Animations:** Radix UI, Shadcn UI, Framer Motion, GSAP, Three.js, Lucide Icons.
- **Key Features:**
  - Multi-page routing via `react-router-dom`.
  - Lazy loading for optimized performance.
  - Interactive "Oneko" pet and advanced preloaders.
  - Dynamic content management via `src/Data/`.
  - Asset optimization via manual Rollup chunking.

## Architecture

- **`src/components/Features/`**: Feature-specific components (Navbar, About, Projects, etc.).
- **`src/components/ui/`**: Reusable base components (Shadcn/Radix primitives).
- **`src/Data/`**: Centralized data storage for projects, work experience, and personal info.
- **`src/pages/`**: High-level page components managed by `AppRoutes.jsx`.
- **`src/Utils/`**: Helper functions and utility components (ScrollToTop, API wrappers).
- **`public/`**: Static assets including tech icons, project thumbnails, and certificates.

## Building and Running

### Development
```bash
bun dev
# or
npm run dev
```

### Production Build
```bash
bun build
# or
npm run build
```

### Preview
```bash
bun preview
# or
npm run preview
```

## Development Conventions

1.  **Data-Driven Design:** All content should be managed through `src/Data/` rather than hardcoding in components.
2.  **Surgical Edits:** When modifying data, update the specific `.js` or `.json` file in `src/Data/`.
3.  **UI Consistency:** Prefer components in `src/components/ui/` or Shadcn-style primitives for new UI elements.
4.  **Animations:** Use Framer Motion for standard transitions and GSAP for complex timelines.
5.  **Styling:** Use Tailwind CSS v4 utility classes. Avoid custom CSS unless absolutely necessary (defined in `index.css` or `App.css`).
6.  **Path Aliases:** Use `@/` to refer to the `src/` directory (e.g., `import X from '@/components/ui/X'`).

## Context Files

- **`Info/PortfolioInfo.md`**: Contains detailed personal, professional, and project summaries for AI context.
- **`README.md`**: Public-facing overview and setup instructions.
