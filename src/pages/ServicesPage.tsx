import { IMAGES, SERVICES } from '../content/data'
import { useLanguage } from '../context/languageContext'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { CTASection } from '../components/sections/CTASection'
import { PageHero } from '../components/sections/PageHero'
import { ServiceDetail } from '../components/sections/ServiceDetail'

export function ServicesPage() {
  const { t, L } = useLanguage()
  const s = t.servicesPage

  return (
    <>
      <PageHero
        index={s.hero.index}
        label={s.hero.label}
        title={s.hero.title}
        description={s.hero.description}
        crumbs={[{ label: t.meta.pageTitles.services }]}
        image={IMAGES.strategy}
      />

      <section className="services-intro section">
        <div className="container services-intro__grid">
          <Reveal>
            <SectionLabel label={s.intro.label} />
            <h2 className="section-title">{s.intro.title}</h2>
          </Reveal>
          <Reveal className="services-intro__aside" delay={90}>
            <p className="lead">{s.intro.body}</p>
            <nav className="services-jump" aria-label={s.hero.label}>
              {SERVICES.map((service) => (
                <a key={service.id} href={`#service-${service.id}`}>
                  <span>{service.number}</span>
                  {L(service.title)}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          {SERVICES.map((service, index) => (
            <ServiceDetail key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="services-note section">
        <div className="container services-note__grid">
          <Reveal>
            <SectionLabel label={s.noteLabel} />
            <h2 className="section-title">{s.editableNoteTitle}</h2>
          </Reveal>
          <Reveal delay={90}>
            <p>{s.editableNoteBody}</p>
            <div className="services-note__closing">
              <h3>{s.closingTitle}</h3>
              <p>{s.closingBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        label={t.home.cta.label}
        title={s.closingTitle}
        body={s.closingBody}
        button={s.closingButton}
      />
    </>
  )
}
