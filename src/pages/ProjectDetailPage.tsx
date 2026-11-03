import { Link, useParams } from 'react-router-dom'
import { PROJECTS, getProject } from '../content/data'
import { useLanguage } from '../context/languageContext'
import { ArrowIcon } from '../components/ui/Icons'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { TextLink } from '../components/ui/Action'
import { CTASection } from '../components/sections/CTASection'
import { PageHero } from '../components/sections/PageHero'
import { NotFoundPage } from './NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, L } = useLanguage()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <NotFoundPage />

  const index = PROJECTS.findIndex((item) => item.slug === project.slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]
  const d = t.projectDetail

  return (
    <>
      <PageHero
        index={project.number}
        label={d.typeLabel}
        title={L(project.title)}
        description={L(project.summary)}
        crumbs={[
          { label: t.nav.portfolio, to: '/portfolio' },
          { label: L(project.title) },
        ]}
        image={project.image}
      />

      <section className="project-detail section">
        <div className="container">
          <Reveal className="project-detail__hero">
            <img src={project.image} alt="" />
            <span className="project-detail__badge">{t.common.conceptual}</span>
          </Reveal>

          <div className="project-detail__grid">
            <Reveal className="project-detail__main">
              <SectionLabel label={d.conceptLabel} />
              <h2 className="section-title">{L(project.title)}</h2>
              <p className="project-detail__concept">{L(project.concept)}</p>
              <h3 className="project-detail__subhead">{d.deliverablesLabel}</h3>
              <ul className="project-detail__deliverables">
                {project.deliverables.map((item, i) => (
                  <li key={i}>
                    <span aria-hidden="true">0{i + 1}</span>
                    <span>{L(item)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="project-detail__aside" delay={100}>
              <dl className="project-meta">
                <div>
                  <dt>{d.categoryLabel}</dt>
                  <dd>{t.categories[project.category]}</dd>
                </div>
                <div>
                  <dt>{d.scopeLabel}</dt>
                  <dd>{L(project.scope)}</dd>
                </div>
                <div>
                  <dt>{d.typeLabel}</dt>
                  <dd>{t.common.conceptual}</dd>
                </div>
              </dl>
              <div className="project-disclaimer">
                <h3>{d.disclaimerTitle}</h3>
                <p>{d.disclaimer}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="project-detail__gallery-head">
            <h2>{d.galleryLabel}</h2>
            <span aria-hidden="true" />
          </Reveal>
          <div className="project-detail__gallery">
            {project.gallery.map((image, i) => (
              <Reveal key={`${image}-${i}`} delay={i * 90}>
                <img src={image} alt="" loading="lazy" />
              </Reveal>
            ))}
          </div>

          <div className="project-detail__nav">
            <TextLink to="/portfolio">{t.common.backToProjects}</TextLink>
            <Link to={`/portfolio/${next.slug}`} className="next-project">
              <span>{t.common.nextProject}</span>
              <strong>{L(next.title)}</strong>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        label={t.home.cta.label}
        title={d.ctaTitle}
        body={d.ctaBody}
        button={t.common.startConversation}
      />
    </>
  )
}
