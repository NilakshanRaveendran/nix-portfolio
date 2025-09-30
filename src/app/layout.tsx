import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nilakshan Raveendran",
  description: "Portfolio of Nilakshan Raveendran — projects, skills, and contact.",
  // Ensure absolute URLs for OG/Twitter images in all environments
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Nilakshan Raveendran | Portfolio",
    description: "Projects, skills, and ways to contact Nilakshan.",
    url: "https://nix-portfolio.vercel.app",
    siteName: "Nilakshan Portfolio",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Nilakshan Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilakshan Raveendran | Portfolio",
    description: "Projects, skills, and ways to contact Nilakshan.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
