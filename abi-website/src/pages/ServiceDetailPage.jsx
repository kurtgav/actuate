/* ServiceDetail.jsx — individual service category pages */

import ScrollReveal from '../components/ScrollReveal'
import ParallaxImage from '../components/ParallaxImage'
import ParallaxBand from '../components/ParallaxBand'
import ScaleOnScroll from '../components/ScaleOnScroll'
import ContactCTA from '../components/ContactCTA'
import { SERVICE_NAV } from '../data/services'

const SERVICE_DATA = {
  'structural-civil': {
    num: '01', tag: 'STRUCTURAL',
    title: 'Structural &\nCivil Works',
    lede: "Foundations, framing, and code-compliant construction at scale — backed by Triple-A PCAB credentials and the discipline of a firm that's delivered 38+ commercial projects since 2010.",
    img: '/img/scroll-1.jpg',
    bandImg: '/img/MPH-IMG_4985.jpg',
    capabilities: [
      { k: 'Foundations',           v: 'Mat · pile · raft systems' },
      { k: 'Framing',               v: 'Concrete & steel structures' },
      { k: 'MEPF',                  v: 'In-house mechanical, electrical, plumbing, fire' },
      { k: 'Compliance',            v: 'NSCP · ASEP · IBC standards' },
      { k: 'Heavy civil',           v: 'Site prep · drainage · concrete' },
      { k: 'Triple-A',              v: 'PCAB certified · highest tier' },
    ],
    process: [
      { n: '01', t: 'Site & feasibility', b: 'Survey, geotechnical analysis, regulatory mapping.' },
      { n: '02', t: 'Structural design',  b: 'Architectural collaboration, engineering, costing.' },
      { n: '03', t: 'Construction',       b: 'Sequenced trades, weekly progress, real-time variance reporting.' },
      { n: '04', t: 'Handover',           b: 'Commissioning, documentation, warranty.' },
    ],
    related: ['fit-out', 'joineries', 'consulting'],
  },
  'fit-out': {
    num: '02', tag: 'FIT-OUT',
    title: 'Office Fit-Out:\nDesign & Build',
    lede: "Workspace transformations from architectural concept to keys-in-hand — with MEPF engineering, joinery, and PropTech integrated end-to-end by one accountable team.",
    img: '/img/service-1.jpg',
    bandImg: '/img/MPH-IMG_4999.jpg',
    capabilities: [
      { k: 'Design',                v: 'Architectural + interior + workplace strategy' },
      { k: 'Build',                 v: 'Single-contractor turnkey delivery' },
      { k: 'MEPF',                  v: 'Mechanical · electrical · plumbing · fire' },
      { k: 'Joinery',               v: 'In-house millwork & casework' },
      { k: 'PropTech',              v: 'Smart-building infrastructure built in' },
      { k: 'Reporting',             v: 'Weekly progress · variance · photo logs' },
    ],
    process: [
      { n: '01', t: 'Discover',  b: 'Workplace strategy, site survey, brief pressure-test.' },
      { n: '02', t: 'Design',    b: 'Architecture + MEPF + joinery worked through together.' },
      { n: '03', t: 'Deliver',   b: 'Skilled trades, weekly checkpoints, transparent reporting.' },
      { n: '04', t: 'Operate',   b: 'PropTech-enabled handover. Building runs efficiently from day one.' },
    ],
    related: ['joineries', 'proptech', 'smart-spaces'],
  },
  'proptech': {
    num: '03', tag: 'PROPTECH',
    title: 'Property\nTech',
    lede: "IoT, AI, building automation, and data analytics — for owners ready to operate with intelligence. Smart-building infrastructure designed in, not bolted on.",
    img: '/img/service-3.jpg',
    bandImg: '/img/MPH-IMG_3281.jpg',
    capabilities: [
      { k: 'BMS',                   v: 'Building management & automation' },
      { k: 'IoT sensors',           v: 'Occupancy · environmental · energy' },
      { k: 'Access control',        v: 'Cards · biometrics · mobile credentials' },
      { k: 'AV & cabling',          v: 'Structured · audiovisual · CCTV' },
      { k: 'Analytics',             v: 'Dashboards · utilization · sustainability' },
      { k: 'Integration',           v: 'Vendor-neutral · API-first' },
    ],
    process: [
      { n: '01', t: 'Audit',        b: 'Operational goals, building systems, data sources.' },
      { n: '02', t: 'Architect',    b: 'Vendor-neutral system design + integration plan.' },
      { n: '03', t: 'Install',      b: 'Cabling, devices, gateways — minimal disruption.' },
      { n: '04', t: 'Operate',      b: 'Dashboards live + ongoing optimization.' },
    ],
    related: ['fit-out', 'smart-spaces', 'consulting'],
  },
  'joineries': {
    num: '04', tag: 'JOINERY',
    title: 'Joineries',
    lede: "In-house precision millwork. Custom architectural detail, casework, and furniture — built on state-of-the-art machinery by skilled joiners in our QC workshop.",
    img: '/img/service-4.jpg',
    bandImg: '/img/MPH-IMG_4980.jpg',
    capabilities: [
      { k: 'Architectural',         v: 'Wall paneling · feature walls · ceilings' },
      { k: 'Casework',              v: 'Reception · pantry · storage' },
      { k: 'Furniture',             v: 'Custom desks · meeting tables · benches' },
      { k: 'Finishes',              v: 'Veneer · solid · laminate · metal' },
      { k: 'Prototyping',           v: '3D + small-scale prototypes pre-approval' },
      { k: 'Workshop',              v: 'QC facility · 1,200 m² · CNC + spray booth' },
    ],
    process: [
      { n: '01', t: 'Design intent',b: 'Material, finish, profile — agreed on shop drawings.' },
      { n: '02', t: 'Prototype',    b: 'Small-scale sample for sign-off before production.' },
      { n: '03', t: 'Workshop',     b: 'CNC machining, hand-finishing, controlled environment.' },
      { n: '04', t: 'Install',      b: 'On-site fit, adjust, hand over with care manual.' },
    ],
    related: ['fit-out', 'structural-civil', 'consulting'],
  },
  'smart-spaces': {
    num: '05', tag: 'OPEX',
    title: 'ABI Smart\nSpaces',
    lede: "Move-in-ready, technology-enabled workspaces on an operating-expense model. Skip CAPEX, scale on demand, and let ABI run the building.",
    img: '/img/smart-spaces-banner-small-portrait.jpg',
    bandImg: '/img/108-Amari-Creatives-IMG_5240.jpg',
    capabilities: [
      { k: 'OPEX model',            v: 'No upfront CAPEX · monthly subscription' },
      { k: 'Turnkey',               v: 'Furnished · cabled · connected on day one' },
      { k: 'Flexible',              v: 'Scale up or down on 90 days notice' },
      { k: 'Smart-building',        v: 'Sensors · access · BMS pre-integrated' },
      { k: 'Operated',              v: 'ABI handles facilities, IT, security' },
      { k: 'Locations',             v: 'BGC · Makati · Ortigas' },
    ],
    process: [
      { n: '01', t: 'Requirements', b: 'Headcount, sector, growth, location preferences.' },
      { n: '02', t: 'Match',        b: 'Floor allocation + customization plan.' },
      { n: '03', t: 'Activate',     b: '4-week setup, including PropTech provisioning.' },
      { n: '04', t: 'Operate',      b: 'Monthly OPEX. ABI runs facilities — you run your business.' },
    ],
    related: ['proptech', 'fit-out', 'consulting'],
  },
  'consulting': {
    num: '06', tag: 'ADVISORY',
    title: 'Consulting',
    lede: "Owner-side advisory, pre-construction planning, and value engineering. We help you de-risk before the first nail — and after, when needed.",
    img: '/img/MPH-IMG_4985.jpg',
    bandImg: '/img/MPH-IMG_5060.jpg',
    capabilities: [
      { k: 'Feasibility',           v: 'Site, market, financial pressure-testing' },
      { k: 'Owner advisory',        v: "Owner-rep on contractor's project" },
      { k: 'Value engineering',     v: 'Scope · spec · cost optimization' },
      { k: 'Cost estimating',       v: 'Detailed line-by-line budgeting' },
      { k: 'Procurement',           v: 'Tender management, vendor selection' },
      { k: 'Compliance',            v: 'Permits, codes, regulatory navigation' },
    ],
    process: [
      { n: '01', t: 'Brief',        b: 'Goals, constraints, what success looks like.' },
      { n: '02', t: 'Assess',       b: 'Site, scope, market, regulatory, financial.' },
      { n: '03', t: 'Recommend',    b: 'Written report, options, risks, costs.' },
      { n: '04', t: 'Support',      b: 'Ongoing advisory through delivery if you want it.' },
    ],
    related: ['structural-civil', 'fit-out', 'proptech'],
  },
};

export default function ServiceDetailPage({ slug, onNav, onContact }) {
  const s = SERVICE_DATA[slug] || SERVICE_DATA['structural-civil'];

  return (
    <div className="page-view" key={`service-${slug}`}>
      {/* HERO */}
      <section className="svc-hero">
        <ParallaxImage src={s.img} alt={s.title} height="100%" speed={0.35} zoom={true} className="svc-hero-bg" />
        <div className="svc-hero-tint" />

        <div className="svc-hero-rail">
          <a onClick={() => onNav('services')} className="back-link">← All services</a>
          <span className="line"></span>
          <span>{s.num} / 06 · {s.tag}</span>
        </div>

        <div className="svc-hero-content">
          <div className="hd-eyebrow on-img">Service</div>
          <h1 className="svc-hero-h" style={{whiteSpace:'pre-line'}}>{s.title}<span className="period">.</span></h1>
          <p className="svc-hero-lede">{s.lede}</p>
          <div className="svc-hero-actions">
            <button className="btn primary" onClick={onContact}>
              Start a project <span className="arrow"></span>
            </button>
            <a className="btn on-dark secondary" onClick={() => onNav('works')} style={{cursor:'pointer'}}>
              See related projects
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE NAV PILLS */}
      <section className="svc-pills">
        <div className="svc-pills-rail">
          <span>Services index</span>
          <span className="line"></span>
        </div>
        <div className="svc-pills-list">
          {SERVICE_NAV.map(item => (
            <button
              key={item.slug}
              className={`svc-pill ${item.slug === slug ? 'active' : ''}`}
              onClick={() => onNav(`service:${item.slug}`)}>
              {item.label}
            </button>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="svc-caps">
        <div className="svc-caps-rail">
          <span>02 / 05</span>
          <span className="line"></span>
          <span>Capabilities</span>
        </div>
        <div className="svc-caps-layout">
          <div className="svc-caps-head">
            <div className="hd-eyebrow">What we cover</div>
            <h2 className="hd-h">
              The full discipline.<br/>
              <span className="ital">Nothing outsourced.</span>
            </h2>
            <p className="hd-meta">
              Every capability listed here is delivered by ABI's own engineers, joiners, and project managers — not subcontracted.
            </p>
          </div>
          <div className="svc-caps-list">
            {s.capabilities.map((c, i) => (
              <ScrollReveal key={c.k} delay={i * 50}>
                <div className="cap-row">
                  <span className="cap-k">{c.k}</span>
                  <span className="cap-v">{c.v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BAND */}
      <section className="parallax-band">
        <ParallaxImage src={s.bandImg} alt={`${s.title} in the field`} height="100%" speed={0.4} zoom={true} />
        <div className="band-tint" />
        <div className="band-content">
          <div className="eyebrow dark" style={{justifyContent:'center'}}>{s.tag}</div>
          <h2 style={{marginTop:'14px'}}>{s.title.split('\n').join(' ')}<span style={{color:'var(--green)'}}>.</span></h2>
        </div>
      </section>

      {/* PROCESS */}
      <section className="svc-process">
        <div className="svc-process-rail">
          <span>04 / 05</span>
          <span className="line"></span>
          <span>How we work</span>
        </div>
        <div className="svc-process-head">
          <div className="hd-eyebrow">The four-step</div>
          <h2 className="hd-h">
            From brief to<br/>
            <span className="ital">handover.</span>
          </h2>
        </div>
        <div className="svc-process-grid">
          {s.process.map((p, i) => (
            <ScrollReveal key={p.n} delay={i * 80}>
              <div className="svc-step">
                <div className="svc-step-n">{p.n}</div>
                <h4>{p.t}</h4>
                <p>{p.b}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="svc-related">
        <div className="svc-related-rail">
          <span>05 / 05</span>
          <span className="line"></span>
          <span>You may also need</span>
        </div>
        <div className="svc-related-head">
          <div className="hd-eyebrow">Related</div>
          <h2 className="hd-h">
            Often paired with<br/>
            <span className="ital">{s.title.replace('\n', ' ').toLowerCase()}.</span>
          </h2>
        </div>
        <div className="svc-related-grid">
          {s.related.map((rSlug, i) => {
            const r = SERVICE_DATA[rSlug];
            return (
              <ScrollReveal key={rSlug} delay={i * 80}>
                <a className="svc-related-card" onClick={() => onNav(`service:${rSlug}`)}>
                  <div className="svc-related-img">
                    <ScaleOnScroll src={r.img} alt={r.title} aspectRatio="4/3" className="fill" />
                  </div>
                  <div className="svc-related-meta">
                    <div className="svc-related-num">{r.num} / {r.tag}</div>
                    <h4 style={{whiteSpace:'pre-line'}}>{r.title}</h4>
                    <span className="svc-related-more">View service →</span>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA onContact={onContact} onProjects={() => onNav('works')} />
    </div>
  );
}
