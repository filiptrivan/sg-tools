import Image from "next/image";
import { ReactNode } from "react";
import Container from "./container";
import Wrapper from "./wrapper";

interface HeroHeaderProps {
  title: ReactNode;
  description: ReactNode;
  showSvgGrid?: boolean;
  children?: ReactNode;
}

const HeroHeader = ({
  title,
  description,
  showSvgGrid = false,
  children,
}: HeroHeaderProps) => {
  return (
    <div className="relative z-0 w-full h-full mb-4">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(180,42,55,0.85)_0%,rgba(5,5,5,0)_80%)]" />

      {showSvgGrid && (
        <Image
          src="/hero.svg"
          alt=""
          width={1024}
          height={1024}
          className="absolute inset-x-0 -top-16 w-full -z-1 min-w-full"
        />
      )}

      <Wrapper className="py-12 sm:py-24">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container delay={0.1}>
            <h2 className="text-balance leading-tight! text-center text-5xl md:text-6xl font-semibold tracking-tight w-full">
              {title}
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              {description}
            </p>
          </Container>

          {children}
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroHeader;
