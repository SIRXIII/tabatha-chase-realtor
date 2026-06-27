# Tabatha Chase Realtor Site — Agent Rules

## This is NOT the Next.js you know
Next 16 has breaking changes vs. training data. Read `node_modules/next/dist/docs/` before writing anything novel. Heed deprecation warnings.

## Stack
- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind v4, shadcn/ui (Radix, `cn()` utility)
- Cloudflare Workers via `@opennextjs/cloudflare`
- Deploy: `npm run cf:deploy`

## Hard rules
- **No mock content.** Every listing, stat, photo, testimonial must trace to a public source. If a fact is unverified → omit it, don't fabricate.
- Edit existing files; don't create new ones unless required.
- Named exports, PascalCase components, camelCase utils.
- 2-space indent. Tailwind utility classes only, no inline styles.
- Match kim-bibb.com layout/spacing 1:1 during emulation. Customize later.

## Commands
- `npm run dev` — local dev
- `npm run check` — lint + typecheck + build (must pass before commit)
- `npm run cf:preview` — Cloudflare local
- `npm run cf:deploy` — production

## Data layer
All agent + listing data lives in `src/data/tabatha.ts`. Every field has a comment with its source URL.

## Project structure
```
src/
  app/                  # routes
  components/
    sections/           # page sections (Header, HeroCarousel, etc.)
    ui/                 # shadcn primitives
    icons.tsx           # SVGs extracted from kim-bibb.com
  data/tabatha.ts       # single source of truth
  lib/utils.ts          # cn() helper
  types/                # Listing, Agent, Testimonial
public/
  images/listings/      # real photos
  seo/                  # favicons, OG
docs/research/          # extraction notes + component specs
```

## Before declaring done
1. `npm run check` clean
2. `npm run dev` — walk every route at 1440px + 390px
3. Click 3 random listing cards → confirm each opens the real Zillow URL
4. Visual diff vs. kim-bibb.com side-by-side at desktop + mobile
