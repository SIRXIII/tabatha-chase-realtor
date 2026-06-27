# Tabatha Chase — Data Gaps & Blocked Sources

Scrape date: 2026-06-27
Gap-fill pass: 2026-06-27 (6-tactic run)
Scraper: Playwright MCP (headless browser) + WebFetch/WebSearch

---

## Status Summary (post gap-fill run)

One field filled: **DRE license expiration date** (2026-12-10 — confirmed via licensee.io).
All photo/review/listing gaps remain unfilled — every photo source blocked.

---

## Blocked Sources

### 1. Zillow (secondary load)
- **URL**: https://www.zillow.com/profile/tabathachase
- **Status**: BLOCKED — "Access to this page has been denied" on all attempts
- **Missing data**: headshot URL, listing photo URLs, 13 of 23 reviews (reviews 11–23), 5 of 10 sold listings (listings 6–10)
- **Fix**: Residential IP / VPN, or manual browser session at off-peak hours

### 2. Zillow listing direct URLs
- **Attempted**: All 6 listing Zillow detail pages (active + 5 sold)
- **Status**: BLOCKED — HTTP 403 on all
- **Fix**: Same as above — residential IP / logged-in browser session

### 3. Homes.com
- **URL**: https://www.homes.com/real-estate-agents/tabatha-chase/l7n115d/
- **Status**: BLOCKED — HTTP 403
- **Missing data**: cross-check of reviews, alternative headshot, additional listing photos

### 4. Instagram
- **URL**: https://www.instagram.com/socalivingbytabatha/
- **Status**: BLOCKED — net::ERR_ABORTED (headless) / requires login (WebFetch)
- **Missing data**: bio link-in-bio URL, profile photo, recent post captions
- **Mirrors tried**: Picuki.com (403), Imginn.com (403)

### 5. Linktree / personal website
- **URL**: https://linktr.ee/socalivingbytabatha (guessed)
- **Status**: HTTP 403
- **Missing data**: personal website URL, link-in-bio destinations

### 6. Fiv Realty agent profile
- **URL**: https://www.fivrealty.com/agents/tabatha-chase/
- **Status**: HTTP 404 — no dedicated agent page exists
- **Alternative**: paginated agent list at /agents/ — checked pages 1–4 of 19, Tabatha not found in first 48 agents

### 7. BHHS California (Foxcroft listing)
- **URL**: https://www.bhhscalifornia.com/listing-detail/6755-foxcroft-court-chino-ca-91710_7188014
- **Status**: HTTP 429 (repeated rate limiting)

### 8. Houzz — Chase Design profile
- **URL**: https://www.houzz.com/professionals/interior-designers-and-decorators/chase-design-pfvwus-pf~436262790
- **Status**: HTTP 429 (repeated rate limiting)

### 9. Other sources tried
| Source | Status | Notes |
|--------|--------|-------|
| CountyOffice.org | 403 | |
| Redfin listing pages | 405 Method Not Allowed | CDN blocks WebFetch |
| Compass (15542 Timberidge) | 410 Gone | Listing removed |
| PropertySpark | 403 | |
| rehold.com | Loaded, no photos | Only text property records |
| NiceLocal.com | Redirect to unrelated site | |
| Movoto | 429 | |
| SignalHire | Loaded — placeholder avatar | No personal headshot |
| Bing image search | Returned unrelated images | Technical diagrams, not Tabatha |
| YouTube | Footer only rendered | No video metadata |
| Google / Facebook / LinkedIn / DuckDuckGo | All blocked (headless) | |

---

## Missing Data Fields

| Field | Status | Source to Try Next |
|-------|--------|-------------------|
| Headshot URL | MISSING | Residential IP Zillow scrape; or manual download |
| Listing photo URLs (all 6) | MISSING | Residential IP Zillow scrape |
| Reviews 11–23 (13 reviews) | MISSING | Zillow (clean session from different IP) |
| Sold listings 6–10 | MISSING | Zillow (clean session from different IP) |
| Instagram bio / link-in-bio | MISSING | browser-harness with saved Instagram profile cookie |
| Personal website URL | MISSING | Find via Instagram link-in-bio |
| Full bio text | PARTIAL | Zillow bio truncated at "Show more" |
| DRE license expiration | FILLED ✓ | Confirmed 2026-12-10 via licensee.io (2026-06-27) |

---

## What Was Captured Successfully

- All Zillow profile data visible on first load (phone, email, bio partial, specialties, years exp, badge)
- 1 active listing (complete: address, price, beds/baths/sqft)
- 5 of 10 sold listings (complete: address, price, beds/baths/sqft, approx sold date, agent role)
- 10 of 23 reviews (author, date, truncated text — all 5.0 stars)
- Profile stats (23 reviews, 5.0 avg, 10 total sales, 12 years experience)
- Brokerage info (Fiv Realty Co., Eastvale CA) + brokerage history
- Contact info (both phone numbers, email)
- Service area list (10 cities)
- Education (BA SFSU, AA Orange Coast College)
- **DRE expiry: 2026-12-10** (added in gap-fill pass)
- Profile screenshot: `docs/design-references/tabatha-screenshots/zillow-profile.png`

---

## Recommended Next Steps

1. **Headshot + listing photos + remaining reviews + sold listings 6-10**: Fresh Zillow session from residential IP (or SerpAPI-based scrape). Single session can get all of these.
2. **Instagram data**: Use `browser-harness` with a saved Instagram profile cookie (`browser-harness/interaction-skills/profile-sync.md`).
3. **Personal website**: Find via Instagram link-in-bio once Instagram loads.
4. **BHHS listing photos (Foxcroft)**: Wait for rate limit cooldown, retry https://www.bhhscalifornia.com/listing-detail/6755-foxcroft-court-chino-ca-91710_7188014
