"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENT } from "@/data/tabatha";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const BIO_PREVIEW_LENGTH = 280;

function HeadshotImage() {
  const headshotSrc = AGENT.headshotLocal;

  // Treat empty string or placeholder path that doesn't exist as "no headshot"
  const hasHeadshot = (headshotSrc as string).startsWith("/images/");

  if (!hasHeadshot) {
    // Gradient placeholder with initials
    const initials = AGENT.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
    return (
      <div className="relative w-full h-full min-h-[480px] md:min-h-[715px] bg-gradient-to-br from-stone-300 to-stone-500 flex items-center justify-center">
        <span className="text-white text-6xl font-light tracking-widest select-none">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={headshotSrc}
      alt={AGENT.name}
      width={600}
      height={716}
      className="w-full h-auto object-cover object-top"
      priority={false}
      style={{ maxHeight: "715px" }}
    />
  );
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  const bioPreview =
    AGENT.bio.length > BIO_PREVIEW_LENGTH
      ? AGENT.bio.slice(0, BIO_PREVIEW_LENGTH).trimEnd() + "…"
      : AGENT.bio;

  return (
    <section className="bg-[#f8f8f8] section-padding" id="about">
      <div className="container-padding max-w-[1440px] mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left: Portrait */}
          <div
            className={cn(
              "w-full self-start fade-up",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
            style={{ transition: "opacity 0.5s linear, transform 0.5s ease" }}
          >
            <HeadshotImage />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <p
              className={cn(
                "text-base tracking-[1px] mb-3 fade-up",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{
                transition: "opacity 0.5s linear 0.2s, transform 0.5s ease 0.2s",
              }}
            >
              ABOUT TABATHA
            </p>

            <h2
              className={cn(
                "text-[43px] leading-[55.9px] tracking-[1px] uppercase font-normal mb-6 fade-up",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{
                transition: "opacity 0.5s linear 0.3s, transform 0.5s ease 0.3s",
              }}
            >
              MEET TABATHA
            </h2>

            <p
              className={cn(
                "text-base leading-[25.6px] tracking-[1px] mb-6 fade-up",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{
                transition: "opacity 0.5s linear 0.4s, transform 0.5s ease 0.4s",
              }}
            >
              {bioPreview}
            </p>

            <div
              className={cn(
                "fade-up",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{
                transition: "opacity 0.5s linear 0.6s, transform 0.5s ease 0.6s",
              }}
            >
              <Link
                href="/about"
                className="lp-btn lp-btn-dark inline-block text-[14px] font-bold tracking-[1.5px] uppercase px-[46px] py-[20px] bg-black text-white border-2 border-black hover:bg-[#333] transition-colors duration-200"
              >
                ABOUT TABATHA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
