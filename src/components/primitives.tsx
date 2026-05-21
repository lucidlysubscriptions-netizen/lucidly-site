import {
  createElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from 'react'
import type { StrategyStatus } from '../types'
import { SHOW_SECTION_META } from '../config'
import { Icon } from './icons'

/* ---------- In-view observer ---------- */
export function useInView(
  ref: RefObject<Element | null>,
  opts: IntersectionObserverInit = { threshold: 0.2 },
): boolean {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      })
    }, opts)
    io.observe(node)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return seen
}

/* ---------- Animated counter ---------- */
interface CounterProps {
  to: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function Counter({ to, decimals = 0, duration = 1500, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const seen = useInView(ref)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!seen) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setVal(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])

  const formatted = val.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

/* ---------- Reveal on scroll ---------- */
interface RevealProps {
  children: ReactNode
  delay?: number
  as?: keyof JSX.IntrinsicElements
  style?: CSSProperties
}

export function Reveal({ children, delay = 0, as = 'div', style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const seen = useInView(ref)
  return createElement(
    as,
    {
      ref,
      className: `reveal ${seen ? 'in' : ''}`,
      style: { transitionDelay: `${delay}ms`, ...style },
    },
    children,
  )
}

/* ---------- Section header ---------- */
interface SectionHeaderProps {
  num: string
  label: string
  title?: string
  kicker?: ReactNode
  action?: ReactNode
  /** Set false to drop the hairline below the header. Defaults to true. */
  bordered?: boolean
}

export function SectionHeader({ num, label, title, kicker, action, bordered = true }: SectionHeaderProps) {
  const classes = [
    'section-header',
    SHOW_SECTION_META ? '' : 'no-meta',
    bordered ? '' : 'no-border',
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      {SHOW_SECTION_META && (
        <div className="meta">
          <span className="num">/ {num}</span>
          <span className="label">{label}</span>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: 720 }}>
          {kicker && (
            <div className="kicker" style={{ marginBottom: 14 }}>
              <span className="dot" />
              {kicker}
            </div>
          )}
          {title && <h2 className="h-section">{title}</h2>}
        </div>
        {action}
      </div>
    </div>
  )
}

/* ---------- Mini sparkline for strategy cards ---------- */
interface SparkProps {
  seed?: number
  color?: string
}

export function Spark({ seed = 1, color = 'var(--accent)' }: SparkProps) {
  const points = useMemo(() => {
    // deterministic-ish pseudo-random walk
    const rand = (i: number) => {
      const x = Math.sin(seed * 13 + i * 4.31) * 1000
      return x - Math.floor(x)
    }
    const N = 32
    let y = 0.5
    const pts: Array<{ x: number; y: number }> = []
    for (let i = 0; i < N; i++) {
      y += (rand(i) - 0.45) * 0.12
      y = Math.max(0.1, Math.min(0.9, y))
      pts.push({ x: i / (N - 1), y })
    }
    // trend up
    return pts.map((p, i) => ({ x: p.x, y: p.y - i * 0.012 }))
  }, [seed])

  const w = 100
  const h = 28
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x * w} ${p.y * h}`).join(' ')
  const area = `${path} L ${w} ${h} L 0 ${h} Z`

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ width: '100%', height: 28, display: 'block', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={`sg-${seed}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#sg-${seed})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

/* ---------- Status pill ---------- */
interface StatusPillProps {
  status: StrategyStatus
}

export function StatusPill({ status }: StatusPillProps) {
  if (status === 'pilot') {
    return (
      <span className="pill pill-pilot">
        <Icon.Dot color="var(--pilot)" />
        Pilot-live
      </span>
    )
  }
  if (status === 'building') {
    return (
      <span className="pill pill-building">
        <Icon.Dot color="var(--accent-ink)" />
        Beta Access
      </span>
    )
  }
  return (
    <span className="pill pill-live">
      <span className="pulse" style={{ width: 6, height: 6 }} />
      Live
    </span>
  )
}

/* ---------- Live time ---------- */
export function LiveClock() {
  const [t, setT] = useState(() => new Date())
  useEffect(() => {
    const i = setInterval(() => setT(new Date()), 1000)
    return () => clearInterval(i)
  }, [])
  const z = (n: number) => String(n).padStart(2, '0')
  return (
    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-4)' }}>
      {z(t.getUTCHours())}:{z(t.getUTCMinutes())}:{z(t.getUTCSeconds())} UTC
    </span>
  )
}
