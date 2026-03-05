import { getCategories as fetchCategories } from "./api";
import type { Category } from "@/types/categories";

export async function getCategories(): Promise<Category[]> {
  return fetchCategories();
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  const categories = await fetchCategories();
  for (const cat of categories) {
    if (cat.slug === slug) return cat;
    const sub = cat.subCategories?.find((s) => s.slug === slug);
    if (sub) return sub;
  }
  return null;
}

export async function getCategorySlugs(): Promise<string[]> {
  const categories = await fetchCategories();
  return categories.flatMap((c) => [
    c.slug,
    ...c.subCategories.map((s) => s.slug),
  ]);
}
