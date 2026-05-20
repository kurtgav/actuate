import ScrollReveal from './ScrollReveal'
import TextReveal from './TextReveal'

export default function ContactCTA({ onContact, onProjects }) {
  return (
    <section className="cta-min">
      <div className="cta-min-rail">
        <span className="cta-min-rail-l">Get started</span>
        <span className="cta-min-rail-r">08 / 08</span>
      </div>

      <div className="cta-min-stage">
        <div className="cta-min-text">
          <TextReveal as="h2" className="cta-min-h" staggerMs={120}>
            {"Let's bring your\n"}
            {'project to life.'}
          </TextReveal>
          <ScrollReveal delay={200}>
            <p className="cta-min-sub">
              Tell us about the scope, site, and timeline. A senior project lead will get back within one business day — no sales pitch.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="right" delay={100}>
          <div className="cta-min-side">
            <div className="cta-min-actions">
              <a className="cta-min-primary btn-magnetic" onClick={onContact}>
                Start a project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </a>
              <a className="cta-min-secondary" onClick={onProjects}>See projects</a>
            </div>

            <div className="cta-min-meta">
              <div className="cta-min-meta-row">
                <span className="k">Email</span>
                <a href="mailto:requestforquotation@abi-ph.com" className="v">requestforquotation@abi-ph.com</a>
              </div>
              <div className="cta-min-meta-row">
                <span className="k">Office</span>
                <span className="v">BGC, Taguig</span>
              </div>
              <div className="cta-min-meta-row">
                <span className="k">Response</span>
                <span className="v">Within 1 business day</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
