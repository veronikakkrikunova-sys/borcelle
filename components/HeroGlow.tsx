/**
 * Signature hero atmosphere, reused across every page: a low glow behind a
 * fluted architectural panel texture, with a full-circle ring accent nodding
 * to full-circle property coverage. `accentRgb` overrides the default
 * "brass dusk" tone (as an "r,g,b" triplet) per page, e.g. for a grey variant.
 */
export default function HeroGlow({ accentRgb = '224,173,110' }: { accentRgb?: string }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(90deg,rgba(13,140,110,0.09) 0 1px,transparent 1px 16px)',
          opacity: 0.5,
          WebkitMaskImage: 'linear-gradient(105deg,#000,transparent 58%)',
          maskImage: 'linear-gradient(105deg,#000,transparent 58%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-22%',
          right: '-8%',
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: `radial-gradient(circle,rgba(${accentRgb},0.32) 0%,rgba(${accentRgb},0) 70%)`,
          filter: 'blur(6px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-12%',
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(203,195,180,0.1) 0%,rgba(203,195,180,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-42%',
          right: '2%',
          width: 640,
          height: 640,
          borderRadius: '50%',
          border: `1px solid rgba(${accentRgb},0.22)`,
          transform: 'rotate(-8deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-32%',
          right: '13%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: `1px solid rgba(${accentRgb},0.14)`,
        }}
      />
    </div>
  );
}
