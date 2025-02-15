"use client";
import React from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardLayout from "@/components/admin/DashboardLayout";
import Link from "next/link";

interface DashboardCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const dashboardCards: DashboardCard[] = [
  {
    title: "Quản lý sản phẩm",
    description: "Thêm, sửa, xóa và quản lý các sản phẩm",
    link: "/admin/product-content",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
  },
  {
    title: "Yêu cầu liên hệ",
    description: "Xem và quản lý các yêu cầu liên hệ từ khách hàng",
    link: "/admin/contact-requests",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          <h1 className="mb-8 text-2xl font-bold">Bảng điều khiển</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dashboardCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="transform rounded-lg bg-white p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-block rounded-full bg-blue-100 p-3 text-blue-500">
                  {card.icon}
                </div>
                <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
