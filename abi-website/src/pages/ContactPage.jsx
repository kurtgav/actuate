import { useState } from 'react'

export default function ContactPage({ onSubmit }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: '', message: '' })
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ name: '', company: '', email: '', type: '', message: '' })
  }
  return (
    <div className="page-view" key="contact">
      <section className="contact-grid">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 style={{ marginTop: '20px' }}>Let's build<br />something <span className="accent">together.</span></h1>
          <p style={{ fontSize: '17px', lineHeight: 1.55, color: 'var(--steel)', maxWidth: '480px', marginBottom: '40px' }}>
            Tell us about your project — scope, timeline, and what success looks like. Our team will get back within one business day.
          </p>
          <form className="form" onSubmit={submit}>
            <div className="field"><label>Name</label><input required value={form.name} onChange={update('name')} placeholder="Juan Dela Cruz" /></div>
            <div className="field"><label>Company</label><input value={form.company} onChange={update('company')} placeholder="Acme Corp." /></div>
            <div className="field"><label>Email</label><input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" /></div>
            <div className="field"><label>Project type</label>
              <select value={form.type} onChange={update('type')}>
                <option value="">Select…</option>
                <option>Office Fit-Out</option>
                <option>Structural &amp; Civil Works</option>
                <option>Property Tech</option>
                <option>Joineries</option>
                <option>Smart Spaces</option>
                <option>Consulting</option>
              </select>
            </div>
            <div className="field"><label>Tell us about your project</label><textarea rows="4" value={form.message} onChange={update('message')} placeholder="Briefly describe scope, location, timeline, and budget." /></div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button type="submit" className="btn primary">Send request <span className="arrow"></span></button>
            </div>
          </form>
        </div>
        <div className="contact-side">
          <div className="block">
            <h5>Visit</h5>
            <p>C2 Building,<br />7th Ave Corner 28th St,<br />Bonifacio High Street, Taguig</p>
          </div>
          <div className="block">
            <h5>Project enquiries</h5>
            <a href="mailto:requestforquotation@abi-ph.com">requestforquotation@abi-ph.com</a>
          </div>
          <div className="block">
            <h5>Careers</h5>
            <a href="mailto:careers@abi-ph.com">careers@abi-ph.com</a>
          </div>
          <div className="block">
            <h5>Suppliers</h5>
            <a href="mailto:suppliers@abi-ph.com">suppliers@abi-ph.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}
