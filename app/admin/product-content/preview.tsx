"use client";

import { EditorContent } from "../../../types/editor";
import Image from "next/image";
import "./preview.css";

interface PreviewProps {
  content: EditorContent;
  onClose: () => void;
}

export default function Preview({ content, onClose }: PreviewProps) {
  return (
    <div className="preview-overlay fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 py-4">
      <div className="preview-content mx-4 my-4 w-full max-w-4xl rounded-lg bg-white shadow-xl">
        {/* Preview Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Xem trước</h2>
            <div className="mt-1 flex items-center gap-3">
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  content.status === "draft"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {content.status === "draft" ? "Bản nháp" : "Bản xuất bản"}
              </span>
              <span className="text-sm text-gray-500">
                Cập nhật: {new Date(content.updatedAt).toLocaleString("vi-VN")}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              title="In"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              title="Đóng"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail Image */}
        {content.thumbnail && (
          <div className="relative h-[400px] w-full overflow-hidden">
            <Image
              src={content.thumbnail}
              alt={content.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform hover:scale-105"
            />
          </div>
        )}

        {/* Preview Content */}
        <div className="preview-body space-y-6 p-6">
          {/* Title & Meta */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">
              {content.title}
            </h1>

            <div className="preview-meta">
              {content.category && (
                <div className="preview-meta-item">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <span>{content.category}</span>
                </div>
              )}
              {content.tags && content.tags.length > 0 && (
                <div className="preview-meta-item">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <div className="preview-tags">
                    {content.tags.map((tag) => (
                      <span key={tag} className="preview-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {content.description && (
              <div className="text-lg leading-relaxed text-gray-600">
                {content.description}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />

          {/* SEO Preview */}
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-medium text-gray-900">
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Xem trước SEO
            </h3>
            <div className="overflow-hidden rounded-lg bg-white p-4 shadow-sm">
              <div className="text-xl font-medium text-blue-600 hover:underline">
                {content.seoTitle || content.title}
              </div>
              <div className="mt-1 text-sm text-green-700">
                yourwebsite.com/{content.slug}
              </div>
              <div className="mt-2 line-clamp-2 text-sm text-gray-600">
                {content.seoDescription || content.description}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              * SEO preview hiển thị cách bài viết của bạn xuất hiện trong kết
              quả tìm kiếm
            </div>
          </div>
        </div>

        {/* Preview Footer */}
        <div className="sticky bottom-0 flex justify-end gap-4 border-t border-gray-200 bg-white p-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200"
          >
            Đóng
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .preview-overlay {
            position: relative;
            background: white;
          }
          .preview-content {
            box-shadow: none;
            margin: 0;
            max-width: none;
          }
          button {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
