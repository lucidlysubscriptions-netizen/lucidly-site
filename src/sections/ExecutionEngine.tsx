import type { ReactNode } from 'react'
import { Icon } from '../components/icons'
import { SHOW_SECTION_META } from '../config'

/* ---------- Engine diagrams (light-theme palette) ---------- */
function VaultDiagram() {
  return (
    <svg width="100%" height="88" viewBox="0 0 220 88">
      <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--ink-4)" letterSpacing="0.08em">
        <rect x="2" y="34" width="42" height="20" rx="3" fill="none" stroke="var(--line-2)" />
        <text x="23" y="47" textAnchor="middle">
          DEPOSIT
        </text>
        <path d="M44 44 L82 44" stroke="var(--line-2)" strokeDasharray="2 2" />
        <rect x="82" y="14" width="56" height="60" rx="4" fill="var(--accent)" stroke="var(--accent)" />
        <text x="110" y="32" textAnchor="middle" fill="#fff">
          VAULT
        </text>
        <text x="110" y="46" textAnchor="middle" fill="#fff">
          ERC-4626
        </text>
        <text x="110" y="60" textAnchor="middle" fill="#E7DEFF">
          syToken
        </text>
        <path d="M138 44 L176 44" stroke="var(--line-2)" strokeDasharray="2 2" />
        <rect x="176" y="20" width="42" height="14" rx="3" fill="none" stroke="var(--line-2)" />
        <text x="197" y="30" textAnchor="middle">
          VENUE A
        </text>
        <rect x="176" y="54" width="42" height="14" rx="3" fill="none" stroke="var(--line-2)" />
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
      <g fill="none" stroke="var(--line-2)" strokeWidth="1">
        <circle cx="110" cy="14" r="6" fill="var(--accent)" stroke="none" />
        <circle cx="60" cy="44" r="5" stroke="var(--line-strong)" />
        <circle cx="160" cy="44" r="5" stroke="var(--line-strong)" />
        <circle cx="30" cy="74" r="4" />
        <circle cx="90" cy="74" r="4" />
        <circle cx="130" cy="74" r="4" fill="var(--accent)" stroke="var(--accent)" />
        <circle cx="190" cy="74" r="4" />
        <path
          d="M110 20 L60 39 M110 20 L160 39 M60 49 L30 70 M60 49 L90 70 M160 49 L130 70 M160 49 L190 70"
          stroke="var(--line-2)"
        />
        <path d="M110 20 L160 39 L130 70" stroke="var(--accent)" strokeWidth="1.5" />
      </g>
      <text
        x="100"
        y="17"
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="var(--ink-4)"
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
        color: 'var(--ink-3)',
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
            borderBottom: '1px dashed rgba(14, 14, 20, 0.08)',
          }}
        >
          <span style={{ color: 'var(--ink)', letterSpacing: '0.06em' }}>{loop}</span>
          <span style={{ color: 'var(--ink-4)' }}>{every}</span>
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
      className="card-neu"
      style={{
        padding: '28px 24px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-4)' }}>
          / {num}
        </div>
        <div
          className="mono"
          style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-ink)' }}
        >
          {kicker}
        </div>
      </div>
      <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, color: 'var(--ink)' }}>
        {title}
      </h3>
      <div
        style={{
          height: 120,
          background: 'var(--accent-soft)',
          borderRadius: 10,
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {visual}
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: 0 }}>{body}</p>
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
    ['Withdrawal solver', 'Processes queued withdrawal requests against vault liquidity.', 'every 60s', 'all syTokens'],
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
    <div className="loops-table" style={{ padding: '14px 16px 18px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr 110px 220px',
          gap: 0,
          padding: '14px 22px',
          marginBottom: 8,
          borderRadius: 16,
          background: '#F4F0FF',
          boxShadow:
            '4px 4px 12px 0 rgba(127, 86, 217, 0.12), -4px -4px 10px 0 #FFF',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--ink-4)',
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
            padding: '16px 22px',
            borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(14, 14, 20, 0.06)',
            fontSize: 13,
            color: 'var(--ink-3)',
            alignItems: 'baseline',
          }}
          className="loops-row"
        >
          <div style={{ color: 'var(--ink)', fontWeight: 500 }}>{r[0]}</div>
          <div style={{ color: 'var(--ink-2)', paddingRight: 24 }}>{r[1]}</div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--accent-ink)' }}>
            {r[2]}
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-4)' }}>
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

/* 04 - The Execution Engine (the moat). Light theme. */
export function ExecutionEngine() {
  return (
    <section
      id="engine"
      style={{
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: SHOW_SECTION_META ? '220px 1fr' : '1fr',
            gap: 48,
            paddingBottom: 40,
            borderBottom: '1px solid var(--line)',
            alignItems: 'end',
          }}
          className="frame-grid"
        >
          {SHOW_SECTION_META && (
            <div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-4)', letterSpacing: '0.08em' }}>
                / 04
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
                color: 'var(--accent-ink)',
                marginBottom: 16,
              }}
            >
              <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
              The Execution Engine
            </div>
            <h2 className="h-section" style={{ textWrap: 'balance' }}>
              The same stack that runs Lucidly's strategies
              <br />
              is what makes them safe to allocate to.
            </h2>
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
            body="BoringVault-based ERC-4626 vaults issue syTokens against deposited assets. Allocators interact with a standard token surface; underneath, assets are custodied in a single contract with multi-call accounting."
            visual={<VaultDiagram />}
          />
          <EnginePillar
            num="02"
            kicker="Merkle-permissioned execution"
            title="The verification layer"
            body="Every transaction a vault attempts must match a Merkle-proven leaf in a pre-authorized leaf set. Calls that aren't in the set revert at the contract layer. The strategist cannot drain, route to an unauthorized venue, or exceed the protocol surface - not by policy, but by code."
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

        <div className="card-neu" style={{ marginTop: 32, overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '22px 30px 8px',
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}
            >
              Agent loops · all strategies · 24/7
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="pulse" />
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>
                monitoring
              </span>
            </div>
          </div>
          <AgentLoopsTable />
        </div>

        <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
          <a href="#" className="text-link">
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
