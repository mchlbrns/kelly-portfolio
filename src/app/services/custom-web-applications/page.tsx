import Link from "next/link";
import { ArrowLeft, Code2, CheckCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Applications & Next.js Development | Michael Briones",
  description: "Hire a full-stack developer to build custom Next.js, React, and Django web applications optimized for speed, access compliance, and lead conversion.",
  alternates: {
    canonical: "/services/custom-web-applications",
  },
  openGraph: {
    title: "Custom Web Applications & Next.js Development | Michael Briones",
    description: "Hire a full-stack developer to build custom Next.js, React, and Django web applications optimized for speed, access compliance, and lead conversion.",
    url: "https://kelly-portfolio-delta.vercel.app/services/custom-web-applications",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Applications & Next.js Development | Michael Briones",
    description: "Hire a full-stack developer to build custom Next.js, React, and Django web applications optimized for speed, access compliance, and lead conversion.",
  },
};

const faqs = [
  {
    q: "Why do you recommend Next.js 15 for business web portals?",
    a: "Next.js 15 App Router supports hybrid static & dynamic rendering (SSG/SSR), Server Actions, and built-in image optimization out of the box. This translates to sub-second page loads, excellent SEO crawlability, and zero initial page loading flash.",
  },
  {
    q: "Can you modernize a legacy database?",
    a: "Yes. We design clean relational database schemas (PgSQL, MySQL, SQL Server), implement migrations, and optimize query latency using indexes and connection caching layers.",
  },
  {
    q: "Do you integrate third-party APIs (Stripe, Salesforce, Hubspot)?",
    a: "Absolutely. We build robust integration layers, custom REST/GraphQL client requests, and secure webhook listener endpoints to synchronize data across all your cloud platforms.",
  },
];

export default function CustomWebApplicationsPage() {
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
        "name": "Services",
        "item": "https://kelly-portfolio-delta.vercel.app/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Custom Web Applications",
        "item": "https://kelly-portfolio-delta.vercel.app/services/custom-web-applications"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Applications & Full-Stack Development",
    "description": "Bespoke full-stack web applications built using React, Next.js, TypeScript, Python, and Node.js.",
    "provider": {
      "@type": "Person",
      "name": "Michael Briones",
      "jobTitle": "Full-Stack Developer"
    },
    "serviceType": "Full-Stack Software Development Services"
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <li>
              <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link>
            </li>
            <li className="flex items-center space-x-2" aria-hidden="true">
              <span>/</span>
            </li>
            <li className="text-gray-900 dark:text-white" aria-current="page">
              Custom Web Apps
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold mb-8 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-blue-600/10 to-indigo-650/10 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100/50 dark:border-blue-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-900/30 mb-4 uppercase tracking-widest">
              <Code2 size={12} /> Specialization
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Custom Web Applications
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              We design and construct high-performance full-stack web applications tailored to support your specific business processes. From customer login portals and data tables to complex SaaS backends, we deliver sub-second rendering speeds and robust security.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Code2 size={64} className="text-blue-500" />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Web Development Capabilities</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Modern Frontends:</strong> Fast, clean React 19 and Next.js 15 layouts utilizing Tailwind CSS for full mobile responsiveness and accessibility.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Robust Backends:</strong> Node.js, Python, or Django servers connected to Postgres, MongoDB, or Redis database clusters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Secure API Design:</strong> Developer-friendly REST or GraphQL routes with proper authorization tokens (JWT, OAuth) and request rate limits.</span>
                </li>
              </ul>
            </section>

            {/* Case Study Callout */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="case-study-heading">
              <h2 id="case-study-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured Custom Web Case Study</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Freelance Portfolio Conversion Engine</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                    Optimized a static developer presentation into a high-converting Next.js portfolio, boosting Lighthouse loading scores to 98+ and increasing direct client inquiries by 40%.
                  </p>
                  <Link 
                    href="/projects/portfolio-transformation" 
                    className="group inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                  >
                    Read the Case Study
                    <BookOpen size={16} className="group-hover:rotate-3 transition-transform" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="stack-heading">
              <h3 id="stack-heading" className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Web Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Node.js", "Django", "Python", "PostgreSQL", "Supabase", "Vercel", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-750 dark:text-blue-400 text-sm font-semibold rounded-xl border border-blue-100 dark:border-blue-900/30">{tech}</span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="cta-heading">
              <h3 id="cta-heading" className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Free Consultation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Schedule a call to discuss your web application requirement and layout roadmap.</p>
              <Link
                href="/contact"
                className="w-full flex justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center shadow-sm active:scale-95 transition-all"
              >
                Book consultation
              </Link>
            </section>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Web Development FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-650 dark:text-gray-400 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
