import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

/**
 * Centered headline + sub on top, ONE massive product visual below.
 * The calm-Granola pattern. No bullets, no side-by-side.
 */
export function FeatureSpotlight({
  eyebrow,
  title,
  body,
  visual,
  tone = 'cream',
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  visual: ReactNode;
  tone?: 'cream' | 'white';
}) {
  return (
    <section className={cn('relative py-28 lg:py-40', tone === 'white' && 'bg-surface border-y border-hairline')}>
      <div className="dv-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="dv-eyebrow">{eyebrow}</span>
            <h2 className="mt-6 text-display-2 text-balance">{title}</h2>
            <p className="mt-6 text-lead text-ink-muted text-balance">{body}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-16 lg:mt-20 mx-auto max-w-6xl">{visual}</div>
        </Reveal>
      </div>
    </section>
  );
}
