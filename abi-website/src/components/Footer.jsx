function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 7h2V4h-2a3 3 0 0 0-3 3v3H9v3h2v7h3v-7h2.5l.5-3H14V7.5c0-.3.2-.5.5-.5z" />
    </svg>
  )
}
function LiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M8 10v8M8 7v.01M12 18v-5a3 3 0 0 1 6 0v5M12 13v5" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="8" cy="7" r="1" fill="white" />
      <rect x="7" y="10" width="2" height="8" fill="white" />
    </svg>
  )
}
function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  )
}

export default function Footer({ onNav, onContact }) {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-bg" />
      <div className="footer-v2-tint" />

      <div className="footer-v2-inner">
        <div className="footer-v2-grid">
          <div className="footer-v2-brand">
            <img
              className="footer-v2-logo"
              src="/img/Abi-Horizontal-Stack-Full-Color-RGB-1064px@72ppi.png"
              alt="ABI · Actuate Builders Inc."
            />
            <p className="footer-v2-tag">
              Your partner in building
              <br />a world-class Philippines.
            </p>
          </div>

          <div className="footer-v2-col">
            <h5>Services</h5>
            <ul>
              <li><a>Structural and Civil Works</a></li>
              <li><a>Office Fit Out: Design and Build</a></li>
              <li><a>Property Tech</a></li>
              <li><a>Joineries</a></li>
            </ul>
          </div>

          <div className="footer-v2-col">
            <h5>Company</h5>
            <ul>
              <li><a onClick={() => onNav('about')} style={{ cursor: 'pointer' }}>About ABI</a></li>
              <li><a onClick={() => onNav('works')} style={{ cursor: 'pointer' }}>Our Works</a></li>
              <li><a onClick={() => onNav('careers')} style={{ cursor: 'pointer' }}>Careers</a></li>
            </ul>
          </div>

          <div className="footer-v2-contact">
            <h5>Get in Touch</h5>
            <p className="footer-v2-addr">
              C2 Building, 7th Ave Corner 28th St,
              <br />
              Bonifacio High Street
            </p>
            <div className="footer-v2-emails">
              <span className="footer-v2-email-label">E-Mail:</span>
              <a href="mailto:requestforquotation@abi-ph.com">requestforquotation@abi-ph.com</a>
              <a href="mailto:suppliers@abi-ph.com">suppliers@abi-ph.com</a>
              <a href="mailto:careers@abi-ph.com">careers@abi-ph.com</a>
            </div>
            <div className="footer-v2-socials">
              <a href="https://www.facebook.com/p/Actuate-Builders-Inc-61561479088183/" aria-label="Facebook" className="social-fb"><FbIcon /></a>
              <a href="https://www.linkedin.com/company/actuatebuildersinc/" aria-label="LinkedIn" className="social-li"><LiIcon /></a>
              <a href="https://www.instagram.com/lifeatabiph/" aria-label="Instagram" className="social-ig"><IgIcon /></a>
            </div>
            <button className="btn primary footer-v2-cta" onClick={onContact}>
              Contact Us <span className="arrow" />
            </button>
          </div>
        </div>

        <div className="footer-v2-bottom">
          <span>Copyright &copy; 2026 Actuate Builders Inc.</span>
        </div>
      </div>
    </footer>
  )
}
