import Wrapper from "@/components/wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti SG Tools — kako prikupljamo, koristimo i štitimo tvoje podatke.",
  alternates: {
    canonical: "/politika-privatnosti",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <Wrapper className="py-24">
      <h1 className="text-3xl font-heading font-bold">
        Politika privatnosti
      </h1>
      <p className="mt-6 text-muted-foreground max-w-2xl">
        Sadržaj ove stranice je trenutno u pripremi. Uskoro ćemo objaviti
        kompletnu politiku privatnosti. Ukoliko imaš pitanja, kontaktiraj nas
        putem stranice{" "}
        <a href="/kontakt" className="text-primary hover:underline">
          Kontakt
        </a>
        .
      </p>
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
