import { Reveal } from '@/components/motion/reveal';

const stats = [
  { value: '47', label: 'Active mandates run' },
  { value: '$2.4B', label: 'Counterparty conversations' },
  { value: '18,000+', label: 'Documents indexed' },
  { value: '40+', label: 'Live mandates inside Valence' },
];

export function StatStrip() {
  return (
    <section className="relative border-y border-hairline bg-panel/30">
      <div className="dv-container py-10 lg:py-12">
        <Reveal>
          <div className="text-center text-[11px] font-mono uppercase tracking-[0.18em] text-fg-subtle">
            Built and battle-tested on real cross-border M&amp;A
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="font-mono text-3xl lg:text-4xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1.5 text-xs text-fg-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
