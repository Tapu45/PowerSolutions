"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Upload, Loader2, X, Crop, Plus, Tag as TagIcon } from "lucide-react";
import { z } from "zod";
import ReactCrop, { Crop as CropType, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

// Recommended image size for blog featured images
const RECOMMENDED_WIDTH = 1200;
const RECOMMENDED_HEIGHT = 630;
const ASPECT_RATIO = RECOMMENDED_WIDTH / RECOMMENDED_HEIGHT;

interface CreateBlogFormProps {
  onSuccess: () => void;
}

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  categoryId: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
});

export default function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    categoryId: "",
    tagIds: [] as string[],
    readTimeMinutes: 0,
    metaTitle: "",
    metaDescription: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Category modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    slug: "",
    description: "",
  });

  // Tag states
  const [showTagInput, setShowTagInput] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  // Cropping states
  const [showCropModal, setShowCropModal] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [crop, setCrop] = useState<CropType>({
    unit: "%",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Fetch categories
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch("/api/blog/category");
      if (!response.ok) throw new Error("Failed to fetch categories");
      return response.json();
    },
  });

  // Fetch tags
  const { data: tagsData, refetch: refetchTags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await fetch("/api/blog/tag");
      if (!response.ok) throw new Error("Failed to fetch tags");
      return response.json();
    },
  });

  // Get user from localStorage
  const getAuthorId = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user).id;
    }
    return "";
  };

  // Calculate read time based on content
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: async (categoryData: typeof newCategory) => {
      const response = await fetch("/api/blog/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryData),
      });
      if (!response.ok) throw new Error("Failed to create category");
      return response.json();
    },
    onSuccess: (data) => {
      setFormData({ ...formData, categoryId: data.category.id });
      setShowCategoryModal(false);
      setNewCategory({ name: "", slug: "", description: "" });
    },
  });

  // Create tag mutation
  const createTagMutation = useMutation({
    mutationFn: async (tagName: string) => {
      const response = await fetch("/api/blog/tag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: tagName,
          slug: tagName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        }),
      });
      if (!response.ok) throw new Error("Failed to create tag");
      return response.json();
    },
    onSuccess: (data) => {
      setFormData({
        ...formData,
        tagIds: [...formData.tagIds, data.tag.id],
      });
      setShowTagInput(false);
      setNewTagName("");
      refetchTags();
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          authorId: getAuthorId(),
          status: "PUBLISHED",
          publishedAt: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error("Failed to create blog");
      return response.json();
    },
    onSuccess: () => {
      onSuccess();
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

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          if (
            img.width !== RECOMMENDED_WIDTH ||
            img.height !== RECOMMENDED_HEIGHT
          ) {
            setImageSrc(reader.result as string);
            setShowCropModal(true);
          } else {
            handleImageUpload(file);
          }
        };
      });
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImg = async (): Promise<Blob | null> => {
    if (!completedCrop || !imgRef.current) return null;

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = RECOMMENDED_WIDTH;
    canvas.height = RECOMMENDED_HEIGHT;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      RECOMMENDED_WIDTH,
      RECOMMENDED_HEIGHT
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        "image/jpeg",
        0.95
      );
    });
  };

  const handleCropComplete = async () => {
    const croppedBlob = await getCroppedImg();
    if (croppedBlob && imageFile) {
      const croppedFile = new File([croppedBlob], imageFile.name, {
        type: "image/jpeg",
      });
      setShowCropModal(false);
      await handleImageUpload(croppedFile);
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

  const toggleTag = (tagId: string) => {
    setFormData({
      ...formData,
      tagIds: formData.tagIds.includes(tagId)
        ? formData.tagIds.filter((id) => id !== tagId)
        : [...formData.tagIds, tagId],
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card rounded-xl p-6 dark:premium-card-dark"
      >
        {/* Header */}
        <div className="mb-6">
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
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Fill in the details to create a new blog post
          </p>
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
                  metaTitle: e.target.value.substring(0, 60),
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

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Category
            </label>
            <div className="flex gap-2">
              <select
                value={formData.categoryId}
                onChange={(e) =>
                  setFormData({ ...formData, categoryId: e.target.value })
                }
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              >
                <option value="">Select a category</option>
                {categoriesData?.categories?.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setShowCategoryModal(true)}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                title="Add new category"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Tags
            </label>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {tagsData?.tags?.map((tag: any) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      formData.tagIds.includes(tag.id)
                        ? "border-[#0B8FD6] bg-[#0B8FD6]/10 text-[#0B8FD6]"
                        : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#0B8FD6]"
                    }`}
                  >
                    <TagIcon className="w-3 h-3 inline mr-1" />
                    {tag.name}
                  </button>
                ))}
              </div>
              {showTagInput ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTagName}
                    onChange={(e) => setNewTagName(e.target.value)}
                    placeholder="Enter tag name"
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newTagName.trim()) {
                        createTagMutation.mutate(newTagName.trim());
                      }
                    }}
                    disabled={createTagMutation.isPending}
                    className="px-4 py-2 rounded-lg font-semibold text-white"
                    style={{ background: BLUE }}
                  >
                    {createTagMutation.isPending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Add"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowTagInput(false);
                      setNewTagName("");
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowTagInput(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-[#0B8FD6] hover:text-[#0B8FD6] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add New Tag
                </button>
              )}
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Excerpt
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  excerpt: e.target.value,
                  metaDescription: e.target.value.substring(0, 160),
                })
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
              onChange={(e) => {
                const content = e.target.value;
                setFormData({
                  ...formData,
                  content,
                  readTimeMinutes: calculateReadTime(content),
                });
              }}
              rows={10}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
              placeholder="Write your blog content here..."
            />
            {formData.content && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Estimated read time: {formData.readTimeMinutes} min
              </p>
            )}
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Featured Image
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Recommended size: {RECOMMENDED_WIDTH} x {RECOMMENDED_HEIGHT}{" "}
              pixels (16:9 aspect ratio)
            </p>
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
                      {imageFile && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageFile(null);
                            setImageSrc("");
                            setFormData((prev) => ({
                              ...prev,
                              featuredImage: "",
                            }));
                          }}
                          className="ml-2 p-1 rounded-full bg-red-500 hover:bg-red-600 text-white"
                          title="Remove selected image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  className="hidden"
                />
              </label>
            </div>
            {formData.featuredImage && (
              <div className="mt-4 relative">
                <img
                  src={formData.featuredImage}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, featuredImage: "" })
                  }
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* SEO Fields */}
          <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              SEO Settings
            </h3>

            {/* Meta Title */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Meta Title
              </label>
              <input
                type="text"
                value={formData.metaTitle}
                onChange={(e) =>
                  setFormData({ ...formData, metaTitle: e.target.value })
                }
                maxLength={60}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                placeholder="SEO title (60 characters max)"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.metaTitle.length}/60 characters
              </p>
            </div>

            {/* Meta Description */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Meta Description
              </label>
              <textarea
                value={formData.metaDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    metaDescription: e.target.value,
                  })
                }
                maxLength={160}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                placeholder="SEO description (160 characters max)"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.metaDescription.length}/160 characters
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
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
                "Publish Blog"
              )}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Add New Category
              </h3>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name *
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      name: e.target.value,
                      slug: generateSlug(e.target.value),
                    })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                  placeholder="Category name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Slug *
                </label>
                <input
                  type="text"
                  value={newCategory.slug}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, slug: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                  placeholder="category-slug"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B8FD6]"
                  placeholder="Category description"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (newCategory.name && newCategory.slug) {
                      createCategoryMutation.mutate(newCategory);
                    }
                  }}
                  disabled={createCategoryMutation.isPending}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                  }}
                >
                  {createCategoryMutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                  ) : (
                    "Create"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Crop Modal */}
      {showCropModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Crop className="w-5 h-5" style={{ color: TEAL }} />
                  Crop Image
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Adjust the crop area to {RECOMMENDED_WIDTH} x{" "}
                  {RECOMMENDED_HEIGHT} pixels
                </p>
              </div>
              <button
                onClick={() => setShowCropModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="mb-4">
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={ASPECT_RATIO}
                locked
                minWidth={RECOMMENDED_WIDTH}
                minHeight={RECOMMENDED_HEIGHT}
                maxWidth={RECOMMENDED_WIDTH}
                maxHeight={RECOMMENDED_HEIGHT}
                ruleOfThirds={false}
                renderSelectionAddon={() => null}
                style={{ pointerEvents: "auto" }}
              >
                <img
                  ref={imgRef}
                  src={imageSrc}
                  alt="Crop"
                  onLoad={(e) => {
                    const { width, height } = e.currentTarget;
                    const x = Math.max(
                      0,
                      Math.round((width - RECOMMENDED_WIDTH) / 2)
                    );
                    const y = Math.max(
                      0,
                      Math.round((height - RECOMMENDED_HEIGHT) / 2)
                    );
                    const newCrop: CropType = {
                      unit: "px",
                      width: Math.min(RECOMMENDED_WIDTH, width),
                      height: Math.min(RECOMMENDED_HEIGHT, height),
                      x,
                      y,
                    };
                    setCrop(newCrop);
                    setCompletedCrop(newCrop as PixelCrop);
                  }}
                  className="max-w-full"
                />
              </ReactCrop>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCropModal(false)}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCropComplete}
                className="flex-1 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                }}
              >
                Crop & Upload
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
