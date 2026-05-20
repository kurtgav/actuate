import ScrollReveal from './ScrollReveal'
import ScaleOnScroll from './ScaleOnScroll'
import TextReveal from './TextReveal'
import { GALLERY } from '../data/projects'

export default function Gallery() {
  return (
    <section className="gallery-v2">
      <div className="gallery-v2-rail">
        <span>07 / 08</span>
        <span className="line" />
        <span>In the field</span>
      </div>

      <div className="gallery-v2-head">
        <ScrollReveal variant="blur">
          <div className="hd-eyebrow">Photography</div>
        </ScrollReveal>
        <TextReveal as="h2" className="hd-h" staggerMs={100}>
          {'From the floor.\n'}
          <span className="ital">No render. No stock.</span>
        </TextReveal>
        <ScrollReveal delay={200}>
          <p className="hd-meta">
            Every surface, fixture, and seam shown here was delivered by the ABI team — photographed
            at handover, not pre-visualised.
          </p>
        </ScrollReveal>
      </div>

      <div className="gallery-v2-grid">
        {GALLERY.map((g, i) => (
          <ScrollReveal key={i} delay={i * 60} variant="scale" className={`gv2-cell gv2-${g.slot}`}>
            <figure className="gv2-figure">
              <div className="gv2-img img-hover-zoom img-hover-shine">
                <ScaleOnScroll src={g.src} alt={g.alt} aspectRatio="auto" className="fill" />
              </div>
              <figcaption className="gv2-cap">
                <span className="gv2-cap-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="gv2-cap-t">{g.meta}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>

      <div className="gallery-v2-foot">
        <a className="all-works">
          View full archive · 142 photographs<span className="ar" />
        </a>
      </div>
    </section>
  )
}
