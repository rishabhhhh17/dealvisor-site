import { cn } from '@/lib/utils';

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 font-sans text-ink', className)}>
      <span className="relative inline-flex size-5 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-dv-blue" />
        <span className="absolute inset-[3px] rounded-full bg-surface" />
        <span className="absolute inset-[6px] rounded-full bg-dv-blue" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight">DealVisor</span>
    </div>
  );
}
