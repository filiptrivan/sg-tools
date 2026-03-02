import { Link } from "@/i18n/navigation";
import type { Product } from "@/types/products";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import ProductCard from "./product-card";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = async ({ products }: ProductGridProps) => {
  const t = await getTranslations("categoryPage");

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/products/categories"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          {t("backToCategories")}
        </Link>
        <span className="text-sm text-muted-foreground">
          {t("productsFound", { count: products.length })}
        </span>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium">{t("noProducts")}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {t("noProductsDescription")}
          </p>
          <Link
            href="/products/categories"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="size-4" />
            {t("backToCategories")}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              buyLabel={t("buyOnline")}
              outOfStockLabel={t("outOfStock")}
              discountLabel={t("discount")}
              currency={t("currency")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
