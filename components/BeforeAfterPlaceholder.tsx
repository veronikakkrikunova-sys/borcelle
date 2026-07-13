'use client';

import { useCallback, useRef, useState } from 'react';

interface BeforeAfterPlaceholderProps {
  label: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export default function BeforeAfterPlaceholder({ label, beforeSrc, afterSrc }: BeforeAfterPlaceholderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const chipBase: React.CSSProperties = {
    position: 'absolute',
    top: 14,
    background: 'rgba(18,17,15,0.72)',
    border: '1px solid rgba(255,255,255,0.16)',
    padding: '6px 13px',
    borderRadius: 999,
    fontSize: 10.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#f4f2ee',
    fontWeight: 600,
    pointerEvents: 'none',
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: 'relative',
        aspectRatio: '3/4',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.12)',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {afterSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={afterSrc}
          alt={`${label} — after`}
          draggable={false}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        /* "after" layer placeholder — full, lighter */
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255,255,255,0.05)',
            backgroundImage:
              'repeating-linear-gradient(45deg,rgba(255,255,255,0.035),rgba(255,255,255,0.035) 11px,transparent 11px,transparent 22px)',
          }}
        />
      )}
      {beforeSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={beforeSrc}
          alt={`${label} — before`}
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />
      ) : (
        /* "before" layer placeholder — clipped, darker/denser */
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.28)',
            backgroundImage:
              'repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05) 7px,transparent 7px,transparent 14px)',
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />
      )}

      <span style={{ ...chipBase, left: 14 }}>Before</span>
      <span style={{ ...chipBase, right: 14 }}>After</span>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: 2,
          background: 'rgba(255,255,255,0.85)',
          transform: 'translateX(-1px)',
          boxShadow: '0 0 12px rgba(0,0,0,0.4)',
        }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`${label} — drag to compare before and after`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'ew-resize',
          margin: 0,
        }}
      />
    </div>
  );
}
