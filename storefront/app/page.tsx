import Categories from "@/components/categories";
import CategoriesSkeleton from "@/components/categories-skeleton";
import Companies from "@/components/companies";
import CTA from "@/components/cta";
import FeaturedProducts from "@/components/featured-products";
import FeaturedProductsSkeleton from "@/components/featured-products-skeleton";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import { STATS } from "@/constants/content";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
      <Features />
      <Stats stats={STATS} />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
