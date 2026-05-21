import { SHOW_SECTION_META } from '../config'

interface Backer {
  name: string
  /** Two-letter monogram used when no `logo` is provided. */
  mark: string
  /** Optional path to an SVG/PNG in /public for the backer's full mark. */
  logo?: string
  /** Optional external URL — when present, the tile becomes a clickable link. */
  href?: string
}

const BACKERS: Backer[] = [
  { name: 'Skycatcher', mark: 'SC', logo: '/logos/skycatcher.svg', href: 'https://skycatcher.xyz/' },
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
          <div>
          {!SHOW_SECTION_META && (
            <div style={{ marginBottom: 28 }}>
              <span className="kicker">
                <span className="dot" />
                Backed by
              </span>
            </div>
          )}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${BACKERS.length}, 1fr)`,
              gap: 0,
              overflow: 'hidden',
              boxShadow:
                '-4px -4px 8px 0 #FFF inset, 4px 4px 8px 0 rgba(0, 0, 0, 0.08) inset, -4px -4px 12px 0 #FFF, 4px 4px 12px 0 rgba(0, 0, 0, 0.10)',
            }}
            className="backers-grid card-neu"
          >
            {BACKERS.map((b, i) => {
              const tileStyle = {
                padding: '28px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                borderRight: i < BACKERS.length - 1 ? '1px solid var(--line)' : 'none',
                color: 'var(--ink-2)',
                transition: 'transform .2s ease, opacity .2s ease',
              } as const
              const inner = b.logo ? (
                <img
                  src={b.logo}
                  alt={`${b.name} logo`}
                  style={{ display: 'block', height: 40, width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
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
              )
              return b.href ? (
                <a
                  key={b.name}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${b.name} (opens in a new tab)`}
                  style={tileStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  {inner}
                </a>
              ) : (
                <div key={b.name} style={tileStyle}>
                  {inner}
                </div>
              )
            })}
          </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .backed-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
