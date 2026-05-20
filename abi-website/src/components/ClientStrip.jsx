import { CLIENT_LOGOS } from '../data/clients'

export default function ClientStrip() {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS]
  return (
    <section className="client-strip-v2">
      <div className="client-strip-v2-lbl">
        <span className="dot" />
        <span>Trusted by 29+ enterprise clients</span>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {loop.map((c, i) => (
            <img key={i} src={c.src} alt={c.name} title={c.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
