"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { CtaBand } from "@/components/sections/CtaBand";
import { AGENT, YOUTUBE_VIDEOS } from "@/data/tabatha";
import { cn } from "@/lib/utils";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function VideosClient() {
  const [activeId, setActiveId] = useState(YOUTUBE_VIDEOS[0].id);
  const active = YOUTUBE_VIDEOS.find((v) => v.id === activeId) ?? YOUTUBE_VIDEOS[0];

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-gradient-to-br from-stone-700 to-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-white/70 text-sm tracking-widest uppercase" style={{ letterSpacing: "1.5px" }}>
            @socalivingbytabathachase
          </p>
          <h1 className="text-white">VIDEOS</h1>
          <p className="text-white uppercase text-base tracking-widest max-w-xl" style={{ letterSpacing: "1.5px" }}>
            Market updates, neighborhood tours, buying &amp; selling tips
          </p>
        </div>
      </section>

      {/* Featured player */}
      <section className="bg-white section-padding">
        <div className="container-padding max-w-[1200px] mx-auto">
          <p className="text-base tracking-[1px] mb-3 text-black/60 uppercase">Now Playing</p>
          <h2 className="text-[28px] md:text-[36px] tracking-[1px] uppercase mb-8 leading-tight">
            {active.title}
          </h2>

          <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              key={active.id}
              src={`https://www.youtube.com/embed/${active.id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
              title={active.title}
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {active.publishedAt && (
            <p className="mt-4 text-sm tracking-[1px] text-black/60 uppercase">
              {formatDate(active.publishedAt)}
            </p>
          )}
        </div>
      </section>

      {/* Video grid */}
      <section className="bg-[#f8f8f8] section-padding">
        <div className="container-padding max-w-[1440px] mx-auto">
          <p className="text-base tracking-[1px] mb-3 text-black/60 uppercase">All Videos</p>
          <h2 className="text-[36px] tracking-[1px] uppercase mb-12 leading-tight">
            Browse the channel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {YOUTUBE_VIDEOS.map((v) => {
              const isActive = v.id === activeId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => {
                    setActiveId(v.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={cn(
                    "group flex flex-col text-left bg-white border transition-colors",
                    isActive ? "border-black" : "border-black/10 hover:border-black/40"
                  )}
                >
                  <div className="relative w-full bg-stone-200 overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                    {/* YouTube thumbnail — hqdefault is always present, no API call needed */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                    />
                    {isActive && (
                      <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-widest uppercase px-2 py-1">
                        Playing
                      </span>
                    )}
                  </div>
                  <div className="px-5 py-4 flex flex-col gap-2">
                    <p className="text-sm tracking-[1px] leading-snug uppercase line-clamp-2">
                      {v.title}
                    </p>
                    {v.publishedAt && (
                      <p className="text-xs tracking-widest uppercase text-black/50">
                        {formatDate(v.publishedAt)}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href={AGENT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn lp-btn-dark inline-block"
            >
              Subscribe on YouTube
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function VideosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <VideosClient />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
