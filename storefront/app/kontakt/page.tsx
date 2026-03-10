import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import CTA from "@/components/cta";
import { constructMetaData } from "@/lib/metadata";

export function generateMetadata() {
  return constructMetaData({
    title: "Kontakt",
    description:
      "Kontaktiraj SG Tools — pitanja o alatima, pomoć pri izboru proizvoda ili saradnja. Tu smo da pomognemo.",
    path: "/kontakt",
  });
}

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
