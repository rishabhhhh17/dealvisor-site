-- DealVisor marketing site — leads table.
-- Run this in the Supabase SQL editor for project ndsvjdlagetyrihkbeul.
-- Idempotent: safe to re-run.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  firm        text not null,
  role        text,
  message     text,
  source      text not null default 'dealvisor-site',
  user_agent  text,
  ip          inet
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (lower(email));

alter table public.leads enable row level security;

-- Only the service role can read/write. No anon access (this is for sales follow-up).
do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'leads' and policyname = 'service_role_all'
  ) then
    create policy "service_role_all" on public.leads
      for all to service_role
      using (true) with check (true);
  end if;
end $$;
