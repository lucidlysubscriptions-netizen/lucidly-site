import { SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

const RISK_PRINCIPLES = [
  'State the source of return before the rate.',
  'Quote APR net of fees.',
  'State the drawdown alongside the upside.',
  'Cap the loss function, not just the upside.',
  'Cryptographic bounds before policy.',
]

/* 08 - Risk & Guardrails */
export function Risk() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="08"
          label="Risk framework"
          kicker="Own this - most competitors hide it"
          title="How we think about risk."
        />

        <div
          style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32 }}
          className="risk-grid"
        >
          <div>
            <div className="card-neu" style={{ padding: 24 }}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--ink-4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Risk principles
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {RISK_PRINCIPLES.map((line, i) => (
                  <li
                    key={line}
                    style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--ink-2)' }}
                  >
                    <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)', paddingTop: 2 }}>
                      0{i + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="card-neu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {LUCIDLY_DATA.risk.map((r, idx) => (
              <div
                key={r.title}
                style={{
                  padding: '24px 28px',
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 24,
                  alignItems: 'baseline',
                  borderBottom:
                    idx < LUCIDLY_DATA.risk.length - 1
                      ? '1px solid rgba(14, 14, 20, 0.06)'
                      : 'none',
                }}
                className="risk-row"
              >
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>{r.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .risk-grid { grid-template-columns: 1fr !important; }
            .risk-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
