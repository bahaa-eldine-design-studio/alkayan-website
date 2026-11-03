import { Link } from 'react-router-dom'
import { SERVICES } from '../../content/data'
import { useLanguage } from '../../context/languageContext'
import { ArrowUpIcon } from '../ui/Icons'
import { BrandMark } from './BrandMark'

export function Footer() {
  const { t, L } = useLanguage()
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__top">
          <div className="site-footer__brand-col">
            <Link to="/" aria-label="AL KAYAN MARKETING — Home">
              <BrandMark variant="footer" />
            </Link>
            <p className="site-footer__tagline">{t.footer.tagline}</p>
            <p className="site-footer__slogan"><bdi dir="ltr">{t.common.sloganEn}</bdi></p>
          </div>

          <nav className="site-footer__col" aria-label={t.footer.explore}>
            <h2>{t.footer.explore}</h2>
            <ul>
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/services">{t.nav.services}</Link></li>
              <li><Link to="/portfolio">{t.nav.portfolio}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label={t.footer.capabilities}>
            <h2>{t.footer.capabilities}</h2>
            <ul>
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services#service-${service.id}`}>{L(service.title)}</Link>
                </li>
              ))}
              <li><Link to="/services">{t.home.services.link}</Link></li>
            </ul>
          </nav>

          <div className="site-footer__col site-footer__connect">
            <h2>{t.footer.connect}</h2>
            <dl>
              <div><dt>{t.contact.emailLabel}</dt><dd><bdi dir="ltr">{t.contact.emailValue}</bdi></dd></div>
              <div><dt>{t.contact.phoneLabel}</dt><dd><bdi dir="ltr">{t.contact.phoneValue}</bdi></dd></div>
              <div><dt>{t.contact.locationLabel}</dt><dd>{t.contact.locationValue}</dd></div>
            </dl>
            <p className="site-footer__note">{t.contact.infoNote}</p>
          </div>
        </div>

        <div className="site-footer__wordmark" aria-hidden="true">AL KAYAN</div>

        <div className="site-footer__bottom">
          <p>© {year} AL KAYAN MARKETING. {t.footer.rights}.</p>
          <div className="site-footer__bottom-meta">
            <span className="site-footer__phase">{t.footer.prototype}</span>
            <span className="site-footer__sep" aria-hidden="true" />
            <span>{t.footer.note}</span>
          </div>
          <button type="button" className="back-to-top" onClick={scrollTop} aria-label={t.a11y.backToTop}>
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}
