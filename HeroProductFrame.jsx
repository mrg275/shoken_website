// Home page hero + product frame

function HeroProductFrame() {
  const T = {
    rule: 'var(--rule)', kinari: 'var(--kinari)', paper: 'var(--paper)',
    ink: 'var(--ink)', ash: 'var(--ash)', stone: 'var(--stone)',
    shu: 'var(--shu)', gold: 'var(--gold)', char: 'var(--char)', fog: 'var(--fog)',
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
        <div style={{ width: 208, borderRight: `1px solid ${T.rule}`, background: T.kinari, padding: 16 }}>
          <div style={{ fontSize: 10, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Workspaces</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', background: T.paper, borderRadius: 4, fontSize: 13, fontWeight: 500, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: T.shu }} />
            DHS · HHS Q2
          </div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DOE · Afterschool</div>
          <div style={{ padding: '6px 8px', fontSize: 13, color: T.ash }}>DHR · Head Start</div>
          <div style={{ fontSize: 10, color: T.stone, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 22, marginBottom: 10 }}>Views</div>
          {['Inbox', 'In review', 'Validated', 'Paid', 'Returned'].map((v, i) => (
            <div key={v} style={{
              padding: '6px 8px', fontSize: 13,
              color: i === 1 ? T.ink : T.ash, fontWeight: i === 1 ? 500 : 400,
              borderRadius: 4, background: i === 1 ? T.paper : 'transparent',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span>{v}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: T.stone }}>{[12, 4, 8, 127, 2][i]}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '22px 26px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>In review</div>
            <div style={{ fontSize: 12, color: T.stone, fontFamily: 'var(--font-mono)' }}>4 invoices · $612,800.00</div>
          </div>
          <div style={{ fontSize: 13, color: T.ash, marginBottom: 20 }}>Validated by Shoken. Awaiting agency action.</div>
          <div style={{ border: `1px solid ${T.rule}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '90px 1fr 120px 88px 96px',
              padding: '10px 14px', fontSize: 11, color: T.stone,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              background: T.kinari, borderBottom: `1px solid ${T.rule}`,
            }}>
              <span>Invoice</span><span>Organization</span>
              <span style={{ textAlign: 'right' }}>Amount</span>
              <span>Submitted</span>
              <span style={{ textAlign: 'right' }}>Status</span>
            </div>
            {[
              ['0421', 'BronxWorks', '$128,450.00', '22 Apr', 'Validated', T.gold],
              ['0420', 'Henry Street Settlement', '$84,200.00', '22 Apr', 'Awaiting', T.stone],
              ['0419', 'Good Shepherd Services', '$192,100.00', '21 Apr', 'Returned', T.shu],
              ['0418', 'Phipps Houses', '$208,050.00', '21 Apr', 'Validated', T.gold],
            ].map(([id, org, amt, d, stat, col], i, arr) => (
              <div key={id} style={{
                display: 'grid', gridTemplateColumns: '90px 1fr 120px 88px 96px',
                padding: '13px 14px', fontSize: 13, alignItems: 'center',
                borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
                background: i === 0 ? T.kinari : T.paper,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: T.char }}>INV-{id}</span>
                <span style={{ color: T.ink }}>{org}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textAlign: 'right' }}>{amt}</span>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: T.rule, border: `1px solid ${T.rule}`, borderRadius: 6, marginTop: 20, overflow: 'hidden' }}>
            {[
              ['Cycle time', '2m 14s', 'median'],
              ['Accuracy', '99.7%', 'first-pass'],
              ['In flight', '$4.2M', '12 invoices'],
              ['Paid YTD', '$38.4M', '214 invoices'],
            ].map(([k, v, sub]) => (
              <div key={k} style={{ background: T.paper, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, color: T.stone, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 500, marginTop: 4 }}>{v}</div>
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
