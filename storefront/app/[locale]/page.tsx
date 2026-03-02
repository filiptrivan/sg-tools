import Categories from "@/components/categories";
import Companies from "@/components/companies";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const HomePage = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full relative flex flex-col pt-16">
      <Hero />
      <Companies />
      <Categories />
      <Features />
      <Stats />
      <CTA />
    </div>
  );
};

export default HomePage;
