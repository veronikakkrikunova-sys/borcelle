'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: 'div' | 'section';
}

export default function Reveal({ children, delay = 0, className, style, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const revealClassName = `reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;
  const revealStyle: React.CSSProperties = { transitionDelay: `${delay}ms`, ...style };

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement & HTMLElement>} className={revealClassName} style={revealStyle}>
      {children}
    </Tag>
  );
}
