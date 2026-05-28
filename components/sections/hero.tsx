'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Magnetic } from '@/components/motion/magnetic';

const headline = ['The', 'operating', 'system', 'for', 'investment', 'banking.'];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const mockY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mockRotate = useTransform(scrollYProgress, [0, 1], [2, -1]);
  const mockScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const mockOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="dv-container relative">
        {/* eyebrow */}
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
            Built by Valence Growth Partners · Mumbai · London
          </span>
        </motion.div>

        {/* headline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-center text-display-1 text-balance">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.07 }}
              className="inline-block mr-[0.22em] last:mr-0"
            >
              {word === 'banking.' ? <span className="text-grad-cool">{word}</span> : <span className="text-grad-ink">{word}</span>}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lead text-ink-muted text-balance"
        >
          Run every mandate — from teaser to SPA — in one workspace. Pipeline, IMs,
          counterparty intel, AI memory, and your calendar. Together.
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
              <Sparkles className="size-4 text-dv-violet" /> See the product
            </a>
          </Magnetic>
        </motion.div>

        {/* product mockup with scroll-driven transform */}
        <motion.div
          style={{ y: mockY, rotateX: mockRotate, scale: mockScale, opacity: mockOpacity, perspective: 1600 }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          <div aria-hidden className="pointer-events-none absolute -inset-x-20 -bottom-20 h-72 bg-mesh-cool opacity-50 blur-3xl" />
          <div className="relative rounded-2xl border border-hairline bg-surface/95 shadow-card overflow-hidden backdrop-blur">
            <AppChrome path="app.dealvisor.com / mandates" />
            <MockMandatesScreen />
          </div>
        </motion.div>

        <a href="#problem" className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs text-ink-subtle hover:text-ink transition-colors">
          See how it works <ChevronDown className="size-3.5 animate-bounce-down" />
        </a>
      </div>
    </section>
  );
}

export function AppChrome({ path }: { path: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-hairline bg-elevated/60 px-4 py-3">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-rose-400/70" />
        <span className="size-2.5 rounded-full bg-amber-400/70" />
        <span className="size-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <div className="ml-3 text-[11px] font-mono text-ink-subtle">{path}</div>
    </div>
  );
}

function MockMandatesScreen() {
  const rows = [
    { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M', counter: 7, dot: 'bg-amber-400' },
    { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M', counter: 14, dot: 'bg-dv-blue' },
    { firm: 'Northwind Logistics', stage: 'Pitching', sector: 'Transport', size: '$85M', counter: 4, dot: 'bg-ink-subtle' },
    { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M', counter: 11, dot: 'bg-dv-blue' },
    { firm: 'Meridian Foods', stage: 'Origination', sector: 'Consumer', size: '$60M', counter: 2, dot: 'bg-ink-subtle' },
  ];
  return (
    <div className="grid grid-cols-12 min-h-[420px] bg-canvas">
      <aside className="col-span-3 border-r border-hairline bg-elevated/40 p-4 hidden md:block">
        <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Workspace</div>
        <ul className="mt-3 space-y-1.5 text-sm">
          {['Pipeline', 'Mandates', 'Counterparties', 'Knowledge', 'Ask', 'Calendar'].map((l, i) => (
            <li
              key={l}
              className={`rounded-md px-2.5 py-1.5 ${i === 1 ? 'bg-surface text-ink shadow-card' : 'text-ink-muted hover:bg-surface/60'}`}
            >
              {l}
            </li>
          ))}
        </ul>
      </aside>
      <div className="col-span-12 md:col-span-9 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Active mandates</div>
            <div className="text-xl font-semibold mt-1">47 live · 12 closing this quarter</div>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="dv-pill">All sectors</span>
            <span className="dv-pill">Q2 2026</span>
          </div>
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-hairline bg-surface">
          <table className="w-full text-sm">
            <thead className="bg-elevated/50">
              <tr className="text-left text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">
                <th className="px-3 py-2 font-normal">Counterparty</th>
                <th className="px-3 py-2 font-normal">Stage</th>
                <th className="px-3 py-2 font-normal">Sector</th>
                <th className="px-3 py-2 font-normal text-right">Size</th>
                <th className="px-3 py-2 font-normal text-right">Counterparties</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r.firm}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 + i * 0.08 }}
                  className="border-t border-hairline hover:bg-elevated/40"
                >
                  <td className="px-3 py-2.5 font-medium">{r.firm}</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center gap-1.5 text-ink-muted">
                      <span className={`size-1.5 rounded-full ${r.dot}`} />
                      {r.stage}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-ink-muted">{r.sector}</td>
                  <td className="px-3 py-2.5 text-right font-mono">{r.size}</td>
                  <td className="px-3 py-2.5 text-right font-mono text-ink-muted">{r.counter}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
