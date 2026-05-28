'use client';
import { useEffect, useRef } from 'react';

/**
 * Full-page reactive background. Cool mesh blobs over warm cream canvas.
 * Tracks pointer via --px / --py for the .spotlight utility.
 */
export function ReactiveBackground() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.3;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      document.documentElement.style.setProperty('--px', `${currentX}px`);
      document.documentElement.style.setProperty('--py', `${currentY}px`);
      raf = requestAnimationFrame(tick);
    };

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) {
      window.addEventListener('pointermove', onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      {/* drifting cool mesh blobs over warm cream */}
      <div className="absolute -inset-[15%] bg-mesh-brand opacity-90 blur-3xl animate-mesh-drift" />
      {/* very subtle grid */}
      <div className="absolute inset-0 grid-bg mask-radial opacity-40" />
      {/* cursor-following spotlight */}
      <div className="absolute inset-0 spotlight" />
      {/* film grain for tactility */}
      <div className="absolute inset-0 mix-blend-multiply opacity-[0.05] bg-noise" />
      {/* fade bottom so footer feels grounded */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
