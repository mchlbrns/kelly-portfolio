import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Calendar, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: AI Automation & Full-Stack Insights | Michael Briones",
  description: "Insights on AI integration, workflow automation, and MVP development for founders and operations managers.",
  keywords: ["AI Blog", "Business Automation", "Founders Guide", "SaaS Development", "Next.js Insights"],
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Insights & Strategy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            Strategic guides on leveraging AI, automation, and custom software to scale operations and boost ROI.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 font-medium">
                  {post.summary}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-black bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Read More
                    <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Want insights delivered to your inbox?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto font-medium">
            Join other founders and operations managers who receive actionable automation and AI strategies twice a month.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-all"
          >
            Get Expert Advice
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
