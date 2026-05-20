import { Icon } from '../components/icons'
import { Reveal, SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

/* 07 - Built for serious capital */
export function BuiltFor() {
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader num="07" label="Audience" kicker="Who allocates" title="Built for serious capital." />

        <div
          style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
          className="audience-grid"
        >
          {LUCIDLY_DATA.audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-4)', letterSpacing: '0.1em' }}>
                  / 0{i + 1}
                </div>
                <div style={{ width: 40, height: 1, background: 'var(--ink)' }} />
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, textWrap: 'balance' }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-3)', margin: 0 }}>{a.body}</p>
                <a
                  href="#"
                  className="text-link"
                  style={{ marginTop: 'auto', alignSelf: 'flex-start', borderColor: 'transparent', color: 'var(--ink-2)' }}
                >
                  Allocator memo <Icon.Arrow />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 880px) { .audience-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </div>
    </section>
  )
}
