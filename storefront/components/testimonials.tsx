"use client";

import Container from "@/components/container";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "@/components/wrapper";
import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  image: string;
  content: string;
  time: string;
  date: string;
  highlighted?: boolean;
};

const Testimonials = () => {
  return (
    <Section className="relative">
      <Wrapper>
        <Carousel>
          <CarouselContent>
            {TESTIMONIALS.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Item item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2" />
          <CarouselNext className="-right-2" />
        </Carousel>
      </Wrapper>
      <div className="absolute hidden lg:block top-1/4 left-1/4 w-1/8 h-16 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
      <div className="absolute hidden lg:block top-1/4 right-1/4 w-1/8 h-16 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
    </Section>
  );
};

const Item = ({ item }: { item: Testimonial }) => (
  <Container>
    <div className="flex flex-col bg-neutral-900/80 border border-border/50 rounded-lg lg:rounded-xl p-4 lg:p-6 w-full h-full">
      <div className="flex items-center gap-x-3 w-full">
        <div className="w-10 h-10 flex-shrink-0 rounded-full">
          <Image
            src={item.image}
            alt={item.name}
            width={1024}
            height={1024}
            className="rounded-full object-cover size-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold">{item.name}</h4>
          <div className="text-muted-foreground text-sm">
            {item.role}
            {item.companyUrl ? (
              <span className="text-primary ml-1">@{item.company}</span>
            ) : (
              <span className="ml-1">· {item.company}</span>
            )}
          </div>
        </div>
      </div>
      <div className="text-muted-foreground max-w-xs mt-2">
        &quot;{item.content}&quot;
      </div>
      <div className="text-xs text-muted-foreground mt-4 flex gap-2">
        <span>{item.time}</span>
        <span>·</span>
        <span>{item.date}</span>
      </div>
    </div>
  </Container>
);

export default Testimonials;
