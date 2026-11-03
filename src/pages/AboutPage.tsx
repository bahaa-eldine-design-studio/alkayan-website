import { IMAGES } from '../content/data'
import { useLanguage } from '../context/languageContext'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { CTASection } from '../components/sections/CTASection'
import { PageHero } from '../components/sections/PageHero'
import { BrandText } from '../components/ui/BrandText'

export function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <>
      <PageHero
        index={a.hero.index}
        label={a.hero.label}
        title={a.hero.title}
        description={a.hero.description}
        crumbs={[{ label: t.meta.pageTitles.about }]}
        image={IMAGES.intro}
      />

      <section className="about-intro section">
        <div className="container about-intro__grid">
          <Reveal>
            <SectionLabel label={a.intro.label} />
            <h2 className="section-title">{a.intro.title}</h2>
          </Reveal>
          <Reveal className="about-intro__copy" delay={100}>
            <p className="lead"><BrandText text={a.intro.p1} /></p>
            <p>{a.intro.p2}</p>
          </Reveal>
        </div>
      </section>

      <section className="philosophy section">
        <div className="container">
          <Reveal className="philosophy__head">
            <SectionLabel label={a.philosophy.label} light />
            <blockquote>{a.philosophy.quote}</blockquote>
            <p>{a.philosophy.body}</p>
          </Reveal>
          <div className="philosophy__principles">
            {a.philosophy.principles.map((item, index) => (
              <Reveal className="philosophy__principle" key={item.title} delay={index * 80}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container mission-vision__grid">
          {[a.missionVision.mission, a.missionVision.vision].map((block, index) => (
            <Reveal className="mv-block" key={block.label} delay={index * 100}>
              <SectionLabel index={`0${index + 1}`} label={block.label} />
              <h2>{block.title}</h2>
              <p>{block.body}</p>
              <span className="mv-block__mark" aria-hidden="true">{index === 0 ? 'M' : 'V'}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <SectionLabel index="03" label={a.values.label} />
              <h2 className="section-title">{a.values.title}</h2>
            </div>
          </Reveal>
          <div className="values-grid">
            {a.values.items.map((value, index) => (
              <Reveal className="value-card" key={value.title} delay={(index % 3) * 70}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership section">
        <div className="container partnership__grid">
          <Reveal className="partnership__intro">
            <SectionLabel index="04" label={a.partnership.label} />
            <h2 className="section-title">{a.partnership.title}</h2>
            <p>{a.partnership.body}</p>
          </Reveal>
          <div className="partnership__list">
            {a.partnership.items.map((item, index) => (
              <Reveal className="partnership__item" key={item.title} delay={index * 70}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
