import Link from "next/link";
import { About } from "@/components/About";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Testimonials } from "@/components/Testimonials";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Michael Briones | AI Automation & Full-Stack Developer",
  description: "Meet Michael Briones, a full-stack developer and AI automation engineer building custom web portals, RAG databases, and desktop scripting workflows.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Michael Briones | AI Automation & Full-Stack Developer",
    description: "Meet Michael Briones, a full-stack developer and AI automation engineer building custom web portals, RAG databases, and desktop scripting workflows.",
    url: "https://kelly-portfolio-delta.vercel.app/about",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Michael Briones | AI Automation & Full-Stack Developer",
    description: "Meet Michael Briones, a full-stack developer and AI automation engineer building custom web portals, RAG databases, and desktop scripting workflows.",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kelly-portfolio-delta.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://kelly-portfolio-delta.vercel.app/about"
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
              About
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

        {/* Render existing components */}
        <About />
        <WhyHireMe />
        <Testimonials />

        {/* Call to Action */}
        <div className="mt-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-3xl font-black mb-4">Start Automating Your Workflows Today</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
            Let's discuss how we can eliminate your business operations bottlenecks. Book a consultation or send a message directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://cal.com/michael-briones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
