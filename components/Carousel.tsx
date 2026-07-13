'use client';

import { useEffect, useRef, useState } from 'react';
import ArrowIcon from './ArrowIcon';

export default function Carousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = scrollRef.current;
    if (!el) return;
    const onResize = () => updateEdges();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollByAmount = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * dir, behavior: 'smooth' });
  };

  const arrowButtonStyle: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.14)',
    color: '#f4f2ee',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flex: 'none',
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={updateEdges}
        className="carousel-scroll"
        style={{
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          disabled={atStart}
          aria-label="Previous"
          className="carousel-arrow btn-ghost"
          style={arrowButtonStyle}
        >
          <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}>
            <ArrowIcon size={15} />
          </span>
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          disabled={atEnd}
          aria-label="Next"
          className="carousel-arrow btn-ghost"
          style={arrowButtonStyle}
        >
          <ArrowIcon size={15} />
        </button>
      </div>
    </div>
  );
}
