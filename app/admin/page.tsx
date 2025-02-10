"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import DataManagement from "../../components/api/DataManagement";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Simple authentication - in production, use proper authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual admin password
    if (password === "admin123") {
      setIsAuthenticated(true);
      localStorage.setItem("isAdminAuthenticated", "true");
      setError("");
    } else {
      setError("Mật khẩu không đúng");
    }
  };

  useEffect(() => {
    // Check if user is already authenticated
    const isAuth = localStorage.getItem("isAdminAuthenticated");
    if (isAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
    router.push("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Head>
          <title>Admin Login | Siêu Thị Bảng Hiệu</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Đăng Nhập Admin
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Quản Lý Dữ Liệu | Siêu Thị Bảng Hiệu</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Trang Quản Trị
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Đăng Xuất
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6">
        <DataManagement />
      </main>
    </div>
  );
};

export default AdminPage;
