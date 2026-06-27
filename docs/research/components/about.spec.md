# Component Spec: About / Bio Section

## Overview
2-column layout: tall editorial portrait image on left, bio text + CTA on right. Off-white (`#f8f8f8`) background. Conveys agent's personal brand and authority.

## Structure

```
<section class="lp-section lp-section--about lp-section--alt-bg">
  <div class="lp-container">
    <div class="lp-about__layout">   <!-- display: flex or grid, 2 columns -->

      <!-- Left: Portrait image -->
      <div class="lp-about__image">
        <img src="https://lp-cdn.com/[headshot]"
             alt="Tabatha Chase"
             height="715"
             class="wow fadeInUp" />
      </div>

      <!-- Right: Text content -->
      <div class="lp-about__text">
        <p class="lp-text--pretitle wow fadeInUp" data-wow-delay="0.2s">
          ABOUT THE AGENT
        </p>
        <h2 class="wow fadeInUp" data-wow-delay="0.3s">
          TABATHA CHASE
        </h2>
        <p class="wow fadeInUp" data-wow-delay="0.4s">
          [Bio paragraph 1 — introduction, specialty, market]
        </p>
        <p class="wow fadeInUp" data-wow-delay="0.5s">
          [Bio paragraph 2 — background, achievements, personal]
        </p>
        <a href="/about" class="lp-btn lp-btn--dark wow fadeInUp" data-wow-delay="0.6s">
          ABOUT TABATHA
        </a>
      </div>

    </div>
  </div>
</section>
```

## Image Specs

| Property | Value |
|----------|-------|
| Height | `715.742px` computed (tall editorial format) |
| Width | Auto (aspect-ratio driven) |
| Object-fit | Cover |
| Border-radius | None |
| Transition | `visibility 5s, opacity 0.5s linear` (fade-in on load) |
| Source URL | `https://lp-cdn.com/[agent-id]/[image].jpg` |

## Layout

| Property | Value |
|----------|-------|
| Background | `#f8f8f8` |
| Layout | 2-column: image ~45%, text ~55% |
| Gap | ~48-80px |
| Section padding | `96px 0` desktop |
| Image alignment | Top-aligned (image is tall, doesn't center) |

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Pretitle | 16px | 400 | Normal |
| H2 (name) | 43px | 400 | UPPERCASE |
| Body paragraphs | 16px | 400 | Sentence case |
| Button | 14px | 700 | UPPERCASE |

## Button

`.lp-btn--dark` (black background):
- BG: `#000` or `#111`
- Text: White
- Border: `2px solid black`
- Hover: Lighten background

## Animations

- Portrait image: WOW.js `fadeInUp`
- Pretitle: staggered delay 0.2s
- H2: delay 0.3s
- Paragraphs: delay 0.4s, 0.5s
- Button: delay 0.6s

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | Single column; image stacks above text |
| `≤768px` | Image height reduces |

## Content for Tabatha Chase Clone

- Portrait: High-res editorial headshot of Tabatha Chase (professional, formal)
- Pretitle: "ABOUT TABATHA" or "REALTOR" or "YOUR AGENT"
- H2: "TABATHA CHASE"
- Bio: 2-3 paragraphs — market expertise, brokerage affiliation, personal values, years of experience
- CTA: "ABOUT TABATHA" → `/about`

## Clone Notes

- Use `next/image` with priority=false (below fold)
- For clone: replace lp-cdn.com URL with Tabatha's actual headshot in `public/images/`
- Consider adding agent credentials below bio (designations like GRI, CRS, etc.)
