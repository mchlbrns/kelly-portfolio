import Link from "next/link";
import { Services } from "@/components/Services";
import { ArrowRight, Code2, Cpu, Workflow, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services: AI Automation & Web Development | Michael Briones",
  description: "Explore AI integration, custom full-stack web applications, workflow automation scripting, and MVP development services built to optimize business operations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services: AI Automation & Web Development | Michael Briones",
    description: "Explore AI integration, custom full-stack web applications, workflow automation scripting, and MVP development services built to optimize business operations.",
    url: "https://michaelbriones-dev.vercel.app/services",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services: AI Automation & Web Development | Michael Briones",
    description: "Explore AI integration, custom full-stack web applications, workflow automation scripting, and MVP development services built to optimize business operations.",
  },
};

const serviceDeeps = [
  {
    title: "AI & LLM Integration",
    href: "/services/ai-automation",
    description: "Incorporate generative AI, custom GPT models, and Pinecone vector search databases into your software products to automate customer responses and query document insights.",
    icon: <Cpu className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Custom Web Applications",
    href: "/services/custom-web-applications",
    description: "Build robust, secure, and fast full-stack applications with Next.js, React, Node.js, or Django tailored precisely to support your operations and customer portals.",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Workflow Automation",
    href: "/services/workflow-automation",
    description: "Eliminate repetitive spreadsheet copying, manual entries, and system syncing. We create AutoHotkey, Selenium, and custom Python background pipelines.",
    icon: <Workflow className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "MVP & SaaS Development",
    href: "/services/mvp-development",
    description: "Accelerate your software startup from concept to market with secure multi-tenant hosting, Stripe billing subscription, and client dashboard portals.",
    icon: <Layers className="w-8 h-8 text-indigo-500" />,
  },
];

export default function ServicesPage() {
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
        "name": "Services",
        "item": "https://michaelbriones-dev.vercel.app/services"
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
              Services
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Services: AI Automation & Full-Stack Development
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Helping businesses reclaim hours of manual effort, integrate intelligent models, and deploy robust web portals that support scalable growth.
          </p>
        </div>

        {/* Deep Dive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {serviceDeeps.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-950 w-fit rounded-2xl border border-gray-250/20 dark:border-gray-800">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href}
                className="group inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              >
                Deep Dive Service Details
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* Standard Services List Section */}
        <Services />
        
        {/* Call to Action */}
        <div className="mt-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-3xl font-black mb-4">Ready to Automate & Build?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
            Schedule a free consultation call to walk through your operational manual work or next SaaS system and get a detailed execution quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all"
          >
            Start Project Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
