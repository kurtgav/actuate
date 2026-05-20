import { useRef, useState, useEffect } from 'react'

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export function useCountUp({ end, duration = 1800, suffix = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0' + suffix)
  const triggered = useRef(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || triggered.current) return
          triggered.current = true

          const start = performance.now()
          const tick = (now) => {
            const elapsed = now - start
            const t = Math.min(elapsed / duration, 1)
            const value = Math.round(easeOutExpo(t) * end)
            setDisplay(value + suffix)
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [end, duration, suffix])

  return { ref, display }
}
