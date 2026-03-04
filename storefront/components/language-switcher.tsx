"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const nextLocale =
    locale === routing.locales[0] ? routing.locales[1] : routing.locales[0];

  const handleSwitch = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- pathname includes dynamic segments resolved by params
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      disabled={isPending}
      className={cn("text-xs font-medium px-2", className)}
      aria-label={t("switchTo", { language: t(nextLocale) })}
    >
      {t(nextLocale)}
    </Button>
  );
};

export default LanguageSwitcher;
