import { useState } from 'react'
import { IMAGES, PROJECTS } from '../content/data'
import { useLanguage } from '../context/languageContext'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { CTASection } from '../components/sections/CTASection'
import { FilterChips, type FilterValue } from '../components/sections/FilterChips'
import { PageHero } from '../components/sections/PageHero'
import { ProjectCard } from '../components/sections/ProjectCard'

export function PortfolioPage() {
  const { t } = useLanguage()
  const p = t.portfolioPage
  const [filter, setFilter] = useState<FilterValue>('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter)

  return (
    <>
      <PageHero
        index={p.hero.index}
        label={p.hero.label}
        title={p.hero.title}
        description={p.hero.description}
        crumbs={[{ label: t.meta.pageTitles.portfolio }]}
        image={IMAGES.identity}
      />

      <section className="portfolio-section section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <SectionLabel label={p.intro.label} />
              <h2 className="section-title">{p.intro.title}</h2>
            </div>
            <div className="section-head__aside">
              <p>{p.intro.body}</p>
            </div>
          </Reveal>

          <Reveal className="portfolio-toolbar" delay={60}>
            <FilterChips active={filter} onChange={setFilter} />
            <span className="portfolio-count" aria-live="polite">
              {p.count.replace('{count}', String(filtered.length))}
            </span>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="portfolio-grid" key={filter}>
              {filtered.map((project, index) => (
                <Reveal
                  key={project.slug}
                  delay={Math.min(index, 4) * 70}
                  className={project.feature && filter === 'all' ? 'portfolio-grid__feature' : ''}
                >
                  <ProjectCard project={project} feature={project.feature && filter === 'all'} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty" role="status">
              <p>{p.empty}</p>
              <button type="button" className="text-link" onClick={() => setFilter('all')}>
                <span>{p.reset}</span>
              </button>
            </div>
          )}

          <Reveal>
            <p className="portfolio-note">{p.note}</p>
          </Reveal>
        </div>
      </section>

      <CTASection
        label={t.home.cta.label}
        title={t.home.cta.title}
        body={t.home.cta.body}
        button={t.home.cta.button}
      />
    </>
  )
}
