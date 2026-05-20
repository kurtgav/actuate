import ScrollReveal from './ScrollReveal'

export default function Hero({ onContact, onProjects }) {
  return (
    <section className="hero-v2 hero-fullbleed hero-direct-bg">
      <div className="hero-fullbleed-rail">
        <span className="rail-num">01 / 08</span>
        <span className="rail-line" />
        <span className="rail-lbl">Built with purpose</span>
      </div>

      <div className="hero-fullbleed-content">
        <ScrollReveal variant="blur" threshold={0.05}>
          <div className="hero-v2-eyebrow on-img">
            <span className="dot pulse-dot" />
            ABI · Actuate Builders Inc. · Est. 2010
          </div>
        </ScrollReveal>
        <ScrollReveal threshold={0.05} delay={100}>
          <h1 className="hero-v2-h1 on-img">
            Your trusted
            <br />
            construction firm
            <br />
            <span className="ital">in the Philippines.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal threshold={0.05} delay={200}>
          <p className="hero-v2-lede on-img">
            Built with purpose. Earning trust. Leaving legacy.
            <br />
            A trusted Philippine construction firm delivering world-class offices, fit-outs, and
            PropTech-enabled spaces since 2010.
          </p>
        </ScrollReveal>
        <ScrollReveal threshold={0.05} delay={300}>
          <div className="hero-v2-actions">
            <button className="btn primary btn-magnetic" onClick={onContact}>
              Contact Us <span className="arrow" />
            </button>
            <button className="btn on-dark secondary" onClick={onProjects}>
              See Projects
            </button>
          </div>
        </ScrollReveal>
      </div>

      <div className="hero-fullbleed-meta">
        <div>
          <span className="k">PCAB</span>
          <span className="v">Triple-A</span>
        </div>
        <div>
          <span className="k">Delivered</span>
          <span className="v">38+ projects</span>
        </div>
        <div>
          <span className="k">Footprint</span>
          <span className="v">142,000 m²</span>
        </div>
        <div>
          <span className="k">On-time</span>
          <span className="v">96%</span>
        </div>
      </div>

    </section>
  )
}
