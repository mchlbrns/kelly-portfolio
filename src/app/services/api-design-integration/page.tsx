import Link from "next/link";
import { ArrowLeft, Terminal, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Design & Integration Services | Michael Briones",
  description: "Bespoke API design, third-party platform integrations (Stripe, Salesforce), and secure webhook listeners for synchronized business data.",
  keywords: ["API Design", "Rest API Integration", "Webhook Development", "Third-party Integrations", "Stripe Integration", "Salesforce Integration", "Michael Briones"],
  alternates: {
    canonical: "/services/api-design-integration",
  },
};

export default function ApiIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="bg-gradient-to-br from-cyan-600/10 to-blue-650/10 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-100/50 dark:border-cyan-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              API Design & Integration
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              We connect your disparate systems into a single source of truth. We design custom REST endpoints, integrate complex third-party SaaS APIs, and build secure webhooks to ensure your data flows instantly across your entire stack.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <Terminal size={64} className="text-cyan-500" />
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">API Capabilities</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-400 font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Third-Party App Syncing (CRM, ERP, Billing)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Custom Webhook Listener Architectures</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Legacy Database API Wrappers</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>OAuth 2.0 & Secure Token Management</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
