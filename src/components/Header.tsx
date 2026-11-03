'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Locale } from '@/lib/site';
import { navigation } from '@/lib/site';
import { copy } from '@/lib/copy';

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[locale];
  const other = locale === 'ar' ? 'en' : 'ar';
  const bits = (pathname || `/${locale}`).split('/').filter(Boolean);
  const localizedPath = `/${other}${bits.length > 1 ? `/${bits.slice(1).join('/')}` : ''}`;
  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <header className="site-header">
      <div className="header-inner">
        <Link href={`/${locale}`} className="wordmark" aria-label={locale === 'ar' ? 'الكيان للتسويق - الرئيسية' : 'AL KAYAN MARKETING home'}>
          <span className="wordmark-main">AL KAYAN</span><span className="wordmark-sub">MARKETING</span>
        </Link>
        <nav className={`primary-nav ${open ? 'is-open' : ''}`} aria-label={locale === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}>
          {navigation[locale].map((item) => { const href = `/${locale}${item.href}`; return <Link key={item.href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>; })}
        </nav>
        <div className="header-actions">
          <Link className="language-switch" href={localizedPath} lang={other} hrefLang={other}>{t.language}</Link>
          <Link className="button button-small button-dark header-cta" href={`/${locale}/contact`}>{t.start}<span aria-hidden="true">↗</span></Link>
          <button className={`menu-toggle ${open ? 'active' : ''}`} aria-label={open ? (locale === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (locale === 'ar' ? 'فتح القائمة' : 'Open menu')} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
        </div>
      </div>
    </header>
  </>;
}
