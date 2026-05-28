'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const headline = ['The', 'operating', 'system', 'for', 'investment', 'banking.'];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-hero" />
      {/* grain */}
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />
      {/* hairline grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mask-radial"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="dv-container relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="dv-eyebrow">
            <span className="inline-block size-1.5 rounded-full bg-dv-glow shadow-[0_0_12px_2px_rgba(96,165,250,0.7)]" />
            Built by Valence Growth Partners · Mumbai · London
          </span>
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-5xl text-center text-display-1 text-balance">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
              className="inline-block mr-[0.22em] last:mr-0"
            >
              {word === 'banking.' ? (
                <span className="bg-gradient-to-br from-fg via-fg to-fg-muted bg-clip-text text-transparent">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lead text-fg-muted text-balance"
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
          <a href="#pricing" className="dv-btn-primary">
            Book a demo <ArrowRight className="size-4" />
          </a>
          <a href="#product" className="dv-btn-ghost">See the product</a>
        </motion.div>

        {/* product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-6xl"
          style={{ perspective: '1600px' }}
        >
          <div aria-hidden className="pointer-events-none absolute -inset-x-20 -bottom-20 h-72 bg-glow-ring opacity-80 blur-2xl" />
          <div
            className="relative rounded-2xl border border-hairline bg-elevated shadow-card overflow-hidden"
            style={{ transform: 'rotateX(2deg)' }}
          >
            {/* faux app chrome */}
            <div className="flex items-center gap-2 border-b border-hairline bg-panel/80 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
              </div>
              <div className="ml-3 text-[11px] font-mono text-fg-subtle">app.dealvisor.com / mandates</div>
            </div>
            <MockMandatesScreen />
          </div>
        </motion.div>

        <a href="#problem" className="mx-auto mt-12 flex w-fit items-center gap-2 text-xs text-fg-subtle hover:text-fg">
          See how it works <ChevronDown className="size-3.5 animate-bounce-down" />
        </a>
      </div>
    </section>
  );
}

function MockMandatesScreen() {
  const rows = [
    { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M', counter: 7, dot: 'bg-amber-400' },
    { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M', counter: 14, dot: 'bg-dv-blue' },
    { firm: 'Northwind Logistics', stage: 'Pitching', sector: 'Transport', size: '$85M', counter: 4, dot: 'bg-fg-subtle' },
    { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M', counter: 11, dot: 'bg-dv-blue' },
    { firm: 'Meridian Foods', stage: 'Origination', sector: 'Consumer', size: '$60M', counter: 2, dot: 'bg-fg-subtle' },
  ];
  return (
    <div className="grid grid-cols-12 min-h-[420px] bg-canvas">
      <aside className="col-span-3 border-r border-hairline bg-panel/60 p-4 hidden md:block">
        <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-fg-subtle">Workspace</div>
        <ul className="mt-3 space-y-1.5 text-sm">
          {['Pipeline', 'Mandates', 'Counterparties', 'Knowledge', 'Ask', 'Calendar'].map((l, i) => (
            <li
              key={l}
              className={`rounded-md px-2.5 py-1.5 ${i === 1 ? 'bg-elevated text-fg' : 'text-fg-muted hover:bg-elevated/60'}`}
            >
              {l}
            </li>
          ))}
        </ul>
      </aside>
      <div className="col-span-12 md:col-span-9 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-fg-subtle">Active mandates</div>
            <div className="text-xl font-semibold mt-1">47 live · 12 closing this quarter</div>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="dv-eyebrow">All sectors</span>
            <span className="dv-eyebrow">Q2 2026</span>
          </div>
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-hairline">
          <table className="w-full text-sm">
            <thead className="bg-panel/70">
              <tr className="text-left text-[11px] font-mono uppercase tracking-[0.14em] text-fg-subtle">
                <th className="px-3 py-2 font-normal">Counterparty</th>
                <th className="px-3 py-2 font-normal">Stage</th>
                <th className="px-3 py-2 font-normal">Sector</th>
                <th className="px-3 py-2 font-normal text-right">Size</th>
                <th className="px-3 py-2 font-normal text-right">Counterparties</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.firm} className="border-t border-hairline hover:bg-panel/50">
                  <td className="px-3 py-2.5 font-medium">{r.firm}</td>
                  <td className="px-3 py-2.5">
                    <span className="inline-flex items-center gap-1.5 text-fg-muted">
                      <span className={`size-1.5 rounded-full ${r.dot}`} />
                      {r.stage}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-fg-muted">{r.sector}</td>
                  <td className="px-3 py-2.5 text-right font-mono">{r.size}</td>
                  <td className="px-3 py-2.5 text-right font-mono text-fg-muted">{r.counter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
