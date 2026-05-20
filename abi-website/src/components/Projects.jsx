import ScrollReveal from './ScrollReveal'
import ScaleOnScroll from './ScaleOnScroll'
import TextReveal from './TextReveal'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  return (
    <section className="projects-v2">
      <div className="projects-v2-rail">
        <span>05 / 08</span>
        <span className="line" />
        <span>Selected works</span>
      </div>
      <div className="projects-v2-head">
        <ScrollReveal variant="blur">
          <div className="hd-eyebrow">Index</div>
        </ScrollReveal>
        <TextReveal as="h2" className="hd-h" staggerMs={100}>
          {'More from the\n'}
          <span className="ital">project archive.</span>
        </TextReveal>
      </div>
      <div className="projects-v2-grid">
        {PROJECTS.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 80}>
            <a className="project-card card-hover-lift">
              <div className="project-card-img img-hover-zoom img-hover-shine">
                <ScaleOnScroll src={p.img} alt={p.name} aspectRatio="5/4" className="fill" />
              </div>
              <div className="project-card-meta">
                <div className="meta-top">
                  <span className="num">{p.num}</span>
                  <span className="tag">{p.tag}</span>
                </div>
                <div className="project-card-name">{p.name}</div>
                <div className="meta-bottom">
                  <span>{p.gfa}</span>
                  <span className="sep">·</span>
                  <span>{p.sector}</span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
      <div className="projects-v2-foot">
        <a className="all-works">
          View all 38 projects<span className="ar" />
        </a>
      </div>
    </section>
  )
}
