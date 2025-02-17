"use client";
import { Metadata } from "next";
import "../../styles/gradient.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewsletterSubscription from "../../../components/common/NewsletterSubscription";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import SocialButtons from "@/components/common/SocialButtons";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useProductEditorNew } from "@/components/api/hooks/useProductEditorNew";
import { EditorProps } from "@/types/product-management";

const metadata: Metadata = {
  title: "Tin Tức Mới Nhất Về Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
  description:
    "Cập nhật tin tức mới nhất về bảng hiệu, biển quảng cáo, xu hướng thiết kế và công nghệ LED. Thông tin hữu ích cho doanh nghiệp của bạn.",
  keywords:
    "tin tức bảng hiệu, tin tức quảng cáo, xu hướng bảng hiệu, công nghệ LED mới",
  openGraph: {
    title: "Tin Tức Mới Nhất Về Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Cập nhật tin tức mới nhất về bảng hiệu, biển quảng cáo, xu hướng thiết kế và công nghệ LED.",
    type: "website",
    locale: "vi_VN",
  },
};

const ITEMS_PER_PAGE = 12;

const NewsPage: React.FC<EditorProps> = ({ EditorContent }) => {
  const { products } = useProductEditorNew(EditorContent);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  // Filter news items by category
  const filteredItems =
    selectedCategory === "Tất cả"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Get unique categories
  const categories = [
    "Tất cả",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Generate pagination array
  const generatePaginationArray = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header showSearch={false} />
      <Menu />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 lg:py-24">
          {/* Background with overlay */}
          <div className="absolute inset-0 h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Tin Tức & Cập Nhật
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-100 md:text-xl">
                Khám phá những xu hướng mới nhất về bảng hiệu quảng cáo, công
                nghệ LED và giải pháp thiết kế hiện đại
              </p>

              {/* Search Bar */}
              <div className="mx-auto max-w-2xl">
                <div className="flex items-center rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full bg-transparent px-6 py-3 text-white placeholder-gray-300 focus:outline-none"
                  />
                  <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-600 transition-colors duration-300 hover:bg-gray-100 focus:outline-none">
                    <span>Tìm kiếm</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-1 text-3xl font-bold text-white">
                    {products.length}
                  </div>
                  <div className="text-gray-200">Bài viết</div>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-1 text-3xl font-bold text-white">
                    {categories.length - 1}
                  </div>
                  <div className="text-gray-200">Danh mục</div>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-1 text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-200">Hỗ trợ</div>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="mb-1 text-3xl font-bold text-white">100+</div>
                  <div className="text-gray-200">Khách hàng</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="relative block h-12 w-full text-gray-50"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.3,221.93,101.4Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </section>

        {/* Rest of the content remains the same */}
        {/* News Categories */}
        <section className="sticky top-0 z-10 border-b bg-gray-50 py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-start gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors md:text-base ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Breadcrumb />

        {/* News Grid */}
        <section className="bg-gray-50 py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <Link href={`/bai-viet/${item.slug}`} className="block">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg md:h-56">
                      <Image
                        src={item.images}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 md:text-sm">
                          {item.category}
                        </span>
                        <time className="text-xs text-gray-500 md:text-sm">
                          {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                        </time>
                      </div>
                      <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600 md:text-xl">
                        {item.title}
                      </h2>
                      <p className="line-clamp-3 text-sm text-gray-600 md:text-base">
                        {item.description}
                      </p>
                      <div className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 md:text-base">
                        Đọc thêm →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav
                  className="flex items-center gap-2"
                  aria-label="Phân trang"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`rounded-lg p-2 ${
                      currentPage === 1
                        ? "cursor-not-allowed text-gray-400"
                        : "text-blue-600 hover:bg-blue-50"
                    }`}
                    aria-label="Trang trước"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {generatePaginationArray().map((page, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        typeof page === "number" && setCurrentPage(page)
                      }
                      className={`rounded-lg px-4 py-2 ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : page === "..."
                            ? "cursor-default text-gray-500"
                            : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`rounded-lg p-2 ${
                      currentPage === totalPages
                        ? "cursor-not-allowed text-gray-400"
                        : "text-blue-600 hover:bg-blue-50"
                    }`}
                    aria-label="Trang sau"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}

            {/* Newsletter Subscription */}
            <NewsletterSubscription />
          </div>
        </section>
      </main>

      <SocialButtons />
      <Footer />
    </div>
  );
};
export default NewsPage;
