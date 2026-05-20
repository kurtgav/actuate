import CountUp from './CountUp'
import ScrollReveal from './ScrollReveal'

export default function StatsRow() {
  return (
    <section className="stats-v2">
      <div className="stats-v2-rail">
        <span>02 / 08</span>
        <span className="line" />
        <span>Track record</span>
      </div>
      <div className="stats-v2-grid">
        <ScrollReveal variant="left">
          <div className="stats-v2-lead">
            <div className="stats-v2-lead-num counter-reveal in">
              <CountUp end={96} duration={2000} /><span className="suf">%</span>
            </div>
            <div className="stats-v2-lead-lbl">
              On-time delivery rate.
              <br />
              Across the last 24 projects.
            </div>
          </div>
        </ScrollReveal>
        <div className="stats-v2-side">
          <ScrollReveal delay={100}>
            <div className="stats-v2-item">
              <div className="num">
                <CountUp end={38} duration={1800} /><span className="suf">+</span>
              </div>
              <div className="lbl">Projects delivered since 2010</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="stats-v2-item">
              <div className="num">
                <CountUp end={142} duration={2000} /><span className="suf">k</span>
              </div>
              <div className="lbl">Square meters built</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="stats-v2-item">
              <div className="num">
                <CountUp end={29} duration={1600} />
              </div>
              <div className="lbl">Enterprise clients including Ayala, Visa, Amazon</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
