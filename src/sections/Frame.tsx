import { Reveal, SectionHeader } from '../components/primitives'

interface FrameCardData {
  tag: string
  title: string
  body: string
  items: Array<[string, string]>
}

const FRAME_CARDS: FrameCardData[] = [
  {
    tag: 'We build',
    title: 'Engineered onchain strategies.',
    body: 'Multi-leg structured products - designed as one, not aggregated.',
    items: [
      ['CLMM', 'Hedged concentrated-liquidity LP'],
      ['LOOP', 'Leveraged lending loops'],
      ['BASIS', 'Spot-perp basis & funding capture'],
      ['FX', 'Stablecoin market making'],
    ],
  },
  {
    tag: 'We operate',
    title: 'The execution stack underneath.',
    body: 'The same code that runs the strategies is what makes them safe to hold.',
    items: [
      ['VAULTS', 'Merkle-permissioned tokenized vaults'],
      ['AGENTS', '24/7 agentic execution & monitoring'],
      ['CHAINS', 'Multi-chain by default'],
      ['REPORTS', 'Onchain accounting, every block'],
    ],
  },
  {
    tag: 'You allocate',
    title: 'A small set of underwriteable strategies.',
    body: 'Held like any other asset - with the risk profile and accounting of a structured product.',
    items: [
      ['RISK', 'Defined drawdown scenarios per strategy'],
      ['ACCESS', 'Strategies behave like any ERC-20'],
      ['LIVE', 'NAV, LTV, drift - visible at all times'],
    ],
  },
]

interface FrameCardProps {
  card: FrameCardData
  idx: number
}

function FrameCard({ card, idx }: FrameCardProps) {
  return (
    <div
      className="card-neu"
      style={{
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform .25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
      }}
    >
      {/* Header: mono eyebrow + h3 title (left), chip (right) - mirrors StrategyCard */}
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
            {card.tag}
          </div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              margin: '6px 0 0',
              color: 'var(--ink)',
              textWrap: 'balance',
            }}
          >
            {card.title}
          </h3>
        </div>
        <span
          className="mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.08em',
            padding: '4px 8px',
            borderRadius: 999,
            background: 'var(--accent-soft)',
            color: 'var(--accent-ink)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          0{idx + 1}
        </span>
      </div>

      {/* Body paragraph - same metrics as StrategyCard's summary */}
      <p
        style={{
          fontSize: 13.5,
          color: 'var(--ink-3)',
          lineHeight: 1.5,
          margin: '4px 0 18px',
        }}
      >
        {card.body}
      </p>

      {/* Item list, anchored to the bottom of the card, with hairline above */}
      <ul
        style={{
          listStyle: 'none',
          padding: '14px 0 0',
          margin: 'auto 0 0',
          borderTop: '1px solid var(--line)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {card.items.map(([k, v]) => (
          <li
            key={k}
            style={{
              display: 'grid',
              gridTemplateColumns: '78px 1fr',
              gap: 12,
              alignItems: 'baseline',
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 9.5,
                color: 'var(--ink-4)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {k}
            </span>
            <span style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* 02 - The Frame. Subject · verb · object framing as a three-card row. */
export function Frame() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="02"
          label="The Frame"
          kicker="About us"
          title="We build the strategies. We operate the stack. You allocate."
        />

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="frame-cards"
        >
          {FRAME_CARDS.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <FrameCard card={c} idx={i} />
            </Reveal>
          ))}
        </div>

        <style>{`
          @media (max-width: 960px) { .frame-cards { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px) { .frame-cards { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
