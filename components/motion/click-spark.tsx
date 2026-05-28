'use client';
import { useEffect, useRef } from 'react';

/**
 * Document-level click sparkles. Listens for pointerdown on the document and
 * draws a short-lived radial flare at the click position. Skips form inputs.
 */
export function ClickSpark() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; hue: number };
    const particles: Particle[] = [];

    function onDown(e: PointerEvent) {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      // skip text inputs/textareas
      if (t.closest('input, textarea')) return;
      const N = 8;
      for (let i = 0; i < N; i++) {
        const a = (Math.PI * 2 * i) / N + Math.random() * 0.3;
        const v = 2.2 + Math.random() * 1.6;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          life: 1,
          hue: [220, 260, 14][Math.floor(Math.random() * 3)], // royal / violet / coral
        });
      }
    }

    let raf = 0;
    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.life -= 0.04;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = p.life;
        ctx.fillStyle = `hsl(${p.hue}, 95%, 60%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2 * p.life, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) {
      window.addEventListener('pointerdown', onDown);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[55]" />;
}
