import CTA from "@/components/cta";
import Faq from "@/components/faq";
import HeroHeader from "@/components/hero-header";

const FaqPage = () => {
  return (
    <div className="w-full relative flex flex-col pt-16">
      <HeroHeader
        title="Česta pitanja"
        description="Pronađi odgovore na najčešća pitanja o kupovini, isporuci i garanciji. Ne možeš da pronađeš odgovor? Kontaktiraj naš tim."
      />
      <Faq />
      <CTA />
    </div>
  );
};

export default FaqPage;
