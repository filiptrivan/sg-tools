import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import CTA from "@/components/cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiraj SG Tools — pitanja o alatima, pomoć pri izboru proizvoda ili saradnja. Tu smo da pomognemo.",
  alternates: {
    canonical: "/kontakt",
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <CTA />
    </div>
  );
};

export default ContactPage;
