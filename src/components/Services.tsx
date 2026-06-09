"use client";

import { m } from "framer-motion";
import { Code2, Sparkles, Rocket } from "lucide-react";

const services = [
  {
    title: "Full-Stack Systems",
    description: "Developing robust architectures that prioritize speed and reliability. I build with the long-term maintainability of your product in mind.",
    icon: <Code2 size={24} className="text-blue-500" />,
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "AI & Automation",
    description: "Integrating LLMs and automated workflows directly into your business operations to eliminate manual bottlenecks and improve efficiency.",
    icon: <Sparkles size={24} className="text-purple-500" />,
    tech: ["OpenAI", "LangChain", "n8n", "Python"],
  },
  {
    title: "MVP Engineering",
    description: "Taking products from 0 to 1. I specialize in rapid deployment of functional prototypes that allow you to validate your market fit faster.",
    icon: <Rocket size={24} className="text-orange-500" />,
    tech: ["Auth", "Stripe", "Dashboard UX", "Analytics"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Capabilities</span>
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black"
          >
            Solutions that drive <br /> growth & efficiency.
          </m.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white dark:bg-gray-950 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-900 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500"
                  >
                    {tech} {i !== service.tech.length - 1 && "•"}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
