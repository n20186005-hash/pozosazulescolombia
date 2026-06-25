"use client";

import React, { createContext, useContext } from "react";
import { translations, type Locale, type Translations } from "@/i18n/translations";

interface LangContextValue {
  locale: Locale;
  t: Translations;
}

const defaultT: Translations = translations.es;

const LangContext = createContext<LangContextValue>({
  locale: "es",
  t: defaultT,
});

export function LangProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: Locale }) {
  const t = translations[initialLocale] || translations.es;
  return (
    <LangContext.Provider value={{ locale: initialLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
