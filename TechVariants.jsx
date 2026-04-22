// Modern Meiji — Tech Variants
// Four pushes toward "tech company" while preserving the plum-blossom lineage.
// C1: Tight grotesk wordmark + geometric mark (Linear/Vercel feel)
// C2: Monospace wordmark + minimal pixel mark (developer-tool feel, Railway/Warp)
// C3: Dark-first with glowing mark (Arc/Raycast feel)
// C4: Compressed mark + ultra-modern sans (Stripe/Mercury feel)

const TECH = {
  // Shared palette — evolved from C, pushed colder and more saturated for tech feel
  ink: '#0B0A08',
  graphite: '#1C1A17',
  slate: '#2D2A26',
  char: '#3A3632',
  stone: '#8A857D',
  fog: '#D4CEC2',
  shoji: '#EEE9DD',
  kinari: '#F8F4EA',
  paper: '#FDFAF2',
  shu: '#C2382F',
  shuBright: '#D94438',      // a little more alive for tech
  shuDim: '#8F261F',
  cha: '#6B4A2A',
  mizu: '#5B7A8A',
};

// ══════════════════════════════════════════════════════════════
// C1 — LINEAR/VERCEL
// Tight geometric wordmark in sans. Mark is the plum-blossom
// simplified to 3 overlapping circles + seal dot. Monospace
// as secondary brand font. Mostly light surfaces with crisp lines.
// ══════════════════════════════════════════════════════════════

function C1_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  // Simplified: 3 overlapping circles forming a tri-petal, with a seal dot
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <circle cx="50" cy="32" r="22" fill={color} opacity="0.88" />
      <circle cx="32" cy="62" r="22" fill={color} opacity="0.88" />
      <circle cx="68" cy="62" r="22" fill={color} opacity="0.88" />
      <circle cx="50" cy="52" r="9" fill={TECH.kinari} />
      <circle cx="50" cy="52" r="5" fill={seal} />
    </svg>
  );
}

function C1_Wordmark({ size = 40, dark = false }) {
  const fg = dark ? TECH.kinari : TECH.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32 }}>
      <C1_MarkSVG size={size * 1.05} color={fg} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.7, fontWeight: 600, color: fg,
        letterSpacing: '-0.035em', lineHeight: 1,
      }}>
        Shoken
      </div>
    </div>
  );
}

function C1_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.22,
      background: TECH.ink,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <C1_MarkSVG size={size * 0.62} color={TECH.kinari} seal={TECH.shuBright} />
    </div>
  );
}

function C1_AppShell() {
  // Linear-style workspace chrome
  return (
    <div style={{
      width: '100%', height: '100%', background: TECH.paper,
      fontFamily: '"Inter Tight", sans-serif', color: TECH.ink,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* top bar */}
      <div style={{ height: 38, borderBottom: `1px solid ${TECH.fog}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10 }}>
        <C1_MarkSVG size={18} />
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '-0.02em' }}>Shoken</div>
        <div style={{ width: 1, height: 14, background: TECH.fog, margin: '0 6px' }} />
        <div style={{ fontSize: 11, color: TECH.stone }}>Invoices</div>
        <div style={{ flex: 1 }} />
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: TECH.stone }}>⌘K</div>
      </div>
      {/* body */}
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ width: 140, borderRight: `1px solid ${TECH.fog}`, padding: 12, fontSize: 11, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['Inbox', 'In review', 'Validated', 'Paid', 'Returned'].map((l, i) => (
            <div key={l} style={{
              padding: '5px 8px', borderRadius: 3,
              background: i === 1 ? TECH.shoji : 'transparent',
              color: i === 1 ? TECH.ink : TECH.char,
              fontWeight: i === 1 ? 500 : 400,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: i === 1 ? TECH.shu : TECH.fog }} />
              {l}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 14 }}>
          <div style={{ fontSize: 11, color: TECH.stone, letterSpacing: '0.02em', marginBottom: 8 }}>12 invoices · $4.2M in flight</div>
          {[
            ['INV-0421', 'BronxWorks', '$128,450.00', 'Validating'],
            ['INV-0420', 'Henry St. Settlement', '$84,200.00', 'Awaiting agency'],
            ['INV-0419', 'Good Shepherd Svcs', '$192,100.00', 'Returned'],
          ].map(([id, org, amt, status], i) => (
            <div key={id} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr 80px 80px', gap: 10,
              padding: '7px 6px', fontSize: 11, alignItems: 'center',
              borderBottom: `1px solid ${TECH.fog}`,
            }}>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: TECH.char }}>{id}</span>
              <span>{org}</span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, textAlign: 'right' }}>{amt}</span>
              <span style={{ fontSize: 9.5, color: status === 'Returned' ? TECH.shu : TECH.stone, textAlign: 'right' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// C2 — DEV-TOOL / TERMINAL
// Monospace wordmark. Mark is pixel-grid plum-blossom (9 squares).
// Strong use of mono typography. Feels like Railway, Warp, Linear dev mode.
// ══════════════════════════════════════════════════════════════

function C2_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  // 3x3 pixel-grid plum blossom: corners off, edges on, center = seal
  const U = 100 / 5;
  const cells = [
    [1,0], [3,0],
    [0,1], [2,1], [4,1],
    [1,2], [3,2],
    [2,3],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      {cells.map(([x, y], i) => (
        <rect key={i} x={x * U + 4} y={y * U + 4} width={U - 8} height={U - 8} fill={color} />
      ))}
      <rect x={2 * U + 4} y={2 * U + 4} width={U - 8} height={U - 8} fill={seal} />
    </svg>
  );
}

function C2_Wordmark({ size = 40, dark = false }) {
  const fg = dark ? TECH.kinari : TECH.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.35 }}>
      <C2_MarkSVG size={size * 1.05} color={fg} seal={TECH.shu} />
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: size * 0.62, fontWeight: 500, color: fg,
        letterSpacing: '-0.03em', lineHeight: 1,
      }}>
        shoken
      </div>
    </div>
  );
}

function C2_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.22,
      background: TECH.kinari,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${TECH.fog}`, boxSizing: 'border-box',
    }}>
      <C2_MarkSVG size={size * 0.68} color={TECH.ink} seal={TECH.shu} />
    </div>
  );
}

function C2_Terminal() {
  const L = TECH;
  const line = (prefix, text, color) => ({ prefix, text, color });
  const lines = [
    line('$', 'shoken validate INV-2026-0421', L.stone),
    line('→', 'reading schedule ./dhs-hhs-2026-q2.schema', L.char),
    line('→', 'matching 18 line items... ok', L.char),
    line('→', 'reconciling against contract C-42181... ok', L.char),
    line('✓', 'validated · 0 errors · 2 flags', L.shu),
    line('$', '_', L.ink),
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: L.ink,
      fontFamily: '"JetBrains Mono", monospace', color: L.kinari,
      padding: 18, boxSizing: 'border-box', fontSize: 11, lineHeight: 1.65,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, color: L.stone, fontSize: 10 }}>
        <C2_MarkSVG size={14} color={L.kinari} seal={L.shu} />
        shoken · cli · v2.4.1
      </div>
      {lines.map((l, i) => (
        <div key={i} style={{ color: l.color }}>
          <span style={{ color: L.stone, marginRight: 10, fontWeight: 400 }}>{l.prefix}</span>
          {l.text}{i === lines.length - 1 && <span style={{ display: 'inline-block', width: 8, height: 13, background: L.shu, verticalAlign: 'text-top', marginLeft: 2 }} />}
        </div>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// C3 — DARK / GLOWING
// Dark surface first. The mark emits a subtle vermilion glow.
// Wordmark in tight sans. Raycast/Arc/Vercel-dark feel.
// ══════════════════════════════════════════════════════════════

function C3_MarkSVG({ size = 56, glow = true }) {
  // Same geometry as C1 tri-petal but rendered with gradient fills
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="c3-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={TECH.shuBright} stopOpacity="0.5" />
          <stop offset="60%" stopColor={TECH.shu} stopOpacity="0" />
        </radialGradient>
      </defs>
      {glow && <circle cx="50" cy="50" r="48" fill="url(#c3-glow)" />}
      <circle cx="50" cy="32" r="20" fill={TECH.kinari} opacity="0.95" />
      <circle cx="32" cy="62" r="20" fill={TECH.kinari} opacity="0.95" />
      <circle cx="68" cy="62" r="20" fill={TECH.kinari} opacity="0.95" />
      <circle cx="50" cy="52" r="9" fill={TECH.graphite} />
      <circle cx="50" cy="52" r="5" fill={TECH.shuBright} />
    </svg>
  );
}

function C3_Wordmark({ size = 40 }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32 }}>
      <C3_MarkSVG size={size * 1.1} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.72, fontWeight: 600, color: TECH.kinari,
        letterSpacing: '-0.035em', lineHeight: 1,
      }}>
        Shoken
      </div>
    </div>
  );
}

function C3_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.22,
      background: `radial-gradient(circle at 50% 55%, ${TECH.graphite} 0%, ${TECH.ink} 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.05)`,
    }}>
      <C3_MarkSVG size={size * 0.64} />
    </div>
  );
}

function C3_DashCard() {
  const L = TECH;
  return (
    <div style={{
      width: '100%', height: '100%', background: L.ink, color: L.kinari,
      padding: 20, boxSizing: 'border-box',
      fontFamily: '"Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* ambient glow */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 180, height: 180,
        background: `radial-gradient(circle, ${TECH.shu}35 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
        <C3_MarkSVG size={22} />
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '-0.02em' }}>Shoken</div>
        <div style={{ marginLeft: 'auto', fontFamily: '"JetBrains Mono", monospace', fontSize: 9, color: L.stone }}>● live</div>
      </div>

      <div style={{ fontSize: 10, color: L.stone, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>In flight</div>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em' }}>
        $4,218,450<span style={{ color: L.stone, fontSize: 18 }}>.00</span>
      </div>
      <div style={{ fontSize: 11, color: L.stone, marginTop: 2 }}>
        12 invoices · <span style={{ color: L.shuBright }}>2 flagged</span>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
        {[0.9, 0.7, 0.5, 0.8, 0.3, 0.6, 0.95, 0.4, 0.7, 0.85].map((h, i) => (
          <div key={i} style={{ flex: 1, height: h * 42, background: L.shu, opacity: 0.3 + h * 0.5, borderRadius: 1 }} />
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// C4 — COMPRESSED / STRIPE-MERCURY
// Mark is tighter, asymmetric; wordmark is modern sans with precise
// letter-spacing. Think Stripe's refinement, Mercury's banking polish.
// ══════════════════════════════════════════════════════════════

function C4_MarkSVG({ size = 56, color = TECH.ink, seal = TECH.shu }) {
  // Interlocking asymmetric mark — two circles offset + seal rectangle
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <circle cx="38" cy="50" r="28" fill={color} />
      <circle cx="62" cy="50" r="28" fill={color} opacity="0.45" style={{ mixBlendMode: 'multiply' }} />
      <rect x="44" y="44" width="12" height="12" fill={seal} />
    </svg>
  );
}

function C4_Wordmark({ size = 40, dark = false }) {
  const fg = dark ? TECH.kinari : TECH.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3 }}>
      <C4_MarkSVG size={size * 1.0} color={fg} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.72, fontWeight: 500, color: fg,
        letterSpacing: '-0.045em', lineHeight: 1,
      }}>
        Shoken
      </div>
    </div>
  );
}

function C4_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.22,
      background: `linear-gradient(165deg, ${TECH.kinari} 0%, ${TECH.shoji} 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: `1px solid ${TECH.fog}`, boxSizing: 'border-box',
    }}>
      <C4_MarkSVG size={size * 0.64} color={TECH.ink} seal={TECH.shu} />
    </div>
  );
}

function C4_MarketingHero() {
  const L = TECH;
  return (
    <div style={{
      width: '100%', height: '100%', background: L.kinari, color: L.ink,
      padding: 28, boxSizing: 'border-box',
      fontFamily: '"Inter Tight", sans-serif',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <C4_MarkSVG size={22} />
          <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.02em' }}>Shoken</div>
        </div>
        <div style={{ display: 'flex', gap: 18, fontSize: 11, color: L.char }}>
          <span>Product</span><span>Customers</span><span>Company</span>
          <span style={{ background: L.ink, color: L.kinari, padding: '5px 10px', borderRadius: 3, fontSize: 10 }}>Request access →</span>
        </div>
      </div>

      <div style={{ fontSize: 10, color: L.shu, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 10 }}>
        ■ Nonprofit ↔ Government
      </div>
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: 32, lineHeight: 1.06, fontWeight: 400, letterSpacing: '-0.02em',
        maxWidth: 360,
      }}>
        The ledger between<br />mission and government.
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.5, color: L.char, marginTop: 14, maxWidth: 340 }}>
        Shoken assembles and validates human services contract invoices. Weeks of work, compressed to minutes.
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ background: L.ink, color: L.kinari, padding: '9px 14px', fontSize: 12, fontWeight: 500, borderRadius: 3 }}>Request access →</div>
        <div style={{ color: L.char, fontSize: 12 }}>See how it works →</div>
      </div>
    </div>
  );
}

window.TECH = TECH;
Object.assign(window, {
  C1_MarkSVG, C1_Wordmark, C1_AppIcon, C1_AppShell,
  C2_MarkSVG, C2_Wordmark, C2_AppIcon, C2_Terminal,
  C3_MarkSVG, C3_Wordmark, C3_AppIcon, C3_DashCard,
  C4_MarkSVG, C4_Wordmark, C4_AppIcon, C4_MarketingHero,
});
