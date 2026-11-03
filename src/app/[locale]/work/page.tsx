import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, FeaturedProject, PageHero } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/site';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const t = copy[locale]; return pageMetadata(locale, '/work', t.portfolio, t.workLead); }
export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const t = copy[locale]; return <main id="main"><PageHero locale={locale} eyebrow={t.portfolio} title={t.workTitlePage} lead={t.workLead}/><section className="work-section section-padding"><div className="container"><div className="concept-disclaimer"><span aria-hidden="true">✳</span><p>{t.workBody}</p></div><FeaturedProject locale={locale}/></div></section><CTA locale={locale}/></main>; }
