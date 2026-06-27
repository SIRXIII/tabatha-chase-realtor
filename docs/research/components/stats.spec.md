# Component Spec: Stats Band

## Overview
Narrow horizontal band with 3-4 stat blocks arranged in a grid. White background. Large numeric values with smaller descriptive labels below. No images or icons. Conveys agent performance data at a glance.

## Structure

```
<section class="lp-section lp-section--stats">
  <div class="lp-container">
    <div class="lp-stats__grid">

      <div class="lp-stat wow fadeInUp" data-wow-delay="0.2s">
        <h3 class="lp-stat__value">$450M+</h3>
        <p class="lp-stat__label">IN SALES VOLUME</p>
      </div>

      <div class="lp-stat wow fadeInUp" data-wow-delay="0.3s">
        <h3 class="lp-stat__value">500+</h3>
        <p class="lp-stat__label">HOMES SOLD</p>
      </div>

      <div class="lp-stat wow fadeInUp" data-wow-delay="0.4s">
        <h3 class="lp-stat__value">15+</h3>
        <p class="lp-stat__label">YEARS OF EXPERIENCE</p>
      </div>

      <!-- Optional 4th stat -->
      <div class="lp-stat wow fadeInUp" data-wow-delay="0.5s">
        <h3 class="lp-stat__value">#1</h3>
        <p class="lp-stat__label">TEAM IN MARKET</p>
      </div>

    </div>
  </div>
</section>
```

## Layout

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Grid | CSS Grid, 3-4 equal columns |
| Section padding | `96px 0` desktop, `64px 0` mobile |
| Text align | Center (each stat block) |

## Typography

| Element | Size | Weight | Transform | Color |
|---------|------|--------|-----------|-------|
| Stat value (h3) | 30px | 400 | UPPERCASE | Black |
| Stat label (p) | 16px | 300 | UPPERCASE | Black 80% |

## Animations

- WOW.js `fadeInUp` on each stat block
- Staggered delays (0.2s, 0.3s, 0.4s, 0.5s)

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | 2-column grid or single column |

## Content for Tabatha Chase Clone

Actual stats to populate (from Tabatha's profile — verify):
- Total sales volume
- Homes sold
- Years in market
- Awards / recognitions / #1 rank if applicable

## Clone Notes

- No dividers between stats (pure whitespace separation)
- No icons
- Numbers can use `+` or `#` prefix as needed
- Consider counter animation on scroll (not in original but common enhancement — hold for phase 2)
