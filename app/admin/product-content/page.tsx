"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../components/auth/AuthContext";
import ProductContentPage from "./product-content";

export default function AdminProductContent() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    router.push("/admin");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Quản Lý Nội Dung
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user.email}</span>
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Đăng Xuất
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <ProductContentPage />
      </main>
    </div>
  );
}
