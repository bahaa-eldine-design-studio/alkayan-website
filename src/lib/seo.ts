import type { Metadata } from 'next';
import type { Locale } from '@/lib/site';
import { site } from '@/lib/site';

export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = `/${locale}${path}`;
  const image = `/${locale}/opengraph-image`;
  const localeTag = locale === 'ar' ? 'ar_SA' : 'en_US';
  return {
    title,
    description,
    alternates: { canonical: url, languages: { ar: `/ar${path}`, en: `/en${path}`, 'x-default': `/ar${path}` } },
    openGraph: { title, description, url, siteName: site.name, locale: localeTag, type: 'website', ...(site.url ? { images: [image] } : {}) },
    twitter: { card: site.url ? 'summary_large_image' : 'summary', title, description, ...(site.url ? { images: [image] } : {}) },
  };
}
