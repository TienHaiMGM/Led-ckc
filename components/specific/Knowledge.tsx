"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NewsletterSubscription from "../../components/common/NewsletterSubscription";
import Breadcrumb from "../../components/common/Breadcrumb";
import { EditorProps } from "../../types/product-management";
import { useProductEditorKnowLedge } from "../../components/api/hooks/useProductEditorKnowLedge";
import { removeVietnameseTones } from "@/types/removeVietnameseTones";
import QuickStats from "../common/QuickStat";

const ITEMS_PER_PAGE = 3;

const Knowledge: React.FC<EditorProps> = ({ EditorContent }) => {
  const { products, loading, error } = useProductEditorKnowLedge(EditorContent);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearchTerm = removeVietnameseTones(searchTerm);

  const filteredItems = products.filter((item) => {
    const normalizedTitle = removeVietnameseTones(item.title);
    const normalizedDescription = removeVietnameseTones(item.description);

    return (
      normalizedSearchTerm === "" ||
      normalizedTitle.includes(normalizedSearchTerm) ||
      normalizedDescription.includes(normalizedSearchTerm)
    );
  });

  // Nếu có tìm kiếm, đặt lại currentPage về 1 để tránh lỗi hiển thị trang không có dữ liệu
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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

    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col">
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
                Kiến thức chuyên sâu
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-100 md:text-xl">
                Khám phá những xu hướng mới nhất về bảng hiệu quảng cáo, công
                nghệ LED và giải pháp thiết kế hiện đại
              </p>

              {/* Search Bar */}
              <div className="mx-auto max-w-2xl">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:py-4"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-3 text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none"
                  >
                    <span>Tìm kiếm</span>
                  </button>
                </form>
              </div>
              <QuickStats length={products.length} />
            </div>
          </div>
        </section>
        {/* Breadcrumb */}
        <Breadcrumb />
        {/* Articles Grid */}
        <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : error ? (
              <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
                Có lỗi xảy ra khi tải dữ liệu
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {currentItems.map((item) => (
                    <article
                      key={item.id}
                      className="group rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <Link href={`/kien-thuc/${item.slug}`} className="block">
                        <div className="relative aspect-video overflow-hidden rounded-t-lg">
                          <Image
                            src={item.images}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            quality={85}
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                            {item.title}
                          </h2>
                          <p className="line-clamp-3 text-sm text-gray-600 sm:text-base">
                            {item.description}
                          </p>
                          <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 sm:text-base">
                            Đọc thêm →
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center sm:mt-12">
                    <nav
                      className="flex items-center gap-1 sm:gap-2"
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
                          className={`rounded-lg px-3 py-2 text-sm sm:px-4 sm:text-base ${
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
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages),
                          )
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
              </>
            )}

            {/* Newsletter Subscription */}
            <NewsletterSubscription />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Knowledge;
