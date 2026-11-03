import type { MetadataRoute } from 'next';
import { services, project, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  const pages = ['', '/about', '/services', '/work', '/contact', '/privacy'];
  const entries: MetadataRoute.Sitemap = [];
  for (const path of pages) {
    entries.push({ url: `${site.url}/ar${path}`, alternates: { languages: { ar: `${site.url}/ar${path}`, en: `${site.url}/en${path}` } }, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 });
    entries.push({ url: `${site.url}/en${path}`, alternates: { languages: { ar: `${site.url}/ar${path}`, en: `${site.url}/en${path}` } }, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 });
  }
  for (const service of services) for (const locale of ['ar', 'en']) entries.push({ url: `${site.url}/${locale}/services/${service.slug}`, alternates: { languages: { ar: `${site.url}/ar/services/${service.slug}`, en: `${site.url}/en/services/${service.slug}` } }, changeFrequency: 'monthly', priority: 0.6 });
  for (const locale of ['ar', 'en']) entries.push({ url: `${site.url}/${locale}/work/${project.slug}`, alternates: { languages: { ar: `${site.url}/ar/work/${project.slug}`, en: `${site.url}/en/work/${project.slug}` } }, changeFrequency: 'monthly', priority: 0.5 });
  return entries;
}
