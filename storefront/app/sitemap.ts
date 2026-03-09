import type { MetadataRoute } from "next";

import { getSitemapCategories, getSitemapProducts } from "@/lib/api";

const BASE_URL = "https://sgtools.rs";

const staticPages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/o-nama", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/kontakt", changeFrequency: "monthly" as const, priority: 0.6 },
  {
    path: "/cesta-pitanja",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  { path: "/gde-kupiti", changeFrequency: "monthly" as const, priority: 0.7 },
  {
    path: "/proizvodi",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/proizvodi/kategorije",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  // Static pages
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  // Dynamic category pages
  try {
    const categories = await getSitemapCategories();

    for (const category of categories) {
      entries.push({
        url: `${BASE_URL}/proizvodi/kategorije/${category.slug}`,
        lastModified: new Date(category.modifiedAt),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  } catch (error) {
    console.error("Failed to fetch category slugs for sitemap:", error);
  }

  // Dynamic product pages
  try {
    const products = await getSitemapProducts();

    for (const entry of products) {
      entries.push({
        url: `${BASE_URL}/proizvodi/${entry.slug}`,
        lastModified: new Date(entry.modifiedAt),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  } catch (error) {
    console.error("Failed to fetch product slugs for sitemap:", error);
  }

  return entries;
}
