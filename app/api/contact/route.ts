import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  propertyType?: string;
  service?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, company, email, phone, propertyType, service, message } = body;
  const errors: Record<string, string> = {};
  if (!name?.trim()) errors.name = 'Please enter your name.';
  if (!email?.trim()) errors.email = 'Please enter your email.';
  else if (!isValidEmail(email.trim())) errors.email = 'Please enter a valid email.';
  if (!message?.trim()) errors.message = 'Please tell us a little about your property.';

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set — see .env.local.example');
    return NextResponse.json({ error: 'Email delivery is not configured yet. Please call us instead.' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@borcelle.ca';

  try {
    const { error } = await resend.emails.send({
      from: `Borcelle Website <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Company/building: ${company || '—'}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Property type: ${propertyType || '—'}`,
        `Service of interest: ${service || '—'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'We could not send your request. Please try again or call us.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return NextResponse.json({ error: 'We could not send your request. Please try again or call us.' }, { status: 500 });
  }
}
