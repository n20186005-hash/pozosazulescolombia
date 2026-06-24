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

export const metadata: Metadata = {
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
    locale: "es_CO",
    alternateLocale: ["en_US", "zh_CN"],
    url: baseUrl,
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
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
