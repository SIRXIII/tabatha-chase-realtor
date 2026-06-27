import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LISTINGS_ACTIVE, type Listing } from "@/data/tabatha";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Active Listings",
  description:
    "Browse Tabatha Chase's currently active real estate listings in Southern California.",
};

function ListingCard({ listing }: { listing: Listing }) {
  const hasPhoto = listing.photoUrl || listing.photoLocal;

  return (
    <div className="flex flex-col">
      {/* Hero image container */}
      <div className="aspect-video relative bg-gradient-to-br from-stone-200 to-stone-400 overflow-hidden">
        {hasPhoto && listing.photoLocal ? (
          <Image
            src={listing.photoLocal}
            alt={listing.address}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : hasPhoto && listing.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={listing.photoUrl}
            alt={listing.address}
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* Status badge */}
        <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 text-xs uppercase tracking-wider font-bold">
          {listing.status}
        </div>
      </div>

      {/* Card content */}
      <div className="bg-white p-6 flex-grow flex flex-col">
        {/* Address */}
        <h3 className="text-lg font-bold uppercase tracking-wider mb-2 line-clamp-2">
          {listing.address}
        </h3>

        {/* City, State, Zip */}
        <p className="text-sm text-muted-foreground mb-4">
          {listing.city}, {listing.state} {listing.zip}
        </p>

        {/* Beds · Baths · SQFT */}
        <div className="text-sm text-foreground mb-6 flex gap-4">
          {listing.beds !== null && (
            <span>
              <strong>{listing.beds}</strong> BEDS
            </span>
          )}
          {listing.baths !== null && (
            <span>
              <strong>{listing.baths}</strong> BATHS
            </span>
          )}
          {listing.sqft !== null && (
            <span>
              <strong>{listing.sqft.toLocaleString()}</strong> SQFT
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mb-6 mt-auto">
          <p className="text-2xl font-bold tracking-wider">
            ${listing.price.toLocaleString()}
          </p>
        </div>

        {/* CTA Link */}
        <a
          href={listing.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "lp-btn lp-btn-dark",
            "inline-block text-center w-full"
          )}
        >
          View on Zillow
        </a>
      </div>
    </div>
  );
}

export default function ActiveListingsPage() {
  const isEmpty = LISTINGS_ACTIVE.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-700 to-stone-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-[60vh] flex flex-col items-center justify-center container-padding">
          <h1 className="text-white text-center mb-4">Active Listings</h1>
          <p className="text-white text-center text-lg">
            Currently on the market with Tabatha
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white flex-grow">
        <div className="max-w-7xl mx-auto container-padding">
          {isEmpty ? (
            <div className="text-center py-24">
              <p className="text-lg text-foreground mb-6">
                No active listings right now. Browse her sold portfolio
              </p>
              <Link href="/properties/sold" className="lp-btn lp-btn-dark">
                View Sold Properties
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LISTINGS_ACTIVE.map((listing) => (
                <ListingCard key={listing.slug} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
