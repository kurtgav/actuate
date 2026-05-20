import { useRef, useState, useEffect } from 'react'

export function useScaleOnScroll() {
  const ref = useRef(null)
  const [scale, setScale] = useState(1.0)
  useEffect(() => {
    let frame = null
    const update = () => {
      frame = null
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const proximity = 1 - Math.min(1, Math.abs(center - vh / 2) / vh)
      setScale(1.0 + proximity * 0.10)
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return { ref, scale }
}
