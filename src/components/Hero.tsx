"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Download } from "lucide-react";

export function Hero() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#contact";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-left">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold border border-blue-100 dark:border-blue-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for Q3 Projects
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8">
                Michael Briones. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">
                  Full-Stack AI Developer.
                </span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400 mt-4 tracking-normal">
                  Python, Django & Next.js | Build MVPs & Automations that Cut Costs
                </span>
              </h1>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed">
                I build high-performance web applications and custom automation scripts that eliminate manual bottlenecks. From AI-powered MVPs to Django platforms and Selenium/AutoHotkey workflows, I turn complex requirements into clean, production-ready systems that scale.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="group flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all active:scale-95"
              >
                Explore Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-800 shadow-sm active:scale-95"
              >
                Schedule a Call
                <Calendar size={20} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-green-600 dark:border-green-500/50 text-green-600 dark:text-green-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50/50 dark:hover:bg-green-950/20 transition-all active:scale-95 shadow-sm"
              >
                Hire Me on Upwork
                <ArrowRight className="text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform rotate-[-45deg]" size={20} />
              </a>
              <a
                href="/Michael_Briones_CV.pdf"
                download="Michael_Briones_CV.pdf"
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-4"
              >
                <Download size={18} />
                Get Resume
              </a>
            </m.div>
          </div>

          <m.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 hidden lg:block relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/10 dark:text-black/10 select-none">
                MB
              </div>
              <div className="absolute inset-8 rounded-2xl border border-dashed border-gray-400/30" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 animate-bounce-slow">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Focus</div>
              <div className="text-lg font-black text-blue-600">AI Integration</div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
