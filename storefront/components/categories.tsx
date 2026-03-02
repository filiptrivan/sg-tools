import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";

type Category = {
  title: string;
  desc: string;
  image: string;
  slug: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Električni alati",
    desc: "Širok izbor profesionalnih električnih alata za svaku potrebu.",
    image: "/categories/electric.jpg",
    slug: "elektricni-alati",
  },
  {
    title: "Ručni alati",
    desc: "Kvalitetni ručni alati za precizne i svakodnevne radove.",
    image: "/categories/hand-tools.jpg",
    slug: "rucni-alati",
  },
  {
    title: "Brusilice",
    desc: "Profesionalne brusilice za brušenje, sečenje i poliranje.",
    image: "/categories/grinder.jpg",
    slug: "brusilice",
  },
  {
    title: "Dijamantski alati",
    desc: "Dijamantski diskovi i alati za najtvrđe materijale.",
    image: "/categories/diamond.jpg",
    slug: "dijamantski-alati",
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
              Asortiman
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center mt-2 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              enim? Dolor, corporis vero?
            </p>
          </div>
        </Container>

        <div className="w-full mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
            {CATEGORIES.map((item, index) => (
              <Item key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Item = ({ item, index }: { item: Category; index: number }) => (
  <Container>
    <div className="relative bg-foreground/5 border border-border/20 hover:border-border transition-all cursor-pointer rounded-lg lg:rounded-xl overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={1000}
        className="object-contain w-full"
      />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex flex-col mt-auto pt-4">
        <Link
          href={`/proizvodi/kategorije/${item.slug}`}
          className="text-base lg:text-xl font-semibold"
        >
          {item.title}
        </Link>
        <p className="text-muted-foreground text-xs sm:text-sm mt-1">
          {item.desc}
        </p>
      </div>
    </div>
  </Container>
);

export default Categories;
