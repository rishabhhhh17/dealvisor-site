'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/motion/reveal';
import {
  GitBranch,
  FileText,
  BookOpen,
  Sparkles,
  CalendarRange,
} from 'lucide-react';

const features = [
  {
    tag: 'Pipeline',
    icon: GitBranch,
    title: 'A pipeline that speaks IB.',
    body: 'Seven stages from Origination → Pitching → Pre-Mandate → Mandate → Closed. Drag to advance. Velocity benchmarks flag stale mandates before they go cold.',
    bullets: ['IB-native stages, not SaaS stages', 'Velocity alerts on stale mandates', 'Weighted success-fee analytics, separate from the homepage'],
  },
  {
    tag: 'Mandates',
    icon: FileText,
    title: 'One page per mandate. Everything on it.',
    body: 'Counterparties, NDAs, teasers, IMs, LOIs, retainers, success fees, recorded calls, follow-ups. The full life of a mandate, in one place.',
    bullets: ['Auto-imported Fathom transcripts', 'Counterparty-by-counterparty NDA status', 'Retainer + success-fee economics inline'],
  },
  {
    tag: 'Knowledge',
    icon: BookOpen,
    title: 'A wiki your firm actually uses.',
    body: '`[[wikilinks]]` between people, firms, and mandates. Hybrid lexical + pgvector search over every IM, teaser, and memo your firm has produced.',
    bullets: ['Hybrid search across docs and notes', 'Templates for sector and target profiles', 'Memos folded back into the mandate they came from'],
  },
  {
    tag: 'Ask',
    icon: Sparkles,
    title: 'Ask in plain English. Get cited answers.',
    body: '"Which counterparties signed an NDA in Q1?" "What did Helix\'s CFO say about valuation on the last call?" Gemini answers, with source links into the workspace.',
    bullets: ['Grounded in your firm\'s data, never the open web', 'Inline citations to documents and transcripts', 'Read-only — no autonomous actions'],
  },
  {
    tag: 'Workspace',
    icon: CalendarRange,
    title: 'Calendar, Drive, and Gmail — wired in.',
    body: 'Connect Google Workspace once. Every mandate page surfaces the relevant calls, docs, and threads. No more switching between five tabs to brief one meeting.',
    bullets: ['Pre-meeting briefs from past interactions', 'IMs and NDAs pulled directly from Drive', 'Email threads attached to the counterparty, not the inbox'],
  },
];

export function ProductShowcase() {
  return (
    <section id="product" className="relative py-24 lg:py-32">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">The product</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            Everything an IB firm needs.<br />
            <span className="text-fg-muted">Nothing it doesn&apos;t.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 lg:mt-24">
        {features.map((f, i) => (
          <FeatureBlock key={f.tag} feature={f} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function FeatureBlock({ feature, reverse }: { feature: (typeof features)[number]; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const Icon = feature.icon;

  return (
    <div ref={ref} className="dv-container py-16 lg:py-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        <div>
          <Reveal>
            <div className="flex items-center gap-2">
              <Icon className="size-4 text-dv-glow" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">{feature.tag}</span>
            </div>
            <h3 className="mt-4 text-display-2 text-balance">{feature.title}</h3>
            <p className="mt-5 max-w-lg text-lead text-fg-muted">{feature.body}</p>
            <ul className="mt-7 space-y-2.5">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-fg-muted">
                  <span className="mt-2 inline-block size-1 rounded-full bg-dv-blue shadow-[0_0_8px_2px_rgba(79,124,255,0.5)]" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <motion.div style={{ y }} className="relative">
          <div aria-hidden className="pointer-events-none absolute -inset-12 bg-glow-ring opacity-60 blur-3xl" />
          <div className="relative rounded-2xl border border-hairline bg-panel shadow-card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-hairline bg-panel/80 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/15" />
              </div>
              <div className="ml-3 font-mono text-[10px] text-fg-subtle">app.dealvisor.com / {feature.tag.toLowerCase()}</div>
            </div>
            <FeatureMock tag={feature.tag} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureMock({ tag }: { tag: string }) {
  if (tag === 'Pipeline') {
    const cols = ['Origination', 'Pitching', 'Pre-Mandate', 'Mandate', 'Closed'];
    const cards: Record<string, string[]> = {
      Origination: ['Meridian Foods', 'Caldera AI'],
      Pitching: ['Northwind', 'Brassica Ag'],
      'Pre-Mandate': ['Aurora Industries'],
      Mandate: ['Helix Therapeutics', 'Kestrel Capital', 'Talos Mfg'],
      Closed: ['Orbit Materials'],
    };
    return (
      <div className="grid grid-cols-5 gap-2 p-3 bg-canvas min-h-[280px]">
        {cols.map((c) => (
          <div key={c} className="rounded-lg border border-hairline bg-panel/50 p-2">
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-fg-subtle">{c}</div>
            <div className="mt-2 space-y-1.5">
              {cards[c].map((card) => (
                <div key={card} className="rounded-md border border-hairline bg-panel px-2 py-1.5 text-[11px]">
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (tag === 'Mandates') {
    return (
      <div className="bg-canvas p-5 min-h-[280px]">
        <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-fg-subtle">Helix Therapeutics · Mandate</div>
        <div className="mt-1 text-lg font-semibold">$340M minority capital raise</div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
          {[
            ['Retainer', '$120K'],
            ['Success fee', '2.4%'],
            ['Counterparties', '14'],
            ['NDAs signed', '11'],
            ['LOIs', '3'],
            ['Stage', 'Mandate'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-hairline bg-panel/50 p-2.5">
              <div className="text-fg-subtle font-mono uppercase tracking-[0.12em] text-[9px]">{k}</div>
              <div className="mt-0.5 font-medium">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-hairline bg-panel/50 p-3 text-[11px] text-fg-muted">
          <span className="font-mono text-[10px] text-fg-subtle">FATHOM · 03 MAR</span> — CFO open to revised IM if pre-money trims by 8%. Wants term sheet by Friday.
        </div>
      </div>
    );
  }
  if (tag === 'Knowledge') {
    return (
      <div className="bg-canvas p-5 min-h-[280px] grid grid-cols-3 gap-3">
        <div className="col-span-1 rounded-lg border border-hairline bg-panel/50 p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-fg-subtle">Sectors</div>
          <ul className="mt-2 space-y-1 text-[12px]">
            {['Healthcare', 'Industrials', 'Consumer', 'FinServ', 'Energy'].map((s) => (
              <li key={s} className="text-fg-muted hover:text-fg cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 rounded-lg border border-hairline bg-panel/50 p-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-fg-subtle">Healthcare / Therapeutics</div>
          <div className="mt-2 text-[12px] leading-5 text-fg-muted">
            Helix is a Series C biologics platform. Comparables: <span className="text-dv-glow">[[Genoptix]]</span>, <span className="text-dv-glow">[[Praxis Pharma]]</span>. Recent IM circulated to <span className="text-dv-glow">[[Apollo Healthcare]]</span> on 12 Feb.
          </div>
        </div>
      </div>
    );
  }
  if (tag === 'Ask') {
    return (
      <div className="bg-canvas p-5 min-h-[280px]">
        <div className="rounded-lg border border-hairline bg-panel/60 p-3 text-[12px] text-fg-muted">
          Which counterparties signed an NDA in Q1?
        </div>
        <div className="mt-3 rounded-lg border border-hairline bg-panel p-4 text-[12px] leading-6">
          <div className="text-fg">
            11 counterparties signed an NDA between Jan 1 and Mar 31:
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-fg-muted">
            <li>Apollo Healthcare</li>
            <li>Caldera AI</li>
            <li>Genoptix</li>
            <li>Kestrel Capital</li>
            <li>Meridian Foods</li>
            <li>+ 6 more</li>
          </ul>
          <div className="mt-3 text-[10px] font-mono text-fg-subtle">Sources · 11 mandate pages · 14 NDA docs</div>
        </div>
      </div>
    );
  }
  // Workspace
  return (
    <div className="bg-canvas p-5 min-h-[280px] grid grid-cols-2 gap-3">
      <div className="rounded-lg border border-hairline bg-panel/50 p-3">
        <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-fg-subtle">Today · Calendar</div>
        <ul className="mt-2 space-y-1.5 text-[11px]">
          {[
            ['09:30', 'Helix CFO follow-up'],
            ['11:00', 'Aurora IM walkthrough'],
            ['14:00', 'Kestrel — LOI review'],
            ['16:30', 'Internal pipeline review'],
          ].map(([t, l]) => (
            <li key={t} className="flex gap-2">
              <span className="font-mono text-fg-subtle w-10">{t}</span>
              <span className="text-fg-muted">{l}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-hairline bg-panel/50 p-3">
        <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-fg-subtle">Drive · Helix Mandate</div>
        <ul className="mt-2 space-y-1 text-[11px] text-fg-muted">
          <li>📄 IM_Helix_v3.pdf</li>
          <li>📄 NDA_Apollo.pdf</li>
          <li>📄 LOI_Genoptix.docx</li>
          <li>📄 Teaser_Helix.pdf</li>
        </ul>
      </div>
    </div>
  );
}
