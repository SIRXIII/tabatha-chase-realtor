# Component Spec: Quick Access

## Overview
2-column grid of large image cards. Each card has a full-bleed image background, a heading, and a CTA button. White background section. Serves as a navigational shortcut to key search/service paths (Buy, Sell, etc.).

## Structure

```
<section class="lp-section lp-section--quick-access">
  <div class="lp-container">
    <h2 class="wow fadeInUp">HOW CAN WE HELP?</h2>

    <div class="lp-quick-access__grid">

      <div class="lp-quick-access__card">
        <div class="lp-quick-access__card-image"
             style="background-image: url('[image-url]'); background-size: cover">
          <!-- Dark overlay via ::before or child div -->
        </div>
        <div class="lp-quick-access__card-content">
          <h3>BUYING A HOME</h3>
          <a href="/buy" class="lp-btn lp-btn--white">LEARN MORE</a>
        </div>
      </div>

      <div class="lp-quick-access__card">
        <div class="lp-quick-access__card-image"
             style="background-image: url('[image-url]'); background-size: cover">
        </div>
        <div class="lp-quick-access__card-content">
          <h3>SELLING A HOME</h3>
          <a href="/sell" class="lp-btn lp-btn--white">LEARN MORE</a>
        </div>
      </div>

      <!-- Potentially 3rd or 4th card for SEARCH / COMMUNITIES -->

    </div>
  </div>
</section>
```

## Card Dimensions

| Property | Value |
|----------|-------|
| Card height | ~400-500px (tall, image-dominant) |
| Image | Full-bleed `background-size: cover; background-position: center` |
| Overlay | Semi-transparent dark (exact value TBD — likely `rgba(0,0,0,0.3)`) |
| Border-radius | None (flat, square) |

## Typography

| Element | Size | Weight | Transform | Color |
|---------|------|--------|-----------|-------|
| H3 (card title) | 30px | 400 | UPPERCASE | White |
| Button | 14px | 700 | UPPERCASE | White |

## Button Variant

`.lp-btn--white` or `.lp-btn` on dark background:
- Border: `2px solid white`
- Background: Transparent
- Text: White
- Hover: Fill white, text becomes black

## Layout

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Grid | `display: grid; grid-template-columns: 1fr 1fr` |
| Grid gap | ~24px or 0 (flush cards) |

## Animations

- H2 and cards: WOW.js `fadeInUp`

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | Single column stack |

## Content for Tabatha Chase Clone

Cards to include:
1. "BUYING" — buy homes CTA → `/buy`
2. "SELLING" — sell homes CTA → `/sell`
3. Optional: "SEARCH" or "COMMUNITIES" → `/search` or `/communities`

## Clone Notes

- Images: Lifestyle real estate photography (exterior home shots, neighborhoods)
- Source from Tabatha's branded asset library or use lp-cdn.com originals as placeholders
- Content overlay positioned at bottom of card (absolute, bottom: 0, left: 0, right: 0)
