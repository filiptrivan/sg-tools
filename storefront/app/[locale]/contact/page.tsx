import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import CTA from "@/components/cta";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const ContactPage = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full relative flex flex-col pt-16">
      <ContactHero />
      <ContactForm />
      <CTA />
    </div>
  );
};

export default ContactPage;
