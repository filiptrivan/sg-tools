import { getTranslations } from "next-intl/server";
import { CheckCircle2 } from "lucide-react";
import Container from "./container";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const CTA = async () => {
  const t = await getTranslations("cta");

  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8">
          <div className="flex flex-col items-start justify-center w-full">
            <Container className="w-max mx-auto">
              <h2 className="text-3xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold">
                {t("title")} <br /> {t("titleLine2")}
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    {t("featureDelivery")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    {t("featureQuality")}
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
            <Container className="w-max mx-auto mb-0">
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://prodavnicaalata.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">{t("button")}</Button>
                </a>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    {t("rating")} <br /> {t("reviews")}
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
