// DirectionC — Modern Meiji
// Reference: contemporary Japanese graphic design (Kenya Hara, Shin Matsunaga),
// Muji-meets-Stripe. A stylized paulownia/chrysanthemum-inspired geometric mark.
// Ethos: distinctly Japanese-modern without cliché. Color stays restrained but
// the mark is the most memorable. Feels designed by an actual design office.

const C_COLORS = {
  sumi: '#1C1A17',        // softened black
  charcoal: '#3A3632',
  stone: '#8A857D',
  fog: '#D4CEC2',
  shoji: '#EEE9DD',        // paper-screen white
  kinari: '#F8F4EA',       // undyed silk
  shu: '#C2382F',          // brighter vermilion — more alive
  shuDark: '#8F261F',
  cha: '#6B4A2A',          // tea brown
  mizu: '#5B7A8A',         // muted water blue
};

// Mark: a geometric six-petal "plum/paulownia" constructed from overlapping circles,
// with a small square seal at center. Rendered as SVG so it scales cleanly.
function C_MarkSVG({ size = 56, color = C_COLORS.shu, seal = C_COLORS.sumi }) {
  // six petals around a center — based on a hexagonal plum blossom geometry
  const cx = 50, cy = 50, r = 22, R = 24;
  const petals = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {/* petals */}
      {petals.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={R} fill={color} opacity={0.92} />
      ))}
      {/* center cut-out (shoji/negative space) */}
      <circle cx={cx} cy={cy} r={14} fill={C_COLORS.kinari} />
      {/* center seal square */}
      <rect x={cx - 6} y={cy - 6} width={12} height={12} fill={seal} />
    </svg>
  );
}

function C_Wordmark({ size = 40, stacked = false }) {
  const mark = <C_MarkSVG size={size * 1.05} />;
  const word = (
    <div style={{
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: size * 0.78, fontWeight: 400, color: C_COLORS.sumi,
      letterSpacing: '-0.015em', lineHeight: 1,
      fontStyle: 'normal',
    }}>
      Shoken
    </div>
  );
  if (stacked) {
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size * 0.22 }}>
        {mark}{word}
      </div>
    );
  }
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28 }}>
      {mark}{word}
    </div>
  );
}

function C_Letterhead() {
  const L = C_COLORS;
  return (
    <div style={{
      background: L.kinari, padding: '26px 30px 22px',
      fontFamily: '"Inter Tight", sans-serif', color: L.sumi,
      width: '100%', height: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', position: 'relative',
    }}>
      {/* vertical rule (homage to vertical Japanese type) */}
      <div style={{ position: 'absolute', top: 26, bottom: 26, right: 30, width: 1, background: L.fog }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <C_MarkSVG size={34} />
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: 22, fontWeight: 400, color: L.sumi, letterSpacing: '-0.015em',
        }}>Shoken</div>
      </div>

      <div style={{ marginTop: 22, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: L.stone }}>
        証券 · Notice of Validation
      </div>
      <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 15, lineHeight: 1.45, color: L.sumi, marginTop: 8, fontWeight: 400, maxWidth: 180 }}>
        Invoice <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13 }}>INV-2026-0421</span> validated and submitted to DHHS.
      </div>

      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 9, color: L.stone, fontFamily: '"JetBrains Mono", monospace', paddingRight: 20 }}>
        22 Apr 2026 · 14:02 EDT · §4.2
      </div>
    </div>
  );
}

function C_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: size * 0.22,
      background: C_COLORS.kinari,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      boxShadow: `inset 0 0 0 1px ${C_COLORS.fog}`,
    }}>
      <C_MarkSVG size={size * 0.66} />
    </div>
  );
}

function C_Palette() {
  const swatches = [
    ['Sumi', C_COLORS.sumi, C_COLORS.kinari, '墨'],
    ['Charcoal', C_COLORS.charcoal, C_COLORS.kinari, ''],
    ['Stone', C_COLORS.stone, C_COLORS.kinari, ''],
    ['Fog', C_COLORS.fog, C_COLORS.sumi, ''],
    ['Shoji', C_COLORS.shoji, C_COLORS.sumi, '障子'],
    ['Kinari', C_COLORS.kinari, C_COLORS.sumi, '生成'],
    ['Shu', C_COLORS.shu, C_COLORS.kinari, '朱'],
    ['Cha', C_COLORS.cha, C_COLORS.kinari, '茶'],
    ['Mizu', C_COLORS.mizu, C_COLORS.kinari, '水'],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: 0, width: '100%', height: '100%' }}>
      {swatches.map(([name, bg, fg, jp]) => (
        <div key={name} style={{
          background: bg, color: fg,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: 10, fontFamily: '"Inter Tight", sans-serif',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 10, fontWeight: 500 }}>{name}</div>
            {jp && <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 14, opacity: 0.7 }}>{jp}</div>}
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, opacity: 0.7 }}>{bg.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}

function C_BusinessCard() {
  const L = C_COLORS;
  return (
    <div style={{
      background: L.kinari, width: '100%', height: '100%',
      padding: 18, boxSizing: 'border-box', position: 'relative',
      fontFamily: '"Inter Tight", sans-serif', color: L.sumi,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: 18, fontWeight: 400, color: L.sumi, letterSpacing: '-0.015em',
        }}>Shoken</div>
        <C_MarkSVG size={28} />
      </div>
      <div>
        <div style={{ height: 1, width: 24, background: L.shu, marginBottom: 8 }} />
        <div style={{ fontSize: 12, fontWeight: 500, color: L.sumi }}>Ayako Tanaka</div>
        <div style={{ fontSize: 9, color: L.stone, marginTop: 2 }}>Founder & CEO</div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 8, color: L.charcoal, marginTop: 8, lineHeight: 1.6 }}>
          ayako@shoken.gov<br />
          +1 212 555 0142
        </div>
      </div>
    </div>
  );
}

function C_Seal({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, background: C_COLORS.kinari,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: `inset 0 0 0 1px ${C_COLORS.fog}`,
    }}>
      <C_MarkSVG size={size * 0.72} />
    </div>
  );
}

window.C_Wordmark = C_Wordmark;
window.C_MarkSVG = C_MarkSVG;
window.C_Letterhead = C_Letterhead;
window.C_AppIcon = C_AppIcon;
window.C_Palette = C_Palette;
window.C_BusinessCard = C_BusinessCard;
window.C_Seal = C_Seal;
window.C_COLORS = C_COLORS;
