// Shoken — Landing page showcase
// Two polished landing pages: C1 (Linear/Vercel) and C4 (Stripe/Mercury-refined)
// Plus three NEW options for the C4 mark since the original didn't land.

const T = {
  ink: '#0B0A08',
  graphite: '#1C1A17',
  slate: '#2D2A26',
  char: '#3A3632',
  ash: '#55504A',
  stone: '#8A857D',
  mist: '#B3ADA3',
  fog: '#D4CEC2',
  rule: '#E6DFD0',
  shoji: '#EEE9DD',
  kinari: '#F8F4EA',
  paper: '#FDFAF2',
  shu: '#C2382F',
  shuBright: '#D94438',
  shuDim: '#8F261F',
  shuInk: '#5A1612',
  gold: '#9A7B3A',
  mizu: '#3E5968',
};

// ═══════════════════════════════════════════════════════
// C1 mark (unchanged, established) — tri-petal + seal
// ═══════════════════════════════════════════════════════
function C1_Mark({ size = 40, color = T.ink, seal = T.shu, bg = T.kinari }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <circle cx="50" cy="32" r="22" fill={color} opacity="0.9" />
      <circle cx="32" cy="62" r="22" fill={color} opacity="0.9" />
      <circle cx="68" cy="62" r="22" fill={color} opacity="0.9" />
      <circle cx="50" cy="52" r="9" fill={bg} />
      <circle cx="50" cy="52" r="5" fill={seal} />
    </svg>
  );
}

function C1_Wordmark({ size = 28, dark = false }) {
  const fg = dark ? T.kinari : T.ink;
  const bg = dark ? T.ink : T.kinari;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.34 }}>
      <C1_Mark size={size * 1.1} color={fg} bg={bg} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.86, fontWeight: 600, color: fg,
        letterSpacing: '-0.035em', lineHeight: 1,
      }}>Shoken</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// C4 marks — THREE new options to replace the old one
// ═══════════════════════════════════════════════════════

// C4a — "The notch". A solid rounded square with a precise notch
// cut from the upper-right corner, revealing a vermilion seal underneath.
// Reads as: document-with-corner-fold, letter-of-credit, a sealed envelope.
function C4a_Mark({ size = 40, color = T.ink, seal = T.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <defs>
        <clipPath id="c4a-clip">
          <path d="M 0 0 L 60 0 L 100 40 L 100 100 L 0 100 Z" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="16" fill={seal} />
      <g clipPath="url(#c4a-clip)">
        <rect x="0" y="0" width="100" height="100" rx="16" fill={color} />
      </g>
      {/* inner seal dot, precisely placed at notch intersection */}
      <rect x="68" y="8" width="24" height="24" rx="3" fill={seal} opacity="0" />
    </svg>
  );
}

// C4b — "The aperture". Two concentric squares with the inner rotated
// to 45°, union filled vermilion. Geometric, precise, mechanical.
// Reads as: aperture, permit stamp, validation sigil.
function C4b_Mark({ size = 40, color = T.ink, seal = T.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect x="6" y="6" width="88" height="88" rx="12" fill={color} />
      <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" fill={seal} />
      <rect x="42" y="42" width="16" height="16" fill={T.paper} />
    </svg>
  );
}

// C4c — "The chop". A single bold geometric letterform — a modified S
// constructed from two interlocking brackets. Like a monogram hanko.
// Reads as: architectural, confident, monogrammed.
function C4c_Mark({ size = 40, color = T.ink, seal = T.shu }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block' }}>
      <rect x="0" y="0" width="100" height="100" rx="16" fill={color} />
      {/* custom S: two brackets interlocking. Drawn as paths. */}
      <path
        d="M 72 22 L 30 22 L 30 46 L 70 46 L 70 78 L 28 78"
        stroke={T.paper} strokeWidth="11" fill="none" strokeLinecap="square" strokeLinejoin="miter"
      />
      {/* seal dot in corner */}
      <rect x="76" y="70" width="10" height="10" fill={seal} />
    </svg>
  );
}

function C4_Wordmark({ size = 28, mark: MarkComponent, dark = false }) {
  const fg = dark ? T.kinari : T.ink;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.34 }}>
      <MarkComponent size={size * 1.1} color={fg} seal={T.shu} />
      <div style={{
        fontFamily: '"Inter Tight", sans-serif',
        fontSize: size * 0.86, fontWeight: 500, color: fg,
        letterSpacing: '-0.045em', lineHeight: 1,
      }}>Shoken</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// Shared landing-page building blocks
// ═══════════════════════════════════════════════════════

function NavLink({ children }) {
  return (
    <span style={{ fontSize: 13, color: T.char, cursor: 'pointer' }}>{children}</span>
  );
}

function Eyebrow({ children, color = T.shu }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 11, fontWeight: 500, letterSpacing: '0.15em',
      textTransform: 'uppercase', color,
    }}>
      <div style={{ width: 6, height: 6, background: color }} />
      {children}
    </div>
  );
}

// Fake customer logos — set as wordmarks in muted type
function LogoRow({ logos, color = T.stone }) {
  return (
    <div style={{ display: 'flex', gap: 42, alignItems: 'center', flexWrap: 'wrap' }}>
      {logos.map((l, i) => (
        <div key={i} style={{
          fontFamily: l.font || '"Inter Tight", sans-serif',
          fontSize: 18, fontWeight: l.weight || 600, color,
          letterSpacing: l.tracking || '-0.02em',
          fontStyle: l.italic ? 'italic' : 'normal',
        }}>{l.name}</div>
      ))}
    </div>
  );
}

const SAMPLE_LOGOS = [
  { name: 'BronxWorks', weight: 700 },
  { name: 'Henry Street', font: '"Source Serif 4", serif', weight: 500 },
  { name: 'Good Shepherd', weight: 600 },
  { name: 'Phipps Houses', weight: 600, tracking: '0.02em' },
  { name: 'Safe Horizon', weight: 500, italic: true },
];

// ═══════════════════════════════════════════════════════
// LANDING PAGE C1 — Linear/Vercel
// ═══════════════════════════════════════════════════════

function LandingC1() {
  return (
    <div style={{
      width: '100%', background: T.paper, color: T.ink,
      fontFamily: '"Inter Tight", sans-serif',
    }}>
      {/* Nav */}
      <div style={{
        height: 60, borderBottom: `1px solid ${T.rule}`,
        display: 'flex', alignItems: 'center', padding: '0 40px',
        position: 'sticky', top: 0, background: `${T.paper}ee`, backdropFilter: 'blur(10px)', zIndex: 5,
      }}>
        <C1_Wordmark size={22} />
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 28 }}>
          <NavLink>Product</NavLink>
          <NavLink>Agencies</NavLink>
          <NavLink>Nonprofits</NavLink>
          <NavLink>Company</NavLink>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: T.char }}>Sign in</span>
          <div style={{
            background: T.ink, color: T.paper,
            padding: '8px 14px', borderRadius: 4, fontSize: 12.5, fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Request access <span style={{ fontSize: 14 }}>→</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '80px 40px 64px', maxWidth: 1200, margin: '0 auto' }}>
        <Eyebrow>Nonprofit ↔ Government</Eyebrow>
        <h1 style={{
          fontFamily: '"Source Serif 4", Georgia, serif',
          fontSize: 76, lineHeight: 1.0, fontWeight: 400,
          letterSpacing: '-0.03em', margin: '20px 0 24px', maxWidth: 920,
        }}>
          The ledger between<br />mission and government.
        </h1>
        <p style={{
          fontSize: 19, lineHeight: 1.5, color: T.ash, maxWidth: 620,
          margin: '0 0 36px', fontWeight: 400,
        }}>
          Shoken assembles and validates human services contract invoices for government approval and payment. Weeks of administrative work, compressed to minutes.
        </p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 80 }}>
          <div style={{
            background: T.ink, color: T.paper, padding: '12px 20px',
            borderRadius: 5, fontSize: 14, fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>Request access <span>→</span></div>
          <div style={{
            background: 'transparent', color: T.ink, padding: '12px 16px',
            borderRadius: 5, fontSize: 14, fontWeight: 500,
            border: `1px solid ${T.rule}`,
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>See how it works</div>
          <div style={{ fontSize: 13, color: T.stone, marginLeft: 12, fontFamily: '"JetBrains Mono", monospace' }}>
            SOC 2 · FedRAMP-ready
          </div>
        </div>

        {/* Hero product frame — Linear/Vercel style */}
        <HeroProductFrame />
      </div>

      {/* Customer strip */}
      <div style={{ padding: '56px 40px', borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`, background: T.kinari }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: T.stone, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
            Trusted by agencies and nonprofits managing $1.4B in human services contracts
          </div>
          <LogoRow logos={SAMPLE_LOGOS} color={T.ash} />
        </div>
      </div>

      {/* Three pillars */}
      <div style={{ padding: '96px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginBottom: 64 }}>
          <Eyebrow>How it works</Eyebrow>
          <div style={{
            fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 44, lineHeight: 1.1,
            letterSpacing: '-0.02em', marginTop: 18, fontWeight: 400,
          }}>
            Built for the paperwork<br />that keeps cities running.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: T.rule, border: `1px solid ${T.rule}`, borderRadius: 6, overflow: 'hidden' }}>
          {[
            ['01', 'Assemble', 'Invoices, backup, timesheets and ledger exports consolidated into a single agency-ready submission.'],
            ['02', 'Validate', 'Line items reconciled against contract schedules, unit caps, and allowable cost rules — before anyone reviews.'],
            ['03', 'Submit', 'Filed through the right agency channel with a full audit trail. Status tracked from receipt to payment.'],
          ].map(([n, t, d]) => (
            <div key={n} style={{ background: T.paper, padding: '36px 32px 40px' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: T.shu, marginBottom: 28 }}>{n}</div>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: T.ash }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={{ padding: '96px 40px', background: T.ink, color: T.kinari }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 36, lineHeight: 1.25, fontWeight: 400, letterSpacing: '-0.015em' }}>
            "We were closing our month twelve days late. Shoken closes it for us on the second. Our program officers got their weekends back."
          </div>
          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: T.shu }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Daniela Ruiz</div>
              <div style={{ fontSize: 13, color: T.mist }}>CFO · Phipps Neighborhoods</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: '96px 40px 120px', textAlign: 'center', borderBottom: `1px solid ${T.rule}` }}>
        <Eyebrow>Request access</Eyebrow>
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 54, lineHeight: 1.05,
          letterSpacing: '-0.025em', margin: '20px auto', maxWidth: 760, fontWeight: 400,
        }}>
          Close the reimbursement cycle.
        </div>
        <div style={{ fontSize: 16, color: T.ash, maxWidth: 520, margin: '0 auto 32px' }}>
          Shoken is onboarding a limited cohort of agencies and nonprofits in 2026.
        </div>
        <div style={{
          background: T.ink, color: T.paper, padding: '14px 24px',
          borderRadius: 5, fontSize: 14, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 10,
        }}>Request access <span>→</span></div>
      </div>

      {/* Footer */}
      <div style={{ padding: '48px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <C1_Wordmark size={20} />
          <div style={{ display: 'flex', gap: 48, fontSize: 12, color: T.ash }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Product</div>
              <span>Platform</span><span>Validation</span><span>Integrations</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Company</div>
              <span>About</span><span>Careers</span><span>Press</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Legal</div>
              <span>Privacy</span><span>Terms</span><span>Security</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', color: T.stone, fontSize: 11, fontFamily: '"JetBrains Mono", monospace' }}>
          <span>© 2026 Shoken, Inc.</span>
          <span>New York · Washington · Sacramento</span>
        </div>
      </div>
    </div>
  );
}

// Product frame for C1 — a Linear-esque invoice workspace
function HeroProductFrame() {
  return (
    <div style={{
      border: `1px solid ${T.rule}`, borderRadius: 10, overflow: 'hidden',
      background: T.paper, boxShadow: '0 20px 60px rgba(26,23,20,0.08), 0 4px 12px rgba(26,23,20,0.04)',
    }}>
      {/* chrome bar */}
      <div style={{ height: 40, background: T.kinari, borderBottom: `1px solid ${T.rule}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: T.stone }}>shoken.gov/workspace/dhs-hhs-q2</div>
        <div style={{ flex: 1 }} />
      </div>
      <div style={{ display: 'flex', minHeight: 440 }}>
        {/* sidebar */}
        <div style={{ width: 200, borderRight: `1px solid ${T.rule}`, background: T.kinari, padding: 16 }}>
          <div style={{ fontSize: 11, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Workspaces</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', background: T.paper, borderRadius: 4, fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: T.shu }} />
            DHS · HHS Q2
          </div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DOE · AfterSchool</div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DHR · Head Start</div>
          <div style={{ fontSize: 11, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 22, marginBottom: 10 }}>Views</div>
          {['Inbox', 'In review', 'Validated', 'Paid', 'Returned'].map((v, i) => (
            <div key={v} style={{
              padding: '6px 8px', fontSize: 13, color: i === 1 ? T.ink : T.ash, fontWeight: i === 1 ? 500 : 400,
              borderRadius: 4, background: i === 1 ? T.paper : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span>{v}</span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: T.stone }}>{[12, 4, 8, 127, 2][i]}</span>
            </div>
          ))}
        </div>
        {/* main */}
        <div style={{ flex: 1, padding: '22px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>In review</div>
            <div style={{ fontSize: 12, color: T.stone, fontFamily: '"JetBrains Mono", monospace' }}>4 invoices · $612,800.00</div>
          </div>
          <div style={{ fontSize: 13, color: T.ash, marginBottom: 20 }}>Validated by Shoken. Awaiting agency action.</div>

          <div style={{ border: `1px solid ${T.rule}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '90px 1fr 120px 110px 90px',
              padding: '10px 14px', fontSize: 11, color: T.stone,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              background: T.kinari, borderBottom: `1px solid ${T.rule}`,
            }}>
              <span>Invoice</span><span>Organization</span><span style={{ textAlign: 'right' }}>Amount</span><span>Submitted</span><span style={{ textAlign: 'right' }}>Status</span>
            </div>
            {[
              ['INV-2026-0421', 'BronxWorks', '$128,450.00', '22 Apr', 'Validated', T.gold],
              ['INV-2026-0420', 'Henry Street Settlement', '$84,200.00', '22 Apr', 'Awaiting', T.stone],
              ['INV-2026-0419', 'Good Shepherd Services', '$192,100.00', '21 Apr', 'Returned', T.shu],
              ['INV-2026-0418', 'Phipps Houses', '$208,050.00', '21 Apr', 'Validated', T.gold],
            ].map(([id, org, amt, d, stat, col], i, arr) => (
              <div key={id} style={{
                display: 'grid', gridTemplateColumns: '90px 1fr 120px 110px 90px',
                padding: '13px 14px', fontSize: 13, alignItems: 'center',
                borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
                background: i === 0 ? T.kinari : T.paper,
              }}>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: T.char }}>{id.replace('INV-2026-', '')}</span>
                <span style={{ color: T.ink }}>{org}</span>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, textAlign: 'right' }}>{amt}</span>
                <span style={{ color: T.ash, fontSize: 12 }}>{d}</span>
                <span style={{
                  fontSize: 11, fontWeight: 500, textAlign: 'right', justifySelf: 'end',
                  display: 'inline-flex', alignItems: 'center', gap: 6, color: col,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: col }} />
                  {stat}
                </span>
              </div>
            ))}
          </div>

          {/* mini metric strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: T.rule, border: `1px solid ${T.rule}`, borderRadius: 6, marginTop: 20, overflow: 'hidden' }}>
            {[
              ['Cycle time', '2m 14s', 'median'],
              ['Accuracy', '99.7%', 'post-review'],
              ['In flight', '$4.2M', '12 invoices'],
              ['Paid YTD', '$38.4M', '214 invoices'],
            ].map(([k, v, sub]) => (
              <div key={k} style={{ background: T.paper, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, color: T.stone, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 20, fontWeight: 500, marginTop: 4 }}>{v}</div>
                <div style={{ fontSize: 11, color: T.ash, marginTop: 2 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// LANDING PAGE C4 — Stripe/Mercury (refined)
// Builds the same landing page in C4's typographic voice.
// ═══════════════════════════════════════════════════════

function LandingC4({ Mark }) {
  const wordmark = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <Mark size={24} color={T.ink} seal={T.shu} />
      <div style={{ fontFamily: '"Inter Tight", sans-serif', fontSize: 19, fontWeight: 500, color: T.ink, letterSpacing: '-0.045em' }}>Shoken</div>
    </div>
  );
  return (
    <div style={{
      width: '100%', background: T.kinari, color: T.ink,
      fontFamily: '"Inter Tight", sans-serif',
    }}>
      {/* Nav */}
      <div style={{
        height: 64, borderBottom: `1px solid ${T.rule}`,
        display: 'flex', alignItems: 'center', padding: '0 48px',
        position: 'sticky', top: 0, background: `${T.kinari}ee`, backdropFilter: 'blur(10px)', zIndex: 5,
      }}>
        {wordmark}
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 32, fontSize: 13.5, color: T.char }}>
          <span>Platform</span><span>Agencies</span><span>Nonprofits</span><span>Pricing</span><span>Company</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 13.5, color: T.char }}>Sign in</span>
          <div style={{
            background: T.ink, color: T.kinari,
            padding: '9px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Request access
          </div>
        </div>
      </div>

      {/* Hero — split layout */}
      <div style={{ padding: '92px 48px 88px', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <Eyebrow>Reimbursement infrastructure</Eyebrow>
          <h1 style={{
            fontFamily: '"Source Serif 4", Georgia, serif',
            fontSize: 68, lineHeight: 1.02, fontWeight: 400,
            letterSpacing: '-0.03em', margin: '18px 0 24px',
          }}>
            The ledger between mission and government.
          </h1>
          <p style={{
            fontSize: 18, lineHeight: 1.55, color: T.ash,
            margin: '0 0 32px', maxWidth: 520,
          }}>
            Shoken assembles and validates human services contract invoices for government approval and payment. Compressing weeks of administrative work into minutes — so nonprofits get paid on time, and agencies focus on outcomes.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ background: T.ink, color: T.kinari, padding: '13px 22px', borderRadius: 999, fontSize: 14, fontWeight: 500 }}>Request access</div>
            <div style={{ color: T.ink, padding: '13px 20px', fontSize: 14, fontWeight: 500 }}>See how it works →</div>
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: 36, color: T.ash, fontSize: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: 3, background: T.shu }} />
              SOC 2 Type II
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: 3, background: T.shu }} />
              FedRAMP-ready
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 5, height: 5, borderRadius: 3, background: T.shu }} />
              $1.4B processed
            </div>
          </div>
        </div>

        {/* Hero visual — stacked receipts/seal composition */}
        <HeroStack Mark={Mark} />
      </div>

      {/* Logo strip */}
      <div style={{ padding: '48px 48px', borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`, background: T.paper }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48 }}>
          <div style={{ fontSize: 12, color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Closing cycles for
          </div>
          <LogoRow logos={SAMPLE_LOGOS} color={T.char} />
        </div>
      </div>

      {/* Three-column value section */}
      <div style={{ padding: '112px 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, marginBottom: 56 }}>
          <div>
            <Eyebrow>The stack</Eyebrow>
            <div style={{
              fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 40, lineHeight: 1.1,
              letterSpacing: '-0.02em', marginTop: 16, fontWeight: 400,
            }}>
              Invoice infrastructure<br />for human services.
            </div>
          </div>
          <div style={{ color: T.ash, fontSize: 16, lineHeight: 1.55, alignSelf: 'end', maxWidth: 440 }}>
            Three coordinated products — one for the nonprofit closing books, one for the agency reviewing claims, and one for the auditor tying out contracts. Every action, signed.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            ['Nonprofit', 'Assemble, validate, submit. Close the books on the second, not the twentieth.'],
            ['Agency', 'Review validated claims. Approve with confidence. Audit with a single click.'],
            ['Auditor', 'Reconcile against contract schedules. Trace every dollar to the line item that supports it.'],
          ].map(([t, d], i) => (
            <div key={t} style={{
              background: T.paper, padding: 28, border: `1px solid ${T.rule}`, borderRadius: 8,
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <Mark size={32} color={T.ink} seal={T.shu} />
              <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em' }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: T.ash }}>{d}</div>
              <div style={{ marginTop: 'auto', paddingTop: 16, fontSize: 13, color: T.shu, fontWeight: 500 }}>Read more →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers strip */}
      <div style={{ padding: '72px 48px', background: T.ink, color: T.kinari }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
          {[
            ['$1.4B', 'contracts managed'],
            ['2m 14s', 'median cycle time'],
            ['99.7%', 'first-pass accuracy'],
            ['12 days', 'faster to payment'],
          ].map(([v, k]) => (
            <div key={k}>
              <div style={{ fontFamily: '"Source Serif 4", serif', fontSize: 56, fontWeight: 400, letterSpacing: '-0.025em', lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 13, color: T.mist, marginTop: 10, letterSpacing: '0.05em' }}>{k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div style={{ padding: '112px 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 860 }}>
          <div style={{ fontSize: 14, color: T.shu, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>
            ■ CFO · Phipps Neighborhoods
          </div>
          <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 42, lineHeight: 1.2, fontWeight: 400, letterSpacing: '-0.015em' }}>
            "We were closing the month twelve days late. Shoken closes it for us on the second. Our program officers got their weekends back."
          </div>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: T.shu }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Daniela Ruiz</div>
              <div style={{ fontSize: 13, color: T.ash }}>CFO · Phipps Neighborhoods</div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div style={{ padding: '112px 48px 140px', textAlign: 'center', borderTop: `1px solid ${T.rule}` }}>
        <Mark size={48} color={T.ink} seal={T.shu} />
        <div style={{
          fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 58, lineHeight: 1.05,
          letterSpacing: '-0.03em', margin: '28px auto 20px', maxWidth: 760, fontWeight: 400,
        }}>
          Ready to close the cycle.
        </div>
        <div style={{ fontSize: 17, color: T.ash, maxWidth: 540, margin: '0 auto 36px' }}>
          Shoken is onboarding a limited cohort of agencies and nonprofits in 2026. Talk to our team.
        </div>
        <div style={{ display: 'inline-flex', gap: 12 }}>
          <div style={{ background: T.ink, color: T.kinari, padding: '14px 26px', borderRadius: 999, fontSize: 14, fontWeight: 500 }}>Request access</div>
          <div style={{ color: T.ink, padding: '14px 22px', fontSize: 14, fontWeight: 500, border: `1px solid ${T.rule}`, borderRadius: 999 }}>Contact sales</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '48px 48px', background: T.paper, borderTop: `1px solid ${T.rule}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {wordmark}
          <div style={{ display: 'flex', gap: 56, fontSize: 13, color: T.ash }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Platform</div>
              <span>Nonprofit</span><span>Agency</span><span>Auditor</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Company</div>
              <span>About</span><span>Careers</span><span>Press</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>Resources</div>
              <span>Security</span><span>Status</span><span>Docs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero visual for C4 — a stack of semi-transparent invoice panels + seal
function HeroStack({ Mark }) {
  return (
    <div style={{ position: 'relative', height: 480 }}>
      {/* Panel 3 (back) */}
      <div style={{
        position: 'absolute', top: 40, right: 0, width: 380, height: 440,
        background: T.paper, border: `1px solid ${T.rule}`, borderRadius: 8,
        transform: 'rotate(3deg)', padding: 24, boxSizing: 'border-box',
        boxShadow: '0 8px 24px rgba(26,23,20,0.04)',
        fontFamily: '"Inter Tight", sans-serif',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Invoice</div>
          <Mark size={16} color={T.ink} seal={T.shu} />
        </div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: T.ash, lineHeight: 2.2 }}>
          INV-0418<br />INV-0419<br />INV-0420<br />INV-0421
        </div>
      </div>
      {/* Panel 2 (middle) */}
      <div style={{
        position: 'absolute', top: 20, right: 40, width: 360, height: 420,
        background: T.paper, border: `1px solid ${T.rule}`, borderRadius: 8,
        transform: 'rotate(-2deg)', padding: 24, boxSizing: 'border-box',
        boxShadow: '0 12px 32px rgba(26,23,20,0.06)',
      }} />
      {/* Panel 1 (front) — detailed */}
      <div style={{
        position: 'absolute', top: 0, right: 80, width: 360, height: 420,
        background: T.paper, border: `1px solid ${T.rule}`, borderRadius: 8,
        padding: 26, boxSizing: 'border-box',
        boxShadow: '0 20px 50px rgba(26,23,20,0.1), 0 4px 12px rgba(26,23,20,0.04)',
        fontFamily: '"Inter Tight", sans-serif',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ fontSize: 10, color: T.stone, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contract Invoice</div>
          <Mark size={22} color={T.ink} seal={T.shu} />
        </div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: T.char, marginBottom: 4 }}>INV-2026-0421</div>
        <div style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 24, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 16 }}>
          BronxWorks<br /><span style={{ color: T.ash, fontSize: 14 }}>Human Services Contract</span>
        </div>
        <div style={{ height: 1, background: T.rule, margin: '16px 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
          {[
            ['Case management · Q2', '$48,200.00'],
            ['Shelter operations · Q2', '$62,450.00'],
            ['Administrative', '$17,800.00'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: T.ash }}>{k}</span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace', color: T.ink }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: T.ink, margin: '16px 0 12px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 11, color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Total due</span>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 22, fontWeight: 500 }}>$128,450.00</span>
        </div>
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: T.shu, color: T.paper, width: 40, height: 40, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Source Serif 4", serif', fontSize: 18, fontWeight: 500 }}>S</div>
          <div>
            <div style={{ fontSize: 11, color: T.stone, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Validated</div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: T.ash }}>22 Apr 2026 · 14:02 EDT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  T,
  C1_Mark, C1_Wordmark, LandingC1,
  C4a_Mark, C4b_Mark, C4c_Mark, C4_Wordmark, LandingC4,
});
