# Component Spec: Communities

## Overview
3-column grid of community/neighborhood cards. Off-white background. Each card is a full-bleed image with the community name and a text link. Helps buyers explore neighborhoods.

## Structure

```
<section class="lp-section lp-section--communities lp-section--alt-bg">
  <div class="lp-container">
    <p class="lp-text--pretitle wow fadeInUp">NEIGHBORHOODS</p>
    <h2 class="wow fadeInUp" data-wow-delay="0.2s">EXPLORE COMMUNITIES</h2>

    <div class="lp-communities__grid">

      <div class="lp-community-card wow fadeInUp" data-wow-delay="0.3s">
        <!-- Image occupies full card top -->
        <div class="lp-community-card__image">
          <img src="https://lp-cdn.com/[image].jpg" alt="[Community Name]" />
        </div>
        <!-- Text below image -->
        <div class="lp-community-card__content">
          <h3 class="community-name">[COMMUNITY NAME]</h3>
          <a href="/communities/[slug]" class="link link--black">EXPLORE</a>
        </div>
      </div>

      <!-- repeat × 3 (or 6) -->

    </div>
  </div>
</section>
```

## Card Layout

| Property | Value |
|----------|-------|
| Card style | Image top, text content below (not overlay) |
| Card padding-top | `88px` |
| Card padding-bottom | `96px` |
| Image aspect ratio | ~3:2 or 4:3 |
| Border-radius | None |
| Shadow | None |

## Grid Layout

| Property | Value |
|----------|-------|
| Background | `#f8f8f8` |
| Columns (desktop) | 3 equal columns |
| Columns (mobile) | 1 column |
| Gap | ~24-32px |

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Pretitle | 16px | 400 | Normal |
| H2 | 43px | 400 | UPPERCASE |
| Community name (h3) | 30px | 400 | UPPERCASE |
| Explore link | 13-16px | 300 | UPPERCASE |

## Link Style

`.link.link--black`:
- Color: Black
- Text-decoration: None by default
- Hover: Underline appears (or color shifts to `#374D6D`)
- Letter-spacing: 1.5px

## Animations

- Pretitle: WOW.js `fadeInUp`
- H2: delay 0.2s
- Cards: staggered 0.3s, 0.4s, 0.5s (per card)

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | 1-column stack |

## Content for Tabatha Chase Clone

Communities to include (Tabatha operates in [confirm market area]):
- Based on Tabatha's market: likely Coachella Valley communities:
  - La Quinta, Indian Wells, Palm Desert, Rancho Mirage, Palm Springs, etc.
- Each community needs: name, slug, hero image, short description

## Clone Notes

- Community images: lifestyle/aerial neighborhood shots from `public/images/communities/`
- Link targets: `/communities/[slug]` (stub pages for phase 1, or redirect to search filtered by area)
- Could expand to 6-9 communities across 2 rows
