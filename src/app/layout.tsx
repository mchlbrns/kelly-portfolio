import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimationProvider } from "@/components/AnimationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Michael Briones | Freelance Full-Stack & AI Automation Developer",
  description: "Freelance full-stack & AI automation developer. I build custom Next.js web apps and workflow automations to help businesses cut costs and scale.",
  metadataBase: new URL("https://kelly-portfolio-delta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Michael Briones | Freelance Full-Stack & AI Automation Developer",
    description: "Freelance full-stack & AI automation developer. I build custom Next.js web apps and workflow automations to help businesses cut costs and scale.",
    url: "https://kelly-portfolio-delta.vercel.app",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Michael Briones | Freelance Full-Stack & AI Automation Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Briones | Freelance Full-Stack & AI Automation Developer",
    description: "Freelance full-stack & AI automation developer. I build custom Next.js web apps and workflow automations to help businesses cut costs and scale.",
    images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=630"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
