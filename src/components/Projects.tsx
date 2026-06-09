"use client";

import { m, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

const categories = ["All", "AI Automation", "Full Stack", "Workflow Automation", "Desktop Apps"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Desktop Apps") {
      // Map Windows Scripting/AutoHotkey to Desktop Apps category
      return project.tech.includes("AutoHotkey") || project.category === "Desktop Apps";
    }
    return project.category === selectedCategory;
  });

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
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            A selection of recent projects showcasing my expertise in full-stack engineering, workflow automations, and AI integrations.
          </m.p>

          {/* Filtering tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <m.div layout className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <m.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
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

                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        Read Case Study <BookOpen size={18} />
                      </Link>
                      
                      {project.liveUrl && !project.liveUrl.includes("example.com") && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          View Live <ExternalLink size={18} />
                        </a>
                      )}
                      
                      {project.githubUrl && project.githubUrl !== "https://github.com/mchlbrns" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
