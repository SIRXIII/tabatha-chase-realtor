# Page Topology — kim-bibb.com

> Visual order, DOM selectors, z-index, positioning, and interaction model.
> Extracted via Playwright inspection on 2026-06-27.

---

## Section Order (Visual Flow, Top → Bottom)

| # | Section Name | DOM Selector | Tag | ID / Class |
|---|-------------|-------------|-----|-----------|
| 0 | Navigation | `header` | `<header>` | `.lp-header`, `.lp-nav` |
| 1 | Hero (video) | `section:first-of-type` in `.lp-content` | `<section>` | `.lp-section--hero` or `.lp-hero` |
| 2 | Featured Properties | second `<section>` | `<section>` | `.lp-section--listings` or `.lp-featured` |
| 3 | Stats Band | third `<section>` | `<section>` | `.lp-section--stats` |
| 4 | Quick Access | fourth `<section>` | `<section>` | `.lp-section--quick-access` |
| 5 | About / Bio | fifth `<section>` | `<section>` | `.lp-section--about` |
| 6 | Communities | sixth `<section>` | `<section>` | `.lp-section--communities` |
| 7 | Testimonials | seventh `<section>` | `<section>` | `.lp-section--testimonials` |
| 8 | Team | eighth `<section>` | `<section>` | `.lp-section--team` |
| 9 | Newsletter | ninth `<section>` | `<section>` | `.lp-section--newsletter` |
| 10 | CTA Band | tenth `<section>` | `<section>` | `.lp-section--cta` |
| 11 | Footer | `footer` | `<footer>` | `.lp-footer` |

---

## Z-Index Layers

| Layer | Element | z-index |
|-------|---------|---------|
| Overlay modals (contact) | `.lp-modal` | 9999+ |
| Dropdown nav menus | `.lp-nav__dropdown` | 1001 |
| Sticky nav | `header` | 1000 |
| Floating CTAs (mobile) | `.lp-floating-cta` | 100 |
| Section content | `.lp-container` | auto (in flow) |
| Video / BG images | `::before` overlays, `video` | -1 (behind content) |

---

## Fixed vs Flow

| Element | Positioning |
|---------|-----------|
| `<header>` / nav | `position: fixed; top: 0; left: 0; right: 0` |
| Hero section | Normal flow, `min-height: 100vh`, padded top 120px to clear fixed nav |
| All other sections | Normal block flow |
| Hero video | `position: absolute` inside hero, covers full hero area |
| Testimonials BG | CSS `background-image` (not absolute element) |
| CTA Band BG | CSS `background-image` (not absolute element) |

---

## Hero Section Detail

```
<section class="lp-section lp-section--hero">
  <div class="slick-slider lp-hero__slider">   ← Slick carousel (1 slide)
    <div class="slick-slide">
      <video autoplay muted loop playsinline>   ← VP9 Cloudinary video
        (poster = static JPG)
      </video>
      <div class="lp-hero__overlay" />          ← rgba(0,0,0,0.4) overlay
      <div class="lp-container lp-hero__content">
        <div class="lp-text--pretitle" />       ← pre-title line
        <h1 />                                  ← 70px, uppercase, white
        <div class="lp-hero__cta">
          <a class="lp-btn" />                  ← Primary CTA
          <a class="lp-btn lp-btn--ghost" />    ← Secondary CTA
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Featured Properties Section

```
<section class="lp-section lp-section--listings">
  <div class="lp-container">
    <p class="lp-text--pretitle" />
    <h2 />
    <div class="lp-text--subtitle" />           ← "FEATURED PROPERTIES"
    <div class="slick-slider lp-listings__slider">
      <!-- 4 slides, PREVIOUS / NEXT text nav -->
      <div class="slick-slide">
        <div class="lp-listing-card">
          <img />                               ← property photo
          <div class="lp-listing-card__info">
            <p class="price" />
            <p class="beds-baths-sqft" />
            <p class="address" />
          </div>
        </div>
      </div>
    </div>
    <div class="slick-links-nav">
      <span class="link link--black prev slick-arrow">PREVIOUS</span>
      <span class="link link--black next slick-arrow">NEXT</span>
    </div>
    <a class="lp-btn lp-btn--dark">VIEW ALL LISTINGS</a>
  </div>
</section>
```

---

## Stats Band

```
<section class="lp-section lp-section--stats">
  <div class="lp-container lp-stats__grid">   ← CSS grid, 3-4 columns
    <div class="lp-stat">
      <h3 class="stat-value" />               ← large number, 30px+
      <p class="stat-label" />                ← descriptor text
    </div>
    <!-- repeated 3-4 times -->
  </div>
</section>
```

---

## Quick Access Section

```
<section class="lp-section lp-section--quick-access">
  <div class="lp-container">
    <h2 />                                    ← section heading
    <div class="lp-quick-access__grid">       ← 2-column card grid
      <div class="lp-quick-access__card">
        <img />                               ← full-bleed card bg image
        <div class="lp-quick-access__card-content">
          <h3 />
          <a class="lp-btn lp-btn--white" />
        </div>
      </div>
      <!-- repeated -->
    </div>
  </div>
</section>
```

---

## About / Bio Section

```
<section class="lp-section lp-section--about lp-section--alt-bg">
  <div class="lp-container lp-about__grid">  ← 2-column: image left, text right
    <div class="lp-about__image">
      <img />                                 ← editorial portrait, 715px height
    </div>
    <div class="lp-about__text">
      <p class="lp-text--pretitle" />
      <h2 />
      <p />                                   ← bio text
      <a class="lp-btn lp-btn--dark" />       ← "ABOUT KIM BIBB" CTA
    </div>
  </div>
</section>
```

---

## Communities Section

```
<section class="lp-section lp-section--communities lp-section--alt-bg">
  <div class="lp-container">
    <p class="lp-text--pretitle" />
    <h2 />
    <div class="lp-communities__grid">        ← CSS grid, 3 columns
      <div class="lp-community-card">
        <img />
        <h3 class="community-name" />
        <a class="link link--black" />        ← "EXPLORE" or "VIEW LISTINGS"
      </div>
    </div>
  </div>
</section>
```

---

## Testimonials Section

```
<section class="lp-section lp-section--testimonials"
         style="background-image: url(...); background-size: cover">
  <!-- rgba(32,32,32,0.4) gradient overlay on ::before -->
  <div class="lp-container">
    <p class="lp-text--pretitle" />
    <h2 />
    <div class="slick-slider lp-testimonials__slider">
      <!-- 3 slides, PREVIOUS / NEXT text nav -->
      <div class="slick-slide">
        <blockquote>
          <p class="quote-text" />
          <cite class="quote-author" />
        </blockquote>
      </div>
    </div>
    <div class="slick-links-nav">
      <span class="link link--white prev slick-arrow">PREVIOUS</span>
      <span class="link link--white next slick-arrow">NEXT</span>
    </div>
  </div>
</section>
```

---

## Team Section

```
<section class="lp-section lp-section--team">
  <div class="lp-container">
    <p class="lp-text--pretitle" />
    <h2 />
    <div class="slick-slider lp-team__slider">
      <!-- 2 slides, PREVIOUS / NEXT text nav -->
      <div class="slick-slide">
        <div class="lp-team-card">
          <img />                              ← headshot
          <h3 class="team-member-name" />
          <p class="team-member-title" />
          <a class="link link--black" />       ← agent profile link
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Newsletter Section

```
<section class="lp-section lp-section--newsletter lp-section--alt-bg">
  <div class="lp-container">
    <p class="lp-text--pretitle" />
    <h2 />
    <p class="description" />
    <form class="lp-newsletter-form">
      <input type="email" placeholder="Email Address" />
      <button type="submit" class="lp-btn lp-btn--dark">SUBSCRIBE</button>
    </form>
  </div>
</section>
```

---

## CTA Band Section

```
<section class="lp-section lp-section--cta"
         style="background-image: url(...); background-size: cover">
  <!-- rgba(0,0,0,0.3) gradient overlay via ::before -->
  <div class="lp-container lp-cta__content">
    <h2 />
    <p />
    <a class="lp-btn lp-btn--white" />         ← Primary CTA ("CONTACT KIM")
  </div>
</section>
```

---

## Footer

```
<footer class="lp-footer">
  <div class="lp-footer__top">               ← logo, nav links, social icons
    <div class="lp-footer__logo">
      <img />                                  ← agent logo
    </div>
    <nav class="lp-footer__nav">
      <a /> <!-- nav links -->
    </nav>
    <div class="lp-footer__social">
      <a /> <!-- social icons (Instagram, Facebook, etc.) -->
    </div>
  </div>
  <div class="lp-footer__bottom">            ← legal row
    <p class="copyright" />
    <p class="disclaimer" />
    <div class="lp-footer__legal-links">
      <a>Privacy Policy</a>
      <a>Terms</a>
    </div>
  </div>
</footer>
```

---

## Interaction Model

| Trigger | Behavior |
|---------|---------|
| Window scroll > 0 | Nav gains `.scroll` class → bg changes from transparent to `#f8f8f8` |
| `.wow` element enters viewport | `fadeInUp` animation fires (one-time, no repeat) |
| Slick arrow click | Carousel advances/retreats (no autoplay detected) |
| Nav link hover | Color/opacity transition |
| `.lp-btn` hover | Opacity/color change (0.2s transition) |
| Contact CTA click | Opens fullscreen contact modal (`rgba(0,0,0,0.92)` bg) |
| Hamburger click (mobile) | Off-canvas mobile nav slides in |
| Email input focus | Border-bottom color transition (0.3s) |
