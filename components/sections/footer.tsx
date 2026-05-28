import { Wordmark } from '@/components/ui/wordmark';

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Pipeline', href: '#product' },
      { label: 'Mandates', href: '#product' },
      { label: 'Knowledge', href: '#product' },
      { label: 'Ask', href: '#product' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Valence Growth Partners', href: 'https://valencegrowth.com' },
      { label: 'Book a demo', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Data residency', href: '#faq' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-hairline/70">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-dv-blue/50 to-transparent" />
      <div className="dv-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm text-ink-muted">
              The operating system for investment banking. Run every mandate &mdash; from teaser to SPA &mdash; in one workspace.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">{c.title}</div>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-ink-muted hover:text-ink transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 dv-divider" />
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-ink-subtle">
          <span>© 2026 Valence Growth Partners</span>
          <span className="text-grad-cool">Made in Mumbai · London</span>
        </div>
      </div>
    </footer>
  );
}
