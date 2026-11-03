import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/lib/site';

export const runtime = 'nodejs';
const hits = new Map<string, { count: number; start: number }>();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max: number) => typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 12000) return NextResponse.json({ ok: false }, { status: 413 });
  const now = Date.now();
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
  const entry = hits.get(ip);
  if (entry && now - entry.start < 10 * 60 * 1000 && entry.count >= 5) return NextResponse.json({ ok: false }, { status: 429 });
  if (!entry || now - entry.start >= 10 * 60 * 1000) hits.set(ip, { count: 1, start: now }); else entry.count++;
  if (hits.size > 3000) for (const [key, value] of hits) if (now - value.start > 10 * 60 * 1000) hits.delete(key);
  if (!request.headers.get('content-type')?.includes('application/json')) return NextResponse.json({ ok: false }, { status: 415 });
  let raw: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 12000) return NextResponse.json({ ok: false }, { status: 413 });
    raw = JSON.parse(body) as Record<string, unknown>;
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return NextResponse.json({ ok: false }, { status: 400 });
  } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (clean(raw.website, 200)) return NextResponse.json({ ok: true });
  const name = clean(raw.name, 100), company = clean(raw.company, 120), email = clean(raw.email, 254), phone = clean(raw.phone, 40), details = clean(raw.details, 4000);
  const service = clean(raw.service, 80), budget = clean(raw.budget, 100), preferredMethod = clean(raw.preferredMethod, 40);
  const validServices = new Set([...services.map((item) => item.slug), 'other', '']);
  const validBudgets = new Set(['Under SAR 20,000', 'SAR 20,000–50,000', 'SAR 50,000–100,000', 'Over SAR 100,000', 'Prefer to discuss', 'أقل من ٢٠٬٠٠٠ ريال', '٢٠٬٠٠٠ – ٥٠٬٠٠٠ ريال', '٥٠٬٠٠٠ – ١٠٠٬٠٠٠ ريال', 'أكثر من ١٠٠٬٠٠٠ ريال', 'أفضل مناقشة ذلك', '']);
  const validMethods = new Set(['Email', 'Phone', 'WhatsApp', 'البريد الإلكتروني', 'الهاتف', 'واتساب']);
  const whatsappChoice = preferredMethod === 'WhatsApp' || preferredMethod === 'واتساب';
  const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
  if (name.length < 2 || !EMAIL.test(email) || details.length < 10 || !validServices.has(service) || !validBudgets.has(budget) || !validMethods.has(preferredMethod) || (whatsappChoice && (whatsapp.length < 8 || whatsapp.length > 15))) return NextResponse.json({ ok: false }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 503 });
  const lines = [`Name: ${name}`, `Company: ${company || 'Not provided'}`, `Email: ${email}`, `Phone: ${phone || 'Not provided'}`, `Service: ${service || 'Not selected'}`, `Budget: ${budget || 'Not provided'}`, `Preferred contact: ${preferredMethod}`, '', 'Project details:', details];
  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website inquiry — ${name}`, text: lines.join('\n') }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) { console.error('Contact email provider returned an error', result.status); return NextResponse.json({ ok: false }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (error) { console.error('Contact email delivery failed', error); return NextResponse.json({ ok: false }, { status: 502 }); }
}
