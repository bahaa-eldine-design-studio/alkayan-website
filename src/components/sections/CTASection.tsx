import { ButtonLink } from '../ui/Action'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'

interface CTASectionProps {
  label: string
  title: string
  body: string
  button: string
  to?: string
}

export function CTASection({ label, title, body, button, to = '/contact' }: CTASectionProps) {
  return (
    <section className="cta-band">
      <svg className="cta-band__geometry" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 400 L300 0 L600 400" />
        <path d="M100 400 L300 100 L500 400" />
        <path d="M200 400 L300 200 L400 400" />
        <path d="M0 300 H600" />
      </svg>
      <div className="container cta-band__inner">
        <Reveal>
          <SectionLabel label={label} />
          <div className="cta-band__row">
            <div>
              <h2 className="cta-band__title">{title}</h2>
              <p className="cta-band__body">{body}</p>
            </div>
            <ButtonLink to={to} variant="dark" size="lg">
              {button}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
