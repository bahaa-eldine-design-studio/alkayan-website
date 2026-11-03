import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA, Eyebrow } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, services, type Locale } from '@/lib/site';

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const item = services.find((s) => s.slug === slug); if (!item) return {}; return pageMetadata(locale, `/services/${slug}`, item[locale].title, item[locale].short); }
export default async function ServiceDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const service = services.find((s) => s.slug === slug); if (!service) notFound(); const t = copy[locale]; const item = service[locale];
  return <main id="main"><section className="service-detail-hero"><div className="container"><Link className="back-link" href={`/${locale}/services`}>← {t.services}</Link><div className="service-detail-meta"><Eyebrow>{t.services}</Eyebrow><span>{service.number} / 06</span></div><h1 className="display page-title">{item.title}</h1><p className="page-lead">{item.short}</p><p className="proposed-note">{t.proposed}</p></div></section>
    <section className="service-detail-content section-padding"><div className="container service-content-grid"><div className="service-detail-side"><span className="service-icon service-icon-large" aria-hidden="true">{service.icon}</span><p>{locale === 'ar' ? 'الكيان للتسويق' : 'AL KAYAN MARKETING'}</p></div><div className="service-detail-sections"><article><Eyebrow>{t.serviceProblem}</Eyebrow><p>{item.problem}</p></article><article><Eyebrow>{t.serviceApproach}</Eyebrow><p>{item.approach}</p></article><article><Eyebrow>{t.deliverables}</Eyebrow><ul className="deliverables-list">{item.deliverables.map((d) => <li key={d}>{d}</li>)}</ul></article><article className="value-callout"><Eyebrow>{t.value}</Eyebrow><p>{item.value}</p></article><Link className="button button-dark" href={`/${locale}/contact?service=${service.slug}`}>{t.serviceCta}<span aria-hidden="true">↗</span></Link></div></div></section><CTA locale={locale}/></main>;
}
