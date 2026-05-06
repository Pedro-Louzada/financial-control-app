# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (Next.js Turbopack)
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # run ESLint
```

No test framework is configured yet.

## Stack

- **Next.js 16** (App Router) with **React 19**
- **TypeScript** — strict mode, path alias `@/*` → `src/*`
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `globals.css`, configured through `@tailwindcss/postcss`
- **React Compiler** — enabled in `next.config.ts` via `babel-plugin-react-compiler`; no need to wrap components in `useMemo`/`useCallback` manually
- **Open Sans** — loaded via `next/font/google` in the root layout and applied globally
- **pnpm** — package manager (pnpm-workspace.yaml present)

## Architecture

The app is in early development. Current structure under `src/app/`:

- `layout.tsx` — root layout, sets up font and `<html>`/`<body>` shell
- `page.tsx` — home page, renders the app logo and brand name
- `globals.css` — global styles (Tailwind import + font fallback)

Assets go in `public/` (e.g., `public/logo.png`).

New routes follow the Next.js App Router convention: create a directory under `src/app/` with a `page.tsx` (and optionally `layout.tsx`, `loading.tsx`, etc.).
