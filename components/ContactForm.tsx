'use client';

import { useState } from 'react';

const PROPERTY_TYPES = ['Apartment / Condo', 'House (Single-family)', 'Townhouse / Duplex', 'Strata Building', 'Office', 'Retail / Commercial', 'Other'];
const SERVICE_OPTIONS = ['Not sure yet', 'Interior Services', 'Exterior Services', 'Landscaping', 'Property Improvement', 'Handyman Services', 'Multiple services'];

const baseInputStyle: React.CSSProperties = {
  fontFamily: "'General Sans',sans-serif",
  fontSize: 15,
  color: '#f4f2ee',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.16)',
  borderRadius: 12,
  padding: '13px 14px',
  width: '100%',
  boxSizing: 'border-box',
};
const errorInputStyle: React.CSSProperties = { ...baseInputStyle, borderColor: '#ff9b8a' };

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    propertyType: PROPERTY_TYPES[0],
    service: SERVICE_OPTIONS[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please tell us a little about your property.';
    return next;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.error || 'Something went wrong. Please try again or call us.');
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError('Something went wrong. Please try again or call us.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ border: '1px solid rgba(203,195,180,0.35)', background: 'rgba(203,195,180,0.08)', borderRadius: 20, padding: 'clamp(32px,4vw,48px)' }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#cbc3b4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
          <span style={{ width: 12, height: 20, borderRight: '3px solid #141311', borderBottom: '3px solid #141311', transform: 'rotate(45deg) translate(-1px,-2px)', display: 'block' }} />
        </div>
        <h2 style={{ fontWeight: 600, fontSize: 26, margin: '0 0 12px', letterSpacing: '-0.01em' }}>Thanks — we&rsquo;ve got it.</h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: '#cbc4b8', margin: '0 0 8px' }}>
          A member of our team will reach out within one business day to arrange your walkthrough.
        </p>
        <p style={{ fontSize: 14, color: '#b2aca1', margin: 0 }}>
          Need us sooner? Call{' '}
          <a href="tel:+17783234176" style={{ color: '#cbc3b4', fontWeight: 600, textDecoration: 'none' }}>
            778 323 4176
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 'clamp(28px,3vw,40px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px 18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Full name *</label>
          <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Jane Smith" style={errors.name ? errorInputStyle : baseInputStyle} />
          {errors.name && <span style={{ fontSize: 12, color: '#ff9b8a' }}>{errors.name}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Company / building</label>
          <input value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Cascade REIT" style={baseInputStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Email *</label>
          <input value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="jane@example.com" style={errors.email ? errorInputStyle : baseInputStyle} />
          {errors.email && <span style={{ fontSize: 12, color: '#ff9b8a' }}>{errors.email}</span>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Phone</label>
          <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="778 323 4176" style={baseInputStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Property type</label>
          <select value={form.propertyType} onChange={(e) => set('propertyType', e.target.value)} style={baseInputStyle}>
            {PROPERTY_TYPES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>Service of interest</label>
          <select value={form.service} onChange={(e) => set('service', e.target.value)} style={baseInputStyle}>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 20 }}>
        <label style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', color: '#cbc4b8' }}>How can we help? *</label>
        <textarea
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          rows={4}
          placeholder="Tell us about your property and what you need..."
          style={{ ...(errors.message ? errorInputStyle : baseInputStyle), resize: 'vertical', minHeight: 110 }}
        />
        {errors.message && <span style={{ fontSize: 12, color: '#ff9b8a' }}>{errors.message}</span>}
      </div>

      {serverError && (
        <div style={{ marginTop: 20, fontSize: 13.5, color: '#ff9b8a', background: 'rgba(255,155,138,0.08)', border: '1px solid rgba(255,155,138,0.3)', borderRadius: 12, padding: '12px 14px' }}>
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-light"
        style={{
          marginTop: 24,
          width: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          background: '#f4f2ee',
          color: '#141311',
          border: 'none',
          fontFamily: "'General Sans',sans-serif",
          fontSize: 15,
          fontWeight: 600,
          padding: 16,
          borderRadius: 999,
          cursor: submitting ? 'default' : 'pointer',
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? 'Sending…' : 'Send Request'}
        <span
          style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: '#141311',
            color: '#f4f2ee',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
          }}
        >
          &#8250;
        </span>
      </button>
      <p style={{ fontSize: 12.5, color: '#857f74', margin: '16px 0 0', textAlign: 'center' }}>We reply within one business day. No obligation.</p>
    </form>
  );
}
