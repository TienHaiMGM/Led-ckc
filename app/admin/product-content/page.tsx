"use client";

import { useState } from "react";
import Editor from "./editor";
import { EditorContent } from "../../../types/editor";

export default function ProductContentPage() {
  const [savedContents, setSavedContents] = useState<EditorContent[]>([]);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success",
  );

  const showToast = (
    message: string,
    type: "success" | "error" = "success",
  ) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleSave = (content: EditorContent) => {
    setSavedContents((prev) => [content, ...prev]);
    showToast("Đã xuất bản nội dung thành công!");
    // TODO: Implement actual save to database
    console.log("Content saved:", content);
  };

  const handleDraft = (content: EditorContent) => {
    setSavedContents((prev) => [content, ...prev]);
    showToast("Đã lưu bản nháp thành công!");
    // TODO: Implement actual save to database
    console.log("Draft saved:", content);
  };

  const handlePreview = (content: EditorContent) => {
    // TODO: Implement preview functionality
    console.log("Preview content:", content);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Toast */}
      {showNotification && (
        <div
          className={`fixed right-4 top-4 z-50 rounded-lg px-6 py-3 shadow-lg ${
            notificationType === "success" ? "bg-green-500" : "bg-red-500"
          } translate-y-0 transform text-white transition-all duration-300`}
        >
          {notificationMessage}
        </div>
      )}

      <Editor
        onSave={handleSave}
        onDraft={handleDraft}
        onPreview={handlePreview}
      />

      {/* Recent Drafts/Published Content */}
      {savedContents.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Nội dung gần đây</h2>
            <div className="space-y-4">
              {savedContents.map((content, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{content.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {new Date(content.updatedAt).toLocaleString("vi-VN")}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        content.status === "draft"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {content.status === "draft" ? "Bản nháp" : "Đã xuất bản"}
                    </span>
                  </div>
                  {content.description && (
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                      {content.description}
                    </p>
                  )}
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        /* TODO: Implement edit functionality */
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Chỉnh sửa
                    </button>
                    <button
                      onClick={() => {
                        /* TODO: Implement preview functionality */
                      }}
                      className="text-sm text-gray-600 hover:text-gray-700"
                    >
                      Xem trước
                    </button>
                    {content.status === "draft" && (
                      <button
                        onClick={() => {
                          /* TODO: Implement publish functionality */
                        }}
                        className="text-sm text-green-600 hover:text-green-700"
                      >
                        Xuất bản
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
