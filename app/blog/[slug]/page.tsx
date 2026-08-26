import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostsData } from "@/data/blog";
import { Calendar, Clock, User, ArrowLeft, ChevronRight, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related articles (excluding the active one)
  const related = blogPostsData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header Hero */}
      <section className="relative py-16 sm:py-24 bg-slate-50 dark:bg-brand-navy border-b border-gray-150 dark:border-slate-800/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container className="relative z-10 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">
            <Link href="/blog" className="hover:text-brand-blue transition-colors">
              Journal
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-600 dark:text-slate-350 font-bold">{post.category}</span>
          </div>

          <div className="space-y-4 text-left">
            <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase bg-brand-blue text-white shadow-sm">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy dark:text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-gray-500 font-semibold">
              <div className="flex items-center space-x-2">
                <Clock className="h-4.5 w-4.5 text-brand-indigo" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4.5 w-4.5 text-brand-indigo" />
                <span>Published {post.date}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 bg-white dark:bg-brand-navy">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Graphic Banner */}
              <div className="h-64 rounded-3xl bg-gradient-to-tr from-brand-indigo/35 via-brand-violet/35 to-brand-blue/35 border border-gray-150 dark:border-slate-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/10 z-10" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <BookOpen className="h-10 w-10 text-white opacity-40" />
              </div>

              {/* Editorial Content */}
              <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
                {post.content.split("\n\n").map((para, idx) => {
                  if (para.startsWith("###")) {
                    return (
                      <h3 key={idx} className="text-lg sm:text-xl font-bold text-brand-navy dark:text-white pt-4">
                        {para.replace("###", "").trim()}
                      </h3>
                    );
                  }
                  return <p key={idx}>{para}</p>;
                })}
              </div>

              {/* Author footer card */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-gray-150 dark:border-slate-800 flex items-center space-x-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-gray-150 dark:border-slate-750 shrink-0">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-brand-navy dark:text-white">
                    Written by {post.author.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {post.author.role} • MadProTek Strategic Insights Unit
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Column: Related articles */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-indigo pb-3 border-b border-gray-100 dark:border-slate-850">
                Related Articles
              </h3>

              <div className="space-y-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="block p-4 bg-slate-50 dark:bg-slate-900/30 hover:bg-white dark:hover:bg-slate-850/50 rounded-2xl border border-gray-150 dark:border-slate-800 hover:shadow-md transition-all group"
                  >
                    <span className="text-[9px] font-black text-brand-indigo uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-brand-navy dark:text-white mt-1 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                    <span className="inline-flex items-center text-[10px] font-bold text-brand-blue mt-3 group-hover:underline">
                      <span>Read article</span>
                      <ChevronRight className="h-3 w-3 ml-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Back button foot */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/10 border-t border-gray-150 dark:border-slate-800/30">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-brand-navy dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to all articles</span>
          </Link>
        </Container>
      </section>
    </div>
  );
}
