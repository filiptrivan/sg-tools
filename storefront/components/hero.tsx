import { Download, ExternalLinkIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import HeroHeader from "./hero-header";
import { Button } from "./ui/button";

const Hero = async () => {
  const t = await getTranslations("hero");

  return (
    <HeroHeader
      title={
        <>
          {t("titleLine1")} <br className="hidden lg:inline-block" />{" "}
          {t("titleLine2")}
        </>
      }
      description={t("description")}
      showSvgGrid={true}
    >
      <Container delay={0.3}>
        <div className="flex gap-3 mt-6">
          <Button asChild>
            <Link
              href="https://www.prodavnicaalata.rs/proizvodjaci/sg-tools/"
              target="_blank"
            >
              {t("ctaPrimary")}
              <ExternalLinkIcon className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#">
              {t("ctaSecondary")}
              <Download className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>

      <Container className="w-full z-30">
        <div className="relative mx-auto max-w-7xl rounded-2xl md:rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 mt-10 md:mt-14">
          <div className="rounded-lg md:rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
            <Image
              src="/dashboard-1.webp"
              alt="Dashboard"
              priority
              width={2932}
              height={1664}
              loading="eager"
              className="rounded-3xl md:rounded-[26px]"
            />
          </div>
        </div>
      </Container>
    </HeroHeader>
  );
};

export default Hero;
