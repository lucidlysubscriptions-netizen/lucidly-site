import type { ReactNode } from 'react'
import { Counter, Reveal } from '../components/primitives'
import { Icon } from '../components/icons'
import { WordRotate } from '../components/WordRotate'
import { HeroSketch } from '../components/HeroSketch'
import { useLiveTvl } from '../hooks/useLiveTvl'
import { useSyUsdApy } from '../hooks/useSyUsdApy'

interface MetricProps {
  value: ReactNode
  label: string
  sub: string
}

function Metric({ value, label, sub }: MetricProps) {
  return (
    <div style={{ padding: '24px 24px 22px', position: 'relative' }} className="hero-metric">
      <div
        className="mono"
        style={{
          fontSize: 36,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          lineHeight: 1,
          marginBottom: 12,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 500, marginBottom: 4 }}>{label}</div>
      <div className="caption mono" style={{ fontSize: 11, color: 'var(--ink-4)' }}>
        {sub}
      </div>
    </div>
  )
}

/* 01 - Hero */
export function Hero() {
  const { value: tvl, status: tvlStatus } = useLiveTvl()
  const tvlInMillions = (tvl ?? 0) >= 1_000_000
  const tvlScaled = tvl != null ? (tvlInMillions ? tvl / 1_000_000 : tvl / 1_000) : null
  const tvlSuffix = tvlInMillions ? 'M' : 'K'
  const tvlDecimals = tvlInMillions ? 2 : 0
  const { value: apy, status: apyStatus } = useSyUsdApy()

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(32px, 4vw, 56px)',
        paddingBottom: 'clamp(36px, 4vw, 64px)',
      }}
    >
      <HeroSketch />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal delay={100}>
          <h1 className="h-hero" style={{ margin: 0 }}>
            Institutional
            <br />
            execution for
            <br />
            <WordRotate words={['tokenized', 'structured', 'automated']} />{' '}
            onchain
            <br />
            strategies.
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <div
            style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 0,
              overflow: 'hidden',
            }}
            className="hero-metrics card-neu"
          >
            <Metric value={<Counter to={4} duration={1200} />} label="live strategies" sub="across 7 chains" />
            <Metric
              value={
                apyStatus === 'ready' && apy != null ? (
                  <>
                    <Counter to={apy} decimals={2} duration={1500} />%
                  </>
                ) : (
                  <span style={{ color: 'var(--ink-4)' }}>-</span>
                )
              }
              label="syUSD net APY"
              sub="APY since inception"
            />
            <Metric
              value={
                tvlStatus === 'ready' && tvlScaled != null ? (
                  <>
                    <Counter to={tvlScaled} decimals={tvlDecimals} duration={1500} prefix="$" />
                    {tvlSuffix}
                  </>
                ) : (
                  <span style={{ color: 'var(--ink-4)' }}>-</span>
                )
              }
              label="live AUM"
              sub="updated every block"
            />
          </div>
        </Reveal>

        <Reveal delay={550}>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <a
              href="#allocate"
              style={{
                height: 48,
                padding: '0 28px',
                borderRadius: 999,
                background: '#7F56D9',
                border: '4px solid #F4F0FF',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                whiteSpace: 'nowrap',
                filter:
                  'drop-shadow(-4px -4px 4px #FFF) drop-shadow(4px 4px 8px rgba(127, 86, 217, 0.15))',
                transition: 'transform .15s ease, filter .15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.filter =
                  'drop-shadow(-4px -4px 4px #FFF) drop-shadow(6px 6px 12px rgba(127, 86, 217, 0.25))'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.filter =
                  'drop-shadow(-4px -4px 4px #FFF) drop-shadow(4px 4px 8px rgba(127, 86, 217, 0.15))'
              }}
            >
              Request allocator access <Icon.Arrow />
            </a>
            <a href="#strategies" className="btn btn-ghost">
              View strategies
            </a>
          </div>
        </Reveal>
      </div>
      <style>{`
        .hero-metric::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--line-2), transparent);
        }
        .hero-metric:first-child::before { display: none; }
        @media (max-width: 880px) {
          .hero-metrics { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-metric:nth-child(odd)::before { display: none; }
          .hero-metric:nth-child(n+3)::after {
            content: '';
            position: absolute;
            top: 0;
            left: 20px;
            right: 20px;
            height: 1px;
            background: linear-gradient(to right, transparent, var(--line-2), transparent);
          }
        }
      `}</style>
    </section>
  )
}
