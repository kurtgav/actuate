import { useState, useRef } from 'react'
import { SERVICES_MENU } from '../data/services'

const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services', mega: true },
  { label: 'Our Works', href: 'works' },
  { label: 'Blog', href: 'blog' },
  { label: 'Careers', href: 'careers' },
]

export default function Nav({ active, onNav, onContact }) {
  const [openMega, setOpenMega] = useState(false)
  const timer = useRef(null)

  const enterMega = () => {
    clearTimeout(timer.current)
    setOpenMega(true)
  }
  const leaveMega = () => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpenMega(false), 140)
  }

  return (
    <header className="nav">
      <a className="nav-logo" onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>
        <img
          src="/img/Abi-Horizontal-Stack-Full-Color-RGB-1064px@72ppi.png"
          alt="ABI · Actuate Builders"
        />
      </a>
      <nav className="nav-links">
        {NAV_LINKS.map(l =>
          l.mega ? (
            <a
              key={l.href}
              className={`nav-link has-mega ${active === l.href ? 'active' : ''} ${openMega ? 'open' : ''}`}
              onMouseEnter={enterMega}
              onMouseLeave={leaveMega}
              onClick={() => onNav(l.href)}
              style={{ cursor: 'pointer' }}
            >
              {l.label}
              <span className="chev" />
            </a>
          ) : (
            <a
              key={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
              onClick={() => onNav(l.href)}
              style={{ cursor: 'pointer' }}
            >
              {l.label}
            </a>
          )
        )}
      </nav>
      <a className="btn primary nav-cta" onClick={onContact} style={{ cursor: 'pointer' }}>
        Contact Us<span className="arrow" />
      </a>

      <div
        className={`mega ${openMega ? 'open' : ''}`}
        onMouseEnter={enterMega}
        onMouseLeave={leaveMega}
        aria-hidden={!openMega}
      >
        <div className="mega-inner">
          <div className="mega-head">
            <div className="eyebrow accent">Services</div>
            <h4>
              Six disciplines
              <br />
              one team.
            </h4>
            <a
              className="mega-cta"
              onClick={() => {
                setOpenMega(false)
                onNav('services')
              }}
            >
              View all services
              <span className="ar" />
            </a>
          </div>
          <div className="mega-grid">
            {SERVICES_MENU.map(s => (
              <a
                key={s.num}
                className="mega-item"
                onClick={() => {
                  setOpenMega(false)
                  onNav(`service:${s.slug}`)
                }}
              >
                <div className="mega-num">{s.num}</div>
                <div className="mega-text">
                  <div className="mega-ttl">{s.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
