import ParallaxImage from './ParallaxImage'

export default function ParallaxBand({ src, alt, eyebrow, headline }) {
  return (
    <section className="parallax-band">
      <ParallaxImage src={src} alt={alt} height="100%" speed={0.45} zoom={true} />
      <div className="band-tint" />
      <div className="band-content">
        <div>
          {eyebrow && (
            <div className="eyebrow dark" style={{ justifyContent: 'center' }}>
              {eyebrow}
            </div>
          )}
          {/* Safe: headline is hardcoded static content from our own page compositions, never user input */}
          <h2 style={{ marginTop: '18px' }} dangerouslySetInnerHTML={{ __html: headline }} />
        </div>
      </div>
    </section>
  )
}
