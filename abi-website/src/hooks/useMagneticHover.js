import { useRef, useState, useEffect, useCallback } from 'react'

export function useMagneticHover({ strength = 0.3 } = {}) {
  const ref = useRef(null)
  const frameRef = useRef(null)
  const [style, setStyle] = useState({ transform: 'translate(0px, 0px)', transition: '' })

  const onMouseMove = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      setStyle({
        transform: `translate(${dx}px, ${dy}px)`,
        transition: 'transform 100ms linear',
      })
    })
  }, [strength])

  const onMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    setStyle({ transform: 'translate(0px, 0px)', transition: 'transform 400ms var(--ease, cubic-bezier(0.22, 1, 0.36, 1))' })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [onMouseMove, onMouseLeave])

  return { ref, style }
}
