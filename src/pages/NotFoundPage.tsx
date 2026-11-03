import { useLanguage } from '../context/languageContext'
import { ButtonLink } from '../components/ui/Action'
import { PageHero } from '../components/sections/PageHero'

export function NotFoundPage() {
  const { t } = useLanguage()
  const n = t.notFound

  return (
    <>
      <PageHero
        index={n.index}
        label={n.label}
        title={n.title}
        description={n.body}
        crumbs={[{ label: t.meta.pageTitles.notFound }]}
      />
      <section className="not-found section">
        <div className="container not-found__inner">
          <span className="not-found__mark" aria-hidden="true">404</span>
          <ButtonLink to="/" variant="primary" size="lg">{n.button}</ButtonLink>
        </div>
      </section>
    </>
  )
}
