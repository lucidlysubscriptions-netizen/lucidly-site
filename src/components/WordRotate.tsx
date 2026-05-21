import { AnimatePresence, motion, type HTMLMotionProps } from 'motion/react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: HTMLMotionProps<'span'>
  className?: string
}

/**
 * Adapted from Magic UI's WordRotate (https://magicui.design/) for inline
 * use inside a heading. The active word cross-fades to the next - opacity
 * only, no vertical motion, so descenders stay put. The container's width
 * is pinned to the widest word so trailing text never reflows.
 */
const DEFAULT_MOTION_PROPS: HTMLMotionProps<'span'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: 'easeInOut' },
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = DEFAULT_MOTION_PROPS,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const [widths, setWidths] = useState<number[]>([])
  const measureRef = useRef<HTMLSpanElement | null>(null)

  useLayoutEffect(() => {
    const node = measureRef.current
    if (!node) return
    const measure = () => {
      const spans = Array.from(node.children) as HTMLElement[]
      setWidths(spans.map((s) => s.getBoundingClientRect().width))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(node)
    return () => ro.disconnect()
  }, [words])

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, duration)
    return () => window.clearInterval(id)
  }, [words, duration])

  const width = widths.length ? Math.max(...widths) : undefined

  return (
    <span
      className="word-rotate"
      style={width != null ? { width } : undefined}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="word-rotate__measure" ref={measureRef} aria-hidden>
        {words.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={className ? `word-rotate__word ${className}` : 'word-rotate__word'}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
