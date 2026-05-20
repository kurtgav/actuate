import { useRef, useState, useEffect, Children, isValidElement, cloneElement } from 'react'

/**
 * Splits children into lines by '\n' strings and wraps each in a
 * clip-path reveal container. React elements (e.g. <span>) are treated
 * as their own line and passed through unchanged.
 */
function splitIntoLines(children) {
  const lines = []
  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      const parts = child.split('\n')
      parts.forEach((part, i) => {
        if (part.trim()) lines.push(part)
        // A split '\n' that had content on both sides means a line break between
        // but we already handle that by splitting — extra empty strings are skipped
      })
    } else {
      lines.push(child)
    }
  })
  return lines
}

export default function TextReveal({ as: Tag = 'p', children, className = '', staggerMs = 120, threshold = 0.15 }) {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold }
    )
    if (containerRef.current) io.observe(containerRef.current)
    return () => io.disconnect()
  }, [threshold])

  const lines = splitIntoLines(children)

  return (
    <Tag ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="text-reveal-line"
          style={{
            display: 'block',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              display: 'block',
              clipPath: visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
              transition: `clip-path 750ms var(--ease, cubic-bezier(0.22, 1, 0.36, 1))`,
              transitionDelay: visible ? `${i * staggerMs}ms` : '0ms',
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
