import { SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

/* 05 - Why allocators choose Lucidly */
export function Why() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="05"
          label="Why Lucidly"
          kicker="The competitive set · framed honestly"
          title="Built for capital that needs to be underwriteable."
        />

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 0,
            overflow: 'hidden',
          }}
          className="why-grid card-neu"
        >
          {LUCIDLY_DATA.whyPillars.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding: 32,
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
              className="why-cell"
            >
              <div
                className="mono"
                style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-4)' }}
              >
                / 0{i + 1}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em', margin: 0, color: 'var(--ink)' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 760px) {
            .why-grid { grid-template-columns: 1fr !important; }
            .why-cell { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
            .why-cell:last-child { border-bottom: none !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
