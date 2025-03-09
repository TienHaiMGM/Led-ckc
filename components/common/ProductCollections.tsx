import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useProductEditor } from "../api/hooks/useProductEditor";
import { ITEMS_PER_PAGE, categoryOptions } from "@/utils/constants";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { scrollToTop } from "../../utils/scrollToTop";

interface ProductManagerProps {
  EditorContent: any;
  searchQuery?: string;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
}
const ProductCollections: React.FC<ProductManagerProps> = ({
  EditorContent,
  searchQuery = "",
  currentPage = 1,
  setCurrentPage = () => {},
}) => {
  const { products, loading, error } = useProductEditor(EditorContent);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);
  const [mounted, setMounted] = React.useState(false);

  // Get unique categories from products
  const categories = ["Tất cả", ...categoryOptions.map((cat) => cat.label)];

  // Hàm xử lý thay đổi danh mục
  const handleCategoryChange = (categoryLabel: string) => {
    setSelectedCategory(categoryLabel);
    const categoryValue =
      categoryOptions.find((cat) => cat.label === categoryLabel)?.value || "";

    const filtered =
      categoryValue !== ""
        ? products.filter((item) => item.category === categoryValue)
        : products;

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Update filtered products when category, search query, or products change
  useEffect(() => {
    let filtered = [...products];
    let related: typeof products = [];

    // Áp dụng bộ lọc danh mục
    if (selectedCategory !== "Tất cả") {
      const categoryValue =
        categoryOptions.find((cat) => cat.label === selectedCategory)?.value ||
        "";
      filtered = products.filter((item) => item.category === categoryValue);

      // Get related products (same category, but not in current filtered set)
      related = products
        .filter(
          (item) =>
            item.category === categoryValue &&
            !filtered.some((f) => f.id === item.id),
        )
        .slice(0, 4); // Get up to 4 related products
    }

    // Apply search filter if there's a search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      );
    }

    // Sort products
    const sortProducts = (items: typeof products) => {
      return [...items].sort((a, b) => {
        const categoryOrder = {
          "bang-hieu": 1,
          "bang-led": 2,
          "hop-den": 3,
          "chu-noi": 4,
        };
        const categoryDiff =
          (categoryOrder[a.category as keyof typeof categoryOrder] || 999) -
          (categoryOrder[b.category as keyof typeof categoryOrder] || 999);

        if (categoryDiff !== 0) return categoryDiff;
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    };

    setFilteredProducts(sortProducts(filtered));
    setRelatedProducts(sortProducts(related));
  }, [selectedCategory, searchQuery, products]);

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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (loading) {
    return <div className="py-8 text-center">Đang tải...</div>;
  }

  if (error) {
    return (
      <div className="py-8 text-center text-red-500">
        Có lỗi xảy ra khi tải dữ liệu
      </div>
    );
  }
  return (
    <div>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="top-0 z-20 mb-8 bg-white shadow-sm">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-3 py-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full px-4 py-2 text-sm transition-colors md:text-base ${
                      selectedCategory === category
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Selected Category Title */}
          {selectedCategory !== "Tất cả" && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory}
              </h2>
              <div className="mt-2 h-1 w-16 bg-blue-500"></div>
            </div>
          )}
          {/* No results message */}
          {currentItems.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
            </div>
          )}
          {/* Products Grid */}
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
                <ProductCard
                  images={item.images}
                  title={item.title}
                  description={item.description}
                  slug={item.slug}
                  href={"/chi-tiet-san-pham/"}
                />
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2" aria-label="Phân trang">
                <button
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
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
                    onClick={() => {
                      if (typeof page === "number") {
                        setCurrentPage(page);
                        scrollToTop(500);
                      }
                    }}
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
                    setCurrentPage(Math.min(currentPage + 1, totalPages))
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
                className="inline-block rounded-lg bg-red-600 px-8 py-3 text-white transition-colors hover:bg-red-700"
              >
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCollections;
