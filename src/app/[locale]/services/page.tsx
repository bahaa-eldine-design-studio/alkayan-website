import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, PageHero, ServiceGrid } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/site';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const t = copy[locale]; return pageMetadata(locale, '/services', t.services, t.servicesLead); }
export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const t = copy[locale]; return <main id="main"><PageHero locale={locale} eyebrow={t.services} title={t.servicesTitlePage} lead={t.servicesLead}/><section className="services-section section-padding"><div className="container"><ServiceGrid locale={locale}/></div></section><CTA locale={locale}/></main>; }
