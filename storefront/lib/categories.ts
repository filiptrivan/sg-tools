import type { Category } from "@/types/categories";

const CATEGORIES: Category[] = [
  { slug: "elektricni-alati", image: "/categories/electric.jpg" },
  { slug: "rucni-alati", image: "/categories/hand-tools.jpg" },
  { slug: "brusilice", image: "/categories/grinder.jpg" },
  { slug: "dijamantske-ploce-za-keramiku", image: "/categories/diamond.jpg" },
];

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export async function getCategorySlugs(): Promise<string[]> {
  return CATEGORIES.map((c) => c.slug);
}
