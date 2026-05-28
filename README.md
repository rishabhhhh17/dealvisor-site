# DealVisor — marketing site

Public landing page for [DealVisor](https://valencegrowth.com), the operating system for investment banking. Built by Valence Growth Partners.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + custom design tokens
- framer-motion for hero choreography + sticky scroll showcase
- Geist Sans / Geist Mono via `geist`
- Lucide icons
- Supabase (server-only) for lead capture

## Run

```bash
npm install
cp .env.example .env.local   # fill SUPABASE_SERVICE_ROLE_KEY
npm run dev                  # http://localhost:3000
```

## Lead capture

The `leads` table lives in Supabase project `xwbownhncfthjmxceqrt`. RLS policy `anon_insert` allows insert-only from the anon role with bounded field lengths. No select / update / delete from anon. See `supabase/leads.sql`.

The CTA form posts JSON to `/api/lead` → server-side insert using `NEXT_PUBLIC_SUPABASE_ANON_KEY`. RLS does the enforcement.

## Deploy

Linked to Vercel project `dealvisor-site`. Env vars required in Vercel:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Brand

- Dark canvas (`#0A0A0B`), accent `dv-blue #4F7CFF`, gradient pair with `#7C5CFF`.
- Bold display type (Geist), tight tracking on H1.
- IB vocabulary only: Mandate · Pre-Mandate · teaser · IM · LOI · SPA · retainer · success fee · counterparty. Never VC terms.
