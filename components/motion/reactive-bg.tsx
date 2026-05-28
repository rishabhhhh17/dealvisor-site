'use client';
import { useEffect, useRef } from 'react';

/**
 * Very subtle warm wash that drifts on its own. No cursor tracking, no
 * heavy mesh — the marketing site should feel as calm and confident as
 * the actual tool.
 */
export function ReactiveBackground() {
  const root = useRef<HTMLDivElement>(null);
  // kept for layout slot; no effect needed yet
  useEffect(() => {}, []);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div className="absolute -inset-[12%] bg-wash opacity-90 blur-3xl animate-wash-drift" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
