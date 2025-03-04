"use client";
import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPercent,
  FaGift,
} from "react-icons/fa";
import ItemCard from "./ItemCard";
import { EditorProps } from "../../types/product-management";
import { useProductEditor } from "../../components/api/hooks/useProductEditor";
import PromotionPopup from "./PromotionPopup";

const ProductCategory: React.FC<EditorProps> = ({ EditorContent }) => {
  const { products } = useProductEditor(EditorContent);
  const [mounted, setMounted] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Return a simpler version during SSR
  if (!mounted) {
    return (
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {EditorContent.title}
          </h1>
          <div className="mt-2 h-1 w-16 bg-blue-500 sm:w-20"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-3">
          {products
            .filter((product) => product.category == EditorContent.category)
            .map((product, index) => (
              <div key={product.id} className="w-full">
                <ItemCard
                  title={product.title}
                  description={product.description}
                  image={product.images}
                  slug={product.slug}
                  priority={index === 0}
                  index={index}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  // Sidebar content component to avoid repetition
  const SidebarContent = (): React.ReactElement => (
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

            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-4 block w-full rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 sm:text-base"
            >
              Nhận Ưu Đãi Ngay
            </button>
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
            href="tel:+0962630679"
            className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <FaPhone className="h-5 w-5" />
            <span className="text-sm sm:text-base">0962 630 679</span>
          </a>
          <a
            href="mailto:sieubthibanghieu@gmail.com?subject=Tư vấn khách hàng&body=Chào bạn, tôi cần từ vấn về..."
            className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <FaEnvelope className="h-5 w-5" />
            <span className="text-sm sm:text-base">Gửi Email</span>
          </a>
          <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
            <FaMapMarkerAlt className="h-5 w-5 lg:w-10 xl:w-10" />
            <span className="text-sm sm:text-base">
              129 Thoại Ngọc Hầu, Phú Thạnh, Tân Phú, Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
            <FaClock className="h-5 w-5" />
            <span className="text-sm sm:text-base">8:00 - 22:00</span>
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

  return (
    <div
      className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8"
      suppressHydrationWarning
    >
      {/* Promotion Popup */}
      <PromotionPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        zaloLink="https://zalo.me/0962630679?text=Chào bạn mình muốn nhận ưu đãi"
      />

      {/* SEO Title and Description */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          {EditorContent.title}
        </h1>
        <div className="mt-2 h-1 w-16 bg-blue-500 sm:w-20"></div>
      </div>

      <div className="lg:flex lg:gap-8">
        {/* Left Sidebar - Visible only on lg and up */}
        <div className="hidden lg:block lg:w-64 lg:shrink-0">
          <div className="sticky top-4">
            <SidebarContent />
          </div>
        </div>

        <div className="flex-grow">
          {/* Products Grid - Mobile First with Progressive Enhancement */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-3">
              {products
                .filter((product) => product.category == EditorContent.category)
                .map((product, index) => (
                  <div key={product.id} className="w-full">
                    <ItemCard
                      title={product.title}
                      description={product.description}
                      image={product.images}
                      slug={product.slug}
                      priority={index === 0}
                      index={index}
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-gray-500">
                Không có sản phẩm nào trong danh mục này
              </p>
            </div>
          )}

          {/* Sidebar Content - Visible only on mobile */}
          <div className="mt-8 lg:hidden">
            <SidebarContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
