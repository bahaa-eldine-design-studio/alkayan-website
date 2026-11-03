import Link from 'next/link';
import type { Locale } from '@/lib/site';
import { copy } from '@/lib/copy';
import { services, project } from '@/lib/site';

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span className="eyebrow-line"/>{children}</div>; }
export function PageHero({ locale, eyebrow, title, lead }: { locale: Locale; eyebrow: string; title: string; lead?: string }) { return <section className="page-hero"><div className="container page-hero-inner"><Eyebrow>{eyebrow}</Eyebrow><h1 className="display page-title">{title}</h1>{lead && <p className="page-lead">{lead}</p>}<span className="page-index">{locale === 'ar' ? 'استراتيجية × إبداع' : 'Strategy × Creativity'}</span></div></section>; }
export function ServiceGrid({ locale, featured = false }: { locale: Locale; featured?: boolean }) {
  const t = copy[locale];
  return <><p className="proposed-note">{t.proposed}</p><div className={`service-grid${featured ? ' service-grid-featured' : ''}`}>{services.slice(0, featured ? 4 : undefined).map((service) => {
    const text = service[locale];
    return <Link className="service-card" href={`/${locale}/services/${service.slug}`} key={service.slug}>
      <div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div>
      <h3>{text.title}</h3><p>{text.short}</p><span className="card-arrow" aria-hidden="true">↗</span>
    </Link>;
  })}</div></>;
}
export function ProjectArtwork({ compact = false, locale }: { compact?: boolean; locale: Locale }) { return <div className={`project-art${compact ? ' project-art-compact' : ''}`} role="img" aria-label={locale === 'ar' ? 'عمل بصري مفاهيمي بألوان الحجر الجيري والنحاس والبني الداكن' : 'Conceptual identity artwork in limestone, copper and espresso tones'}><div className="art-sun"/><div className="art-arch art-arch-back"/><div className="art-arch art-arch-front"/><div className="art-block art-block-one"/><div className="art-block art-block-two"/><div className="art-grain"/><span className="art-caption">FORM / 01</span></div>; }
export function FeaturedProject({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <Link className="featured-project" href={`/${locale}/work/${project.slug}`}>
    <ProjectArtwork locale={locale}/><div className="featured-project-copy"><span className="project-category">{project.category[locale]}</span><h3>{project.title[locale]}</h3><p>{project.summary[locale]}</p><span className="text-link">{t.seeCase}<span aria-hidden="true">↗</span></span></div>
  </Link>;
}
export function CTA({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section className="cta-band"><div className="cta-ornament" aria-hidden="true"><span/><span/><span/></div><div className="container cta-content"><Eyebrow light>{t.ctaKicker}</Eyebrow><h2 className="display">{t.ctaTitle}</h2><p>{t.ctaBody}</p><Link className="button button-light" href={`/${locale}/contact`}>{t.talk}<span aria-hidden="true">↗</span></Link></div></section>;
}
