import { useRef, useState, useEffect } from 'react'

/**
 * variant: 'up' | 'left' | 'right' | 'scale' | 'blur'
 * Maps to CSS classes reveal-up / reveal-left / reveal-right / reveal-scale / reveal-blur.
 * Default 'up' produces the same output as the original .reveal / .in classes for
 * backward compatibility.
 */
export default function ScrollReveal({ children, delay = 0, className = '', variant = 'up', threshold = 0.15 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])

  // 'up' keeps the legacy class pair so existing CSS continues to work unchanged.
  const variantClass = variant === 'up'
    ? `reveal${seen ? ' in' : ''}`
    : `reveal-${variant}${seen ? ' in' : ''}`

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
