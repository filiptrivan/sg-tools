import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { base, heading } from "@/constants/fonts";
import { pick } from "@/lib/pick";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();

  return {
    title: t("not-found.title"),
    description: t("not-found.description"),
  };
}

async function NotFound() {
  const messages = await getMessages();
  const t = await getTranslations();

  return (
    <html>
      <body
        className={cn(
          "min-h-screen text-foreground font-base antialiased dark",
          base.variable,
          heading.variable,
        )}
      >
        <NextIntlClientProvider
          messages={pick(messages, ["nav", "languageSwitcher", "not-found"])}
        >
          <Navbar />

          <main>
            <Wrapper className="py-16 sm:py-24 ">
              <div className="h-[50vh] flex flex-col items-center justify-center w-full z-10">
                <Container delay={0.1}>
                  <h2 className="text-balance leading-tight! text-center text-5xl md:text-6xl font-semibold tracking-tight w-full">
                    {t("not-found.title")}
                  </h2>
                </Container>

                <Container delay={0.2}>
                  <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                    {t("not-found.description")}
                  </p>
                </Container>
                <Container className="mt-4 sm:mt-6 md:mt-8" delay={0.3}>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>
                      <ArrowLeft /> {t("not-found.cta")}
                    </Link>
                  </Button>
                </Container>
              </div>
            </Wrapper>
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default NotFound;
