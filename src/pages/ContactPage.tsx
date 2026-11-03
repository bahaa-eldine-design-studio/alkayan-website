import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import { IMAGES, SERVICES } from '../content/data'
import type { Dictionary } from '../content'
import { useLanguage } from '../context/languageContext'
import { ActionButton } from '../components/ui/Action'
import { CheckIcon } from '../components/ui/Icons'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { PageHero } from '../components/sections/PageHero'

type FieldName = 'name' | 'company' | 'email' | 'phone' | 'service' | 'budget' | 'message'
type FormValues = Record<FieldName, string>
type FormErrors = Partial<Record<FieldName, string>>

const EMPTY_VALUES: FormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

function validate(values: FormValues, t: Dictionary): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = t.contact.errors.name
  if (!values.email.trim()) errors.email = t.contact.errors.email
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = t.contact.errors.emailInvalid
  }
  if (values.phone.trim() && !/^[+\d][\d\s()-]{6,22}$/.test(values.phone.trim())) {
    errors.phone = t.contact.errors.phoneInvalid
  }
  if (!values.service) errors.service = t.contact.errors.service
  if (!values.message.trim()) errors.message = t.contact.errors.message
  else if (values.message.trim().length < 20) errors.message = t.contact.errors.messageShort
  return errors
}

interface FieldProps {
  id: FieldName
  label: string
  error?: string
  optional?: string
  children: ReactNode
}

function Field({ id, label, error, optional, children }: FieldProps) {
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`field-${id}`}>
        {label}
        {optional && <span className="form-field__optional">({optional})</span>}
      </label>
      {children}
      {error && (
        <p className="form-field__error" id={`error-${id}`} role="alert">{error}</p>
      )}
    </div>
  )
}

export function ContactPage() {
  const { t, L } = useLanguage()
  const c = t.contact
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service')
  const presetService = SERVICES.find((service) => service.id === serviceParam)?.id ?? ''

  const [values, setValues] = useState<FormValues>(() => ({ ...EMPTY_VALUES, service: presetService }))
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'demo'>('idle')
  const demoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (presetService) {
      setValues((current) => ({ ...current, service: presetService }))
      setErrors((current) => ({ ...current, service: undefined }))
    }
  }, [presetService])

  useEffect(() => {
    if (status === 'demo') demoRef.current?.focus()
  }, [status])

  const update = (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }

  const describedBy = (field: FieldName) => (errors[field] ? `error-${field}` : undefined)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values, t)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus()
      return
    }
    // Frontend-only demonstration state. No network request is made.
    setStatus('demo')
  }

  return (
    <>
      <PageHero
        index={c.hero.index}
        label={c.hero.label}
        title={c.hero.title}
        description={c.hero.description}
        crumbs={[{ label: t.meta.pageTitles.contact }]}
        image={IMAGES.why}
      />

      <section className="contact-section section">
        <div className="container contact-section__grid">
          <Reveal className="contact-section__intro">
            <SectionLabel label={c.intro.label} />
            <h2 className="section-title">{c.intro.title}</h2>
            <p className="contact-section__body">{c.intro.body}</p>

            <div className="contact-info">
              <h3>{c.infoLabel}</h3>
              <dl>
                <div><dt>{c.emailLabel}</dt><dd><bdi dir="ltr">{c.emailValue}</bdi></dd></div>
                <div><dt>{c.phoneLabel}</dt><dd><bdi dir="ltr">{c.phoneValue}</bdi></dd></div>
                <div><dt>{c.locationLabel}</dt><dd>{c.locationValue}</dd></div>
                <div><dt>{c.hoursLabel}</dt><dd>{c.hoursValue}</dd></div>
              </dl>
              <p className="contact-info__note">{c.infoNote}</p>
            </div>
          </Reveal>

          <Reveal className="contact-section__form" delay={100}>
            <div className="form-shell">
              <div className="form-shell__head">
                <h2>{c.formLabel}</h2>
                <span>{t.common.phase}</span>
              </div>

              {status === 'demo' ? (
                <div className="contact-demo" role="status" aria-live="polite" tabIndex={-1} ref={demoRef}>
                  <span className="contact-demo__badge">{c.demoBadge}</span>
                  <span className="contact-demo__icon"><CheckIcon size={28} /></span>
                  <h3>{c.demoTitle}</h3>
                  <p>{c.demoBody}</p>
                  <ActionButton variant="outline" onClick={() => setStatus('idle')}>
                    {c.demoEdit}
                  </ActionButton>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__grid">
                    <Field id="name" label={c.fields.name} error={errors.name}>
                      <input
                        id="field-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={update('name')}
                        placeholder={c.placeholders.name}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={describedBy('name')}
                      />
                    </Field>

                    <Field id="company" label={c.fields.company} optional={c.fields.optional}>
                      <input
                        id="field-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={update('company')}
                        placeholder={c.placeholders.company}
                      />
                    </Field>

                    <Field id="email" label={c.fields.email} error={errors.email}>
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={update('email')}
                        placeholder={c.placeholders.email}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={describedBy('email')}
                      />
                    </Field>

                    <Field id="phone" label={c.fields.phone} optional={c.fields.optional} error={errors.phone}>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={update('phone')}
                        placeholder={c.placeholders.phone}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={describedBy('phone')}
                      />
                    </Field>

                    <Field id="service" label={c.fields.service} error={errors.service}>
                      <select
                        id="field-service"
                        name="service"
                        required
                        value={values.service}
                        onChange={update('service')}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={describedBy('service')}
                      >
                        <option value="">{c.fields.selectService}</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.id}>{L(service.title)}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="budget" label={c.fields.budget} optional={c.fields.optional}>
                      <select
                        id="field-budget"
                        name="budget"
                        value={values.budget}
                        onChange={update('budget')}
                      >
                        <option value="">{c.fields.selectBudget}</option>
                        {c.budgets.map((budget, index) => (
                          <option key={budget} value={String(index)}>{budget}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="message" label={c.fields.message} error={errors.message}>
                      <textarea
                        id="field-message"
                        name="message"
                        rows={5}
                        required
                        value={values.message}
                        onChange={update('message')}
                        placeholder={c.placeholders.message}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={describedBy('message')}
                      />
                    </Field>
                  </div>

                  <p className="contact-form__prototype"><span aria-hidden="true">i</span>{c.prototypeNote}</p>

                  <div className="contact-form__actions">
                    <ActionButton variant="primary" size="lg" type="submit">
                      {c.submit}
                    </ActionButton>
                    <p>{c.demoBadge}</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
