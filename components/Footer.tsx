import Link from 'next/link';
import { SERVICE_SUMMARIES, serviceHref } from '@/lib/services-data';

export default function Footer() {
  return (
    <div
      style={{
        width: '100%',
        background: '#0d0c0a',
        color: '#b2aca1',
        fontFamily: "'General Sans',system-ui,sans-serif",
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, padding: '56px 0 46px' }}>
          <div style={{ gridColumn: '1/-1', maxWidth: 360 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/borcelle-mark.png" alt="Borcelle" style={{ height: 42, width: 'auto', display: 'block' }} />
              <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontWeight: 600, fontSize: 24, letterSpacing: '0.01em', color: '#f4f2ee', lineHeight: 1.05 }}>
                  Borcelle
                </span>
                <span style={{ fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#7c766b', fontWeight: 500, lineHeight: 1 }}>
                  Property Services
                </span>
              </span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#8f887c', margin: 0 }}>
              Professional property maintenance for residential and commercial portfolios across the Greater Vancouver
              area. Licensed, insured, and accountable since 2024.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f4f2ee', marginBottom: 18, fontWeight: 600 }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICE_SUMMARIES.map((s) => (
                <Link key={s.slug} href={serviceHref(s.slug)} className="link-muted" style={{ textDecoration: 'none', color: '#8f887c', fontSize: 14 }}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f4f2ee', marginBottom: 18, fontWeight: 600 }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/services" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c', fontSize: 14 }}>
                All Services
              </Link>
              <Link href="/about" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c', fontSize: 14 }}>
                About Us
              </Link>
              <Link href="/contact" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c', fontSize: 14 }}>
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f4f2ee', marginBottom: 18, fontWeight: 600 }}>
              Get in Touch
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, fontSize: 14, color: '#8f887c', lineHeight: 1.5 }}>
              <a href="tel:+17783234176" className="link-fade" style={{ textDecoration: 'none', color: '#f4f2ee', fontWeight: 600 }}>
                778 323 4176
              </a>
              <a href="mailto:info@borcelle.ca" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c' }}>
                info@borcelle.ca
              </a>
              <span style={{ color: '#7c766b' }}>
                Mon&ndash;Sun&nbsp; 7:30am&ndash;9:30pm
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '22px 0',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px 28px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 12.5, color: '#7c766b' }}>&copy; 2026 Borcelle Property Services Ltd. All rights reserved.</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, alignItems: 'center', fontSize: 12, color: '#7c766b' }}>
            <span style={{ letterSpacing: '0.04em' }}>Licensed &amp; Insured &middot; WorkSafeBC Covered</span>
            <Link href="/privacy" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c' }}>
              Privacy
            </Link>
            <Link href="/terms" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c' }}>
              Terms
            </Link>
            <Link href="/service-terms" className="link-muted" style={{ textDecoration: 'none', color: '#8f887c' }}>
              Service Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
