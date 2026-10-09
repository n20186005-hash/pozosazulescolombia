import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

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

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pozosazulescolombia.com";

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: "Pozos Azules Villa de Leyva: Tickets, Hours & Visiting Guide",
    description:
      "Plan your visit to Pozos Azules near Villa de Leyva, Colombia. Find admission prices, opening hours, directions, photos and helpful travel tips.",
  },
  es: {
    title: "Pozos Azules Villa de Leyva: Precio, Horarios y Cómo Llegar",
    description:
      "Descubre Pozos Azules en Villa de Leyva, Boyacá. Consulta el precio de entrada, horarios, ubicación, cómo llegar y consejos para planear tu visita.",
  },
  zh: {
    title: "Pozos Azules Villa de Leyva：门票、开放时间与游览攻略",
    description:
      "规划你的 Pozos Azules 之行：位于哥伦比亚 Villa de Leyva 附近的蓝色深潭，提供门票价格、开放时间、交通方式、照片与实用旅行建议。",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const meta = META[lang] || META.en;
  const ogLocale = lang === "zh" ? "zh_CN" : lang === "es" ? "es_CO" : "en_US";
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: "%s | Pozos Azules",
    },
    description: meta.description,
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
      locale: ogLocale,
      alternateLocale: ["en_US", "es_CO", "zh_CN"].filter((l) => l !== ogLocale),
      url: `${baseUrl}/${lang}`,
      title: meta.title,
      description: meta.description,
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
      title: meta.title,
      description: meta.description,
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
        "es-CO": "/es",
        "en": "/en",
        "zh-CN": "/zh",
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
