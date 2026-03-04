import CTA from "@/components/cta";
import ProductDetail from "@/components/products/product-detail";
import {
  getProductBySlug,
  getProducts,
  getProductsByCategory,
} from "@/lib/api";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const allProducts = await getProducts();
    return allProducts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug, "sr");

  if (!product) {
    return {};
  }

  return {
    title:
      product.seo?.title_tag || `${product.title} | SG Tools`,
    description: product.seo?.description || product.description,
    openGraph: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.description,
      images: [{ url: product.seo?.image || product.poster_url }].filter(
        (img) => img.url,
      ),
    },
  };
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug, "sr");
  if (!product) notFound();

  const categorySlug = product.categories?.[0]?.slug || product.category;
  let relatedProducts = categorySlug
    ? await getProductsByCategory(categorySlug, "sr")
    : [];
  relatedProducts = relatedProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="w-full relative flex flex-col pt-16">
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <CTA />
    </div>
  );
};

export default ProductPage;
