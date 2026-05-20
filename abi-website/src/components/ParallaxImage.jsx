import { useRef, useState, useEffect } from 'react'

export default function ParallaxImage({ src, alt, height = '80vh', speed = 0.22, zoom = true, className = '', children }) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    let frame = null
    const update = () => {
      frame = null
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height / 2
      const p = (center - vh / 2) / ((vh + rect.height) / 2)
      setProgress(Math.max(-1.2, Math.min(1.2, p)))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setRevealed(true)),
      { threshold: 0.1 }
    )
    if (ref.current) io.observe(ref.current)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      io.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const translateY = progress * 60 * speed * 5
  const scale = zoom ? 1.0 + (0.5 - Math.abs(progress) * 0.5) * 0.18 : 1

  return (
    <div ref={ref}
         className={`parallax-window ${revealed ? 'revealed' : ''} ${className}`}
         style={{ height }}>
      <div className="parallax-image"
           style={{
             backgroundImage: `url(${src})`,
             transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
           }}
           aria-label={alt} />
      {children}
    </div>
  )
}
