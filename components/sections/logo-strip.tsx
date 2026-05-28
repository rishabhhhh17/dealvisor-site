import { Reveal } from '@/components/motion/reveal';

const firms = [
  'Northbridge Capital',
  'Arclight Partners',
  'Helios Advisory',
  'Crescent IB',
  'Saffron Securities',
  'Meridian Growth',
];

export function LogoStrip() {
  return (
    <section className="relative border-y border-hairline bg-surface/60">
      <div className="dv-container py-12 lg:py-14">
        <Reveal>
          <div className="text-center text-[11px] font-mono uppercase tracking-[0.18em] text-ink-subtle">
            Trusted by teams running mandates at boutique advisories
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-y-6 gap-x-8">
            {firms.map((f) => (
              <div
                key={f}
                className="flex items-center justify-center text-center text-[15px] font-semibold tracking-tight text-ink-subtle hover:text-ink transition-colors"
              >
                {f}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
