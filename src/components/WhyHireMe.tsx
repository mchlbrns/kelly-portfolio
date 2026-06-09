"use client";

import { m } from "framer-motion";
import { 
  Award, 
  Zap, 
  MessageSquare, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  LifeBuoy, 
  TrendingUp 
} from "lucide-react";

const reasons = [
  {
    title: "5+ Years Professional Experience",
    description: "Half a decade of proven full-stack and systems engineering experience building systems that work reliably under heavy enterprise operations workloads.",
    icon: <Award size={24} className="text-blue-500" />,
  },
  {
    title: "Business Automation Specialist",
    description: "Expertise in identifying manual bottlenecks and eliminating them completely using custom automation scripts, APIs, and background cron systems.",
    icon: <Zap size={24} className="text-amber-500" />,
  },
  {
    title: "AI-Powered Workflow",
    description: "Leverages cutting-edge AI coding and deployment pipelines, allowing for 2x faster prototype iteration, rapid bug resolution, and lower development costs.",
    icon: <Cpu size={24} className="text-purple-500" />,
  },
  {
    title: "Fast & Clear Communication",
    description: "Responsive updates, detailed progress tracking, and proactive documentation ensure you are never in the dark about your project status.",
    icon: <MessageSquare size={24} className="text-cyan-500" />,
  },
  {
    title: "Clean, Maintainable Code",
    description: "Strict adherence to clean code principles, type safety, modular structures, and Git version control, making it easy for any developer to scale in the future.",
    icon: <ShieldCheck size={24} className="text-emerald-500" />,
  },
  {
    title: "Scalable Architecture",
    description: "Designs robust databases, optimized SQL schemas, and highly performance-tuned Next.js and Django layouts that can handle thousands of concurrent queries.",
    icon: <Layers size={24} className="text-indigo-500" />,
  },
  {
    title: "Long-Term Support & Care",
    description: "Provides dedicated post-launch maintenance, troubleshooting support, and system monitoring to ensure smooth operations as your business scales.",
    icon: <LifeBuoy size={24} className="text-red-500" />,
  },
  {
    title: "Outcome & ROI Focused",
    description: "I don't just write lines of code. I focus on saving you hours of work, reducing operational overhead, and driving higher client conversion rates.",
    icon: <TrendingUp size={24} className="text-green-500" />,
  },
];

export function WhyHireMe() {
  return (
    <section id="why-hire" className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-900/30"
          >
            The Value Addition
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Why hire a Specialist over <br className="hidden sm:inline" /> a generic developer?
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4"
          >
            I focus on solving business challenges, eliminating repetitive work, and building high-performance systems with clear outcomes.
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800/80 hover:border-blue-500/50 dark:hover:border-blue-400/30 hover:bg-white dark:hover:bg-gray-900/80 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 p-3 bg-white dark:bg-gray-950 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-800">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-950 dark:text-white leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-auto font-medium">
                {reason.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
