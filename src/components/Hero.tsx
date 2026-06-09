"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Download } from "lucide-react";

export function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium border border-green-200 dark:border-green-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Kelly — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Full-Stack & AI Automation Developer</span>
          </h1>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 font-medium">
            From full-stack engineering to AI-powered automation — I build solutions that grow businesses.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="#work"
            className="group flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
          >
            View Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all border border-blue-200 dark:border-blue-800"
          >
            Book a Call
            <Calendar size={20} />
          </a>
          <a
            href="/Kelly_CV.pdf"
            download
            className="group flex items-center gap-2 bg-transparent text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-gray-300 dark:border-gray-700"
          >
            Download CV
            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </m.div>
      </div>
    </section>
  );
}
