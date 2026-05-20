import { Icon } from '../components/icons'
import { Reveal, SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

/* 06 - Live Transparency */
export function Transparency() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader
          num="06"
          label="Live transparency"
          kicker="Every vault, every leaf, every tx onchain"
          title="Live accounting - not screenshots."
          action={
            <a href="#" className="text-link">
              Open allocator dashboard <Icon.ArrowUpRight />
            </a>
          }
        />

        <div
          style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
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
          @media (max-width: 1000px) { .trans-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 560px)  { .trans-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
