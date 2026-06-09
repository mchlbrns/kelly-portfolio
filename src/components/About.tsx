"use client";

import { m } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-md mb-6 uppercase tracking-widest">
              My Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              I build tools that bridge the gap between code and commerce.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                As a full-stack engineer, I don&apos;t just write functions; I design systems that optimize how businesses operate. My focus is on the intersection of robust backend architecture and high-conversion user interfaces.
              </p>
              <p>
                In an era of generic solutions, I specialize in custom AI integrations that provide measurable ROI—automating the repetitive so you can focus on the creative.
              </p>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Core Tech", skills: ["Next.js", "React 19", "TypeScript", "Tailwind 4"] },
                { label: "AI & Data", skills: ["OpenAI API", "LangChain", "PostgreSQL", "Supabase"] },
                { label: "Backend", skills: ["Node.js", "Python", "FastAPI", "Docker"] },
                { label: "Infrastructure", skills: ["Vercel", "AWS", "GitHub Actions", "CI/CD"] }
              ].map((group, idx) => (
                <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span key={i} className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {skill} {i !== group.skills.length - 1 && "•"}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
