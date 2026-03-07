import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description:
    "Uslovi korišćenja sajta SG Tools — pravila i uslovi za korišćenje naših usluga.",
  alternates: {
    canonical: "/uslovi-koriscenja",
  },
};

const TermsPage = () => {
  return (
    <Wrapper className="py-24">
      <h1 className="text-3xl font-heading font-bold">Uslovi korišćenja</h1>
      <p className="mt-6 text-muted-foreground max-w-2xl">
        Sadržaj ove stranice je trenutno u pripremi. Uskoro ćemo objaviti
        kompletne uslove korišćenja. Ukoliko imaš pitanja, kontaktiraj nas
        putem stranice{" "}
        <a href="/kontakt" className="text-primary hover:underline">
          Kontakt
        </a>
        .
      </p>
    </Wrapper>
  );
};

export default TermsPage;
