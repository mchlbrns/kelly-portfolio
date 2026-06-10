import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import type { Metadata } from "next";

interface PostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Michael Briones Blog`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://michaelbriones-dev.vercel.app/blog/${slug}`,
      type: "article",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://michaelbriones-dev.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://michaelbriones-dev.vercel.app/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://michaelbriones-dev.vercel.app/blog/${post.slug}` }
    ]
  };

  return (
    <article className="min-h-screen bg-white dark:bg-gray-950 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Header */}
      <header className="bg-gray-50 dark:bg-gray-900/40 py-16 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-8 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-500" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} className="text-blue-500" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-blue-500" /> 5 min read
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 -mt-10 mb-16">
        <div className="relative h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert prose-blue max-w-none">
          {/* Using a simple custom renderer for the mock Markdown content */}
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p className="text-xl text-gray-900 dark:text-white font-bold mb-12">
              {post.summary}
            </p>
            
            {/* Split and render content chunks (basic mock of markdown) */}
            {post.content.split('\n\n').map((chunk, index) => {
              if (chunk.startsWith('##')) {
                return <h2 key={index} className="text-3xl font-black text-gray-900 dark:text-white pt-8">{chunk.replace('## ', '')}</h2>;
              }
              return <p key={index}>{chunk}</p>;
            })}
          </div>
        </div>

        {/* Footer / Share */}
        <footer className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black">
                MB
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-white">Written by Michael Briones</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Automation & Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                <Share2 size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
