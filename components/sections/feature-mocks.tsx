'use client';
import { useState } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, Plus, TrendingUp, Briefcase, Activity, FolderOpen, Send } from 'lucide-react';

/* ---------------- shared chrome ---------------- */

function Chrome({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-hairline bg-surface shadow-card">
      <div className="flex items-center gap-2 border-b border-hairline bg-surface px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="ml-3 font-mono text-[11px] text-ink-subtle">app.dealvisor.com / {path}</div>
      </div>
      {children}
    </div>
  );
}

/* ---------------- Pipeline ---------------- */

const STAGES = ['Origination', 'Pitching', 'Pre-Mandate', 'Mandate', 'Closed'] as const;
const STAGE_BG: Record<string, string> = {
  Origination: 'bg-stage-origination',
  Pitching: 'bg-stage-pitching',
  'Pre-Mandate': 'bg-stage-pre-mandate',
  Mandate: 'bg-stage-mandate',
  Closed: 'bg-stage-closed',
};
const STAGE_DOT: Record<string, string> = {
  Origination: 'bg-ink-subtle',
  Pitching: 'bg-dv-amber',
  'Pre-Mandate': 'bg-dv-blue',
  Mandate: 'bg-dv-blue',
  Closed: 'bg-dv-mint',
};

export function PipelineMock() {
  const initial: Record<string, { firm: string; size: string }[]> = {
    Origination: [{ firm: 'Arclight Capital', size: '' }, { firm: 'Crescent Pharma', size: '$150M' }],
    Pitching: [{ firm: 'Helios Infra', size: '$150M' }],
    'Pre-Mandate': [{ firm: 'Quantum Edge', size: '$80M' }, { firm: 'BluePeak Logistics', size: '$25M' }],
    Mandate: [{ firm: 'Nimbus Health', size: '$80M' }, { firm: 'Saffron Studios', size: '$40M' }],
    Closed: [{ firm: 'Meridian Energy', size: '$400M' }],
  };
  const [cards, setCards] = useState(initial);

  return (
    <Chrome path="pipeline">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Pipeline</div>
            <div className="text-lg font-semibold mt-1">
              {Object.values(cards).reduce((a, b) => a + b.length, 0)} mandates · 5 stages
            </div>
          </div>
          <span className="dv-pill">→ Drag to advance</span>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-1.5">
          {STAGES.map((col) => (
            <div key={col} className={`rounded-lg border border-hairline ${STAGE_BG[col]} p-2 min-h-[220px]`}>
              <div className="flex items-center justify-between px-0.5">
                <div className="inline-flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${STAGE_DOT[col]}`} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-muted truncate">{col}</span>
                </div>
                <span className="font-mono text-[9px] text-ink-subtle">{cards[col].length}</span>
              </div>
              <Reorder.Group
                axis="y"
                values={cards[col]}
                onReorder={(next) => setCards((c) => ({ ...c, [col]: next }))}
                className="mt-2 space-y-1.5"
              >
                {cards[col].map((card) => (
                  <Reorder.Item
                    key={card.firm}
                    value={card}
                    className="cursor-grab active:cursor-grabbing rounded-md border border-hairline bg-surface px-2 py-1.5 select-none shadow-card"
                    whileDrag={{ scale: 1.05, zIndex: 10 }}
                  >
                    <div className="font-medium text-[11px] text-ink">{card.firm}</div>
                    {card.size && <div className="font-mono text-[9px] text-ink-muted mt-0.5">{card.size}</div>}
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------- Mandate page ---------------- */

export function MandateMock() {
  return (
    <Chrome path="mandates/helix-therapeutics">
      <div className="grid grid-cols-3 min-h-[420px]">
        <div className="col-span-2 p-5 border-r border-hairline">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Mandate</div>
          <div className="text-xl font-semibold mt-1">Helix Therapeutics</div>
          <div className="mt-1 text-[12px] text-ink-muted">$340M minority capital raise · Healthcare / Therapeutics</div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-[11px]">
            {[
              ['Stage', 'Mandate'],
              ['Retainer', '$120K'],
              ['Success fee', '2.4%'],
              ['Counterparties', '14'],
              ['NDAs signed', '11'],
              ['LOIs', '3'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-hairline bg-canvas p-2.5">
                <div className="text-ink-subtle font-mono uppercase tracking-[0.12em] text-[9px]">{k}</div>
                <div className="mt-0.5 font-medium text-ink">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Latest interaction</div>
            <div className="mt-2 rounded-lg border border-hairline bg-stage-mandate p-3 text-[12px] leading-5">
              <span className="font-mono text-[10px] text-ink-subtle">FATHOM · 03 MAR</span>{' '}
              <span className="text-ink">CFO open to revised IM if pre-money trims by 8%.</span>{' '}
              <span className="text-ink-muted">Wants term sheet by Friday.</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-canvas/40">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Counterparties</div>
          <ul className="mt-2 space-y-1.5 text-[11px]">
            {[
              ['Apollo Healthcare', 'NDA'],
              ['Genoptix', 'IM'],
              ['Praxis Pharma', 'LOI'],
              ['Vela Partners', 'NDA'],
              ['Crestone Equity', '—'],
            ].map(([n, s]) => (
              <li key={n} className="flex items-center justify-between rounded-md border border-hairline bg-surface px-2 py-1.5">
                <span className="font-medium text-ink">{n}</span>
                <span className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.12em]">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------- Knowledge ---------------- */

export function KnowledgeMock() {
  const [sector, setSector] = useState('Healthcare');
  const sectors = ['Healthcare', 'Industrials', 'Consumer', 'FinServ', 'Energy'];
  return (
    <Chrome path="knowledge">
      <div className="grid grid-cols-3 min-h-[420px]">
        <div className="col-span-1 border-r border-hairline p-3 bg-canvas/40">
          <div className="px-1 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Sectors</div>
          <ul className="mt-2 space-y-0.5 text-[12px]">
            {sectors.map((s) => (
              <li
                key={s}
                onClick={() => setSector(s)}
                className={`rounded-md px-2 py-1.5 cursor-pointer press ${s === sector ? 'bg-ink text-white' : 'text-ink-muted hover:bg-elevated'}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 p-5">
          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">{sector} / Memos</div>
          <div className="text-lg font-semibold mt-1">{sector === 'Healthcare' ? 'Helix Therapeutics' : `${sector} live mandates`}</div>
          <p className="mt-4 text-[12px] leading-6 text-ink-muted">
            Series C biologics platform. Comps:{' '}
            <span className="rounded bg-stage-mandate px-1.5 py-0.5 font-mono text-dv-blue">[[Genoptix]]</span>,{' '}
            <span className="rounded bg-stage-pre-mandate px-1.5 py-0.5 font-mono text-dv-indigo">[[Praxis Pharma]]</span>.
            IM circulated to <span className="rounded bg-stage-pitching px-1.5 py-0.5 font-mono text-amber-700">[[Apollo Healthcare]]</span> on 12 Feb.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 text-[11px]">
            {[
              ['IM_Helix_v3.pdf', '12 Feb'],
              ['NDA_Apollo.pdf', '14 Feb'],
              ['LOI_Genoptix.docx', '21 Feb'],
              ['Teaser_Helix.pdf', '02 Feb'],
            ].map(([doc, d]) => (
              <div key={doc} className="flex items-center justify-between rounded-md border border-hairline bg-canvas px-2 py-1.5">
                <span className="font-medium text-ink">📄 {doc}</span>
                <span className="font-mono text-[9px] text-ink-muted">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* ---------------- Ask ---------------- */

const SUGGESTIONS = [
  'Which counterparties signed an NDA in Q1?',
  'What did Helix\'s CFO say about valuation?',
  'Mandates past their median velocity',
];

const ANSWERS: Record<string, string> = {
  'Which counterparties signed an NDA in Q1?':
    '11 counterparties signed an NDA between Jan 1 and Mar 31, 2026: Apollo Healthcare, Caldera AI, Genoptix, Kestrel Capital, Meridian Foods, Northwind, Praxis Pharma, Orbit Materials, Talos Mfg, Brassica Ag, and Aurora Industries.',
  'What did Helix\'s CFO say about valuation?':
    "On the March 3 call, Helix's CFO indicated openness to a revised IM if pre-money trims by 8%. Wants a term sheet by Friday. Source: Fathom transcript · Mandate page.",
  'Mandates past their median velocity':
    '3 mandates exceed median time-in-stage: Northwind Logistics (Pitching, 47 days), Brassica Ag (Pitching, 39 days), Meridian Foods (Origination, 52 days).',
};

export function AskMock() {
  const [q, setQ] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [answer, setAnswer] = useState('');
  const [streaming, setStreaming] = useState(false);

  function ask(input: string) {
    const text = input.trim();
    if (!text) return;
    const full = ANSWERS[text] ?? `Based on your workspace, here's what I found about "${text}". DealVisor searches mandates, IMs, NDAs, LOIs, and recorded calls, and cites the source for every claim.`;
    setSubmitted(text);
    setAnswer('');
    setStreaming(true);
    let i = 0;
    const timer = setInterval(() => {
      i += 2 + Math.floor(Math.random() * 3);
      setAnswer(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(timer);
        setStreaming(false);
      }
    }, 20);
  }

  return (
    <Chrome path="ask">
      <div className="p-5 min-h-[420px]">
        <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Ask</div>
        <div className="text-lg font-semibold mt-1">Grounded in your firm</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(q);
          }}
          className="mt-4 relative"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask anything about your mandates…"
            className="w-full rounded-xl border border-hairline bg-canvas px-4 py-3 pr-12 text-sm placeholder:text-ink-subtle focus:outline-none focus:border-dv-blue/40"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-lg bg-ink px-3 py-2 text-white press"
          >
            <Send className="size-3.5" />
          </button>
        </form>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setQ(s);
                ask(s);
              }}
              className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-[11px] text-ink-muted hover:text-ink hover:border-dv-blue/30"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {submitted && (
              <motion.div
                key={submitted}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="rounded-xl border border-hairline bg-canvas p-4 text-[12.5px] leading-6"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Answer · grounded in workspace</div>
                <div className="mt-2 text-ink">
                  {answer}
                  {streaming && <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 bg-dv-blue animate-pulse" />}
                </div>
              </motion.div>
            )}
            {!submitted && (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] text-ink-subtle">
                Try a suggestion, or type your own.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Chrome>
  );
}
