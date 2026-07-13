import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import HeroGlow from '@/components/HeroGlow';

export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div style={{ position: 'relative', background: 'radial-gradient(135% 85% at 80% -10%,#3a3a39 0%,#201f1e 48%,#141311 100%)' }}>
        <HeroGlow accentRgb="150,150,148" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Nav current="legal" />
          <section style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 28px clamp(36px,4vw,48px)' }}>
            <div className="page-enter page-enter-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span style={{ width: 26, height: 1, background: 'rgba(203,195,180,0.7)' }} />
              <span style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#b2aca1', fontWeight: 500 }}>Legal</span>
            </div>
            <h1 className="page-enter page-enter-2" style={{ fontWeight: 600, fontSize: 'clamp(32px,4.4vw,52px)', lineHeight: 1.04, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
              {title}
            </h1>
            <p className="page-enter page-enter-3" style={{ fontSize: 14.5, color: '#857f74', margin: 0 }}>Effective Date: {effectiveDate}</p>
          </section>
        </div>
      </div>

      <section style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(40px,5vw,64px) 28px clamp(72px,8vw,110px)' }}>
        <div className="legal-content">{children}</div>
      </section>

      <Footer />
    </div>
  );
}
