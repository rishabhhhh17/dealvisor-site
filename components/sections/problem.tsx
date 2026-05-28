import { Inbox, Users, Wrench } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, revealVariants } from '@/components/motion/reveal';
import { SpotlightCard } from '@/components/motion/spotlight-card';

const items = [
  {
    icon: Inbox,
    title: 'Mandates live in inboxes',
    body: "Excel trackers, scattered IMs, half-signed LOIs in someone's Outlook. The mandate is the asset — and it's nowhere.",
    accent: 'text-dv-coral',
  },
  {
    icon: Users,
    title: 'Counterparty intel is tribal',
    body: "Years of relationships, calls, and signed NDAs locked inside MDs' heads. When they leave, it leaves.",
    accent: 'text-dv-blue',
  },
  {
    icon: Wrench,
    title: 'Tools built for SaaS, not IB',
    body: "Salesforce and Pipedrive don't speak teaser, IM, LOI, retainer, or success fee. You bend the tool. The tool wins.",
    accent: 'text-dv-violet',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">The problem</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            Banking runs on chaos.{' '}
            <span className="text-grad-accent">We fix that.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-ink-muted">
            Three reasons every IB firm we&apos;ve talked to lives in the same mess.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, body, accent }) => (
            <StaggerItem key={title} variants={revealVariants}>
              <SpotlightCard className="h-full p-6 lg:p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-hairline bg-elevated">
                  <Icon className={`size-4 ${accent}`} />
                </span>
                <h3 className="mt-5 text-h3">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{body}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-dv-coral/40 via-dv-blue/40 to-dv-violet/40" />
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
