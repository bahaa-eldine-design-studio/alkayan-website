import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Eyebrow, ProjectArtwork } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, project, type Locale } from '@/lib/site';
export function generateStaticParams() { return [{ slug: project.slug }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale) || slug !== project.slug) return {}; return pageMetadata(locale, `/work/${slug}`, project.title[locale], project.summary[locale]); }
export default async function CaseStudy({ params }: { params: Promise<{ locale: string; slug: string }> }) { const { locale: raw, slug } = await params; if (!isLocale(raw) || slug !== project.slug) notFound(); const locale = raw as Locale; const t = copy[locale]; return <main id="main"><section className="case-hero"><div className="container"><Eyebrow>{project.category[locale]}</Eyebrow><h1 className="display page-title">{project.title[locale]}</h1><p className="page-lead">{project.summary[locale]}</p><div className="case-badge">{t.conceptLabel}</div></div></section><div className="container case-art"><ProjectArtwork locale={locale}/></div><section className="case-details section-padding"><div className="container case-detail-grid"><div><Eyebrow>{t.projectObjective}</Eyebrow><p>{project.objective[locale]}</p></div><div><Eyebrow>{t.projectOutputs}</Eyebrow><ul className="deliverables-list">{project.output[locale].map((item) => <li key={item}>{item}</li>)}</ul></div></div><p className="case-disclaimer">{project.brief[locale]}</p></section><CTA locale={locale}/></main>; }
