"use client";

import { EditorContent } from "../../../types/editor";
import Image from "next/image";

interface PreviewProps {
  content: EditorContent;
  onClose: () => void;
}

export default function Preview({ content, onClose }: PreviewProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50 py-4 backdrop-blur-sm print:relative print:bg-white">
      <div className="mx-4 my-4 w-full max-w-4xl rounded-lg bg-white shadow-xl transition-all duration-300 print:m-0 print:max-w-none print:shadow-none">
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
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 print:hidden"
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
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 print:hidden"
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
        <div className="space-y-6 p-6 font-sans print:p-0">
          {/* Title & Meta */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Thông tin chi tiết
            </h2>
            {content.description && (
              <div className="text-lg leading-relaxed text-gray-600">
                {content.description}
              </div>
            )}
          </div>
          <h2 className="mb-2 text-2xl font-semibold">📚 Mục Lục</h2>
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
            className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200 print:hidden"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
