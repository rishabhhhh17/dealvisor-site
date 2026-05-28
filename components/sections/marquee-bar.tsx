'use client';
import { Marquee } from '@/components/motion/marquee';

const sectors = [
  'Healthcare',
  'Industrials',
  'FinServ',
  'Consumer',
  'Energy',
  'Tech',
  'Real Estate',
  'Materials',
  'Logistics',
  'Media',
  'Agri',
  'Education',
];

export function MarqueeBar() {
  return (
    <section className="relative py-10 lg:py-12">
      <div className="dv-container">
        <div className="text-center text-[11px] font-mono uppercase tracking-[0.18em] text-ink-subtle">
          One workspace · every sector
        </div>
        <div className="mt-6">
          <Marquee
            items={sectors}
            renderItem={(s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-2xl lg:text-3xl font-semibold tracking-tight text-ink-subtle hover:text-ink transition-colors"
              >
                <span className="size-1.5 rounded-full bg-gradient-to-br from-dv-blue to-dv-violet" />
                {s}
              </span>
            )}
          />
        </div>
      </div>
    </section>
  );
}
