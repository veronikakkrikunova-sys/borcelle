import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArrowIcon from '@/components/ArrowIcon';
import HeroGlow from '@/components/HeroGlow';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About | Borcelle Property Services — Greater Vancouver',
  description:
    'About Borcelle Property Services — a licensed, insured property maintenance company serving Greater Vancouver since 2024 with vetted crews and transparent reporting.',
};

const STATS = [
  { n: '2024', l: 'Founded in Vancouver' },
  { n: '340+', l: 'Properties under care' },
  { n: '60+', l: 'Trained team members' },
  { n: '94%', l: 'Client retention' },
];

const VALUES = [
  { n: '01', title: 'Reachable', desc: 'A real person answers, and urgent issues get triaged the same day. No portals-only runaround.' },
  { n: '02', title: 'Reliable', desc: 'The same vetted crew, showing up when promised, holding a documented standard every visit.' },
  { n: '03', title: 'Accountable', desc: 'Every job logged, photographed and reported. If something’s missed, we own it and make it right.' },
  { n: '04', title: 'Long-term', desc: 'We optimize for the health of your asset over years, not for the size of this month’s invoice.' },
];

const CREDS = [
  { t: 'Fully licensed', d: 'Business-licensed in every municipality we operate across the Lower Mainland.' },
  { t: 'Liability insured', d: 'Comprehensive commercial general liability coverage on every engagement.' },
  { t: 'WorkSafeBC covered', d: 'All field staff covered, so there’s no exposure passed to your property.' },
  { t: 'Background-checked crews', d: 'Every technician is vetted before ever setting foot on your site.' },
];

export default function AboutPage() {
  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 85% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="about" />
          <section
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: 'clamp(48px,6vw,90px) 28px clamp(44px,5vw,64px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: 'clamp(36px,5vw,60px)',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
                <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>
                  About Borcelle
                </span>
              </div>
              <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(34px,4.8vw,58px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 22px' }}>
                Reachable, reliable, and accountable.
              </h1>
              <p className="page-enter page-enter-3" style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, color: '#c3bcb0', maxWidth: 520, margin: 0 }}>
                Since 2024, we&rsquo;ve helped owners and managers across Greater Vancouver protect their properties —
                not with the biggest crew, but with the most dependable one.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* STATS */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(20px,3vw,32px) 28px clamp(36px,4vw,52px)' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 22,
            padding: 'clamp(32px,4vw,44px) clamp(28px,4vw,44px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: 32,
          }}
        >
          {STATS.map((s) => (
            <div key={s.l}>
              <div style={{ fontWeight: 600, fontSize: 'clamp(32px,3.8vw,46px)', lineHeight: 1, letterSpacing: '-0.025em' }}>{s.n}</div>
              <div style={{ fontSize: 13, color: '#b2aca1', marginTop: 10, lineHeight: 1.45 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* STORY */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              Our story
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>
              From a single van to a trusted regional partner
            </h2>
          </div>
          <div style={{ fontSize: 16, lineHeight: 1.75, color: '#cbc4b8', maxWidth: 560 }}>
            <p style={{ margin: '0 0 20px' }}>
              Borcelle started in 2024 with one van, one crew, and a simple frustration: property owners couldn&rsquo;t
              find a maintenance company that actually picked up the phone. So we built one around responsiveness.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              As word spread among property managers, we grew — carefully. We added trades and services only when we
              could deliver them to the same standard, and we kept the thing clients valued most: a real person who
              knows your building and owns the outcome.
            </p>
            <p style={{ margin: 0 }}>
              Today we care for more than 340 residential, strata and commercial properties across the Lower
              Mainland. We&rsquo;re bigger, but the promise hasn&rsquo;t changed — reachable, reliable, and
              accountable, every time.
            </p>
          </div>
        </div>
      </Reveal>

      {/* VALUES */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px' }}>
        <div style={{ maxWidth: 620, marginBottom: 44 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
            What we stand for
          </div>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0 }}>
            Principles that show up on every site visit
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
          {VALUES.map((v) => (
            <div key={v.n} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 18, padding: '28px 26px' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(203,195,180,0.12)',
                  border: '1px solid rgba(203,195,180,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 16,
                  color: '#cbc3b4',
                  marginBottom: 22,
                }}
              >
                {v.n}
              </div>
              <h3 style={{ fontWeight: 600, fontSize: 19, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{v.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#b2aca1', margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CREDENTIALS */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 28 }}>
          Licensed, insured &amp; accountable
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
          {CREDS.map((c) => (
            <div key={c.t} style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '24px 24px' }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{c.t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: '#b2aca1' }}>{c.d}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px clamp(72px,8vw,110px)' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(130% 120% at 80% 0%,#34302a 0%,#201e1a 55%)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 28,
            padding: 'clamp(44px,5vw,68px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 36,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'repeating-linear-gradient(90deg,rgba(13,140,110,0.16) 0 1px,transparent 1px 16px)',
              opacity: 0.45,
              pointerEvents: 'none',
              WebkitMaskImage: 'linear-gradient(90deg,transparent 40%,#000)',
              maskImage: 'linear-gradient(90deg,transparent 40%,#000)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Let&rsquo;s look after your property together
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#c3bcb0', margin: 0, maxWidth: 520 }}>
              Book a walkthrough and see what accountable maintenance actually feels like.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14, justifySelf: 'end', width: '100%', maxWidth: 300 }}>
            <Link
              href="/contact"
              className="btn-brand"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: '#0d8c6e',
                color: '#f4f2ee',
                fontSize: 15,
                fontWeight: 600,
                padding: 16,
                borderRadius: 999,
              }}
            >
              Contact us
              <span
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: '#f4f2ee',
                  color: '#0d8c6e',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                }}
              >
                <ArrowIcon size={13} />
              </span>
            </Link>
            <Link
              href="/services"
              className="btn-ghost"
              style={{
                textDecoration: 'none',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.08)',
                color: '#f4f2ee',
                fontSize: 15,
                fontWeight: 600,
                padding: 15,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
