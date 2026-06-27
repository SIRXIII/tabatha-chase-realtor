'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { LISTINGS_SOLD } from '@/data/tabatha';

export default function SoldPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="section-padding container-padding">
          <div className="max-w-3xl">
            <h1 className="text-[70px] font-normal leading-[87.5px] tracking-[1px] uppercase mb-6">
              SOLD PORTFOLIO
            </h1>
            <p className="text-base font-normal leading-[25.6px] text-black/80">
              Recent transactions
            </p>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="section-padding container-padding bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LISTINGS_SOLD.map((listing) => (
              <div key={listing.slug} className="flex flex-col">
                {/* Image */}
                <div className="w-full aspect-video bg-gradient-to-br from-stone-200 to-stone-400 overflow-hidden">
                  {listing.photoLocal ? (
                    <img
                      src={listing.photoLocal}
                      alt={listing.address}
                      className="w-full h-full object-cover"
                    />
                  ) : listing.photoUrl ? (
                    <img
                      src={listing.photoUrl}
                      alt={listing.address}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </div>

                {/* Content */}
                <div className="pt-6 pb-4">
                  {/* SOLD Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-[0.5px] uppercase">
                      SOLD
                    </span>
                  </div>

                  {/* Address */}
                  <h3 className="text-[21px] font-normal leading-[27px] tracking-[1px] uppercase mb-3">
                    {listing.address}
                  </h3>

                  {/* City, State, ZIP */}
                  <p className="text-sm text-black/80 mb-4">
                    {listing.city}, {listing.state} {listing.zip}
                  </p>

                  {/* Specs: Beds / Baths / SQFT */}
                  <div className="flex gap-4 text-sm text-black/80 mb-4">
                    {listing.beds !== null && (
                      <span>
                        {listing.beds} {listing.beds === 1 ? 'Bed' : 'Beds'}
                      </span>
                    )}
                    {listing.baths !== null && (
                      <span>
                        {listing.baths} {listing.baths === 1 ? 'Bath' : 'Baths'}
                      </span>
                    )}
                    {listing.sqft !== null && (
                      <span>{listing.sqft.toLocaleString()} SQFT</span>
                    )}
                  </div>

                  {/* Sold Price */}
                  <p className="text-lg font-bold mb-2">
                    ${listing.price.toLocaleString()}
                  </p>

                  {/* Sold Date */}
                  {listing.soldDate && (
                    <p className="text-sm text-black/60 mb-4">
                      {new Date(listing.soldDate).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  )}

                  {/* Agent Role */}
                  {listing.soldAs && (
                    <p className="text-sm italic text-black/70 mb-6">
                      {listing.soldAs === 'buyer'
                        ? 'Represented buyer'
                        : 'Represented seller'}
                    </p>
                  )}

                  {/* VIEW ON ZILLOW Link */}
                  <a
                    href={listing.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-bold uppercase tracking-[1px] text-black border-b border-black hover:text-[#374D6D] hover:border-[#374D6D] transition-colors"
                  >
                    View on Zillow
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
