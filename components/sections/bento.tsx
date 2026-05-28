'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitBranch,
  FileText,
  BookOpen,
  Sparkles,
  CalendarRange,
  Shield,
  Send,
  Lock,
} from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';

export function Bento() {
  return (
    <section id="product" className="relative py-24 lg:py-32">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">The product</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            Everything an IB firm needs.<br />
            <span className="text-grad-accent">Nothing it doesn&apos;t.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-4 lg:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Pipeline — large, interactive */}
          <Reveal className="col-span-12 md:col-span-7 row-span-2">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col">
              <CardHead icon={GitBranch} tag="Pipeline" title="A pipeline that speaks IB." />
              <p className="mt-3 text-sm text-ink-muted max-w-md">
                Seven stages from Origination → Closed. Drag to advance. Velocity benchmarks flag stale mandates before they go cold.
              </p>
              <div className="mt-6 flex-1 min-h-0">
                <InteractivePipeline />
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Mandates */}
          <Reveal className="col-span-12 md:col-span-5">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col">
              <CardHead icon={FileText} tag="Mandates" title="One page per mandate." />
              <p className="mt-3 text-sm text-ink-muted">
                Counterparties, NDAs, IMs, LOIs, retainers, success fees, recorded calls &mdash; all on one page.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
                {[
                  ['Retainer', '$120K'],
                  ['Success', '2.4%'],
                  ['NDAs', '11'],
                  ['LOIs', '3'],
                  ['Counter.', '14'],
                  ['Stage', 'Mandate'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-hairline bg-elevated/60 p-2.5">
                    <div className="font-mono uppercase tracking-[0.12em] text-[9px] text-ink-subtle">{k}</div>
                    <div className="mt-0.5 font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Knowledge */}
          <Reveal className="col-span-12 md:col-span-5">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col">
              <CardHead icon={BookOpen} tag="Knowledge" title="A wiki your firm actually uses." />
              <p className="mt-3 text-sm text-ink-muted">
                <code className="font-mono text-[12px] text-dv-blue">[[wikilinks]]</code> between people, firms, mandates. Hybrid lexical + pgvector search.
              </p>
              <div className="mt-4 rounded-lg border border-hairline bg-elevated/60 p-3 text-[12px] leading-5 text-ink-muted">
                Helix is a Series C biologics. Comps:{' '}
                <span className="rounded bg-dv-blue/10 px-1.5 py-0.5 font-mono text-dv-blue">[[Genoptix]]</span>,{' '}
                <span className="rounded bg-dv-violet/10 px-1.5 py-0.5 font-mono text-dv-violet">[[Praxis]]</span>.
                IM sent to{' '}
                <span className="rounded bg-dv-cyan/10 px-1.5 py-0.5 font-mono text-cyan-300">[[Apollo Healthcare]]</span> on 12 Feb.
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Ask — live demo */}
          <Reveal className="col-span-12 md:col-span-7 row-span-2">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col">
              <CardHead icon={Sparkles} tag="Ask" title="Ask in plain English. Get cited answers." />
              <p className="mt-3 text-sm text-ink-muted max-w-md">
                Grounded in your firm&apos;s data, never the open web. Type a question &mdash; watch it answer.
              </p>
              <div className="mt-5 flex-1 min-h-[260px]">
                <LiveAskDemo />
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Workspace */}
          <Reveal className="col-span-12 md:col-span-7">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col">
              <CardHead icon={CalendarRange} tag="Workspace" title="Calendar, Drive, Gmail. Wired in." />
              <p className="mt-3 text-sm text-ink-muted max-w-lg">
                Connect Google Workspace once. Every mandate page surfaces the relevant calls, docs, and threads.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-hairline bg-elevated/60 p-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Today · Calendar</div>
                  <ul className="mt-2 space-y-1 text-[11px]">
                    {[
                      ['09:30', 'Helix CFO follow-up'],
                      ['11:00', 'Aurora IM walkthrough'],
                      ['14:00', 'Kestrel — LOI review'],
                    ].map(([t, l]) => (
                      <li key={t} className="flex gap-2">
                        <span className="font-mono text-ink-subtle w-10">{t}</span>
                        <span className="text-ink-muted">{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-hairline bg-elevated/60 p-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Drive · Helix</div>
                  <ul className="mt-2 space-y-1 text-[11px] text-ink-muted">
                    <li>📄 IM_Helix_v3.pdf</li>
                    <li>📄 NDA_Apollo.pdf</li>
                    <li>📄 LOI_Genoptix.docx</li>
                    <li>📄 Teaser_Helix.pdf</li>
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Trust / security */}
          <Reveal className="col-span-12 md:col-span-5">
            <SpotlightCard className="h-full p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <CardHead icon={Shield} tag="Trust" title="Your firm. Your DB." />
                <p className="mt-3 text-sm text-ink-muted">
                  Each firm gets an isolated Postgres database. No shared tenant table. Region of your choice.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-[12px]">
                {[
                  ['Isolated Postgres per firm', Lock],
                  ['EU · US · Singapore · Mumbai regions', Shield],
                  ['Read-only AI — no autonomous actions', Sparkles],
                ].map(([label, Icon]) => {
                  const I = Icon as typeof Lock;
                  return (
                    <li key={label as string} className="flex items-center gap-2 text-ink-muted">
                      <I className="size-3.5 text-dv-blue" /> {label as string}
                    </li>
                  );
                })}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CardHead({ icon: Icon, tag, title }: { icon: typeof GitBranch; tag: string; title: string }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="inline-flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-dv-blue/15 via-dv-cyan/10 to-dv-violet/15 border border-hairline">
          <Icon className="size-4 text-dv-blue" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">{tag}</span>
      </div>
      <h3 className="mt-3 text-h3 text-balance">{title}</h3>
    </div>
  );
}

/* ---------- Interactive pipeline ---------- */

const STAGES = ['All', 'Origination', 'Pitching', 'Pre-Mandate', 'Mandate', 'Closed'] as const;
type Stage = (typeof STAGES)[number];

const PIPE_ROWS: Array<{ firm: string; stage: Exclude<Stage, 'All'>; sector: string; size: string }> = [
  { firm: 'Meridian Foods', stage: 'Origination', sector: 'Consumer', size: '$60M' },
  { firm: 'Caldera AI', stage: 'Origination', sector: 'Tech', size: '$45M' },
  { firm: 'Northwind Logistics', stage: 'Pitching', sector: 'Transport', size: '$85M' },
  { firm: 'Brassica Ag', stage: 'Pitching', sector: 'Agri', size: '$70M' },
  { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M' },
  { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M' },
  { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M' },
  { firm: 'Talos Mfg', stage: 'Mandate', sector: 'Industrials', size: '$95M' },
  { firm: 'Orbit Materials', stage: 'Closed', sector: 'Materials', size: '$180M' },
];

function InteractivePipeline() {
  const [stage, setStage] = useState<Stage>('All');
  const rows = stage === 'All' ? PIPE_ROWS : PIPE_ROWS.filter((r) => r.stage === stage);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-1.5">
        {STAGES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(s)}
            className={`rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.1em] transition-all ${
              stage === s
                ? 'border-dv-blue/40 bg-dv-blue/10 text-dv-blue'
                : 'border-hairline bg-raised text-ink-muted hover:text-ink'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-3 flex-1 overflow-hidden rounded-lg border border-hairline bg-raised">
        <div className="grid grid-cols-12 border-b border-hairline bg-elevated/50 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
          <span className="col-span-5">Counterparty</span>
          <span className="col-span-3">Stage</span>
          <span className="col-span-2">Sector</span>
          <span className="col-span-2 text-right">Size</span>
        </div>
        <AnimatePresence mode="popLayout">
          {rows.map((r) => (
            <motion.div
              key={r.firm}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 border-t border-hairline px-3 py-2 text-[12px] hover:bg-elevated/40"
            >
              <span className="col-span-5 font-medium">{r.firm}</span>
              <span className="col-span-3 text-ink-muted inline-flex items-center gap-1.5">
                <span className={`size-1.5 rounded-full ${stageColor(r.stage)}`} />
                {r.stage}
              </span>
              <span className="col-span-2 text-ink-muted">{r.sector}</span>
              <span className="col-span-2 text-right font-mono">{r.size}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function stageColor(s: Exclude<Stage, 'All'>) {
  switch (s) {
    case 'Mandate':
      return 'bg-dv-blue';
    case 'Pre-Mandate':
      return 'bg-amber-400';
    case 'Closed':
      return 'bg-emerald-400';
    default:
      return 'bg-ink-subtle';
  }
}

/* ---------- Live Ask demo ---------- */

const SUGGESTIONS = [
  'Which counterparties signed an NDA in Q1?',
  'What did Helix\'s CFO say about valuation?',
  'Show me mandates stalled past their median velocity.',
];

const ANSWERS: Record<string, string> = {
  'Which counterparties signed an NDA in Q1?':
    '11 counterparties signed an NDA between Jan 1 and Mar 31, 2026: Apollo Healthcare, Caldera AI, Genoptix, Kestrel Capital, Meridian Foods, Northwind, Praxis Pharma, Orbit Materials, Talos Mfg, Brassica Ag, and Aurora Industries.',
  'What did Helix\'s CFO say about valuation?':
    'On the March 3 call, Helix\'s CFO indicated openness to a revised IM if pre-money trims by 8%. Wants a term sheet by Friday. Source: Fathom transcript · Mandate page.',
  'Show me mandates stalled past their median velocity.':
    '3 mandates exceed the median time-in-stage: Northwind Logistics (Pitching, 47 days), Brassica Ag (Pitching, 39 days), Meridian Foods (Origination, 52 days). Suggested next action on each is pinned to the mandate page.',
};

function LiveAskDemo() {
  const [q, setQ] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function ask(input: string) {
    const text = input.trim();
    if (!text) return;
    const full = ANSWERS[text] ??
      `Based on your workspace, here\'s what I found about "${text}". DealVisor searches mandates, IMs, NDAs, LOIs, and recorded calls, and cites the source for every claim.`;
    setSubmitted(text);
    setAnswer('');
    setStreaming(true);
    if (timerRef.current) clearInterval(timerRef.current);
    let i = 0;
    timerRef.current = setInterval(() => {
      i += 2 + Math.floor(Math.random() * 3);
      setAnswer(full.slice(0, i));
      if (i >= full.length) {
        if (timerRef.current) clearInterval(timerRef.current);
        setStreaming(false);
      }
    }, 20);
  }

  return (
    <div className="flex flex-col h-full">
      {/* prompt */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
        className="relative"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask anything about your mandates…"
          className="w-full rounded-xl border border-hairline bg-raised px-4 py-3 pr-12 text-sm shadow-sm focus-visible:outline-none focus-visible:border-dv-blue/50 focus-visible:ring-2 focus-visible:ring-dv-blue/15"
        />
        <button
          type="submit"
          aria-label="Ask"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-dv-blue to-dv-violet px-3 py-2 text-white shadow-glow-blue transition-transform hover:-translate-y-[calc(50%+1px)]"
        >
          <Send className="size-3.5" />
        </button>
      </form>

      {/* suggestions */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setQ(s);
              ask(s);
            }}
            className="rounded-full border border-hairline bg-raised px-2.5 py-1 text-[11px] text-ink-muted hover:text-ink hover:border-dv-blue/30 hover:bg-dv-blue/5 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      {/* answer */}
      <div className="mt-4 flex-1 min-h-[120px]">
        <AnimatePresence mode="wait">
          {submitted && (
            <motion.div
              key={submitted}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-hairline bg-elevated/40 p-4 text-[13px] leading-6"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">
                Answer · grounded in workspace
              </div>
              <div className="mt-2 text-ink">
                {answer}
                {streaming && <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-dv-blue animate-pulse" />}
              </div>
            </motion.div>
          )}
          {!submitted && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[12px] text-ink-subtle"
            >
              Try one of the suggestions, or type your own.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
