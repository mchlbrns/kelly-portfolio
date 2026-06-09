"use client";

import { m } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Workflow, 
  Layers, 
  Terminal, 
  RefreshCw 
} from "lucide-react";

const services = [
  {
    title: "Custom Web Applications",
    icon: <Code2 size={24} className="text-blue-500" />,
    problem: "Out-of-the-box platforms lack flexibility, forcing you to adjust your business processes to fit generic software limits.",
    solution: "We build bespoke full-stack applications (Next.js, React, Node.js) tailored exactly to your unique business operations.",
    outcome: "A tailored system that fits your workflow perfectly, driving team speed, automation, and customer satisfaction.",
  },
  {
    title: "Workflow Automation",
    icon: <Workflow size={24} className="text-amber-500" />,
    problem: "Staff members spend hours daily copy-pasting records, preparing reports, or manually syncing spreadsheet fields.",
    solution: "We create automated background tasks, Selenium browser pipelines, and robust desktop script controls (AHK, Autoit).",
    outcome: "Reclaim 15+ hours weekly per team member and eliminate manual data entry human errors entirely.",
  },
  {
    title: "AI & LLM Integration",
    icon: <Cpu size={24} className="text-purple-500" />,
    problem: "Repetitive customer support requests or unstructured document analysis slows down operations and overwhelms staff.",
    solution: "We integrate custom OpenAI GPT models, LangChain agents, and pinecone semantic search vector database structures.",
    outcome: "Instantly respond to support inquiries autonomously and extract structured insights from files in seconds.",
  },
  {
    title: "SaaS Product Development",
    icon: <Layers size={24} className="text-indigo-500" />,
    problem: "Launching a software product requires complex multi-tenant billing, authentication, and robust cloud configurations.",
    solution: "We build secure web MVPs featuring Stripe subscriptions, secure auth systems, and cloud management dashboards.",
    outcome: "Launch your product to market faster with a production-ready, highly secure platform built to scale.",
  },
  {
    title: "API Design & Integration",
    icon: <Terminal size={24} className="text-cyan-500" />,
    problem: "Siloed legacy programs and modern cloud platforms cannot communicate, creating duplicate data entries and delays.",
    solution: "We design custom REST APIs, webhook endpoints, database synchronizers, and system communication layers.",
    outcome: "A single source of truth across all systems with automated, instant operations updates.",
  },
  {
    title: "Legacy Systems Modernization",
    icon: <RefreshCw size={24} className="text-red-500" />,
    problem: "Slow legacy desktop systems degrade operational speed, are difficult to maintain, and crash frequently.",
    solution: "We optimize legacy SQL databases (SQL Server, MySQL) and migrate core offline software workflows to fast cloud services.",
    outcome: "Achieve 99.9% uptime, optimized query responses, and stable, maintainable systems that support business scaling.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-gray-950/20 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-4 mb-4"
          >
            <div className="h-px w-12 bg-blue-600 hidden md:block" />
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Capabilities</span>
          </m.div>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black"
          >
            Solutions built to drive <br /> growth & operating efficiency.
          </m.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-950 w-fit rounded-2xl group-hover:bg-blue-650 group-hover:text-white transition-colors duration-300 border border-gray-150 dark:border-gray-800">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{service.title}</h3>

              <div className="space-y-4 flex-grow mb-8 text-base">
                <div>
                  <span className="text-xs font-black text-red-500 dark:text-red-400 uppercase tracking-widest block mb-1">Problem</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{service.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-black text-green-650 dark:text-green-400 uppercase tracking-widest block mb-1">Solution</span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{service.solution}</p>
                </div>
                <div className="p-4 bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 rounded-2xl mt-4">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-450 uppercase tracking-widest block mb-1">Outcome</span>
                  <p className="text-gray-900 dark:text-gray-250 leading-relaxed font-bold">{service.outcome}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
