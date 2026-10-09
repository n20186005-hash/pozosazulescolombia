import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pozosazulescolombia.com";

export const metadata: Metadata = {
  title: "Pozos Azules",
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/es",
      "en": "/en",
      "zh-CN": "/zh",
      "x-default": "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}