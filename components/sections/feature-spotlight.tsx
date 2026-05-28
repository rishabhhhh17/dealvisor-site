'use client';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { cn } from '@/lib/utils';

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section className={cn('relative py-20 lg:py-28', tone === 'white' && 'bg-surface border-y border-hairline')}>
      <div ref={ref} className="dv-container">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="dv-eyebrow">{eyebrow}</span>
            <h2 className="mt-5 text-display-2 text-balance">{title}</h2>
            <p className="mt-5 text-lead text-ink-muted text-balance">{body}</p>
          </div>
        </Reveal>
        <motion.div style={{ y, scale }} className="mt-12 lg:mt-14 mx-auto max-w-6xl">
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
