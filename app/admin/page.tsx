"use client"; // Đánh dấu rằng tệp này sử dụng trong môi trường client-side (Next.js)

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Hook điều hướng của Next.js
import { useAuth } from "../../components/auth/AuthContext"; // Hook xác thực người dùng

export default function AdminPage() {
  // **State quản lý thông tin đăng nhập**
  const [email, setEmail] = useState(""); // Email người dùng
  const [password, setPassword] = useState(""); // Mật khẩu người dùng
  const [error, setError] = useState(""); // Thông báo lỗi (nếu có)
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải trong quá trình đăng nhập

  const router = useRouter(); // Hook để điều hướng trang
  const { user, login } = useAuth(); // Lấy thông tin người dùng và hàm `login` từ context xác thực

  /**
   * Hàm xử lý khi người dùng nhấn nút "Đăng Nhập".
   * @param e - Sự kiện form submit
   */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    setIsLoading(true); // Hiển thị trạng thái tải
    setError(""); // Xóa thông báo lỗi cũ

    try {
      // Gọi hàm `login` để đăng nhập
      await login(email, password);
      console.log("Login successful");
      router.push("/admin/dashboard"); // Chuyển hướng đến trang Dashboard sau khi đăng nhập thành công
    } catch (error) {
      // Xử lý lỗi xảy ra trong quá trình đăng nhập
      console.error("Login error:", error);
      if (error instanceof Error) {
        setError(error.message); // Hiển thị thông báo lỗi nếu error là đối tượng `Error`
      } else {
        setError("Đăng nhập thất bại. Vui lòng thử lại."); // Thông báo lỗi mặc định
      }
    } finally {
      setIsLoading(false); // Kết thúc trạng thái tải
    }
  };

  /**
   * Kiểm tra nếu người dùng đã đăng nhập -> chuyển hướng đến dashboard
   */
  useEffect(() => {
    if (user) {
      router.push("/admin/dashboard");
    }
  }, [user, router]);

  /**
   * Hiển thị giao diện đăng nhập nếu người dùng chưa đăng nhập
   */
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
        {/* Tiêu đề của trang đăng nhập */}
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Đăng Nhập Admin
        </h1>

        {/* Form đăng nhập */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Trường nhập Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email} // Giá trị email từ state
              onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi người dùng nhập
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              required
              disabled={isLoading} // Vô hiệu hóa nếu đang tải
              placeholder="Nhập email của bạn"
              autoComplete="email"
            />
          </div>

          {/* Trường nhập Mật khẩu */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password} // Giá trị mật khẩu từ state
              onChange={(e) => setPassword(e.target.value)} // Cập nhật state khi người dùng nhập
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              required
              disabled={isLoading} // Vô hiệu hóa nếu đang tải
              placeholder="Nhập mật khẩu của bạn"
              autoComplete="current-password"
            />
          </div>

          {/* Hiển thị lỗi nếu có */}
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Nút Đăng Nhập */}
          <button
            type="submit"
            disabled={isLoading} // Vô hiệu hóa nếu đang tải
            className={`w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-150 ease-in-out ${
              isLoading ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700"
            }`}
          >
            {/* Hiển thị trạng thái nút */}
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Đang đăng nhập...
              </span>
            ) : (
              "Đăng Nhập"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
