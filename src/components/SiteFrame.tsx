"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Nav() {
  const { locale,t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          Pozos Azules
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href={`/${locale}#nearby`}>{{en:"Nearby places",es:"Lugares cercanos",zh:"周边景点"}[locale]}</a>
          <a href={`/${locale}#about`}>{t.nav.about}</a>
          <a href={`/${locale}#visiting`}>{t.nav.visiting}</a>
          <a href={`/${locale}#transportation`}>{(t as any).transportation?.title || "Transportation"}</a>
          <a href={`/${locale}#history`}>{(t as any).history?.title || "History"}</a>
          <a href={`/${locale}#tips`}>{t.nav.tips}</a>
          <a href={`/${locale}#reviews`}>{(t as any).reviews?.title || "Reviews"}</a>
          <a href={`/${locale}#faq`}>{(t as any).faq?.title || "FAQ"}</a>
          <a href={`/${locale}#location`}>{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export function Footer() {
  const { t, locale } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <a href={`/${locale}/privacy`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {t.footer.legalPrivacy}
        </a>
        <a href={`/${locale}/terms`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          {t.footer.legalTerms}
        </a>
        <a href={`/${locale}/cookies`} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          {t.footer.legalCookies}
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}

