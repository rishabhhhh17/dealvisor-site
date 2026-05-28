'use client';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Chrome/glass card with cursor-tracked spotlight + shimmer border on hover.
 * Acts as the universal surface for interactive panels.
 */
export function SpotlightCard({
  children,
  className,
  spotlightClassName,
  as: As = 'div',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  spotlightClassName?: string;
  as?: 'div' | 'button';
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <As
      ref={ref as never}
      onClick={onClick}
      onPointerMove={(e: React.PointerEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        el.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
      className={cn(
        'group relative overflow-hidden rounded-2xl transition-transform duration-300',
        'hover:-translate-y-0.5 press',
        // chrome surface
        '[background:linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.56)_100%)]',
        '[border:1px_solid_rgba(255,255,255,0.7)]',
        '[backdrop-filter:blur(14px)_saturate(140%)]',
        '[-webkit-backdrop-filter:blur(14px)_saturate(140%)]',
        '[box-shadow:0_1px_0_0_rgba(255,255,255,0.9)_inset,0_-1px_0_0_rgba(16,16,18,0.05)_inset,0_0_0_1px_rgba(16,16,18,0.05),0_24px_48px_-24px_rgba(16,16,18,0.20),0_6px_18px_-10px_rgba(41,80,242,0.10)]',
        'hover:[box-shadow:0_1px_0_0_rgba(255,255,255,0.95)_inset,0_0_0_1px_rgba(41,80,242,0.16),0_30px_56px_-26px_rgba(16,16,18,0.28),0_10px_24px_-12px_rgba(41,80,242,0.20)]',
        className,
      )}
    >
      {/* spotlight */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          spotlightClassName,
        )}
        style={{
          background:
            'radial-gradient(320px circle at var(--mx) var(--my), rgba(41,80,242,0.16), rgba(124,92,255,0.10) 35%, transparent 70%)',
        }}
      />
      {/* specular top-edge highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
      />
      {/* shimmer border on hover */}
      <span aria-hidden className="shimmer-border absolute inset-0 rounded-2xl" />
      <div className="relative z-10 h-full">{children}</div>
    </As>
  );
}
