"use client";

import { m } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export function ContactBanner() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.com/michael-briones";

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 dark:from-blue-950/60 dark:via-indigo-950/60 dark:to-gray-900/60 rounded-[3rem] p-8 md:p-16 text-white border border-blue-500/10 dark:border-gray-800 shadow-[0_20px_50px_rgba(59,130,246,0.1)] dark:shadow-none"
        >
          {/* Decorative Background Glows */}
          <div className="absolute top-[-30%] right-[-20%] w-[350px] h-[350px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-[-30%] left-[-20%] w-[350px] h-[350px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-left lg:max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-blue-500/10 text-white dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 dark:border-cyan-500/20">
                Let&apos;s Build Your Project
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Ready to Automate Your <br className="hidden md:inline" /> Business Processes?
              </h2>
              <p className="mt-4 text-base md:text-lg text-blue-100 dark:text-gray-300 leading-relaxed font-medium">
                Let&apos;s discuss your project. Book a free 15-minute consultation to identify exactly where your operations are losing hours and how we can automate them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-white dark:bg-blue-600 text-blue-700 dark:text-white px-8 py-4.5 rounded-2xl font-bold text-lg hover:shadow-xl dark:hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all text-center"
              >
                <Calendar size={20} />
                Book Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform ml-1" size={18} />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white/10 dark:bg-gray-800/80 hover:bg-white/20 dark:hover:bg-gray-700 border border-white/10 dark:border-gray-750 text-white px-8 py-4.5 rounded-2xl font-bold text-lg active:scale-95 transition-all text-center"
              >
                Send Message
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
