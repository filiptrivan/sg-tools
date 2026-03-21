import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeleton = () => {
  return (
    <div className="relative bg-foreground/5 border border-border/20 rounded-lg lg:rounded-xl overflow-hidden aspect-[1/2]">
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-2 pb-2 pt-10 sm:px-3 sm:pb-3 sm:pt-14">
        <Skeleton className="h-4 sm:h-5 lg:h-6 w-4/5" />
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;
