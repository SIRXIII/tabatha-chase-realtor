# Component Spec: Featured Properties

## Overview
Horizontal carousel of 4 property listing cards. White background. Section heading with pretitle. Manual text-link navigation (PREVIOUS / NEXT). CTA button to view all listings.

## Structure

```
<section class="lp-section lp-section--listings">
  <div class="lp-container">
    <p class="lp-text--pretitle">FEATURED LISTINGS</p>
    <h2>FEATURED PROPERTIES</h2>

    <!-- Slick carousel -->
    <div class="slick-slider lp-listings__slider">
      <div class="slick-list">
        <div class="slick-track">
          <!-- 4 cards, 1 (or 2) visible at a time -->
          <div class="slick-slide">
            <div class="lp-listing-card">
              <div class="lp-listing-card__image">
                <img src="[property-photo]" alt="[address]" />
                <span class="lp-listing-card__badge">ACTIVE</span>
              </div>
              <div class="lp-listing-card__info">
                <p class="lp-listing-card__price">$X,XXX,XXX</p>
                <p class="lp-listing-card__details">X BD | X BA | X,XXX SQ FT</p>
                <p class="lp-listing-card__address">[Street Address, City, State]</p>
              </div>
            </div>
          </div>
          <!-- repeat × 4 -->
        </div>
      </div>
    </div>

    <!-- Text navigation -->
    <div class="slick-links-nav">
      <span class="link link--black feature prev slick-arrow slick-disabled">PREVIOUS</span>
      <span class="link link--black feature next slick-arrow">NEXT</span>
    </div>

    <a href="/listings" class="lp-btn lp-btn--dark">VIEW ALL LISTINGS</a>
  </div>
</section>
```

## Card Dimensions

| Property | Value |
|----------|-------|
| Card width | ~340-400px (depends on container, 1 per slide) |
| Image aspect ratio | ~16:10 or 4:3 (property photo) |
| No border-radius | Flat, square corners |
| No shadow | Flat design |

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Pretitle | 16px | 400 | Normal |
| H2 | 43px | 400 | UPPERCASE |
| Price | 21px (h4 size) | 700 | UPPERCASE |
| BD/BA/SQFT details | 16px | 300 | UPPERCASE |
| Address | 16px | 400 | Normal |

## Accent Color

- Link underline / section accent: `#374D6D` (slate blue)
- Disabled arrow: `#9B9B9B`

## Navigation

| Element | Class | Behavior |
|---------|-------|---------|
| Prev arrow | `.link.link--black.feature.prev.slick-arrow` | Goes to previous slide; disabled on first slide |
| Next arrow | `.link.link--black.feature.next.slick-arrow` | Goes to next slide; disabled on last slide |
| Disabled state | `.slick-disabled` | Color: `#9B9B9B` |

## Interactions

- Arrow click: slide transitions (no autoplay)
- Card click: navigates to listing detail page
- Card hover: possible subtle transform or image scale (confirm with screenshots)

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | Single column, possibly 1 card at a time |
| `≤480px` | Full-width cards |

## Clone Notes

- Populate with Tabatha Chase's actual active listings (or 4 sample properties)
- Property data shape: `{ price, beds, baths, sqft, address, city, state, photo, mlsId, status }`
- Use Embla Carousel with `loop: false` and custom prev/next buttons styled as plain text links
- Badge ("ACTIVE", "PENDING") optional — include if data available
