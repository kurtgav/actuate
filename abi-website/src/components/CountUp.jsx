import { useCountUp } from '../hooks/useCountUp'

export default function CountUp({ end, duration = 1800, suffix = '', className = '' }) {
  const { ref, display } = useCountUp({ end, duration, suffix })
  return (
    <span ref={ref} className={className} aria-label={`${end}${suffix}`}>
      {display}
    </span>
  )
}
