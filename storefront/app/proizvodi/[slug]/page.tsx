import ProductDetail from "@/components/products/product-detail";
import RelatedProducts from "@/components/products/related-products";
import RelatedProductsSkeleton from "@/components/products/related-products-skeleton";
import SimilarProducts from "@/components/products/similar-products";
import { SectionErrorBoundary } from "@/components/ui/section-error-boundary";
import { getProductBySlug, getSitemapProducts } from "@/lib/api";
import { mapApiBreadcrumbs } from "@/lib/categories";
import { createProductMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getSitemapProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Proizvod nije pronađen" };
  }

  return createProductMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    slug,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const categoryBreadcrumbs = product.categoryBreadcrumbs.length > 0
    ? mapApiBreadcrumbs([product.categoryBreadcrumbs[0]])
    : [];

  const relatedProducts = product.relatedProducts ?? [];
  const relatedProductIds = relatedProducts.map((p) => p.id);

  return (
    <div>
      <ProductDetail
        product={product}
        categoryBreadcrumbs={categoryBreadcrumbs}
      />
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
      {product.categorySlug && (
        <SectionErrorBoundary>
          <Suspense fallback={<RelatedProductsSkeleton />}>
            <SimilarProducts
              categorySlug={product.categorySlug}
              excludeProductIds={[product.id, ...relatedProductIds]}
            />
          </Suspense>
        </SectionErrorBoundary>
      )}
    </div>
  );
}
