"use client";

import { m } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I am a passionate Full-Stack Developer specializing in building scalable web applications and integrating cutting-edge AI technologies to automate and optimize business processes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              With a strong foundation in modern web frameworks like Next.js and robust backend architectures, I bridge the gap between complex engineering and intuitive user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, I am exploring the latest advancements in artificial intelligence and contributing to open-source communities.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            {/* Skill badges */}
            {[
              "React / Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "OpenAI / LLMs",
              "PostgreSQL",
              "Tailwind CSS",
              "AWS / Vercel"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 text-center font-medium text-gray-800 dark:text-gray-200"
              >
                {skill}
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
