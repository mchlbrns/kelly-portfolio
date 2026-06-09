import Link from "next/link";
import { ArrowLeft, Layers, CheckCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP & SaaS Software Prototyping Services | Michael Briones",
  description: "Hire an MVP developer to build full-stack SaaS prototypes, integrate Stripe billing, set up Supabase databases, and launch fast responsive web apps.",
  alternates: {
    canonical: "/services/mvp-development",
  },
  openGraph: {
    title: "MVP & SaaS Software Prototyping Services | Michael Briones",
    description: "Hire an MVP developer to build full-stack SaaS prototypes, integrate Stripe billing, set up Supabase databases, and launch fast responsive web apps.",
    url: "https://kelly-portfolio-delta.vercel.app/services/mvp-development",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP & SaaS Software Prototyping Services | Michael Briones",
    description: "Hire an MVP developer to build full-stack SaaS prototypes, integrate Stripe billing, set up Supabase databases, and launch fast responsive web apps.",
  },
};

const faqs = [
  {
    q: "How fast can you build and deploy a functional MVP?",
    a: "Depending on the scope, we typically deliver a production-ready Minimum Viable Product (MVP) in 4 to 6 weeks. This includes database setups, client dashboard portals, user authentication, and Stripe subscription links.",
  },
  {
    q: "Do you handle hosting and server configuration?",
    a: "Yes. We configure serverless and edge hosting on Vercel, Netlify, or AWS, set up custom domain SSL certificates, and implement GitHub automated deployment pipelines.",
  },
  {
    q: "What happens when we are ready to scale our user base?",
    a: "All code is built using standard React/Next.js frameworks and structured TypeScript. This makes it highly modular, so your team or future developers can easily take over, add features, and scale the database.",
  },
];

export default function MVPDevelopmentPage() {
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
        "name": "MVP & SaaS Development",
        "item": "https://kelly-portfolio-delta.vercel.app/services/mvp-development"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MVP & SaaS Development",
    "description": "Rapid prototyping of software startup ideas, SaaS structures, user authentication, Stripe integration, and dashboards.",
    "provider": {
      "@type": "Person",
      "name": "Michael Briones",
      "jobTitle": "MVP Developer"
    },
    "serviceType": "MVP Software Development Services"
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
              MVP & SaaS Development
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
        <div className="bg-gradient-to-br from-indigo-600/10 to-blue-650/10 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-100/50 dark:border-indigo-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded-full border border-indigo-100 dark:border-indigo-900/30 mb-4 uppercase tracking-widest">
              <Layers size={12} /> Specialization
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              MVP & SaaS Development
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Validate your software product idea with a production-ready, beautiful, and secure prototype. We develop functional dashboards with user logins, Stripe billing flows, and fast database systems in weeks.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Layers size={64} className="text-indigo-500" />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">MVP Development Services</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Rapid Prototyping:</strong> Turn Figma mockups or list of features into fully working web applications using React/Next.js and Supabase.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>SaaS Infrastructure:</strong> Setup secure user authentication (Supabase, Auth0), multi-tenant hosting, and clean customer subscription routes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Stripe Billing Integration:</strong> Build secure subscription payment models, checkout links, and webhook payment success notifications.</span>
                </li>
              </ul>
            </section>

            {/* Case Study Callout */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="case-study-heading">
              <h2 id="case-study-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured Project Case Study</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Freelance Portfolio Conversion Engine</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                    Built using clean React structures and server-side pre-rendering, optimizing load times to sub-second paints and WCAG 100% compliance.
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
              <h3 id="stack-heading" className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">MVP Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "Stripe", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Vercel Hosting", "Auth0"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 text-sm font-semibold rounded-xl border border-indigo-100 dark:border-indigo-900/30">{tech}</span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="cta-heading">
              <h3 id="cta-heading" className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Build Your MVP</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Schedule a discovery call to list product requirements and structure a launch quote.</p>
              <Link
                href="/contact"
                className="w-full flex justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center shadow-sm active:scale-95 transition-all"
              >
                Book MVP Session
              </Link>
            </section>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">MVP Development FAQ</h2>
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
