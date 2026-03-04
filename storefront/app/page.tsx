import Categories from "@/components/categories";
import Companies from "@/components/companies";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col pt-16">
      <Hero />
      <Companies />
      <Categories />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
