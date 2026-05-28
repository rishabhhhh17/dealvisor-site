import { NextResponse } from 'next/server';
import { getServerSupabase } from '@/lib/supabase';

export const runtime = 'nodejs';

const ROLES = ['Managing Director', 'Director', 'Vice President', 'Associate', 'Analyst', 'Other'];

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const firm = String(body.firm ?? '').trim();
  const role = String(body.role ?? '').trim();
  const message = String(body.message ?? '').trim().slice(0, 2000);

  if (!name || !email || !firm) {
    return NextResponse.json({ error: 'Name, email, and firm are required.' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please use a valid email.' }, { status: 400 });
  }
  if (role && !ROLES.includes(role)) {
    return NextResponse.json({ error: 'Invalid role.' }, { status: 400 });
  }

  try {
    const supabase = getServerSupabase();
    const { error } = await supabase.from('leads').insert({
      name,
      email,
      firm,
      role: role || null,
      message: message || null,
      source: 'dealvisor-site',
      user_agent: req.headers.get('user-agent') ?? null,
    });
    if (error) {
      console.error('lead insert failed', error);
      return NextResponse.json({ error: 'Could not save your request. Try again.' }, { status: 500 });
    }
  } catch (err) {
    console.error('lead handler error', err);
    return NextResponse.json({ error: 'Server not configured.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
