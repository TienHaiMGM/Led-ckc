"use client";
import React from "react";
import DashboardLayout from "@/components/admin/DashboardLayout";
import Link from "next/link";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";

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
    title: "Quản lý trang tin tức",
    description: "Thêm, sửa, xóa và quản lý các sản phẩm",
    link: "/admin/news-content",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
  },
  {
    title: "Quản lý trang kiến thức",
    description: "Thêm, sửa, xóa và quản lý các sản phẩm",
    link: "/admin/knowledges-content",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
  {
    title: "Email đăng ký nhận tin tức và kiến thức",
    description: "Xem và quản lý Email đăng ký nhận tin tức và kiến thức",
    link: "/admin/contact-requests",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Thùng rác",
    description: "Xem và quản lý các sản phẩm đã xóa",
    link: "/admin/product-deleted",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L6 9M10 18V9M14 18V9M18 18V9M4 6H20M16 6V4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4V6M10 6H14"
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
