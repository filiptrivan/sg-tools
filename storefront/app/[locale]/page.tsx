import Hero from "@/components/hero";
import Companies from "@/components/companies";
import Features from "@/components/features";
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
      <Features />
      <Stats />
    </div>
  );
};

export default HomePage;
