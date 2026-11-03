import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { copy } from '@/lib/copy';
import { isLocale, languages, site, type Locale } from '@/lib/site';

export function generateStaticParams() { return languages.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const title = locale === 'ar' ? 'الكيان للتسويق | نبني علامتك ونروي قصتها' : 'Al Kayan Marketing | Build your brand. Sell the story.';
  const description = locale === 'ar' ? 'شريك إبداعي واستراتيجي يساعد الأعمال على بناء علامات أقوى وحضور رقمي أكثر وضوحاً في السعودية والأسواق العربية.' : 'A creative and strategic marketing partner helping businesses build stronger brands and a clearer digital presence in Saudi Arabia and across Arab markets.';
  return {
    title, description,
    alternates: { canonical: `/${locale}`, languages: { ar: '/ar', en: '/en', 'x-default': '/ar' } },
    openGraph: { title, description, url: `/${locale}`, siteName: site.name, locale: locale === 'ar' ? 'ar_SA' : 'en_US', type: 'website', ...(site.url ? { images: [`/${locale}/opengraph-image`] } : {}) },
    twitter: { card: site.url ? 'summary_large_image' : 'summary', title, description, ...(site.url ? { images: [`/${locale}/opengraph-image`] } : {}) },
  };
}
export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  return <div lang={locale} dir={copy[locale].dir} className={`site-shell locale-${locale}`}><Header locale={locale}/>{children}<Footer locale={locale}/></div>;
}
