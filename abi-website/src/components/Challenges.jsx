import ScrollReveal from './ScrollReveal'
import TextReveal from './TextReveal'
import { CHALLENGES } from '../data/projects'

export default function Challenges() {
  return (
    <section className="challenges-v2">
      <div className="challenges-v2-rail">
        <span>02 · 5 / 08</span>
        <span className="line" />
        <span>How we differ</span>
      </div>

      <div className="challenges-v2-layout">
        <div className="challenges-v2-aside">
          <ScrollReveal variant="blur">
            <div className="hd-eyebrow">The status quo</div>
          </ScrollReveal>
          <TextReveal as="h2" className="hd-h" staggerMs={100}>
            {'Construction has\n'}
            {'three failure modes.\n'}
            <span className="ital">ABI removes all three.</span>
          </TextReveal>
          <ScrollReveal delay={300}>
            <p className="hd-meta">
              Built into how we plan, build, and report — not bolted on as marketing claims.
            </p>
          </ScrollReveal>
        </div>

        <div className="challenges-v2-list">
          {CHALLENGES.map((c, i) => (
            <ScrollReveal key={c.num} delay={i * 100} variant="right">
              <div className="challenge-row">
                <div className="cr-num">{c.num}</div>
                <div className="cr-problem">
                  <div className="cr-problem-h">{c.problem}</div>
                  <div className="cr-problem-b">{c.problemBody}</div>
                </div>
                <div className="cr-arrow" aria-hidden="true">
                  <span className="cr-arrow-line" />
                </div>
                <div className="cr-answer">
                  <div className="cr-answer-h">{c.answer}</div>
                  <div className="cr-answer-b">
                    <span className="dot" />
                    {c.proof}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
