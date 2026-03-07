"use client";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full relative flex flex-col pt-16">
      <Wrapper className="py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center size-12 rounded-xl bg-destructive/15 border border-destructive/30 mb-4">
            <AlertTriangle
              className="size-6 text-destructive"
              strokeWidth={1.5}
            />
          </div>
          <h1 className="text-2xl font-heading font-bold mt-2">
            Ups, nešto nije u redu
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md">
            Došlo je do greške prilikom učitavanja podataka. Probaj ponovo ili se
            vrati na početnu stranu.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Button variant="outline" size="sm" onClick={reset}>
              <RotateCcw className="size-4" />
              Probaj ponovo
            </Button>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="size-4" />
                Početna
              </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
