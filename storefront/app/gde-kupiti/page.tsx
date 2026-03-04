import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import WhereToBuyContent from "@/components/where-to-buy/where-to-buy-content";

const WhereToBuyPage = () => {
  return (
    <div className="w-full relative flex flex-col pt-16">
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
