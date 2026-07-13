import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ArrowIcon from '@/components/ArrowIcon';
import HeroGlow from '@/components/HeroGlow';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Borcelle Property Services',
  description:
    'Case studies from Borcelle Property Services — how we maintain, manage and improve residential and commercial properties across Greater Vancouver, with measurable results.',
};

const CASES = [
  { label: 'Property photo', meta: 'Commercial · Downtown Vancouver', title: 'Class-A office tower janitorial', desc: 'Nightly cleaning and day-porter service for a 22-floor tower, keyed to tenant operations and LEED requirements.', stat1n: '22', stat1l: 'Floors serviced', stat2n: '99.4%', stat2l: 'On-schedule visits' },
  { label: 'Property photo', meta: 'Residential · Richmond', title: 'Waterfront condo grounds program', desc: 'Full grounds care and seasonal planting for a two-tower waterfront community with extensive shared landscaping.', stat1n: '4.2ac', stat1l: 'Grounds maintained', stat2n: '0', stat2l: 'Slip claims, 3 yrs' },
  { label: 'Property photo', meta: 'Strata · Coquitlam', title: 'Preventive maintenance overhaul', desc: 'Built a preventive schedule for a 96-unit strata, cutting reactive emergency calls dramatically in the first year.', stat1n: '-48%', stat1l: 'Emergency calls', stat2n: '96', stat2l: 'Units covered' },
  { label: 'Property photo', meta: 'Renovation · North Shore', title: 'Lobby & amenity modernization', desc: 'Managed a full lobby and amenity refresh in an occupied building, delivered on schedule with minimal disruption.', stat1n: '11wk', stat1l: 'On-time delivery', stat2n: '$0', stat2l: 'Over budget' },
  { label: 'Property photo', meta: 'Commercial · Surrey', title: 'Retail plaza turnover program', desc: 'Rapid unit turnovers and common-area upkeep for a busy retail plaza with high tenant movement.', stat1n: '3.5d', stat1l: 'Avg turnover', stat2n: '18', stat2l: 'Units/year' },
  { label: 'Property photo', meta: 'Residential · Tri-Cities', title: 'Winter snow & ice response', desc: 'Priority clearing and salting across a portfolio of townhome complexes through back-to-back heavy winters.', stat1n: '<2hr', stat1l: 'Clear time', stat2n: '14', stat2l: 'Sites covered' },
];

const STATS = [
  { n: '340+', l: 'Properties currently under care' },
  { n: '2.8M', l: 'Square feet maintained' },
  { n: '94%', l: 'Client retention year over year' },
  { n: '2+', l: 'Years serving the region' },
];

const QUOTES = [
  { text: 'Borcelle is the first vendor I genuinely don’t have to manage. Things get handled — and I hear about it before the owners do.', name: 'Danielle Reyes', role: 'Portfolio Director, Cascade REIT' },
  { text: 'The monthly reporting alone changed our council meetings. We spend time on decisions, not on chasing status updates.', name: 'Marcus Yee', role: 'Strata Council President' },
  { text: 'When a pipe let go on a Sunday, they had it stabilized within the hour and a full write-up by Monday. That’s the whole reason we switched.', name: 'Priya Anand', role: 'Owner, mixed-use building' },
];

export default function PortfolioPage() {
  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 85% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="portfolio" />
          <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(48px,6vw,90px) 28px clamp(44px,5vw,64px)' }}>
            <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>Portfolio</span>
            </div>
            <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(40px,5.6vw,72px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 24px', maxWidth: 900 }}>
              Results you can measure, buildings you can point to.
            </h1>
            <p className="page-enter page-enter-3" style={{ fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.6, color: '#c3bcb0', maxWidth: 600, margin: 0 }}>
              A selection of the residential, strata and commercial properties we care for across Metro Vancouver —
              and the outcomes that keep owners with us.
            </p>
          </section>
        </div>
      </div>

      {/* FEATURED */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 28px clamp(24px,3vw,36px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 'clamp(28px,4vw,48px)',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.11)',
            borderRadius: 24,
            padding: 'clamp(22px,3vw,32px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              minHeight: 280,
              minWidth: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'repeating-linear-gradient(45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03) 11px,transparent 11px,transparent 22px)',
              }}
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
              Property photo
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                background: '#cbc3b4',
                color: '#141311',
                padding: '6px 13px',
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Featured
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#cbc3b4', fontWeight: 500, marginBottom: 14 }}>
              Strata Management &middot; Burnaby
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
              Turning around a 180-unit strata community
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: '0 0 26px' }}>
              A council frustrated by slow, fragmented vendors handed us the full building. We consolidated five
              contracts into one program, rebuilt the maintenance schedule, and stood up transparent monthly
              reporting.
            </p>
            <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, color: '#cbc3b4', letterSpacing: '-0.01em' }}>-62%</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Response time</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em' }}>5&rarr;1</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Vendors</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em' }}>98%</div>
                <div style={{ fontSize: 12.5, color: '#8f887c', marginTop: 5 }}>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CASE GRID */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(20px,3vw,36px) 28px clamp(44px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {CASES.map((c) => (
            <article
              key={c.title}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  background: 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'repeating-linear-gradient(45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03) 11px,transparent 11px,transparent 22px)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    background: 'rgba(18,17,15,0.7)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    padding: '7px 11px',
                    borderRadius: 999,
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#b2aca1',
                  }}
                >
                  {c.label}
                </div>
              </div>
              <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#cbc3b4', fontWeight: 500, marginBottom: 12 }}>
                  {c.meta}
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 20, lineHeight: 1.15, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#b2aca1', margin: '0 0 20px' }}>{c.desc}</p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>{c.stat1n}</div>
                    <div style={{ fontSize: 11.5, color: '#8f887c', marginTop: 3 }}>{c.stat1l}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 20 }}>{c.stat2n}</div>
                    <div style={{ fontSize: 11.5, color: '#8f887c', marginTop: 3 }}>{c.stat2l}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* STAT BAND */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px clamp(48px,6vw,80px)' }}>
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
          {STATS.map((s) => (
            <div key={s.l}>
              <div style={{ fontWeight: 600, fontSize: 'clamp(34px,4vw,50px)', lineHeight: 1, letterSpacing: '-0.025em' }}>{s.n}</div>
              <div style={{ fontSize: 13.5, color: '#b2aca1', marginTop: 12, lineHeight: 1.45 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(24px,3vw,40px) 28px clamp(48px,6vw,84px)' }}>
        <div style={{ maxWidth: 600, marginBottom: 44 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
            In their words
          </div>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', margin: 0 }}>
            What owners and managers say
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              style={{
                margin: 0,
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                padding: '30px 28px',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 36, color: '#b2aca1', lineHeight: 1, marginBottom: 12 }}>&ldquo;</div>
              <blockquote style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.6, color: '#e2dccf', flex: 1 }}>{q.text}</blockquote>
              <figcaption style={{ fontSize: 13.5, color: '#f4f2ee', fontWeight: 600 }}>
                {q.name}
                <span style={{ display: 'block', fontWeight: 400, color: '#857f74', marginTop: 4 }}>{q.role}</span>
              </figcaption>
            </figure>
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
          <h2 style={{ position: 'relative', fontWeight: 600, fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Your property could be our next case study
          </h2>
          <p style={{ position: 'relative', fontSize: 16, lineHeight: 1.6, color: '#c3bcb0', margin: '0 auto 30px', maxWidth: 520 }}>
            Let&rsquo;s talk about what &ldquo;well-maintained&rdquo; should look like for your portfolio.
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
