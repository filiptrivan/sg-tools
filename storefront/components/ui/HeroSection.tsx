import { HeroSection } from "./HeroComponent";

import { heroData1, heroData2 } from "@/constants/about-hero-data";

const HeroSectionDemo = () => {
  return (
    <>
      <HeroSection
        title={heroData1.title}
        subtitle={heroData1.subtitle}
        images={heroData1.images}
        textClass="lg:items-start lg:text-left"
      />
      <HeroSection
        textClass="lg:order-2 lg:text-right lg:items-end"
        imagesClass="lg:order-1 "
        title={heroData2.title}
        subtitle={heroData2.subtitle}
        images={heroData2.images}
      />
    </>
  );
};

export default HeroSectionDemo;
