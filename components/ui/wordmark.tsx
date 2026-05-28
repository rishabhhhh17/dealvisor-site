import { cn } from '@/lib/utils';

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-sans text-ink', className)}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {/* visor arc + lens — a hint at the "visor" metaphor */}
        <path
          d="M 2.5 12 a 9 9 0 0 1 17 0"
          stroke="url(#g1)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="11" cy="12" r="3.6" fill="url(#g2)" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="22" y2="22">
            <stop offset="0%" stopColor="#2950F2" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="22" y2="22">
            <stop offset="0%" stopColor="#5B7BFF" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">DealVisor</span>
    </div>
  );
}
