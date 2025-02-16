"use client"; // Đánh dấu file này được sử dụng trong môi trường client-side

import React, { useState } from "react";
import NewsEditor from "@/components/editor/NewsEditor";
import DashboardLayout from "@/components/admin/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
  EmptyProductContent,
  ProductContent,
} from "@/types/product-management";
import ProductEditorNew from "@/components/api/ProductEditorNew";

export default function NewsContentPage() {
  // State để lưu trữ danh sách các nội dung đã lưu (bao gồm bản nháp và đã xuất bản)
  const [savedContents, setSavedContents] = useState<ProductContent[]>([]);

  // State cho thông báo người dùng (toast notification)
  const [showNotification, setShowNotification] = useState(false); // Hiển thị thông báo
  const [notificationMessage, setNotificationMessage] = useState(""); // Nội dung thông báo
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success",
  ); // Loại thông báo (thành công/lỗi)

  /**
   * Hàm hiển thị thông báo (toast) với nội dung và loại được chỉ định.
   * @param message - Nội dung thông báo
   * @param type - Loại thông báo ("success" hoặc "error")
   */
  const showToast = (
    message: string,
    type: "success" | "error" = "success",
  ) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => setShowNotification(false), 3000);
  };

  /**
   * Xử lý lưu nội dung dưới dạng bài đã xuất bản.
   * @param content - Nội dung bài viết
   */
  const handleSave = (content: ProductContent) => {
    setSavedContents((prev) => [content, ...prev]); // Thêm nội dung mới vào danh sách đã lưu
    showToast("Đã xuất bản nội dung thành công!"); // Hiển thị thông báo thành công
  };

  /**
   * Xử lý lưu nội dung dưới dạng bản nháp.
   * @param content - Nội dung bài viết
   */
  const handleDraft = (content: ProductContent) => {
    setSavedContents((prev) => [content, ...prev]); // Thêm nội dung mới vào danh sách đã lưu
    showToast("Đã lưu bản nháp thành công!"); // Hiển thị thông báo thành công
  };

  /**
   * Xử lý xem trước nội dung bài viết (chỉ log ra console trong demo này).
   * @param content - Nội dung bài viết
   */
  const handlePreview = (content: ProductContent) => {
    console.log("Preview content:", content);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          {/* Trình chỉnh sửa bài viết */}
          <ProductEditorNew
            EditorContent={EmptyProductContent} // Nội dung trống ban đầu
            onSave={handleSave} // Gọi khi bài viết được xuất bản
            onDraft={handleDraft} // Gọi khi bài viết được lưu nháp
            onPreview={handlePreview} // Gọi khi xem trước bài viết
          />

          {/* Hiển thị thông báo (toast notification) */}
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
      </DashboardLayout>
    </ProtectedRoute>
  );
}
