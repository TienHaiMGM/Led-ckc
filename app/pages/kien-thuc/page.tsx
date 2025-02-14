"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import SocialButtons from "@/components/common/SocialButtons";
import { knowledgeItems } from "../../../utils/knowledgeItems";
import type { KnowledgeArticle } from "../../../types/knowledge";
import Breadcrumb from "@/components/common/Breadcrumb";

const metadata: Metadata = {
  title: "Kiến Thức Chuyên Sâu Về Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
  description:
    "Tổng hợp kiến thức chuyên sâu về bảng hiệu, kỹ thuật lắp đặt, bảo trì và xu hướng công nghệ mới nhất trong ngành quảng cáo.",
  keywords:
    "kiến thức bảng hiệu, kỹ thuật lắp đặt, bảo trì bảng hiệu, công nghệ LED, thiết kế bảng hiệu",
  openGraph: {
    title: "Kiến Thức Chuyên Sâu Về Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Tổng hợp kiến thức chuyên sâu về bảng hiệu, kỹ thuật lắp đặt, bảo trì và xu hướng công nghệ mới nhất.",
    type: "website",
    locale: "vi_VN",
  },
};

const ITEMS_PER_PAGE = 12;

export default function KnowledgePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories
  const categories = [
    "Tất cả",
    ...new Set(knowledgeItems.map((item) => item.category)),
  ];

  // Filter articles by category and search query
  const filteredItems = knowledgeItems
    .filter(
      (item) =>
        selectedCategory === "Tất cả" || item.category === selectedCategory,
    )
    .filter(
      (item) =>
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    );

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

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
      <Header />
      <Menu />
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Kiến Thức Chuyên Sâu
              </h1>
              <p className="mb-8 text-lg text-gray-100 md:text-xl">
                Khám phá kho tàng kiến thức về bảng hiệu, từ kỹ thuật đến công
                nghệ mới nhất
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
                    {knowledgeItems.length}
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
        {/* Categories */}
        <section className="sticky top-0 z-20 border-b bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`rounded-full px-4 py-2 text-sm transition-colors md:text-base ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Breadcrumb />
        {/* Articles Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((article) => (
                <article
                  key={article.id}
                  className="rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <Link href={`/kien-thuc/${article.slug}`} className="block">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl md:h-56">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          {article.author}
                        </span>
                      </div>
                      <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                        {article.title}
                      </h2>
                      <p className="mb-4 line-clamp-3 text-gray-600">
                        {article.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-600"
                          >
                            #{tag}
                          </span>
                        ))}
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

            {/* Newsletter */}
            <div className="mt-16 rounded-xl bg-white p-8 shadow-sm">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-bold">
                  Đăng Ký Nhận Kiến Thức Mới
                </h2>
                <p className="mb-6 text-gray-600">
                  Nhận những bài viết chuyên sâu và cập nhật mới nhất về ngành
                  bảng hiệu
                </p>
                <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="flex-grow rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SocialButtons />
      <Footer />
    </div>
  );
}
