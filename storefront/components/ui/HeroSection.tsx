import { HeroSection } from "./HeroComponent";

import { heroData } from "@/constants/about-hero-data";
const HeroSectionDemo = () => {
  return (
    <HeroSection
      title={heroData.title}
      subtitle={heroData.subtitle}
      //   actions={heroData.actions}
      stats={heroData.stats}
      images={heroData.images}
    />
  );
};

export default HeroSectionDemo;
