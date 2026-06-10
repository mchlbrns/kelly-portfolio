import Link from "next/link";
import { ArrowLeft, Cpu, CheckCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration & LLM Automation Services | Michael Briones",
  description: "Hire an AI automation developer to integrate OpenAI API, LangChain agents, pinecone vector RAG databases, and custom GPT models into your operations.",
  alternates: {
    canonical: "/services/ai-automation",
  },
  openGraph: {
    title: "AI Integration & LLM Automation Services | Michael Briones",
    description: "Hire an AI automation developer to integrate OpenAI API, LangChain agents, pinecone vector RAG databases, and custom GPT models into your operations.",
    url: "https://michaelbriones-dev.vercel.app/services/ai-automation",
    siteName: "Michael Briones Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration & LLM Automation Services | Michael Briones",
    description: "Hire an AI automation developer to integrate OpenAI API, LangChain agents, pinecone vector RAG databases, and custom GPT models into your operations.",
  },
};

const faqs = [
  {
    q: "How do you prevent AI models from hallucinating?",
    a: "We implement Retrieval-Augmented Generation (RAG) structures using Pinecone semantic vector databases. By loading your company manual, files, or product inventories into the context window, the model references verified source files directly, keeping answers accurate and compliant.",
  },
  {
    q: "Are the data and files shared with OpenAI kept private?",
    a: "Yes. When calling models via the OpenAI Enterprise API or Azure OpenAI service, the data sent is explicitly not used for training public models. We also implement secure tokenization and PII redaction rules to ensure privacy compliance.",
  },
  {
    q: "What AI models do you typically work with?",
    a: "We work with OpenAI (GPT-4o, GPT-4), Anthropic Claude, Meta Llama, and deep learning frameworks like LangChain, LangGraph, and Llamaindex.",
  },
];

export default function AIAutomationPage() {
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
        "name": "AI Automation",
        "item": "https://michaelbriones-dev.vercel.app/services/ai-automation"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Integration & LLM Automation",
    "description": "Integration of OpenAI API, custom GPT models, LangChain workflows, and Pinecone vector search semantic databases into business pipelines.",
    "provider": {
      "@type": "Person",
      "name": "Michael Briones",
      "jobTitle": "AI Automation Developer"
    },
    "serviceType": "Artificial Intelligence Development Services"
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
              AI Automation
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
        <div className="bg-gradient-to-br from-purple-600/10 to-indigo-650/10 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-100/50 dark:border-purple-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-450 text-xs font-bold rounded-full border border-purple-100 dark:border-purple-900/30 mb-4 uppercase tracking-widest">
              <Cpu size={12} /> Specialization
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              AI Integration & Agentic Automation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Transform unstructured business documents and repetitive customer queries into highly reliable, automated pipelines. We build intelligent RAG search vector setups, autonomous chat agents, and custom API connections.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Cpu size={64} className="text-purple-500" />
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI Capabilities & Offerings</h2>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Semantic Search and RAG:</strong> Vector search over internal manuals, spreadsheets, and databases using Pinecone and PgVector for high-precision retrieval.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>AI Support Chatbots:</strong> Custom support agents using LangChain/LangGraph capable of securely verifying order status, processing support tickets, and scheduling consultations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Document Processing:</strong> Structured data extraction from invoices, contracts, receipts, and CVs using OCR and LLMs to automate background systems.</span>
                </li>
              </ul>
            </section>

            {/* Case Study Callout */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="case-study-heading">
              <h2 id="case-study-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Featured AI Case Study</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise AI Customer Support Agent</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                    Autonomously resolved 60% of customer support tickets and decreased average response times by 85% by building a Pinecone-based RAG support system connected to a React portal.
                  </p>
                  <Link 
                    href="/projects/ai-customer-support" 
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
              <h3 id="stack-heading" className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">AI Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["OpenAI API", "Anthropic API", "LangChain", "LangGraph", "Pinecone", "PgVector", "Python", "Node.js", "FastAPI"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 text-sm font-semibold rounded-xl border border-purple-100 dark:border-purple-900/30">{tech}</span>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="cta-heading">
              <h3 id="cta-heading" className="text-lg font-bold mb-2 text-gray-900 dark:text-white">AI Strategy Session</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Let&apos;s walk through your data workflows and identify the highest ROI automation opportunities.</p>
              <Link
                href="/contact"
                className="w-full flex justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center shadow-sm active:scale-95 transition-all"
              >
                Book AI Consultation
              </Link>
            </section>
          </div>
        </div>

        {/* FAQs */}
        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl mb-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">AI Services FAQ</h2>
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
