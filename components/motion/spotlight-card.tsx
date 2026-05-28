'use client';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Card that runs a local cursor spotlight behind its content.
 * Use as a wrapper around any content; the card sets local --mx/--my vars.
 */
export function SpotlightCard({
  children,
  className,
  spotlightClassName,
}: {
  children: ReactNode;
  className?: string;
  spotlightClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-hairline bg-surface/80 backdrop-blur shadow-card transition-transform duration-300',
        'hover:-translate-y-0.5',
        className,
      )}
    >
      {/* local spotlight */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          spotlightClassName,
        )}
        style={{
          background:
            'radial-gradient(280px circle at var(--mx) var(--my), rgba(79,124,255,0.18), rgba(167,139,250,0.10) 35%, transparent 70%)',
        }}
      />
      {/* shimmer border */}
      <span aria-hidden className="shimmer-border absolute inset-0 rounded-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
