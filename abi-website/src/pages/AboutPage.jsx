import ParallaxBand from '../components/ParallaxBand'
import StatsRow from '../components/StatsRow'
import ContactCTA from '../components/ContactCTA'

export default function AboutPage({ onContact }) {
  return (
    <div className="page-view" key="about">
      <section className="about-hero">
        <div>
          <div className="eyebrow">About ABI</div>
          <h1 style={{ marginTop: '24px' }}>
            We are a team united by
            <br />
            a big <span className="accent">mission.</span>
          </h1>
        </div>
        <div className="lede">
          Founded in 2010, Actuate Builders Inc. (ABI) began as a specialist in interior fit-out
          works for BPO companies — quickly earning a reputation for quality, timeliness, and
          cost-effectiveness. By 2012, ABI expanded into a full-service general contractor,
          recognized as a Triple-A company by the Philippine Contractors Association Board (PCAB).
        </div>
      </section>
      <ParallaxBand
        src="/img/MPH-IMG_4980.jpg"
        alt="ABI craftsmanship"
        eyebrow="Brand strategy"
        headline="An F1-team mindset<br/><span class='accent'>applied to building.</span>"
      />
      <section className="section cloud">
        <div className="section-head">
          <div className="eyebrow">Values</div>
          <h2>
            Bold, agile,
            <br />
            <span className="accent">precise.</span>
          </h2>
          <p className="meta">
            Our brand and culture were shaped by an F1-team mindset. Goal-driven, united, competent,
            dynamic, top-notch, timeless.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <div className="num">VALUE / 01</div>
            <h3>Boldness</h3>
            <p>
              We commit to the project, the team, and the standard — even when the easy path runs
              through compromise.
            </p>
          </div>
          <div className="service">
            <div className="num">VALUE / 02</div>
            <h3>Innovation</h3>
            <p>
              From PropTech to materials engineering, we choose the better way over the familiar one.
            </p>
          </div>
          <div className="service">
            <div className="num">VALUE / 03</div>
            <h3>Agility</h3>
            <p>Construction has a thousand moving parts. We adjust without losing the line.</p>
          </div>
        </div>
      </section>
      <StatsRow />
      <ContactCTA onContact={onContact} onProjects={() => null} />
    </div>
  )
}
