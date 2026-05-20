import ScrollReveal from './ScrollReveal'
import ScaleOnScroll from './ScaleOnScroll'
import TextReveal from './TextReveal'
import { SERVICES } from '../data/services'

export default function Services({ onContact, onNav }) {
  const featured = SERVICES.find(s => s.featured)
  const rest = SERVICES.filter(s => !s.featured)
  const goService = (slug) => onNav ? onNav(`service:${slug}`) : onContact && onContact()

  return (
    <section className="services-v2">
      <div className="services-v2-rail">
        <span>03 / 08</span>
        <span className="line" />
        <span>Capabilities</span>
      </div>
      <div className="services-v2-head">
        <ScrollReveal variant="blur">
          <div className="hd-eyebrow">Our Services</div>
        </ScrollReveal>
        <TextReveal as="h2" className="hd-h" staggerMs={100}>
          {'Six disciplines.\n'}
          <span className="ital">One accountable team.</span>
        </TextReveal>
        <ScrollReveal delay={200}>
          <p className="hd-meta">
            From concept to completion — civil &amp; structural, MEPF engineering, joinery, fit-out,
            PropTech integration, and pre-construction advisory.
          </p>
        </ScrollReveal>
      </div>

      <div className="bento">
        <ScrollReveal variant="scale" className="bento-featured">
          <div className="bento-card bento-card-lg card-hover-lift" onClick={() => goService(featured.slug)}>
            <div className="bento-img img-hover-zoom img-hover-shine">
              <ScaleOnScroll src={featured.img} alt={featured.title} aspectRatio="auto" className="fill" />
            </div>
            <div className="bento-body">
              <div className="bento-num">
                {featured.num} / {featured.tag}
              </div>
              <h3 style={{ whiteSpace: 'pre-line' }}>{featured.title}</h3>
              <p>{featured.desc}</p>
              <span className="more">Read more</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          {rest.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 80}>
              <div className="bento-card bento-card-sm card-hover-lift" onClick={() => goService(s.slug)}>
                <div className="bento-img img-hover-zoom">
                  <ScaleOnScroll src={s.img} alt={s.title} aspectRatio="3/2" className="fill" />
                </div>
                <div className="bento-body">
                  <div className="bento-num">
                    {s.num} / {s.tag}
                  </div>
                  <h3>{s.title}</h3>
                  <span className="more">Read more</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
