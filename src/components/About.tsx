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
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              AI Automation & Full-Stack Development
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              <p>
                I am a full-stack engineer and AI automation specialist dedicated to building clean, secure web portals and operational integrations. By combining modern React systems with robust backends and custom scripting, I design custom software that streamlines how teams execute manual workflows.
              </p>
              <p>
                Whether you need a Next.js developer to launch a responsive customer portal, an MVP developer to iterate a new SaaS idea, or desktop scripting to automate system pipelines, I deliver production-ready code. I build custom solutions using Next.js, Django, Python, Selenium, and AutoHotkey to save hours of manual work weekly.
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
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Upwork Verified Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "Django", "Web Development", "Web Design", "Automation",
                    "Selenium", "AutoHotkey", "Autoit", "Desktop Application", "C++",
                    "Game Design", "Game Development", "Data Entry", "Virtual Assistance"
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-sm font-semibold rounded-xl border border-green-100 dark:border-green-900/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Modern Stack & AI Integration</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js", "React 19", "TypeScript", "Tailwind 4",
                    "OpenAI API", "LangChain", "PostgreSQL", "Supabase",
                    "Node.js", "FastAPI", "Docker", "Vercel", "AWS", "CI/CD"
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-xl border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
