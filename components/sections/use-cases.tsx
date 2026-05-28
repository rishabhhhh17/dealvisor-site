import {
  Briefcase,
  TrendingUp,
  Building2,
  Banknote,
  ShieldCheck,
  HandshakeIcon,
} from 'lucide-react';
import { Reveal, Stagger, StaggerItem, revealVariants } from '@/components/motion/reveal';

const cases = [
  { icon: Briefcase, title: 'Cross-border M&A', body: 'Track counterparties across jurisdictions, IMs in two currencies, LOIs with multi-party signoffs.' },
  { icon: Banknote, title: 'Capital raise', body: 'Series C to growth equity. Stage-aware fees, retainer tracking, and stop-the-clock NDA reminders.' },
  { icon: TrendingUp, title: 'Sell-side advisory', body: 'Teaser → IM → LOI → SPA. Every counterparty has a status; every deck has a date.' },
  { icon: Building2, title: 'Buy-side mandates', body: 'Targets, dealbreakers, and rejection memos in one searchable workspace.' },
  { icon: ShieldCheck, title: 'Family office coverage', body: 'Quiet diligence, signed NDAs, and named-account histories your principals can read in 60 seconds.' },
  { icon: HandshakeIcon, title: 'Sponsor coverage', body: 'A relationship graph that survives associate turnover and MD job moves.' },
];

export function UseCases() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">Built for</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            Every mandate your firm runs.
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-ink-muted">
            One tool. No bending, no add-ons, no &ldquo;pretend a teaser is a Deal Stage 1.&rdquo;
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} variants={revealVariants}>
              <div className="dv-card h-full">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-hairline bg-elevated">
                  <Icon className="size-4 text-dv-blue" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
