'use client';
import { useState } from 'react';
import { AnimatePresence, motion, Reorder } from 'framer-motion';
import {
  LayoutGrid,
  Briefcase,
  Activity,
  BookOpen,
  CalendarRange,
  BarChart3,
  Users,
  TrendingUp,
  FolderOpen,
  Search,
  Bell,
  PanelLeft,
  Sparkles,
  Plus,
  Filter,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

type Tab = 'today' | 'deals' | 'mandates' | 'knowledge' | 'calendar';

const NAV: { id: Tab; label: string; icon: typeof LayoutGrid; badge?: number }[] = [
  { id: 'today', label: 'Today', icon: LayoutGrid },
  { id: 'deals', label: 'Deal Logger', icon: Briefcase, badge: 7 },
  { id: 'mandates', label: 'Live Mandates', icon: Activity, badge: 3 },
  { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
  { id: 'calendar', label: 'Team Calendar', icon: CalendarRange },
];

export function InteractiveAppMock() {
  const [tab, setTab] = useState<Tab>('deals');

  return (
    <div className="relative rounded-2xl overflow-hidden bg-surface border border-hairline shadow-card">
      {/* top bar */}
      <div className="flex items-center gap-3 border-b border-hairline bg-surface px-4 py-3">
        <button type="button" className="rounded-md p-1 text-ink-muted hover:bg-elevated press" title="Toggle sidebar">
          <PanelLeft className="size-4" />
        </button>
        <span className="text-[13px] font-semibold text-ink">{labelFor(tab)}</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-hairline bg-canvas px-3 py-1.5 text-[11px] text-ink-subtle">
            <Search className="size-3" />
            <span>Search deals, memos, people…</span>
            <kbd className="ml-2 rounded border border-hairline bg-surface px-1 py-px font-mono text-[9px]">⌘K</kbd>
          </div>
          <button type="button" className="rounded-md p-1.5 text-ink-muted hover:bg-elevated press" title="Notifications">
            <Bell className="size-3.5" />
          </button>
          <button type="button" className="hidden sm:inline-flex dv-pill gap-1 hover:bg-elevated press" title="Tour">
            <HelpCircle className="size-3" /> Tour
          </button>
          <button type="button" className="hidden sm:inline-flex dv-pill gap-1 hover:bg-elevated press" title="Currency">
            <span className="font-mono">$ USD</span> <ChevronDown className="size-3" />
          </button>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas pl-1 pr-3 py-1">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-dv-blue text-[10px] font-semibold text-white">IV</span>
            <span className="text-[11px] font-medium text-ink">Intern VGP</span>
            <span className="size-1.5 rounded-full bg-dv-mint" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[520px]">
        {/* sidebar */}
        <aside className="col-span-3 border-r border-hairline bg-canvas/60 p-3 hidden md:flex flex-col">
          <div className="px-2 py-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Workspace</div>
          <ul className="space-y-0.5">
            {NAV.map(({ id, label, icon: Icon, badge }) => {
              const active = tab === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setTab(id)}
                    className={`relative w-full text-left flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors press ${
                      active ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink hover:bg-elevated'
                    }`}
                  >
                    <Icon className={`size-3.5 ${active ? 'text-white' : 'text-ink-subtle'}`} />
                    <span className="flex-1">{label}</span>
                    {badge && (
                      <span className={`rounded-full px-1.5 py-px text-[9px] font-medium ${active ? 'bg-white/15 text-white' : 'bg-elevated text-ink-muted'}`}>
                        {badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 px-2 py-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Relationships</div>
          <ul className="space-y-0.5">
            {[
              { icon: Users, label: 'Interactions', badge: 7 },
              { icon: TrendingUp, label: 'People' },
              { icon: FolderOpen, label: 'Firm' },
            ].map((r) => (
              <li key={r.label}>
                <button type="button" className="w-full text-left flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm text-ink-muted hover:text-ink hover:bg-elevated press">
                  <r.icon className="size-3.5 text-ink-subtle" />
                  <span className="flex-1">{r.label}</span>
                  {r.badge && <span className="rounded-full bg-elevated px-1.5 py-px text-[9px] font-medium text-ink-muted">{r.badge}</span>}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4 flex items-center justify-between px-2 text-[11px] text-ink-subtle">
            <div className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-dv-blue" />
              <span>Mumbai</span>
            </div>
            <button type="button" className="rounded-full bg-ink text-white px-2.5 py-1 text-[11px] inline-flex items-center gap-1 press">
              <Sparkles className="size-3" /> Ask
            </button>
          </div>
        </aside>

        {/* main panel */}
        <div className="col-span-12 md:col-span-9 p-6 lg:p-8 bg-canvas/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {tab === 'today' && <TodayView />}
              {tab === 'deals' && <DealLoggerView />}
              {tab === 'mandates' && <LiveMandatesView />}
              {tab === 'knowledge' && <KnowledgeView />}
              {tab === 'calendar' && <CalendarView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function labelFor(t: Tab) {
  return {
    today: 'Today',
    deals: 'Deal Logger',
    mandates: 'Live Mandates',
    knowledge: 'Knowledge',
    calendar: 'Team Calendar',
  }[t];
}

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

function DealLoggerView() {
  const initial: Record<string, { firm: string; size: string }[]> = {
    Origination: [{ firm: 'Arclight Capital', size: '' }, { firm: 'Crescent Pharma', size: '$150M' }],
    Pitching: [{ firm: 'Helios Infra', size: '$150M' }],
    'Pre-Mandate': [{ firm: 'Quantum Edge', size: '$80M' }, { firm: 'BluePeak Logistics', size: '$25M' }],
    Mandate: [{ firm: 'Nimbus Health', size: '$80M' }, { firm: 'Saffron Studios', size: '$40M' }],
    Closed: [{ firm: 'Meridian Energy', size: '$400M' }],
  };

  const [cards, setCards] = useState(initial);

  return (
    <div>
      <div>
        <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Deal Logger</div>
        <div className="text-[28px] font-semibold mt-1 tracking-tight">Every live conversation.</div>
      </div>

      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Active mandates', value: 7, sub: 'Engaged through Mandate', icon: TrendingUp, active: true },
          { label: 'In Origination', value: 2, sub: 'Talks have started', icon: Briefcase },
          { label: 'In Pre-Mandate', value: 2, sub: 'Paperwork underway', icon: Activity },
          { label: 'Closed', value: 1, sub: 'All-time wins', icon: FolderOpen },
        ].map((s) => (
          <motion.button
            type="button"
            key={s.label}
            whileHover={{ y: -2 }}
            className={`text-left rounded-2xl border p-4 transition-all ${s.active ? 'border-dv-blue/30 bg-stage-pre-mandate/40 ring-accent' : 'border-hairline bg-surface'}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-subtle">{s.label}</div>
              <s.icon className="size-3.5 text-ink-subtle" />
            </div>
            <div className="mt-3 text-3xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-[11px] text-ink-muted">{s.sub}</div>
          </motion.button>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-hairline bg-surface p-3">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-ink-subtle" />
            <input
              placeholder="Search by client, sector, lead, or notes…"
              className="w-full rounded-full border border-hairline bg-canvas pl-8 pr-3 py-1.5 text-[12px] placeholder:text-ink-subtle focus:outline-none focus:border-dv-blue/40"
            />
          </div>
          {['Stage', 'Type', 'Subtype', 'NDA'].map((f) => (
            <button
              key={f}
              type="button"
              className="col-span-6 md:col-span-2 flex items-center justify-between rounded-full border border-hairline bg-canvas px-3 py-1.5 text-[11px] text-ink-muted hover:text-ink press"
            >
              <span className="inline-flex items-center gap-1.5">
                <Filter className="size-3" />
                <span className="font-mono uppercase tracking-[0.1em] text-[10px]">{f}</span>
                <span className="text-ink">All</span>
              </span>
              <ChevronDown className="size-3" />
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-full border border-hairline bg-canvas p-0.5">
            <button className="rounded-full bg-surface px-2.5 py-1 text-[11px] inline-flex items-center gap-1.5 shadow-card">
              <LayoutGrid className="size-3" /> Board
            </button>
            <button className="rounded-full px-2.5 py-1 text-[11px] inline-flex items-center gap-1.5 text-ink-muted press">
              <BarChart3 className="size-3" /> Table
            </button>
          </div>
          <button type="button" className="dv-chip"><span>Export</span></button>
          <button type="button" className="dv-chip dv-chip-active"><Plus className="size-3" /> New deal</button>
          <button type="button" className="dv-chip">Advanced</button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-hairline bg-surface p-4">
        <div className="flex items-center justify-between">
          <div className="text-[12px]">
            <span className="font-semibold">{Object.values(cards).reduce((a, b) => a + b.length, 0)}</span>
            <span className="text-ink-muted"> mandates across </span>
            <span className="font-semibold">{STAGES.length}</span>
            <span className="text-ink-muted"> stages</span>
          </div>
          <span className="dv-pill">→ Drag to advance</span>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2 overflow-x-auto">
          {STAGES.map((col) => (
            <div key={col} className={`rounded-lg border border-hairline ${STAGE_BG[col]} p-2 min-h-[200px]`}>
              <div className="flex items-center justify-between px-1">
                <div className="inline-flex items-center gap-1.5">
                  <span className={`size-1.5 rounded-full ${STAGE_DOT[col]}`} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-muted">{col}</span>
                </div>
                <span className="font-mono text-[10px] text-ink-subtle">{cards[col].length}</span>
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
                    className="cursor-grab active:cursor-grabbing rounded-md border border-hairline bg-surface px-2.5 py-2 select-none shadow-card"
                    whileDrag={{ scale: 1.05, zIndex: 10, boxShadow: '0 20px 40px -16px rgba(15,23,42,0.25)' }}
                  >
                    <div className="font-medium text-[12px] text-ink">{card.firm}</div>
                    {card.size && <div className="font-mono text-[10px] text-ink-muted mt-0.5">{card.size}</div>}
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TodayView() {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Today</div>
      <div className="text-[28px] font-semibold mt-1 tracking-tight">Mandates moving today.</div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { firm: 'Helix Therapeutics', note: 'CFO open to revised IM if pre-money trims 8%', tone: 'bg-stage-mandate' },
          { firm: 'Aurora Industries', note: 'NDA signed by 2 more counterparties', tone: 'bg-stage-pre-mandate' },
          { firm: 'Northwind Logistics', note: 'Past median velocity by 12 days', tone: 'bg-stage-pitching' },
        ].map((c) => (
          <div key={c.firm} className={`rounded-2xl border border-hairline ${c.tone} p-4`}>
            <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-ink-subtle">In progress</div>
            <div className="mt-2 text-[14px] font-semibold">{c.firm}</div>
            <div className="mt-2 text-[12px] text-ink-muted leading-5">{c.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LiveMandatesView() {
  const rows = [
    { firm: 'Helix Therapeutics', stage: 'Mandate', sector: 'Healthcare', size: '$340M', counter: 14 },
    { firm: 'Kestrel Capital', stage: 'Mandate', sector: 'FinServ', size: '$210M', counter: 11 },
    { firm: 'Aurora Industries', stage: 'Pre-Mandate', sector: 'Industrials', size: '$120M', counter: 7 },
  ];
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Live Mandates</div>
      <div className="text-[28px] font-semibold mt-1 tracking-tight">3 mandates engaged.</div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-hairline bg-surface">
        <div className="grid grid-cols-12 border-b border-hairline bg-elevated px-3 py-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
          <span className="col-span-4">Counterparty</span>
          <span className="col-span-3">Stage</span>
          <span className="col-span-2">Sector</span>
          <span className="col-span-2 text-right">Size</span>
          <span className="col-span-1 text-right">Cp</span>
        </div>
        {rows.map((r) => (
          <div key={r.firm} className="grid grid-cols-12 items-center border-t border-hairline px-3 py-2.5 text-[12px] hover:bg-elevated">
            <span className="col-span-4 font-medium">{r.firm}</span>
            <span className="col-span-3 text-ink-muted inline-flex items-center gap-1.5">
              <span className={`size-1.5 rounded-full ${STAGE_DOT[r.stage]}`} />
              {r.stage}
            </span>
            <span className="col-span-2 text-ink-muted">{r.sector}</span>
            <span className="col-span-2 text-right font-mono">{r.size}</span>
            <span className="col-span-1 text-right font-mono text-ink-muted">{r.counter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowledgeView() {
  const sectors = ['Healthcare', 'Industrials', 'Consumer', 'FinServ', 'Energy'];
  const [sector, setSector] = useState('Healthcare');
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Knowledge</div>
      <div className="text-[28px] font-semibold mt-1 tracking-tight">{sector} memos &amp; comps.</div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="col-span-1 rounded-2xl border border-hairline bg-surface p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle px-1">Sectors</div>
          <ul className="mt-2 space-y-0.5 text-[12px]">
            {sectors.map((s) => (
              <li
                key={s}
                onClick={() => setSector(s)}
                className={`rounded-md px-2 py-1 cursor-pointer press ${s === sector ? 'bg-ink text-white' : 'text-ink-muted hover:bg-elevated'}`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 rounded-2xl border border-hairline bg-surface p-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">{sector} / Therapeutics · Memo</div>
          <p className="mt-2 text-[12px] leading-5 text-ink-muted">
            Series C biologics platform. Comps:{' '}
            <span className="rounded bg-stage-mandate px-1.5 py-0.5 font-mono text-dv-blue cursor-pointer">[[Genoptix]]</span>,{' '}
            <span className="rounded bg-stage-pre-mandate px-1.5 py-0.5 font-mono text-dv-indigo cursor-pointer">[[Praxis Pharma]]</span>.{' '}
            <span className="rounded bg-stage-pitching px-1.5 py-0.5 font-mono text-amber-700 cursor-pointer">[[Apollo Healthcare]]</span> reviewing IM since 12 Feb.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
            <span>Linked</span>
            <span className="text-ink-muted normal-case tracking-normal">· 6 docs · 14 calls · 3 LOIs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarView() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const events: { d: number; t: string; label: string; tone: string }[] = [
    { d: 0, t: '09:30', label: 'Helix CFO follow-up', tone: 'bg-stage-mandate text-dv-blue' },
    { d: 0, t: '14:00', label: 'Aurora IM walkthrough', tone: 'bg-stage-pre-mandate text-dv-indigo' },
    { d: 1, t: '11:00', label: 'Kestrel LOI review', tone: 'bg-stage-mandate text-dv-blue' },
    { d: 2, t: '10:00', label: 'Pipeline review', tone: 'bg-stage-closed text-emerald-700' },
    { d: 3, t: '15:00', label: 'Northwind teaser', tone: 'bg-stage-pitching text-amber-700' },
    { d: 4, t: '09:00', label: 'Meridian intro', tone: 'bg-stage-origination text-amber-700' },
  ];
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">Team Calendar</div>
      <div className="text-[28px] font-semibold mt-1 tracking-tight">6 calls · 3 mandates moving.</div>
      <div className="mt-5 grid grid-cols-5 gap-2">
        {days.map((day, i) => (
          <div key={day} className="rounded-2xl border border-hairline bg-surface p-2 min-h-[200px]">
            <div className="px-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-subtle">{day}</div>
            <div className="mt-2 space-y-1.5">
              {events.filter((e) => e.d === i).map((e) => (
                <motion.div key={e.t + e.label} whileHover={{ y: -2 }} className={`cursor-pointer rounded-md px-2 py-1 text-[10px] ${e.tone}`}>
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
