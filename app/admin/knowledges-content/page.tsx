"use client";
import React, { useState, useCallback } from "react";
import DashboardLayout from "@/components/admin/DashboardLayout";

import ProductEditorKnowledge from "@/components/api/ProductEditorKnowledge";
import {
  EmptyProductContent,
  ProductContent,
} from "@/types/product-management";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";

// Component Toast riêng để hiển thị thông báo
interface ToastProps {
  message: string;
  type: "success" | "error";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => (
  <div
    className={`fixed right-4 top-4 z-50 rounded-lg px-6 py-3 shadow-lg ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    } translate-y-0 transform text-white transition-all duration-300`}
    role="alert"
    aria-live="polite"
  >
    {message}
  </div>
);

export default function NewsContentPage() {
  const [savedContents, setSavedContents] = useState<ProductContent[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success",
  );

  const showToast = useCallback(
    (message: string, type: "success" | "error" = "success") => {
      setNotificationMessage(message);
      setNotificationType(type);
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    },
    [],
  );

  const handleSave = useCallback(
    (content: ProductContent) => {
      setSavedContents((prev) => [content, ...prev]);
      showToast("Đã xuất bản nội dung thành công!");
    },
    [showToast],
  );

  const handleDraft = useCallback(
    (content: ProductContent) => {
      setSavedContents((prev) => [content, ...prev]);
      showToast("Đã lưu bản nháp thành công!");
    },
    [showToast],
  );

  const handlePreview = useCallback((content: ProductContent) => {
    console.log("Preview content:", content);
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          <ProductEditorKnowledge
            EditorContent={EmptyProductContent}
            onSave={handleSave}
            onDraft={handleDraft}
            onPreview={handlePreview}
          />
          {showNotification && (
            <Toast message={notificationMessage} type={notificationType} />
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
