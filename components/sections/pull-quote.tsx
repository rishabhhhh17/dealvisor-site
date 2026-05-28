import { Reveal } from '@/components/motion/reveal';

export function PullQuote() {
  return (
    <section className="relative py-24 lg:py-36 bg-surface border-y border-hairline">
      <div className="dv-container">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="dv-eyebrow">From the field</span>
            <blockquote className="mt-10 text-balance text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
              &ldquo;Finally a CRM that knows what a teaser is.
              We replaced two spreadsheets and an inbox folder in week one.&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-canvas text-[13px] font-semibold text-ink-muted border border-hairline">
                MR
              </span>
              <div className="text-left">
                <div className="text-sm font-medium text-ink">Director</div>
                <div className="text-xs text-ink-muted">M&amp;A, boutique advisory</div>
              </div>
            </figcaption>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
