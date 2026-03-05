import Container from "@/components/container";
import CategoryCard from "@/components/products/category-card";
import Wrapper from "@/components/wrapper";
import { getCategories } from "@/lib/categories";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
              Asortiman
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center mt-2 max-w-md">
              Istraži naš širok izbor profesionalnog alata za svaku potrebu.
            </p>
          </div>
        </Container>

        <div className="w-full mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                title={category.name}
                description={category.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;
