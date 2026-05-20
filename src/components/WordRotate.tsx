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
 * use inside a heading. Each word slides in from above and exits below,
 * clipped by the parent so the motion reads as a slot-machine. The
 * container's width transitions to the active word's measured width so
 * trailing text smoothly slides with it.
 */
const DEFAULT_MOTION_PROPS: HTMLMotionProps<'span'> = {
  initial: { y: '-100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
  transition: { duration: 0.3, ease: 'easeOut' },
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

  const width = widths[index]

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
