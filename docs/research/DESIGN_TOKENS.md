# Design Tokens — kim-bibb.com

> Extracted via `getComputedStyle()` and `:root` CSS variable inspection on 2026-06-27.
> Source: Luxury Presence platform. CDN: `https://d1e1jt2fj4r8r.cloudfront.net/`

---

## Typography

### Font Families
| Role | Family | Source |
|------|---------|--------|
| Primary (body + headings + buttons) | `Helvetica, sans-serif` | Self-hosted on CloudFront |
| Secondary | `Helvetica, sans-serif` | Same |

**Self-hosted font weights available:**
- 300 (Light / Light Italic) — `Helvetica-Light.woff2`
- 400 (Regular / Italic) — `Helvetica.woff2`
- 700 (Bold / Bold Italic) — `Helvetica-Bold.woff2`

**CDN URL pattern:** `https://d1e1jt2fj4r8r.cloudfront.net/fonts/Helvetica/Helvetica-{variant}.woff2`

### Type Scale (CSS Variables)
| Token | Value | Usage |
|-------|-------|-------|
| `--global-body-font-size` | `16px` | Body / p |
| `--global-h1-font-size` | `70px` | Hero title |
| `--global-h2-font-size` | `43px` | Section headings |
| `--global-h3-font-size` | `30px` | Sub-headings |
| `--global-h4-font-size` | `21px` | Card labels |
| `--global-h5-font-size` | `17px` | Small headings |
| `--global-h6-font-size` | `16px` | Micro text |

### Computed Type Details
| Element | Size | Weight | Line Height | Letter Spacing | Transform |
|---------|------|--------|-------------|----------------|-----------|
| `h1` (hero) | 70px | 400 | 87.5px (1.25) | 1px | `uppercase` |
| `h2` (sections) | 43px | 400 | 55.9px | 1px | `uppercase` |
| `nav link` | 13px | 300 | 14.04px | 1.5px | `uppercase` |
| `.lp-btn` | 14px | 700 | 14px | 1.5px | `uppercase` |
| `p` (body) | 16px | 400 | 25.6px (1.6) | 1px | none |
| `.lp-text--pretitle` | 16px | 400 | 25.6px | 1px | none |
| `.lp-text--subtitle` | 16px | 400 | — | — | `uppercase` |

**Key pattern:** ALL headings (h1-h6) are forced `text-transform: uppercase` via `#website-css`. Nav links and buttons also uppercase. Only body/paragraph text uses sentence case.

---

## Color Palette

### Core Colors (from computed styles)
| Name | Value | Usage |
|------|-------|-------|
| White | `#ffffff` / `rgb(255, 255, 255)` | Primary background, light sections |
| Off-white | `rgb(248, 248, 248)` | Alternate section BG (About, Communities, Newsletter) |
| Black | `#000000` | Body text on light sections |
| Black 80% | `rgba(0, 0, 0, 0.8)` | Body text (computed) |
| White text | `rgb(255, 255, 255)` | Text on dark/image sections |
| Overlay dark (hero) | `rgba(0, 0, 0, 0.4)` | Video overlay |
| Overlay dark (testimonials) | `rgba(32, 32, 32, 0.4)` via gradient | BG image overlay |
| Overlay dark (CTA) | `rgba(0, 0, 0, 0.3)` via gradient | BG image overlay |
| Contact modal BG | `rgba(0, 0, 0, 0.92)` | Full-screen contact overlay |
| Qualifying modal BG | `rgba(0, 0, 0, 0.7)` | Modal overlay |
| Accent (nav scroll bg) | `#f8f8f8` | Header on scroll |
| Nav sub-menu | `rgba(255, 255, 255, 0.9)` → hover `rgba(255, 255, 255, 1)` | Dropdown items |

### Accent/Brand Colors (from section CSS overrides)
| Name | Value | Usage |
|------|-------|-------|
| Featured Properties accent | `#374D6D` | Link underline, nav spacer |
| Link hover | `#4b4b4b` | Section link hover color |
| Muted link | `#a3a3a3` | Nav spacer before state |
| Disabled link | `#9B9B9B` | Slick disabled arrow |

### Section Background Pattern
| Section | Background |
|---------|-----------|
| Navbar (transparent) | `rgba(0,0,0,0)` |
| Navbar on scroll | `#f8f8f8` |
| Hero | Transparent (video/poster behind) |
| Featured Properties | `#ffffff` |
| Stats band | `#ffffff` |
| Quick Access | `#ffffff` |
| About | `#f8f8f8` |
| Communities | `#f8f8f8` |
| Testimonials | `#f8f8f8` + BG image + gradient overlay |
| Team | `#ffffff` |
| Newsletter | `#f8f8f8` |
| CTA Band | `#ffffff` + BG image + gradient overlay |
| Footer | `#ffffff` |

---

## Spacing Scale

### Global Section Padding
| Token | Value | Breakpoint |
|-------|-------|-----------|
| `--global-section-padding` | `96px` | Desktop (≥769px) |
| `--global-section-padding` | `64px` | Mobile (≤768px) |
| `--global-body-padding` | `0px` | All |

### Observed Spacing Values
| Element | Value | Direction |
|---------|-------|-----------|
| Nav container padding | `0px 45px` (left/right) | Horizontal |
| Nav container padding mobile | `0px 10px` (≤380px) | Horizontal |
| Hero collection padding-top | `120px` | Top |
| Hero collection slick-dots margin | `30px auto 85px` | — |
| Button `.lp-btn` | `20px 46px` | padding |
| `h1` margin | `8px 0px 24px` | top/bottom |
| `h2` margin-bottom | `24px` | Bottom |
| `p` margin-bottom | `24.99px` | Bottom |
| About img height | `715.742px` | Height |
| Communities card padding-top | `88px` | Top |
| Communities card padding-bottom | `96px` | Bottom |

---

## Border Radius
- No border-radius detected on primary UI elements.
- Buttons: no border-radius (sharp/square corners).
- Cards: no border-radius (square images/tiles).

---

## Borders
| Element | Value |
|---------|-------|
| `.lp-btn` (default) | `2px solid rgb(255, 255, 255)` |
| `.lp-btn` (dark, newsletter) | `2px solid rgb(0, 0, 0)` |
| Footer divider | `border-top: 1px solid #000` |
| Footer mobile social | `border-top: 1px solid #000` |
| Contact form input | `border-bottom: 1px solid #FFFFFF` |

---

## Shadows
- No `box-shadow` detected on primary UI elements (flat design aesthetic).
- Nav has no shadow.
- Cards have no shadow.

---

## Breakpoints

**From `#global-css` media queries:**
- `max-width: 768px` — Mobile layout (sections, nav, footer)
- `min-width: 768px` — Desktop layout variants

**From `#website-css` media queries:**
- `max-width: 768px` — Most layout shifts
- `min-width: 769px` — Desktop footer border, contact cell widths
- `max-width: 1080px` — Contact modal h2 font-size reduce
- `max-width: 925px` — Contact modal h2 further reduce
- `min-width: 1024px` — Hide hamburger menu
- `max-width: 380px` — Nav container padding reduce to 10px
- `max-width: 1200px` — Footer contact link underline
- `min-width: 376px` / `max-width: 375px` — Footer cell min-width breakpoint
- `max-width: 560px` — Hero CTA buttons stack vertically
- `max-width: 900px` — Hero video hidden (show poster instead)

**Summary breakpoints for clone:**
```
mobile:  390px  (max-width: 768px rules)
tablet:  768px  (transition zone)
desktop: 1024px+ (hamburger hidden, full nav)
wide:    1440px (max-width container)
```

---

## Transitions & Animations

| Element | Transition |
|---------|-----------|
| Nav | `transform 0.2s` |
| Nav container | `all` |
| Hero slide content | `all 0.6s` (translateX from -100px, opacity 0→1) |
| `.lp-btn` | `0.2s` |
| Email input | `0.3s` |
| About bio image | `visibility 5s, opacity 0.5s linear` |
| Sections (general) | `all` |

**WOW.js scroll reveals:** 21 elements use `.wow.fadeInUp` with staggered delays (e.g., 2.0s, 2.1s, 2.3s). Nav links use this on page load.

**Native scroll behavior:** `html { scroll-behavior: smooth }` (no Lenis).

---

## Scrollable Carousels (Slick.js)

| Carousel | Slides | Dots | Arrows |
|----------|--------|------|--------|
| Hero (video) | 1 (single slide) | No | No |
| Featured Properties | 4 | No | Text "PREVIOUS / NEXT" via `.slick-links-nav` |
| Testimonials | 3 | No | Text "PREVIOUS / NEXT" |
| Team | 2 | No | Text "PREVIOUS / NEXT" |

Navigation style: Not icon arrows — text labels "PREVIOUS" / "NEXT" styled as `<span class="link link--white feature prev/next slick-arrow">`.
