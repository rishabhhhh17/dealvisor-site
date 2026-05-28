'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';

const steps = [
  {
    n: '01',
    title: 'Connect',
    body: 'Plug in Google Workspace and your meeting recorder in two clicks. Bring your existing pipeline as a CSV.',
  },
  {
    n: '02',
    title: 'Centralize',
    body: 'Every mandate, counterparty, IM, LOI, and recorded call lives in one searchable workspace.',
  },
  {
    n: '03',
    title: 'Act',
    body: 'AI follow-ups, velocity alerts on stale mandates, and win-rate analytics for the team.',
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section id="how" className="relative py-24 lg:py-32 border-t border-hairline/70">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">How it works</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            From scattered to running, {' '}
            <span className="text-grad-accent">in a week.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* animated SVG path connecting the three step numerals (desktop only) */}
          <svg
            aria-hidden
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-10 hidden md:block h-32 w-full"
          >
            <defs>
              <linearGradient id="path-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#4F7CFF" />
                <stop offset="50%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 80 120 C 280 20, 420 200, 600 100 S 920 20, 1120 120"
              fill="none"
              stroke="url(#path-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* moving dot along the path */}
            <motion.circle
              r="5"
              fill="#4F7CFF"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: [0, 1, 1, 0] } : {}}
              transition={{ duration: 2.4, delay: 0.4, ease: 'easeInOut' }}
            >
              {inView && (
                <animateMotion
                  dur="2.4s"
                  begin="0.4s"
                  repeatCount="1"
                  fill="freeze"
                  path="M 80 120 C 280 20, 420 200, 600 100 S 920 20, 1120 120"
                />
              )}
            </motion.circle>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 }}
              >
                <div className="font-mono text-7xl lg:text-8xl font-semibold tracking-tight text-grad-accent">
                  {s.n}
                </div>
                <h3 className="mt-4 text-h3">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted max-w-sm">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
