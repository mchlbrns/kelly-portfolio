import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Code2, Layers, AlertCircle, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Michael Briones Case Study`,
    description: project.problem,
    openGraph: {
      title: `${project.title} | Michael Briones Case Study`,
      description: project.problem,
      images: [
        {
          url: project.imageUrl,
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: RouteProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <nav className="flex mb-8 text-sm font-medium text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li className="flex items-center space-x-2" aria-hidden="true">
              <span>/</span>
            </li>
            <li>
              <Link href="/#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
            </li>
            <li className="flex items-center space-x-2" aria-hidden="true">
              <span>/</span>
            </li>
            <li className="text-gray-900 dark:text-white aria-current" aria-current="page">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-8 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Section Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] overflow-hidden shadow-sm mb-12">
          <div className="relative h-[300px] md:h-[450px] w-full">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-bold uppercase tracking-wider rounded-md mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">{project.title}</h1>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Case Study Columns */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Problem section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2.5">
                <AlertCircle className="text-red-500" size={24} />
                The Problem
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.problem}</p>
            </section>

            {/* Challenge section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="challenge-heading">
              <h2 id="challenge-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2.5">
                <Layers className="text-indigo-500" size={24} />
                The Challenge
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.challenge}</p>
            </section>

            {/* Solution section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="solution-heading">
              <h2 id="solution-heading" className="text-2xl font-bold mb-4 text-gray-950 dark:text-white flex items-center gap-2.5">
                <CheckCircle className="text-green-500" size={24} />
                The Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.solution}</p>
            </section>

            {/* Architecture section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="architecture-heading">
              <h2 id="architecture-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2.5">
                <Code2 className="text-purple-500" size={24} />
                Technical Architecture
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.architecture}</p>
            </section>

            {/* Results section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="results-heading">
              <h2 id="results-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2.5">
                <CheckCircle className="text-blue-500" size={24} />
                Key Results & ROI
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.results}</p>
            </section>

            {/* Lessons section */}
            <section className="bg-white dark:bg-gray-900 p-8 md:p-10 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-labelledby="lessons-heading">
              <h2 id="lessons-heading" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2.5">
                <BookOpen className="text-orange-500" size={24} />
                Lessons Learned
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{project.lessonsLearned}</p>
            </section>

          </div>

          {/* Sidebar Panel */}
          <div className="space-y-8">
            
            {/* Meta Specifications */}
            <aside className="bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-3xl" aria-label="Project Meta Specifications">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Specs</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Technologies Used</h4>
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

                <div>
                  <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Links</h4>
                  <div className="flex flex-col gap-3">
                    {project.liveUrl && !project.liveUrl.includes("example.com") && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-gray-950 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        View Live <ExternalLink size={16} />
                      </a>
                    )}
                    
                    {project.githubUrl && project.githubUrl !== "https://github.com/mchlbrns" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        Source Code <Github size={16} />
                      </a>
                    )}

                    {!project.liveUrl && !project.githubUrl && (
                      <span className="text-sm text-gray-400 dark:text-gray-500 italic">No external links available for this internal automation project.</span>
                    )}
                  </div>
                </div>
              </div>
            </aside>
            
          </div>
          
        </div>

      </div>
    </div>
  );
}
