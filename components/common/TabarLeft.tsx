import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const TabarLeft = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6 lg:w-1/4">
      {/* Left Sidebar */}
      <aside className="">
        {/* Action Call Section */}
        <div className="rounded-lg bg-gradient-to-r from-red-600 to-red-400 p-6 text-white">
          <h3 className="mb-4 text-xl font-bold">Nhận Báo Giá Ngay!</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Tư vấn miễn phí 24/7
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              Báo giá tốt nhất
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Đội ngũ chuyên nghiệp
            </li>
          </ul>
          <a
            href="tel:0123456789"
            className="mt-6 block rounded-lg bg-white px-4 py-2 text-center font-bold text-blue-600 transition duration-300 hover:bg-blue-50"
          >
            Gọi Ngay: 0123.456.789
          </a>
        </div>

        {/* Quick Contact Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-gray-800">
            Yêu Cầu Tư Vấn
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nội dung cần tư vấn"
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700"
            >
              Gửi Yêu Cầu
            </button>
          </form>
        </div>

        {/* Related Articles */}
        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-800">
            Bài Viết Liên Quan
          </h3>
          <div className="space-y-4">
            <Link href="/bao-gia-bang-hieu-alu" className="group block">
              <div className="flex gap-3 rounded-lg p-2 transition duration-300 hover:bg-gray-100">
                <Image
                  src="/images/bang-hieu-cua-hang-thuc-pham-6.jpg"
                  alt="Báo giá bảng hiệu alu"
                  width={80}
                  height={60}
                  className="rounded object-cover"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  Báo giá thi công bảng hiệu Alu mới nhất 2024
                </p>
              </div>
            </Link>
            <Link href="/mau-bang-hieu-alu" className="group block">
              <div className="flex gap-3 rounded-lg p-2 transition duration-300 hover:bg-gray-100">
                <Image
                  src="/images/bang-hieu-dung-spa-5.jpg"
                  alt="Mẫu bảng hiệu alu"
                  width={80}
                  height={60}
                  className="rounded object-cover"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  Top 10 mẫu bảng hiệu Alu đẹp nhất 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default TabarLeft;
