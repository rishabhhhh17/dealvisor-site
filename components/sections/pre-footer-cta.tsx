import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function PreFooterCTA() {
  return (
    <section className="relative">
      <div className="dv-container py-8">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white px-8 py-16 lg:px-16 lg:py-24">
          {/* subtle wash glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-20 -bottom-32 h-72 blur-3xl opacity-50"
            style={{
              background:
                'radial-gradient(50% 50% at 30% 60%, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%), radial-gradient(40% 40% at 70% 40%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 70%)',
            }}
          />
          {/* faint grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
              maskImage: 'radial-gradient(70% 70% at 50% 50%, black 30%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(70% 70% at 50% 50%, black 30%, transparent 90%)',
            }}
          />

          <div className="relative max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                <span className="size-1.5 rounded-full bg-dv-glow" />
                Ready when you are
              </span>
              <h2 className="mt-6 text-[2.5rem] sm:text-[3rem] lg:text-[4rem] leading-[1] font-semibold tracking-[-0.035em] text-balance">
                Retire the spreadsheet.<br />
                <span className="text-white/55">Run the mandate.</span>
              </h2>
              <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed">
                Book a 30-minute walkthrough on a live workspace. We&apos;ll show you how a real mandate moves through DealVisor &mdash; from teaser to SPA.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-px press"
                >
                  Book a demo <ArrowRight className="size-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 press"
                >
                  Read the FAQ
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
