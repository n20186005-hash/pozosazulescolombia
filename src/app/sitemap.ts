import type { MetadataRoute } from "next";
import { alternatives, domain, locales, places } from "@/nearby/catalog";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...places.map(p => "/nearby/" + p.slug)].flatMap(path =>
    locales.map(locale => ({
      url: domain + "/" + locale + path,
      alternates: alternatives(path),
      priority: path ? 0.8 : 1,
    }))
  );
}
