import Hero from '../components/Hero'
import ClientStrip from '../components/ClientStrip'
import StatsRow from '../components/StatsRow'
import Challenges from '../components/Challenges'
import Services from '../components/Services'
import FeaturedProject from '../components/FeaturedProject'
import Projects from '../components/Projects'
import BigStatement from '../components/BigStatement'
import Process from '../components/Process'
import Gallery from '../components/Gallery'
import FleetStrip from '../components/FleetStrip'
import ContactCTA from '../components/ContactCTA'

export default function HomePage({ onNav, onContact }) {
  return (
    <div className="page-view" key="home">
      <Hero onContact={onContact} onProjects={() => onNav('works')} />
      <ClientStrip />
      <StatsRow />
      <Challenges />
      <Services onContact={onContact} onNav={onNav} />
      <FeaturedProject />
      <Projects />
      <BigStatement
        index="06 / 08"
        kicker="Brand strategy · Brewing Brands"
        headline={`Built like an F1 team.<br/>Goal-driven, united, precise,<br/><span class="accent">timeless.</span>`}
        attribution="— ABI brand strategy, 2024"
      />
      <Process />
      <Gallery />
      <FleetStrip />
      <ContactCTA onContact={onContact} onProjects={() => onNav('works')} />
    </div>
  )
}
