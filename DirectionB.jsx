// DirectionB — Sovereign Seal
// Reference: imperial hanko stamps, Red Cross seals, consular stationery.
// Wordmark: geometric sans set tight, paired with a square vermilion seal mark.
// Ethos: the seal IS the brand. The mark carries most of the weight; the wordmark supports.

const B_COLORS = {
  ink: '#0F0E0C',
  char: '#2A2622',
  ash: '#6F675C',
  line: '#C9C0AE',
  sand: '#EFE7D6',
  ivory: '#FBF6EB',
  seal: '#9E2420',     // deeper, oxidized red — closer to dried ink
  sealShade: '#7C1915',
  brass: '#7F5F1E',
};

function B_Mark({ size = 56, label = 'S' }) {
  return (
    <div style={{
      width: size, height: size,
      background: B_COLORS.seal,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
      fontFamily: '"Source Serif 4", Georgia, serif',
    }}>
      <div style={{ position: 'absolute', inset: size * 0.08, border: `${Math.max(1, size * 0.018)}px solid ${B_COLORS.ivory}`, opacity: 0.85 }} />
      <div style={{
        fontSize: size * 0.6, color: B_COLORS.ivory, fontWeight: 500,
        lineHeight: 1, letterSpacing: '-0.02em',
      }}>
        {label}
      </div>
    </div>
  );
}

function B_Wordmark({ size = 40, dark = false }) {
  const fg = dark ? B_COLORS.ivory : B_COLORS.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32 }}>
      <B_Mark size={size} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.62, fontWeight: 600, color: fg,
        letterSpacing: '-0.02em', lineHeight: 1,
      }}>
        Shoken
      </div>
    </div>
  );
}

function B_Letterhead() {
  const L = B_COLORS;
  return (
    <div style={{
      background: L.ivory, padding: '24px 28px 22px',
      fontFamily: '"Inter Tight", sans-serif', color: L.ink,
      width: '100%', height: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', position: 'relative',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <B_Wordmark size={26} />
        <div style={{ fontSize: 9, color: L.ash, textAlign: 'right', lineHeight: 1.6, fontFeatureSettings: '"tnum"' }}>
          Shoken, Inc.<br />
          Department Services Division<br />
          New York · Washington · Sacramento
        </div>
      </div>

      <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1, height: 2, background: L.ink }} />
        <div style={{ width: 6, height: 6, background: L.seal, transform: 'rotate(45deg)' }} />
        <div style={{ flex: 1, height: 2, background: L.ink }} />
      </div>

      <div style={{ marginTop: 16, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: L.seal, fontWeight: 600 }}>
        Notice of Validation
      </div>
      <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 16, lineHeight: 1.35, color: L.ink, marginTop: 4, fontWeight: 400 }}>
        Invoice submitted to DHHS <br />for agency review.
      </div>

      <div style={{ flex: 1 }} />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 9,
        color: L.ash, fontFamily: '"JetBrains Mono", monospace',
      }}>
        <div style={{ width: 14, height: 14, background: L.seal, opacity: 0.95, display: 'flex', alignItems: 'center', justifyContent: 'center', color: L.ivory, fontSize: 8, fontWeight: 700 }}>S</div>
        INV-2026-0421 · 22 Apr 2026
      </div>
    </div>
  );
}

function B_AppIcon({ size = 96 }) {
  return (
    <div style={{
      width: size, height: size,
      borderRadius: size * 0.22,
      background: `linear-gradient(180deg, ${B_COLORS.seal} 0%, ${B_COLORS.sealShade} 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: size * 0.09, border: `${Math.max(1, size * 0.015)}px solid ${B_COLORS.ivory}`, opacity: 0.7, borderRadius: size * 0.15 }} />
      <div style={{
        fontFamily: '"Source Serif 4", Georgia, serif',
        fontSize: size * 0.58, color: B_COLORS.ivory, fontWeight: 500,
        letterSpacing: '-0.02em', lineHeight: 1,
      }}>
        S
      </div>
    </div>
  );
}

function B_Palette() {
  const swatches = [
    ['Ink', B_COLORS.ink, B_COLORS.ivory],
    ['Char', B_COLORS.char, B_COLORS.ivory],
    ['Ash', B_COLORS.ash, B_COLORS.ivory],
    ['Line', B_COLORS.line, B_COLORS.ink],
    ['Sand', B_COLORS.sand, B_COLORS.ink],
    ['Ivory', B_COLORS.ivory, B_COLORS.ink],
    ['Seal', B_COLORS.seal, B_COLORS.ivory],
    ['Brass', B_COLORS.brass, B_COLORS.ivory],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 0, width: '100%', height: '100%' }}>
      {swatches.map(([name, bg, fg]) => (
        <div key={name} style={{
          background: bg, color: fg,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: 10, fontFamily: '"Inter Tight", sans-serif',
        }}>
          <div style={{ fontSize: 10, fontWeight: 500 }}>{name}</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, opacity: 0.75 }}>{bg.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
}

function B_BusinessCard() {
  const L = B_COLORS;
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'grid', gridTemplateColumns: '1fr 1.2fr',
      fontFamily: '"Inter Tight", sans-serif', color: L.ink,
    }}>
      <div style={{
        background: L.seal, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 10, border: `1px solid ${L.ivory}`, opacity: 0.7 }} />
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: 58, color: L.ivory, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1,
        }}>S</div>
      </div>
      <div style={{ background: L.ivory, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: '"Inter Tight", sans-serif', fontSize: 13, fontWeight: 600, color: L.ink, letterSpacing: '-0.02em' }}>
          Shoken
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 500, color: L.ink }}>Ayako Tanaka</div>
          <div style={{ fontSize: 9, color: L.ash, marginTop: 2 }}>Founder & CEO</div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 8, color: L.char, marginTop: 10, lineHeight: 1.6 }}>
            ayako@shoken.gov<br />
            +1 212 555 0142
          </div>
        </div>
      </div>
    </div>
  );
}

function B_Seal({ size = 96 }) {
  return <B_Mark size={size} />;
}

window.B_Wordmark = B_Wordmark;
window.B_Mark = B_Mark;
window.B_Letterhead = B_Letterhead;
window.B_AppIcon = B_AppIcon;
window.B_Palette = B_Palette;
window.B_BusinessCard = B_BusinessCard;
window.B_Seal = B_Seal;
window.B_COLORS = B_COLORS;
