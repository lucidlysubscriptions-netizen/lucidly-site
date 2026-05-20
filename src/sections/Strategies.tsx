import type { ReactNode } from 'react'
import { Icon } from '../components/icons'
import { Reveal, SectionHeader, Spark, StatusPill } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'
import type { Strategy } from '../types'

interface CardStatProps {
  label: string
  value: ReactNode
}

function CardStat({ label, value }: CardStatProps) {
  return (
    <div>
      <div
        className="mono"
        style={{
          fontSize: 9.5,
          color: 'var(--ink-4)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div>{value}</div>
    </div>
  )
}

interface StrategyCardProps {
  s: Strategy
  idx: number
}

function StrategyCard({ s, idx }: StrategyCardProps) {
  return (
    <a
      href="https://app.lucidly.finance/"
      target="_blank"
      rel="noopener noreferrer"
      className="card-neu"
      style={{
        display: 'block',
        padding: 22,
        transition: 'transform .25s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 14,
        }}
      >
        <div>
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: 'var(--ink-4)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {s.benchmark}-benchmark
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', margin: '6px 0 0', color: 'var(--ink)' }}>
            {s.token}
          </h3>
        </div>
        <StatusPill status={s.status} />
      </div>

      <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.5, margin: '4px 0 18px', minHeight: 60 }}>
        {s.summary}
      </p>

      <div style={{ marginBottom: 14 }}>
        <Spark seed={idx + 1} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 0,
          borderTop: '1px solid var(--line)',
          paddingTop: 14,
        }}
      >
        <CardStat
          label="Net APR"
          value={<span className="mono" style={{ fontSize: 15, color: 'var(--ink)', fontWeight: 500 }}>{s.apr}</span>}
        />
        <CardStat label="Venue" value={<span style={{ fontSize: 13, color: 'var(--ink-2)' }}>{s.chain}</span>} />
        <CardStat
          label="Live since"
          value={<span className="mono" style={{ fontSize: 12, color: 'var(--ink-2)' }}>{s.liveSince}</span>}
        />
      </div>

      <div
        style={{
          marginTop: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 12,
          color: 'var(--ink-3)',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {s.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 10.5,
                padding: '2px 8px',
                borderRadius: 999,
                background: 'var(--paper)',
                color: 'var(--ink-3)',
                letterSpacing: '0.02em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ink-2)' }}>
          Factsheet <Icon.ArrowUpRight size={11} />
        </span>
      </div>
    </a>
  )
}

/* 03 - Live strategies grid */
export function Strategies() {
  return (
    <section id="strategies" style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="03"
          label="Live strategies"
          kicker="Tokenized · hedged · running in production"
          title="A small set of underwriteable products."
          action={
            <a
              href="https://app.lucidly.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Full strategy library <Icon.ArrowUpRight />
            </a>
          }
        />

        <div
          style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          className="strategy-grid"
        >
          {LUCIDLY_DATA.strategies.map((s, i) => (
            <Reveal key={s.token} delay={i * 70}>
              <StrategyCard s={s} idx={i} />
            </Reveal>
          ))}
          <Reveal delay={LUCIDLY_DATA.strategies.length * 70}>
            <a
              href="#allocate"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                background: 'transparent',
                border: '1px dashed var(--line-2)',
                borderRadius: 'var(--r-md)',
                minHeight: 244,
                transition: 'border-color .2s ease, background .2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--ink)'
                e.currentTarget.style.background = 'var(--bg-elev)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line-2)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{ fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  In pipeline
                </div>
                <h3 className="h-card" style={{ marginTop: 16, color: 'var(--ink-2)' }}>
                  Three new structured products,
                  <br />
                  Q3 2026.
                </h3>
              </div>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-2)', fontSize: 14, fontWeight: 500 }}
              >
                Request the pipeline memo <Icon.Arrow />
              </div>
            </a>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 960px) { .strategy-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px) { .strategy-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
