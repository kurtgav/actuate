/* Careers.jsx — careers page with values, open roles, life at ABI */

import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import ParallaxImage from '../components/ParallaxImage'
import ScaleOnScroll from '../components/ScaleOnScroll'
import ContactCTA from '../components/ContactCTA'

const OPEN_ROLES = [
  { dept: 'ENGINEERING',  title: 'Project Engineer · MEPF', type: 'Full-time', loc: 'BGC, Taguig',    level: 'Senior', urgent: false },
  { dept: 'ENGINEERING',  title: 'Site Engineer',           type: 'Full-time', loc: 'Multiple sites', level: 'Mid',    urgent: true  },
  { dept: 'ENGINEERING',  title: 'Structural Engineer',     type: 'Full-time', loc: 'BGC, Taguig',    level: 'Senior', urgent: false },
  { dept: 'CONSTRUCTION', title: 'Project Manager',         type: 'Full-time', loc: 'Makati',         level: 'Senior', urgent: true  },
  { dept: 'CONSTRUCTION', title: 'Construction Foreman',    type: 'Full-time', loc: 'Multiple sites', level: 'Mid',    urgent: false },
  { dept: 'CONSTRUCTION', title: 'Quality Control Officer', type: 'Full-time', loc: 'BGC, Taguig',    level: 'Mid',    urgent: false },
  { dept: 'DESIGN',       title: 'Interior Designer',       type: 'Full-time', loc: 'BGC, Taguig',    level: 'Mid',    urgent: false },
  { dept: 'DESIGN',       title: 'CAD Drafter',             type: 'Full-time', loc: 'BGC, Taguig',    level: 'Junior', urgent: false },
  { dept: 'OPERATIONS',   title: 'Procurement Officer',     type: 'Full-time', loc: 'BGC, Taguig',    level: 'Mid',    urgent: false },
  { dept: 'OPERATIONS',   title: 'Safety Officer',          type: 'Full-time', loc: 'Multiple sites', level: 'Mid',    urgent: true  },
  { dept: 'PROPTECH',     title: 'Building Automation Engineer', type: 'Full-time', loc: 'BGC, Taguig', level: 'Senior', urgent: false },
  { dept: 'JOINERY',      title: 'Master Joiner',           type: 'Full-time', loc: 'Workshop · QC',  level: 'Senior', urgent: false },
];

const VALUES = [
  { num: '01', title: 'Boldness', body: 'We commit to the project, the team, and the standard — even when the easy path runs through compromise.' },
  { num: '02', title: 'Innovation', body: 'From PropTech to materials engineering, we choose the better way over the familiar one.' },
  { num: '03', title: 'Agility', body: 'Construction has a thousand moving parts. We adjust without losing the line.' },
];

const BENEFITS = [
  { k: 'HMO',         v: 'Day-one coverage' },
  { k: 'Allowances',  v: 'Transport · meals · phone' },
  { k: 'Bonuses',     v: 'Project + year-end' },
  { k: 'Growth',      v: 'PCAB cert · trainings' },
  { k: 'Equipment',   v: 'PPE + tools provided' },
  { k: 'Schedule',    v: 'Standard · 5-day week' },
];

const LIFE_IMGS = [
  '/img/bot-car-1.jpg',
  '/img/MPH-IMG_4985.jpg',
  '/img/bot-car-2.jpg',
  '/img/MPH-IMG_5060.jpg',
  '/img/bot-car-3.jpg',
  '/img/MPH-IMG_3281.jpg',
];

export default function CareersPage({ onContact }) {
  const [activeDept, setActiveDept] = useState('All');
  const depts = ['All', ...new Set(OPEN_ROLES.map(r => r.dept))];
  const filtered = activeDept === 'All' ? OPEN_ROLES : OPEN_ROLES.filter(r => r.dept === activeDept);

  return (
    <div className="page-view" key="careers">
      {/* HERO */}
      <section className="careers-hero">
        <ParallaxImage
          src="/img/MPH-IMG_9920-Enhanced-NR.jpg"
          alt="Life at ABI"
          height="100%" speed={0.35} zoom={true}
          className="careers-hero-bg" />
        <div className="careers-hero-tint" />

        <div className="careers-hero-rail">
          <span>Careers · 2026</span>
          <span className="line"></span>
          <span>{OPEN_ROLES.length} open positions</span>
        </div>

        <div className="careers-hero-content">
          <div className="hd-eyebrow on-img">@lifeatabiph</div>
          <h1 className="careers-hero-h">
            Build a nation<br/>
            we can be<br/>
            <span className="ital">proud of.</span>
          </h1>
          <p className="careers-hero-lede">
            ABI is a team united by a big mission: to help build a world-class Philippines by delivering exceptional projects with high standards of service. We're hiring engineers, project managers, designers, joiners, and operators.
          </p>
          <div className="careers-hero-actions">
            <a href="#open-roles" className="btn primary">
              See open roles <span className="arrow"></span>
            </a>
            <a href="mailto:careers@abi-ph.com" className="btn on-dark secondary">
              careers@abi-ph.com
            </a>
          </div>
        </div>

        <div className="careers-hero-meta">
          <div><span className="k">Team</span><span className="v">180+</span></div>
          <div><span className="k">Tenure</span><span className="v">4.2 yrs avg</span></div>
          <div><span className="k">Roles</span><span className="v">{OPEN_ROLES.length} open</span></div>
          <div><span className="k">Departments</span><span className="v">{depts.length - 1}</span></div>
        </div>
      </section>

      {/* VALUES */}
      <section className="careers-values">
        <div className="careers-values-rail">
          <span>02 / 05</span>
          <span className="line"></span>
          <span>What we believe</span>
        </div>
        <div className="careers-values-head">
          <div className="hd-eyebrow">Brand DNA</div>
          <h2 className="hd-h">
            Built like an F1 team.<br/>
            <span className="ital">Three values, lived daily.</span>
          </h2>
          <p className="hd-meta">
            Our culture was shaped by an F1-team mindset — goal-driven, united, competent, dynamic, top-notch, timeless.
          </p>
        </div>
        <div className="careers-values-grid">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.num} delay={i * 80}>
              <div className="value-card">
                <div className="value-num">{v.num}</div>
                <h3 className="value-h">{v.title}</h3>
                <p className="value-body">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="careers-benefits">
        <div className="careers-benefits-rail">
          <span>03 / 05</span>
          <span className="line"></span>
          <span>What we offer</span>
        </div>
        <div className="careers-benefits-grid">
          <div className="careers-benefits-head">
            <div className="hd-eyebrow accent">Benefits</div>
            <h2 className="hd-h">
              The team comes<br/>
              <span className="ital">first.</span>
            </h2>
            <p className="hd-meta">
              Day-one HMO, project bonuses, and growth that pays for itself. Standard at ABI, not a perk.
            </p>
          </div>
          <div className="benefits-list">
            {BENEFITS.map(b => (
              <div key={b.k} className="benefit-row">
                <span className="b-k">{b.k}</span>
                <span className="b-v">{b.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="careers-roles" id="open-roles">
        <div className="careers-roles-rail">
          <span>04 / 05</span>
          <span className="line"></span>
          <span>Open roles · 2026</span>
        </div>
        <div className="careers-roles-head">
          <div className="hd-eyebrow">Now hiring</div>
          <h2 className="hd-h">
            {OPEN_ROLES.length} open positions.<br/>
            <span className="ital">Find your seat on the team.</span>
          </h2>
        </div>

        <div className="dept-filter">
          {depts.map(d => (
            <button
              key={d}
              className={`filter-tab ${activeDept === d ? 'active' : ''}`}
              onClick={() => setActiveDept(d)}>
              {d}
              <span className="count">{d === 'All' ? OPEN_ROLES.length : OPEN_ROLES.filter(r => r.dept === d).length}</span>
            </button>
          ))}
        </div>

        <div className="roles-table">
          <div className="roles-header">
            <span>Role</span>
            <span>Department</span>
            <span>Location</span>
            <span>Level</span>
            <span>Type</span>
            <span></span>
          </div>
          {filtered.map((r, i) => (
            <ScrollReveal key={i} delay={i * 30}>
              <a className="role-row">
                <span className="role-title">
                  {r.title}
                  {r.urgent && <span className="role-urgent">Urgent</span>}
                </span>
                <span className="role-dept">{r.dept}</span>
                <span className="role-loc">{r.loc}</span>
                <span className="role-level">{r.level}</span>
                <span className="role-type">{r.type}</span>
                <span className="role-arrow">→</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="roles-foot">
          <p>Don't see your role? Send us your CV anyway.</p>
          <a href="mailto:careers@abi-ph.com" className="all-works">
            careers@abi-ph.com<span className="ar"></span>
          </a>
        </div>
      </section>

      {/* LIFE AT ABI */}
      <section className="careers-life">
        <div className="careers-life-rail">
          <span>05 / 05</span>
          <span className="line"></span>
          <span>@lifeatabiph</span>
        </div>
        <div className="careers-life-head">
          <div className="hd-eyebrow">In the field</div>
          <h2 className="hd-h">
            Life on every site.<br/>
            <span className="ital">No staged photos.</span>
          </h2>
        </div>
        <div className="life-grid">
          {LIFE_IMGS.map((src, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="life-cell">
                <ScaleOnScroll src={src} alt={`Life at ABI ${i+1}`} aspectRatio="1" className="fill" />
                <div className="life-tag">
                  <span className="dot"></span>
                  @lifeatabiph
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="life-foot">
          <a href="https://www.instagram.com/lifeatabiph/" className="all-works">
            Follow @lifeatabiph on Instagram<span className="ar"></span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA onContact={onContact} onProjects={() => null} />
    </div>
  );
}
