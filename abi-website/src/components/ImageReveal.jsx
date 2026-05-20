import { useRef, useState, useEffect } from 'react'

export default function ImageReveal({ src, alt, aspectRatio = '4/3', delay = 0, className = '' }) {
  const ref = useRef(null)
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
      { threshold: 0.1 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`image-reveal ${className}`}
      style={{ aspectRatio, overflow: 'hidden', position: 'relative' }}
    >
      <img
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          clipPath: visible ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)',
          transition: `clip-path 800ms var(--ease, cubic-bezier(0.22, 1, 0.36, 1))`,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  )
}
