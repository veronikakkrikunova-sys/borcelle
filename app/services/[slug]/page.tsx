import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeroGlow from '@/components/HeroGlow';
import ArrowIcon from '@/components/ArrowIcon';
import Reveal from '@/components/Reveal';
import { SERVICE_SLUGS, SERVICE_DETAILS, ServiceSlug, serviceHref } from '@/lib/services-data';

const SERVICE_PHOTOS: Record<ServiceSlug, string> = {
  interior: '/assets/services/interior.jpg',
  exterior: '/assets/services/exterior.jpg',
  landscaping: '/assets/services/landscaping.jpg',
  'property-improvement': '/assets/services/property-improvement.jpg',
  handyman: '/assets/services/handyman.jpg',
};

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as string[]).includes(slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const d = SERVICE_DETAILS[slug];
  return {
    title: `${d.title} | Borcelle Property Services — Greater Vancouver`,
    description: d.intro,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const d = SERVICE_DETAILS[slug];
  const related = SERVICE_SLUGS.filter((s) => s !== slug).map((s) => ({
    slug: s,
    num: SERVICE_DETAILS[s].num,
    title: SERVICE_DETAILS[s].title,
  }));

  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 90% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="services" />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '22px 28px 0', fontSize: 12.5, color: '#857f74', letterSpacing: '0.02em' }}>
            <Link href="/" className="link-breadcrumb" style={{ color: '#857f74', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 9px' }}>/</span>
            <Link href="/services" className="link-breadcrumb" style={{ color: '#857f74', textDecoration: 'none' }}>
              Services
            </Link>
            <span style={{ margin: '0 9px' }}>/</span>
            <span style={{ color: '#f4f2ee' }}>{d.title}</span>
          </div>

          {/* HERO */}
          <section
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: 'clamp(36px,5vw,68px) 28px clamp(44px,6vw,80px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: 'clamp(36px,5vw,60px)',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
                <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>
                  Service {d.num}
                </span>
              </div>
              <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(36px,5vw,62px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 20px' }}>
                {d.title}
              </h1>
              <p className="page-enter page-enter-3" style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, color: '#c3bcb0', maxWidth: 520, margin: '0 0 32px' }}>{d.intro}</p>
              <div className="page-enter page-enter-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link
                  href="/contact"
                  className="btn-brand"
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#0d8c6e',
                    color: '#f4f2ee',
                    fontSize: 15,
                    fontWeight: 600,
                    padding: '11px 11px 11px 22px',
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
                <a
                  href="tel:+17783234176"
                  className="btn-ghost"
                  style={{
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: '#f4f2ee',
                    fontSize: 15,
                    fontWeight: 600,
                    padding: '12px 22px',
                    borderRadius: 999,
                  }}
                >
                  Call 778 323 4176
                </a>
              </div>
            </div>
            <div
              className="page-enter page-enter-4"
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                minHeight: 300,
                minWidth: 0,
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SERVICE_PHOTOS[slug]}
                alt={d.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 18,
                  left: 18,
                  background: 'rgba(18,17,15,0.7)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  padding: '9px 14px',
                  borderRadius: 999,
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#b2aca1',
                }}
              >
                {d.heroLabel}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* INCLUDED */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,84px) 28px' }}>
        <div style={{ maxWidth: 600, marginBottom: 44 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
            What&rsquo;s included
          </div>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0 }}>{d.tagline}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {d.includes.map((it) => (
            <div
              key={it.t}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 16,
                padding: '24px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ width: 9, height: 9, background: '#cbc3b4', flex: 'none', marginTop: 7, borderRadius: 2, transform: 'rotate(45deg)' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 7 }}>{it.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: '#b2aca1' }}>{it.d}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* OUTCOMES */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px clamp(48px,6vw,84px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              Why it matters
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 20px' }}>
              {d.whyTitle}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: 0, maxWidth: 420 }}>{d.whyBody}</p>
          </div>
          <div>
            {d.outcomes.map((o) => (
              <div key={o.n} style={{ display: 'flex', gap: 22, padding: '26px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#cbc3b4', flex: 'none', width: 30 }}>{o.n}</div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: 19, margin: '0 0 9px', letterSpacing: '-0.01em' }}>{o.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#b2aca1', margin: 0 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* RELATED */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px clamp(48px,6vw,80px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 28 }}>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
            Explore related services
          </h2>
          <Link href="/services" className="link-fade" style={{ textDecoration: 'none', color: '#f4f2ee', fontWeight: 600, fontSize: 14 }}>
            View all &rarr;
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {related.map((r) => (
            <Link
              key={r.slug}
              href={serviceHref(r.slug)}
              className="card-hover"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 16,
                padding: 24,
                display: 'block',
                color: '#f4f2ee',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 13, color: '#cbc3b4', marginBottom: 16 }}>{r.num}</div>
              <h3 style={{ fontWeight: 600, fontSize: 18, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{r.title}</h3>
              <span style={{ fontSize: 13, color: '#cbc3b4', fontWeight: 600 }}>Learn more &rarr;</span>
            </Link>
          ))}
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
          <h2
            style={{
              position: 'relative',
              fontWeight: 600,
              fontSize: 'clamp(26px,3.2vw,42px)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Let&rsquo;s put {d.title} on autopilot
          </h2>
          <p style={{ position: 'relative', fontSize: 16, lineHeight: 1.6, color: '#c3bcb0', margin: '0 auto 30px', maxWidth: 520 }}>
            Book a walkthrough and we&rsquo;ll return a clear, itemized proposal within three business days.
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
