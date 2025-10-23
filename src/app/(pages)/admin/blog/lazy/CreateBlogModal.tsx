"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X, Upload, Loader2 } from "lucide-react";
import { z } from "zod";

const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";
const YELLOW = "#D6CE0B";

interface CreateBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  categoryId: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
});

export default function CreateBlogModal({
  isOpen,
  onClose,
}: CreateBlogModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    status: "DRAFT" as "DRAFT" | "PUBLISHED" | "ARCHIVED",
    categoryId: "",
    tagIds: [] as string[],
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const queryClient = useQueryClient();

  // Get user from localStorage
  const getAuthorId = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user).id;
    }
    return "";
  };

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          authorId: getAuthorId(),
        }),
      });
      if (!response.ok) throw new Error("Failed to create blog");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      onClose();
    },
  });

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "blogs");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setFormData((prev) => ({ ...prev, featuredImage: data.url }));
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto premium-card rounded-2xl p-6 dark:premium-card-dark"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-2xl font-bold"
            style={{
              background: `linear-gradient(135deg, ${BLUE}, ${TEAL})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create New Blog
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  title: e.target.value,
                  slug: generateSlug(e.target.value),
                });
              }}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              placeholder="Enter blog title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Slug *
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              placeholder="blog-slug"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Excerpt
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              placeholder="Brief description of the blog"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Content *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              rows={10}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              placeholder="Write your blog content here..."
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Featured Image
            </label>
            <div className="flex items-center gap-4">
              <label className="flex-1 cursor-pointer">
                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-[#0B8FD6] dark:hover:border-[#0B8FD6] transition-colors">
                  {uploadingImage ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        style={{ color: BLUE }}
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        Uploading...
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {imageFile ? imageFile.name : "Choose image"}
                      </span>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setImageFile(file);
                      handleImageUpload(file);
                    }
                  }}
                  className="hidden"
                />
              </label>
            </div>
            {formData.featuredImage && (
              <img
                src={formData.featuredImage}
                alt="Preview"
                className="mt-4 w-full h-48 object-cover rounded-lg"
              />
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as "DRAFT" | "PUBLISHED" | "ARCHIVED",
                })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createMutation.isPending}
              className="flex-1 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              }}
            >
              {createMutation.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating...
                </span>
              ) : (
                "Create Blog"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
