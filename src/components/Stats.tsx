"use client";

import { m } from "framer-motion";
import { Award, Briefcase, Smile, Cpu } from "lucide-react";

const stats = [
  {
    label: "Years Experience",
    value: "5+ Years",
    icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: "Full-stack python & automation coding"
  },
  {
    label: "Projects Delivered",
    value: "50+",
    icon: <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    description: "Scalable platforms, APIs & desktop tools"
  },
  {
    label: "Client Satisfaction",
    value: "100%",
    icon: <Smile className="w-8 h-8 text-green-600 dark:text-green-400" />,
    description: "Consistently rated 5 stars on Upwork"
  },
  {
    label: "Core Technologies",
    value: "15+ Techs",
    icon: <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    description: "Next.js, Django, AHK, Selenium"
  }
];

export function Stats() {
  return (
    <section id="stats" className="py-16 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900" aria-label="Key Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-8 bg-gray-50 dark:bg-gray-900/40 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-white dark:bg-gray-950 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-800">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black mb-2 tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-base font-bold text-gray-800 dark:text-gray-200 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 leading-normal">
                {stat.description}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
