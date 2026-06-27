import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { AGENT, STATS } from "@/data/tabatha";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Tabatha Chase",
  description: AGENT.tagline,
};

const statCards = [
  {
    label: "YEARS EXPERIENCE",
    value: String(STATS.yearsExperience),
  },
  {
    label: "TOTAL SALES",
    value: String(STATS.totalSales),
  },
  {
    label: "ZILLOW REVIEWS",
    value: String(STATS.zillowReviewCount),
  },
  {
    label: "ZILLOW RATING",
    value: STATS.zillowRating.toFixed(1) + "★",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Page Hero — 60vh */}
      <section
        className={cn(
          "relative flex min-h-[60vh] flex-col items-center justify-center",
          "bg-gradient-to-br from-stone-700 to-stone-900",
          "overflow-hidden"
        )}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-white" style={{ letterSpacing: "1px" }}>
            MEET TABATHA
          </h1>
          <p
            className="text-white uppercase text-base tracking-widest max-w-xl"
            style={{ letterSpacing: "1.5px" }}
          >
            {AGENT.tagline}
          </p>
          <p className="text-white/70 text-sm tracking-wider mt-2" style={{ letterSpacing: "1px" }}>
            DRE {AGENT.dre} &middot; {AGENT.brokerage}
          </p>
        </div>
      </section>

      {/* Bio Body */}
      <section className="section-padding bg-[#f8f8f8]">
        <div className="container-padding max-w-[800px] mx-auto">
          <p className="text-black leading-relaxed mb-6">
            Before she ever listed a home, Tabatha Chase was studying how to make one beautiful.
            After earning an AA from Orange Coast College and a BA from San Francisco State
            University — both grounded in design — she launched Chase Designs, an interior design
            business that sharpened her instinct for how space, light, and proportion shape the way
            people feel inside a room. That foundation turned out to be exactly what her real estate
            clients needed.
          </p>

          <p className="text-black leading-relaxed mb-6">
            Tabatha earned her California real estate license in December 2014 and has spent the
            twelve years since building a practice defined by honesty, hustle, and a genuine
            investment in the people she represents. Whether she is guiding a first-time buyer
            through the paperwork maze or helping a longtime homeowner extract the highest return
            on a property they have owned for decades, she brings the same care to every file.
            For sellers, she goes a step further: Tabatha provides complimentary staging through
            Chase Designs — a real advantage that costs her clients nothing and consistently
            positions their homes to stand apart in a crowded market.
          </p>

          <p className="text-black leading-relaxed mb-6">
            Her territory runs across the Inland Empire and into Orange County and the High
            Desert: Corona, Yorba Linda, Anaheim, Eastvale, Riverside, Chino Hills, Norco,
            Murrieta, and Victorville. It is a wide footprint, and she knows each market
            individually — the price per square foot differences between a Norco ranch home
            and a Chino Hills townhouse, the timing quirks in Victorville, the competition
            in Yorba Linda. Twenty-three clients on Zillow have given her a perfect five-star
            rating, something she earns one transaction at a time rather than with volume alone.
          </p>

          <p className="text-black leading-relaxed mb-8">
            Tabatha is a REALTOR® at Fiv Realty Co., based in Eastvale, California.
            If you are ready to buy, sell, or simply want an honest read on what your
            home is worth right now, she is a phone call away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${AGENT.phone.replace(/\D/g, "")}`}
              className="lp-btn lp-btn-dark inline-block text-center"
            >
              CALL {AGENT.phone}
            </a>
            <a
              href={`mailto:${AGENT.email}`}
              className="lp-btn lp-btn-light inline-block text-center"
            >
              EMAIL TABATHA
            </a>
          </div>
        </div>
      </section>

      {/* Quick Facts — 4-card grid */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-black/10">
            {statCards.map((card, i) => (
              <div
                key={card.label}
                className={cn(
                  "flex flex-col items-center justify-center py-12 px-6 text-center",
                  i < statCards.length - 1 && "border-r border-black/10"
                )}
              >
                <span
                  className="text-5xl font-light text-black leading-none mb-3 tracking-tight"
                >
                  {card.value}
                </span>
                <span
                  className="text-xs font-bold tracking-widest text-black/60 uppercase"
                  style={{ letterSpacing: "1.5px" }}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
