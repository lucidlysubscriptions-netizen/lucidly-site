import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from '../components/icons'
import { SectionHeader } from '../components/primitives'
import { LUCIDLY_DATA } from '../data'

interface FAQRowProps {
  q: string
  a: ReactNode
  open: boolean
  onClick: () => void
  idx: number
}

function FAQRow({ q, a, open, onClick, idx }: FAQRowProps) {
  const aRef = useRef<HTMLDivElement>(null)
  const [h, setH] = useState(0)

  useEffect(() => {
    if (aRef.current) setH(aRef.current.scrollHeight)
  }, [a])

  return (
    <div style={{ borderTop: idx === 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '60px 1fr auto',
          gap: 24,
          alignItems: 'center',
          padding: '24px 4px',
          textAlign: 'left',
        }}
      >
        <span className="mono" style={{ fontSize: 12, color: 'var(--ink-4)', letterSpacing: '0.1em' }}>
          0{idx + 1}
        </span>
        <span
          style={{ fontSize: 'clamp(17px, 1.6vw, 20px)', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--ink)' }}
        >
          {q}
        </span>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid var(--line-2)',
            display: 'grid',
            placeItems: 'center',
            transition: 'transform .25s ease, background .15s ease',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            background: open ? 'var(--ink)' : 'transparent',
            color: open ? '#fff' : 'var(--ink-2)',
          }}
        >
          <Icon.Plus size={12} />
        </span>
      </button>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? h + 24 : 0,
          transition: 'max-height .35s ease',
        }}
      >
        <div
          ref={aRef}
          style={{
            paddingLeft: 84,
            paddingRight: 48,
            paddingBottom: 24,
            fontSize: 15,
            color: 'var(--ink-3)',
            lineHeight: 1.6,
            maxWidth: 820,
          }}
        >
          {a}
        </div>
      </div>
    </div>
  )
}

/* 11 - FAQ */
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="container">
        <SectionHeader num="11" label="FAQ" kicker="FAQs" bordered={false} />

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
          {LUCIDLY_DATA.faq.map((f, i) => (
            <FAQRow
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
              idx={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
