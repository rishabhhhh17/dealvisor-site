import { cn } from '@/lib/utils';

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2 font-sans text-ink', className)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" stroke="url(#g1)" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4.2" fill="url(#g2)" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#4F7CFF" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-[15px] font-semibold tracking-tight">DealVisor</span>
    </div>
  );
}
