import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SERVICES } from '../../content/data'
import { useLanguage } from '../../context/languageContext'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useScrolled } from '../../hooks/useScrolled'
import { ButtonLink } from '../ui/Action'
import { ArrowIcon, ChevronDownIcon, CloseIcon, MenuIcon } from '../ui/Icons'
import { BrandMark } from './BrandMark'
import { LanguageSwitch } from './LanguageSwitch'

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? 'is-active' : ''}`

export function Header() {
  const { t, L } = useLanguage()
  const location = useLocation()
  const scrolled = useScrolled(28)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const servicesToggleRef = useRef<HTMLButtonElement>(null)

  useBodyScrollLock(menuOpen)

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location.pathname, location.hash, location.search])

  useEffect(() => {
    if (!servicesOpen && !menuOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (
        servicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false)
      }
    }
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return
      if (menuOpen) {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      } else if (servicesOpen) {
        setServicesOpen(false)
        servicesToggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, servicesOpen])

  const handleDropdownKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowDown' || !servicesOpen) return
    event.preventDefault()
    dropdownRef.current?.querySelector<HTMLAnchorElement>('.nav-dropdown__panel a')?.focus()
  }

  const navItems = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about, end: false },
    { to: '/portfolio', label: t.nav.portfolio, end: false },
    { to: '/contact', label: t.nav.contact, end: false },
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand" aria-label="AL KAYAN MARKETING — Home">
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label={t.a11y.mainNav}>
          <NavLink to="/" end className={navClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" className={navClass}>
            {t.nav.about}
          </NavLink>
          <div
            className={`nav-item nav-item--dropdown ${servicesOpen ? 'is-open' : ''}`}
            ref={dropdownRef}
            onKeyDown={handleDropdownKeys}
          >
            <NavLink to="/services" className={navClass}>
              {t.nav.services}
            </NavLink>
            <button
              type="button"
              ref={servicesToggleRef}
              className="nav-dropdown__toggle"
              aria-expanded={servicesOpen}
              aria-controls="services-dropdown"
              aria-label={t.nav.servicesMenu}
              onClick={() => setServicesOpen((open) => !open)}
            >
              <ChevronDownIcon />
            </button>
            <div id="services-dropdown" className="nav-dropdown__panel" hidden={!servicesOpen}>
              <p className="nav-dropdown__eyebrow">{t.nav.servicesMenu}</p>
              <ul className="nav-dropdown__list">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services#service-${service.id}`} onClick={() => setServicesOpen(false)}>
                      <span className="nav-dropdown__num">{service.number}</span>
                      <span>{L(service.title)}</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="nav-dropdown__all" onClick={() => setServicesOpen(false)}>
                <span>{t.home.services.link}</span>
                <ArrowIcon size={15} />
              </Link>
            </div>
          </div>
          {navItems.slice(2).map((item) => (
            <NavLink to={item.to} key={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitch className="site-header__lang" />
          <ButtonLink to="/contact" variant="outline" size="md" className="site-header__cta">
            {t.nav.cta}
          </ButtonLink>
          <button
            type="button"
            ref={menuToggleRef}
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className="mobile-panel" hidden={!menuOpen}>
        <div className="mobile-panel__inner container">
          <nav aria-label={t.a11y.mainNav} className="mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__num">01</span>
              <span>{t.nav.home}</span>
              <ArrowIcon />
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__num">02</span>
              <span>{t.nav.about}</span>
              <ArrowIcon />
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__num">03</span>
              <span>{t.nav.services}</span>
              <ArrowIcon />
            </Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__num">04</span>
              <span>{t.nav.portfolio}</span>
              <ArrowIcon />
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav__num">05</span>
              <span>{t.nav.contact}</span>
              <ArrowIcon />
            </Link>
          </nav>
          <div className="mobile-panel__aside">
            <p className="mobile-panel__eyebrow">{t.nav.servicesMenu}</p>
            <div className="mobile-panel__services">
              {SERVICES.slice(0, 4).map((service) => (
                <Link to={`/services#service-${service.id}`} key={service.id} onClick={() => setMenuOpen(false)}>
                  {L(service.title)}
                </Link>
              ))}
            </div>
            <LanguageSwitch className="mobile-panel__lang" />
            <ButtonLink to="/contact" variant="primary" size="lg" className="mobile-panel__cta">
              {t.nav.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  )
}
