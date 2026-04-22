// DirectionA — Institutional
// Reference: FT masthead, Penguin Classics spines, Swiss annual reports.
// Wordmark: high-contrast serif, all-lowercase, with a vermilion rule.
// Ethos: restraint and whitespace. The brand lives in the hairline rule.

const A_COLORS = {
  ink: '#15120E',
  sumi: '#3D3831',
  mist: '#8A8278',
  rule: '#D9D1C2',
  bone: '#F4EFE5',
  paper: '#FAF6ED',
  vermilion: '#AE2E24',
  gold: '#917233',
};

function A_Wordmark({ size = 72, color = A_COLORS.ink, rule = A_COLORS.vermilion }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: size * 0.11 }}>
      <div style={{
        height: 1, width: size * 0.6, background: rule,
      }} />
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: size, fontWeight: 400, color, lineHeight: 0.9,
        letterSpacing: '-0.02em', fontFeatureSettings: '"kern","liga"',
      }}>
        shoken
      </div>
    </div>
  );
}

function A_Mark({ size = 48 }) {
  return (
    <div style={{
      width: size, height: size,
      background: A_COLORS.ink,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      padding: size * 0.12,
      position: 'relative',
    }}>
      <div style={{ height: 1, width: size * 0.35, background: A_COLORS.vermilion, position: 'absolute', top: size * 0.28, left: size * 0.12 }} />
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: size * 0.52, fontWeight: 400, color: A_COLORS.bone,
        lineHeight: 1, letterSpacing: '-0.03em',
      }}>
        s
      </div>
    </div>
  );
}

function A_Letterhead() {
  const L = A_COLORS;
  return (
    <div style={{
      background: L.paper, padding: '28px 32px 24px',
      fontFamily: '"Inter Tight", sans-serif', color: L.ink,
      width: '100%', height: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <A_Wordmark size={28} />
        <div style={{ fontSize: 9, color: L.mist, textAlign: 'right', lineHeight: 1.5, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Shoken, Inc.<br />
          156 Greenwich Street<br />
          New York, NY 10006
        </div>
      </div>
      <div style={{ height: 1, background: L.ink, marginTop: 18, marginBottom: 18 }} />
      <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: L.mist, marginBottom: 8 }}>
        Notice of Validation · INV-2026-0421
      </div>
      <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 15, lineHeight: 1.4, color: L.ink, fontWeight: 400 }}>
        Invoice submitted to the Department of<br />Health and Human Services.
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 8, color: L.mist, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <div style={{ width: 6, height: 6, background: L.vermilion }} />
        Filed 22 April 2026 · 14:02 EDT
      </div>
    </div>
  );
}

function A_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size, background: A_COLORS.ink,
      borderRadius: size * 0.22, position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ position: 'absolute', top: '28%', left: '24%', width: '20%', height: 1, background: A_COLORS.vermilion }} />
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: size * 0.58, fontWeight: 400, color: A_COLORS.bone,
        lineHeight: 1, marginTop: size * 0.08,
      }}>
        s
      </div>
    </div>
  );
}

function A_Palette() {
  const swatches = [
    ['Ink', A_COLORS.ink, A_COLORS.bone],
    ['Sumi', A_COLORS.sumi, A_COLORS.bone],
    ['Mist', A_COLORS.mist, A_COLORS.ink],
    ['Rule', A_COLORS.rule, A_COLORS.ink],
    ['Bone', A_COLORS.bone, A_COLORS.ink],
    ['Vermilion', A_COLORS.vermilion, A_COLORS.bone],
    ['Gold', A_COLORS.gold, A_COLORS.bone],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0, width: '100%', height: '100%' }}>
      {swatches.map(([name, bg, fg]) => (
        <div key={name} style={{
          background: bg, color: fg, display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', padding: 10,
          fontFamily: '"Inter Tight", sans-serif',
        }}>
          <div style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.85 }}>{name}</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, opacity: 0.75 }}>{bg.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}

function A_BusinessCard() {
  const L = A_COLORS;
  return (
    <div style={{
      background: L.paper, width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      padding: 18, boxSizing: 'border-box', position: 'relative',
      fontFamily: '"Inter Tight", sans-serif', color: L.ink,
    }}>
      <A_Wordmark size={22} />
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: L.ink }}>Ayako Tanaka</div>
        <div style={{ fontSize: 10, color: L.mist, marginTop: 2 }}>Founder & CEO</div>
        <div style={{ height: 1, background: L.rule, margin: '10px 0 8px', width: 28 }} />
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, color: L.sumi, lineHeight: 1.6 }}>
          ayako@shoken.gov.tools<br />
          +1 212 555 0142
        </div>
      </div>
    </div>
  );
}

function A_Seal({ size = 88 }) {
  return (
    <div style={{
      width: size, height: size, background: A_COLORS.vermilion,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', inset: 6, border: `1px solid ${A_COLORS.paper}`, opacity: 0.5 }} />
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: size * 0.42, color: A_COLORS.paper, fontWeight: 400,
        letterSpacing: '0.05em',
      }}>
        S·K
      </div>
    </div>
  );
}

window.A_Wordmark = A_Wordmark;
window.A_Mark = A_Mark;
window.A_Letterhead = A_Letterhead;
window.A_AppIcon = A_AppIcon;
window.A_Palette = A_Palette;
window.A_BusinessCard = A_BusinessCard;
window.A_Seal = A_Seal;
window.A_COLORS = A_COLORS;
