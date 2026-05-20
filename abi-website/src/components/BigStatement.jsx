import ScrollReveal from './ScrollReveal'

export default function BigStatement({ index = '02', kicker, headline, attribution, side = 'left' }) {
  return (
    <section className={`big-statement big-statement-${side}`}>
      <div className="big-statement-rail">
        <span>{index}</span>
      </div>
      <ScrollReveal variant={side === 'left' ? 'left' : 'right'}>
        <div className="big-statement-body">
          {kicker && <div className="big-statement-kicker">{kicker}</div>}
          {/* headline contains only static markup from our own data, not user input */}
          <h2 dangerouslySetInnerHTML={{ __html: headline }} />
          {attribution && <div className="big-statement-attr">{attribution}</div>}
        </div>
      </ScrollReveal>
    </section>
  )
}
