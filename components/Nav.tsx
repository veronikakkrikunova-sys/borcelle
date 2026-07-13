'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

type NavKey = 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'legal';

const HEADER_PADDING_Y = 18;

const LINKS: { k: NavKey; label: string; href: string }[] = [
  { k: 'services', label: 'Services', href: '/services' },
  { k: 'about', label: 'About', href: '/about' },
  { k: 'legal', label: 'Service Terms', href: '/service-terms' },
];

const linkBase: React.CSSProperties = {
  textDecoration: 'none',
  fontFamily: "'General Sans',sans-serif",
  fontSize: '14.5px',
  fontWeight: 500,
  color: 'rgba(244,247,252,0.72)',
  padding: '9px 16px',
  borderRadius: '999px',
};

export default function Nav({ current }: { current: NavKey }) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(1200);
  const [scrolled, setScrolled] = useState(false);
  const [rowHeight, setRowHeight] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // position:fixed (rather than sticky) so the nav reliably stays put across
  // every ancestor wrapper; this spacer reserves its place in normal flow.
  // Measures the logo/links row only, so an open mobile panel (which grows
  // the header) never affects the reserved space and shifts the page.
  useEffect(() => {
    const measure = () => setRowHeight(rowRef.current?.offsetHeight ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const mobile = width < 900;
  const compact = width < 480;
  const showMobilePanel = mobile && open;
  const floating = scrolled || showMobilePanel;

  return (
    <div style={{ width: '100%', fontFamily: "'General Sans',system-ui,sans-serif" }}>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: `${HEADER_PADDING_Y}px 0`,
          background: floating ? 'rgba(90,90,90,0.62)' : 'transparent',
          backdropFilter: floating ? 'saturate(1.8) blur(22px)' : 'none',
          WebkitBackdropFilter: floating ? 'saturate(1.8) blur(22px)' : 'none',
          borderBottom: floating ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: floating ? 'inset 0 1px 0 rgba(255,255,255,0.12)' : 'none',
          transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div
          ref={rowRef}
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: `0 ${compact ? 16 : 28}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: compact ? 10 : 24,
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, flex: 'none', minWidth: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/borcelle-mark.png" alt="Borcelle" style={{ height: compact ? 32 : 38, width: 'auto', display: 'block', flex: 'none' }} />
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
              <span style={{ fontWeight: 600, fontSize: compact ? 18 : 22, letterSpacing: '0.01em', color: '#f4f2ee', lineHeight: 1.05, whiteSpace: 'nowrap' }}>
                Borcelle
              </span>
              {!compact && (
                <span
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.32em',
                    color: '#8f887c',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Property Services
                </span>
              )}
            </span>
          </Link>

          {!mobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <nav
                className="nav-glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 999,
                  padding: '7px 10px',
                }}
              >
                {LINKS.map((link) => (
                  <Link
                    key={link.k}
                    href={link.href}
                    className="nav-link"
                    style={
                      link.k === current
                        ? { ...linkBase, color: '#ffffff', background: 'rgba(255,255,255,0.1)', fontWeight: 600 }
                        : linkBase
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
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
                  fontSize: '14.5px',
                  fontWeight: 600,
                  padding: '9px 9px 9px 20px',
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
            </div>
          )}

          {mobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 6 : 10, flex: 'none' }}>
              <Link
                href="/contact"
                className="btn-brand"
                aria-label="Contact us"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: compact ? 6 : 8,
                  background: '#0d8c6e',
                  color: '#f4f2ee',
                  fontSize: compact ? 13 : 14,
                  fontWeight: 600,
                  padding: compact ? '8px 8px 8px 12px' : '9px 9px 9px 16px',
                  borderRadius: 999,
                  flex: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Contact us
                <span
                  style={{
                    width: compact ? 21 : 24,
                    height: compact ? 21 : 24,
                    borderRadius: '50%',
                    background: '#f4f2ee',
                    color: '#0d8c6e',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                  }}
                >
                  <ArrowIcon size={compact ? 10 : 11} />
                </span>
              </Link>
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Menu"
                className="nav-glass"
                style={{
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.06)',
                  width: compact ? 40 : 46,
                  height: compact ? 40 : 46,
                  borderRadius: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  cursor: 'pointer',
                  flex: 'none',
                }}
              >
                <span style={{ width: compact ? 16 : 20, height: 2, background: '#f4f2ee', display: 'block', borderRadius: 2 }} />
                <span style={{ width: compact ? 16 : 20, height: 2, background: '#f4f2ee', display: 'block', borderRadius: 2 }} />
                <span style={{ width: compact ? 16 : 20, height: 2, background: '#f4f2ee', display: 'block', borderRadius: 2 }} />
              </button>
            </div>
          )}
        </div>

        {showMobilePanel && (
          <div className="nav-glass" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(80,80,80,0.85)', padding: `14px ${compact ? 16 : 28}px 26px` }}>
            {LINKS.map((link) => (
              <Link
                key={link.k}
                href={link.href}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: '#e7edf7',
                  fontSize: 16,
                  fontWeight: 500,
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 18, fontSize: 13, color: '#b2aca1' }}>
              Call us:{' '}
              <a href="tel:+17783234176" style={{ color: '#cbc3b4', textDecoration: 'none', fontWeight: 600 }}>
                778 323 4176
              </a>
            </div>
          </div>
        )}
      </header>
      <div style={{ height: rowHeight ? rowHeight + HEADER_PADDING_Y * 2 : 0 }} />
    </div>
  );
}
