import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA, Eyebrow } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, type Locale } from '@/lib/site';
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return pageMetadata(locale, '/privacy', copy[locale].privacy, copy[locale].privacyBody); }
export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const t = copy[locale]; return <main id="main"><section className="policy-section section-padding"><div className="container policy-content"><Eyebrow>{locale === 'ar' ? 'معلومات قانونية' : 'Legal information'}</Eyebrow><h1 className="display page-title">{t.privacyTitle}</h1><p className="page-lead">{t.privacyBody}</p><p className="policy-updated">{locale === 'ar' ? 'للاستفسارات حول الخصوصية، يرجى استخدام نموذج التواصل.' : 'For privacy questions, please use the contact form.'}</p></div></section><CTA locale={locale}/></main>; }
