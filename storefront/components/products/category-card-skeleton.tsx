import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <div className="bg-foreground/5 border border-border/20 rounded-lg lg:rounded-xl overflow-hidden">
      <div className="aspect-[1/2]" />
      <div className="px-2 py-1.5 sm:px-3 sm:py-2">
        <Skeleton className="h-4 sm:h-5 lg:h-6 w-4/5" />
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;
