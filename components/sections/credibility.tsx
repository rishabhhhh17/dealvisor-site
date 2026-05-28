import { Reveal } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';

export function Credibility() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-hairline/70">
      <div className="dv-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="dv-eyebrow">Forged in real mandates</span>
            <h2 className="mt-5 text-display-2 text-balance">
              Not a SaaS bet on a market.{' '}
              <span className="text-grad-accent">A working tool.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lead text-ink-muted">
              DealVisor ran 40+ live cross-border M&amp;A and capital-raise mandates before we opened it up. Every screen survived a real banker yelling at it on a Monday morning.
            </p>
            <blockquote className="mt-8 border-l-2 border-dv-blue pl-5 text-balance">
              <p className="text-lg italic text-ink">
                &ldquo;The only visor you need for your deals.&rdquo;
              </p>
              <footer className="mt-2 text-xs font-mono uppercase tracking-[0.14em] text-ink-subtle">
                — Why we built this
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <SpotlightCard className="p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">By the numbers</div>
            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              {[
                ['40+', 'Live mandates run'],
                ['$2.4B', 'In conversations'],
                ['18K+', 'Docs indexed'],
                ['7', 'IB-native stages'],
              ].map(([v, k]) => (
                <div key={v}>
                  <div className="font-mono text-2xl text-grad-accent">{v}</div>
                  <div className="text-ink-muted text-xs mt-1">{k}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 dv-divider" />
            <p className="mt-6 text-xs leading-5 text-ink-muted">
              Built for IB by people who run mandates. No deal-flow vocabulary. No portfolios. Just teasers, IMs, LOIs, retainers, and the work in between.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
