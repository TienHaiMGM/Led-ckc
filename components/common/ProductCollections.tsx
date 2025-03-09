import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useProductEditor } from "../api/hooks/useProductEditor";
import { ITEMS_PER_PAGE, categoryOptions } from "@/utils/constants";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { scrollToTop } from "../../utils/scrollToTop";
import { useSearchParams } from "next/navigation";

import {
  removeDiacritics,
  getSearchHistory,
  saveToSearchHistory,
  clearSearchHistory,
  searchProducts,
} from "../../utils/searchUtils";

interface ProductManagerProps {
  EditorContent: any;
  searchQuery?: string;
}

const ProductCollections: React.FC<ProductManagerProps> = ({
  EditorContent,
  searchQuery = "",
}) => {
  const { products, loading, error } = useProductEditor(EditorContent);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchParams = useSearchParams();
  const queryFromURL = searchParams.get("q") || "";
  const categories = ["Tất cả", ...categoryOptions.map((cat) => cat.label)];

  const isFirstMount = useRef(true); // Biến đánh dấu lần đầu mount

  useEffect(() => {
    if (isFirstMount.current) {
      // Chỉ lấy queryFromURL lần đầu tiên
      setDebouncedQuery(queryFromURL || searchQuery);
      isFirstMount.current = false;
    }
  }, []); // Chỉ chạy 1 lần khi mount

  useEffect(() => {
    // Khi searchQuery thay đổi, luôn ưu tiên giá trị mới
    if (!isFirstMount.current && searchQuery) {
      const timer = setTimeout(() => {
        setDebouncedQuery(searchQuery);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]); // Chỉ theo dõi searchQuery

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
      const query = removeDiacritics(debouncedQuery);
      if (!searchHistory.includes(query)) {
        saveToSearchHistory(query);
        setSearchHistory(getSearchHistory());
      }
      filtered = searchProducts(filtered, query);
    }

    scrollToTop(150);
    setFilteredProducts(filtered);
  }, [products, debouncedQuery, selectedCategory]);

  const handleClearSearchHistory = () => {
    clearSearchHistory();
    setSearchHistory([]);
  };

  if (loading) return <p className="text-center">Đang tải sản phẩm...</p>;
  if (error)
    return <p className="text-center text-red-500">Lỗi tải sản phẩm!</p>;

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
                href={`/chi-tiet-san-pham/`}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductCollections;
