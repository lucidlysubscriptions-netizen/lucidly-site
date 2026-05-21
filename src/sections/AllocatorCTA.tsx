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
  /** Form field name - required for the value to be included in form submissions. */
  name?: string
}

function Select({ options, name }: SelectProps) {
  return (
    <div style={{ position: 'relative' }}>
      <select name={name} style={{ ...inputStyle, appearance: 'none', paddingRight: 32, cursor: 'pointer' }}>
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

// Substack blocks direct subscribe API calls from third-party origins via
// Cloudflare's bot challenge. So instead of POSTing here, we open the Substack
// publication's subscribe page in a new tab with the email prefilled - the user
// completes the subscribe over there, where Substack's own JS solves Cloudflare.
const SUBSTACK_DOMAIN = 'lucidlylabs1'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [sending] = useState(false)
  const [err] = useState<string | null>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!email) return
        const url =
          `https://${SUBSTACK_DOMAIN}.substack.com/subscribe?email=` +
          encodeURIComponent(email)
        window.open(url, '_blank', 'noopener,noreferrer')
        setDone(true)
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
          Opened Substack in a new tab - finish subscribing there.
        </div>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="allocator@firm.com"
            disabled={sending}
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
            disabled={sending}
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
              opacity: sending ? 0.7 : 1,
              cursor: sending ? 'wait' : 'pointer',
              filter:
                'drop-shadow(-4px -4px 4px #FFF) drop-shadow(4px 4px 8px rgba(127, 86, 217, 0.15))',
              transition: 'transform .15s ease, filter .15s ease, opacity .15s ease',
            }}
            onMouseEnter={(e) => {
              if (sending) return
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
            {sending ? 'Subscribing…' : 'Subscribe'} {!sending && <Icon.Arrow size={11} />}
          </button>
        </>
      )}
      {err && !done && (
        <div
          style={{
            flexBasis: '100%',
            padding: '6px 16px 0',
            fontSize: 11,
            color: 'var(--warn)',
          }}
          role="alert"
        >
          {err}
        </div>
      )}
    </form>
  )
}

const REQUEST_STATS: Array<[string, string]> = [
  ['Response', 'within 24h'],
  ['Onboarding', 'institutional'],
  ['Minimum', 'varies by strategy'],
]

/* 12 - CTA / Allocator. Light theme. */
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = '9a2f3eb2-e761-4290-9ae1-60c0e0d80916'

export function AllocatorCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
                Allocator access
              </div>
              <h2 className="h-section" style={{ textWrap: 'balance' }}>
                Request the allocator memo.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-3)', marginTop: 20, maxWidth: 480 }}>
                Per-strategy factsheets, live NAV, drawdown scenarios, and an intro call with the team.
              </p>
              <div
                style={{
                  marginTop: 36,
                  display: 'flex',
                  flexWrap: 'wrap',
                  columnGap: 36,
                  rowGap: 20,
                }}
              >
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
              onSubmit={async (e) => {
                e.preventDefault()
                if (submitting) return
                setSubmitting(true)
                setError(null)
                const formEl = e.currentTarget
                const data = Object.fromEntries(new FormData(formEl)) as Record<string, string>
                try {
                  const res = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: JSON.stringify({
                      access_key: WEB3FORMS_ACCESS_KEY,
                      ...data,
                      subject: `Lucidly allocator request - ${data.email ?? 'no email'}`,
                      from_name: 'Lucidly Site',
                      replyto: data.email,
                    }),
                  })
                  const result = (await res.json().catch(() => null)) as
                    | { success?: boolean; message?: string }
                    | null
                  if (!res.ok || !result?.success) {
                    throw new Error(result?.message ?? `HTTP ${res.status}`)
                  }
                  setSubmitted(true)
                } catch {
                  setError(
                    'Could not submit right now. Please try again or email yashish@lucidlylabs.xyz directly.',
                  )
                } finally {
                  setSubmitting(false)
                }
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
                    The team will be in touch within 24 hours.
                  </div>
                </div>
              ) : (
                <>
                  <FormField label="Allocator type">
                    <Select
                      name="allocator_type"
                      options={['Family office', 'Fund / FoF', 'Treasury / DAO', 'Other institutional']}
                    />
                  </FormField>
                  <FormField label="Ticket size">
                    <Select name="ticket_size" options={['$500K – $2M', '$2M – $10M', '$10M – $50M', '$50M +']} />
                  </FormField>
                  <FormField label="Benchmark">
                    <Select name="benchmark" options={['USD', 'BTC', 'ETH', 'Custom']} />
                  </FormField>
                  <FormField label="Contact email">
                    <input
                      name="email"
                      type="email"
                      placeholder="allocator@firm.com"
                      required
                      style={inputStyle}
                    />
                  </FormField>
                  {error && (
                    <div
                      style={{
                        fontSize: 12,
                        color: 'var(--warn)',
                        lineHeight: 1.5,
                        textAlign: 'center',
                        marginTop: -4,
                      }}
                      role="alert"
                    >
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
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
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? 'wait' : 'pointer',
                      filter:
                        'drop-shadow(-4px -4px 4px #FFF) drop-shadow(4px 4px 8px rgba(127, 86, 217, 0.15))',
                      transition: 'transform .15s ease, filter .15s ease, opacity .15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (submitting) return
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
                    {submitting ? 'Sending…' : 'Request access'} {!submitting && <Icon.Arrow />}
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
              No marketing. Net returns, drawdown attribution, and what the team did.
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
