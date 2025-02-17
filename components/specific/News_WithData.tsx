"use client";

import Image from "next/image";
import { FaClock, FaShieldAlt, FaTools, FaAward } from "react-icons/fa";
import Link from "next/link";
import { News } from "../api/NewsService";

interface NewsProps {
  News: News;
}

const News_WithData = ({ News }: NewsProps) => {
  const benefits = [
    {
      title: "Thiết Kế Chuyên Nghiệp",
      description:
        "Đội ngũ thiết kế giàu kinh nghiệm, sáng tạo mẫu theo yêu cầu",
      icon: "FaTools",
    },
    {
      title: "Thi Công Nhanh Chóng",
      description: "Hoàn thành thi công và lắp đặt trong 3-5 ngày",
      icon: "FaClock",
    },
    {
      title: "Bảo Hành Tận Tâm",
      description: "Chế độ bảo hành dài hạn, hỗ trợ kỹ thuật 24/7",
      icon: "FaShieldAlt",
    },
  ];

  return (
    <main
      className="min-h-screen bg-gray-50"
      role="main"
      aria-label={`Chi tiết sản phẩm ${News.title}`}
    >
      {/* Hero Section */}
      <section className="py-2">
        <div className="container mx-auto px-1 lg:px-28">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Right Column - Information */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Title with decorative border */}
              <div className="relative pl-2">
                <h1 className="text-2xl font-bold leading-tight text-red-500 lg:text-3xl">
                  {News.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content Section */}
      {News.content && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-28">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Thông tin chi tiết</h2>
              {News.description && (
                <p className="mt-2 text-gray-600">{News.description}</p>
              )}
            </div>
            <div className="prose mx-auto">
              <div dangerouslySetInnerHTML={{ __html: News.content }} />
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16" aria-label="Lợi ích khi chọn dịch vụ">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Lợi Ích Khi Chọn Chúng Tôi
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl text-blue-600" aria-hidden="true">
                  {benefit.icon === "FaTools" && <FaTools />}
                  {benefit.icon === "FaClock" && <FaClock />}
                  {benefit.icon === "FaShieldAlt" && <FaShieldAlt />}
                  {benefit.icon === "FaAward" && <FaAward />}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
        aria-label="Liên hệ"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">
            Bạn Quan Tâm Đến Sản Phẩm?
          </h2>
          <p className="mb-8 text-lg">
            Liên hệ ngay với chúng tôi để được tư vấn chi tiết và báo giá tốt
            nhất
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/lien-he"
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Chuyển đến trang liên hệ"
            >
              Liên Hệ Ngay
            </Link>
            <a
              href="tel:+84123456789"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Gọi điện thoại cho chúng tôi"
            >
              Gọi Điện Thoại
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News_WithData;
