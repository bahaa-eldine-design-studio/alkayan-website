import Link from 'next/link';
import { site, type Locale } from '@/lib/site';
import { copy } from '@/lib/copy';

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const wa = site.whatsapp.replace(/\D/g, '');
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  return <footer className="site-footer">
    <div className="footer-top">
      <div className="footer-brand"><Link href={`/${locale}`} className="wordmark footer-wordmark"><span className="wordmark-main">AL KAYAN</span><span className="wordmark-sub">MARKETING</span></Link><p>{t.footerText}</p></div>
      <div className="footer-column"><h2>{t.footerNav}</h2><Link href={`/${locale}/about`}>{t.about}</Link><Link href={`/${locale}/services`}>{t.services}</Link><Link href={`/${locale}/work`}>{t.portfolio}</Link></div>
      <div className="footer-column"><h2>{t.footerContact}</h2><Link href={`/${locale}/contact`}>{t.talk} <span aria-hidden="true">↗</span></Link>{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}{site.phone && <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>{site.phone}</a>}{wa.length >= 8 && wa.length <= 15 && <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">WhatsApp ↗</a>}{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name} ↗</a>)}</div>
      <div className="footer-note"><span className="footer-dot"/><p>{t.locationNote}</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. {t.rights}</span><Link href={`/${locale}/privacy`}>{t.privacy}</Link><span className="parent-note">{site.parent}</span></div>
  </footer>;
}
