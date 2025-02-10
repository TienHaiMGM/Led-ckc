"use client";
import { Card, CardContent } from "../ui/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPercent,
  FaGift,
} from "react-icons/fa";
import productsData from "../../utils/products.json";

interface ProductCategoryProps {
  title: string;
  categoryProduct?: string;
}

const products = productsData;

const ProductCategory: React.FC<ProductCategoryProps> = ({ title }) => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Title and Description */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="mt-2 h-1 w-20 bg-blue-500"></div>
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="w-64 shrink-0 space-y-6">
          {/* Promotional Banner */}
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-red-500 to-red-600 p-4 text-white shadow-lg">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white opacity-10"></div>

              {/* Content */}
              <div className="relative">
                <div className="mb-3 flex items-center">
                  <FaGift className="mr-2 h-6 w-6 text-yellow-300" />
                  <h3 className="text-lg font-bold">Ưu Đãi Đặc Biệt</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                    <p className="text-sm">
                      Giảm 10% cho đơn hàng trên 10 triệu
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                    <p className="text-sm">
                      Thiết kế miễn phí cho khách hàng mới
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <FaPercent className="mt-1 h-4 w-4 text-yellow-300" />
                    <p className="text-sm">Tặng thêm 6 tháng bảo hành</p>
                  </div>
                </div>

                <a
                  href="tel:+84123456789"
                  className="mt-4 block rounded-lg bg-white px-4 py-2 text-center font-semibold text-red-600 transition-colors hover:bg-red-50"
                >
                  Nhận Ưu Đãi Ngay
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="rounded-lg bg-blue-50 p-4">
            <h2 className="mb-4 text-lg font-semibold text-blue-900">
              Liên Hệ Tư Vấn
            </h2>
            <div className="space-y-3">
              <a
                href="tel:+84123456789"
                className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
              >
                <FaPhone className="h-5 w-5" />
                <span>0123 456 789</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Gửi Email</span>
              </a>
              <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
                <FaMapMarkerAlt className="h-5 w-5" />
                <span>TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg bg-white p-3 text-gray-700">
                <FaClock className="h-5 w-5" />
                <span>8:00 - 17:30</span>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Cam Kết Dịch Vụ
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Tư vấn miễn phí 24/7</li>
              <li>✓ Báo giá trong 30 phút</li>
              <li>✓ Bảo hành dài hạn</li>
              <li>✓ Thi công nhanh chóng</li>
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden rounded-lg p-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent>
                  <div className="relative h-56 w-96 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="h-60 w-96 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-1 line-clamp-2 px-2 py-1 text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <Link
                    href={`/product/${product.id}`}
                    className="mt-1 block w-full rounded-lg bg-blue-500 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-blue-600"
                  >
                    Xem chi tiết
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
