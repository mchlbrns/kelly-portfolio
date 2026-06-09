"use client";

import { m } from "framer-motion";
import { Code2, Sparkles, Rocket } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern frameworks. Scalable, performant, and secure backends paired with intuitive, responsive frontends.",
    icon: <Code2 size={32} className="text-blue-500" />,
    tech: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "AI Automation",
    description: "Intelligent workflows that save time and reduce costs. Custom AI agents and integrations that put your business on autopilot.",
    icon: <Sparkles size={32} className="text-purple-500" />,
    tech: ["Custom GPTs", "LangChain", "OpenAI API", "Make/Zapier"],
  },
  {
    title: "Portfolio / MVP Development",
    description: "Rapid prototyping and MVP development to test your ideas in the market. From concept to deployed application in record time.",
    icon: <Rocket size={32} className="text-orange-500" />,
    tech: ["Vercel", "Tailwind CSS", "Figma", "Stripe Integration"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Services & Offerings
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Specialized solutions designed to help your business scale efficiently and stand out in the digital landscape.
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <div className="mb-6 inline-block p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
