import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGTools - Isporučite projekte enterprise kvaliteta",
  description:
    "Bez napora pokrenite robusne projekte spremne za produkciju sa najboljim alatima i besprekidnim radnim tokovima",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body
        className={cn(
          "min-h-screen text-foreground font-base antialiased dark",
          base.variable,
          heading.variable,
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
