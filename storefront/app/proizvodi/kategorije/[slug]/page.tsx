import HeroHeader from "@/components/hero-header";
import { ListingPagination } from "@/components/products/listing-pagination";
import PageBreadcrumbs from "@/components/products/page-breadcrumbs";
import ProductGrid from "@/components/products/product-grid";
import { SectionErrorBoundary } from "@/components/ui/section-error-boundary";
import Wrapper from "@/components/wrapper";
import { PRODUCTS_PER_PAGE } from "@/constants/cache-tags";
import {
  getCategoryBySlug,
  getFilteredProductsByCategory,
  getSitemapCategories,
} from "@/lib/api";
import { buildBreadcrumbJsonLd, mapApiBreadcrumbs } from "@/lib/categories";
import { createCategoryMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ strana?: string }>;
};

export async function generateStaticParams() {
  const categories = await getSitemapCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { strana } = await searchParams;
  const currentPage = Math.max(1, parseInt(strana ?? "1", 10) || 1);

  const category = await getCategoryBySlug(slug);
  if (!category) return { title: "Kategorija nije pronađena" };

  return createCategoryMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    slug,
    currentPage,
  });
}

async function CategoryProducts({
  slug,
  searchParams,
}: {
  slug: string;
  searchParams: Promise<{ strana?: string }>;
}) {
  const { strana } = await searchParams;
  const currentPage = Math.max(1, parseInt(strana ?? "1", 10) || 1);
  const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const products = await getFilteredProductsByCategory(
    slug,
    offset,
    PRODUCTS_PER_PAGE,
  );

  const totalPages = Math.ceil(products.totalRecords / PRODUCTS_PER_PAGE);
  if (totalPages > 0 && currentPage > totalPages) {
    redirect(`/proizvodi/kategorije/${slug}`);
  }

  return (
    <>
      <ProductGrid
        products={products.data}
        totalRecords={products.totalRecords}
      />
      <Suspense>
        <ListingPagination
          currentPage={currentPage}
          totalRecords={products.totalRecords}
          pageSize={PRODUCTS_PER_PAGE}
        />
      </Suspense>
    </>
  );
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const allSegments = mapApiBreadcrumbs(category.categoryBreadcrumbs);
  const ancestorSegments = allSegments.slice(0, -1);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(allSegments);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HeroHeader
        title={category.name}
        description={category.metaDescription}
      />

      <Wrapper className="pb-16">
        <PageBreadcrumbs
          segments={ancestorSegments}
          currentPage={category.name}
        />
        <SectionErrorBoundary>
          <Suspense>
            <CategoryProducts slug={slug} searchParams={searchParams} />
          </Suspense>
        </SectionErrorBoundary>

        {category.description && (
          <section className="mt-16 border-t border-border pt-10">
            <h2 className="text-xl font-semibold mb-4">Opis kategorije</h2>
            <div
              className="prose prose-invert max-w-full whitespace-pre-line prose-p:text-neutral-400 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: category.description }}
            />
          </section>
        )}
      </Wrapper>
    </div>
  );
}
