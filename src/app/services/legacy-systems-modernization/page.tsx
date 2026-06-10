import Link from "next/link";
import { ArrowLeft, RefreshCw, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Systems Modernization Services | Michael Briones",
  description: "Breathe new life into your aging software. We migrate legacy desktop systems to the cloud and optimize outdated SQL databases for 99.9% uptime.",
  keywords: ["Legacy System Migration", "Database Optimization", "Cloud Migration", "SQL Server Optimization", "Modernizing Legacy Software", "Michael Briones"],
  alternates: {
    canonical: "/services/legacy-systems-modernization",
  },
};

export default function LegacyModernizationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-650 dark:text-blue-400 font-bold mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        <div className="bg-gradient-to-br from-red-600/10 to-orange-650/10 dark:from-red-950/20 dark:to-orange-950/20 border border-red-100/50 dark:border-red-900/30 rounded-[2.5rem] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="flex-grow">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Legacy Systems Modernization
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              Don&apos;t let aging tech hold your business back. We specialize in migrating offline desktop databases to secure cloud environments and refactoring slow SQL queries into lightning-fast modern architectures.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center shrink-0">
            <RefreshCw size={64} className="text-red-500" />
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Modernization Expertise</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 dark:text-gray-400 font-medium">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Database Optimization & Index Tuning</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Desktop-to-Web Migration Strategy</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Refactoring Legacy Spaghetti Code</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
              <span>Ensuring Data Integrity During Migration</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
