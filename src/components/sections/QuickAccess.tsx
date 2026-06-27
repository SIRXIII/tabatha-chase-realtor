'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface QuickAccessCard {
  label: string;
  href: string;
  bgGradient: string;
}

const CARDS: QuickAccessCard[] = [
  {
    label: 'SOLD',
    href: '/properties/sold',
    bgGradient: 'bg-gradient-to-br from-stone-300 to-stone-500',
  },
  {
    label: 'ACTIVE',
    href: '/properties/active',
    bgGradient: 'bg-gradient-to-br from-stone-200 to-stone-400',
  },
  {
    label: 'CONTACT',
    href: '/contact',
    bgGradient: 'bg-gradient-to-br from-stone-400 to-stone-600',
  },
];

export default function QuickAccess() {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container-padding mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="fade-up mb-16 text-center text-4xl font-bold uppercase tracking-wide md:text-5xl">
          How Can We Help?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative flex min-h-72 items-center justify-center overflow-hidden bg-white transition-colors duration-200 hover:bg-stone-100"
            >
              {/* Background gradient (placeholder for image) */}
              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-200 group-hover:opacity-80',
                  card.bgGradient
                )}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                <h3 className="text-center text-3xl font-bold uppercase tracking-widest text-white md:text-4xl">
                  {card.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
