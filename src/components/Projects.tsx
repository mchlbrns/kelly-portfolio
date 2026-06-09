"use client";

import { m } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Developer Portfolio Transformation",
    category: "Full-Stack & MVP",
    problem: "Needed a professional, lead-generating portfolio instead of a basic boilerplate.",
    solution: "Transformed a simple Vercel deployment into a modern Next.js 14 application with a focus on conversion and performance.",
    result: "Achieved 90+ Lighthouse score, responsive design, and integrated lead generation systems.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://kelly-portfolio-delta.vercel.app",
    githubUrl: "https://github.com/mchlbrns/kelly-portfolio",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Developer Portfolio Workspace",
  },
  {
    title: "AI Customer Support Agent",
    category: "AI Automation",
    problem: "High volume of repetitive customer inquiries overwhelming support staff.",
    solution: "Developed a custom LangChain agent utilizing OpenAI API to handle tier-1 support tickets autonomously.",
    result: "Reduced average response time by 85% and successfully resolved 60% of inquiries without human intervention.",
    tech: ["Python", "LangChain", "OpenAI API", "React", "Node.js"],
    liveUrl: "https://example.com/ai-agent",
    githubUrl: "https://github.com/mchlbrns",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "AI Customer Support Diagram",
  },
  {
    title: "Excel Automation & AutoHotkey Scripting",
    category: "Workflow Automation",
    problem: "Client was losing 15+ hours weekly to manual spreadsheet updates and redundant data copying between local apps.",
    solution: "Developed customized AutoHotkey scripts and macros that automated spreadsheet queries, cell calculations, and cross-application data transfers.",
    result: "Saved 100% of manual effort for the targeted workflows and achieved zero data entry error rates.",
    tech: ["AutoHotkey", "Microsoft Excel", "Automation", "Windows Scripting"],
    liveUrl: "",
    githubUrl: "https://github.com/mchlbrns",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Excel Spreadsheet Automation Illustration",
  },
  {
    title: "Google Sheets & Telegram Chatbot",
    category: "Bot Development",
    problem: "Needed a real-time messaging system that could dynamically query inventory and status details stored in a Google Sheet for remote technicians.",
    solution: "Built a lightweight Telegram chatbot in Python that authenticated requests, fetched and formatted cell data via the Google Sheets API, and delivered instant response updates.",
    result: "Technicians retrieved data in under 2 seconds, reducing support desk inquiries by 40%.",
    tech: ["Python", "Google Sheets API", "Telegram Bot API", "Serverless"],
    liveUrl: "",
    githubUrl: "https://github.com/mchlbrns",
    imageUrl: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=1000",
    imageAlt: "Chatbot Automation Illustration",
  }
];

export function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Work
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A selection of recent projects showcasing my expertise in full-stack engineering and AI automation.
          </m.p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h3>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        The Problem
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        The Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        The Result
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{project.result}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        View Live <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        Source Code <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-950 flex items-center justify-center min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-800 relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
