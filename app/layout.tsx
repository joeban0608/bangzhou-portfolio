import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { portfolioContent } from "@/app/lib/portfolio-content";

const bodyFont = Noto_Sans_TC({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const metadataBase = (() => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");

  return new URL(siteUrl);
})();

export const metadata: Metadata = {
  metadataBase,
  title: portfolioContent.siteMeta.title,
  description: portfolioContent.siteMeta.description,
  applicationName: portfolioContent.siteMeta.name,
  manifest: "/manifest.webmanifest",
  keywords: [
    "洪邦洲",
    "Bangzhou",
    "軟體工程師",
    "前端工程師",
    "Next.js",
    "作品集",
  ],
  openGraph: {
    title: portfolioContent.siteMeta.title,
    description: portfolioContent.siteMeta.description,
    locale: "zh_TW",
    type: "website",
    siteName: portfolioContent.siteMeta.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "洪邦洲 | Frontend / Full-stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.siteMeta.title,
    description: portfolioContent.siteMeta.description,
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
