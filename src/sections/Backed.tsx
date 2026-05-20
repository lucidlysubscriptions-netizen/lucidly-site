import { SHOW_SECTION_META } from '../config'

interface Backer {
  name: string
  /** Two-letter monogram used when no `logo` is provided. */
  mark: string
  /** Optional path to an SVG/PNG in /public for the backer's full mark. */
  logo?: string
}

const BACKERS: Backer[] = [
  { name: 'Skycatcher', mark: 'SC', logo: '/logos/skycatcher.svg' },
  { name: 'Placeholder Cap', mark: 'PC' },
  { name: 'Onchain Ventures', mark: 'OV' },
  { name: 'Reserve Labs', mark: 'RL' },
]

/* 10 - Backed by */
export function Backed() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: SHOW_SECTION_META ? '220px 1fr' : '1fr',
            gap: 48,
            alignItems: 'center',
          }}
          className="backed-grid"
        >
          {SHOW_SECTION_META && (
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-4)', letterSpacing: '0.08em' }}>
                / 10
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
                Backed by
              </div>
            </div>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              overflow: 'hidden',
            }}
            className="backers-grid card-neu"
          >
            {BACKERS.map((b, i) => (
              <div
                key={b.name}
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                  color: 'var(--ink-2)',
                }}
              >
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    style={{
                      display: 'block',
                      height: 40,
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: 'var(--paper)',
                        border: '1px solid var(--line)',
                        display: 'grid',
                        placeItems: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--ink-3)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {b.mark}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>{b.name}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .backed-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
            .backers-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .backers-grid > div:nth-child(1), .backers-grid > div:nth-child(3) { border-right: 1px solid var(--line) !important; }
            .backers-grid > div:nth-child(2) { border-right: none !important; }
            .backers-grid > div:nth-child(1), .backers-grid > div:nth-child(2) { border-bottom: 1px solid var(--line); }
          }
        `}</style>
      </div>
    </section>
  )
}
