'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wordmark } from '@/components/ui/wordmark';
import { Magnetic } from '@/components/motion/magnetic';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-hairline/80 bg-canvas/70 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <div className="dv-container flex h-16 items-center justify-between">
        <Link href="/" aria-label="DealVisor">
          <Wordmark />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#pricing" className="hidden sm:inline-flex dv-btn-ghost text-xs">Sign in</a>
          <Magnetic strength={0.25}>
            <a href="#pricing" className="dv-btn-primary text-xs">Book demo</a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
