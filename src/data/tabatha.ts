/**
 * Tabatha Chase — Single Source of Truth
 * All data verified against live public sources.
 * Last scraped: 2026-06-27
 */

export interface Listing {
  slug: string;          // url-safe address
  status: "active" | "pending" | "sold";
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;         // dollars
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  propertyType: string;  // "Single Family" | "Condo" | "Townhouse" | "Land"
  soldDate: string | null;  // YYYY-MM-DD (approximate when only "X ago" known)
  soldAs: "buyer" | "seller" | null;  // agent role in transaction
  sourceUrl: string;     // Zillow/Homes.com detail page
  photoUrl: string;      // first hero image (CDN URL is fine)
  photoLocal: string;    // /images/listings/<slug>.jpg (populated when download script runs)
}

export interface Testimonial {
  author: string;
  date: string | null;
  text: string;
  source: "zillow" | "homes.com" | "google";
  sourceUrl: string;
}

// source: https://www.zillow.com/profile/tabathachase (scraped 2026-06-27)
// source: CA DRE License lookup https://www.dre.ca.gov/
export const AGENT = {
  name: "Tabatha Chase",
  fullName: "Tabatha Lynn Chase",
  title: "REALTOR®",
  // source: https://www.zillow.com/profile/tabathachase
  brokerage: "Fiv Realty Co.",
  // source: https://www.dre.ca.gov/ — DRE license search
  dre: "01968575",
  // source: https://www.dre.ca.gov/
  dreSince: "2014-12-11",
  // source: https://www.zillow.com/profile/tabathachase — shown in contact section
  phone: "(951) 444-8020",
  // source: https://www.zillow.com/profile/tabathachase — shown in contact section
  phoneBrokerage: "(714) 316-9500",
  // source: https://www.zillow.com/profile/tabathachase — shown in contact section
  email: "tabathachasesellshomes@gmail.com",
  // source: https://www.instagram.com/socalivingbytabatha/
  instagram: "https://www.instagram.com/socalivingbytabatha/",
  // source: https://www.facebook.com/tabathachasesellshomes
  facebook: "https://www.facebook.com/tabathachasesellshomes",
  // source: https://www.youtube.com/@socalivingbytabathachase (canonical channelId UCi6MPXbBkvNjwlJ__T4wuDg)
  youtube: "https://www.youtube.com/@socalivingbytabathachase",
  youtubeChannelId: "UCi6MPXbBkvNjwlJ__T4wuDg",
  // source: https://www.zillow.com/profile/tabathachase
  zillowProfile: "https://www.zillow.com/profile/tabathachase",
  // source: https://www.homes.com/real-estate-agents/tabatha-chase/l7n115d/
  homesProfile: "https://www.homes.com/real-estate-agents/tabatha-chase/l7n115d/",
  // source: https://www.dre.ca.gov/ + https://www.zillow.com/profile/tabathachase
  brokerageAddress: {
    street: "5329 Hamner Ave Ste 601",
    city: "Eastvale",
    state: "CA",
    zip: "91752",
  },
  // source: https://www.zillow.com/profile/tabathachase (listed service area counties)
  serviceAreas: [
    "Corona",
    "Yorba Linda",
    "Anaheim",
    "Eastvale",
    "Riverside",
    "Chino Hills",
    "Chino",
    "Norco",
    "Murrieta",
    "Victorville",
  ],
  // source: tabatha's website / Zillow bio
  tagline: "Making life beautiful one home at a time.",
  // source: https://www.zillow.com/profile/tabathachase (shows "12 Years of experience")
  yearsExperience: 12,
  // source: https://www.zillow.com/profile/tabathachase — bio text (partial, truncated on page)
  bio: `As an avid Entrepreneur, I am perpetually driven by the desire for growth and continuous learning. My journey commenced in the realm of Interior Design, fueled by both career aspirations and passion. This initial pursuit seamlessly evolved into the dynamic field of Real Estate, where my keen design acumen has proven instrumental in benefiting my clients. My invaluable expertise aids prospective buyers in making informed decisions about their ideal home, while simultaneously assisting sellers in optimally presenting their properties to achieve the highest possible return on their investment. I also own Chase Designs and provide complimentary staging services to my sellers, ensuring their homes are presented in the best possible light. I hold a BA from San Francisco State University and an AA from Orange Coast College.`,
  // source: https://www.zillow.com/profile/tabathachase — shown as "#1 Zillow Requested Agent"
  zillowBadge: "#1 Zillow Requested Agent",
  specialties: ["Buyer's Agent", "Listing Agent", "Staging", "New Construction"],
  // source: https://www.zillow.com/profile/tabathachase
  headshotUrl: null as string | null,  // Zillow blocked before headshot URL could be extracted
  // source: client-provided photo at ~/Documents/Clients/TABATHA CHASE- REALTOR/Tabatha Profile Pic.jpg
  headshotLocal: "/images/tabatha-headshot.jpg",
  // source: client-provided family photo, rendered B&W via CSS to match kim-bibb-style flat aesthetic
  familyPhotoLocal: "/images/tabatha-family.jpg",
  // source: client-provided vacation photo (Cabo, family of 4)
  vacationPhotoLocal: "/images/tabatha-vacation.jpg",
  // source: https://www.zillow.com/profile/tabathachase
  reviewCount: 23,
  avgRating: 5.0,
  // source: CA DRE / brokerage history from earlier research
  brokerageHistory: [
    { brokerage: "RE/MAX Terrasol", period: "2014–?" },
    { brokerage: "Move Home Realty (Murrieta)", period: "?–2024" },
    { brokerage: "Box Properties", period: "Apr 2024–Sep 2025" },
    { brokerage: "Fiv Realty Co.", period: "Sep 2025–present" },
  ],
  // source: https://licensee.io/ca-real-estate/01968575-tabatha-lynn-chase/ (confirmed 2026-06-27)
  dreExpiration: "2026-12-10",
  // source: earlier DRE research
  education: [
    { degree: "BA", school: "San Francisco State University" },
    { degree: "AA", school: "Orange Coast College" },
  ],
  // source: earlier research — she owns a separate interior design business
  otherBusiness: "Chase Designs (interior design / home staging)",
} as const;

// source: https://www.zillow.com/profile/tabathachase (scraped 2026-06-27)
// Tabatha had 1 active listing at time of scrape
export const LISTINGS_ACTIVE: Listing[] = [
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "15542-timberidge-ln-chino-hills-ca-91709",
    status: "active",
    address: "15542 Timberidge Ln",
    city: "Chino Hills",
    state: "CA",
    zip: "91709",
    price: 880000,
    beds: 3,
    baths: 3,
    sqft: 1922,
    propertyType: "Single Family",
    soldDate: null,
    soldAs: "seller",
    // source: https://www.zillow.com/profile/tabathachase
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://photos.zillowstatic.com/fp/f99978dd696946acc51ce84c7fa4986e-cc_ft_960.jpg
    // verified: Bing iusc alt text "1st image of 15542 Timberidge Ln"; screenshot verify-timberidge-zillow.jpg
    photoUrl: "https://photos.zillowstatic.com/fp/f99978dd696946acc51ce84c7fa4986e-cc_ft_960.jpg",
    photoLocal: "/images/listings/15542-timberidge-ln-chino-hills-ca-91709.jpg",
  },
];

// source: https://www.zillow.com/profile/tabathachase (scraped 2026-06-27)
// Zillow showed 10 total sold listings. Dates are approximate based on "X ago" language.
// Scrape date was 2026-06-27; "23 days ago" ≈ 2026-06-04, "1 year ago" ≈ 2025-06, etc.
export const LISTINGS_SOLD: Listing[] = [
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "6755-foxcroft-ct-chino-ca-91710",
    status: "sold",
    address: "6755 Foxcroft Ct",
    city: "Chino",
    state: "CA",
    zip: "91710",
    price: 630000,
    beds: 2,
    baths: 3,
    sqft: 1268,
    propertyType: "Single Family",
    soldDate: "2026-06-04",  // approx — "Sold 23 days ago" from 2026-06-27
    soldAs: "buyer",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://ssl.cdn-redfin.com/photo/45/bigphoto/293/TR26061293_6.jpg
    // verified: Bing purl exact address; screenshot verify-foxcroft-redfin.jpg (2-story gray home, CRMLS)
    photoUrl: "https://ssl.cdn-redfin.com/photo/45/bigphoto/293/TR26061293_6.jpg",
    photoLocal: "/images/listings/6755-foxcroft-ct-chino-ca-91710.jpg",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "5640-riverside-dr-apt-4-chino-ca-91710",
    status: "sold",
    address: "5640 Riverside Dr APT 4",
    city: "Chino",
    state: "CA",
    zip: "91710",
    price: 436000,
    beds: 2,
    baths: 2,
    sqft: 1042,
    propertyType: "Condo",
    soldDate: "2025-06-01",  // approx — "Sold 1 year ago" from 2026-06-27
    soldAs: "seller",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://photos.zillowstatic.com/fp/850b451beb8c9c2e31d00d379a01a6c4-cc_ft_960.jpg
    // verified: screenshot verify-riverside-condo.jpg (green 2-story exterior); unit "4" on door in verify-riverside-redfin.jpg
    photoUrl: "https://photos.zillowstatic.com/fp/850b451beb8c9c2e31d00d379a01a6c4-cc_ft_960.jpg",
    photoLocal: "/images/listings/5640-riverside-dr-apt-4-chino-ca-91710.jpg",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "3318-valley-view-ave-norco-ca-92860",
    status: "sold",
    address: "3318 Valley View Ave",
    city: "Norco",
    state: "CA",
    zip: "92860",
    price: 880000,
    beds: 3,
    baths: 2,
    sqft: 1566,
    propertyType: "Single Family",
    soldDate: "2024-06-01",  // approx — "Sold 2 years ago" from 2026-06-27
    soldAs: "buyer",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://ssl.cdn-redfin.com/photo/45/bigphoto/689/OC24113689_0.jpg
    // verified: Bing purl exact address; screenshot verify-norco-valley-view.jpg (ranch-style, corral fence)
    photoUrl: "https://ssl.cdn-redfin.com/photo/45/bigphoto/689/OC24113689_0.jpg",
    photoLocal: "/images/listings/3318-valley-view-ave-norco-ca-92860.jpg",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "16774-manning-st-victorville-ca-92394",
    status: "sold",
    address: "16774 Manning St",
    city: "Victorville",
    state: "CA",
    zip: "92394",
    price: 355000,
    beds: 3,
    baths: 2,
    sqft: 1822,
    propertyType: "Single Family",
    soldDate: "2023-06-01",  // approx — "Sold 3 years ago" from 2026-06-27
    soldAs: "buyer",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://photos.zillowstatic.com/fp/10eb33f2b61a4d48bea0e8f3401fd3c8-cc_ft_1536.jpg
    // verified: Zillow zpid 17428704 via Bing purl; screenshot verify-manning-victorville.jpg (2-story tan, 2-car garage, CRMLS)
    photoUrl: "https://photos.zillowstatic.com/fp/10eb33f2b61a4d48bea0e8f3401fd3c8-cc_ft_1536.jpg",
    photoLocal: "/images/listings/16774-manning-st-victorville-ca-92394.jpg",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    slug: "12234-greenleaf-ln-garden-grove-ca-92840",
    status: "sold",
    address: "12234 Greenleaf Ln",
    city: "Garden Grove",
    state: "CA",
    zip: "92840",
    price: 840000,
    beds: 4,
    baths: 4,
    sqft: 1767,
    propertyType: "Single Family",
    soldDate: "2023-06-01",  // approx — "Sold 3 years ago" from 2026-06-27
    soldAs: "buyer",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
    // source: https://ssl.cdn-redfin.com/photo/45/bigphoto/122/OC23095122_0.jpg
    // verified: screenshot verify-greenleaf.jpg shows "12234" clearly on blue door
    photoUrl: "https://ssl.cdn-redfin.com/photo/45/bigphoto/122/OC23095122_0.jpg",
    photoLocal: "/images/listings/12234-greenleaf-ln-garden-grove-ca-92840.jpg",
  },
  // NOTE: Zillow showed 10 total sold listings but only 5 were visible in the
  // carousel text extract before the page navigated away. The 5 additional
  // listings (ids 6-10) are not available from the scrape; see TABATHA_DATA_GAPS.md
];

// source: https://www.zillow.com/profile/tabathachase (scraped 2026-06-27)
// 23 total reviews on Zillow (all 5.0 stars). Only 10 were visible in the
// review carousel during scrape. Full review text was truncated with "Show more".
export const TESTIMONIALS: Testimonial[] = [
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Steven Pulliam",
    date: "2026-06-10",
    text: "I can't recommend Tabatha enough. When I first started this process, I honestly didn't think owning a home was going to happen for me. Between past financial setbacks and... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "mark witte6",
    date: "2026-02-11",
    text: "Tabatha is simply the best. Professional, responsive, and honest. She made our transaction easy and stress-free. Highly recommended for anyone looking to buy and sell!",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "fancyjunkdesigns",
    date: "2026-02-05",
    text: "Working with Tabatha Chase was an absolute pleasure. She is incredibly knowledgeable, professional, and truly understands the real estate market. From start to finish, ... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "zuser20140922205815564",
    date: "2026-02-04",
    text: "Tabatha was amazing help during the process of selling and buying our home in Ga. She was always available when needed and we never felt rushed. She was understanding whe... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Hailey Sipes",
    date: "2026-02-03",
    text: "Tabatha is amazing to work with. There's no judgement or pressure when we're looking for homes with her. She finds the best fit and goes with what we are most comfortable... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "randipulliam1280",
    date: "2025-03-03",
    text: "I had the best experience working with Tabatha! She is organized, experienced, and on top of all of that very kind and thoughtful throughout the entire process. She gave ... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Frederick A Millage",
    date: "2023-12-27",
    text: "MRS Tabatha Chase Fantastic Very Professional Taken Good Care Of Our Journey Home Buying Experience Highly Recommended Best Realtor Ever Beautiful Kind Sincere Please If ... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Luis Amezquita",
    date: "2023-11-30",
    text: "It was great pleasure working with Tabatha she really help us get our dream house. She was always on top of everything and she made sure she always kept us updated on an... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Robert Rangel",
    date: "2023-07-25",
    text: "Tabatha was very helpful and gave me good advice and knowledge as a first time buyer. She was very kind and responsive to any questions I had. Also had no problems showin... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
  {
    // source: https://www.zillow.com/profile/tabathachase
    author: "Tenaya Goldsmith",
    date: "2023-07-25",
    text: "I absolutely love working with Tabatha! She is very knowledgable with the area and processes of not only buying a house, but renting one as well! If you're looking for a... [full text at source URL]",
    source: "zillow",
    sourceUrl: "https://www.zillow.com/profile/tabathachase",
  },
];

// source: https://www.zillow.com/profile/tabathachase (scraped 2026-06-27)
export const STATS = {
  // source: https://www.zillow.com/profile/tabathachase
  salesLast12Months: 1,
  // source: https://www.zillow.com/profile/tabathachase
  totalSales: 10,
  // source: https://www.zillow.com/profile/tabathachase
  priceRangeLow: 355000,
  // source: https://www.zillow.com/profile/tabathachase
  priceRangeHigh: 880000,
  // source: https://www.zillow.com/profile/tabathachase
  averagePrice: 628000,
  // source: https://www.zillow.com/profile/tabathachase
  yearsExperience: 12,
  // source: https://www.zillow.com/profile/tabathachase
  zillowReviewCount: 23,
  // source: https://www.zillow.com/profile/tabathachase
  zillowRating: 5.0,
  // source: CA DRE license — Dec 11, 2014
  licensedSince: 2014,
};

export interface YouTubeVideo {
  id: string;        // 11-char YouTube video ID
  title: string;
  publishedAt: string | null;  // ISO date
}

// source: https://www.youtube.com/feeds/videos.xml?channel_id=UCi6MPXbBkvNjwlJ__T4wuDg
// Pulled via RSS on 2026-06-27. First entry is the user-provided featured video.
// Featured "Buying & Selling at the same time!" pinned by client.
export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  { id: "DZMhP6EHC8k", title: "Buying & Selling at the same time!", publishedAt: null },
  { id: "lpao4wLoL8I", title: "June 2, 2026", publishedAt: "2026-06-02" },
  { id: "sbzRu1FE-JY", title: "May 27, 2026", publishedAt: "2026-05-27" },
  { id: "j01AY0U38DA", title: "May 26, 2026", publishedAt: "2026-05-26" },
  { id: "KE4SbogNXqA", title: "May 21, 2026", publishedAt: "2026-05-22" },
  { id: "ra2vHU0vN94", title: "May 20, 2026", publishedAt: "2026-05-20" },
  { id: "k72-UkJNbeE", title: "The \"Rent vs. Buy\" math just changed.", publishedAt: "2026-05-14" },
  { id: "1M5cTlRfU20", title: "New construction in Ontario, CA", publishedAt: "2026-05-14" },
  { id: "HMHUBfA3aws", title: "The 2026 Corona Housing Reality Check: Is the Market Crashing or Resetting?", publishedAt: "2026-03-20" },
  { id: "R0IsfSkYuBE", title: "Most buyers lose homes for this reason.", publishedAt: "2026-02-04" },
  { id: "cAPUL4Toqvc", title: "Surprising mistakes homebuyers make", publishedAt: "2024-03-20" },
  { id: "HbznE7DaovI", title: "Buyer's Pro Tip!", publishedAt: "2024-03-09" },
  { id: "M0GPI7s3tDo", title: "Top cities to move to in Southern California", publishedAt: "2024-01-11" },
  { id: "XU71EN8cFxc", title: "What a buyer needs to know before starting the home search", publishedAt: "2024-01-11" },
  { id: "L8ttVYALnG4", title: "December 7, 2023", publishedAt: "2023-12-08" },
  { id: "I9M5z3Yiujk", title: "December 4, 2023", publishedAt: "2023-12-05" },
];
