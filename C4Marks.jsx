// C4 — New mark options (user didn't love the original C4 interlocking mark)
// Three fresh ideas that keep Stripe/Mercury polish, ditch the asymmetric circles.

// Option 1: "Cartouche S" — a monogram S inside a vermilion seal-rectangle
// with a cut corner, evoking both a hanko and a precision machined piece.
function C4v2_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <defs>
        <clipPath id="c4v2-cut">
          <polygon points="0,0 100,0 100,80 80,100 0,100" />
        </clipPath>
      </defs>
      <g clipPath="url(#c4v2-cut)">
        <rect width="100" height="100" fill={seal} />
      </g>
      {/* inner bone rectangle with S */}
      <g clipPath="url(#c4v2-cut)">
        <rect x="8" y="8" width="84" height="84" fill="none" stroke="#F8F4EA" strokeWidth="2" opacity="0.8" />
      </g>
      <text x="50" y="68" textAnchor="middle"
        fontFamily='"Source Serif 4", Georgia, serif'
        fontSize="58" fontWeight="500" fill="#F8F4EA"
        letterSpacing="-0.02em">S</text>
    </svg>
  );
}

// Option 2: "Gate" — a stylized torii/gateway form in ink, with vermilion
// seal square as keystone. Abstract enough to not read as literal torii.
function C4v3_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {/* two vertical pillars */}
      <rect x="18" y="28" width="12" height="64" fill={color} />
      <rect x="70" y="28" width="12" height="64" fill={color} />
      {/* crossbeam */}
      <rect x="10" y="20" width="80" height="10" fill={color} />
      {/* seal square as keystone in opening */}
      <rect x="42" y="54" width="16" height="16" fill={seal} />
    </svg>
  );
}

// Option 3: "Arc S" — a clean geometric monogram S built from two arcs,
// with a vermilion seal dot at the terminal. Reads distinctly modern
// (like Stripe's M or Mercury's circle) but carries the seal motif.
function C4v4_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <path
        d="M 78 28 Q 78 14, 58 14 L 38 14 Q 18 14, 18 34 Q 18 50, 38 50 L 62 50 Q 82 50, 82 66 Q 82 86, 62 86 L 42 86 Q 22 86, 22 72"
        fill="none" stroke={color} strokeWidth="12" strokeLinecap="square"
      />
      <rect x="72" y="60" width="14" height="14" fill={seal} />
    </svg>
  );
}

function C4v2_Wordmark({ size = 40, dark = false, Mark = C4v2_MarkSVG }) {
  const fg = dark ? TECH.kinari : TECH.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3 }}>
      <Mark size={size * 1.0} color={fg} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.72, fontWeight: 500, color: fg,
        letterSpacing: '-0.045em', lineHeight: 1,
      }}>Shoken</div>
    </div>
  );
}

window.C4v2_MarkSVG = C4v2_MarkSVG;
window.C4v3_MarkSVG = C4v3_MarkSVG;
window.C4v4_MarkSVG = C4v4_MarkSVG;
window.C4v2_Wordmark = C4v2_Wordmark;
