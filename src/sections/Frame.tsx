import { Reveal } from '../components/primitives'
import { SHOW_SECTION_META } from '../config'

/* 02 - Frame / thesis paragraph */
export function Frame() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: SHOW_SECTION_META ? '220px 1fr' : '1fr',
            gap: 48,
          }}
          className="frame-grid"
        >
          {SHOW_SECTION_META && (
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-4)', letterSpacing: '0.08em' }}>
                / 02
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginTop: 10,
                }}
              >
                The Frame
              </div>
            </div>
          )}
          <Reveal>
            <p
              style={{
                fontSize: 'clamp(22px, 2.4vw, 32px)',
                lineHeight: 1.35,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                color: 'var(--ink)',
                margin: 0,
                textWrap: 'balance',
              }}
            >
              Lucidly builds engineered onchain strategies - hedged CLMM, leveraged loops, basis and funding
              capture, FX market making - and runs them inside tokenized vaults institutions can hold like any
              other asset.{' '}
              <span style={{ color: 'var(--ink-3)' }}>
                We operate the strategies and the execution stack underneath them: a merkle-permissioned vault
                layer, a 24/7 agentic execution layer, and a multi-chain footprint. Allocators get a small set
                of underwriteable products with defined risk profiles and live transparent accounting.
              </span>
            </p>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .frame-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
