# Tabatha Chase — SoCal Realtor

Marketing site for **Tabatha Chase** (DRE 01968575), realtor at **Fiv Realty Co.**, serving Corona, Yorba Linda, Anaheim, Eastvale, and Riverside, CA.

> *"Making life beautiful one home at a time."*

## Stack

- Next.js 16 (App Router, React 19, TypeScript strict)
- Tailwind v4 + shadcn/ui
- Cloudflare Workers (via `@opennextjs/cloudflare`)

## Commands

```bash
npm install
npm run dev          # local dev
npm run check        # lint + typecheck + build
npm run cf:preview   # Cloudflare Workers local
npm run cf:deploy    # Cloudflare Workers production
```

## Structure

- `src/app/` — routes (home, about, properties, contact)
- `src/components/sections/` — page sections
- `src/components/ui/` — shadcn primitives
- `src/data/tabatha.ts` — single source of truth for agent profile + listings (sourced from Zillow, Homes.com, DRE)
- `public/images/listings/` — real listing photos
- `docs/research/` — extraction notes for the kim-bibb.com clone reference

## Data sources

Every listing, stat, and bio fact is traceable to a public source:
- DRE License Lookup (license #, brokerage, dates)
- Zillow profile (active + sold listings, headshot)
- Homes.com profile (cross-check)
- Instagram @socaliviingbytabatha (voice + community context)

No mock content. If a fact is unverified, it's omitted.
