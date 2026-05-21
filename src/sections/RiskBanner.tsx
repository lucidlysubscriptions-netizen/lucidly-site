import { Icon } from '../components/icons'

interface RiskBannerProps {
  onDismiss: () => void
  dismissed: boolean
}

/* 00 - Risk disclaimer banner (top of page) */
export function RiskBanner({ onDismiss, dismissed }: RiskBannerProps) {
  if (dismissed) return null
  return (
    <div
      className="risk-banner"
      style={{
        background: 'var(--bg-ink)',
        color: '#D9D6E8',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12.5, lineHeight: 1.5, color: '#C8C5DC' }}>
            Lucidly operates engineered strategies in volatile, decentralized digital-asset markets. Past
            performance does not indicate future results. All capital is at risk. Each strategy carries
            documented drawdown scenarios -{' '}
            <a
              href="https://app.lucidly.finance/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.3)' }}
            >
              read them before allocating
            </a>
            .
          </span>
        </div>
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            width: 28,
            height: 28,
            display: 'grid',
            placeItems: 'center',
            color: '#9C99B0',
            borderRadius: 6,
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9C99B0'
          }}
        >
          <Icon.Close size={12} />
        </button>
      </div>
    </div>
  )
}
