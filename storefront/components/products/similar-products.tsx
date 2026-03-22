import Wrapper from "@/components/wrapper";
import { getProductsByCategory } from "@/lib/api";
import ProductCard from "./product-card";

interface SimilarProductsProps {
  categorySlug: string;
  excludeProductIds: number[];
}

const SimilarProducts = async ({
  categorySlug,
  excludeProductIds,
}: SimilarProductsProps) => {
  let products = await getProductsByCategory(categorySlug, 0, 4 + excludeProductIds.length);
  products = products.filter((p) => !excludeProductIds.includes(p.id)).slice(0, 4);

  if (products.length === 0) return null;

  return (
    <Wrapper className="pb-8 lg:pb-12">
      <div className="mt-12 lg:mt-16">
        <h2 className="text-xl font-bold mb-6">Slični proizvodi</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SimilarProducts;
