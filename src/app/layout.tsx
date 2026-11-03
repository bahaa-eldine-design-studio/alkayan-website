import type { Metadata } from 'next';
import './globals.css';
import '@fontsource-variable/manrope';
import '@fontsource-variable/ibm-plex-sans';
import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import { headers } from 'next/headers';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: site.name, template: `%s | ${site.name}` },
  description: 'A strategic and creative marketing partner for ambitious brands in Saudi Arabia and across Arab markets.',
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = (await headers()).get('x-site-locale') === 'en' ? 'en' : 'ar';
  return <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}><body>{children}</body></html>;
}
