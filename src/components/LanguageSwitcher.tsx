"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLang();
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => setLocale(l)}
          aria-label={`Switch to ${l}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
