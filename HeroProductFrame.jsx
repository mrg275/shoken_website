// Home page hero + product frame

function HeroProductFrame() {
  const T = {
    rule: 'var(--rule)', kinari: 'var(--kinari)', paper: 'var(--paper)',
    ink: 'var(--ink)', ash: 'var(--ash)', stone: 'var(--stone)',
    shu: 'var(--shu)', gold: 'var(--gold)', char: 'var(--char)', fog: 'var(--fog)',
    mizu: 'var(--mizu)',
  };
  return (
    <div style={{
      border: `1px solid ${T.rule}`, borderRadius: 10, overflow: 'hidden',
      background: T.paper, boxShadow: 'var(--shadow-hero)',
    }}>
      <div style={{ height: 40, background: T.kinari, borderBottom: `1px solid ${T.rule}`, display: 'flex', alignItems: 'center', padding: '0 14px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
          <div style={{ width: 10, height: 10, borderRadius: 5, background: T.fog }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: T.stone }}>
          shoken.gov/workspace/dhs-hhs-q2
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: 460 }}>
        <div style={{ width: 240, flexShrink: 0, borderRight: `1px solid ${T.rule}`, background: T.kinari, padding: 16 }}>
          <div style={{ fontSize: 10, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Workspaces</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', background: T.paper, borderRadius: 4, fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: T.shu }} />
            DHS · HHS Q2
          </div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DOE · Afterschool</div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DHR · Head Start</div>
          <div style={{ fontSize: 10, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 22, marginBottom: 10 }}>Views</div>
          {[
            ['Screened', 12],
            ['In review', 4],
            ['Returned', 2],
            ['YTD Approved', 214],
          ].map(([v, count], i) => (
            <div key={v} style={{
              padding: '6px 8px', fontSize: 13,
              color: i === 1 ? T.ink : T.ash, fontWeight: i === 1 ? 500 : 400,
              borderRadius: 4, background: i === 1 ? T.paper : 'transparent',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              whiteSpace: 'nowrap',
            }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{v}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: T.stone, marginLeft: 8 }}>{count}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '22px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Active invoices</div>
            <div style={{ fontSize: 12, color: T.stone, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>4 invoices · $612,800.00</div>
          </div>
          <div style={{ fontSize: 13, color: T.ash, marginBottom: 20 }}>Shoken screened. Agency to review and approve.</div>
          <div style={{ border: `1px solid ${T.rule}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '110px 1fr 130px 76px 110px',
              padding: '10px 14px', fontSize: 10.5, color: T.stone,
              textTransform: 'uppercase', letterSpacing: '0.06em',
              background: T.kinari, borderBottom: `1px solid ${T.rule}`,
              gap: 12, whiteSpace: 'nowrap',
            }}>
              <span>Invoice</span><span>Organization</span>
              <span style={{ textAlign: 'right' }}>Invoiced</span>
              <span>Submitted</span>
              <span style={{ textAlign: 'right' }}>Status</span>
            </div>
            {[
              // Per-org sequence numbers (each org has its own counter)
              ['BXW-0421', 'Org A · Bronx', '$128,450.00', '22 Apr', 'Screened', T.gold],
              ['HSS-0184', 'Org B · Lower East Side', '$84,200.00', '22 Apr', 'In review', T.mizu],
              ['GSS-0312', 'Org C · Citywide', '$192,100.00', '21 Apr', 'Returned', T.shu],
              ['PHS-0097', 'Org D · Bronx & Manhattan', '$208,050.00', '21 Apr', 'Screened', T.gold],
            ].map(([id, org, amt, d, stat, col], i, arr) => (
              <div key={id} style={{
                display: 'grid', gridTemplateColumns: '110px 1fr 130px 76px 110px',
                padding: '13px 14px', fontSize: 13, alignItems: 'center',
                borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
                background: i === 0 ? T.kinari : T.paper,
                gap: 12, whiteSpace: 'nowrap',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: T.char }}>{id}</span>
                <span style={{ color: T.ink }}>{org}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textAlign: 'right' }}>{amt}</span>
                <span style={{ color: T.ash, fontSize: 12 }}>{d}</span>
                <span style={{
                  fontSize: 11, fontWeight: 500, textAlign: 'right', justifySelf: 'end',
                  display: 'inline-flex', alignItems: 'center', gap: 6, color: col,
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, background: col, flexShrink: 0 }} />
                  {stat}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: T.rule, border: `1px solid ${T.rule}`, borderRadius: 6, marginTop: 20, overflow: 'hidden' }}>
            {[
              ['Cycle time', '2m 14s', '', 'median'],
              ['Accuracy', '99.7%', '', 'first-pass'],
              ['In flight', '12', '$4.2M', 'invoices'],
              ['Approved YTD', '214', '$38.4M', 'invoices'],
            ].map(([k, primary, secondary, sub]) => (
              <div key={k} style={{ background: T.paper, padding: '14px 16px', minWidth: 0 }}>
                <div style={{ fontSize: 10.5, color: T.stone, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{k}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4, whiteSpace: 'nowrap' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 19, fontWeight: 700, color: T.ink, letterSpacing: '-0.01em' }}>{primary}</div>
                  {secondary && (
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 400, color: T.ash }}>{secondary}</div>
                  )}
                </div>
                <div style={{ fontSize: 11, color: T.ash, marginTop: 2 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.HeroProductFrame = HeroProductFrame;
