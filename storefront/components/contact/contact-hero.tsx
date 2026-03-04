import { CONTACT_CARDS } from "@/constants";
import Container from "../container";
import HeroHeader from "../hero-header";
import { getTranslations } from "next-intl/server";

const ContactHero = async () => {
  const t = await getTranslations("contact");

  return (
    <HeroHeader title={t("heroTitle")} description={t("heroDescription")}>
      <Container delay={0.3} className="w-full">
        <div className="flex flex-col md:flex-row justify-center gap-6 w-full mt-10">
          {CONTACT_CARDS.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0A0A0A] border border-border/50"
            >
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <card.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{t(card.titleKey)}</h3>
              <p className="text-sm text-muted-foreground mt-1">{card.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </HeroHeader>
  );
};

export default ContactHero;
