import { Download, ExternalLinkIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const Hero = async () => {
  const t = await getTranslations("hero");

  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(180,42,55,0.85)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Image
        src="/hero.svg"
        alt=""
        width={1024}
        height={1024}
        className="absolute inset-x-0 -top-16 w-full z-10 min-w-full"
      />

      <Wrapper className="py-10 sm:py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container delay={0.1}>
            <h2 className="text-balance leading-tight! text-center text-5xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              {t("titleLine1")} <br className="hidden lg:inline-block" />{" "}
              {t("titleLine2")}
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              {t("description")}
            </p>
          </Container>

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
                  src="/images/dashboard.png"
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
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
