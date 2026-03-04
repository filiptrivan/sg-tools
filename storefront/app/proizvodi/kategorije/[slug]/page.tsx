import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import ProductGrid from "@/components/products/product-grid";
import Wrapper from "@/components/wrapper";
import { CATEGORIES } from "@/constants/content";
import { getProductsByCategory } from "@/lib/api";
import {
  getCategories,
  getCategoryBySlug,
  getCategorySlugs,
} from "@/lib/categories";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const categories = await getCategories();
  const categoryIndex = categories.findIndex((c) => c.slug === slug);
  const categoryName =
    categoryIndex >= 0 ? CATEGORIES[categoryIndex].title : slug;
  const categoryDesc =
    categoryIndex >= 0 ? CATEGORIES[categoryIndex].desc : "";

  const categoryProducts = await getProductsByCategory(slug, "sr");

  return (
    <div className="w-full relative flex flex-col pt-16">
      <HeroHeader title={categoryName} description={categoryDesc} />

      <Wrapper className="pb-16">
        <ProductGrid products={categoryProducts} />
      </Wrapper>

      <CTA />
    </div>
  );
};

export default CategoryPage;
