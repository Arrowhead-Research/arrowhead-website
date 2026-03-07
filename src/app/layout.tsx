import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { getThemeFromCookie } from "@/lib/theme";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arrowhead Research",
    template: "%s | Arrowhead Research",
  },
  description:
    "Arrowhead Research empowers military servicemembers with hands-on engineering experience, mentorship, and real-world technical challenges. Build. Break. Hack. Repeat.",
  metadataBase: new URL("https://arrowheadresearch.org"),
  icons: {
    icon: [
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeFromCookie();

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-white antialiased dark:bg-dark-gray`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-jade-green focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
