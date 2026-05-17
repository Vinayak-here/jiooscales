"use client";

import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LANGS = [
  { code: "en", label: "English", native: "English" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
];

export function LanguageSwitcher({ variant = "ghost" }: { variant?: "ghost" | "outline" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];

  const setLang = (newLocale: string) => {
    // Navigate to the same path but with the new locale
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="sm" className="gap-1.5 px-3" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span className="text-xs font-semibold">{current.native}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {LANGS.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => setLang(l.code)} className="cursor-pointer">
            <span className="flex-1">
              <span className="font-medium">{l.native}</span>
              <span className="ml-2 text-xs text-muted-foreground">{l.label}</span>
            </span>
            {locale === l.code && <Check className="h-4 w-4 text-[var(--cyan)]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
