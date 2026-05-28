-- DealVisor marketing site — leads table.
-- Applied to Supabase project xwbownhncfthjmxceqrt via MCP.
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
  user_agent  text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (lower(email));

alter table public.leads enable row level security;

-- Anon role can ONLY insert, with bounded field lengths. No reads, updates, deletes.
do $$ begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'leads' and policyname = 'anon_insert'
  ) then
    create policy "anon_insert" on public.leads
      for insert to anon
      with check (
        char_length(name) between 1 and 200
        and char_length(email) between 3 and 200
        and char_length(firm) between 1 and 200
        and (role is null or char_length(role) <= 100)
        and (message is null or char_length(message) <= 2000)
      );
  end if;
end $$;
