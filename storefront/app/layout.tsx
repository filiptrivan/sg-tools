import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { base, heading } from "@/constants/fonts";
import { getCategories } from "@/lib/categories";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SG Tools — Profesionalni alati sa 30 godina iskustva",
  description:
    "Električni alati, ručni alati, brusilice i dijamantski alati nastali iz decenija praktičnog znanja. Profesionalni kvalitet po cenama koje imaju smisla.",
};

export default async function RootLayout({
  children,
}: { children: ReactNode }) {
  const categories = await getCategories();

  return (
    <html lang="sr">
      <body
        className={cn(
          "min-h-screen text-foreground font-base antialiased dark",
          base.variable,
          heading.variable,
        )}
      >
        <Navbar categories={categories} />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
