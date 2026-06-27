"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENT } from "@/data/tabatha";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — Tabatha's family photo rendered B&W for kim-bibb-style tonal fit */}
      <Image
        src={AGENT.familyPhotoLocal}
        alt=""
        fill
        priority
        className="object-cover object-center grayscale"
        sizes="100vw"
      />

      {/* Dark overlay — heavier than other sections to keep white headline readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.75) 100%)",
        }}
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
