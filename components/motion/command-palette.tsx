'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ArrowRight, GitBranch, FileText, BookOpen, Sparkles, CalendarRange, Mail } from 'lucide-react';

const ITEMS = [
  { id: 'pipeline', label: 'Open Pipeline', icon: GitBranch, href: '#product' },
  { id: 'mandates', label: 'Browse Mandates', icon: FileText, href: '#product' },
  { id: 'knowledge', label: 'Search Knowledge', icon: BookOpen, href: '#product' },
  { id: 'ask', label: 'Ask DealVisor', icon: Sparkles, href: '#product' },
  { id: 'calendar', label: 'View Calendar', icon: CalendarRange, href: '#product' },
  { id: 'demo', label: 'Book a demo', icon: Mail, href: '#pricing' },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filtered = ITEMS.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center pt-[18vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-canvas/30 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.96, y: -8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -8, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/70 surface-glass"
          >
            <div className="flex items-center gap-3 border-b border-hairline/60 px-4 py-3">
              <Search className="size-4 text-ink-subtle" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Jump to anything…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-subtle"
              />
              <kbd className="rounded-md border border-hairline bg-elevated px-1.5 py-0.5 font-mono text-[10px] text-ink-subtle">esc</kbd>
            </div>
            <ul className="max-h-72 overflow-auto p-2">
              {filtered.map((it) => {
                const Icon = it.icon;
                return (
                  <li key={it.id}>
                    <a
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink hover:bg-elevated/70 press"
                    >
                      <span className="inline-flex size-7 items-center justify-center rounded-md border border-hairline bg-surface">
                        <Icon className="size-3.5 text-dv-blue" />
                      </span>
                      <span className="flex-1">{it.label}</span>
                      <ArrowRight className="size-3.5 text-ink-subtle opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
              {filtered.length === 0 && <li className="p-3 text-xs text-ink-subtle">No matches.</li>}
            </ul>
            <div className="flex items-center justify-between border-t border-hairline/60 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-subtle">
              <span>Hint · ⌘K to toggle</span>
              <span>↵ open</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
