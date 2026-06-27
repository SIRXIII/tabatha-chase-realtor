# Component Spec: Header / Navigation

## Overview
Sticky navigation bar. Transparent at page top, switches to off-white `#f8f8f8` background on scroll. Logo left, nav links center/right, contact CTA far right.

## Structure

```
<header class="lp-header lp-header--fixed [.scroll]">
  <div class="lp-nav lp-container">
    <a class="lp-nav__logo" href="/">
      <img src="[logo]" alt="Kim Bibb" />
    </a>
    <nav class="lp-nav__links">
      <a href="/buy">BUY</a>
      <a href="/sell">SELL</a>
      <a href="/listings">LISTINGS</a>
      <a href="/communities">COMMUNITIES</a>
      <a href="/about">ABOUT</a>
      <!-- potentially: BLOG, RESOURCES -->
    </nav>
    <button class="lp-nav__hamburger" aria-label="Menu">
      <!-- SVG hamburger icon -->
    </button>
    <a class="lp-btn lp-nav__cta">CONTACT</a>
  </div>
</header>
```

## States

| State | BG | Text Color | Logo |
|-------|-----|-----------|------|
| Default (at top) | `rgba(0,0,0,0)` transparent | White | Light/white variant |
| Scrolled (`.scroll`) | `#f8f8f8` | Black | Dark variant |
| Mobile open | Overlay/drawer visible | — | — |

## Computed Styles (Desktop)

| Property | Value |
|----------|-------|
| `position` | `fixed` |
| `top` | `0` |
| `left` / `right` | `0` |
| `z-index` | `1000` |
| `padding` | `0px 45px` |
| Nav link `font-size` | `13px` |
| Nav link `font-weight` | `300` (Light) |
| Nav link `letter-spacing` | `1.5px` |
| Nav link `text-transform` | `uppercase` |
| Transition | `all` (bg/color) |

## Breakpoints

| Breakpoint | Behavior |
|-----------|---------|
| `≥1024px` | Full desktop nav, hamburger hidden |
| `<1024px` | Nav links hidden, hamburger shown |
| `≤380px` | Container padding reduced to `0 10px` |

## Interactions

- **Scroll trigger:** `window.addEventListener('scroll', () => header.classList.toggle('scroll', window.scrollY > 0))`
- **Hamburger:** toggles mobile nav drawer
- **Dropdown:** Some nav items may have sub-menus (`.lp-nav__dropdown`) with `rgba(255,255,255,0.9)` bg on hover

## Animation

WOW.js `fadeInUp` on nav links at initial page load (staggered delays: 2.0s, 2.1s, 2.3s).

## Clone Notes

- Two logo images needed: dark version and light/white version
- Swap based on scroll state (`scrolled` boolean in state)
- Logo position: left
- Contact CTA should trigger modal, not navigate
- No border/shadow — flat design
