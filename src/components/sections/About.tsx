"use client";

import Image from "next/image";
import Link from "next/link";
import { AGENT } from "@/data/tabatha";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const BIO_PREVIEW_LENGTH = 280;

function FamilyPortrait() {
  // Use the family photo, rendered B&W to match kim-bibb-style flat aesthetic.
  // Subtle color reveal on hover keeps the section editorial-feeling.
  return (
    <div className="relative w-full overflow-hidden bg-stone-100">
      <Image
        src={AGENT.familyPhotoLocal}
        alt={`${AGENT.name} with her family`}
        width={960}
        height={715}
        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-[filter] duration-700 ease-out"
        priority={false}
        style={{ maxHeight: "715px" }}
      />
    </div>
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
            <FamilyPortrait />
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
