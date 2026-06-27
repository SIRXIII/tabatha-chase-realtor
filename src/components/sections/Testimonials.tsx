"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AGENT, TESTIMONIALS } from "@/data/tabatha";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  function prev() {
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === total - 1;

  const headerText =
    AGENT.reviewCount +
    " ZILLOW REVIEWS · " +
    AGENT.avgRating.toFixed(1) +
    " AVERAGE";

  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #1c1917, #0c0a09)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(32,32,32,0.4), rgba(32,32,32,0.4))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-padding container-padding mx-auto max-w-[1440px]">
        {/* Pretitle / stat bar */}
        <p
          className="text-white text-base mb-3 tracking-[1px]"
          style={{ fontWeight: 400 }}
        >
          {headerText}
        </p>

        {/* Section heading */}
        <h2 className="text-white mb-10">WHAT CLIENTS SAY</h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div className="w-full">
            <blockquote className="lp-testimonial">
              <p
                className="text-white leading-relaxed mb-6"
                style={{
                  fontSize: "clamp(16px, 2vw, 21px)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                &ldquo;{current.text}&rdquo;
              </p>
              <footer className="lp-testimonial__attribution">
                <cite
                  className="text-white not-italic block mb-1 tracking-[1px]"
                  style={{ fontSize: "16px", fontWeight: 400, textTransform: "uppercase" }}
                >
                  — {current.author}
                </cite>
                {current.date && (
                  <span
                    className="block"
                    style={{
                      fontSize: "16px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {new Date(current.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                )}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Text navigation */}
        <div className="flex gap-8 mt-10">
          <button
            onClick={prev}
            disabled={isPrevDisabled}
            className={cn(
              "slick-text-arrow",
              isPrevDisabled && "opacity-40 cursor-default"
            )}
            aria-label="Previous testimonial"
          >
            PREVIOUS
          </button>
          <button
            onClick={next}
            disabled={isNextDisabled}
            className={cn(
              "slick-text-arrow",
              isNextDisabled && "opacity-40 cursor-default"
            )}
            aria-label="Next testimonial"
          >
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
}
