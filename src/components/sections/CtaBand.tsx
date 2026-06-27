'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function CtaBand() {
  return (
    <section
      className={cn(
        'relative w-full section-padding',
        'flex items-center justify-center',
        'min-h-[400px]',
        'bg-cover bg-center',
        'overflow-hidden'
      )}
      style={{
        backgroundImage: `url('https://d1e1jt2fj4r8r.cloudfront.net/cta-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      />

      {/* Content */}
      <div className="relative z-10 container-padding text-center text-white">
        <h2 className="text-[43px] font-normal tracking-[1px] uppercase leading-tight mb-6 wow fadeInUp">
          READY TO FIND YOUR DREAM HOME?
        </h2>

        <p className="text-base font-normal tracking-[1px] leading-[1.6] mb-8 wow fadeInUp" data-wow-delay="0.2s">
          Let&apos;s start your real estate journey today.
        </p>

        <Link
          href="/contact"
          className={cn(
            'lp-btn lp-btn-light',
            'inline-block',
            'text-sm font-bold tracking-[1.5px] uppercase',
            'px-[46px] py-[20px]',
            'border-2 border-white',
            'bg-transparent',
            'text-white',
            'transition-all duration-200',
            'hover:bg-white hover:text-black',
            'wow fadeInUp'
          )}
          data-wow-delay="0.3s"
        >
          Contact Tabatha
        </Link>
      </div>
    </section>
  );
}
