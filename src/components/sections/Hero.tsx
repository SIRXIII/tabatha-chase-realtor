"use client";

import Link from "next/link";
import { AGENT, LISTINGS_ACTIVE } from "@/data/tabatha";
import { cn } from "@/lib/utils";

export function Hero() {
  const firstListing = LISTINGS_ACTIVE[0];
  // Only use photoUrl if it is a non-empty string (the data has "" for blocked CDN URLs)
  const cdnPhoto =
    firstListing?.photoUrl && firstListing.photoUrl.trim().length > 0
      ? firstListing.photoUrl
      : null;
  // Only use photoLocal if it resolves to an actual file path (starts with "/images/")
  const localPhoto =
    !cdnPhoto &&
    firstListing?.photoLocal &&
    firstListing.photoLocal.startsWith("/images/")
      ? firstListing.photoLocal
      : null;

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — CDN photo > local photo > gradient */}
      {cdnPhoto ? (
        <img
          src={cdnPhoto}
          alt={firstListing!.address}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : localPhoto ? (
        <img
          src={localPhoto}
          alt={firstListing!.address}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900" />
      )}

      {/* Dark overlay rgba(0,0,0,0.4) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      />

      {/* Content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Pretitle / tagline */}
        <p
          className="fade-up mb-4 text-base font-normal text-white"
          style={{
            letterSpacing: "1px",
            lineHeight: "1.6",
            animationDelay: "0.3s",
          }}
        >
          {AGENT.tagline}
        </p>

        {/* H1 — name (already forced uppercase via base CSS) */}
        <h1
          className="fade-up m-0 mb-6 font-normal text-white"
          style={{
            fontSize: "clamp(40px, 7vw, 70px)",
            letterSpacing: "1px",
            lineHeight: "1.25",
            animationDelay: "0.5s",
          }}
        >
          {AGENT.name}
        </h1>

        {/* CTA row */}
        <div
          className={cn(
            "fade-up flex flex-row items-center justify-center gap-4",
            "max-[560px]:flex-col"
          )}
          style={{ animationDelay: "0.7s" }}
        >
          <Link href="/properties/active" className="lp-btn lp-btn-light">
            VIEW PROPERTIES
          </Link>
          <Link href="/contact" className="lp-btn lp-btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
