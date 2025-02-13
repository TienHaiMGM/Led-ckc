"use client";

import { useState } from "react";
import { EditorContent, EditorContentInitial } from "../../../types/editor";
import DataManagement from "@/components/api/DataManagement";

export default function ProductContentPage() {
  const [savedContents, setSavedContents] = useState<EditorContent[]>([]);
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
      <DataManagement
        EditorContent={EditorContentInitial}
        onSave={handleSave}
        onDraft={handleDraft}
        onPreview={handlePreview}
      />

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
    </div>
  );
}
