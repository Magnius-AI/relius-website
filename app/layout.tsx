import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relius.com"),
  title: {
    default: "Relius | Church Management System with AI",
    template: "%s | Relius",
  },
  description: "The modern Church Management System with built-in AI. Manage people, groups, events, giving, and volunteers with AI-powered workflows.",
  keywords: ["church management system", "ChMS with AI", "sermon generator", "church event scheduling", "church donations analytics"],
  authors: [{ name: "Relius" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relius.com",
    siteName: "Relius",
    title: "Relius | Church Management System with AI",
    description: "The modern Church Management System with built-in AI. Manage people, groups, events, giving, and volunteers with AI-powered workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relius - Church AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relius | Church Management System with AI",
    description: "The modern Church Management System with built-in AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Analytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
