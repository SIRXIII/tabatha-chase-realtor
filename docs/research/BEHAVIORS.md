# Behaviors — kim-bibb.com

> Scroll behaviors, carousels, hover states, breakpoints, mobile nav, animations.
> Extracted via Playwright on 2026-06-27.

---

## Sticky Header

**Mechanism:** JavaScript scroll listener on `window` adds `.scroll` class to `<header>` when `window.scrollY > 0`.

**State table:**

| State | Background | Text Color | Logo |
|-------|-----------|-----------|------|
| At top (transparent) | `rgba(0,0,0,0)` | White | White/light version |
| Scrolled (`.scroll`) | `#f8f8f8` | Black | Dark version |

**Transition:** `all` (implied by CSS `transition: all` on `.lp-header`).

**Z-index:** `1000`.

**Height:** ~80px computed (exact value needs confirmation with screenshot).

---

## Hero Video

- Autoplay, muted, loop, playsinline
- VP9 WebM format (Cloudinary)
- At `max-width: 900px`: video is hidden, shows static poster image instead
- Overlay: `rgba(0,0,0,0.4)` div on top of video
- Slick carousel wraps the hero (1 slide only — no actual carousel behavior on homepage)

---

## Slick Carousels (4 instances)

### 1 — Hero
- Slides: 1
- Arrows: none
- Dots: none
- Autoplay: unknown (irrelevant with 1 slide)

### 2 — Featured Properties
- Slides: 4 (1 visible at a time on desktop, possibly 2)
- Arrows: Text links "PREVIOUS" / "NEXT" (not icon arrows)
  - Class: `span.link.link--black.feature.prev.slick-arrow` and `.next`
- Dots: none
- Autoplay: not detected
- Transition: slide (default Slick CSS transition)

### 3 — Testimonials
- Slides: 3
- Arrows: Text links "PREVIOUS" / "NEXT" (white variant on dark BG)
  - Class: `span.link.link--white.feature.prev.slick-arrow` and `.next`
- Dots: none
- Autoplay: not detected
- Transition: slide

### 4 — Team
- Slides: 2
- Arrows: Text links "PREVIOUS" / "NEXT"
- Dots: none
- Autoplay: not detected
- Transition: slide

**Clone implementation note:** Use Embla Carousel or CSS scroll-snap with custom prev/next text links. No icon arrows needed — pure text navigation.

---

## WOW.js Scroll-Reveal

- Library: WOW.js + Animate.css
- Animation class: `fadeInUp`
- Element count: 21 elements on homepage
- Trigger: element enters viewport (bottom of viewport crosses element top)
- One-time: fires once per element (standard WOW default)
- Delays: staggered `data-wow-delay` attributes (e.g., 2.0s, 2.1s, 2.3s on nav links at page load)
- Duration: default WOW.js (1s unless overridden)

**Clone implementation:** Use `framer-motion` with `whileInView={{ opacity: 1, y: 0 }}` and `initial={{ opacity: 0, y: 20 }}`. Stagger using `transition={{ delay: index * 0.1 }}`.

---

## Smooth Scroll

```css
html { scroll-behavior: smooth; }
```

Applied natively via CSS. No scroll library (no Lenis, no locomotive-scroll).

---

## Hover States

| Element | Default | Hover |
|---------|---------|-------|
| `.lp-btn` (white outline) | White border + text, transparent BG | Invert (white BG, black text) |
| `.lp-btn--dark` | Black BG + white text | Lighten BG (`#333`) |
| `.link.link--black` | Black text, no underline | Underline appears |
| `.link.link--white` | White text | Opacity 0.7 |
| Nav links | Default color | Opacity change or color shift |
| Slick arrow (disabled) | `color: #9B9B9B` | n/a |
| Community card | No apparent hover | LP may add transform on some variants |

---

## Breakpoints

Primary breakpoints from stylesheet analysis:

| Breakpoint | Value | What changes |
|-----------|-------|-------------|
| Mobile | `max-width: 768px` | Single-column layout, reduced section padding (96→64px), footer reflow |
| Hamburger show | `max-width: 1023px` | Nav links hidden, hamburger visible |
| Hamburger hide | `min-width: 1024px` | `display: none` on hamburger |
| Hero video hide | `max-width: 900px` | Video hidden, poster shown |
| Hero CTA stack | `max-width: 560px` | Buttons stack vertically |
| Nav padding reduce | `max-width: 380px` | Container padding `45px → 10px` |
| Footer border | `min-width: 769px` | Top border on footer contact section |
| Footer cell width | `min-width: 376px` | Min-width on footer cells |

---

## Mobile Navigation

- Hamburger icon appears at `<1024px`
- Click opens off-canvas drawer (slides from right or overlays full-screen — LP standard)
- Nav links listed vertically
- Social icons typically shown in mobile nav
- Close button or backdrop tap closes

---

## Contact Modal

- Triggered by "CONTACT KIM" CTAs throughout page
- Full-screen overlay: `rgba(0,0,0,0.92)` background
- Contains form: Name, Email, Phone, Message, Submit
- Form inputs: `border-bottom: 1px solid #FFFFFF` only (minimal style)
- `h2` inside modal reduces at `max-width: 1080px` and again at `max-width: 925px`

---

## Qualifying Modal

- Triggered by some property or search CTAs
- Background: `rgba(0,0,0,0.7)` (lighter than contact modal)
- Modal card floats centered

---

## General Section Behavior

- All sections use `padding: var(--global-section-padding) 0` (96px desktop, 64px mobile)
- `.lp-container` provides max-width centering (exact max-width ~1200-1440px)
- Sections alternate between white (`#fff`) and off-white (`#f8f8f8`) backgrounds
- Image-backed sections (Testimonials, CTA Band) use `background-size: cover; background-position: center`

---

## No-Autoplay Carousels

All four Slick instances appear to NOT use autoplay based on inspection. Navigation is entirely manual via PREVIOUS/NEXT text links. This aligns with the luxury/premium aesthetic — no auto-advancing that might feel pushy.
