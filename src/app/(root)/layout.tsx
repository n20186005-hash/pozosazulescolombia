import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pozosazulescolombia.com";

export const metadata: Metadata = {
  title: "Pozos Azules",
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
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