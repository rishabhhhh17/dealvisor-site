import { Reveal, Stagger, StaggerItem, revealVariants } from '@/components/motion/reveal';

const steps = [
  {
    n: '01',
    title: 'Connect',
    body: 'Plug in Google Workspace and your meeting recorder in two clicks. Bring your existing pipeline as a CSV.',
  },
  {
    n: '02',
    title: 'Centralize',
    body: 'Every mandate, counterparty, IM, LOI, and recorded call lives in one searchable workspace.',
  },
  {
    n: '03',
    title: 'Act',
    body: 'AI follow-ups, velocity alerts on stale mandates, and win-rate analytics for the team.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">How it works</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            From scattered to running, in a week.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10" gap={0.1}>
          {steps.map((s, i) => (
            <StaggerItem key={s.n} variants={revealVariants} className="relative">
              <div className="font-mono text-7xl lg:text-8xl font-semibold bg-gradient-to-br from-dv-glow via-dv-blue to-dv-violet bg-clip-text text-transparent">
                {s.n}
              </div>
              <h3 className="mt-4 text-h3">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-hairline to-transparent" />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
