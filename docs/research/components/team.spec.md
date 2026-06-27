# Component Spec: Team

## Overview
White background section showcasing the agent team (2 members = 2 slides). Horizontal carousel with text navigation. Each card shows a headshot, name, title, and link to agent's profile.

## Structure

```
<section class="lp-section lp-section--team">
  <div class="lp-container">
    <p class="lp-text--pretitle wow fadeInUp">OUR TEAM</p>
    <h2 class="wow fadeInUp" data-wow-delay="0.2s">MEET THE TEAM</h2>

    <!-- Slick carousel: 2 slides -->
    <div class="slick-slider lp-team__slider">
      <div class="slick-list">
        <div class="slick-track">

          <div class="slick-slide">
            <div class="lp-team-card">
              <div class="lp-team-card__image">
                <img src="https://lp-cdn.com/[headshot].jpg"
                     alt="[Agent Name]" />
              </div>
              <div class="lp-team-card__info">
                <h3 class="lp-team-card__name">[AGENT NAME]</h3>
                <p class="lp-team-card__title">[Title / Role]</p>
                <a href="/team/[slug]" class="link link--black">VIEW PROFILE</a>
              </div>
            </div>
          </div>

          <!-- × 2 slides total -->

        </div>
      </div>
    </div>

    <!-- Text navigation -->
    <div class="slick-links-nav">
      <span class="link link--black feature prev slick-arrow slick-disabled">PREVIOUS</span>
      <span class="link link--black feature next slick-arrow">NEXT</span>
    </div>

  </div>
</section>
```

## Card Specs

| Property | Value |
|----------|-------|
| Image | Square or portrait headshot |
| Image aspect | ~3:4 (portrait) or 1:1 (square) |
| No border-radius | Flat design |
| No shadow | Flat design |
| Info block below image | Name, title, link |

## Layout

| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Cards visible | 1-2 at a time (desktop may show 2) |
| Section padding | `96px 0` |

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Pretitle | 16px | 400 | Normal |
| H2 | 43px | 400 | UPPERCASE |
| Agent name (h3) | 21px | 400 | UPPERCASE |
| Title/Role (p) | 16px | 300 | UPPERCASE |
| Profile link | 13px | 300 | UPPERCASE |

## Navigation

Same as Featured Properties: `.link.link--black.feature.prev.slick-arrow` / `.next`

## Animations

- Pretitle: WOW.js `fadeInUp`
- H2: delay 0.2s

## Responsive

| Breakpoint | Change |
|-----------|--------|
| `≤768px` | 1 card visible, full width |

## Content for Tabatha Chase Clone

Team members to include:
- Tabatha Chase (lead agent) — headshot, title ("REALTOR" or "LEAD AGENT"), profile link
- Additional team members if Tabatha has a team (confirm from her website)
- If solo agent: hide carousel, show single card or remove section

## Clone Notes

- If Tabatha is a solo agent, this section can be simplified to a 1-card static layout or removed
- Team profile pages: `/team/[slug]` (stub routes for phase 1)
- Headshots: professional photos at consistent aspect ratio
- "VIEW PROFILE" links to individual agent bio pages
