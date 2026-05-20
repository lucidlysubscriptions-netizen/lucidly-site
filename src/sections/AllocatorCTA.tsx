import { useState, type CSSProperties, type ReactNode } from 'react'
import { Icon } from '../components/icons'

const inputStyle: CSSProperties = {
  height: 40,
  background: 'transparent',
  border: '1px solid var(--line-2)',
  borderRadius: 8,
  padding: '0 14px',
  color: 'var(--ink)',
  fontSize: 13,
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  width: '100%',
}

interface FormFieldProps {
  label: string
  children: ReactNode
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        className="mono"
        style={{ fontSize: 10, color: 'var(--ink-4)', letterSpacing: '0.14em', textTransform: 'uppercase' }}
      >
        {label}
      </span>
      {children}
    </label>
  )
}

interface SelectProps {
  options: string[]
}

function Select({ options }: SelectProps) {
  return (
    <div style={{ position: 'relative' }}>
      <select style={{ ...inputStyle, appearance: 'none', paddingRight: 32, cursor: 'pointer' }}>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: '#FFFFFF', color: 'var(--ink)' }}>
            {o}
          </option>
        ))}
      </select>
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        style={{
          position: 'absolute',
          right: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: 'var(--ink-4)',
        }}
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (email) setDone(true)
      }}
      style={{
        display: 'flex',
        gap: 0,
        borderRadius: 99,
        padding: 0,
        background: '#F4F0FF',
        boxShadow:
          '4px 4px 4px 0 rgba(0, 0, 0, 0.08) inset, -4px -4px 4px 0 #FFF inset',
      }}
    >
      {done ? (
        <div style={{ flex: 1, padding: '8px 16px', fontSize: 13, color: 'var(--ink-2)' }}>
          Subscribed. Next memo ships in 18 days.
        </div>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="allocator@firm.com"
            style={{
              flex: 1,
              border: 0,
              background: 'transparent',
              outline: 'none',
              padding: '0 22px',
              fontSize: 14,
              color: 'var(--ink)',
            }}
          />
          <button
            type="submit"
            style={{
              height: 48,
              padding: '0 24px',
              borderRadius: 999,
              background: '#7F56D9',
              border: 0,
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
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
            Subscribe <Icon.Arrow size={11} />
          </button>
        </>
      )}
    </form>
  )
}

const REQUEST_STATS: Array<[string, string]> = [
  ['Response', 'within 48h'],
  ['Onboarding', 'institutional'],
  ['Minimum', 'varies by syToken'],
]

/* 12 - CTA / Allocator. Light theme. */
export function AllocatorCTA() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="allocate" style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <div
          className="card-neu"
          style={{
            padding: 'clamp(40px, 6vw, 80px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Soft grid pattern fading toward top-right, kept as ambient detail. */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.6,
              pointerEvents: 'none',
              backgroundImage:
                'linear-gradient(rgba(14,14,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,20,0.04) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse at top right, rgba(0,0,0,0.7), transparent 60%)',
            }}
          />

          <div
            style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64 }}
            className="cta-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-ink)',
                  border: '1px solid var(--line-2)',
                  padding: '4px 10px',
                  borderRadius: 999,
                  marginBottom: 24,
                  background: 'var(--accent-soft)',
                }}
              >
                <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
                Allocator access · gated
              </div>
              <h2 className="h-section" style={{ textWrap: 'balance' }}>
                Request the allocator memo.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-3)', marginTop: 20, maxWidth: 480 }}>
                Per-strategy factsheets, live NAV, drawdown scenarios, and an intro call with the desk.
              </p>
              <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 36 }}>
                {REQUEST_STATS.map(([k, v]) => (
                  <div key={k}>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-4)',
                        marginBottom: 6,
                      }}
                    >
                      {k}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              style={{
                borderRadius: 12,
                background: '#F4F0FF',
                boxShadow:
                  '4px 4px 6px 0 rgba(127, 86, 217, 0.10) inset, -4px -4px 6px 0 rgba(255, 255, 255, 0.80) inset',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                alignSelf: 'start',
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-4)' }}
              >
                Request form
              </div>

              {submitted ? (
                <div style={{ padding: '32px 0', textAlign: 'center' }}>
                  <div style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 500, marginBottom: 8 }}>
                    Request received.
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                    The desk will be in touch within 48 hours.
                  </div>
                </div>
              ) : (
                <>
                  <FormField label="Allocator type">
                    <Select options={['Family office', 'Fund / FoF', 'Treasury / DAO', 'Other institutional']} />
                  </FormField>
                  <FormField label="Ticket size">
                    <Select options={['$500K – $2M', '$2M – $10M', '$10M – $50M', '$50M +']} />
                  </FormField>
                  <FormField label="Benchmark">
                    <Select options={['USD', 'BTC', 'ETH', 'Custom']} />
                  </FormField>
                  <FormField label="Contact email">
                    <input type="email" placeholder="allocator@firm.com" required style={inputStyle} />
                  </FormField>
                  <button
                    type="submit"
                    style={{
                      marginTop: 8,
                      height: 48,
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
                    Request access <Icon.Arrow />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            alignItems: 'center',
            paddingTop: 40,
            borderTop: '1px solid var(--line)',
          }}
          className="news-grid"
        >
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-4)',
                marginBottom: 8,
              }}
            >
              Monthly memo
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em', margin: 0 }}>
              Per-strategy performance, every month.
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '8px 0 0', maxWidth: 480 }}>
              No marketing. Net returns, drawdown attribution, and what the desk did.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <style>{`
          @media (max-width: 920px) {
            .cta-grid, .news-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
