import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pozosazulescolombia.com";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Pozos Azules — Villa de Leyva, Colombia",
      template: "%s | Pozos Azules",
    },
    description:
      "A travel guide to Pozos Azules, the stunning natural blue pools near Villa de Leyva, Boyacá, Colombia.",
    keywords: [
      "Pozos Azules",
      "Villa de Leyva",
      "Colombia travel",
      "natural pools",
      "blue pools",
      "Boyacá tourism",
    ],
    authors: [{ name: "Pozos Azules Travel Guide" }],
    creator: "Pozos Azules Travel Guide",
    publisher: "Pozos Azules Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: lang === "zh" ? "zh_CN" : lang === "es" ? "es_CO" : "en_US",
      alternateLocale: ["en_US", "es_CO", "zh_CN"].filter((l) => !l.startsWith(lang)),
      url: `${baseUrl}/${lang}`,
      title: "Pozos Azules — Villa de Leyva, Colombia",
      description:
        "A travel guide to Pozos Azules, the stunning natural blue pools near Villa de Leyva, Boyacá, Colombia.",
      siteName: "Pozos Azules Travel Guide",
      images: [
        {
          url: "/gallery/pozos-azules1.jpg",
          width: 1200,
          height: 630,
          alt: "Pozos Azules - Natural Blue Pools",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pozos Azules — Villa de Leyva, Colombia",
      description:
        "A travel guide to Pozos Azules, the stunning natural blue pools near Villa de Leyva, Boyacá, Colombia.",
      images: ["/gallery/pozos-azules1.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en": "/en",
        "es": "/es",
        "zh": "/zh",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "zh" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
