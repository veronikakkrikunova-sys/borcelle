import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BeforeAfterPlaceholder from '@/components/BeforeAfterPlaceholder';
import Carousel from '@/components/Carousel';
import ArrowIcon from '@/components/ArrowIcon';
import Reveal from '@/components/Reveal';
import { SERVICE_SUMMARIES, serviceHref } from '@/lib/services-data';

const HERO_STATS = [
  { n: '2+', l: 'Years in operation' },
  { n: '340+', l: 'Properties under care' },
  { n: '4.9/5', l: 'Client rating' },
];

const BEFORE_AFTER_ITEMS = [
  { label: 'Rooftop deck cleaning', before: '/assets/before-after/deck-before.jpg', after: '/assets/before-after/deck-after.jpg' },
  { label: 'Stovetop detailing', before: '/assets/before-after/stove-before.jpg', after: '/assets/before-after/stove-after.jpg' },
  { label: 'Range hood cleaning', before: '/assets/before-after/hood-before.jpg', after: '/assets/before-after/hood-after.jpg' },
  { label: 'Roof moss removal', before: '/assets/before-after/roof-before.jpg', after: '/assets/before-after/roof-after.jpg' },
  { label: 'Bathroom deep clean', before: '/assets/before-after/bathroom-before.jpg', after: '/assets/before-after/bathroom-after.jpg' },
  { label: 'Paver walkway cleaning', before: '/assets/before-after/walkway-before.jpg', after: '/assets/before-after/walkway-after.jpg' },
];

const VALUES = [
  { n: '01', title: 'One point of contact', desc: 'A dedicated account manager who knows your portfolio — not a call centre or rotating subcontractors.' },
  { n: '02', title: 'Vetted, insured crews', desc: 'Every technician is background-checked, trained, and covered under our liability and WorkSafeBC policies.' },
  { n: '03', title: 'Rapid, tracked response', desc: 'Same-day triage on urgent issues, with every request logged and closed out.' },
  { n: '04', title: 'Transparent reporting', desc: 'Monthly summaries with photos, completed work, and forecasted needs — so nothing catches you off guard.' },
];

const STEPS = [
  { n: '01', title: 'Walkthrough & assessment', desc: 'We tour the property, document its condition, and understand your priorities and budget.' },
  { n: '02', title: 'Tailored maintenance plan', desc: 'You receive a clear, itemized scope with schedules, response tiers, and fixed pricing.' },
  { n: '03', title: 'Dedicated crew deployed', desc: 'A consistent team is assigned so the people caring for your property already know it.' },
  { n: '04', title: 'Ongoing reporting & review', desc: 'Monthly reporting and quarterly reviews keep the plan tuned to what your property actually needs.' },
];

const BIG_STATS = [
  { n: '2.8M', l: 'Square feet maintained across the Lower Mainland' },
  { n: '<2 hrs', l: 'Average urgent response time' },
  { n: '94%', l: 'Client retention year over year' },
];

export default function HomePage() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          background: 'radial-gradient(135% 95% at 78% -8%,#34302a 0%,#201e1a 46%,#100f0d 100%)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/video/hero-bg-poster.jpg"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'invert(1) brightness(0.92)',
            }}
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg,rgba(20,19,17,0.4) 0%,rgba(20,19,17,0.55) 60%,rgba(20,19,17,0.8) 100%)',
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="home" />

          {/* HERO */}
          <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(56px,8vw,120px) 28px clamp(56px,7vw,110px)' }}>
            <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>
                Greater Vancouver
              </span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
                gap: 'clamp(28px,4vw,56px)',
                alignItems: 'end',
              }}
            >
              <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(44px,7vw,88px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0, maxWidth: 760 }}>
                Property maintenance, elevated.
              </h1>
              <div className="page-enter page-enter-3" style={{ maxWidth: 440, paddingBottom: 10 }}>
                <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, color: '#c3bcb0', margin: '0 0 28px' }}>
                  One accountable partner for cleaning, repairs, grounds, and full-service management — keeping
                  residential and commercial portfolios running at their best.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Link
                    href="/services"
                    className="btn-ghost"
                    style={{
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      background: 'rgba(255,255,255,0.18)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      color: '#f4f2ee',
                      fontSize: 15,
                      fontWeight: 600,
                      padding: '12px 22px',
                      borderRadius: 999,
                    }}
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="page-enter page-enter-4"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '26px 44px',
                alignItems: 'center',
                marginTop: 'clamp(44px,5vw,72px)',
                paddingTop: 32,
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.l}>
                  <div style={{ fontWeight: 600, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
                  <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 8, letterSpacing: '0.02em' }}>{s.l}</div>
                </div>
              ))}
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ fontSize: 13, color: '#c3bcb0', lineHeight: 1.4 }}>
                  Trusted by <span style={{ color: '#f4f2ee', fontWeight: 600 }}>120+ managers</span>
                  <br />
                  across Metro Vancouver
                </div>
              </div>
            </div>

            <Reveal style={{ marginTop: 'clamp(44px,5vw,72px)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
                  <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>
                    See it in action
                  </span>
                </div>
              </div>
              <Carousel>
                {BEFORE_AFTER_ITEMS.map((item) => (
                  <div key={item.label} style={{ flex: '0 0 clamp(240px,32vw,320px)', scrollSnapAlign: 'start' }}>
                    <BeforeAfterPlaceholder label={item.label} beforeSrc={item.before} afterSrc={item.after} />
                    <div style={{ marginTop: 14, fontSize: 15, fontWeight: 600, color: '#f4f2ee' }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: '#857f74', marginTop: 3 }}>Drag to compare</div>
                  </div>
                ))}
              </Carousel>
            </Reveal>
          </section>
        </div>
      </div>


      {/* SERVICES */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,88px) 28px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 44 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              What we do
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(30px,3.8vw,50px)', lineHeight: 1.04, letterSpacing: '-0.025em', margin: 0, maxWidth: 680 }}>
              Five services, one point of contact
            </h2>
          </div>
          <Link
            href="/services"
            className="link-fade"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, color: '#f4f2ee', fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap' }}
          >
            View all services &rarr;
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {SERVICE_SUMMARIES.map((s) => (
            <Link
              key={s.slug}
              href={serviceHref(s.slug)}
              className="card-hover"
              style={{
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.045)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 240,
                backdropFilter: 'blur(8px)',
                color: '#f4f2ee',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 13, color: '#cbc3b4', letterSpacing: '0.06em' }}>{s.num}</div>
              <div style={{ flex: 1 }} />
              <h3 style={{ fontWeight: 600, fontSize: 21, lineHeight: 1.15, margin: '22px 0 12px', letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#b2aca1', margin: '0 0 20px' }}>{s.desc}</p>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#cbc3b4', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* DASHBOARD / CASE */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              Case study
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              Turning around a 180-unit strata in Vancouver
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: '0 0 28px', maxWidth: 480 }}>
              We consolidated five vendors into a single maintenance program, cut response times by 62%, and lifted
              owner satisfaction to its highest in a decade — within two quarters.
            </p>
            <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap', marginBottom: 30 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, color: '#cbc3b4', letterSpacing: '-0.01em' }}>-62%</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Response time</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em' }}>5&rarr;1</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Vendors consolidated</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em' }}>98%</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Owner satisfaction</div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 22,
              padding: 24,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: '#8f887c' }}>Portfolio / Overview</span>
              <span style={{ fontSize: 11, color: '#cbc3b4', background: 'rgba(203,195,180,0.12)', padding: '4px 9px', borderRadius: 999 }}>
                Live
              </span>
            </div>
            <div style={{ fontSize: 13, color: '#b2aca1', marginBottom: 10 }}>Properties under care</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
              <span style={{ fontWeight: 600, fontSize: 40, letterSpacing: '-0.02em' }}>340</span>
              <span style={{ color: '#cbc3b4', fontSize: 15, fontWeight: 600 }}>+18 this yr</span>
            </div>
            <svg viewBox="0 0 320 110" preserveAspectRatio="none" style={{ width: '100%', height: 110, display: 'block' }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#0d8c6e" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#0d8c6e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points="0,88 40,80 80,84 120,66 160,58 200,48 240,40 280,26 320,14"
                fill="none"
                stroke="#0d8c6e"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <polygon points="0,88 40,80 80,84 120,66 160,58 200,48 240,40 280,26 320,14 320,110 0,110" fill="url(#g1)" />
            </svg>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 16 }}>
                <div style={{ fontSize: 12, color: '#8f887c', marginBottom: 8 }}>Open work orders</div>
                <div style={{ fontWeight: 600, fontSize: 22 }}>12</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 16 }}>
                <div style={{ fontSize: 12, color: '#8f887c', marginBottom: 8 }}>Avg. response</div>
                <div style={{ fontWeight: 600, fontSize: 22 }}>1.8 hrs</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* VALUE PROPS */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,88px) 28px' }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
            Why Borcelle
          </div>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(30px,3.8vw,50px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            The dependable standard managers count on
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

      {/* PROCESS */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,88px) 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              How we work
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.4vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: '0 0 22px' }}>
              A process built for accountability
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: 0, maxWidth: 440 }}>
              No surprises, no chasing. Every engagement follows the same disciplined rhythm — from first walkthrough
              to monthly reporting.
            </p>
          </div>
          <div>
            {STEPS.map((st) => (
              <div key={st.n} style={{ display: 'flex', gap: 24, padding: '26px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#cbc3b4', flex: 'none', width: 34 }}>{st.n}</div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: 19, margin: '0 0 9px', letterSpacing: '-0.01em' }}>{st.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.65, color: '#b2aca1', margin: 0 }}>{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* STATS BAND */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(24px,3vw,40px) 28px clamp(48px,6vw,80px)' }}>
        <div
          style={{
            background: 'radial-gradient(120% 140% at 20% 0%,#2a2823 0%,#17150f 60%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: 'clamp(40px,5vw,60px) clamp(28px,4vw,52px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
            gap: 36,
          }}
        >
          {BIG_STATS.map((s) => (
            <div key={s.l}>
              <div style={{ fontWeight: 600, fontSize: 'clamp(34px,4vw,50px)', lineHeight: 1, letterSpacing: '-0.025em' }}>{s.n}</div>
              <div style={{ fontSize: 13.5, color: '#b2aca1', marginTop: 12, lineHeight: 1.45 }}>{s.l}</div>
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
            padding: 'clamp(44px,5vw,72px)',
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
              opacity: 0.5,
              pointerEvents: 'none',
              WebkitMaskImage: 'linear-gradient(90deg,transparent 40%,#000)',
              maskImage: 'linear-gradient(90deg,transparent 40%,#000)',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.4vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Maintenance you don&rsquo;t have to think about.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#c3bcb0', margin: 0, maxWidth: 520 }}>
              Tell us about your property. We&rsquo;ll schedule a walkthrough and return a clear, itemized proposal
              within three business days.
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
            <a
              href="tel:+17783234176"
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
              Call 778 323 4176
            </a>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
