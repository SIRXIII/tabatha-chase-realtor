# Component Spec: Newsletter / Email Capture

## Overview
Off-white section with centered heading, short description, and email input + subscribe button. Minimal design. No decorative elements.

## Structure

```
<section class="lp-section lp-section--newsletter lp-section--alt-bg">
  <div class="lp-container lp-newsletter__inner">

    <p class="lp-text--pretitle wow fadeInUp">STAY INFORMED</p>
    <h2 class="wow fadeInUp" data-wow-delay="0.2s">MARKET UPDATES</h2>
    <p class="lp-newsletter__description wow fadeInUp" data-wow-delay="0.3s">
      Subscribe to receive the latest real estate news and market updates.
    </p>

    <form class="lp-newsletter__form wow fadeInUp" data-wow-delay="0.4s"
          method="POST" action="/subscribe">
      <div class="lp-newsletter__form-row">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          class="lp-newsletter__input"
        />
        <button type="submit" class="lp-btn lp-btn--dark">
          SUBSCRIBE
        </button>
      </div>
    </form>

  </div>
</section>
```

## Visual Specs

| Property | Value |
|----------|-------|
| Background | `#f8f8f8` |
| Layout | Centered (max-width ~600px or container-centered) |
| Section padding | `96px 0` |
| Input `border-bottom` | `1px solid #000` (minimal, borderless sides/top) |
| Input `border-top/left/right` | `none` |
| Input transition | `0.3s` (on focus) |

## Form Input Specs

| Property | Value |
|----------|-------|
| Type | `email` |
| Border | Bottom only: `1px solid #000` (or `#000` on off-white) |
| Border-radius | `0` |
| Background | Transparent |
| Font-size | 16px |
| Padding | ~12px 0 |
| Focus style | Border color intensifies (0.3s transition) |
| Width | ~300-400px or full-width on mobile |

## Button (`.lp-btn--dark`)

| Property | Value |
|----------|-------|
| BG | `#000` |
| Text | White |
| Border | `2px solid #000` |
| Padding | `20px 46px` |
| Font-size | 14px |
| Weight | 700 |
| Transform | UPPERCASE |
| Hover | Lighten or invert |

## Layout of Form Row

Desktop: Input + Button side-by-side.
Mobile: Stack vertically.

## Typography

| Element | Size | Weight | Transform |
|---------|------|--------|-----------|
| Pretitle | 16px | 400 | Normal |
| H2 | 43px | 400 | UPPERCASE |
| Description (p) | 16px | 400 | Sentence case |
| Input placeholder | 16px | 300 | Normal |
| Button | 14px | 700 | UPPERCASE |

## Animations

- Pretitle: WOW.js `fadeInUp`
- H2: delay 0.2s
- Description: delay 0.3s
- Form: delay 0.4s

## Clone Notes

- Integrate with email marketing provider (Mailchimp, ConvertKit, etc.)
- For phase 1 clone: POST to `/api/subscribe` → stub that returns 200
- No CAPTCHA in original — add if spam becomes an issue
- Success state: Replace form with "Thank you for subscribing!" message
- Error state: Show inline email validation error
