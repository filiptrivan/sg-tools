import HeroHeader from "@/components/hero-header";
import Faq from "@/components/faq";
import CTA from "@/components/cta";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const FaqPage = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("faqPage");

  return (
    <div className="w-full relative flex flex-col pt-16">
      <HeroHeader title={t("title")} description={t("description")} />
      <Faq />
      <CTA />
    </div>
  );
};

export default FaqPage;
