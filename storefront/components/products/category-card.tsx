import type { Category } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/proizvodi/kategorije/${category.slug}`}>
      <div className="bg-foreground/5 border border-border/20 hover:border-border transition-all cursor-pointer rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={500}
            height={1000}
            className="object-contain w-full"
          />
          <div className="px-2 py-1.5 sm:px-3 sm:py-2">
            <span className="text-xs sm:text-sm lg:text-base font-semibold line-clamp-2">
              {category.name}
            </span>
          </div>
        </div>
    </Link>
  );
};

export default CategoryCard;
