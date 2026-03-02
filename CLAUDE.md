# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SGTools storefront — a marketing website built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Supports English and Serbian via next-intl.

## Commands

All commands run from the `storefront/` directory:

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Layout

The Next.js application lives entirely within `storefront/`. There is no monorepo tooling — just a single Next.js app.

- `app/[locale]/` — Pages use a dynamic `[locale]` segment for i18n routing (en, sr)
- `components/` — Page sections (hero, cta, features, etc.) and reusable components
- `components/ui/` — shadcn/ui primitives (button, input, accordion, sheet, etc.)
- `constants/` — Static data arrays and navigation links (`index.ts`, `links.ts`, `fonts.ts`)
- `i18n/` — next-intl config: `routing.ts` (locales), `request.ts` (message loading), `navigation.ts` (locale-aware Link/router)
- `messages/` — Translation JSON files (`en.json`, `sr.json`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `proxy.ts` — Next.js middleware for locale routing

### Key Patterns

**Server vs Client components**: Most section components (Hero, Footer, Features, Stats, etc.) are async server components. Client components (`"use client"`) are used only where interactivity is needed: Navbar (scroll detection), LanguageSwitcher, MobileMenu, Container (Framer Motion animations).

**Layout wrapper components**:
- `Wrapper` — Max-width container (`lg:max-w-7xl`) with responsive padding
- `Container` — Framer Motion animation wrapper with preset animations (`fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleUp`) and configurable delay

**i18n usage**:
- Server components: `getTranslations()` from `next-intl/server`
- Client components: `useTranslations()` from `next-intl`
- Navigation: Use `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` (not from `next/link` directly) to preserve locale
- Type safety: `global.d.ts` extends next-intl with message types from `en.json`

**Styling**: Tailwind CSS v4 with OKLCH color tokens defined as CSS custom properties in `globals.css`. Component variants use class-variance-authority (CVA). Always use `cn()` from `lib/utils` for merging classes.

**UI components**: shadcn/ui with `new-york` style. Add new components via `npx shadcn@latest add <component>`. Config in `components.json`.

**Fonts**: Space Grotesk (headings) and Inter (body) loaded via `next/font/google`, exposed as CSS variables `--font-heading` and `--font-base`.

**Icons**: lucide-react — import individual icons as React components.

### Adding a New Page

1. Create `storefront/app/[locale]/<page-name>/page.tsx`
2. Accept `params: Promise<{ locale: string }>` and call `setRequestLocale(locale)`
3. Add translation keys to both `messages/en.json` and `messages/sr.json`
4. Add navigation link to `constants/links.ts` with a `labelKey` for i18n
