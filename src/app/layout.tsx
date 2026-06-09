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
  title: "Michael Briones | Full-Stack AI Developer & Automation Specialist",
  description: "Experienced Full-Stack Python & AI Developer specializing in Next.js, Django, Selenium, and AutoHotkey workflow automations that cut costs and scale operations.",
  metadataBase: new URL("https://kelly-portfolio-delta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Michael Briones | Full-Stack AI Developer & Automation Specialist",
    description: "Experienced Full-Stack Python & AI Developer specializing in Next.js, Django, Selenium, and AutoHotkey workflow automations that cut costs and scale operations.",
    url: "https://kelly-portfolio-delta.vercel.app",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Briones | Full-Stack AI Developer & Automation Specialist",
    description: "Experienced Full-Stack Python & AI Developer specializing in Next.js, Django, Selenium, and AutoHotkey workflow automations that cut costs and scale operations.",
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
