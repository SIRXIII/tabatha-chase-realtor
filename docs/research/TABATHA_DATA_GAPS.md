# Tabatha Chase — Data Gaps & Blocked Sources

Scrape date: 2026-06-27
Scraper: Playwright MCP (headless browser)

---

## Blocked Sources

### 1. Zillow (secondary load)
- **URL**: https://www.zillow.com/profile/tabathachase
- **Status**: BLOCKED — "Access to this page has been denied"
- **What happened**: First load succeeded and yielded most data. All subsequent loads (same session, new session) returned bot-detection block page.
- **Screenshot**: `docs/research/scrape-blockers/zillow-blocked-20260627T035423.png`
- **Missing data**: headshot URL, listing photo URLs, 13 of 23 reviews (reviews 11–23), 5 of 10 sold listings (listings 6–10)
- **Fix**: Try with a residential IP / VPN or a manual browser session at off-peak hours

### 2. Homes.com
- **URL**: https://www.homes.com/real-estate-agents/tabatha-chase/l7n115d/
- **Status**: BLOCKED — `net::ERR_FAILED`
- **What happened**: Navigation never completed. Network request failed before page loaded.
- **Missing data**: cross-check of reviews, alternative headshot, additional listing photos
- **Fix**: May require a cookie-based session or non-headless browser

### 3. Instagram
- **URL**: https://www.instagram.com/socalivingbytabatha/
- **Status**: BLOCKED — `net::ERR_ABORTED`
- **What happened**: Instagram immediately aborts headless browser connections without a logged-in session.
- **Missing data**: Bio link-in-bio URL, profile photo, recent post captions for brand voice
- **Fix**: Requires a logged-in Instagram session (can use browser-harness with a saved profile)

### 4. Fiv Realty (agent profile page)
- **URL**: https://www.fivrealty.com (searched for Tabatha Chase)
- **Status**: NOT FOUND — GeoDirectory search returned "It seems we can't find what you're looking for"
- **What happened**: Tabatha appears in the 223-agent list loaded via AJAX, but has no dedicated `/agent/tabatha-chase/` profile page on the site. Direct URL attempts returned 404.
- **Missing data**: Brokerage-hosted bio, official headshot from broker
- **Fix**: Contact Fiv Realty directly or scrape the AJAX agent list endpoint

### 5. Google Search / Google Business Profile
- **URL**: https://www.google.com (search: "Tabatha Chase realtor")
- **Status**: BLOCKED — `net::ERR_ABORTED`
- **What happened**: Google blocks headless browser navigation entirely.
- **Missing data**: Google Business Profile rating, Google reviews, additional contact info
- **Fix**: Use SerpAPI or similar

### 6. Bing, DuckDuckGo, Facebook, LinkedIn
- **Status**: All BLOCKED — `net::ERR_ABORTED`
- **Fix**: Requires authenticated sessions or residential proxies

---

## Missing Data Fields

| Field | Status | Source to Try |
|-------|--------|---------------|
| Headshot URL | MISSING | Zillow (clean session), Homes.com, Instagram |
| Listing photo URLs (all 6) | MISSING | Zillow (clean session), Homes.com |
| Reviews 11–23 (13 reviews) | MISSING | Zillow (clean session) — carousel only showed 10 |
| Sold listings 6–10 | MISSING | Zillow (clean session) — carousel only showed 5 |
| Instagram bio / link-in-bio | MISSING | Instagram (logged-in session) |
| Google rating + Google reviews | MISSING | SerpAPI or manual |
| Personal website URL | MISSING | Instagram link-in-bio, Google |
| Full bio text | PARTIAL | Zillow bio truncated at "Show more" — need second load |
| DRE license expiration date | MISSING | https://www.dre.ca.gov/ (scrape-able) |

---

## What Was Captured Successfully

- All Zillow profile data visible on first load (phone, email, bio partial, specialties, years exp, badge)
- 1 active listing (complete: address, price, beds/baths/sqft)
- 5 of 10 sold listings (complete: address, price, beds/baths/sqft, approx sold date, agent role)
- 10 of 23 reviews (author, date, truncated text — all 5.0 stars)
- Profile stats (23 reviews, 5.0 avg, 10 total sales, 12 years experience)
- Brokerage info (Fiv Realty Co., Eastvale CA)
- Contact info (both phone numbers, email)
- Service area list (10 cities)
- Profile screenshot: `docs/design-references/tabatha-screenshots/zillow-profile.png`

---

## Recommended Next Steps

1. **Headshot + listing photos**: Run a fresh Zillow scrape from a different IP or residential proxy. Extract all `img` tags from `.agent-profile-headshot` and `.listing-card img` before Zillow detects the bot.
2. **Remaining 13 reviews**: Same fresh Zillow session — scroll/click through the full review carousel and extract text.
3. **Instagram**: Use `browser-harness` with a saved Instagram profile cookie to grab bio and link-in-bio.
4. **Personal website**: Once Instagram loads, find Linktree or personal site URL from bio link.
5. **DRE lookup**: https://www.dre.ca.gov/Licensees/LicenseeSearch.aspx — scrape-able, no login required.
