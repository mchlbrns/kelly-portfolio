import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimationProvider } from "@/components/AnimationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kelly — Full-Stack & AI Automation Developer",
  description: "From full-stack engineering to AI-powered automation — I build solutions that grow businesses.",
  metadataBase: new URL("https://kelly-portfolio-delta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kelly — Full-Stack & AI Automation Developer",
    description: "From full-stack engineering to AI-powered automation — I build solutions that grow businesses.",
    url: "https://kelly-portfolio-delta.vercel.app",
    siteName: "Kelly Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly — Full-Stack & AI Automation Developer",
    description: "From full-stack engineering to AI-powered automation — I build solutions that grow businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 flex flex-col`}>
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <Navbar />
            <main id="main-content" className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </AnimationProvider>
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
