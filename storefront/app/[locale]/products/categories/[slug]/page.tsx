import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import ProductGrid from "@/components/products/product-grid";
import Wrapper from "@/components/wrapper";
import { getProductsByCategory } from "@/lib/api";
import {
  getCategories,
  getCategoryBySlug,
  getCategorySlugs,
} from "@/lib/categories";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

const CategoryPage = async ({ params }: Props) => {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const tList = await getTranslations("categoriesList");
  const items = tList.raw("items") as Array<{ title: string; desc: string }>;

  const categories = await getCategories();
  const categoryIndex = categories.findIndex((c) => c.slug === slug);
  const categoryName = categoryIndex >= 0 ? items[categoryIndex].title : slug;
  const categoryDesc = categoryIndex >= 0 ? items[categoryIndex].desc : "";

  const products = await getProductsByCategory(slug, locale);

  return (
    <div className="w-full relative flex flex-col pt-16">
      <HeroHeader title={categoryName} description={categoryDesc} />

      <Wrapper className="pb-16">
        <ProductGrid products={products} />
      </Wrapper>

      <CTA />
    </div>
  );
};

export default CategoryPage;
