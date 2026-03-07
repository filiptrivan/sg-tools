import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import WhereToBuyContent from "@/components/where-to-buy/where-to-buy-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gde kupiti",
  description:
    "Pronađi ovlašćene distributere, prodavnice i servisne centre SG Tools alata širom Srbije.",
  alternates: {
    canonical: "/gde-kupiti",
  },
};

const WhereToBuyPage = () => {
  return (
    <div>
      <HeroHeader
        title="Gde kupiti"
        description="Pronađi ovlašćene distributere, servisne centre i servise van garancije širom Srbije."
      />
      <WhereToBuyContent />
      <CTA />
    </div>
  );
};

export default WhereToBuyPage;
