import { Reveal } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';

export function Credibility() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-hairline/70">
      <div className="dv-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="dv-eyebrow">Built by bankers, for bankers</span>
            <h2 className="mt-5 text-display-2 text-balance">
              <span className="text-grad-ink">Not a SaaS bet on a market.</span><br />
              <span className="text-grad-cool">An internal tool that worked.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lead text-ink-muted">
              DealVisor is the software{' '}
              <a className="underline decoration-ink-subtle/40 underline-offset-4 hover:text-ink" href="https://valencegrowth.com" target="_blank" rel="noreferrer">Valence Growth Partners</a>{' '}
              &mdash; a cross-border M&amp;A and capital raise advisory with offices in Mumbai and London &mdash; built to run its own mandates. 40+ live mandates ran on it before we opened it up.
            </p>
            <blockquote className="mt-8 border-l-2 border-dv-blue pl-5 text-balance">
              <p className="text-lg italic text-ink">
                &ldquo;We built this because nothing else spoke our language.&rdquo;
              </p>
              <footer className="mt-2 text-xs font-mono uppercase tracking-[0.14em] text-ink-subtle">
                — Founding team, Valence Growth Partners
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <SpotlightCard className="p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-subtle">Valence Growth Partners</div>
            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              {[
                ['2018', 'Founded'],
                ['Mumbai · London', 'Offices'],
                ['M&A · Capital', 'Practice'],
                ['Cross-border', 'Focus'],
              ].map(([v, k]) => (
                <div key={v}>
                  <div className="font-mono text-2xl text-grad-cool">{v}</div>
                  <div className="text-ink-muted text-xs mt-1">{k}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 dv-divider" />
            <p className="mt-6 text-xs leading-5 text-ink-muted">
              DealVisor sits alongside the firm&apos;s mandates &mdash; not on top of a hypothetical workflow. Every screen earned its place.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
