'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function CTA() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Submission failed.');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <section id="pricing" className="relative py-24 lg:py-32 border-t border-hairline overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-70" />
      <div className="dv-container relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="dv-eyebrow">Book a walkthrough</span>
            <h2 className="mt-5 text-display-2 text-balance">
              Book a 30-minute walkthrough.
            </h2>
            <p className="mt-5 text-lead text-fg-muted">
              We&apos;ll show you DealVisor inside Valence&apos;s live workspace. No pitch deck.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-xl">
            {status === 'success' ? (
              <div className="dv-card flex items-center gap-3">
                <Check className="size-5 text-emerald-400" />
                <div>
                  <div className="text-sm font-medium">Got it. We&apos;ll be in touch within a working day.</div>
                  <div className="text-xs text-fg-muted mt-0.5">A real banker will reply &mdash; not a sequence.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="dv-card space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Name" name="name" required autoComplete="name" />
                  <Field label="Work email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field label="Firm" name="firm" required />
                  <SelectField
                    label="Role"
                    name="role"
                    options={['Managing Director', 'Director', 'Vice President', 'Associate', 'Analyst', 'Other']}
                  />
                </div>
                <Field label="Anything specific?" name="message" as="textarea" rows={3} />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-fg-subtle">No spam. We respond personally.</span>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="dv-btn-primary disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Request a demo'}
                    {status !== 'submitting' && <ArrowRight className="size-4" />}
                  </button>
                </div>
                {status === 'error' && <p className="text-xs text-rose-400">{error}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  as?: 'input' | 'textarea';
  rows?: number;
}) {
  const { label, name, as = 'input', ...rest } = props;
  const id = `f-${name}`;
  const base =
    'w-full rounded-lg border border-hairline bg-canvas px-3 py-2.5 text-sm placeholder:text-fg-subtle focus-visible:outline-none focus-visible:border-dv-blue/60 focus-visible:ring-2 focus-visible:ring-dv-blue/20 transition-colors';
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.14em] text-fg-subtle mb-1.5">{label}</span>
      {as === 'textarea' ? (
        <textarea id={id} name={name} rows={rest.rows} className={base} />
      ) : (
        <input id={id} name={name} type={rest.type ?? 'text'} required={rest.required} autoComplete={rest.autoComplete} className={base} />
      )}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  const id = `f-${name}`;
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[11px] font-mono uppercase tracking-[0.14em] text-fg-subtle mb-1.5">{label}</span>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-hairline bg-canvas px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:border-dv-blue/60 focus-visible:ring-2 focus-visible:ring-dv-blue/20"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
