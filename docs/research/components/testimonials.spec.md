# Component Spec: Testimonials

## Overview
Full-width section with background image + dark gradient overlay. Horizontal carousel of 3 client testimonials. White text. Manual text-link navigation (PREVIOUS / NEXT white variant).

## Structure

```
<section class="lp-section lp-section--testimonials"
         style="background-image: url('https://lp-cdn.com/[testimonial-bg].jpg');
                background-size: cover;
                background-position: center">
  <!-- Dark overlay via ::before pseudo -->
  <!-- gradient: rgba(32,32,32,0.4) -->

  <div class="lp-container">
    <p class="lp-text--pretitle" style="color: white">WHAT CLIENTS SAY</p>
    <h2 style="color: white">CLIENT TESTIMONIALS</h2>

    <!-- Slick carousel: 3 slides -->
    <div class="slick-slider lp-testimonials__slider">
      <div class="slick-list">
        <div class="slick-track">

          <div class="slick-slide">
            <blockquote class="lp-testimonial">
              <p class="lp-testimonial__text">
                "Working with Kim was an incredible experience..."
              </p>
              <footer class="lp-testimonial__attribution">
                <cite class="lp-testimonial__author">— JOHN & JANE DOE</cite>
                <span class="lp-testimonial__location">Beverly Hills, CA</span>
              </footer>
            </blockquote>
          </div>

          <!-- × 3 slides total -->

        </div>
      </div>
    </div>

    <!-- Text navigation (white variant for dark section) -->
    <div class="slick-links-nav">
      <span class="link link--white feature prev slick-arrow slick-disabled">PREVIOUS</span>
      <span class="link link--white feature next slick-arrow">NEXT</span>
    </div>

  </div>
</section>
```

## Visual Specs

| Property | Value |
|----------|-------|
| Background | Image + `rgba(32,32,32,0.4)` gradient overlay |
| BG image behavior | `background-size: cover; background-position: center` |
| Text color | White throughout |
| Section padding | `96px 0` desktop |

## Overlay

Applied via `::before` pseudo-element or a child `.lp-overlay` div:
```css
background: linear-gradient(rgba(32,32,32,0.4), rgba(32,32,32,0.4));
/* or: background-color: rgba(32,32,32,0.4); */
```

## Carousel: 3 Slides

| Property | Value |
|----------|-------|
| Slides | 3 |
| Visible at once | 1 |
| Arrows | Text: "PREVIOUS" / "NEXT" in white |
| Dots | None |
| Autoplay | None detected |
| Transition | Slide |

## Typography

| Element | Size | Weight | Transform | Color |
|---------|------|--------|-----------|-------|
| Pretitle | 16px | 400 | Normal | White |
| H2 | 43px | 400 | UPPERCASE | White |
| Quote text | 16-21px | 400 | Sentence case | White |
| Author citation | 16px | 400 | UPPERCASE | White |
| Location | 16px | 300 | Normal | White (70%) |

## Navigation Links (White Variant)

`.link.link--white`:
- Color: White
- Hover: Opacity 0.7
- Letter-spacing: 1.5px
- Text-transform: UPPERCASE
- Disabled: `#9B9B9B` (handled by `.slick-disabled`)

## Content for Tabatha Chase Clone

3 testimonials needed:
```
{
  quote: "Full review text (2-4 sentences)",
  author: "FIRST & LAST NAME",
  location: "City, State"
}
```

Source from Tabatha's Zillow reviews, Google reviews, or provided testimonials.

## Clone Notes

- BG image: Replace with Tabatha's branding imagery (luxury home exterior, lifestyle)
- Overlay: Keep `rgba(32,32,32,0.4)` — darkens image enough for white text legibility
- No star ratings shown in original (can be added for Tabatha's version)
- Carousel: Embla or CSS scroll-snap with custom white text prev/next
