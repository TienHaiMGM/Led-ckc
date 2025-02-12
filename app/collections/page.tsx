"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Header from "components/common/Header";
import Menu from "components/common/Menu";
import Footer from "components/common/Footer";
import SocialButtons from "components/common/SocialButtons";
import { products } from "../../data/products";

const metadata: Metadata = {
  title: "Làm Bảng Hiệu Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
  description:
    "Dịch vụ làm bảng hiệu chuyên nghiệp, đa dạng mẫu mã từ bảng hiệu LED, chữ nổi đến hộp đèn quảng cáo. Thiết kế và thi công theo yêu cầu.",
  keywords:
    "làm bảng hiệu, bảng hiệu quảng cáo, bảng hiệu LED, chữ nổi, hộp đèn",
  openGraph: {
    title: "Làm Bảng Hiệu Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
    description:
      "Dịch vụ làm bảng hiệu chuyên nghiệp, đa dạng mẫu mã từ bảng hiệu LED đến hộp đèn quảng cáo.",
    type: "website",
    locale: "vi_VN",
  },
};

const ITEMS_PER_PAGE = 12;

export default function SignPage() {
  const [mounted, setMounted] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <Menu />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">Loading...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get unique categories
  const categories = [
    "Tất cả",
    ...new Set(
      products.map((item) => {
        switch (item.category) {
          case "bang-hieu":
            return "Bảng Hiệu";
          case "bang-led":
            return "Bảng LED";
          case "hop-den":
            return "Hộp Đèn";
          case "chu-noi":
            return "Chữ Nổi";
          default:
            return item.category;
        }
      }),
    ),
  ];

  // Filter and sort products
  const filteredProducts = products
    .sort((a, b) => {
      // Sort by category first
      const categoryOrder = {
        "bang-hieu": 1,
        "bang-led": 2,
        "hop-den": 3,
        "chu-noi": 4,
      };
      const categoryDiff =
        (categoryOrder[a.category] || 999) - (categoryOrder[b.category] || 999);
      if (categoryDiff !== 0) return categoryDiff;

      // If same category, sort by creation date (newest first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .filter((item) => {
      if (selectedCategory === "Tất cả") return true;
      const categoryMap = {
        "Bảng Hiệu": "bang-hieu",
        "Bảng LED": "bang-led",
        "Hộp Đèn": "hop-den",
        "Chữ Nổi": "chu-noi",
      };
      return item.category === categoryMap[selectedCategory];
    })
    .filter(
      (item) =>
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

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
          <div className="absolute inset-0">
            <Image
              src="/images/banghieu.jpg"
              alt="Làm bảng hiệu chuyên nghiệp"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Làm Bảng Hiệu Chuyên Nghiệp
              </h1>
              <p className="mb-8 text-lg text-gray-100 md:text-xl">
                Thiết kế và thi công bảng hiệu theo yêu cầu với chất lượng cao
              </p>
              <div className="mx-auto max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-2 text-blue-600 transition-colors hover:bg-blue-50">
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
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

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              {currentItems.map((product) => (
                <article
                  key={product.id}
                  className="rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <Link href={`/products/${product.slug}`} className="block">
                    <div className="relative h-[60vw] w-full overflow-hidden rounded-t-xl md:h-56">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                          {product.category === "bang-hieu"
                            ? "Bảng Hiệu"
                            : product.category === "bang-led"
                              ? "Bảng LED"
                              : product.category === "hop-den"
                                ? "Hộp Đèn"
                                : "Chữ Nổi"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                        {product.title}
                      </h2>
                      <p className="mb-4 line-clamp-3 text-gray-600">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-600">
                          {product.price}
                        </span>
                        <span
                          className="text-sm text-gray-500"
                          suppressHydrationWarning
                        >
                          {new Date(product.createdAt).toLocaleDateString(
                            "vi-VN",
                          )}
                        </span>
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

            {/* Contact CTA */}
            <div className="mt-16 rounded-xl bg-white p-8 shadow-sm">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-2xl font-bold">Liên Hệ Tư Vấn</h2>
                <p className="mb-6 text-gray-600">
                  Nhận tư vấn miễn phí về thiết kế và báo giá làm bảng hiệu
                </p>
                <Link
                  href="/lien-he"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  Liên hệ ngay
                </Link>
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
