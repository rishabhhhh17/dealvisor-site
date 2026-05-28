'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  GitBranch,
  FileText,
  Users,
  BookOpen,
  Sparkles,
  CalendarRange,
  ArrowRight,
  Search,
  Star,
  Mail,
} from 'lucide-react';

type Tab = 'pipeline' | 'mandates' | 'counterparties' | 'knowledge' | 'ask' | 'calendar';

const NAV: { id: Tab; label: string; icon: typeof GitBranch }[] = [
  { id: 'pipeline', label: 'Pipeline', icon: GitBranch },
  { id: 'mandates', label: 'Mandates', icon: FileText },
  { id: 'counterparties', label: 'Counterparties', icon: Users },
  { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
  { id: 'ask', label: 'Ask', icon: Sparkles },
  { id: 'calendar', label: 'Calendar', icon: CalendarRange },
];

export function InteractiveAppMock() {
  const [tab, setTab] = useState<Tab>('mandates');

  return (
    <div className="relative rounded-2xl border border-hairline bg-surface shadow-card overflow-hidden">
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-hairline bg-elevated px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-dv-coral/80" />
          <span className="size-2.5 rounded-full bg-dv-amber/80" />
          <span className="size-2.5 rounded-full bg-dv-mint/90" />
        </div>
        <div className="ml-3 text-[11px] font-mono text-ink-subtle">app.dealvisor.com / {tab}</div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="dv-pill hidden sm:inflex">⌘K Search</span>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[440px]">
        {/* sidebar — tappable */}
        <aside className="col-span-3 border-r border-hairline bg-elevated/60 p-3 hidden md:block">
          <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Workspace</div>
          <ul className="mt-2 space-y-0.5">
            {NAV.map(({ id, label, icon: Icon }) => {
              const active = tab === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setTab(id)}
                    className={`relative w-full text-left flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                      active ? 'text-ink' : 'text-ink-muted hover:text-ink hover:bg-surface'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-0 rounded-md bg-surface shadow-card"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-2.5">
                      <Icon className={`size-3.5 ${active ? 'text-dv-blue' : 'text-ink-subtle'}`} />
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 mx-2 rounded-lg border border-hairline bg-gradient-to-br from-dv-blue/8 via-dv-violet/6 to-dv-coral/8 p-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Tip</div>
            <div className="mt-1 text-[11px] text-ink-muted leading-4">
              Click any item above to explore a real screen.
            </div>
          </div>
        </aside>

        {/* main panel */}
        <div className="col-span-12 md:col-span-9 p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {tab === 'pipeline' && <PipelineView />}
              {tab === 'mandates' && <MandatesView />}
              {tab === 'counterparties' && <CounterpartiesView />}
              {tab === 'knowledge' && <KnowledgeView />}
              {tab === 'ask' && <AskView />}
              {tab === 'calendar' && <CalendarView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ---------- Views ---------- */

const STAGES = ['All', 'Origination', 'Pitching', 'Pre-Mandate', 'Mandate', 'Closed'] as const;
type Stage = (typeof STAGES)[number];

const MANDATES = [
  { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M', counter: 7, dot: 'bg-dv-amber' },
  { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M', counter: 14, dot: 'bg-dv-blue' },
  { firm: 'Northwind Logistics', stage: 'Pitching', sector: 'Transport', size: '$85M', counter: 4, dot: 'bg-ink-subtle' },
  { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M', counter: 11, dot: 'bg-dv-blue' },
  { firm: 'Meridian Foods', stage: 'Origination', sector: 'Consumer', size: '$60M', counter: 2, dot: 'bg-ink-subtle' },
  { firm: 'Orbit Materials', stage: 'Closed', sector: 'Materials', size: '$180M', counter: 9, dot: 'bg-dv-mint' },
] as const;

function MandatesView() {
  const [stage, setStage] = useState<Stage>('All');
  const [selected, setSelected] = useState<string | null>('Helix Therapeutics');
  const rows = stage === 'All' ? MANDATES : MANDATES.filter((m) => m.stage === stage);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Active mandates</div>
          <div className="text-xl font-semibold mt-1">47 live · 12 closing this quarter</div>
        </div>
        <div className="hidden sm:flex gap-1.5">
          <span className="dv-pill">Q2 2026</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {STAGES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(s)}
            className={`rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.1em] transition-all ${
              stage === s
                ? 'border-dv-blue/40 bg-dv-blue/10 text-dv-blue'
                : 'border-hairline bg-surface text-ink-muted hover:text-ink hover:border-dv-blue/30'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-hairline bg-surface">
        <div className="grid grid-cols-12 border-b border-hairline bg-elevated/60 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
          <span className="col-span-4">Counterparty</span>
          <span className="col-span-3">Stage</span>
          <span className="col-span-2">Sector</span>
          <span className="col-span-2 text-right">Size</span>
          <span className="col-span-1 text-right">Cp</span>
        </div>
        <AnimatePresence mode="popLayout">
          {rows.map((r) => {
            const isSel = selected === r.firm;
            return (
              <motion.button
                key={r.firm}
                type="button"
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelected(r.firm)}
                className={`relative w-full grid grid-cols-12 items-center border-t border-hairline px-3 py-2.5 text-left text-[12px] transition-colors ${
                  isSel ? 'bg-dv-blue/[0.06]' : 'hover:bg-elevated/60'
                }`}
              >
                {isSel && (
                  <motion.span
                    layoutId="row-active"
                    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-r bg-gradient-to-b from-dv-blue to-dv-violet"
                  />
                )}
                <span className="col-span-4 font-medium">{r.firm}</span>
                <span className="col-span-3 text-ink-muted inline-flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${r.dot}`} />
                  {r.stage}
                </span>
                <span className="col-span-2 text-ink-muted">{r.sector}</span>
                <span className="col-span-2 text-right font-mono">{r.size}</span>
                <span className="col-span-1 text-right font-mono text-ink-muted">{r.counter}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      {selected && (
        <div className="mt-3 text-[11px] text-ink-subtle">
          Selected · <span className="text-ink">{selected}</span> &nbsp;
          <span className="text-ink-muted">↳ open mandate, add counterparty, log call</span>
        </div>
      )}
    </div>
  );
}

function PipelineView() {
  const cols: { id: string; cards: { name: string; size: string; tone: string }[] }[] = [
    { id: 'Origination', cards: [{ name: 'Meridian Foods', size: '$60M', tone: 'bg-dv-coral/15 border-dv-coral/25' }, { name: 'Caldera AI', size: '$45M', tone: 'bg-dv-coral/15 border-dv-coral/25' }] },
    { id: 'Pitching', cards: [{ name: 'Northwind', size: '$85M', tone: 'bg-dv-amber/15 border-dv-amber/25' }, { name: 'Brassica Ag', size: '$70M', tone: 'bg-dv-amber/15 border-dv-amber/25' }] },
    { id: 'Pre-Mandate', cards: [{ name: 'Aurora Industries', size: '$120M', tone: 'bg-dv-violet/15 border-dv-violet/25' }] },
    { id: 'Mandate', cards: [{ name: 'Helix Therapeutics', size: '$340M', tone: 'bg-dv-blue/15 border-dv-blue/25' }, { name: 'Kestrel Capital', size: '$210M', tone: 'bg-dv-blue/15 border-dv-blue/25' }, { name: 'Talos Mfg', size: '$95M', tone: 'bg-dv-blue/15 border-dv-blue/25' }] },
    { id: 'Closed', cards: [{ name: 'Orbit Materials', size: '$180M', tone: 'bg-dv-mint/15 border-dv-mint/25' }] },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Pipeline</div>
          <div className="text-xl font-semibold mt-1">9 mandates across 5 stages</div>
        </div>
        <span className="dv-pill">Drag to advance</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {cols.map((c) => (
          <div key={c.id} className="rounded-lg border border-hairline bg-surface p-2 min-h-[260px]">
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">{c.id}</div>
            <div className="mt-2 space-y-1.5">
              {c.cards.map((card) => (
                <motion.div
                  key={card.name}
                  whileHover={{ y: -2 }}
                  className={`cursor-grab rounded-md border ${card.tone} px-2 py-1.5 text-[11px]`}
                >
                  <div className="font-medium text-ink">{card.name}</div>
                  <div className="font-mono text-[10px] text-ink-muted">{card.size}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CounterpartiesView() {
  const rows = [
    { name: 'Apollo Healthcare', tag: 'Strategic · Healthcare', mandates: 3, fav: true },
    { name: 'Genoptix', tag: 'Strategic · Healthcare', mandates: 2, fav: true },
    { name: 'Praxis Pharma', tag: 'Strategic · Healthcare', mandates: 1, fav: false },
    { name: 'Vela Partners', tag: 'Sponsor · Multi', mandates: 5, fav: true },
    { name: 'Northbridge Cap', tag: 'Sponsor · Industrials', mandates: 4, fav: false },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Counterparties</div>
          <div className="text-xl font-semibold mt-1">142 active relationships</div>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-ink-subtle" />
          <input
            type="text"
            placeholder="Search…"
            className="rounded-full border border-hairline bg-surface pl-7 pr-3 py-1 text-[11px] focus:outline-none focus:border-dv-blue/40"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {rows.map((r) => (
          <motion.div
            key={r.name}
            whileHover={{ y: -2 }}
            className="flex items-center justify-between rounded-lg border border-hairline bg-surface px-3 py-2.5"
          >
            <div>
              <div className="text-[13px] font-medium inline-flex items-center gap-1.5">
                {r.fav && <Star className="size-3 fill-dv-amber text-dv-amber" />}
                {r.name}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle mt-0.5">{r.tag}</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm">{r.mandates}</div>
              <div className="text-[10px] text-ink-subtle">mandates</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function KnowledgeView() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Knowledge</div>
          <div className="text-xl font-semibold mt-1">Healthcare / Therapeutics</div>
        </div>
        <span className="dv-pill">18,420 docs indexed</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="col-span-1 rounded-lg border border-hairline bg-surface p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Sectors</div>
          <ul className="mt-2 space-y-1 text-[12px]">
            {['Healthcare', 'Industrials', 'Consumer', 'FinServ', 'Energy'].map((s, i) => (
              <li
                key={s}
                className={`rounded px-1.5 py-0.5 cursor-pointer ${i === 0 ? 'bg-dv-blue/10 text-dv-blue' : 'text-ink-muted hover:text-ink'}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 rounded-lg border border-hairline bg-surface p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Helix Therapeutics · Memo</div>
          <p className="mt-2 text-[12px] leading-5 text-ink-muted">
            Series C biologics platform. Comps:{' '}
            <span className="rounded bg-dv-blue/10 px-1.5 py-0.5 font-mono text-dv-blue">[[Genoptix]]</span>,{' '}
            <span className="rounded bg-dv-violet/10 px-1.5 py-0.5 font-mono text-dv-violet">[[Praxis Pharma]]</span>.
            IM circulated to{' '}
            <span className="rounded bg-dv-coral/10 px-1.5 py-0.5 font-mono text-orange-700">[[Apollo Healthcare]]</span> on 12 Feb.
          </p>
          <div className="mt-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
            <span>Linked</span>
            <span className="text-ink-muted normal-case tracking-normal">· 6 docs · 14 calls · 3 LOIs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AskView() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Ask</div>
          <div className="text-xl font-semibold mt-1">Grounded in your firm</div>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-hairline bg-surface p-4">
        <div className="text-[12px] text-ink-muted">Which counterparties signed an NDA in Q1?</div>
        <div className="mt-2 rounded-lg bg-elevated/70 p-3 text-[12px] leading-6">
          11 counterparties signed an NDA between Jan 1 and Mar 31:{' '}
          <span className="text-ink">Apollo Healthcare, Caldera AI, Genoptix, Kestrel Capital, Meridian Foods,</span>{' '}
          <span className="text-ink-muted">and 6 more.</span>
          <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Sources · 11 mandate pages · 14 NDA docs</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {['What did Helix\'s CFO say about valuation?', 'Mandates past their median velocity', 'NDAs expiring this month'].map((s) => (
          <span key={s} className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-[11px] text-ink-muted">{s}</span>
        ))}
      </div>
    </div>
  );
}

function CalendarView() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const events: { d: number; t: string; label: string; tone: string }[] = [
    { d: 0, t: '09:30', label: 'Helix CFO follow-up', tone: 'bg-dv-blue/15 text-dv-blue' },
    { d: 0, t: '14:00', label: 'Aurora IM walkthrough', tone: 'bg-dv-violet/15 text-dv-violet' },
    { d: 1, t: '11:00', label: 'Kestrel LOI review', tone: 'bg-dv-blue/15 text-dv-blue' },
    { d: 2, t: '10:00', label: 'Internal pipeline review', tone: 'bg-dv-mint/15 text-emerald-700' },
    { d: 3, t: '15:00', label: 'Northwind teaser pitch', tone: 'bg-dv-amber/15 text-amber-700' },
    { d: 4, t: '09:00', label: 'Meridian intro call', tone: 'bg-dv-coral/15 text-orange-700' },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">This week</div>
          <div className="text-xl font-semibold mt-1">6 calls · 3 mandates moving</div>
        </div>
        <span className="dv-pill"><Mail className="size-3" /> Google Workspace connected</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {days.map((day, i) => (
          <div key={day} className="rounded-lg border border-hairline bg-surface p-2 min-h-[180px]">
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">{day}</div>
            <div className="mt-2 space-y-1.5">
              {events.filter((e) => e.d === i).map((e) => (
                <div key={e.t + e.label} className={`rounded-md px-1.5 py-1 text-[10px] ${e.tone}`}>
                  <div className="font-mono">{e.t}</div>
                  <div className="font-medium leading-tight">{e.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
