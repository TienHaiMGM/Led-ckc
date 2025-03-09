"use client";
import { useEffect, useState } from "react";
import NewsletterSubscription from "../../components/common/NewsletterSubscription";
import Breadcrumb from "../../components/common/Breadcrumb";
import { EditorProps } from "../../types/product-management";
import { useProductEditorKnowLedge } from "../../components/api/hooks/useProductEditorKnowLedge";
import { removeVietnameseTones } from "@/types/removeVietnameseTones";
import QuickStats from "../common/QuickStat";
import { motion } from "framer-motion";
import ItemCardArticle from "../common/itemCardArticle";
import { ITEMS_PER_PAGE } from "@/utils/constants";

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

  const SkeletonCard = () => (
    <div className="h-56 w-full animate-pulse rounded-lg bg-gray-200 sm:h-72 lg:h-64"></div>
  );

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
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : error ? (
              <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
                Có lỗi xảy ra khi tải dữ liệu
              </div>
            ) : (
              <>
                {/* Hiệu ứng motion khi hiển thị danh sách bài viết */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {currentItems.map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <ItemCardArticle
                        images={item.images}
                        title={item.title}
                        description={item.description}
                        slug={item.slug}
                        href={"/kien-thuc/"}
                      />
                    </motion.article>
                  ))}
                </motion.div>

                {/* Pagination với Motion */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 flex justify-center sm:mt-12"
                  >
                    <motion.nav
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
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
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
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
                        </motion.button>
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
                    </motion.nav>
                  </motion.div>
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
