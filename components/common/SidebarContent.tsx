import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPercent,
  FaGift,
} from "react-icons/fa";

export const SidebarContent = () => {
  return (
    <div className="space-y-6">
      {/* Promotional Banner */}
      <div className="overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-600 p-4 text-white shadow-lg">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white opacity-10"></div>

          {/* Content */}
          <div className="relative">
            <div className="mb-3 flex items-center">
              <FaGift className="mr-2 h-5 w-5 text-yellow-300 sm:h-6 sm:w-6" />
              <h3 className="text-base font-bold sm:text-lg">
                Ưu Đãi Đặc Biệt
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                <p className="text-sm">Giảm 10% cho đơn hàng trên 10 triệu</p>
              </div>
              <div className="flex items-start space-x-2">
                <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                <p className="text-sm">Thiết kế miễn phí cho khách hàng mới</p>
              </div>
              <div className="flex items-start space-x-2">
                <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                <p className="text-sm">Tặng thêm 6 tháng bảo hành</p>
              </div>
            </div>

            <a
              href="tel:+84123456789"
              className="mt-4 block rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 sm:text-base"
            >
              Nhận Ưu Đãi Ngay
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="rounded-lg bg-blue-50 p-4">
        <h2 className="mb-4 text-base font-semibold text-blue-900 sm:text-lg">
          Liên Hệ Tư Vấn
        </h2>
        <div className="space-y-3">
          <a
            href="tel:+84123456789"
            className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <FaPhone className="h-5 w-5" />
            <span className="text-sm sm:text-base">0123 456 789</span>
          </a>
          <a
            href="mailto:contact@example.com"
            className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <FaEnvelope className="h-5 w-5" />
            <span className="text-sm sm:text-base">Gửi Email</span>
          </a>
          <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
            <FaMapMarkerAlt className="h-5 w-5" />
            <span className="text-sm sm:text-base">TP. Hồ Chí Minh</span>
          </div>
          <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
            <FaClock className="h-5 w-5" />
            <span className="text-sm sm:text-base">8:00 - 17:30</span>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-3 text-base font-semibold text-gray-900 sm:text-lg">
          Cam Kết Dịch Vụ
        </h2>
        <ul className="space-y-2 text-xs text-gray-600 sm:text-sm">
          <li>✓ Tư vấn miễn phí 24/7</li>
          <li>✓ Báo giá trong 30 phút</li>
          <li>✓ Bảo hành dài hạn</li>
          <li>✓ Thi công nhanh chóng</li>
        </ul>
      </div>
    </div>
  );
};
