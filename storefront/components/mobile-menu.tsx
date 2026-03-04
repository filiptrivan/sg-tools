"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAV_LINKS } from "@/constants/links";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4">
        <SheetHeader className="sr-only">
          <SheetTitle>Meni</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-8">
          {NAV_LINKS.map((link, index) =>
            link.children ? (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value="categories" className="border-b-0">
                  <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col gap-1 pl-2">
                      <SheetClose asChild>
                        <Link
                          href="/proizvodi/kategorije"
                          className="py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Sve kategorije
                        </Link>
                      </SheetClose>
                      {link.children.map((child) => (
                        <SheetClose asChild key={child.slug}>
                          <Link
                            href={`/proizvodi/kategorije/${child.slug}`}
                            className="py-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <SheetClose asChild key={index}>
                <Link
                  href={link.href}
                  className="text-lg font-medium w-full py-2"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ),
          )}
          <SheetClose asChild>
            <Link href="/kontakt" className="text-lg font-medium w-full py-2">
              Kontakt
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
