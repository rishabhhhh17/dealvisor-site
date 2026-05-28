'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

const items = [
  {
    q: "Is my firm's data isolated?",
    a: 'Yes. Each firm gets its own Supabase Postgres project — separate database, separate auth, separate storage. There is no shared tenant table.',
  },
  {
    q: 'Which meeting recorders are supported?',
    a: 'Fathom is wired in today via webhook — meetings auto-create interactions on the right mandate. Read.ai, Otter, and Fireflies are next.',
  },
  {
    q: 'Do I need to migrate from Excel?',
    a: 'No. The CSV importer maps your existing pipeline columns to DealVisor\'s schema in one screen. Re-runnable, so corrections are cheap.',
  },
  {
    q: 'How is it priced?',
    a: "Per-seat for the firm, with annual contracts. We're still onboarding design partners, so pricing is negotiated case-by-case. Book a demo and we'll be direct about numbers.",
  },
  {
    q: 'Can I self-host?',
    a: "The stack is Next.js + Supabase + Gemini. Self-host is on the roadmap for firms with strict data-residency requirements. Talk to us if that's a hard requirement.",
  },
  {
    q: 'Where does my data live?',
    a: 'Default region is EU (Frankfurt). US, Mumbai (ap-south-1), and Singapore are available on request. Documents are stored in Supabase Storage, indexed in pgvector — your firm, your bucket.',
  },
  {
    q: 'Is there a free trial?',
    a: "There's a guided demo on a live shared workspace. Real trial environments are provisioned for design partners after a walkthrough.",
  },
  {
    q: 'Who built this?',
    a: 'Valence Growth Partners — a cross-border M&A and capital raise advisory based in Mumbai and London. DealVisor ran inside the firm for 40+ live mandates before going external.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32 border-t border-hairline/70">
      <div className="dv-container grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="dv-eyebrow">FAQ</span>
            <h2 className="mt-5 text-display-2 text-balance">
              <span className="text-grad-ink">The questions</span><br />
              <span className="text-grad-cool">every MD asks.</span>
            </h2>
            <p className="mt-5 text-sm text-ink-muted">
              Don&apos;t see yours? <a href="#pricing" className="underline underline-offset-4 hover:text-ink">Ask in the demo form</a>.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {items.map((it, i) => {
                const isOpen = open === i;
                return (
                  <li key={it.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base font-medium transition-colors ${isOpen ? 'text-ink' : 'text-ink group-hover:text-ink'}`}>
                        {it.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 rounded-full border border-hairline bg-surface p-1.5 text-ink-muted group-hover:text-ink"
                      >
                        {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 max-w-2xl text-sm leading-6 text-ink-muted">{it.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
