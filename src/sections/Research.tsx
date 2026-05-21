import { useRef } from 'react'
import { Icon } from '../components/icons'
import { SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

/* 09 - Research */
export function Research() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    if (!scrollerRef.current) return
    scrollerRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <section id="research" style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="09"
          label="Research"
          kicker="From the team"
          title="Memos, strategy notes, partner drops."
          action={
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button onClick={() => scroll(-1)} className="scroll-btn" aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 4l-4 4 4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button onClick={() => scroll(1)} className="scroll-btn" aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a
                href="https://research.lucidly.finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                style={{ marginLeft: 8 }}
              >
                All research <Icon.ArrowUpRight />
              </a>
            </div>
          }
        />
      </div>

      <div
        ref={scrollerRef}
        style={{
          marginTop: 24,
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          /* Vertical padding gives the card-neu shadows (12px outer) breathing
             room before the scroll container's overflow clip. */
          paddingTop: 16,
          paddingBottom: 24,
          /* Match the container's effective left edge so the first card lines up
             with the section header text on viewports wider than --max-w. */
          paddingLeft:
            'max(calc((100vw - var(--max-w)) / 2 + var(--pad-x)), var(--pad-x))',
          paddingRight: 'var(--pad-x)',
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft:
            'max(calc((100vw - var(--max-w)) / 2 + var(--pad-x)), var(--pad-x))',
        }}
        className="research-scroller"
      >
        {LUCIDLY_DATA.research.map((r) => (
          <a
            key={r.title}
            href={r.href ?? '#'}
            target={r.href ? '_blank' : undefined}
            rel={r.href ? 'noopener noreferrer' : undefined}
            className="card-neu"
            style={{
              flex: '0 0 360px',
              scrollSnapAlign: 'start',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              minHeight: 260,
              transition: 'transform .2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-ink)',
                  background: 'var(--accent-soft)',
                  padding: '4px 8px',
                  borderRadius: 4,
                }}
              >
                {r.kind}
              </span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-4)' }}>
                {r.date}
              </span>
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0,
                flex: 1,
                color: 'var(--ink)',
                textWrap: 'balance',
              }}
            >
              {r.title}
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: 12,
                color: 'var(--ink-3)',
              }}
            >
              <span className="mono">{r.length}</span>
              <Icon.ArrowUpRight />
            </div>
          </a>
        ))}
        <div style={{ flex: '0 0 16px' }} />
      </div>

      <style>{`
        .scroll-btn {
          width: 36px; height: 36px;
          display: grid; place-items: center;
          border-radius: 999px;
          border: 1px solid var(--line-2);
          color: var(--ink);
          transition: border-color .15s ease, background .15s ease;
        }
        .scroll-btn:hover { border-color: var(--ink); background: var(--bg-elev); }
        .research-scroller::-webkit-scrollbar { height: 0; }
        .research-scroller { scrollbar-width: none; }
      `}</style>
    </section>
  )
}
