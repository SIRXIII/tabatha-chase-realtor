# Tech Stack Analysis — kim-bibb.com

> Inspected via Playwright DOM/script extraction on 2026-06-27.

---

## Platform

**Luxury Presence (LP)** — SaaS real estate website builder.
- URL pattern: `https://kim-bibb.com/` — custom domain, LP-hosted
- All CSS namespaced with `lp-`, `#global-css`, `#website-css`
- No `__NEXT_DATA__`, no `__NUXT__`, no `ng-version`
- Static HTML served with Slick/WOW injected via `<script>` tags
- Not a React/Vue/Angular SPA — classic server-rendered HTML + jQuery stack

---

## JavaScript Libraries

| Library | Version | How detected | Purpose |
|---------|---------|--------------|---------|
| jQuery | (bundled, version unclear) | `window.jQuery` present | DOM manipulation, plugin orchestration |
| Slick.js | (bundled) | `.slick-slider` elements, `$.fn.slick` | Carousel / slider (4 instances) |
| WOW.js | (bundled) | `window.WOW`, 21 `.wow` elements | Scroll-reveal animations |
| Paroller.js | (bundled, unused on homepage) | Script tag present, 0 `data-paroller` elements | Parallax (loaded but not triggered) |
| Splide.js | (bundled) | Script tag present | Possibly for interior listing pages or gallery slides |
| Animate.css | (bundled) | Used by WOW.js for `fadeInUp` classes | Animation keyframes |

**No:** React, Vue, Angular, Next.js, Nuxt, GSAP, Lenis, Framer Motion, Swiper, or other modern libs detected on homepage.

---

## CSS Approach

- **Global platform stylesheet** injected as `<style id="global-css">` (LP base)
- **Site-specific overrides** in `<style id="website-css">` (per-agent config)
- No Tailwind, no CSS Modules, no Styled Components
- CSS Variables on `:root` (LP design token system)
- Traditional BEM-influenced class names: `.lp-section`, `.lp-container`, `.lp-text--pretitle`
- Utility classes: `.lp-btn`, `.link`, `.link--white`, `.link--black`

---

## Fonts

**Self-hosted Helvetica** via CloudFront CDN.

```css
@font-face {
  font-family: 'Helvetica';
  src: url('https://d1e1jt2fj4r8r.cloudfront.net/fonts/Helvetica/Helvetica.woff2');
  font-weight: 400; font-style: normal;
}
/* Also: Light (300), Bold (700), italic variants */
```

No Google Fonts, no Adobe Typekit. All weights self-hosted.

---

## Media / Assets

| Asset type | CDN / Host |
|------------|-----------|
| Images | `https://lp-cdn.com/` (Luxury Presence CDN) |
| Video | `https://res.cloudinary.com/` (Cloudinary) |
| Fonts | `https://d1e1jt2fj4r8r.cloudfront.net/` (LP CloudFront) |

**Hero video format:** VP9 WebM via Cloudinary.
**Hero poster:** Static JPG from lp-cdn.com.
**About image:** Full-height editorial from lp-cdn.com.
**Testimonials / CTA BG:** lp-cdn.com images.

---

## Listings Backend

**Luxury Presence proprietary** — listings loaded dynamically (AJAX/API not captured in static snapshot). Featured Properties carousel shows 4 property cards with prices, beds/baths, and listing photos sourced from LP's listings API or IDX integration.

Clone equivalent: static JSON fixture or IDX component stub.

---

## Scroll Behavior

```css
html { scroll-behavior: smooth; }
```

Native CSS smooth scroll — no JS scroll library (Lenis/locomotive-scroll not used).

---

## Animation System

Two layers:
1. **WOW.js** — trigger `fadeInUp` on scroll for 21 elements. Each element has `data-wow-delay` in increments (2.0s, 2.1s, 2.3s pattern).
2. **Slick.js transition** — CSS slide transitions on carousel content.

No GSAP, no ScrollTrigger, no AOS.

---

## Navigation

- Sticky header (`position: fixed`, `z-index: 1000`)
- JS adds `.scroll` class on window scroll → changes nav bg to `#f8f8f8`
- Hamburger hidden at `≥1024px` (CSS `display: none`)
- Mobile: hamburger toggles off-canvas nav (standard LP pattern)

---

## Our Clone Equivalents

| Original | Clone Replacement |
|----------|-----------------|
| jQuery + Slick.js | `useRef` + CSS scroll snap or Embla Carousel |
| WOW.js + Animate.css | Framer Motion `whileInView` or CSS `@keyframes` + IntersectionObserver |
| Paroller.js | None needed (unused on homepage) |
| Self-hosted Helvetica | `next/font/local` with woff2 files |
| Cloudinary VP9 video | `<video>` element with mp4 fallback or same Cloudinary URL |
| lp-cdn.com images | `next/image` with `public/images/` local downloads |
| LP listings API | Static JSON prop data (phase 1 clone), IDX later |
