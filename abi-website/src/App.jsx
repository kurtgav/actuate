import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import ServiceDetailPage from './pages/ServiceDetailPage'

export default function App() {
  const [page, setPage] = useState('home')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('abi:page')
    if (saved) setPage(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('abi:page', page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  const nav = (target) => setPage(target)
  const contact = () => setPage('contact')

  const submitContact = (form) => {
    setToast(`Thanks ${form.name || ''} — your request has been queued.`)
    setTimeout(() => setToast(null), 3600)
  }

  let body
  if (page && page.startsWith('service:')) {
    const slug = page.slice('service:'.length)
    body = <ServiceDetailPage slug={slug} onNav={nav} onContact={contact} />
  } else {
    switch (page) {
      case 'about':    body = <AboutPage onContact={contact} />; break
      case 'services': body = <ServicesPage onContact={contact} onNav={nav} />; break
      case 'works':    body = <WorksPage onContact={contact} />; break
      case 'contact':  body = <ContactPage onSubmit={submitContact} />; break
      case 'blog':     body = <BlogPage />; break
      case 'careers':  body = <CareersPage onContact={contact} />; break
      default:         body = <HomePage onNav={nav} onContact={contact} />
    }
  }

  return (
    <>
      <ScrollProgress />
      <Nav active={page} onNav={nav} onContact={contact} />
      {body}
      <Footer onNav={nav} onContact={contact} />
      {toast && <div className="toast show">{toast}</div>}
    </>
  )
}
