import { Inbox, Users, Wrench } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, revealVariants } from '@/components/motion/reveal';

const items = [
  {
    icon: Inbox,
    title: 'Mandates live in inboxes',
    body: 'Excel trackers, scattered IMs, half-signed LOIs in someone\'s Outlook. The mandate is the asset — and it\'s nowhere.',
  },
  {
    icon: Users,
    title: 'Counterparty intel is tribal',
    body: 'Years of relationships, calls, and signed NDAs locked inside MDs\' heads. When they leave, it leaves.',
  },
  {
    icon: Wrench,
    title: 'Tools were built for SaaS, not IB',
    body: 'Salesforce and Pipedrive don\'t speak teaser, IM, LOI, retainer, or success fee. You bend the tool. The tool wins.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="dv-container">
        <Reveal>
          <span className="dv-eyebrow">The problem</span>
          <h2 className="mt-5 max-w-3xl text-display-2 text-balance">
            Banking runs on chaos. <span className="text-fg-muted">We fix that.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-fg-muted">
            Three reasons every IB firm we&apos;ve talked to lives in the same mess.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} variants={revealVariants} className="group dv-card relative overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -inset-x-8 -top-24 h-32 bg-glow-ring opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
              <Icon className="size-5 text-dv-glow" />
              <h3 className="mt-5 text-h3">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-fg-muted">{body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-dv-blue/40 via-dv-violet/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
