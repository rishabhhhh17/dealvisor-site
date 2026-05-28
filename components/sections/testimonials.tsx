import { Reveal, Stagger, StaggerItem, revealVariants } from '@/components/motion/reveal';

const quotes = [
  {
    quote: "Finally a CRM that knows what a teaser is. We replaced two spreadsheets and an inbox folder in week one.",
    name: "Director",
    role: "M&A, boutique advisory",
    initials: "MR",
  },
  {
    quote: "The wiki saved me six hours on every new mandate. I stopped asking my MD for context — it was already there.",
    name: "Associate",
    role: "Capital markets",
    initials: "PA",
  },
  {
    quote: "Velocity alerts told us a mandate had gone cold three weeks before the partner noticed. That alone paid for the year.",
    name: "VP",
    role: "Healthcare coverage",
    initials: "SN",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-hairline">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">From the field</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            What bankers say when they stop bending the tool.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4" gap={0.1}>
          {quotes.map((q) => (
            <StaggerItem key={q.quote} variants={revealVariants}>
              <figure className="dv-card h-full flex flex-col">
                <blockquote className="text-[15px] leading-7 text-ink">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-canvas text-[12px] font-semibold text-ink-muted border border-hairline">
                    {q.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">{q.name}</div>
                    <div className="text-xs text-ink-muted">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
