# Component Spec: Hero Section

## Overview
Full-viewport-height hero with autoplay background video. White text overlaid on dark video overlay. Pre-title + H1 + two CTA buttons stacked vertically, left-aligned. Single Slick slide (effectively static layout).

## Structure

```
<section class="lp-section lp-section--hero">
  <div class="slick-slider">
    <div class="slick-list">
      <div class="slick-track">
        <div class="slick-slide">

          <!-- Background video -->
          <video autoplay muted loop playsinline
                 poster="https://lp-cdn.com/[poster].jpg">
            <source src="https://res.cloudinary.com/[id]/video/upload/[params]/[file].webm"
                    type="video/webm" />
          </video>

          <!-- Dark overlay -->
          <div class="lp-hero__overlay" />   <!-- rgba(0,0,0,0.4) -->

          <!-- Content (left-aligned, padding-top: 120px) -->
          <div class="lp-container lp-hero__content">
            <p class="lp-text--pretitle wow fadeInUp" data-wow-delay="0.3s">
              [Pretitle / tagline]
            </p>
            <h1 class="wow fadeInUp" data-wow-delay="0.5s">
              [HERO HEADLINE]
            </h1>
            <div class="lp-hero__cta wow fadeInUp" data-wow-delay="0.7s">
              <a href="/listings" class="lp-btn">SEARCH HOMES</a>
              <a href="/about" class="lp-btn lp-btn--outline">MEET TABATHA</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
```

## Dimensions

| Property | Value |
|----------|-------|
| `min-height` | `100vh` |
| `padding-top` | `120px` (clears fixed nav) |
| Overlay opacity | `rgba(0,0,0,0.4)` |

## Typography

| Element | Size | Weight | Case | Color |
|---------|------|--------|------|-------|
| Pretitle | 16px | 400 | Normal | White |
| H1 | 70px | 400 | UPPERCASE | White |
| CTA Button | 14px | 700 | UPPERCASE | White |

## Video Specs

| Property | Value |
|----------|-------|
| Format | VP9 WebM (Cloudinary) |
| Fallback | Static poster JPG (`lp-cdn.com`) |
| Behavior | autoplay, muted, loop, playsinline |
| Visibility at `≤900px` | Video hidden, poster shown |

## Button Styles

| Variant | Border | BG | Text |
|---------|--------|-----|------|
| Primary `.lp-btn` | `2px solid white` | Transparent | White |
| Secondary `.lp-btn--outline` | `2px solid white` | Transparent | White |

Both square corners (no border-radius). Padding `20px 46px`. Font-size 14px bold uppercase.

## Animations

| Element | Animation | Delay |
|---------|-----------|-------|
| Pretitle | `fadeInUp` (WOW.js) | 0.3s |
| H1 | `fadeInUp` (WOW.js) | 0.5s |
| CTA row | `fadeInUp` (WOW.js) | 0.7s |
| Slide in on load | `translateX(-100px) → 0, opacity 0 → 1` | Slick built-in (0.6s) |

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤900px` | Video hidden, poster image shown as background |
| `≤560px` | CTA buttons stack vertically (flex-direction: column) |
| `≤768px` | H1 font-size reduces |

## Clone Notes

- Use `<video>` tag with Cloudinary URL (or replace with local `public/videos/hero.mp4`)
- `next/image` for poster fallback with `priority` prop
- For Tabatha Chase clone: replace Kim Bibb video/poster with Tabatha's branding assets
- Two CTA links needed: primary search and secondary about/contact
