"use client";
import React, { useState, useCallback } from "react";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSave,
  FaTimes,
  FaSearch,
  FaSort,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import { News } from "../api/NewsService";
import { FormField } from "../common/FormField";
import { modules, formats } from "../api/editorConfig";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Đang tải trình soạn thảo...</p>,
});

interface CategoryOption {
  value: string;
  label: string;
}

const categoryOptions: CategoryOption[] = [
  { value: "tin-tuc", label: "Tin tức" },
  { value: "khuyen-mai", label: "Khuyến mãi" },
  { value: "huong-dan", label: "Hướng dẫn" },
  { value: "kinh-nghiem", label: "Kinh nghiệm" },
];

const emptyNews: News = {
  title: "",
  description: "",
  content: "",
  image: "",
  slug: "",
  category: "tin-tuc",
  tags: [],
  author: "",
  status: "draft",
};

interface NewsEditorProps {
  initialNews?: News;
  onSave?: (news: News) => void;
  onPreview?: (news: News) => void;
}

const NewsEditor: React.FC<NewsEditorProps> = ({
  initialNews = emptyNews,
  onSave,
  onPreview,
}) => {
  const [formData, setFormData] = useState<News>(initialNews);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("content");

  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setError("Vui lòng điền đầy đủ thông tin bắt buộc");
      return;
    }

    try {
      setLoading(true);
      if (onSave) {
        await onSave({
          ...formData,
          slug: formData.slug || generateSlug(formData.title),
        });
      }
      setFormData(emptyNews);
      setIsAdding(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  const renderContentTab = () => (
    <div className="space-y-6">
      <FormField
        label="Tiêu đề"
        value={formData.title}
        onChange={(value) => {
          setFormData({
            ...formData,
            title: value,
            slug: generateSlug(value),
          });
        }}
        required
      />

      <FormField
        label="Danh mục"
        type="select"
        value={formData.category}
        onChange={(value) => setFormData({ ...formData, category: value })}
        options={categoryOptions}
        required
      />

      <FormField
        label="Link hình ảnh"
        type="url"
        value={formData.image}
        onChange={(value) => setFormData({ ...formData, image: value })}
        required
      />

      <FormField
        label="Mô tả ngắn"
        type="textarea"
        value={formData.description || ""}
        onChange={(value) => setFormData({ ...formData, description: value })}
        required
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Nội dung
        </label>
        <div className="editor-wrapper">
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
            modules={modules}
            formats={formats}
            className="editor-content"
          />
        </div>
      </div>

      <FormField
        label="Tags (phân cách bằng dấu phẩy)"
        value={formData.tags?.join(", ") || ""}
        onChange={(value) =>
          setFormData({
            ...formData,
            tags: value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          })
        }
      />

      <FormField
        label="Tác giả"
        value={formData.author || ""}
        onChange={(value) => setFormData({ ...formData, author: value })}
      />
    </div>
  );

  const renderSeoTab = () => (
    <div className="space-y-8">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-900">SEO Preview</h3>
        <div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
          <div className="text-xl font-medium text-blue-600 hover:underline">
            {formData.title}
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-green-700">
            <span>🔒</span>
            <span>
              yourwebsite.com/tin-tuc/
              {formData.slug || generateSlug(formData.title)}
            </span>
          </div>
          <div className="mt-2 line-clamp-2 text-sm text-gray-600">
            {formData.description}
          </div>
        </div>
      </div>

      <FormField
        label="Slug URL"
        value={formData.slug || ""}
        onChange={(value) => setFormData({ ...formData, slug: value })}
        description="Đường dẫn URL của bài viết. Để trống để tự động tạo từ tiêu đề."
      />
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản Lý Tin Tức</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          disabled={loading}
        >
          <FaPlus className="mr-2" /> Thêm Tin Tức
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {isAdding && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Thêm Tin Tức Mới</h2>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                {["content", "seo"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 px-4 py-3 text-sm font-medium ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab === "content" ? "Nội dung" : "SEO"}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "content" ? renderContentTab() : renderSeoTab()}
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 p-6">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    if (onPreview) onPreview(formData);
                  }}
                  className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  <FaEdit className="mr-2" /> Xem trước
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(emptyNews);
                    setIsAdding(false);
                  }}
                  className="flex items-center rounded-lg border px-4 py-2 hover:bg-gray-100"
                  disabled={loading}
                >
                  <FaTimes className="mr-2" /> Hủy
                </button>
                <button
                  type="submit"
                  className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  disabled={loading}
                >
                  <FaSave className="mr-2" />{" "}
                  {loading ? "Đang xử lý..." : "Lưu"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewsEditor;
