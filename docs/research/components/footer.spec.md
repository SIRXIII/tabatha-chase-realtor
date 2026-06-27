# Component Spec: Footer

## Overview
White background footer with `border-top: 1px solid #000`. Two main rows: (1) top row with logo, nav links, and social icons; (2) bottom row with copyright, broker disclaimer, privacy policy links. Clean, minimal.

## Structure

```
<footer class="lp-footer">
  <div class="lp-footer__inner lp-container">

    <!-- TOP ROW -->
    <div class="lp-footer__top">

      <div class="lp-footer__logo">
        <a href="/">
          <img src="[logo-dark]" alt="Tabatha Chase Real Estate" />
        </a>
      </div>

      <nav class="lp-footer__nav">
        <a href="/buy">BUY</a>
        <a href="/sell">SELL</a>
        <a href="/listings">LISTINGS</a>
        <a href="/communities">COMMUNITIES</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </nav>

      <div class="lp-footer__social">
        <a href="https://instagram.com/[handle]" target="_blank" rel="noopener">
          <!-- Instagram SVG icon -->
        </a>
        <a href="https://facebook.com/[handle]" target="_blank" rel="noopener">
          <!-- Facebook SVG icon -->
        </a>
        <!-- LinkedIn, Twitter/X if applicable -->
      </div>

    </div>

    <!-- BOTTOM ROW -->
    <div class="lp-footer__bottom">
      <p class="lp-footer__copyright">
        © [YEAR] TABATHA CHASE. ALL RIGHTS RESERVED.
      </p>
      <p class="lp-footer__disclaimer">
        [Brokerage name and license disclaimer text. DRE# XXXXXXXX]
      </p>
      <div class="lp-footer__legal-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
        <a href="[LP-credit]">Site by Luxury Presence</a>
        <!-- For clone: remove "Site by LP" or replace with custom credit -->
      </div>
    </div>

  </div>
</footer>
```

## Visual Specs

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Top border | `border-top: 1px solid #000` |
| Section padding | ~60-80px top/bottom |

## Layout

### Top Row
| Column | Content |
|--------|---------|
| Left | Logo (dark version) |
| Center | Nav links (horizontal) |
| Right | Social icon row |

On mobile: Stacked vertically (logo → social → nav).
Mobile social: `border-top: 1px solid #000` separating social from other rows.

### Bottom Row
| Content | Alignment |
|---------|----------|
| Copyright line | Left or center |
| Broker disclaimer | Left or center |
| Legal links | Right or center |

At `≥769px`: Footer bottom uses border/layout from `#website-css` desktop rules.
At `≤375px`: Footer cells use smaller min-width.

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Nav links | 13px | 300 | UPPERCASE |
| Copyright | 13-14px | 300 | UPPERCASE |
| Disclaimer | 12-13px | 300 | Normal / small |
| Legal links | 13px | 300 | Normal |

## Social Icons

- Inline SVG icons (no third-party icon library)
- Likely: Instagram, Facebook (LinkedIn/Twitter optional)
- Icon size: ~20-24px
- Color: Black
- Hover: opacity change

## Nav Links

- Spacing: Horizontal with gap between items
- No underline by default
- Hover: underline or color shift
- `text-transform: uppercase`
- `font-size: 13px`, `font-weight: 300`

## Legal / Contact Link

At `max-width: 1200px`: footer contact link shows underline (from `#website-css`).

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | Single column: logo → social (with border) → nav → legal |
| `≤375px` | Smaller cell min-width |
| `≥769px` | Horizontal top row; bottom row with border between sections |
| `≥376px` | Standard cell min-width |

## Content for Tabatha Chase Clone

**Logo:** Dark version of Tabatha Chase logo.

**Nav links:** Same as header nav: BUY, SELL, LISTINGS, COMMUNITIES, ABOUT, CONTACT.

**Social links:**
- Instagram: `https://instagram.com/[tabatha-handle]`
- Facebook: `https://facebook.com/[tabatha-handle]`
- (Confirm active platforms from her profiles)

**Copyright:** `© 2025 TABATHA CHASE REAL ESTATE. ALL RIGHTS RESERVED.`

**Disclaimer:** California real estate license disclaimer:
```
Tabatha Chase is a licensed real estate agent in the State of California.
DRE# XXXXXXX. [Brokerage Name]. [Brokerage Address].
```

**Legal pages needed:** `/privacy-policy`, `/terms` (stub pages for phase 1).

## Clone Notes

- Remove "Site by Luxury Presence" credit
- Social icons: Use Lucide React icons or extracted SVGs from kim-bibb.com
- Footer border-top creates a clean separation from CTA band (which has white/off-white bottom padding)
- Keep footer flat — no shadow, no gradient
