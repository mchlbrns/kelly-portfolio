"use client";

import { useState } from "react";
import { m, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Briefcase, 
  GraduationCap, 
  Download, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Cpu, 
  Settings, 
  ExternalLink,
  FileText,
  Eye,
  CheckCircle,
  Languages
} from "lucide-react";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  const skillsData = [
    {
      category: "Programming & Frameworks",
      icon: <Code2 className="text-blue-500" size={22} />,
      items: ["Python", "VB.NET", "JavaScript", "HTML5", "CSS3", "Django", "React", "Next.js", "TypeScript"]
    },
    {
      category: "Databases & Design",
      icon: <Database className="text-cyan-500" size={22} />,
      items: ["SQL Server", "MySQL", "Database Schema Design", "Stored Procedures", "Query Optimization"]
    },
    {
      category: "Automation & IT Systems",
      icon: <Cpu className="text-indigo-500" size={22} />,
      items: ["Selenium Automation", "AutoHotkey Scripting", "Autoit Macroing", "Windows COM Interop", "System Performance Tuning"]
    },
    {
      category: "Tools & Methodologies",
      icon: <Settings className="text-purple-500" size={22} />,
      items: ["Git Version Control", "Technical Documentation", "Disaster Recovery", "System Integration", "Agile SDLC"]
    }
  ];

  const experienceData = [
    {
      company: "Summit Collection & Allied Services Inc.",
      role: "Software Developer & IT Systems Engineer",
      period: "March 2022 – Present",
      bullets: [
        "Architected and deployed advanced automation scripts and software solutions using Python and VB.NET, reducing manual workloads and increasing processing speed across core business units.",
        "Led the optimization of data architecture, designing high-performance SQL schemas and stored procedures that handle large-scale datasets with minimal latency.",
        "Strategized and implemented enterprise-level disaster recovery and database backup protocols, ensuring 100% data integrity and business continuity.",
        "Managed end-to-end SDLC for internal applications, driving technical requirements and delivering robust, user-centric tools for debt collection and reporting.",
        "Oversaw complex network and system performance, proactively resolving infrastructure bottlenecks to maintain 99.9% system uptime."
      ]
    },
    {
      company: "Cybersoft Content Services Inc.",
      role: "IT Technical Support",
      period: "Dec 2018 – April 2021",
      bullets: [
        "Spearheaded first-level technical support, consistently achieving a 95% customer satisfaction rating by resolving complex OS and hardware issues.",
        "Launched an internal knowledge base system, which reduced average ticket resolution time by 20% and empowered users with self-help resources.",
        "Facilitated technical onboarding and training for new hires, accelerating their time-to-productivity and ensuring seamless integration into the company's IT environment.",
        "Authored comprehensive technical documentation, improving the overall reliability and maintainability of internal IT systems."
      ]
    },
    {
      company: "National Kidney Transplant Institute",
      role: "Intern IT Support",
      period: "July 2018 – Sept 2018",
      bullets: [
        "Assisted hospital staff in resolving technical issues, ensuring minimal disruption to critical healthcare operations.",
        "Deployed and configured specialized medical software, contributing to the seamless integration of technology into patient care workflows.",
        "Provided on-site support for medical imaging systems and assisted in the implementation of security protocols to safeguard patient data."
      ]
    }
  ];

  const projectsData = [
    {
      title: "Collection Agency System",
      tech: "VB.NET, Windows Forms, SQL Server",
      description: "Led maintenance and development focusing on user-friendly Windows Forms. Implemented features that reduced critical task response time by 25% and enhanced user satisfaction by 20%."
    },
    {
      title: "Company Website & Portal",
      tech: "Django, Python, Bootstrap, JavaScript",
      description: "Developed and maintained a robust, scalable web application. Designed responsive user interfaces and integrated interactive features using JavaScript, improving overall site accessibility and engagement."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-28 pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-100 left-[-100px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Controls header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <Link 
            href="/"
            className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Portfolio
          </Link>

          {/* Toggle switcher */}
          <div className="flex items-center bg-gray-200/80 dark:bg-gray-900/80 p-1.5 rounded-2xl border border-gray-300/50 dark:border-gray-800 backdrop-blur-sm shadow-inner">
            <button
              onClick={() => setViewMode("interactive")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                viewMode === "interactive"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Cpu size={16} />
              Interactive CV
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                viewMode === "pdf"
                  ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Eye size={16} />
              PDF Document
            </button>
          </div>

          {/* PDF Download Button */}
          <a
            href="/Michael_Briones_CV.pdf"
            download="Michael_Briones_CV.pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        {/* main container */}
        {viewMode === "interactive" ? (
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Header info card */}
            <m.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] pointer-events-none" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 relative z-10">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-3">
                    Michael Briones
                  </h1>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400 mb-6">
                    Software Developer | Automation Specialist | IT Systems Engineer
                  </p>
                  
                  <div className="flex flex-wrap gap-y-3 gap-x-6 text-gray-600 dark:text-gray-400 font-medium">
                    <a 
                      href="mailto:michaelbriones113@gmail.com" 
                      className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mail size={16} />
                      michaelbriones113@gmail.com
                    </a>
                    <span className="flex items-center gap-2">
                      <Phone size={16} />
                      +63 912 451 6388
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      Quezon City, Philippines
                    </span>
                  </div>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 pt-6 md:pt-0 md:pl-10 flex flex-col gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-100 dark:border-green-900/30 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for Projects
                  </span>
                  
                  <a
                    href="https://cal.com/michael-briones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95"
                  >
                    Schedule Consultation <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </m.div>

            {/* Summary card */}
            <m.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 md:p-10 shadow-lg"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                <FileText className="text-blue-500" size={20} />
                Professional Summary
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                Results-driven Software Developer and Automation Specialist with 5+ years of comprehensive experience in IT development, system automation, and technical infrastructure. Expert in engineering scalable solutions using Python and VB.NET, streamlining business workflows through intelligent automation, and managing complex database environments. Proven ability to lead technical projects from conception to deployment, significantly enhancing operational efficiency and system reliability.
              </p>
            </m.div>

            {/* Timeline Experience & Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Experience (Left 2 cols) */}
              <div className="lg:col-span-2 space-y-8">
                <m.div
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 md:p-10 shadow-lg"
                >
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                    <Briefcase className="text-blue-500" size={20} />
                    Work Experience
                  </h2>

                  <div className="relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-2 space-y-12 pl-6 md:pl-8">
                    {experienceData.map((job, idx) => (
                      <div key={idx} className="relative">
                        {/* Dot indicator */}
                        <span className="absolute -left-[37px] md:-left-[45px] top-1.5 flex items-center justify-center bg-blue-600 text-white w-6 h-6 rounded-full border-4 border-white dark:border-gray-950 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        </span>

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-1">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                              {job.role}
                            </h3>
                            <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
                              {job.company}
                            </h4>
                          </div>
                          <span className="text-sm font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/80 px-3 py-1 rounded-full w-fit">
                            {job.period}
                          </span>
                        </div>

                        <ul className="space-y-2.5 text-gray-600 dark:text-gray-400 text-base leading-relaxed pl-1">
                          {job.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2">
                              <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </m.div>
              </div>

              {/* Skills (Right 1 col) */}
              <div className="space-y-8">
                <m.div
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                    <Code2 className="text-blue-500" size={20} />
                    Skills
                  </h2>

                  <div className="space-y-6">
                    {skillsData.map((group, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                          {group.icon}
                          {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200/50 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </m.div>

                {/* Education card */}
                <m.div
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                    <GraduationCap className="text-blue-500" size={20} />
                    Education
                  </h2>

                  <div className="space-y-6">
                    <div className="border-l-2 border-blue-500/30 pl-4 space-y-1">
                      <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400">BS Information Technology</h3>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">Access Computer College</h4>
                      <p className="text-xs font-bold text-gray-400">2015 – 2019 | GPA: 3.3</p>
                    </div>

                    <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4 space-y-1">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">High School Graduate</h3>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">Claro M. Recto High School</h4>
                      <p className="text-xs font-bold text-gray-400">2011 – 2015</p>
                    </div>
                  </div>
                </m.div>

                {/* Languages card */}
                <m.div
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                    <Languages className="text-blue-500" size={20} />
                    Languages
                  </h2>
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1.5 text-base font-bold text-gray-700 dark:text-gray-300">
                      <CheckCircle size={14} className="text-green-500" /> English
                    </span>
                    <span className="flex items-center gap-1.5 text-base font-bold text-gray-700 dark:text-gray-300">
                      <CheckCircle size={14} className="text-green-500" /> Filipino
                    </span>
                  </div>
                </m.div>
              </div>
            </div>

            {/* Featured Projects Card */}
            <m.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-900/85 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-[2rem] p-8 md:p-10 shadow-lg"
            >
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8 uppercase tracking-wider border-b border-gray-100 dark:border-gray-800 pb-3 flex items-center gap-2">
                <Code2 className="text-blue-500" size={20} />
                Key Project Implementations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 bg-gray-50 dark:bg-gray-950 border border-gray-200/60 dark:border-gray-800 rounded-2xl flex flex-col hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">{project.tech}</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>
                  </div>
                ))}
              </div>
            </m.div>
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            {/* Embedded Iframe Container */}
            <div className="bg-gray-100 dark:bg-gray-950 p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                <span className="text-xs font-bold text-gray-500 ml-2">Michael_Briones_CV.pdf</span>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 italic hidden sm:block">Scroll within the frame to read</span>
            </div>

            <div className="h-[75vh] w-full bg-gray-200 dark:bg-gray-900">
              <iframe
                src="/Michael_Briones_CV.pdf#toolbar=1&navpanes=0"
                width="100%"
                height="100%"
                title="Michael Briones CV Document"
                className="border-none"
              />
            </div>
          </m.div>
        )}
      </div>
    </div>
  );
}
