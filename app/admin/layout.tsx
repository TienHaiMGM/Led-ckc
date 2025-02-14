"use client";

import { AuthProvider } from "../../components/auth/AuthContext";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Link from "next/link";
import { getAuth } from "firebase/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = getAuth();

  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-100">
          {/* Admin Header */}
          <nav className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      href="/admin"
                      className="text-xl font-bold text-gray-800"
                    >
                      Admin Dashboard
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      href="/admin"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/admin/news-management"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      Quản lý tin tức
                    </Link>
                    <Link
                      href="/admin/product-content"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      Quản lý sản phẩm
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => auth.signOut()}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Admin Content */}
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb */}
              <div className="mb-4">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-4">
                    <li>
                      <div>
                        <Link
                          href="/admin"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-4 text-sm font-medium text-gray-500">
                          Admin
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Main Content */}
              <div className="rounded-lg bg-white shadow">{children}</div>
            </div>
          </div>

          {/* Admin Footer */}
          <footer className="mt-8 bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Siêu Thị Bảng Hiệu. All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
