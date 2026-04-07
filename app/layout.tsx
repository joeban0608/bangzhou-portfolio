import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: portfolioContent.siteMeta.title,
  description: portfolioContent.siteMeta.description,
  applicationName: portfolioContent.siteMeta.name,
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
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.siteMeta.title,
    description: portfolioContent.siteMeta.description,
  },
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
