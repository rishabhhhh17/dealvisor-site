'use client';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Marquee({
  items,
  className,
  renderItem,
  pauseOnHover = true,
}: {
  items: ReactNode[];
  className?: string;
  renderItem?: (item: ReactNode, i: number) => ReactNode;
  pauseOnHover?: boolean;
}) {
  const all = [...items, ...items];
  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      <div className={cn('flex w-max gap-12 animate-marquee', pauseOnHover && 'group-hover:[animation-play-state:paused]')}>
        {all.map((it, i) => (
          <div key={i} className="shrink-0">
            {renderItem ? renderItem(it, i) : it}
          </div>
        ))}
      </div>
    </div>
  );
}
