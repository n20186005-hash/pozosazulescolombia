"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";
import { usePathname, useRouter } from "next/navigation";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === locale) return;
    // Replace the first path segment (the locale) with the new locale
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => handleSwitch(l)}
          aria-label={`Switch to ${l}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
