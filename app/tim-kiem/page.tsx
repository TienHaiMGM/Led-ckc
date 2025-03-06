"use client";
import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import UnifiedSearchComponent from "../../components/common/UnifiedSearchComponent"; // Corrected import path
import { searchProducts } from "../../utils/searchUtils";
import Image from "next/image";
import Link from "next/link";
import { ProductContent } from "../../types/product-management";
import { useProductEditor } from "@/components/api/hooks/useProductEditor";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 12;

function SearchComponent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  const [searchResults, setSearchResults] = useState<ProductContent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading } = useProductEditor(undefined);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    if (initialQuery && products) {
      // Use searchProducts from searchUtils
      const results = searchProducts(products, initialQuery);
      setSearchResults(results);
      setCurrentPage(1);
    }
  }, [initialQuery, products]);

  const handleSearch = (_query: string, results?: ProductContent[]) => {
    if (results) {
      setSearchResults(results);
    } else if (_query && products) {
      // Use searchProducts from searchUtils if results not provided
      const searchResults = searchProducts(products, _query);
      setSearchResults(searchResults);
    }
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = searchResults.slice(startIndex, endIndex);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setSearchHistory(history);
  }, []);

  const SkeletonCard = () => (
    <div className="h-56 w-full animate-pulse rounded-lg bg-gray-200"></div>
  );
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="mb-4 text-2xl font-bold text-gray-900">
              Tìm kiếm sản phẩm
            </h1>
            <UnifiedSearchComponent
              mode="direct"
              products={products}
              onSearch={handleSearch}
              placeholder="Nhập tên sản phẩm cần tìm..."
              className="max-w-2xl"
              initialQuery={initialQuery}
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[...Array(12)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <>
              {/* Search Results */}
              {searchResults.length > 0 ? (
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                      Kết quả tìm kiếm ({searchResults.length} sản phẩm)
                    </h2>
                  </motion.div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                    {currentItems.map((product) => (
                      <article
                        key={product.id}
                        className="rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                      >
                        <Link
                          href={`/chi-tiet-san-pham/${product.slug}`}
                          className="block"
                        >
                          <div className="relative h-[60vw] w-full overflow-hidden rounded-t-xl md:h-56">
                            <Image
                              src={product.images}
                              alt={product.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                              {product.title}
                            </h3>
                            <p className="mb-4 line-clamp-3 text-gray-600">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
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
                    <div className="mt-8 flex justify-center">
                      <nav className="flex items-center gap-2">
                        {Array.from(
                          { length: totalPages },
                          (_, i) => i + 1,
                        ).map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`rounded-lg px-4 py-2 transition-all ${
                              currentPage === page
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </nav>
                    </div>
                  )}
                </div>
              ) : (
                initialQuery && (
                  <div className="py-8 text-center">
                    <p className="text-gray-500">
                      Không tìm thấy sản phẩm phù hợp
                    </p>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Đang tải kết quả tìm kiếm...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
