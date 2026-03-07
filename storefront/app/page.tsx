import Categories from "@/components/categories";
import Companies from "@/components/companies";
import CTA from "@/components/cta";
import FeaturedProducts from "@/components/featured-products";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <FeaturedProducts />
      <Categories />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
