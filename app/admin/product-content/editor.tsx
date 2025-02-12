"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import type { UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import {
  EditorProps,
  EditorContent,
  CATEGORY_OPTIONS,
  EDITOR_TABS,
  EDITOR_STATUS,
} from "../../../types/editor";
import Header from "../../../components/common/Header";
import Menu from "../../../components/common/Menu";
import Preview from "./preview";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Đang tải trình soạn thảo...</p>,
});

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["blockquote", "code-block"],
      ["link", "image", "video"],
      ["clean"],
    ],
    handlers: {
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            const range = this.quill.getSelection(true);
            this.quill.insertEmbed(range.index, "image", url);
          }
        };
      },
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "size",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "indent",
  "blockquote",
  "code-block",
  "link",
  "image",
  "video",
];

const toolbarTooltips: Record<string, string> = {
  header: "Kiểu tiêu đề",
  size: "Cỡ chữ",
  font: "Font chữ",
  bold: "In đậm",
  italic: "In nghiêng",
  underline: "Gạch chân",
  strike: "Gạch ngang",
  color: "Màu chữ",
  background: "Màu nền",
  align: "Căn lề",
  list: "Danh sách",
  bullet: "Danh sách không thứ tự",
  indent: "Thụt lề",
  blockquote: "Trích dẫn",
  "code-block": "Mã nguồn",
  link: "Chèn liên kết",
  image: "Chèn ảnh",
  video: "Chèn video",
  clean: "Xóa định dạng",
};

export default function Editor({
  initialContent,
  onSave,
  onPreview,
  onDraft,
}: EditorProps) {
  // Content state
  const [activeTab, setActiveTab] = useState("content");
  const [title, setTitle] = useState(initialContent?.title || "");
  const [content, setContent] = useState(initialContent?.content || "");
  const [category, setCategory] = useState(initialContent?.category || "");
  const [slug, setSlug] = useState(initialContent?.slug || "");
  const [description, setDescription] = useState(
    initialContent?.description || "",
  );
  const [tags, setTags] = useState<string[]>(initialContent?.tags || []);
  const [thumbnail, setThumbnail] = useState(initialContent?.thumbnail || "");
  const [seoTitle, setSeoTitle] = useState(initialContent?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(
    initialContent?.seoDescription || "",
  );
  const [status, setStatus] = useState<"draft" | "published">(
    initialContent?.status || "draft",
  );
  const [images, setImages] = useState<string[]>(initialContent?.images || []);
  const [featuredImage, setFeaturedImage] = useState(
    initialContent?.featuredImage || "",
  );

  // Editor state
  const [isDirty, setIsDirty] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [editorInstance, setEditorInstance] = useState<any>(null);

  // Utility functions
  const generateSlug = useCallback((text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

  // Content management
  const getCurrentContent = useCallback((): EditorContent => {
    return {
      title,
      content,
      category,
      slug: slug || generateSlug(title),
      description,
      tags,
      status,
      images,
      seoTitle,
      seoDescription,
      featuredImage,
      thumbnail,
      createdAt: initialContent?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }, [
    title,
    content,
    category,
    slug,
    description,
    tags,
    status,
    images,
    seoTitle,
    seoDescription,
    featuredImage,
    thumbnail,
    initialContent,
    generateSlug,
  ]);

  // Effects and event handlers
  useEffect(() => {
    const addTooltips = () => {
      const buttons = document.querySelectorAll(
        ".ql-toolbar button, .ql-toolbar .ql-picker",
      );
      buttons.forEach((button) => {
        let className = "";
        if (button.className.includes("ql-")) {
          className =
            button.className
              .split(/\s+/)
              .find((c) => c.startsWith("ql-"))
              ?.replace("ql-", "") || "";
        }

        if (className && toolbarTooltips[className]) {
          button.setAttribute("title", toolbarTooltips[className]);
        }
      });
    };

    if (editorInstance) {
      addTooltips();
    }
  }, [editorInstance]);

  const handleSave = useCallback(
    (saveAsDraft = false) => {
      const editorContent = getCurrentContent();
      editorContent.status = saveAsDraft ? "draft" : "published";

      if (saveAsDraft && onDraft) {
        onDraft(editorContent);
      } else if (onSave) {
        onSave(editorContent);
      }
      setIsDirty(false);
    },
    [getCurrentContent, onDraft, onSave],
  );

  const handlePreview = useCallback(() => {
    setShowPreview(true);
    if (onPreview) {
      onPreview(getCurrentContent());
    }
  }, [getCurrentContent, onPreview]);

  const handleEditorChange = useCallback(
    (value: string, _delta: any, _source: any, editor: UnprivilegedEditor) => {
      setContent(value);
      setIsDirty(true);
      setEditorInstance(editor);
    },
    [],
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Menu />

        <div className="container mx-auto px-4 py-8">
          <div className="rounded-lg bg-white shadow-lg">
            {/* Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                  {status === "draft" ? "Bản nháp: " : ""}
                  {title || "Sản phẩm mới"}
                </h1>
                <div className="flex items-center space-x-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      status === "draft"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {EDITOR_STATUS[status]}
                  </span>
                  <button
                    onClick={handlePreview}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Xem trước
                  </button>
                  <button
                    onClick={() => handleSave(true)}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Lưu nháp
                  </button>
                  <button
                    onClick={() => handleSave(false)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Xuất bản
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex px-6">
                {EDITOR_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`border-b-2 px-4 py-3 text-sm font-medium ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Editor Content */}
            <div className="p-6">
              {activeTab === "content" && (
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập tiêu đề"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Thumbnail
                    </label>
                    <input
                      type="text"
                      value={thumbnail}
                      onChange={(e) => setThumbnail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập đường dẫn thumbnail"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Nội dung
                    </label>
                    <div className="editor-wrapper rounded-lg border">
                      <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={handleEditorChange}
                        modules={modules}
                        formats={formats}
                        className="min-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "seo" && (
                <div className="space-y-8">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-gray-900">
                      SEO Preview
                    </h3>
                    <div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-xl font-medium text-blue-600 hover:underline">
                        {seoTitle || title}
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-sm text-green-700">
                        <span>🔒</span>
                        <span>
                          yourwebsite.com/{slug || generateSlug(title)}
                        </span>
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {seoDescription || description}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SEO Title
                      </label>
                      <input
                        type="text"
                        value={seoTitle}
                        onChange={(e) => setSeoTitle(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Nhập tiêu đề SEO"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Tiêu đề hiển thị trên kết quả tìm kiếm. Để trống để sử
                        dụng tiêu đề chính.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        SEO Description
                      </label>
                      <textarea
                        value={seoDescription}
                        onChange={(e) => setSeoDescription(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        rows={4}
                        placeholder="Nhập mô tả SEO"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Mô tả hiển thị trên kết quả tìm kiếm. Để trống để sử
                        dụng mô tả chính.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Thumbnail
                      </label>
                      <input
                        type="text"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Nhập đường dẫn thumbnail"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Hình ảnh đại diện cho bài viết khi chia sẻ trên mạng xã
                        hội.
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Slug URL
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          yourwebsite.com/
                        </span>
                        <input
                          type="text"
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
                          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                          placeholder="url-bai-viet"
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Đường dẫn URL của bài viết. Để trống để tự động tạo từ
                        tiêu đề.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPreview && (
        <Preview
          content={getCurrentContent()}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
