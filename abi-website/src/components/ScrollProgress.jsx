import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const { progress } = useScrollProgress()
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress * 100}%`,
        height: '2px',
        background: 'var(--green, #145F40)',
        zIndex: 100,
        transformOrigin: 'left',
        pointerEvents: 'none',
        transition: 'width 60ms linear',
      }}
    />
  )
}
