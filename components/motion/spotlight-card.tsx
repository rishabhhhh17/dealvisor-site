'use client';
import { useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SpotlightCard({
  children,
  className,
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
      className={cn(
        'relative overflow-hidden rounded-2xl border border-hairline bg-surface transition-shadow duration-200 hover:shadow-card-hover press shadow-card',
        className,
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </As>
  );
}
