import Link from "next/link";
import { ArrowLeft, Workflow, CheckCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Automation & Scripting Services | Michael Briones",
  description: "Hire a workflow automation specialist to build AutoHotkey macros, Selenium browser scripts, Google Sheets integrations, and Python scraping engines.",
  alternates: {
    canonical: "/services/workflow-automation",
  },
  openGraph: {
    title: "Workflow Automation & Scripting Services | Michael Briones",
    description: "Hire a workflow automation specialist to build AutoHotkey macros, Selenium browser scripts, Google Sheets integrations, and Python scraping engines.",
    url: "https://michaelbriones-dev.vercel.app/services/workflow-automation",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation & Scripting Services | Michael Briones",
    description: "Hire a workflow automation specialist to build AutoHotkey macros, Selenium browser scripts, Google Sheets integrations, and Python scraping engines.",
  },
};

const faqs = [
  {
    q: "Can you automate legacy desktop systems that do not have APIs?",
    a: "Yes. Using AutoHotkey, Autoit, and native Win32 DLL window commands, we script direct UI controls (clicking fields, entering data, reading spreadsheet rows) to automate legacy desktop apps reliably.",
  },
  {
    q: "How stable are Selenium browser scripting tasks?",
    a: "We design browser tasks with dynamic wait conditions and resilient selector hierarchies instead of arbitrary sleep timers. This makes web scraping or background form actions stable even under variable internet connection speeds.",
  },
  {
    q: "How many hours of manual work can business automation save?",
    a: "On average, our operations clients reclaim 15+ hours weekly per team member by automating repetitive duplicate database entries, PDF data extractions, and spreadsheet cell syncs.",
  },
];

export default function WorkflowAutomationPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Workflow Automation",
        "item": "https://michaelbriones-dev.vercel.app/services/workflow-automation"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Workflow Automation & Desktop Scripting",
    "description": "Custom AutoHotkey scripting, Windows API window manipulation, Python tasks, Selenium browser automation, and Google Sheets connectors.",
    "provider": {
      "@type": "Person",
      "name": "Michael Briones",
      "jobTitle": "Workflow Automation Developer"
    },
    "serviceType": "Business Process Automation Services"
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
              Workflow Automation
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
        <div className="bg-gradient-to-br from-amber-600/10 to-indigo-650/10 dark:from-amber-950/20 dark:to-indigo-950/20 border border-amber-100/50 dark:border-amber-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-405 text-xs font-bold rounded-full border border-amber-100 dark:border-amber-900/30 mb-4 uppercase tracking-widest">
              <Workflow size={12} /> Specialization
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Workflow Automation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Eliminate repetitive manual operations, copy-paste human errors, and siloed data formats. We build customized desktop macros, background database listeners, and automated web scraper tasks to run your processes autonomously.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Workflow size={64} className="text-amber-500" />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Automation Capabilities</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Desktop Automation:</strong> AutoHotkey, Autoit, and Win32 controls for scripting legacy Windows applications and MS Excel sheets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Web Scraping and Pipelines:</strong> Selenium and Puppeteer browser control systems to log in, query tables, and extract records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Google Sheets & Webhooks:</strong> Connect Google Sheets, Telegram Chatbots, and internal database servers using clean REST APIs.</span>
                </li>
              </ul>
            </section>

            {/* Case Studies Callout */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="case-study-heading">
              <h2 id="case-study-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured Automation Projects</h2>
              <div className="space-y-8">
                <div className="border-b border-gray-100 dark:border-gray-800 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Excel & Legacy System AHK Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                    Eliminated 100% of manual copying and pasting work between Excel sheets and active win32 desktop forms, saving the team over 15 hours every week.
                  </p>
                  <Link 
                    href="/projects/excel-autohotkey-automation" 
                    className="group inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                  >
                    View Case Study
                    <BookOpen size={16} className="group-hover:rotate-3 transition-transform" />
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Real-Time Field Technician Chatbot</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                    Built a Python Telegram chatbot connecting job site technicians directly to Google Sheets database inventory, reducing support callback queues by 40%.
                  </p>
                  <Link 
                    href="/projects/google-sheets-telegram-chatbot" 
                    className="group inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                  >
                    View Case Study
                    <BookOpen size={16} className="group-hover:rotate-3 transition-transform" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="stack-heading">
              <h3 id="stack-heading" className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Automation Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["AutoHotkey", "Selenium", "Python", "Windows Scripting", "COM Interop", "Google Sheets API", "Telegram Bot API", "Autoit"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/20 text-amber-705 dark:text-amber-400 text-sm font-semibold rounded-xl border border-amber-100 dark:border-amber-900/30">{tech}</span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="cta-heading">
              <h3 id="cta-heading" className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Free Audit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Let&apos;s analyze your manual data entry workflows and build a custom scripting quote.</p>
              <Link
                href="/contact"
                className="w-full flex justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center shadow-sm active:scale-95 transition-all"
              >
                Book Workflow Audit
              </Link>
            </section>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Automation FAQ</h2>
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
