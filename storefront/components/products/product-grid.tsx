import { Button } from "@/components/ui/button";
import type { Product } from "@/types/products";
import { ArrowLeft, Package } from "lucide-react";
import Link from "next/link";
import ProductCard from "./product-card";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products: productList }: ProductGridProps) => {
  const productsFoundText =
    productList.length === 0
      ? "Nema proizvoda"
      : productList.length === 1
        ? "1 proizvod"
        : `${productList.length} proizvoda`;

  return (
    <div className="w-full">
      {productList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex items-center justify-center size-12 rounded-xl bg-primary/15 border border-primary/30 mb-4">
            <Package className="size-6 text-primary" strokeWidth={1.5} />
          </div>
          <p className="text-lg font-medium">
            Još nema proizvoda u ovoj kategoriji.
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            Proveri ponovo uskoro ili pogledaj druge kategorije.
          </p>
          <Link href="/proizvodi/kategorije" className="mt-6">
            <Button variant="outline" size="sm">
              <ArrowLeft className="size-4" />
              Sve kategorije
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/proizvodi/kategorije"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Sve kategorije
            </Link>
            <span className="text-sm text-muted-foreground">
              {productsFoundText}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
            {productList.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;
