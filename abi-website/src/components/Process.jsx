import { PROCESS_STEPS } from '../data/projects'

export default function Process() {
  return (
    <section className="section cloud">
      <div className="section-head">
        <div>
          <div className="eyebrow">How we build</div>
        </div>
        <div>
          <h2>
            Four phases
            <br />
            <span className="accent">end to end.</span>
          </h2>
          <p className="meta" style={{ marginTop: '24px' }}>
            From feasibility to operations. One team, one accountable partner.
          </p>
        </div>
      </div>
      <div className="process">
        {PROCESS_STEPS.map(s => (
          <div key={s.n} className="step">
            <div className="n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
