import AboutContent from "@/components/about-content";
import AboutStory from "@/components/about-story";
import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import HeroSectionDemo from "@/components/ui/HeroSection";
import OurValues from "@/components/ui/OurValuesComp";
import VerticalTimeLine from "@/components/VerticalTimeLine";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Upoznaj SG Tools — brend nastao iz 30 godina iskustva u svetu alata. Profesionalni kvalitet oblikovan stvarnim potrebama majstora.",
  alternates: {
    canonical: "/o-nama",
  },
};

const AboutPage = () => {
  return (
    <div>
      <HeroSectionDemo />

      <VerticalTimeLine />
      <OurValues
        sectionTitle="Our Values"
        sectionSubtitle="A suite of powerful features engineered to deliver speed, security, and scalability."
      />
      <CTA />
    </div>
  );
};

export default AboutPage;
