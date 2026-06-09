"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/michael-briones";

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
            <div className="mb-6 opacity-0 animate-fade-in-left">
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-cyan-500/20 text-blue-700 dark:text-cyan-400 text-sm font-extrabold border border-blue-200/50 dark:border-cyan-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:scale-105 transition-transform duration-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                Open for Select Q3 Projects & AI Automations
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8">
                Michael Briones. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">
                  AI Automation & Full-Stack Developer
                </span>
                <span className="block text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-400 mt-4 tracking-normal">
                  Building custom web apps and workflow automations to streamline operations, cut costs, and scale your business.
                </span>
              </h1>
            </div>

            <div className="opacity-0 animate-fade-in-up animation-delay-100">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed">
                Stop losing hours to repetitive, manual tasks. I design and build production-ready full-stack applications and automated pipelines that reclaim your team&apos;s time, integrate modern AI capabilities, and eliminate operational bottlenecks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animation-delay-200">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-750 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all active:scale-95 cursor-pointer"
              >
                Book a Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <Link
                href="#work"
                className="group flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-800 shadow-sm active:scale-95"
              >
                See Case Studies
              </Link>
              <a
                href="https://www.upwork.com/freelancers/~0132fd165333fbdaa4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-green-600 dark:border-green-500/50 text-green-600 dark:text-green-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50/50 dark:hover:bg-green-950/20 transition-all active:scale-95 shadow-sm"
              >
                Hire Me on Upwork
                <ArrowRight className="text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform rotate-[-45deg]" size={20} />
              </a>
              <Link
                href="/resume"
                className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-4"
              >
                <FileText size={18} className="group-hover:rotate-6 transition-transform" />
                View Resume
              </Link>
            </div>
          </div>

          <div className="flex-1 hidden lg:block relative opacity-0 animate-fade-in-scale animation-delay-400">
            <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 aspect-square rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-gray-200 dark:border-gray-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 mix-blend-overlay" />
              <div className="relative w-full h-full p-6">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Michael Briones - Full-Stack Developer & AI Specialist"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-10 rounded-2xl border border-dashed border-blue-500/20 pointer-events-none" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 opacity-0 animate-fade-in-up animation-delay-400">
              <div className="text-xs font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Focus</div>
              <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">AI Automation</div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 opacity-0 animate-fade-in-down animation-delay-600">
              <div className="text-xs font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Status</div>
              <div className="text-lg font-black text-green-600 dark:text-green-400 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
