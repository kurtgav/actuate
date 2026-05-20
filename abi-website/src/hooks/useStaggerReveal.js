import { useRef, useState, useEffect } from 'react'

export function useStaggerReveal({ count, staggerMs = 80, threshold = 0.1 }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold }
    )
    if (containerRef.current) io.observe(containerRef.current)
    return () => io.disconnect()
  }, [threshold])

  // Inject stagger CSS custom properties so children can use them via class
  useEffect(() => {
    if (!containerRef.current) return
    const children = containerRef.current.children
    const len = Math.min(children.length, count)
    for (let i = 0; i < len; i++) {
      children[i].style.setProperty('--stagger-delay', `${i * staggerMs}ms`)
    }
  }, [count, staggerMs])

  return { containerRef, isVisible }
}
