/* Blog.jsx — editorial blog page with real abi-ph.com content */

import { useState } from 'react'
import ScaleOnScroll from '../components/ScaleOnScroll'
import ScrollReveal from '../components/ScrollReveal'

const BLOG_CATEGORIES = ['All', 'Construction Basics', 'Industrial Projects', 'Company News', 'Renovation', 'Construction Tips'];

const BLOG_POSTS = [
  {
    slug: 'construction-contractor-philippines',
    title: 'Construction Contractor Philippines: How to Compare Proposals and Avoid Costly Mistakes',
    date: 'Mar 30, 2026',
    category: 'Construction Basics',
    readTime: '6 min',
    excerpt: 'Always request detailed written proposals. Compare bids using a side-by-side method. Verify licenses and contractor credentials. Avoid choosing based only on the lowest price.',
    img: '/img/Construction-Contractor-Philippines-How-to-Compare-Proposals-and-Avoid-Costly-Mistakes-1080x675.png',
    featured: true,
  },
  {
    slug: 'architect-vs-contractor-who-should-you-hire-first-for-your-project',
    title: 'Architect vs Contractor: Who Should You Hire First for Your Project?',
    date: 'Mar 27, 2026',
    category: 'Construction Basics',
    readTime: '5 min',
    excerpt: 'Architects design and plan the project. Contractors manage and build the project. For new or complex builds, hire an architect first. For simple renovations, a contractor may be enough.',
    img: '/img/Architect-vs-Contractor-Who-Should-You-Hire-First-for-Your-Project-400x250.png',
  },
  {
    slug: 'construction-company-in-pasig-city',
    title: 'Construction Company in Pasig City: Key Questions to Ask Before Hiring',
    date: 'Mar 25, 2026',
    category: 'Construction Basics',
    readTime: '7 min',
    excerpt: 'Always verify licenses and legal documents. Review experience and similar past projects. Ask for detailed cost breakdowns and clear timelines. Confirm who manages the project onsite.',
    img: '/img/Construction-Company-in-Pasig-City-Key-Questions-to-Ask-Before-Hiring-400x250.png',
  },
  {
    slug: 'top-construction-companies-in-the-philippines',
    title: 'Top Construction Companies in the Philippines: What Sets Industry Leaders Apart',
    date: 'Mar 23, 2026',
    category: 'Industrial Projects',
    readTime: '8 min',
    excerpt: 'The top construction companies in the Philippines handle large, complex projects across multiple sectors. Industry leaders stand out through strong finances, technical expertise, and diverse portfolios.',
    img: '/img/Top-Construction-Companies-in-the-Philippines-What-Sets-Industry-Leaders-Apart-400x250.png',
  },
  {
    slug: 'construction-company-in-taguig',
    title: 'Construction Company in Taguig: What to Look for in a Reliable Partner',
    date: 'Mar 20, 2026',
    category: 'Construction Basics',
    readTime: '6 min',
    excerpt: 'Always verify licenses and legal documents. Review experience and completed projects. Check reputation through reviews and references. Demand clear cost estimates.',
    img: '/img/Construction-Company-in-Taguig-What-to-Look-for-in-a-Reliable-Partner-400x250.png',
  },
  {
    slug: 'design-and-build-construction-company',
    title: 'Design and Build Construction Company vs Traditional Contractor: Which Is Better?',
    date: 'Mar 18, 2026',
    category: 'Construction Tips',
    readTime: '7 min',
    excerpt: 'A design and build construction company handles both design and construction under one contract. Traditional contracting separates the design and construction phases.',
    img: '/img/Design-and-Build-Construction-Company-vs-Traditional-Contractor-Which-Is-Better-400x250.png',
  },
];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState('All');
  const featured = BLOG_POSTS.find(p => p.featured);
  const rest = BLOG_POSTS.filter(p => !p.featured);
  const filtered = activeCat === 'All' ? rest : rest.filter(p => p.category === activeCat);

  return (
    <div className="page-view" key="blog">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-rail">
          <span>Field notes</span>
          <span className="line"></span>
          <span>121 articles · updated monthly</span>
        </div>
        <div className="blog-hero-grid">
          <div>
            <div className="hd-eyebrow">Our Blog</div>
            <h1 className="blog-hero-h">
              Stories from<br/>
              <span className="ital">the build.</span>
            </h1>
          </div>
          <p className="blog-hero-lede">
            Case studies, construction primers, and reflections from the ABI team — written for owners, GMs, and the curious. Updated monthly.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="blog-featured-section">
        <div className="blog-featured">
          <ScrollReveal>
            <a className="blog-featured-card">
              <div className="blog-featured-img">
                <ScaleOnScroll src={featured.img} alt={featured.title} aspectRatio="16/10" className="fill" />
              </div>
              <div className="blog-featured-content">
                <div className="blog-meta-row">
                  <span className="meta-pill">FEATURED</span>
                  <span className="meta-cat">{featured.category}</span>
                  <span className="meta-date">{featured.date}</span>
                  <span className="meta-read">{featured.readTime} read</span>
                </div>
                <h2 className="blog-featured-h">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <span className="blog-cta">Read article<span className="ar"></span></span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER */}
      <section className="blog-filter-section">
        <div className="blog-filter-rail">
          <span>Latest articles</span>
          <span className="line"></span>
          <span>{filtered.length} of {rest.length}</span>
        </div>
        <div className="blog-filter">
          {BLOG_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {filtered.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <a className="blog-card">
                <div className="blog-card-img">
                  <ScaleOnScroll src={p.img} alt={p.title} aspectRatio="16/10" className="fill" />
                </div>
                <div className="blog-card-meta">
                  <div className="blog-meta-row">
                    <span className="meta-cat">{p.category}</span>
                    <span className="meta-sep">·</span>
                    <span className="meta-date">{p.date}</span>
                  </div>
                  <h3 className="blog-card-h">{p.title}</h3>
                  <p className="blog-card-excerpt">{p.excerpt}</p>
                  <div className="blog-card-foot">
                    <span className="meta-read">{p.readTime} read</span>
                    <span className="blog-card-arrow">→</span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="blog-pagination">
          <span className="page-info">Page 1 of 21</span>
          <div className="page-controls">
            <button className="page-btn disabled" disabled>← Previous</button>
            <button className="page-btn">Next 6 articles<span className="ar"></span></button>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="blog-subscribe">
        <div className="blog-subscribe-rail">
          <span>Stay in the loop</span>
          <span className="line"></span>
        </div>
        <div className="blog-subscribe-grid">
          <h2>One construction insight<br/><span className="accent">in your inbox each month.</span></h2>
          <form className="subscribe-form" onSubmit={(e) => { e.preventDefault(); e.target.querySelector('button').textContent = 'Subscribed ✓'; }}>
            <input type="email" required placeholder="your@company.com" />
            <button type="submit" className="btn primary">Subscribe<span className="arrow"></span></button>
          </form>
          <p className="subscribe-fine">
            No spam, one email a month, unsubscribe anytime. Read by 1,400+ owners and project managers.
          </p>
        </div>
      </section>
    </div>
  );
}
