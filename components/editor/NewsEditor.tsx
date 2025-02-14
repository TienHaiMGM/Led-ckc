"use client";

import React, { useState } from "react";
import { NewsArticle, NEWS_CATEGORIES } from "../../types/news-management";
import { NewsService } from "../api/NewsService";

interface NewsEditorProps {
  initialData?: NewsArticle;
  onSave?: (data: NewsArticle) => void;
}

const NewsEditor = ({ initialData, onSave }: NewsEditorProps) => {
  const defaultArticle: NewsArticle = {
    id: "",
    title: "",
    slug: "",
    description: "",
    content: "",
    image: "",
    category: NEWS_CATEGORIES[0].id,
    tags: [],
    author: "",
    publishDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    status: "draft",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: [],
    views: 0,
    featured: false,
  };

  const [article, setArticle] = useState<NewsArticle>(
    initialData || defaultArticle,
  );
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const newsService = new NewsService();

  const handleChange = (field: keyof NewsArticle, value: any) => {
    setArticle((prev) => ({
      ...prev,
      [field]: value,
      lastModified: new Date().toISOString(),
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSave = async (status: "draft" | "published" = "draft") => {
    try {
      setIsSaving(true);
      setError(null);

      if (!article.slug && article.title) {
        article.slug = generateSlug(article.title);
      }

      article.status = status;
      const savedArticle = await newsService.saveArticle(article);
      onSave?.(savedArticle);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save article");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 rounded-lg bg-white p-6 shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {initialData ? "Chỉnh Sửa Bài Viết" : "Tạo Bài Viết Mới"}
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => handleSave("draft")}
            disabled={isSaving}
            className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:opacity-50"
          >
            {isSaving ? "Đang lưu..." : "Lưu nháp"}
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={isSaving}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSaving ? "Đang xuất bản..." : "Xuất bản"}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-red-600">{error}</div>
      )}

      {/* Form Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tiêu đề
            </label>
            <input
              type="text"
              value={article.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mô tả ngắn
            </label>
            <textarea
              value={article.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Danh mục
            </label>
            <select
              value={article.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              {NEWS_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <input
              type="text"
              value={article.tags.join(", ")}
              onChange={(e) =>
                handleChange(
                  "tags",
                  e.target.value.split(",").map((tag) => tag.trim()),
                )
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tags, phân cách bằng dấu phẩy"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL Hình ảnh
            </label>
            <input
              type="text"
              value={article.image}
              onChange={(e) => handleChange("image", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={article.featured}
              onChange={(e) => handleChange("featured", e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm font-medium text-gray-700">
              Bài viết nổi bật
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* SEO Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SEO Title
            </label>
            <input
              type="text"
              value={article.seoTitle}
              onChange={(e) => handleChange("seoTitle", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* SEO Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SEO Description
            </label>
            <textarea
              value={article.seoDescription}
              onChange={(e) => handleChange("seoDescription", e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* SEO Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              SEO Keywords
            </label>
            <input
              type="text"
              value={article.seoKeywords.join(", ")}
              onChange={(e) =>
                handleChange(
                  "seoKeywords",
                  e.target.value.split(",").map((keyword) => keyword.trim()),
                )
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập keywords, phân cách bằng dấu phẩy"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tác giả
            </label>
            <input
              type="text"
              value={article.author}
              onChange={(e) => handleChange("author", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nội dung
        </label>
        <textarea
          value={article.content}
          onChange={(e) => handleChange("content", e.target.value)}
          rows={15}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 font-mono focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          placeholder="Nội dung bài viết (hỗ trợ HTML)..."
          required
        />
        <p className="mt-2 text-sm text-gray-500">
          Tip: Bạn có thể sử dụng HTML để định dạng nội dung (ví dụ:{" "}
          <b>in đậm</b>, <i>in nghiêng</i>)
        </p>
      </div>
    </div>
  );
};

export default NewsEditor;
