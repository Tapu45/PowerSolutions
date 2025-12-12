"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye, Search, ArrowLeft, ExternalLink } from "lucide-react";
import CreateBlogForm from "./lazy/CreateBlogForm";
import EditBlogModal from "./lazy/EditBlogModal";
import { format } from "date-fns";

const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt: string | null;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  category: {
    id: string;
    name: string;
  } | null;
  categoryId: string | null;
  tags: Array<{
    tag: {
      id: string;
      name: string;
    };
  }>;
  _count: {
    comments: number;
    likes: number;
  };
}

export default function BlogsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();

  // Fetch blogs
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs", currentPage],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
      });
      const response = await fetch(`/api/blog?${params}`);
      if (!response.ok) throw new Error("Failed to fetch blogs");
      return response.json();
    },
  });

  // Delete blog mutation
  const deleteMutation = useMutation({
    mutationFn: async (blogId: string) => {
      const response = await fetch(`/api/blog?id=${blogId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete blog");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const handleDelete = async (blogId: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      deleteMutation.mutate(blogId);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PUBLISHED":
        return TEAL;
      case "DRAFT":
        return YELLOW;
      case "ARCHIVED":
        return "#8B2121";
      default:
        return "#6B7280";
    }
  };

  const filteredBlogs = data?.blogs?.filter((blog: Blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateSuccess = () => {
    setShowCreateForm(false);
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
  };

  // Show Create Form
   if (showCreateForm) {
     return (
       <div className="space-y-6">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
         >
           <button
             onClick={() => setShowCreateForm(false)}
             className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
           >
             <ArrowLeft className="w-5 h-5" />
             <span className="font-medium">Back to List</span>
           </button>
           <CreateBlogForm
             key={showCreateForm ? "create-form" : "create-form-hidden"}
             onSuccess={handleCreateSuccess}
           />
         </motion.div>
       </div>
     );
   }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Title & Description */}
          <div>
            <h1
              className="text-3xl font-bold mb-1"
              style={{
                background: `linear-gradient(135deg, ${BLUE}, ${TEAL})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Blog Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create, manage, and publish your blog posts
            </p>
          </div>
          {/* Search and Button */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B8FD6] focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCreateForm(true)}
              className="px-6 py-2.5 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              }}
            >
              <Plus className="w-5 h-5" />
              Create Blog
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Blog Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="premium-card rounded-xl overflow-hidden dark:premium-card-dark"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Title
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Author
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Views
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Published
                </th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="text-center py-12">
                    <div className="flex items-center justify-center gap-2">
                      <div
                        className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin"
                        style={{ borderColor: BLUE }}
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        Loading blogs...
                      </span>
                    </div>
                  </td>
                </tr>
              ) : filteredBlogs?.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-400">
                      No blogs found
                    </p>
                  </td>
                </tr>
              ) : (
                filteredBlogs?.map((blog: Blog, index: number) => (
                  <motion.tr
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {/* Title */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white truncate max-w-xs">
                          {blog.title}
                        </span>
                        {blog.excerpt && (
                          <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-xs">
                            {blog.excerpt}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{
                          backgroundColor: getStatusColor(blog.status),
                        }}
                      >
                        {blog.status}
                      </span>
                    </td>

                    {/* Author */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                          style={{
                            background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                          }}
                        >
                          {blog.author.name?.[0] || "A"}
                        </div>
                        <span className="text-sm text-gray-900 dark:text-white">
                          {blog.author.name || "Admin"}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      {blog.category ? (
                        <span className="text-sm text-gray-900 dark:text-white">
                          {blog.category.name}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          No category
                        </span>
                      )}
                    </td>

                    {/* Views */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          {blog.viewCount}
                        </span>
                      </div>
                    </td>

                    {/* Published Date */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {blog.publishedAt
                          ? format(new Date(blog.publishedAt), "MMM dd, yyyy")
                          : "Not published"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          title="Preview"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-500" />
                        </a>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setEditingBlog(blog)}
                          className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" style={{ color: BLUE }} />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(blog.id)}
                          className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data?.pagination && data.pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {(currentPage - 1) * 10 + 1} to{" "}
              {Math.min(currentPage * 10, data.pagination.total)} of{" "}
              {data.pagination.total} results
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) =>
                    Math.min(data.pagination.totalPages, p + 1)
                  )
                }
                disabled={currentPage === data.pagination.totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingBlog && (
          <EditBlogModal
            isOpen={!!editingBlog}
            onClose={() => setEditingBlog(null)}
            blog={editingBlog}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
