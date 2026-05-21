import { Reveal, SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

/* 05 - Why allocators choose Lucidly */
export function Why() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="05"
          label="Why Lucidly"
          kicker="Why choose Lucidly"
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

        {/* Live transparency tiles — formerly their own section, merged here. */}
        <div
          style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          className="trans-grid"
        >
          {LUCIDLY_DATA.transparency.map((t, i) => (
            <Reveal key={t.title} delay={i * 80} style={{ height: '100%' }}>
              <div
                className="card-neu"
                style={{
                  padding: 24,
                  minHeight: 200,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--ink-4)' }}>
                    / 0{i + 1}
                  </div>
                  <span className="pulse" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>{t.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.5, margin: 0, flex: 1 }}>{t.detail}</p>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--accent-ink)',
                    background: 'var(--accent-soft)',
                    padding: '6px 8px',
                    borderRadius: 4,
                    borderLeft: '2px solid var(--accent)',
                  }}
                >
                  {t.sample}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <style>{`
          @media (max-width: 760px) {
            .why-grid { grid-template-columns: 1fr !important; }
            .why-cell { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
            .why-cell:last-child { border-bottom: none !important; }
          }
          @media (max-width: 1000px) { .trans-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 560px)  { .trans-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
