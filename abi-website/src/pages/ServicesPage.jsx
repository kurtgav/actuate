import Services from '../components/Services'
import Process from '../components/Process'
import ContactCTA from '../components/ContactCTA'

export default function ServicesPage({ onContact, onNav }) {
  return (
    <div className="page-view" key="services">
      <section className="about-hero">
        <div>
          <div className="eyebrow">Services</div>
          <h1 style={{ marginTop: '24px' }}>
            From concept to
            <br />
            <span className="accent">completion.</span>
          </h1>
        </div>
        <div className="lede">
          Six disciplines under one accountable team — covering Civil, Structural, MEPF, fit-out,
          joinery, smart-building integration, and pre-construction advisory.
        </div>
      </section>
      <Services onContact={onContact} onNav={onNav} />
      <Process />
      <ContactCTA onContact={onContact} onProjects={() => null} />
    </div>
  )
}
