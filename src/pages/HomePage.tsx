import { Link } from 'react-router-dom'
import { IMAGES, PROJECTS } from '../content/data'
import { useLanguage } from '../context/languageContext'
import { ButtonLink, TextLink } from '../components/ui/Action'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { CTASection } from '../components/sections/CTASection'
import { ProjectCard } from '../components/sections/ProjectCard'
import { ServiceList } from '../components/sections/ServiceList'
import { BrandText } from '../components/ui/BrandText'

export function HomePage() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <>
      {/* 1 — HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img src={IMAGES.hero} alt="" fetchPriority="high" />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__frame" aria-hidden="true"><span /><span /><span /></div>

        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow"><span aria-hidden="true" />{h.hero.eyebrow}</p>
            <h1 id="hero-title" className="hero__title">
              <span>{h.hero.titleLead}</span>
              <span className="hero__accent">{h.hero.titleAccent}</span>
              <span>{h.hero.titleTail}</span>
            </h1>
            <p className="hero__description">{h.hero.description}</p>
            <div className="hero__actions">
              <ButtonLink to="/portfolio" variant="primary" size="lg">
                {h.hero.primaryCta}
              </ButtonLink>
              <ButtonLink to="/services" variant="light" size="lg" withArrow={false}>
                {h.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <p className="hero__side" aria-hidden="true">{t.common.sloganEn}</p>
        </div>

        <div className="container hero__bottom">
          <div className="hero__pillars">
            {h.hero.pillars.map((pillar, index) => (
              <div className="hero__pillar" key={pillar.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <strong>{pillar.title}</strong>
                  <small>{pillar.caption}</small>
                </div>
              </div>
            ))}
          </div>
          <Link to="/#intro" className="hero__scroll">
            <span>{h.hero.scroll}</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 2 — INTRODUCTION */}
      <section className="intro-section section" id="intro">
        <div className="container intro-section__grid">
          <Reveal className="intro-section__text">
            <SectionLabel index={h.intro.index} label={h.intro.label} />
            <h2 className="section-title">{h.intro.title}</h2>
            <p className="intro-section__lead"><BrandText text={h.intro.body1} /></p>
            <p className="intro-section__body">{h.intro.body2}</p>
            <blockquote className="intro-section__quote">{h.intro.quote}</blockquote>
            <TextLink to="/about">{h.intro.link}</TextLink>
          </Reveal>
          <Reveal className="intro-section__visual" delay={120}>
            <div className="intro-section__image">
              <img src={IMAGES.intro} alt="" loading="lazy" />
              <span className="intro-section__frame" aria-hidden="true" />
            </div>
            <p className="intro-section__caption">{h.intro.imageCaption}</p>
            <span className="intro-section__mark" aria-hidden="true">AK — 01</span>
          </Reveal>
        </div>
      </section>

      {/* 3 — SERVICES OVERVIEW */}
      <section className="services-section section" id="services">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <SectionLabel index={h.services.index} label={h.services.label} />
              <h2 className="section-title">{h.services.title}</h2>
            </div>
            <div className="section-head__aside">
              <p>{h.services.description}</p>
              <TextLink to="/services">{h.services.link}</TextLink>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ServiceList />
          </Reveal>
          <p className="services-section__hint">{h.services.previewHint}</p>
        </div>
      </section>

      {/* 4 — WHY AL KAYAN */}
      <section className="why-section section">
        <div className="container why-section__grid">
          <Reveal className="why-section__media">
            <img src={IMAGES.why} alt="" loading="lazy" />
            <span className="why-section__media-mark" aria-hidden="true">AK — 03</span>
          </Reveal>
          <Reveal className="why-section__content" delay={100}>
            <SectionLabel index={h.why.index} label={h.why.label} light />
            <h2 className="section-title section-title--light">{h.why.title}</h2>
            <p className="why-section__description">{h.why.description}</p>
            <ol className="why-section__list">
              {h.why.points.map((point, index) => (
                <li key={point.title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p><BrandText text={point.body} /></p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 5 — METHODOLOGY */}
      <section className="method-section section" id="methodology">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <SectionLabel index={h.method.index} label={h.method.label} />
              <h2 className="section-title">{h.method.title}</h2>
            </div>
            <div className="section-head__aside">
              <p>{h.method.description}</p>
            </div>
          </Reveal>
          <div className="method-section__steps">
            {h.method.steps.map((step, index) => (
              <Reveal className="method-step" key={step.title} delay={index * 80}>
                <span className="method-step__num">0{index + 1}</span>
                <span className="method-step__line" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="method-section__note"><span aria-hidden="true" />{h.method.note}</p>
          </Reveal>
        </div>
      </section>

      {/* 6 — FEATURED WORK */}
      <section className="work-section section" id="work">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <SectionLabel index={h.work.index} label={h.work.label} />
              <h2 className="section-title">{h.work.title}</h2>
            </div>
            <div className="section-head__aside">
              <p>{h.work.description}</p>
              <TextLink to="/portfolio">{h.work.link}</TextLink>
            </div>
          </Reveal>
          <div className="work-section__grid">
            <Reveal><ProjectCard project={PROJECTS[0]} feature /></Reveal>
            <Reveal delay={90}><ProjectCard project={PROJECTS[1]} /></Reveal>
            <Reveal delay={160}><ProjectCard project={PROJECTS[2]} /></Reveal>
          </div>
          <Reveal>
            <p className="work-section__note">{t.common.conceptualNote}</p>
          </Reveal>
        </div>
      </section>

      {/* 7 — BRAND POSITIONING */}
      <section className="positioning-section section">
        <div className="container positioning-section__grid">
          <Reveal className="positioning-section__content">
            <SectionLabel index={h.positioning.index} label={h.positioning.label} light />
            <p className="positioning-section__parent">AL KAYAN CONSTRUCTION <span aria-hidden="true">/</span> AL KAYAN MARKETING</p>
            <h2 className="section-title section-title--light">{h.positioning.title}</h2>
            <p><BrandText text={h.positioning.body1} /></p>
            <p>{h.positioning.body2}</p>
            <div className="tag-row">
              {h.positioning.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </Reveal>
          <Reveal className="positioning-section__media" delay={110}>
            <div className="positioning-section__image">
              <img src={IMAGES.positioning} alt="" loading="lazy" />
            </div>
            <p>{h.positioning.imageCaption}</p>
          </Reveal>
        </div>
      </section>

      {/* 8 — CTA */}
      <CTASection
        label={h.cta.label}
        title={h.cta.title}
        body={h.cta.body}
        button={h.cta.button}
      />
    </>
  )
}
