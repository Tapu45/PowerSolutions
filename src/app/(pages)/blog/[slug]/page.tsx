"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook,
  Tag as TagIcon
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const res = await fetch(`/api/blog?slug=${slug}&related=true`);
      if (!res.ok) throw new Error("Failed to fetch blog");
      return res.json();
    },
    enabled: !!slug,
  });

  const blog = data?.blog;
  const relatedBlogs = data?.relatedBlogs || [];

  if (isLoading) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-500 animate-pulse">Loading article...</p>
            </div>
        </div>
    );
  }

  if (!blog) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
             <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
                <Link href="/blog" className="text-blue-500 hover:underline">
                    Back to Blogs
                </Link>
             </div>
        </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-950 pb-20 py-12">
      {/* ProgressBar could be added here */}

      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        
        <img 
            src={blog.featuredImage || "/placeholder-blog.jpg"} 
            alt={blog.title}
            className="w-full h-full object-cover"
        />
      
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20 z-30">
            <div className="max-w-4xl mx-auto space-y-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap items-center gap-4 text-white/90 text-sm font-medium"
                >
                    {blog.category && (
                        <span className="px-3 py-1 bg-[#0B8FD6] rounded-full">
                            {blog.category.name}
                        </span>
                    )}
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.publishedAt && format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTimeMinutes} min read
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                    {blog.title}
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 pt-4"
                >
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg border-2 border-white">
                        {blog.author.name?.[0] || "A"}
                     </div>
                     <div>
                         <p className="text-white font-semibold text-lg">{blog.author.name}</p>
                         <p className="text-white/70 text-sm">Author</p>
                     </div>
                </motion.div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0B8FD6] mb-8 transition-colors"
                >
                <ArrowLeft className="w-4 h-4" /> Back to Blogs
              </Link>
              
              <div 
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-[#0B8FD6] prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                          <TagIcon className="w-4 h-4" /> Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                          {blog.tags.map((t: any) => (
                              <span 
                                key={t.tag.id}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-sm"
                              >
                                  #{t.tag.name}
                              </span>
                          ))}
                      </div>
                  </div>
              )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
              {/* Share Widget */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sticky top-24">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-[#0B8FD6]" /> Share this article
                  </h3>
                  <div className="flex gap-2">
                      <button className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:text-[#0077b5] transition-colors shadow-sm">
                          <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:text-[#1DA1F2] transition-colors shadow-sm">
                          <Twitter className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:text-[#4267B2] transition-colors shadow-sm">
                          <Facebook className="w-5 h-5" />
                      </button>
                  </div>
              </div>
          </div>
      </div>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedBlogs.map((related: any) => (
                      <Link 
                        key={related.id} 
                        href={`/blog/${related.slug}`}
                        className="group block"
                      >
                          <div className="h-48 overflow-hidden rounded-xl mb-4">
                              <img 
                                src={related.featuredImage || "/placeholder-blog.jpg"} 
                                alt={related.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              />
                          </div>
                          <h3 className="font-bold text-lg mb-2 group-hover:text-[#0B8FD6] transition-colors">
                              {related.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              {related.publishedAt && format(new Date(related.publishedAt), "MMM dd, yyyy")}
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      )}
    </article>
  );
}
