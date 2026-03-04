import { ABOUT_PARAGRAPHS } from "@/constants/content";
import { ExternalLinkIcon } from "lucide-react";
import Container from "./container";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

const AboutContent = () => {
  return (
    <div className="w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col gap-6">
            {ABOUT_PARAGRAPHS.map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-neutral-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-10">
            <a
              href="https://www.prodavnicaalata.rs/proizvodjaci/sg-tools/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Pogledaj sve SG Tools proizvode
                <ExternalLinkIcon className="size-4" />
              </Button>
            </a>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutContent;
