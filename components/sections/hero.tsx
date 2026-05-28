'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { InteractiveAppMock } from '@/components/sections/interactive-app-mock';
import { CyclingWord } from '@/components/motion/cycling-word';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const mockRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const mockScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const mockOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.45]);
  const washY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative isolate pt-14 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* drifting gradient wash behind hero, anchored slower than scroll */}
      <motion.div
        aria-hidden
        style={{ y: washY }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[120%]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(45% 35% at 22% 22%, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0) 70%), radial-gradient(40% 30% at 78% 16%, rgba(124,92,255,0.14) 0%, rgba(124,92,255,0) 70%), radial-gradient(50% 40% at 50% 95%, rgba(245,158,11,0.10) 0%, rgba(245,158,11,0) 70%)',
          }}
        />
      </motion.div>

      <div className="dv-container relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="dv-eyebrow">
            <span className="relative inline-flex">
              <span className="inline-block size-1.5 rounded-full bg-dv-blue" />
              <span className="absolute inset-0 inline-block size-1.5 rounded-full bg-dv-blue animate-ping opacity-60" />
            </span>
            The IB OS · v1 in private beta
          </span>
        </motion.div>

        <h1 className="mx-auto mt-7 max-w-5xl text-center text-display-1 text-balance text-ink">
          <motion.span
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            One workspace for every
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="block"
          >
            <CyclingWord words={['mandate.', 'teaser.', 'IM.', 'LOI.', 'SPA.']} />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lead text-ink-muted text-balance"
        >
          The only visor you need for your deals. Pipeline, counterparties,
          IMs, AI memory, and your calendar &mdash; together. Built so you stop bending the tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#pricing" className="dv-btn-primary">
            Book a demo <ArrowRight className="size-4" />
          </a>
          <a href="#product" className="dv-btn-ghost">See it in action</a>
        </motion.div>

        {/* mockup — choreographed entrance + scroll-driven transform */}
        <motion.div
          style={{ y: mockY, rotateX: mockRotate, scale: mockScale, opacity: mockOpacity, perspective: 1600 }}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto mt-16 lg:mt-20 max-w-6xl"
        >
          {/* glow under mockup */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-12 -bottom-12 h-40 blur-3xl opacity-60"
            style={{
              background:
                'radial-gradient(45% 60% at 50% 50%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0) 70%), radial-gradient(40% 60% at 30% 50%, rgba(124,92,255,0.18) 0%, rgba(124,92,255,0) 70%), radial-gradient(40% 60% at 70% 50%, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 70%)',
            }}
          />
          <InteractiveAppMock />
        </motion.div>
      </div>
    </section>
  );
}
