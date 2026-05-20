import FeaturedProject from '../components/FeaturedProject'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'
import ContactCTA from '../components/ContactCTA'

export default function WorksPage({ onContact }) {
  return (
    <div className="page-view" key="works">
      <section className="about-hero">
        <div>
          <div className="eyebrow">Our works</div>
          <h1 style={{ marginTop: '24px' }}>
            A legacy
            <br />
            <span className="accent">of excellence.</span>
          </h1>
        </div>
        <div className="lede">
          Projects that define ABI's footprint in the Philippines — headquarters fit-outs, BPO
          facilities, hospitals, hospitality, and retail.
        </div>
      </section>
      <FeaturedProject />
      <Projects />
      <Gallery />
      <ContactCTA onContact={onContact} onProjects={() => null} />
    </div>
  )
}
