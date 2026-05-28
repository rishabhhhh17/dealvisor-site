'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { InteractiveAppMock } from '@/components/sections/interactive-app-mock';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mockOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  return (
    <section ref={ref} className="relative isolate pt-10 pb-24 lg:pt-16 lg:pb-32">
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

        <h1 className="mx-auto mt-8 max-w-5xl text-center text-display-1 text-balance text-ink">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            The only <span className="text-accent">visor</span> you need
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="block"
          >
            for your deals.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lead text-ink-muted text-balance"
        >
          One workspace for every mandate &mdash; teaser to SPA. Pipeline, counterparties, IMs,
          AI memory, and your calendar. Built so you stop bending the tool.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#pricing" className="dv-btn-primary">
            Book a demo <ArrowRight className="size-4" />
          </a>
          <a href="#product" className="dv-btn-ghost">See it in action</a>
        </motion.div>

        {/* mockup — clean, no chrome bezel */}
        <motion.div
          style={{ y: mockY, opacity: mockOpacity }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <InteractiveAppMock />
        </motion.div>

        <a href="#problem" className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs text-ink-subtle hover:text-ink transition-colors">
          See how it works <ChevronDown className="size-3.5 animate-bounce-down" />
        </a>
      </div>
    </section>
  );
}
