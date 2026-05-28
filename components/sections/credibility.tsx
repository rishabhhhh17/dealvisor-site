import { Reveal } from '@/components/motion/reveal';

export function Credibility() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="dv-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="dv-eyebrow">Built by bankers, for bankers</span>
            <h2 className="mt-5 text-display-2 text-balance">
              Not a SaaS bet on a market.<br />
              <span className="text-fg-muted">An internal tool that worked.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lead text-fg-muted">
              DealVisor is the software <a className="underline decoration-fg-subtle/50 underline-offset-4 hover:text-fg" href="https://valencegrowth.com" target="_blank" rel="noreferrer">Valence Growth Partners</a> &mdash; a cross-border M&amp;A and capital raise advisory with offices in Mumbai and London &mdash; built to run its own mandates. 40+ live mandates ran on it before we opened it up.
            </p>
            <blockquote className="mt-8 border-l-2 border-dv-blue pl-5 text-balance">
              <p className="text-lg italic text-fg">
                &ldquo;We built this because nothing else spoke our language.&rdquo;
              </p>
              <footer className="mt-2 text-xs font-mono uppercase tracking-[0.14em] text-fg-subtle">
                — Founding team, Valence Growth Partners
              </footer>
            </blockquote>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute -inset-10 bg-glow-ring opacity-40 blur-3xl" />
            <div className="relative rounded-2xl border border-hairline bg-panel/70 p-8 shadow-card">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">Valence Growth Partners</div>
              <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
                <div>
                  <div className="font-mono text-2xl">2018</div>
                  <div className="text-fg-muted text-xs mt-1">Founded</div>
                </div>
                <div>
                  <div className="font-mono text-2xl">Mumbai · London</div>
                  <div className="text-fg-muted text-xs mt-1">Offices</div>
                </div>
                <div>
                  <div className="font-mono text-2xl">M&amp;A · Capital</div>
                  <div className="text-fg-muted text-xs mt-1">Practice</div>
                </div>
                <div>
                  <div className="font-mono text-2xl">Cross-border</div>
                  <div className="text-fg-muted text-xs mt-1">Focus</div>
                </div>
              </div>
              <div className="mt-8 dv-divider" />
              <p className="mt-6 text-xs leading-5 text-fg-muted">
                DealVisor sits alongside the firm&apos;s mandates &mdash; not on top of a hypothetical workflow. Every screen earned its place.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
