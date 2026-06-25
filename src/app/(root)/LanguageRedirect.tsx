"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LanguageRedirect() {
  const router = useRouter();

  useEffect(() => {
    const langs = navigator.languages || [navigator.language];
    let detected = "en";
    
    for (const lang of langs) {
      if (lang.startsWith("zh")) {
        detected = "zh";
        break;
      }
      if (lang.startsWith("es")) {
        detected = "es";
        break;
      }
      if (lang.startsWith("en")) {
        detected = "en";
        break;
      }
    }
    
    router.replace(`/${detected}`);
  }, [router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "sans-serif" }}>
      <p>Redirecting to your language...</p>
      {/* Fallback links for crawlers */}
      <div style={{ display: "none" }}>
        <a href="/en">English</a>
        <a href="/es">Español</a>
        <a href="/zh">中文</a>
      </div>
    </div>
  );
}