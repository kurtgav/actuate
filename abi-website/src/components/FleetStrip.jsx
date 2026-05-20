import ScrollReveal from './ScrollReveal'
import ScaleOnScroll from './ScaleOnScroll'
import { BOT_CARS } from '../data/projects'

export default function FleetStrip() {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Our fleet</div>
        </div>
        <div>
          <h2>
            On the road,
            <br />
            <span className="accent">on every site.</span>
          </h2>
          <p className="meta" style={{ marginTop: '24px' }}>
            From project mobilization to material handling, our vehicles carry the build to every
            site we work.
          </p>
        </div>
      </div>
      <div className="fleet-grid">
        {BOT_CARS.map((src, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <ScaleOnScroll src={src} alt={`ABI fleet vehicle ${i + 1}`} aspectRatio="4/3" className="fill" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
