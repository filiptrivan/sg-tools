import { MetadataRoute } from 'next';

const baseUrl = 'https://sgtools.rs';
const locales = ['en', 'sr'] as const;

type Page = {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const pages: Page[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/where-to-buy', changeFrequency: 'weekly', priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page.path}`;
      
      const alternates: { languages: Record<string, string> } = {
        languages: {},
      };
      
      for (const altLocale of locales) {
        if (altLocale !== locale) {
          alternates.languages[altLocale] = `${baseUrl}/${altLocale}${page.path}`;
        }
      }

      entries.push({
        url,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      });
    }
  }

  return entries;
}
