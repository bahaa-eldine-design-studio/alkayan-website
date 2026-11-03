import type { Service } from '../../content/data'
import { useLanguage } from '../../context/languageContext'
import { TextLink } from '../ui/Action'
import { Reveal } from '../ui/Reveal'

interface ServiceDetailProps {
  service: Service
  index: number
}

export function ServiceDetail({ service, index }: ServiceDetailProps) {
  const { t, L } = useLanguage()

  return (
    <article
      id={`service-${service.id}`}
      className={`service-detail ${index % 2 === 1 ? 'service-detail--reverse' : ''}`}
    >
      <Reveal className="service-detail__media">
        <img src={service.image} alt="" loading="lazy" />
        <span className="service-detail__index" aria-hidden="true">{service.number}</span>
      </Reveal>
      <Reveal className="service-detail__content" delay={90}>
        <p className="service-detail__eyebrow">{t.servicesPage.detailLabel}</p>
        <h2>{L(service.title)}</h2>
        <p className="service-detail__lead">{L(service.summary)}</p>
        <p className="service-detail__body">{L(service.description)}</p>
        <div className="service-detail__deliverables">
          <h3>{t.servicesPage.deliverablesLabel}</h3>
          <ul>
            {service.deliverables.map((item, i) => (
              <li key={i}>
                <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span>{L(item)}</span>
              </li>
            ))}
          </ul>
        </div>
        <TextLink to={`/contact?service=${service.id}`} diagonal>
          {t.servicesPage.discuss}
        </TextLink>
      </Reveal>
    </article>
  )
}
