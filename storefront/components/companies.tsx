"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import Container from "./container";
import Wrapper from "./wrapper";

const companies = [
  { src: "/companies/coligoars.png", alt: "Coligoars" },
  { src: "/companies/enterijerjankovic.png", alt: "Enterijer Jankovic" },
  { src: "/companies/galens.png", alt: "Galens" },
  { src: "/companies/hidroina.png", alt: "Hidroina" },
  { src: "/companies/ingradnja.png", alt: "Ingradnja" },
  { src: "/companies/kokreator.png", alt: "Kokreator" },
  { src: "/companies/lokring.png", alt: "Lokring" },
  { src: "/companies/mbmrad.png", alt: "MBM Rad" },
  { src: "/companies/mimiz.png", alt: "Mimiz" },
  { src: "/companies/nobili.png", alt: "Nobili" },
  { src: "/companies/silmaxlogo.png", alt: "Silmax" },
  { src: "/companies/termotim.png", alt: "Termotim" },
  { src: "/companies/vitorog.png", alt: "Vitorog" },
];

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center px-2 md:px-0">
            <h4 className="text-xl lg:text-2xl font-semibold text-center tracking-tight">
              Kompanije koje veruju SG Tools-u
            </h4>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-4 md:mt-8">
            <Carousel plugins={[WheelGesturesPlugin()]}>
              <CarouselContent>
                {companies.map((company) => (
                  <CarouselItem
                    key={company.src}
                    className="basis-1/2 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="flex items-center justify-center p-2">
                      <Image
                        src={company.src}
                        alt={company.alt}
                        width={1024}
                        height={1024}
                        className="w-40 h-20 object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-3" />
              <CarouselNext className="right-0 md:-right-3" />
            </Carousel>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Companies;
