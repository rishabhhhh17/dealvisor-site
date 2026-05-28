'use client';
import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';
import { Counter } from '@/components/motion/counter';

const stats: Array<{ to: number; prefix?: string; suffix?: string; decimals?: number; label: string }> = [
  { to: 47, label: 'Active mandates run' },
  { to: 2.4, prefix: '$', suffix: 'B', decimals: 1, label: 'In counterparty conversations' },
  { to: 18000, suffix: '+', label: 'Documents indexed' },
  { to: 40, suffix: '+', label: 'Mandates before launch' },
];

export function StatStrip() {
  return (
    <section className="relative">
      <div className="dv-container py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="font-mono text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
                  <CounterFormatted to={s.to} decimals={s.decimals ?? 0} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} />
                </div>
                <div className="mt-2 text-xs text-ink-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterFormatted(props: { to: number; decimals: number; prefix: string; suffix: string }) {
  if (props.decimals === 0 && props.to >= 1000) {
    return <FormattedIntegerCounter to={props.to} prefix={props.prefix} suffix={props.suffix} />;
  }
  return <Counter to={props.to} decimals={props.decimals} prefix={props.prefix} suffix={props.suffix} />;
}

function FormattedIntegerCounter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString('en-US')}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}
