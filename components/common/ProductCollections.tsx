import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useProductEditor } from "../api/hooks/useProductEditor";
import { ITEMS_PER_PAGE, categoryOptions } from "@/utils/constants";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { scrollToTop } from "../../utils/scrollToTop";
import { useSearchParams } from "next/navigation"; // Import hook để lấy query từ URL

import {
  removeDiacritics,
  getSearchHistory,
  saveToSearchHistory,
  clearSearchHistory,
  searchProducts,
} from "../../utils/searchUtils"; // Import các hàm tìm kiếm

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
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery); // State debounce
  const categories = ["Tất cả", ...categoryOptions.map((cat) => cat.label)];
  const searchParams = useSearchParams(); // Lấy query từ URL
  const queryFromURL = searchParams.get("q") || ""; // Lấy giá trị "q" từ URL

  useEffect(() => {
    if (!products) return;
    setSearchHistory(getSearchHistory()); // Load lịch sử tìm kiếm khi component mount
    let filtered = [...products];
    if (queryFromURL) {
      const query = removeDiacritics(queryFromURL); // Xử lý tìm kiếm không dấu
      filtered = searchProducts(products, query);
      saveToSearchHistory(query);
      setSearchHistory(getSearchHistory()); // Cập nhật lịch sử tìm kiếm
      scrollToTop(150);
      setFilteredProducts(filtered);
    }
  }, [products, queryFromURL]);

  // ⏳ Debounce search query (Chỉ cập nhật `debouncedQuery` sau 1 giây khi người dùng dừng nhập)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000); // ⏳ Chờ 1 giây trước khi cập nhật

    return () => clearTimeout(timer); // Hủy timer nếu người dùng nhập tiếp
  }, [searchQuery]);

  // Cập nhật danh sách sản phẩm khi dữ liệu thay đổi hoặc khi debounce hoàn tất
  useEffect(() => {
    if (!products) return;
    let filtered = [...products];

    if (selectedCategory !== "Tất cả") {
      const categoryValue =
        categoryOptions.find((cat) => cat.label === selectedCategory)?.value ||
        "";
      filtered = filtered.filter((item) => item.category === categoryValue);
    }

    if (debouncedQuery) {
      const query = removeDiacritics(debouncedQuery); // Bỏ dấu trước khi tìm kiếm
      saveToSearchHistory(query); // Lưu vào lịch sử tìm kiếm
      setSearchHistory(getSearchHistory()); // Cập nhật lịch sử tìm kiếm

      filtered = searchProducts(filtered, query);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, selectedCategory, debouncedQuery, setCurrentPage]);

  const handleClearSearchHistory = () => {
    clearSearchHistory();
    setSearchHistory([]);
  };

  return (
    <div>
      <section className="py-2">
        <div className="container mx-auto px-4">
          {/* Lịch sử tìm kiếm */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold">Lịch sử tìm kiếm</h3>
            {searchHistory.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {searchHistory.map((query, index) => (
                  <span
                    key={index}
                    className="cursor-pointer rounded-lg bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
                    onClick={() =>
                      setFilteredProducts(searchProducts(products, query))
                    }
                  >
                    {query}
                  </span>
                ))}
                <button
                  onClick={handleClearSearchHistory}
                  className="ml-4 text-sm text-red-500 hover:underline"
                >
                  Xóa lịch sử
                </button>
              </div>
            ) : (
              <p className="text-gray-500">Không có lịch sử tìm kiếm.</p>
            )}
          </div>

          {/* Danh mục sản phẩm */}
          <div className="top-0 z-20 mb-8 bg-white shadow-sm">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-3 py-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
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

          {/* Hiển thị danh sách sản phẩm */}
          <motion.div
            key={selectedCategory + debouncedQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                images={item.images}
                title={item.title}
                description={item.description}
                slug={item.slug}
                href={`/chi-tiet-san-pham/`} // 🔥 Thêm slug vào URL
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductCollections;
