import AboutContent from "@/components/about-content";
import AboutStory from "@/components/about-story";
import CTA from "@/components/cta";
import HeroHeader from "@/components/hero-header";
import { constructMetaData } from "@/lib/metadata";

export function generateMetadata() {
  return constructMetaData({
    title: "O nama",
    description:
      "Upoznaj SG Tools — brend nastao iz 30 godina iskustva u svetu alata. Profesionalni kvalitet oblikovan stvarnim potrebama majstora.",
    path: "/o-nama",
  });
}

const AboutPage = () => {
  return (
    <div>
      <HeroHeader
        title="O nama"
        description="Upoznaj brend koji je nastao iz iskustva, znanja i potreba onih koji alat koriste svaki dan."
      />
      <AboutStory />
      <AboutContent />
      <CTA />
    </div>
  );
};

export default AboutPage;
