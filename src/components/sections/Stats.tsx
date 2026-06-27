'use client';

import { useInView } from '@/hooks/useInView';
import { AGENT, STATS } from '@/data/tabatha';
import { cn } from '@/lib/utils';

interface Stat {
  value: string;
  label: string;
  delay: number;
}

export function Stats(): React.ReactNode {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const stats: Stat[] = [
    {
      value: `${STATS.yearsExperience}+`,
      label: 'YEARS',
      delay: 0.2,
    },
    {
      value: `${STATS.zillowReviewCount}`,
      label: '5-STAR REVIEWS',
      delay: 0.3,
    },
    {
      value: `${STATS.totalSales}`,
      label: 'HOMES SOLD',
      delay: 0.4,
    },
    {
      value: `DRE ${AGENT.dre}`,
      label: 'LICENSE',
      delay: 0.5,
    },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-padding mx-auto max-w-6xl">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                'text-center transition-all duration-1000',
                inView
                  ? 'animate-fade-up opacity-100'
                  : 'opacity-0 translate-y-6'
              )}
              style={inView ? { animationDelay: `${stat.delay}s` } : {}}
            >
              <h3 className="mb-3 text-[60px] font-normal leading-none tracking-tight text-black md:text-[70px]">
                {stat.value}
              </h3>
              <p className="text-xs font-light uppercase tracking-wider text-black/80 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
