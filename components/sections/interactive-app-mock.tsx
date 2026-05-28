'use client';
import { useState } from 'react';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import {
  GitBranch,
  FileText,
  Users,
  BookOpen,
  Sparkles,
  CalendarRange,
  Search,
  Star,
  Mail,
  Plus,
  Filter,
  Bell,
} from 'lucide-react';

type Tab = 'pipeline' | 'mandates' | 'counterparties' | 'knowledge' | 'ask' | 'calendar';

const NAV: { id: Tab; label: string; icon: typeof GitBranch; hint: string }[] = [
  { id: 'pipeline', label: 'Pipeline', icon: GitBranch, hint: 'Drag cards across stages' },
  { id: 'mandates', label: 'Mandates', icon: FileText, hint: 'Tap rows to inspect' },
  { id: 'counterparties', label: 'Counterparties', icon: Users, hint: 'Search the network' },
  { id: 'knowledge', label: 'Knowledge', icon: BookOpen, hint: 'Wiki + hybrid search' },
  { id: 'ask', label: 'Ask', icon: Sparkles, hint: 'Cited answers, your data' },
  { id: 'calendar', label: 'Calendar', icon: CalendarRange, hint: 'Mandate-aware schedule' },
];

export function InteractiveAppMock() {
  const [tab, setTab] = useState<Tab>('mandates');

  return (
    <div className="relative rounded-2xl overflow-hidden surface-glass shadow-card">
      {/* chrome top bar */}
      <div className="flex items-center gap-2 border-b border-hairline/70 surface-chrome px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-dv-coral/80 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset]" />
          <span className="size-2.5 rounded-full bg-dv-amber/80 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset]" />
          <span className="size-2.5 rounded-full bg-dv-mint/90 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset]" />
        </div>
        <div className="ml-3 text-[11px] font-mono text-ink-subtle">app.dealvisor.com / {tab}</div>
        <div className="ml-auto" />

      </div>

      <div className="grid grid-cols-12 min-h-[460px]">
        {/* sidebar */}
        <aside className="col-span-3 border-r border-hairline/70 surface-chrome p-3 hidden md:block">
          <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Workspace</div>
          <ul className="mt-2 space-y-0.5">
            {NAV.map(({ id, label, icon: Icon, hint }) => {
              const active = tab === id;
              return (
                <li key={id} className="group/nav relative">
                  <button
                    type="button"
                    onClick={() => setTab(id)}
                    className={`relative w-full text-left flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors press ${
                      active ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-0 rounded-md surface-glass shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_0_0_1px_rgba(41,80,242,0.18),0_6px_14px_-8px_rgba(41,80,242,0.20)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-2.5">
                      <Icon className={`size-3.5 ${active ? 'text-dv-blue' : 'text-ink-subtle'}`} />
                      {label}
                    </span>
                  </button>
                  {/* tooltip */}
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-full top-1/2 z-30 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md surface-glass px-2 py-1 text-[10px] text-ink-muted opacity-0 transition-opacity duration-150 group-hover/nav:opacity-100"
                  >
                    {hint}
                  </span>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setTab('mandates')}
            className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-dashed border-hairline px-2.5 py-2 text-[11px] font-medium text-ink-muted hover:text-ink hover:border-dv-blue/40 press"
          >
            <Plus className="size-3" /> New mandate
          </button>
        </aside>

        {/* main panel */}
        <div className="col-span-12 md:col-span-9 p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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

type Mandate = {
  firm: string;
  stage: Exclude<Stage, 'All'>;
  sector: string;
  size: string;
  counter: number;
  dot: string;
};

const SEED_MANDATES: Mandate[] = [
  { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M', counter: 7, dot: 'bg-dv-amber' },
  { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M', counter: 14, dot: 'bg-dv-blue' },
  { firm: 'Northwind Logistics', stage: 'Pitching', sector: 'Transport', size: '$85M', counter: 4, dot: 'bg-ink-subtle' },
  { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M', counter: 11, dot: 'bg-dv-blue' },
  { firm: 'Meridian Foods', stage: 'Origination', sector: 'Consumer', size: '$60M', counter: 2, dot: 'bg-ink-subtle' },
  { firm: 'Orbit Materials', stage: 'Closed', sector: 'Materials', size: '$180M', counter: 9, dot: 'bg-dv-mint' },
];

function MandatesView() {
  const [stage, setStage] = useState<Stage>('All');
  const [selected, setSelected] = useState<string | null>('Helix Therapeutics');
  const rows = stage === 'All' ? SEED_MANDATES : SEED_MANDATES.filter((m) => m.stage === stage);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Active mandates</div>
          <div className="text-xl font-semibold mt-1">47 live · 12 closing this quarter</div>
        </div>
        <div className="hidden sm:flex gap-1.5">
          <button className="dv-chip"><Filter className="size-3" /> Q2 2026</button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {STAGES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStage(s)}
            className={`dv-chip font-mono uppercase tracking-[0.1em] ${stage === s ? 'dv-chip-active' : ''}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-hairline/60 surface-glass">
        <div className="grid grid-cols-12 border-b border-hairline/60 surface-chrome px-3 py-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
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
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
                className={`relative w-full grid grid-cols-12 items-center border-t border-hairline/40 px-3 py-2.5 text-left text-[12px] transition-colors ${
                  isSel ? 'bg-dv-blue/[0.06]' : 'hover:bg-white/40'
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
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-3 rounded-lg surface-glass px-3 py-2 text-[11px] flex items-center justify-between"
          >
            <span className="text-ink-muted">
              Selected · <span className="text-ink font-medium">{selected}</span>
            </span>
            <span className="text-ink-subtle">↳ press <kbd className="dv-pill">⌘O</kbd> to open mandate</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PipelineView() {
  const initial: Record<string, string[]> = {
    Origination: ['Meridian Foods', 'Caldera AI'],
    Pitching: ['Northwind', 'Brassica Ag'],
    'Pre-Mandate': ['Aurora Industries'],
    Mandate: ['Helix Therapeutics', 'Kestrel Capital', 'Talos Mfg'],
    Closed: ['Orbit Materials'],
  };
  const tone: Record<string, string> = {
    Origination: 'bg-dv-coral/15 border-dv-coral/30',
    Pitching: 'bg-dv-amber/15 border-dv-amber/30',
    'Pre-Mandate': 'bg-dv-violet/15 border-dv-violet/30',
    Mandate: 'bg-dv-blue/15 border-dv-blue/30',
    Closed: 'bg-dv-mint/15 border-dv-mint/30',
  };

  const [cards, setCards] = useState(initial);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Pipeline</div>
          <div className="text-xl font-semibold mt-1">9 mandates · drag cards to reorder</div>
        </div>
        <span className="dv-chip"><Plus className="size-3" /> New</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {Object.keys(cards).map((col) => (
          <div key={col} className="rounded-lg border border-hairline/60 surface-glass p-2 min-h-[260px]">
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle px-1">{col}</div>
            <Reorder.Group
              axis="y"
              values={cards[col]}
              onReorder={(next) => setCards((c) => ({ ...c, [col]: next }))}
              className="mt-2 space-y-1.5"
            >
              {cards[col].map((card) => (
                <Reorder.Item
                  key={card}
                  value={card}
                  className={`cursor-grab active:cursor-grabbing rounded-md border ${tone[col]} px-2 py-1.5 text-[11px] select-none`}
                  whileDrag={{ scale: 1.05, zIndex: 10, boxShadow: '0 20px 40px -16px rgba(16,16,18,0.30)' }}
                >
                  <div className="font-medium text-ink">{card}</div>
                  <div className="font-mono text-[10px] text-ink-muted">drag me ↕</div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        ))}
      </div>
    </div>
  );
}

function CounterpartiesView() {
  const all = [
    { name: 'Apollo Healthcare', tag: 'Strategic · Healthcare', mandates: 3, fav: true },
    { name: 'Genoptix', tag: 'Strategic · Healthcare', mandates: 2, fav: true },
    { name: 'Praxis Pharma', tag: 'Strategic · Healthcare', mandates: 1, fav: false },
    { name: 'Vela Partners', tag: 'Sponsor · Multi', mandates: 5, fav: true },
    { name: 'Northbridge Cap', tag: 'Sponsor · Industrials', mandates: 4, fav: false },
    { name: 'Crestone Equity', tag: 'Sponsor · FinServ', mandates: 2, fav: false },
  ];
  const [q, setQ] = useState('');
  const rows = all.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));

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
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
            className="rounded-full border border-hairline bg-raised pl-7 pr-3 py-1 text-[11px] focus:outline-none focus:border-dv-blue/40"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <AnimatePresence>
          {rows.map((r) => (
            <motion.button
              type="button"
              key={r.name}
              layout
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between rounded-lg border border-hairline/60 surface-glass px-3 py-2.5 text-left"
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
            </motion.button>
          ))}
        </AnimatePresence>
        {rows.length === 0 && (
          <div className="col-span-2 rounded-lg border border-dashed border-hairline px-3 py-4 text-center text-[11px] text-ink-subtle">
            No counterparties match &ldquo;{q}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
}

function KnowledgeView() {
  const sectors = ['Healthcare', 'Industrials', 'Consumer', 'FinServ', 'Energy'];
  const [sector, setSector] = useState('Healthcare');
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Knowledge</div>
          <div className="text-xl font-semibold mt-1">{sector} / Therapeutics</div>
        </div>
        <span className="dv-chip">18,420 docs indexed</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="col-span-1 rounded-lg border border-hairline/60 surface-glass p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Sectors</div>
          <ul className="mt-2 space-y-1 text-[12px]">
            {sectors.map((s) => (
              <li
                key={s}
                onClick={() => setSector(s)}
                className={`rounded px-1.5 py-0.5 cursor-pointer press ${
                  s === sector ? 'bg-dv-blue/10 text-dv-blue font-medium' : 'text-ink-muted hover:text-ink hover:bg-white/40'
                }`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 rounded-lg border border-hairline/60 surface-glass p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">{sector} · Memo</div>
          <p className="mt-2 text-[12px] leading-5 text-ink-muted">
            Live mandates in <span className="text-ink font-medium">{sector}</span>. Comps:{' '}
            <span className="rounded bg-dv-blue/10 px-1.5 py-0.5 font-mono text-dv-blue cursor-pointer hover:bg-dv-blue/15">[[Genoptix]]</span>,{' '}
            <span className="rounded bg-dv-violet/10 px-1.5 py-0.5 font-mono text-dv-violet cursor-pointer hover:bg-dv-violet/15">[[Praxis Pharma]]</span>.{' '}
            <span className="rounded bg-dv-coral/10 px-1.5 py-0.5 font-mono text-orange-300 cursor-pointer hover:bg-dv-coral/15">[[Apollo Healthcare]]</span> reviewing IM since 12 Feb.
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
  const [q, setQ] = useState('Which counterparties signed an NDA in Q1?');
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Ask</div>
          <div className="text-xl font-semibold mt-1">Grounded in your firm</div>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-hairline/60 surface-glass p-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full bg-transparent text-[13px] text-ink outline-none"
        />
        <div className="mt-3 rounded-lg surface-chrome p-3 text-[12px] leading-6">
          11 counterparties signed an NDA between Jan 1 and Mar 31:{' '}
          <span className="text-ink font-medium">Apollo Healthcare, Caldera AI, Genoptix, Kestrel Capital, Meridian Foods,</span>{' '}
          <span className="text-ink-muted">and 6 more.</span>
          <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">Sources · 11 mandate pages · 14 NDA docs</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {[
          'What did Helix\'s CFO say about valuation?',
          'Mandates past their median velocity',
          'NDAs expiring this month',
        ].map((s) => (
          <button key={s} onClick={() => setQ(s)} className="dv-chip text-ink-muted hover:text-ink">{s}</button>
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
    { d: 2, t: '10:00', label: 'Internal pipeline review', tone: 'bg-dv-mint/15 text-emerald-300' },
    { d: 3, t: '15:00', label: 'Northwind teaser pitch', tone: 'bg-dv-amber/15 text-amber-300' },
    { d: 4, t: '09:00', label: 'Meridian intro call', tone: 'bg-dv-coral/15 text-orange-300' },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">This week</div>
          <div className="text-xl font-semibold mt-1">6 calls · 3 mandates moving</div>
        </div>
        <span className="dv-chip"><Mail className="size-3" /> Google Workspace connected</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {days.map((day, i) => (
          <div key={day} className="rounded-lg border border-hairline/60 surface-glass p-2 min-h-[180px]">
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">{day}</div>
            <div className="mt-2 space-y-1.5">
              {events.filter((e) => e.d === i).map((e) => (
                <motion.div
                  key={e.t + e.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer rounded-md px-1.5 py-1 text-[10px] ${e.tone}`}
                >
                  <div className="font-mono">{e.t}</div>
                  <div className="font-medium leading-tight">{e.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
