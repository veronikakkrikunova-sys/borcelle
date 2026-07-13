import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeroGlow from '@/components/HeroGlow';
import ArrowIcon from '@/components/ArrowIcon';
import Reveal from '@/components/Reveal';
import { SERVICE_SUMMARIES, serviceHref, ServiceSlug } from '@/lib/services-data';

const SERVICE_PHOTOS: Record<ServiceSlug, string> = {
  interior: '/assets/services/interior.jpg',
  exterior: '/assets/services/exterior.jpg',
  landscaping: '/assets/services/landscaping.jpg',
  'property-improvement': '/assets/services/property-improvement.jpg',
  handyman: '/assets/services/handyman.jpg',
};

export const metadata: Metadata = {
  title: 'Services | Borcelle Property Services — Greater Vancouver',
  description:
    'Explore Borcelle Property Services — cleaning, maintenance and repairs, property management, landscaping and renovation for residential and commercial properties across Greater Vancouver.',
};

const BENEFITS = [
  { n: '1', title: 'One contract, one invoice', desc: 'Replace a stack of vendor agreements and bills with a single accountable relationship.' },
  { n: '5', title: 'Disciplines, coordinated', desc: 'Cleaning, repairs, grounds, management and projects that talk to each other, not past each other.' },
  { n: '7', title: 'Reachable every day', desc: 'One phone number covers every service, seven days a week — no wondering who to call.' },
];

export default function ServicesPage() {
  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 85% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="services" />
          <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,90px) 28px clamp(44px,5vw,64px)' }}>
            <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>
                Our services
              </span>
            </div>
            <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(40px,5.6vw,72px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 24px', maxWidth: 900 }}>
              Everything your property needs, from one partner.
            </h1>
            <p className="page-enter page-enter-3" style={{ fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.6, color: '#c3bcb0', maxWidth: 600, margin: 0 }}>
              Bundle the disciplines below into a single maintenance program — or start with one. Either way, you get
              one point of contact, vetted crews, and reporting you can forward straight to owners.
            </p>
          </section>
        </div>
      </div>

      {/* SERVICE ROWS */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(24px,4vw,48px) 28px clamp(40px,5vw,64px)' }}>
        {SERVICE_SUMMARIES.map((s, i) => (
          <Reveal
            key={s.slug}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(28px,4vw,56px)',
              alignItems: 'center',
              padding: 'clamp(36px,4vw,52px) 0',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              flexDirection: i % 2 === 1 ? 'row-reverse' : 'row',
            }}
          >
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: '#cbc3b4', letterSpacing: '0.05em', marginBottom: 16 }}>{s.num}</div>
              <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,38px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: '0 0 22px', maxWidth: 520 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px', marginBottom: 26 }}>
                {s.tags.map((t) => (
                  <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: '#c3bcb0' }}>
                    <span style={{ width: 6, height: 6, background: '#cbc3b4', transform: 'rotate(45deg)', display: 'inline-block' }} />
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={serviceHref(s.slug)}
                className="btn-ghost"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  color: '#f4f2ee',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '10px 18px',
                  borderRadius: 999,
                }}
              >
                {s.cta} &rarr;
              </Link>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: 280,
                position: 'relative',
                aspectRatio: '16/10',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.11)',
                minHeight: 220,
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SERVICE_PHOTOS[s.slug]}
                alt={s.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  background: 'rgba(18,17,15,0.7)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  padding: '8px 12px',
                  borderRadius: 999,
                  fontSize: 10.5,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#b2aca1',
                }}
              >
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* WHY BUNDLE */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(24px,3vw,40px) 28px clamp(48px,6vw,84px)' }}>
        <div
          style={{
            background: 'radial-gradient(120% 140% at 20% 0%,#2a2823 0%,#17150f 60%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: 'clamp(40px,5vw,60px) clamp(28px,4vw,52px)',
          }}
        >
          <div style={{ maxWidth: 620, marginBottom: 44 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              One partner, one plan
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0 }}>
              The advantage of consolidating with Borcelle
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 40 }}>
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <div style={{ fontWeight: 600, fontSize: 'clamp(34px,3.8vw,46px)', color: '#cbc3b4', lineHeight: 1, marginBottom: 16, letterSpacing: '-0.02em' }}>
                  {b.n}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 19, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{b.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#b2aca1', margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px clamp(72px,8vw,110px)' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(130% 120% at 80% 0%,#34302a 0%,#201e1a 55%)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 28,
            padding: 'clamp(44px,5vw,68px)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'repeating-linear-gradient(90deg,rgba(13,140,110,0.16) 0 1px,transparent 1px 16px)',
              opacity: 0.45,
              pointerEvents: 'none',
              WebkitMaskImage: 'linear-gradient(90deg,transparent 45%,#000)',
              maskImage: 'linear-gradient(90deg,transparent 45%,#000)',
            }}
          />
          <h2 style={{ position: 'relative', fontWeight: 600, fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Not sure where to start?
          </h2>
          <p style={{ position: 'relative', fontSize: 16, lineHeight: 1.6, color: '#c3bcb0', margin: '0 auto 30px', maxWidth: 520 }}>
            Tell us about your property and we&rsquo;ll recommend the right mix — then return a clear proposal within
            three business days.
          </p>
          <Link
            href="/contact"
            className="btn-brand"
            style={{
              position: 'relative',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#0d8c6e',
              color: '#f4f2ee',
              fontSize: 15,
              fontWeight: 600,
              padding: '13px 13px 13px 26px',
              borderRadius: 999,
            }}
          >
            Contact us
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#f4f2ee',
                color: '#0d8c6e',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
              }}
            >
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
