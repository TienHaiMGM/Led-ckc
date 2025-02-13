"use client";

import { useState } from "react";
import {
  ProductContent,
  EmptyProductContent,
} from "../../../types/product-management";
import ProductEditor from "../../../components/api/ProductEditor";

export default function ProductContentPage() {
  const [savedContents, setSavedContents] = useState<ProductContent[]>([]);
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

  const handleSave = (content: ProductContent) => {
    setSavedContents((prev) => [content, ...prev]);
    showToast("Đã xuất bản nội dung thành công!");
  };

  const handleDraft = (content: ProductContent) => {
    setSavedContents((prev) => [content, ...prev]);
    showToast("Đã lưu bản nháp thành công!");
  };

  const handlePreview = (content: ProductContent) => {
    console.log("Preview content:", content);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductEditor
        EditorContent={EmptyProductContent}
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
          role="alert"
          aria-live="polite"
        >
          {notificationMessage}
        </div>
      )}
    </div>
  );
}
