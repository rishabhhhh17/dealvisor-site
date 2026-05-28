import { cn } from '@/lib/utils';

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-sans text-fg', className)}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9.5" stroke="url(#g1)" strokeWidth="1.2" />
        <circle cx="11" cy="11" r="4" fill="url(#g2)" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="22" y2="22">
            <stop offset="0%" stopColor="#4F7CFF" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="22" y2="22">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#4F7CFF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">DealVisor</span>
    </div>
  );
}
