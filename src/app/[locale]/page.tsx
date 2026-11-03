import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA, Eyebrow, FeaturedProject, ServiceGrid } from '@/components/Content';
import { copy } from '@/lib/copy';
import { pageMetadata } from '@/lib/seo';
import { isLocale, site, type Locale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params; if (!isLocale(raw)) return {};
  const ar = raw === 'ar';
  const title = ar ? 'الكيان للتسويق | علامة أوضح وحكاية تستحق أن تُروى' : 'Al Kayan Marketing | A clearer brand. A story worth telling.';
  const description = ar ? 'شريكك الإبداعي والاستراتيجي لبناء العلامات والتسويق الرقمي في السعودية والأسواق العربية.' : 'A creative and strategic marketing partner for brand building and digital marketing in Saudi Arabia and across Arab markets.';
  return pageMetadata(raw, '', title, description);
}
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw as Locale; const t = copy[locale];
  const schema = { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, parentOrganization: { '@type': 'Organization', name: site.parent }, ...(site.url ? { url: site.url } : {}), description: locale === 'ar' ? 'شريك إبداعي واستراتيجي لبناء العلامات والتسويق.' : 'A creative and strategic partner for brand building and marketing.', ...(site.email ? { email: site.email } : {}) };
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}/>
    <section className="hero"><div className="hero-grid container"><div className="hero-copy"><Eyebrow>{t.heroEyebrow}</Eyebrow><h1 className="display">{t.heroTitle}</h1><p className="hero-body">{t.heroBody}</p><div className="hero-actions"><Link className="button button-dark" href={`/${locale}/contact`}>{t.start}<span aria-hidden="true">↗</span></Link><Link className="text-link" href={`/${locale}/services`}>{t.explore}<span aria-hidden="true">↗</span></Link></div><div className="hero-footnote"><span className="footnote-line"/>{t.heroNote}</div></div>
      <div className="hero-art" aria-hidden="true"><div className="hero-art-grid"/><div className="hero-ring hero-ring-one"/><div className="hero-ring hero-ring-two"/><div className="hero-block hero-block-a"/><div className="hero-block hero-block-b"/><div className="hero-slab"><div className="slab-inner"><span>01</span><i/></div></div><div className="hero-orbit-label">STRATEGY<br/>MEETS<br/>STORY</div><span className="hero-coordinate">STORY / 01<br/>STRATEGY / 02</span><span className="hero-art-index">01 / 04</span></div>
    </div><div className="hero-bottom container"><span>EST. IN INTENTION</span><span className="hero-bottom-center">{locale === 'ar' ? 'من الفكرة إلى الأثر' : 'From insight to impact'}</span><span>SAUDI ARABIA · ARAB MARKETS</span></div></section>
    <section className="intro-section section-padding"><div className="container intro-grid"><div><Eyebrow>{t.introKicker}</Eyebrow><h2 className="display section-title">{t.introTitle}</h2></div><div className="intro-detail"><span className="intro-mark" aria-hidden="true">✳</span><p>{t.introBody}</p><Link className="text-link" href={`/${locale}/about`}>{t.introLink}<span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="services-section section-padding"><div className="container"><div className="section-heading-row"><div><Eyebrow>{t.servicesKicker}</Eyebrow><h2 className="display section-title">{t.servicesTitle}</h2></div><Link className="text-link section-side-link" href={`/${locale}/services`}>{t.allServices}<span aria-hidden="true">↗</span></Link></div><p className="section-description">{t.servicesBody}</p><ServiceGrid locale={locale} featured/></div></section>
    <section className="why-section section-padding"><div className="container why-grid"><div className="why-visual"><div className="why-circle"><span>01</span><i/></div><div className="why-stamp">PURPOSE<br/>IN EVERY<br/>DETAIL</div><span className="why-coordinate">A / K — 01</span></div><div className="why-copy"><Eyebrow>{t.whyKicker}</Eyebrow><h2 className="display section-title">{t.whyTitle}</h2><p className="section-description">{t.whyBody}</p><ul className="reason-list">{t.reasons.map((reason, i) => <li key={reason}><span>0{i + 1}</span>{reason}</li>)}</ul></div></div></section>
    <section className="method-section section-padding"><div className="container"><div className="section-heading-row"><div><Eyebrow>{t.methodKicker}</Eyebrow><h2 className="display section-title">{t.methodTitle}</h2></div><div className="method-side-note">{locale === 'ar' ? 'شراكة مرنة، بهدف واضح.' : 'A flexible partnership, grounded in purpose.'}</div></div><div className="method-steps">{t.steps.map((step) => <article className="method-step" key={step.n}><span className="method-number">{step.n}</span><h3>{step.t}</h3><p>{step.d}</p><span className="step-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>
    <section className="work-section section-padding"><div className="container"><div className="section-heading-row"><div><Eyebrow>{t.workKicker}</Eyebrow><h2 className="display section-title">{t.workTitle}</h2></div><p className="work-note">{t.workBody}</p></div><FeaturedProject locale={locale}/><div className="work-footer-link"><Link className="text-link" href={`/${locale}/work`}>{t.work}<span aria-hidden="true">↗</span></Link></div></div></section>
    <CTA locale={locale}/>
  </main>;
}
