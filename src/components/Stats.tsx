"use client";

import { m } from "framer-motion";
import { Award, Briefcase, Cpu, Zap, HeartHandshake } from "lucide-react";

const stats = [
  {
    label: "Professional Experience",
    value: "5+ Years",
    icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: "Deep full-stack & backend systems expertise"
  },
  {
    label: "Projects Completed",
    value: "50+",
    icon: <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    description: "Web apps, automation scripts & web scrapers"
  },
  {
    label: "Technologies Mastered",
    value: "20+",
    icon: <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    description: "Next.js, Python, Django, SQL & Cloud APIs"
  },
  {
    label: "Project Delivery",
    value: "Fast Turnaround",
    icon: <Zap className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    description: "AI-assisted rapid prototyping & deployment"
  },
  {
    label: "Client Guarantee",
    value: "Long-Term Care",
    icon: <HeartHandshake className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    description: "Dedicated post-launch support & updates"
  }
];

export function Stats() {
  return (
    <section id="stats" className="py-16 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col p-6 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-white dark:bg-gray-950 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-800">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black mb-2 tracking-tight text-gray-900 dark:text-white leading-tight">
                {stat.value}
              </div>
              <div className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-auto font-medium">
                {stat.description}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
