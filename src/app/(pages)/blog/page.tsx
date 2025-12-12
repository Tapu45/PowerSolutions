"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search, Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  createdAt: string;
  publishedAt: string | null;
  readTimeMinutes: number | null;
  author: {
    name: string;
    avatar: string | null;
  };
  category: {
    name: string;
    slug: string;
  } | null;
  tags: Array<{
    tag: {
      name: string;
    };
  }>;
}

export default function PublicBlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch Categories
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/api/blog/category");
      if (!res.ok) return { categories: [] };
      return res.json();
    },
  });

  // Fetch Blogs
  const { data: blogsData, isLoading } = useQuery({
    queryKey: ["public-blogs", debouncedSearch, selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams({
        status: "PUBLISHED",
        limit: "50",
      });
      if (debouncedSearch) params.append("search", debouncedSearch);
      if (selectedCategory) params.append("categoryId", selectedCategory);

      const res = await fetch(`/api/blog?${params}`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      return res.json();
    },
  });

  const blogs = blogsData?.blogs || [];
  const featuredBlog = blogs[0];
  const gridBlogs =
    debouncedSearch || selectedCategory ? blogs : blogs.slice(1);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20 py-6">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 lg:px-12 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          {/* Light mode backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:hidden" />

          {/* Dark mode backgrounds */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          {/* Animated gradient orbs - light mode */}
          <div className="absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse dark:hidden" />
          <div className="absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse dark:hidden" />

          {/* Animated gradient orbs - dark mode */}
          <div className="hidden dark:block absolute top-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30" />
          <div className="hidden dark:block absolute bottom-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B8FD6] via-[#1BCDC5] to-[#D6CE0B]">
              Insights & Innovations
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
          >
            Explore the latest thoughts, tutorials, and trends in technology and
            business solutions.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative mt-6 md:mt-8 px-4"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0B8FD6] via-[#1BCDC5] to-[#D6CE0B] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 dark:opacity-20 dark:group-hover:opacity-40" />
              <div className="relative bg-white dark:bg-gray-950 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-blue-500/10 flex items-center p-2 md:p-3 border border-transparent dark:border-gray-800">
                <Search className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, or trends..."
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-3 md:px-4 py-2 text-sm md:text-base"
                />
              </div>
            </div>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 px-4"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                !selectedCategory
                  ? "bg-gradient-to-r from-[#0B8FD6] to-[#1BCDC5] text-white shadow-lg scale-105 dark:shadow-blue-500/30"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-[#0B8FD6] dark:hover:border-[#1BCDC5] hover:text-[#0B8FD6] dark:hover:text-[#1BCDC5]"
              }`}
            >
              All Articles
            </button>
            {categoriesData?.categories?.map((cat: any, idx: number) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                onClick={() =>
                  setSelectedCategory((curr) =>
                    curr === cat.id ? null : cat.id
                  )
                }
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[#D6CE0B] to-[#FFD700] text-black shadow-lg scale-105 dark:shadow-yellow-500/30"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-[#D6CE0B] dark:hover:border-[#FFD700] hover:text-[#D6CE0B] dark:hover:text-[#FFD700]"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-80 md:h-96 bg-gray-200 dark:bg-gray-900 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {!debouncedSearch && !selectedCategory && featuredBlog && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12 md:mb-16 group relative"
              >
                <Link href={`/blog/${featuredBlog.slug}`}>
                  <div className="relative h-64 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-2xl md:rounded-3xl blog-image-container">
                    {/* Image */}
                    <img
                      src={
                        featuredBlog.featuredImage || "/placeholder-blog.jpg"
                      }
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Content */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 z-20 text-white"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.0) 100%)",
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4 text-xs md:text-sm font-medium opacity-90">
                        {featuredBlog.category && (
                          <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-[#0B8FD6] to-[#1BCDC5] text-white rounded-full">
                            {featuredBlog.category.name}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 md:w-4 h-3 md:h-4" />
                          {featuredBlog.readTimeMinutes} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 md:w-4 h-3 md:h-4" />
                          {featuredBlog.publishedAt &&
                            format(
                              new Date(featuredBlog.publishedAt),
                              "MMM dd"
                            )}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight line-clamp-3 group-hover:text-[#D6CE0B] transition-colors">
                        {featuredBlog.title}
                      </h2>

                      <p className="text-sm md:text-base text-gray-200 max-w-2xl line-clamp-2 mb-4 md:mb-6">
                        {featuredBlog.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-4 transition-all">
                        Read Article{" "}
                        <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence>
                {gridBlogs.map((blog: Blog, idx: number) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col h-full bg-white dark:bg-gray-950 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-[#0B8FD6] dark:hover:border-[#1BCDC5]"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="flex flex-col h-full"
                    >
                      {/* Image Container */}
                      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden  blog-image-container">
                        {blog.featuredImage && (
                          <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        )}

                        {/* Category Badge */}
                        {blog.category && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-3 md:top-4 left-3 md:left-4"
                          >
                            <span className="px-2.5 md:px-3 py-1 bg-gradient-to-r from-[#0B8FD6] to-[#1BCDC5] text-white text-xs font-bold rounded-full shadow-lg dark:shadow-blue-500/30">
                              {blog.category.name}
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 md:p-6 flex flex-col">
                        {/* Meta Info */}
                        <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3 md:mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            {blog.publishedAt &&
                              format(new Date(blog.publishedAt), "MMM dd")}
                          </span>
                          <span className="text-gray-300 dark:text-gray-700">
                            •
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 md:w-4 md:h-4" />
                            {blog.readTimeMinutes} min
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#0B8FD6] dark:group-hover:text-[#D6CE0B] transition-colors">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 md:mb-6 flex-1">
                          {blog.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-7 md:w-8 h-7 md:h-8 rounded-full bg-gradient-to-br from-[#0B8FD6] to-[#1BCDC5] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                              {blog.author.name?.[0] || "U"}
                            </div>
                            <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                              {blog.author.name}
                            </span>
                          </div>
                          <span className="text-[#0B8FD6] dark:text-[#D6CE0B] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 ml-2">
                            <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {blogs.length === 0 && !isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 md:py-20"
              >
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 md:w-10 h-8 md:h-10 text-gray-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  No articles found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
                  Try adjusting your search or category filter
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
