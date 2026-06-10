import Link from "next/link";
import { Contact } from "@/components/Contact";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Michael Briones | Hire AI & Full-Stack Developer",
  description: "Request a consultation call or drop a message to build custom web applications, SaaS MVPs, automated pipelines, or integrate ChatGPT/OpenAI models.",
  keywords: ["Contact Michael Briones", "Hire Full-Stack Developer", "AI Automation Consultant", "Next.js Freelancer", "Web Development Quote"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Michael Briones | Hire AI & Full-Stack Developer",
    description: "Request a consultation call or drop a message to build custom web applications, SaaS MVPs, automated pipelines, or integrate ChatGPT/OpenAI models.",
    url: "https://michaelbriones-dev.vercel.app/contact",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Michael Briones | Hire AI & Full-Stack Developer",
    description: "Request a consultation call or drop a message to build custom web applications, SaaS MVPs, automated pipelines, or integrate ChatGPT/OpenAI models.",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://michaelbriones-dev.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://michaelbriones-dev.vercel.app/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm font-medium text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li className="flex items-center space-x-2" aria-hidden="true">
              <span>/</span>
            </li>
            <li className="text-gray-900 dark:text-white" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold mb-8 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Render existing component */}
        <Contact />

      </div>
    </div>
  );
}
