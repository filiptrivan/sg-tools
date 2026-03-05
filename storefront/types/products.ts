export interface Product {
  id: number;
  defaultProductVariantId: number;
  title: string;
  description: string;
  slug: string;
  htmlDescription: string;
  specification: string | null;
  countryName: string | null;
  metaTitle: string;
  metaDescription: string;
  displayPrice: number;
  originalPrice: number | null;
  discountPercentage: number | null;
  hasDiscount: boolean;
  imageUrl: string;
  brandName: string;
  brandSlug: string;
  inStock: boolean;
  tags: { name: string; color: string; orderNumber: number }[];
  categoryName: string;
  categorySlug: string;
  productImageUrls: string[];
  averageRating: number | null;
  reviewCount: number;
  maxOrderQuantity: number | null;
  ogImageUrl: string | null;
}

export interface ProductsResult {
  data: Product[];
  totalRecords: number;
}

export interface SitemapEntry {
  slug: string;
  modifiedAt: string;
}
