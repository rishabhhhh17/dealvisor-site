import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

export function FeatureRow({
  eyebrow,
  title,
  body,
  bullets,
  visual,
  reverse = false,
  cta,
  tone = 'cream',
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  bullets?: string[];
  visual: ReactNode;
  reverse?: boolean;
  cta?: { label: string; href: string };
  tone?: 'cream' | 'white';
}) {
  return (
    <section className={cn('relative py-24 lg:py-36', tone === 'white' && 'bg-surface border-y border-hairline')}>
      <div className="dv-container">
        <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center', reverse && 'lg:[&>div:first-child]:order-2')}>
          <Reveal>
            <span className="dv-eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-display-2 text-balance">{title}</h2>
            <p className="mt-5 text-lead text-ink-muted max-w-lg">{body}</p>
            {bullets && (
              <ul className="mt-7 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 inline-block size-1.5 rounded-full bg-dv-blue" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-8">
                <a href={cta.href} className="dv-btn-primary text-sm">
                  {cta.label} <ArrowRight className="size-4" />
                </a>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">{visual}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
