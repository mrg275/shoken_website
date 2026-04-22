// Shoken Marketing — Shared brand components
// All pages import this. Nothing here is page-specific.

// ══════════════════════════════════════════════════════════════
// MARK — the Shoken plum-blossom tri-petal + seal dot
// ══════════════════════════════════════════════════════════════
function Mark({ size = 28, color = 'var(--ink)', seal = 'var(--shu)', bg = 'var(--paper)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', flexShrink: 0 }}>
      <circle cx="50" cy="32" r="22" fill={color} opacity="0.92" />
      <circle cx="32" cy="62" r="22" fill={color} opacity="0.92" />
      <circle cx="68" cy="62" r="22" fill={color} opacity="0.92" />
      <circle cx="50" cy="52" r="9" fill={bg} />
      <circle cx="50" cy="52" r="5" fill={seal} />
    </svg>
  );
}

function Wordmark({ size = 22, dark = false }) {
  const fg = dark ? 'var(--kinari)' : 'var(--ink)';
  const bg = dark ? 'var(--ink)' : 'var(--paper)';
  return (
    <a href="index.html" style={{
      display: 'inline-flex', alignItems: 'center', gap: size * 0.38,
      textDecoration: 'none', color: fg,
    }}>
      <Mark size={size * 1.1} color={fg} bg={bg} />
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: size, fontWeight: 600,
        letterSpacing: '-0.035em', lineHeight: 1,
      }}>Shoken</span>
    </a>
  );
}

// ══════════════════════════════════════════════════════════════
// NAV — sticky masthead
// ══════════════════════════════════════════════════════════════
function Nav({ current }) {
  const links = [
    ['Product', 'product.html'],
    ['Agencies', 'agencies.html'],
    ['Nonprofits', 'nonprofits.html'],
    ['Company', 'company.html'],
    ['Join us', 'careers.html'],
  ];
  return (
    <nav style={{
      height: 64, borderBottom: '1px solid var(--rule)',
      display: 'flex', alignItems: 'center', padding: '0 40px',
      position: 'sticky', top: 0,
      background: 'rgba(253,250,242,0.88)', backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)', zIndex: 100,
    }}>
      <Wordmark size={22} />
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(([label, href]) => (
          <a key={href} href={href} style={{
            fontSize: 13.5, color: current === href ? 'var(--ink)' : 'var(--char)',
            fontWeight: current === href ? 500 : 400,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            borderBottom: current === href ? '1.5px solid var(--shu)' : '1.5px solid transparent',
            paddingBottom: 2,
          }}>{label}</a>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <Button href="request-access.html">Request access <Arrow /></Button>
      </div>
    </nav>
  );
}

// ══════════════════════════════════════════════════════════════
// PRIMITIVES
// ══════════════════════════════════════════════════════════════
function Arrow({ size = 14 }) {
  return <span style={{ fontSize: size, lineHeight: 1 }}>→</span>;
}

function Button({ children, variant = 'primary', size = 'md', as = 'a', href = '#', ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    border: 'none', cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textDecoration: 'none',
    borderRadius: 'var(--r-md)',
    transition: 'background 120ms var(--ease), color 120ms var(--ease)',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '7px 12px', fontSize: 12.5 },
    md: { padding: '9px 16px', fontSize: 13.5 },
    lg: { padding: '12px 20px', fontSize: 14 },
  };
  const variants = {
    primary: { background: 'var(--ink)', color: 'var(--paper)' },
    secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--rule)' },
    ghost: { background: 'transparent', color: 'var(--ink)' },
    accent: { background: 'var(--shu)', color: 'var(--paper)' },
  };
  const Tag = as;
  return (
    <Tag href={href} style={{ ...base, ...sizes[size], ...variants[variant] }} {...rest}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children, color = 'var(--shu)' }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 11, fontWeight: 500,
      letterSpacing: '0.15em', textTransform: 'uppercase', color,
    }}>
      <div style={{ width: 6, height: 6, background: color, flexShrink: 0 }} />
      {children}
    </div>
  );
}

function Rule({ color = 'var(--rule)', weight = 1, style }) {
  return <div style={{ height: weight, background: color, width: '100%', ...style }} />;
}

function Section({ children, style, pad = '96px 40px', bg, ...rest }) {
  return (
    <section style={{ padding: pad, background: bg, ...style }} {...rest}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Badge({ children, tone = 'neutral' }) {
  const tones = {
    neutral: { color: 'var(--stone)', dot: 'var(--stone)' },
    validated: { color: 'var(--gold)', dot: 'var(--gold)' },
    flagged: { color: 'var(--shu)', dot: 'var(--shu)' },
    paid: { color: 'var(--moss)', dot: 'var(--moss)' },
    pending: { color: 'var(--mizu)', dot: 'var(--mizu)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 11, fontWeight: 500, color: t.color,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, background: t.dot }} />
      {children}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════
function Footer() {
  const cols = [
    ['Product', [['Platform', 'product.html'], ['Validation', 'product.html'], ['Integrations', 'product.html'], ['Security', '#']]],
    ['Solutions', [['Agencies', 'agencies.html'], ['Nonprofits', 'nonprofits.html']]],
    ['Company', [['About', 'company.html'], ['Careers', 'careers.html'], ['Contact', '#']]],
    ['Legal', [['Privacy', '#'], ['Terms', '#'], ['Trust', '#']]],
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--rule)', background: 'var(--kinari)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 48 }}>
          <div>
            <Wordmark size={20} />
            <div style={{ fontSize: 13, color: 'var(--ash)', lineHeight: 1.55, marginTop: 16, maxWidth: 260 }}>
              The ledger between mission and government.
            </div>
            <div style={{ fontSize: 11, color: 'var(--stone)', fontFamily: 'var(--font-mono)', marginTop: 20, letterSpacing: '0.02em' }}>
              SOC 2 Type II · FedRAMP-ready
            </div>
          </div>
          {cols.map(([heading, items]) => (
            <div key={heading} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 10, color: 'var(--stone)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>{heading}</div>
              {items.map(([label, href]) => (
                <a key={label} href={href} style={{ fontSize: 13, color: 'var(--char)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--rule)',
          display: 'flex', justifyContent: 'space-between',
          fontSize: 11, color: 'var(--stone)', fontFamily: 'var(--font-mono)',
        }}>
          <span>© 2026 Shoken, Inc.</span>
          <span>New York · Washington · Sacramento</span>
          <span>Named for Empress Shōken · 昭憲皇太后</span>
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════
// PAGE HEADER — used on inner pages
// ══════════════════════════════════════════════════════════════
function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section style={{ padding: '88px 40px 64px', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 68, lineHeight: 1.08,
          fontWeight: 400, letterSpacing: '-0.03em', margin: '18px 0 28px', maxWidth: 900,
        }}>{title}</h1>
        {subtitle && <p style={{ fontSize: 19, color: 'var(--ash)', lineHeight: 1.5, maxWidth: 640, margin: 0 }}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

Object.assign(window, {
  Mark, Wordmark, Nav, Arrow, Button, Eyebrow, Rule, Section, Badge, Footer, PageHeader,
});
