import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Eyebrow, PageHero } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return pageMetadata(locale, '/about', copy[locale].about, copy[locale].aboutLead); }
export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const t = copy[locale];
  return <main id="main"><PageHero locale={locale} eyebrow={t.about} title={t.aboutTitle} lead={t.aboutLead}/>
    <section className="philosophy-section section-padding"><div className="container philosophy-grid"><div><Eyebrow>{t.introKicker}</Eyebrow><h2 className="display section-title">{t.philosophyTitle}</h2></div><div className="philosophy-body"><span className="philosophy-glyph" aria-hidden="true">“</span><p>{t.philosophyBody}</p></div></div></section>
    <section className="mission-section section-padding"><div className="container mission-grid"><article><span className="mission-index">01 / {t.missionLabel}</span><h2>{t.missionLabel}</h2><p>{t.mission}</p></article><article><span className="mission-index">02 / {t.visionLabel}</span><h2>{t.visionLabel}</h2><p>{t.vision}</p></article></div></section>
    <section className="values-section section-padding"><div className="container"><Eyebrow>{t.valuesLabel}</Eyebrow><h2 className="display section-title">{locale === 'ar' ? 'مبادئ تقود\nكل شراكة.' : 'Principles behind\nevery partnership.'}</h2><div className="values-grid">{t.values.map((v, i) => <article className="value-card" key={v.t}><span>0{i + 1}</span><h3>{v.t}</h3><p>{v.d}</p></article>)}</div></div></section>
    <section className="about-partnership section-padding"><div className="container philosophy-grid"><div><Eyebrow>{t.about}</Eyebrow><h2 className="display section-title">{t.aboutPartnerTitle}</h2></div><p className="partnership-copy">{t.aboutPartnerBody}</p></div></section>
    <section className="method-section section-padding"><div className="container"><div><Eyebrow>{t.methodKicker}</Eyebrow><h2 className="display section-title">{t.methodTitle}</h2></div><div className="method-steps">{t.steps.map((step) => <article className="method-step" key={step.n}><span className="method-number">{step.n}</span><h3>{step.t}</h3><p>{step.d}</p><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>
    <CTA locale={locale}/>
  </main>;
}
