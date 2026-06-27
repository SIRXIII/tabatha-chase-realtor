# Component Spec: CTA Band

## Overview
Full-width section with background image and dark gradient overlay. White text centered. Single large H2 and one CTA button. Designed to drive contact / consultation conversions. High-impact visual separator between Newsletter and Footer.

## Structure

```
<section class="lp-section lp-section--cta"
         style="background-image: url('https://lp-cdn.com/[cta-bg].jpg');
                background-size: cover;
                background-position: center">

  <!-- Dark overlay via ::before or child div -->
  <!-- rgba(0,0,0,0.3) -->

  <div class="lp-container lp-cta__content">
    <h2 class="wow fadeInUp">READY TO FIND YOUR DREAM HOME?</h2>
    <p class="wow fadeInUp" data-wow-delay="0.2s">
      Let's start your real estate journey today.
    </p>
    <a href="/contact" class="lp-btn lp-btn--white wow fadeInUp" data-wow-delay="0.3s">
      CONTACT TABATHA
    </a>
  </div>

</section>
```

## Visual Specs

| Property | Value |
|----------|-------|
| Background | Image + `rgba(0,0,0,0.3)` gradient overlay |
| BG image | `background-size: cover; background-position: center` |
| Text color | White throughout |
| Layout | Centered content (text-align: center) |
| Section padding | `96px 0` desktop |
| Overlay | `rgba(0,0,0,0.3)` via `::before` pseudo-element |

## Overlay (CSS)

```css
.lp-section--cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}
```

## Typography

| Element | Size | Weight | Transform | Color |
|---------|------|--------|-----------|-------|
| H2 | 43px | 400 | UPPERCASE | White |
| Body (p) | 16px | 400 | Sentence case | White |
| Button | 14px | 700 | UPPERCASE | White |

## Button Variant: `.lp-btn--white` (on dark bg)

| Property | Value |
|----------|-------|
| Border | `2px solid white` |
| Background | Transparent |
| Text | White |
| Hover | Fill white, text becomes black |
| Padding | `20px 46px` |
| Border-radius | `0` |

## Animations

- H2: WOW.js `fadeInUp`
- Paragraph: delay 0.2s
- Button: delay 0.3s

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | Section padding reduces to 64px; h2 font-size reduces |
| `≤560px` | Button full-width |

## Content for Tabatha Chase Clone

- BG image: Luxury exterior or lifestyle shot (sunset, pool, golf course — matches Tabatha's market)
- H2: "READY TO FIND YOUR HOME?" or "LET'S TALK REAL ESTATE"
- Body: Short 1-2 line invitation to connect
- CTA button: "CONTACT TABATHA" → opens contact modal or navigates to `/contact`

## Clone Notes

- Image should be striking enough to work at full-width with overlay
- Can use same BG image as hero poster (different crop) or unique landscape image
- Button click → triggers contact modal (same as nav CTA)
- `position: relative` on section (needed for absolute overlay)
