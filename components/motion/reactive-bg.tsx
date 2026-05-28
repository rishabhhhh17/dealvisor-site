'use client';
import { useEffect, useRef } from 'react';

/**
 * Full-page reactive background. Sets --px/--py CSS vars on <html> so any
 * .spotlight utility tracks the cursor. Renders four animated mesh blobs
 * that drift on their own (CSS-keyframed) and breathe based on pointer.
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
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* drifting mesh blobs */}
      <div className="absolute -inset-[20%] bg-mesh-cool opacity-70 blur-3xl animate-mesh-drift" />
      {/* subtle grid */}
      <div className="absolute inset-0 grid-bg mask-radial opacity-60" />
      {/* cursor-following spotlight */}
      <div className="absolute inset-0 spotlight" />
      {/* film grain */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.06] bg-noise" />
      {/* fade bottom of viewport so footer feels grounded */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
