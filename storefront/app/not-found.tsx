import BtnGoBack from "@/components/btn-go-back";
import Container from "@/components/container";
import HeroHeader from "@/components/hero-header";
import { Button } from "@/components/ui/button";
import { ArrowLeftToLine } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Stranica nije pronađena!",
    description:
      "Nismo uspjeli pronaći stranicu koju ste tražili. Provjerite URL da biste bili sigurni da je ispravan i pokušajte ponovo.",
  };
}

async function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative">
        <HeroHeader
          title="Stranica nije pronađena!"
          description="Nismo uspjeli pronaći stranicu koju ste tražili. Provjerite URL da biste bili sigurni da je ispravan i pokušajte ponovo."
        >
          <Container delay={0.3}>
            <div className="flex gap-3 mt-6">
              <BtnGoBack />
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeftToLine className="size-4" />
                  Povratak na početnu stranicu
                </Link>
              </Button>
            </div>
          </Container>
        </HeroHeader>
      </div>
    </div>
  );
}

export default NotFound;
