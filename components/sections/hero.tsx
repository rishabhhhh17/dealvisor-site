'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Magnetic } from '@/components/motion/magnetic';
import { InteractiveAppMock } from '@/components/sections/interactive-app-mock';

type Word = { text: string; kind: 'plain' | 'chrome' | 'accent' };
const headline: Word[] = [
  { text: 'The', kind: 'plain' },
  { text: 'only', kind: 'plain' },
  { text: 'visor', kind: 'chrome' },
  { text: 'you', kind: 'plain' },
  { text: 'need', kind: 'plain' },
  { text: 'for', kind: 'plain' },
  { text: 'your', kind: 'plain' },
  { text: 'deals.', kind: 'accent' },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const mockRotate = useTransform(scrollYProgress, [0, 1], [3, -1]);
  const mockScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const mockOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate pt-10 pb-20 lg:pt-16 lg:pb-28">
      <div className="dv-container relative">
        {/* eyebrow — product positioning, not who built it */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="dv-eyebrow">
            <span className="relative inline-flex">
              <span className="inline-block size-1.5 rounded-full bg-dv-coral" />
              <span className="absolute inset-0 inline-block size-1.5 rounded-full bg-dv-coral animate-ping opacity-60" />
            </span>
            The IB OS · v1 in private beta
          </span>
        </motion.div>

        {/* headline — the visor tagline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-center text-display-1 text-balance">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
              className="inline-block mr-[0.22em] last:mr-0"
            >
              {w.kind === 'chrome' ? (
                <span className="text-chrome-shine" data-text={w.text}>
                  <span className="text-chrome">{w.text}</span>
                </span>
              ) : w.kind === 'accent' ? (
                <span className="text-grad-accent">{w.text}</span>
              ) : (
                <span className="text-ink">{w.text}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lead text-ink-muted text-balance"
        >
          One workspace for every mandate — teaser to SPA. Pipeline, counterparties, IMs,
          AI memory, and your calendar. Built so you stop bending the tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic strength={0.3}>
            <a href="#pricing" className="dv-btn-primary">
              Book a demo <ArrowRight className="size-4" />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#product" className="dv-btn-ghost">
              <Sparkles className="size-4 text-dv-coral" /> See it in action
            </a>
          </Magnetic>
        </motion.div>

        {/* the playable mockup, wrapped in a brushed-chrome bezel */}
        <motion.div
          style={{ y: mockY, rotateX: mockRotate, scale: mockScale, opacity: mockOpacity, perspective: 1600 }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          {/* reactive color wash beneath the mockup — gets caught by the chrome rim */}
          <div aria-hidden className="pointer-events-none absolute -inset-x-24 -bottom-28 h-80 bg-mesh-brand opacity-80 blur-3xl" />
          <div className="chrome-frame">
            <InteractiveAppMock />
          </div>
          {/* reflective shadow on the floor below the chrome frame */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -bottom-6 h-10 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(50% 60% at 50% 50%, rgba(16,16,18,0.30) 0%, rgba(16,16,18,0) 80%)' }}
          />
        </motion.div>

        <a href="#problem" className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs text-ink-subtle hover:text-ink transition-colors">
          See how it works <ChevronDown className="size-3.5 animate-bounce-down" />
        </a>
      </div>
    </section>
  );
}
