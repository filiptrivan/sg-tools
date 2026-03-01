import { Link } from "@/i18n/navigation";
import { PRODUCT_LINKS, RESOURCES_LINKS } from "../constants/links";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Container from "./container";
import Wrapper from "./wrapper";

const Footer = async () => {
  const t = await getTranslations("footer");

  return (
    <footer className="relative pt-16 pb-8 md:pb-0 w-full overflow-hidden">
      <Wrapper>
        <Container animation="scaleUp" delay={0.3}>
          <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-linear-to-r from-[#050505] via-primary/40 to-[#050505]"></div>
        </Container>

        <div className="grid gap-8 xl:grid-cols-2 xl:gap-8">
          <Container animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-75">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/icon.svg"
                  alt="Verve"
                  width={32}
                  height={32}
                  className="size-6"
                />
                <span className="text-lg lg:text-xl font-medium">Verve</span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                {t("taglineLine1")}
                <br />
                {t("taglineLine2")}
              </p>
              <div className="mt-4 text-sm text-muted-foreground px-4 py-2 cursor-pointer rounded-full border border-border/40 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300">
                <a href="tel:+11234567890">
                  <p>+1 (123) 456-7890</p>
                </a>
              </div>
            </div>
          </Container>

          <div className="grid grid-cols-2 md:place-items-end w-full">
            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">{t("product")}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {PRODUCT_LINKS.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>

            <Container animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">{t("resources")}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {RESOURCES_LINKS.map((link, index) => (
                    <Container
                      key={index}
                      animation="fadeLeft"
                      delay={0.7 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="hover:text-foreground transition-colors"
                        >
                          {t(link.labelKey)}
                        </Link>
                      </li>
                    </Container>
                  ))}
                </ul>
              </div>
            </Container>
          </div>
        </div>

        <Container animation="fadeUp" delay={1}>
          <div className="mt-16 border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-center">
            <p className="text-sm text-muted-foreground">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </Container>
      </Wrapper>
    </footer>
  );
};

export default Footer;
