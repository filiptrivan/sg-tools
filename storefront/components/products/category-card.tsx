import Container from "@/components/container";
import type { Category } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
  title: string;
  description: string;
  index: number;
}

const CategoryCard = ({
  category,
  title,
  description,
  index,
}: CategoryCardProps) => {
  return (
    <Container delay={index * 0.1}>
      <Link href={`/proizvodi/kategorije/${category.slug}`}>
        <div className="relative bg-foreground/5 border border-border/20 hover:border-border transition-all cursor-pointer rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={category.image}
            alt={title}
            width={500}
            height={1000}
            className="object-contain w-full"
          />
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex flex-col mt-auto pt-4">
            <span className="text-base lg:text-xl font-semibold">{title}</span>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default CategoryCard;
