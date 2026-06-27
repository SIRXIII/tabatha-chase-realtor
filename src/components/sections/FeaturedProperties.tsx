"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LISTINGS_ACTIVE, LISTINGS_SOLD, type Listing } from "@/data/tabatha";

// Build the carousel pool: all active listings first, then sold to fill up to 4
const CAROUSEL_LISTINGS: Listing[] = [
  ...LISTINGS_ACTIVE,
  ...LISTINGS_SOLD,
].slice(0, 4);

function formatPrice(price: number): string {
  return "$" + price.toLocaleString("en-US");
}

function formatDetails(listing: Listing): string {
  const parts: string[] = [];
  if (listing.beds !== null) parts.push(`${listing.beds} BD`);
  if (listing.baths !== null) parts.push(`${listing.baths} BA`);
  if (listing.sqft !== null) parts.push(`${listing.sqft.toLocaleString("en-US")} SQ FT`);
  return parts.join(" | ");
}

interface PropertyCardProps {
  listing: Listing;
}

function PropertyCard({ listing }: PropertyCardProps) {
  const hasPhoto = listing.photoLocal && listing.photoLocal.trim() !== "";

  return (
    <div className="w-full flex-shrink-0">
      <div className="lp-listing-card">
        {/* Image / Placeholder */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {hasPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={listing.photoLocal}
              alt={listing.address}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-400" />
          )}
          {/* Status badge */}
          <span
            className={cn(
              "absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-widest uppercase text-white",
              listing.status === "active"
                ? "bg-[#374D6D]"
                : "bg-black"
            )}
          >
            {listing.status === "active" ? "ACTIVE" : "SOLD"}
          </span>
        </div>

        {/* Info */}
        <div className="pt-5 pb-2">
          <p className="text-[21px] font-bold uppercase tracking-[1px] text-black leading-tight mb-2">
            {formatPrice(listing.price)}
          </p>
          {formatDetails(listing) && (
            <p className="text-[16px] font-light uppercase tracking-[1px] text-black mb-2">
              {formatDetails(listing)}
            </p>
          )}
          <p className="text-[16px] font-normal text-black mb-4">
            {listing.address}, {listing.city}, {listing.state} {listing.zip}
          </p>
          <a
            href={listing.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="link link--black text-[13px] font-light uppercase tracking-widest hover:underline text-black"
          >
            VIEW PROPERTY
          </a>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProperties() {
  const [index, setIndex] = useState(0);
  const total = CAROUSEL_LISTINGS.length;

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === total - 1;

  function handlePrev() {
    if (!isPrevDisabled) setIndex((i) => i - 1);
  }

  function handleNext() {
    if (!isNextDisabled) setIndex((i) => i + 1);
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-padding mx-auto max-w-[1440px]">
        {/* Pretitle */}
        <p className="text-[16px] font-normal text-black mb-1">
          FEATURED LISTINGS
        </p>

        {/* Heading */}
        <h2 className="text-[43px] font-normal uppercase tracking-[1px] text-black mb-8 leading-[1.3]">
          FEATURED PROPERTIES
        </h2>

        {/* Carousel viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {CAROUSEL_LISTINGS.map((listing) => (
              <PropertyCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>

        {/* PREVIOUS / NEXT text navigation */}
        <div className="flex gap-8 mt-8 mb-10">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={cn(
              "slick-text-arrow uppercase text-[13px] tracking-widest font-normal cursor-pointer bg-transparent border-0 p-0",
              isPrevDisabled
                ? "text-[#9B9B9B] cursor-default"
                : "text-black hover:underline"
            )}
            aria-label="Previous property"
          >
            PREVIOUS
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={cn(
              "slick-text-arrow uppercase text-[13px] tracking-widest font-normal cursor-pointer bg-transparent border-0 p-0",
              isNextDisabled
                ? "text-[#9B9B9B] cursor-default"
                : "text-black hover:underline"
            )}
            aria-label="Next property"
          >
            NEXT
          </button>
        </div>

        {/* VIEW ALL LISTINGS CTA */}
        <a
          href="/listings"
          className="lp-btn lp-btn-dark inline-block"
        >
          VIEW ALL LISTINGS
        </a>
      </div>
    </section>
  );
}
