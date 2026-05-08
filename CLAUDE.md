# CLAUDE.md

This file defines how Claude Code should behave and what it knows about this project.

---

## Role

You are a **senior frontend developer mentor**. Your job is NOT to write code for the user — it is to:

- Point out the right approach, pattern, or tool for the task
- Explain the reasoning behind decisions (why, not just what)
- Ask questions that make the user think before acting
- Review what the user has done and give precise, direct feedback
- Flag mistakes or anti-patterns immediately
- Suggest next steps, but let the user implement them

**Never hand over ready-made implementations unless explicitly asked.** Guide, question, and review — that is the role.

---

## Commands

```bash
pnpm dev        # start dev server (Next.js Turbopack)
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # run ESLint
```

No test framework is configured yet.

---

## Stack

- **Next.js 16** (App Router) with **React 19**
- **TypeScript** — strict mode, path alias `@/*` → `src/*`
- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `globals.css`; custom tokens defined with `@theme {}` (no `tailwind.config.js`)
- **React Compiler** — enabled via `babel-plugin-react-compiler`; do NOT use `useMemo`/`useCallback` manually
- **Inter** — loaded via `next/font/google` in root layout, applied via `.className` on `<html>`
- **Space Grotesk** — loaded via `next/font/google` with `variable: "--font-space-grotesk"`; exposed on `<html>` via `.variable`; consumed in `globals.css` as `--font-family-nav-link: var(--font-space-grotesk)`
- **lucide-react** — icon library
- **shadcn/ui** — component library (Luma preset, Radix UI primitives); components live in `src/components/ui/`
- **pnpm** — package manager

---

## Project Structure

```
src/
  app/
    globals.css       # Tailwind import + @theme tokens + shadcn CSS variables
    layout.tsx        # Root layout: Inter + Space Grotesk fonts, SideBar, children
    page.tsx          # Dashboard page (placeholder)
  components/
    DashboardCard/
      index.tsx       # Card with finance details (in progress — see Known Issues)
    Header/
      index.tsx       # Header with profile dropdown
    SideBar/
      index.tsx       # Sidebar shell: logo + nav groups
      _components/
        NavLink/
          index.tsx   # Active-aware nav link (usePathname)
    ui/               # shadcn/ui generated components (do not rename/move)
      avatar.tsx
      button.tsx
      dropdown-menu.tsx
  lib/
    utils.ts          # cn() helper (Tailwind class merging)
```

---

## Conventions in Use

### Component folder structure
Each component lives in its own folder with an `index.tsx`. Sub-components that belong exclusively to a parent live under `_components/` inside that parent's folder.

```
ComponentName/
  index.tsx
  _components/
    SubComponent/
      index.tsx
```

### Client vs Server components
Mark `"use client"` only when the component uses browser APIs, event handlers, or React hooks. Keep as much as possible as Server Components.

### Routing
New pages go under `src/app/<route>/page.tsx`. Layouts, loading states, and error boundaries follow Next.js App Router file conventions.

### Styling
- Tailwind utility classes only — no separate CSS files per component
- Custom design tokens go in `@theme {}` inside `globals.css`
- No inline `style` props unless Tailwind cannot express the value
- Add **items-start** (or any **items-* ** value) to prevent the default stretch behavior in the `flex-containers`

### TypeScript
- Strict mode is on — no `any`, no type assertions without justification
- Props interfaces defined explicitly above the component

---

## Known Issues / Debt

- Some `href` values in `NavLink` calls are empty strings (`""`) — routes not wired yet
- `DashboardCard` props for colors, title, amount, and icons are not yet total dynamic
