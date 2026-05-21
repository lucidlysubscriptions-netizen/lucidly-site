import type { ReactNode } from 'react'
import { Icon } from '../components/icons'
import { SHOW_SECTION_META } from '../config'

/* ---------- Engine diagrams (dark-theme palette) ---------- */
function VaultDiagram() {
  return (
    <svg width="100%" height="88" viewBox="0 0 220 88">
      <g fontFamily="var(--font-mono)" fontSize="9" fill="#9C99B0" letterSpacing="0.08em">
        <rect x="2" y="34" width="42" height="20" rx="3" fill="none" stroke="rgba(255,255,255,0.18)" />
        <text x="23" y="47" textAnchor="middle">
          DEPOSIT
        </text>
        <path d="M44 44 L82 44" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" />
        <rect x="82" y="14" width="56" height="60" rx="4" fill="rgba(123,97,255,0.12)" stroke="var(--accent)" />
        <text x="110" y="40" textAnchor="middle" fill="#fff">
          VAULT
        </text>
        <text x="110" y="56" textAnchor="middle" fill="#C5BFFC">
          strategy
        </text>
        <path d="M138 44 L176 44" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" />
        <rect x="176" y="20" width="42" height="14" rx="3" fill="none" stroke="rgba(255,255,255,0.18)" />
        <text x="197" y="30" textAnchor="middle">
          VENUE A
        </text>
        <rect x="176" y="54" width="42" height="14" rx="3" fill="none" stroke="rgba(255,255,255,0.18)" />
        <text x="197" y="64" textAnchor="middle">
          VENUE B
        </text>
      </g>
    </svg>
  )
}

function MerkleDiagram() {
  return (
    <svg width="100%" height="88" viewBox="0 0 220 100" preserveAspectRatio="xMidYMid meet">
      <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
        <circle cx="110" cy="14" r="6" fill="var(--accent)" stroke="none" />
        <circle cx="60" cy="44" r="5" stroke="rgba(255,255,255,0.4)" />
        <circle cx="160" cy="44" r="5" stroke="rgba(255,255,255,0.4)" />
        <circle cx="30" cy="74" r="4" />
        <circle cx="90" cy="74" r="4" />
        <circle cx="130" cy="74" r="4" fill="var(--accent)" stroke="var(--accent)" />
        <circle cx="190" cy="74" r="4" />
        <path
          d="M110 20 L60 39 M110 20 L160 39 M60 49 L30 70 M60 49 L90 70 M160 49 L130 70 M160 49 L190 70"
          stroke="rgba(255,255,255,0.18)"
        />
        <path d="M110 20 L160 39 L130 70" stroke="var(--accent)" strokeWidth="1.5" />
      </g>
      <text
        x="100"
        y="17"
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="#9C99B0"
        letterSpacing="0.08em"
      >
        ROOT
      </text>
      <text x="130" y="92" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)">
        verified
      </text>
    </svg>
  )
}

function AgentDiagram() {
  const loops: Array<[string, string, string]> = [
    ['REBALANCE', '5m  ·', 'tick 04:18:21Z'],
    ['HEDGE-TOPUP', '5m  ·', 'tick 04:18:21Z'],
    ['LIQ-MONITOR', '15m ·', 'tick 04:15:00Z'],
    ['WITHDRAW', '60s ·', 'tick 04:19:08Z'],
  ]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        color: '#B7B4CE',
      }}
    >
      {loops.map(([loop, every, last]) => (
        <div
          key={loop}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto auto',
            gap: 12,
            alignItems: 'center',
            padding: '4px 0',
            borderBottom: '1px dashed rgba(255,255,255,0.06)',
          }}
        >
          <span style={{ color: '#fff', letterSpacing: '0.06em' }}>{loop}</span>
          <span style={{ color: '#7B7891' }}>{every}</span>
          <span style={{ color: 'var(--accent)' }}>{last}</span>
        </div>
      ))}
    </div>
  )
}

interface EnginePillarProps {
  num: string
  kicker: string
  title: string
  body: string
  visual: ReactNode
}

function EnginePillar({ num, kicker, title, body, visual }: EnginePillarProps) {
  return (
    <div
      className="engine-pillar"
      style={{
        padding: '32px 28px 28px',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        background: 'rgba(255,255,255,0.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        height: '100%',
        transition: 'transform .25s ease, border-color .25s ease, background .25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: '#7B7891' }}>
          / {num}
        </div>
        <div
          className="mono"
          style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}
        >
          {kicker}
        </div>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: '#fff' }}>
        {title}
      </h3>
      <div
        className="engine-pillar-visual"
        style={{
          height: 120,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 8,
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {visual}
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#B7B4CE', margin: 0 }}>{body}</p>
    </div>
  )
}

function AgentLoopsTable() {
  const rows: Array<[string, string, string, string]> = [
    [
      'Rebalance',
      'Repositions LP ranges and hedge legs against drift thresholds.',
      'every 5m',
      'syUSD · cyBTC · cyETH · dnCluster',
    ],
    [
      'Hedge top-up',
      'Monitors LTV and margin coverage; tops up from idle reserves before liquidation risk materializes.',
      'every 5m',
      'cyBTC · cyETH · syUSD',
    ],
    ['Withdrawal solver', 'Processes queued withdrawal requests against vault liquidity.', 'every 60s', 'all strategies'],
    [
      'Liquidation-risk monitor',
      'Emergency-closes positions when health factors approach the configured floor.',
      'every 15m',
      'all leveraged · hedged',
    ],
    [
      'Funding rotation',
      'Rotates capital between assets when the funding-rate spread clears round-trip fee costs.',
      'on signal',
      'dnCluster',
    ],
  ]
  return (
    <div className="loops-table">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr 110px 220px',
          gap: 0,
          padding: '10px 22px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: '#7B7891',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
        className="loops-head"
      >
        <div>Loop</div>
        <div>Function</div>
        <div>Cadence</div>
        <div>Strategies</div>
      </div>
      {rows.map((r, i) => (
        <div
          key={r[0]}
          style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr 110px 220px',
            gap: 0,
            padding: '14px 22px',
            borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.04)',
            fontSize: 13,
            color: '#B7B4CE',
            alignItems: 'baseline',
          }}
          className="loops-row"
        >
          <div style={{ color: '#fff', fontWeight: 500 }}>{r[0]}</div>
          <div style={{ color: '#9C99B0', paddingRight: 24 }}>{r[1]}</div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--accent)' }}>
            {r[2]}
          </div>
          <div className="mono" style={{ fontSize: 11, color: '#7B7891' }}>
            {r[3]}
          </div>
        </div>
      ))}
      <style>{`
        @media (max-width: 880px) {
          .loops-head, .loops-row { grid-template-columns: 1fr !important; gap: 4px !important; padding: 14px 18px !important; }
          .loops-head { display: none !important; }
        }
      `}</style>
    </div>
  )
}

/* 04 - The Execution Engine (the moat). Dark inverted section. */
export function ExecutionEngine() {
  return (
    <section
      id="engine"
      style={{
        background: 'var(--bg-ink)',
        color: '#E7E4F3',
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: SHOW_SECTION_META ? '220px 1fr' : '1fr',
            gap: 48,
            paddingBottom: 40,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            alignItems: 'end',
          }}
          className="frame-grid"
        >
          {SHOW_SECTION_META && (
            <div>
              <div className="mono" style={{ fontSize: 12, color: '#7B7891', letterSpacing: '0.08em' }}>
                / 04
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#9C99B0',
                  marginTop: 10,
                }}
              >
                The Moat
              </div>
            </div>
          )}
          <div style={{ maxWidth: 1080 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C5BFFC',
                marginBottom: 16,
              }}
            >
              <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
              The Execution Engine
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="engine-grid"
        >
          <EnginePillar
            num="01"
            kicker="Tokenized custody"
            title="The vault layer"
            body="Issue Vault shares for strategies against deposited assets. Allocators interact with a standard token surface; underneath, assets are custodied in a single contract with multi-call accounting."
            visual={<VaultDiagram />}
          />
          <EnginePillar
            num="02"
            kicker="Merkle-permissioned execution"
            title="The verification layer"
            body="Every transaction a vault attempts must match a Merkle-proven policy in a pre-authorized policy set. Calls that aren't in the set revert at the contract layer. The strategist cannot drain, route to an unauthorized venue, or exceed the protocol surface - not by request, but by code."
            visual={<MerkleDiagram />}
          />
          <EnginePillar
            num="03"
            kicker="24/7 execution"
            title="The agent layer"
            body="Per-strategy execution agents run continuously across all live chains - rebalance, hedge top-up, withdrawal solver, liquidation-risk monitor, funding rotation."
            visual={<AgentDiagram />}
          />
        </div>

        <div
          style={{
            marginTop: 32,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--r-md)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 22px',
              background: 'rgba(255,255,255,0.02)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9C99B0' }}
            >
              Agent loops<span className="loops-head-detail"> · all strategies · 24/7</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="pulse" />
              <span className="mono" style={{ fontSize: 11, color: '#9C99B0' }}>
                monitoring
              </span>
            </div>
          </div>
          <AgentLoopsTable />
        </div>

        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
          <a
            href="https://docs.lucidly.finance/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              paddingBottom: 2,
            }}
          >
            Architecture deep-dive <Icon.ArrowUpRight />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .engine-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 760px) { .frame-grid { grid-template-columns: 1fr !important; gap: 16px !important; } }
      `}</style>
    </section>
  )
}
