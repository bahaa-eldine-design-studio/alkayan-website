import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/languageContext'
import { SectionLabel } from '../ui/SectionLabel'

export interface Crumb {
  label: string
  to?: string
}

interface PageHeroProps {
  index: string
  label: string
  title: string
  description: string
  crumbs: Crumb[]
  image?: string
}

export function PageHero({ index, label, title, description, crumbs, image }: PageHeroProps) {
  const { t } = useLanguage()

  return (
    <section className="page-hero">
      {image && (
        <div
          className="page-hero__media"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      <div className="page-hero__lines" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="container page-hero__inner">
        <nav className="breadcrumb" aria-label={t.a11y.breadcrumb}>
          <ol>
            <li><Link to="/">{t.nav.home}</Link></li>
            {crumbs.map((crumb, i) => (
              <li key={`${crumb.label}-${i}`} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <SectionLabel index={index} label={label} light />
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
      <span className="page-hero__index" aria-hidden="true">{index}</span>
    </section>
  )
}
