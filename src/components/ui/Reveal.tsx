import { useEffect, useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

/**
 * Scroll-reveal wrapper. Uses a per-element IntersectionObserver so it also
 * works for content mounted later (e.g. portfolio filtering).
 */
export function Reveal({ children, delay = 0, className = '', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const composedStyle: CSSProperties = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={composedStyle} {...rest}>
      {children}
    </div>
  )
}
