import ScaleOnScroll from './ScaleOnScroll'
import ScrollReveal from './ScrollReveal'

export default function FeaturedProject() {
  return (
    <section className="fp-min">
      <div className="fp-min-rail">
        <span className="fp-min-rail-l">Featured project</span>
        <span className="fp-min-rail-c">011</span>
        <span className="fp-min-rail-r">2024</span>
      </div>

      <div className="fp-min-stage">
        <ScrollReveal variant="scale" className="fp-min-image">
          <div className="img-hover-zoom">
            <ScaleOnScroll
              src="/img/ETIQA-FI-v4.jpg"
              alt="Etiqa Insurance HQ"
              aspectRatio="auto"
              className="fp-min-img-inner"
            />
          </div>
        </ScrollReveal>

        <div className="fp-min-content">
          <ScrollReveal delay={100}>
            <div className="fp-min-tags">
              <span className="fp-min-tag">Insurance</span>
              <span className="fp-min-tag">Fit-out</span>
              <span className="fp-min-tag fp-min-tag-mute">BGC, Taguig</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h2 className="fp-min-h">Etiqa Insurance HQ</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="fp-min-sub">Regional headquarters delivered in fourteen weeks.</p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="fp-min-body">
              A regional HQ for one of Southeast Asia's leading insurance providers — built with
              architectural ambition, in-house MEPF, joinery, and PropTech integrated end-to-end.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} variant="blur">
            <div className="fp-min-quote">
              <p>
                "ABI delivered on a brief that other contractors said was impossible to ship on time."
              </p>
              <span className="fp-min-quote-attr">Project Director, Etiqa</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="fp-min-specs">
              <div className="fp-min-spec">
                <span className="k">GFA</span>
                <span className="v">2,840 m²</span>
              </div>
              <div className="fp-min-spec">
                <span className="k">Duration</span>
                <span className="v">14 weeks</span>
              </div>
              <div className="fp-min-spec">
                <span className="k">Sector</span>
                <span className="v">Insurance</span>
              </div>
              <div className="fp-min-spec">
                <span className="k">Scope</span>
                <span className="v">Turnkey</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="fp-min-actions">
              <a className="fp-min-cta btn-magnetic">
                View case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
              <a className="fp-min-link">All projects</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
