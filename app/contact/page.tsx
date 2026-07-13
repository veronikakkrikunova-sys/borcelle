import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import HeroGlow from '@/components/HeroGlow';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact | Borcelle Property Services — Greater Vancouver',
  description:
    'Contact Borcelle Property Services — request a quote or book a property walkthrough. Serving Vancouver, Burnaby, Richmond, the North Shore, Surrey, Coquitlam and the Tri-Cities.',
};

const AREAS = ['Vancouver', 'Burnaby', 'Richmond', 'North Vancouver', 'West Vancouver', 'Surrey', 'Coquitlam', 'Port Moody', 'New Westminster'];

const PINS = [
  { label: 'Vancouver', left: '30%', top: '46%' },
  { label: 'Burnaby', left: '55%', top: '40%' },
  { label: 'Richmond', left: '34%', top: '70%' },
  { label: 'North Shore', left: '46%', top: '18%' },
  { label: 'Coquitlam', left: '72%', top: '32%' },
];

export default function ContactPage() {
  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 80% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="contact" />
          <section style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(44px,5vw,80px) 28px clamp(36px,4vw,48px)' }}>
            <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>Contact</span>
            </div>
            <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(38px,5.2vw,64px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '0 0 20px', maxWidth: 760 }}>
              Tell us about your property.
            </h1>
            <p className="page-enter page-enter-3" style={{ fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, color: '#c3bcb0', maxWidth: 600, margin: 0 }}>
              Send a few details and we&rsquo;ll schedule a walkthrough, then return a clear, itemized proposal within
              three business days.
            </p>
          </section>
        </div>
      </div>

      {/* FORM + INFO */}
      <Reveal
        as="section"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(32px,4vw,56px) 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 'clamp(32px,5vw,56px)',
          alignItems: 'start',
        }}
      >
        <div>
          <ContactForm />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '28px 30px', background: 'rgba(255,255,255,0.04)' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 20 }}>
              Reach us directly
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <div style={{ fontSize: 12, color: '#857f74', marginBottom: 5 }}>Phone</div>
                <a href="tel:+17783234176" className="link-fade" style={{ fontWeight: 600, fontSize: 22, color: '#f4f2ee', textDecoration: 'none', letterSpacing: '-0.01em' }}>
                  778 323 4176
                </a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#857f74', marginBottom: 5 }}>Email</div>
                <a href="mailto:info@borcelle.ca" className="link-fade" style={{ fontSize: 15, color: '#f4f2ee', textDecoration: 'none', fontWeight: 500 }}>
                  info@borcelle.ca
                </a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#857f74', marginBottom: 5 }}>Hours</div>
                <div style={{ fontSize: 15, color: '#e2dccf', lineHeight: 1.5 }}>
                  Mon&ndash;Sun&nbsp; 7:30am&ndash;9:30pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* SERVICE AREA MAP */}
      <Reveal as="section" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(32px,4vw,56px) 28px clamp(72px,8vw,110px)' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 24,
            padding: 'clamp(32px,4vw,52px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 'clamp(36px,5vw,60px)',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#857f74', fontWeight: 500, marginBottom: 16 }}>
              Service area
            </div>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 18px' }}>
              Serving Greater Vancouver &amp; the Lower Mainland
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#b2aca1', margin: '0 0 26px', maxWidth: 460 }}>
              From the North Shore to the Fraser Valley, our crews are close by — which is how we keep response times
              short. If your property is in the region, we can help.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '12px 20px' }}>
              {AREAS.map((a) => (
                <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: '#cbc4b8' }}>
                  <span style={{ width: 7, height: 7, background: '#cbc3b4', transform: 'rotate(45deg)', display: 'inline-block' }} />
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'linear-gradient(150deg,#2a2823,#141311)',
              minWidth: 0,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div style={{ position: 'absolute', left: '8%', top: '58%', width: '64%', height: 5, background: 'rgba(203,195,180,0.28)', borderRadius: 3, transform: 'rotate(-8deg)' }} />
            <div style={{ position: 'absolute', left: '44%', top: '12%', width: 5, height: '70%', background: 'rgba(203,195,180,0.28)', borderRadius: 3, transform: 'rotate(6deg)' }} />
            <div style={{ position: 'absolute', left: '20%', top: '20%', width: '30%', height: '22%', background: 'rgba(199,191,175,0.28)', borderRadius: '40% 50% 45% 55%' }} />
            {PINS.map((p) => (
              <div key={p.label} style={{ position: 'absolute', left: p.left, top: p.top, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 12, height: 12, background: '#cbc3b4', border: '2px solid #141311', transform: 'rotate(45deg)', display: 'block', boxShadow: '0 2px 6px rgba(0,0,0,0.4)' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#f4f2ee', background: 'rgba(18,17,15,0.8)', padding: '2px 8px', borderRadius: 999, whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
                  {p.label}
                </span>
              </div>
            ))}
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                background: 'rgba(18,17,15,0.8)',
                border: '1px solid rgba(255,255,255,0.14)',
                padding: '6px 11px',
                borderRadius: 999,
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#b2aca1',
              }}
            >
              Coverage map
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
