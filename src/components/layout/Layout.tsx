import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/languageContext'
import type { Dictionary } from '../../content'
import { Footer } from './Footer'
import { Header } from './Header'

type PageKey = keyof Dictionary['meta']['pageTitles']

function pageKeyFor(pathname: string): PageKey {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/about')) return 'about'
  if (pathname.startsWith('/services')) return 'services'
  if (pathname.startsWith('/portfolio/')) return 'project'
  if (pathname.startsWith('/portfolio')) return 'portfolio'
  if (pathname.startsWith('/contact')) return 'contact'
  return 'notFound'
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const changedPage = previousPath.current !== pathname
    previousPath.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        // A deep link from another page should land immediately, not animate
        // across the whole previous document. In-page anchors stay smooth.
        behavior: changedPage || reduced ? 'instant' : 'smooth',
        block: 'start',
      })
    }, changedPage ? 60 : 90)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}

export function Layout() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const pageKey = pageKeyFor(pathname)

  useEffect(() => {
    document.title =
      pageKey === 'home'
        ? t.meta.title
        : `${t.meta.pageTitles[pageKey]} | AL KAYAN MARKETING`
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', t.meta.description)
  }, [t, pageKey])

  return (
    <>
      <a className="skip-link" href="#main">{t.a11y.skip}</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
