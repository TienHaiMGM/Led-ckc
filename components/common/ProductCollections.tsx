import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useProductEditor } from "../api/hooks/useProductEditor";

interface ProductManagerProps {
  EditorContent: any;
  searchQuery?: string;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
}

const ITEMS_PER_PAGE = 12;

// Define category mapping
const CATEGORY_MAP = {
  "Bảng Hiệu": "banghieu",
  "Bảng LED": "bangled",
  "Hộp Đèn": "hopden",
  "Chữ Nổi": "chunoi",
} as const;
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
  const categories = ["Tất cả", ...Object.keys(CATEGORY_MAP)];

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filtered = products.filter((item) => item.category === category);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Update filtered products when category, search query, or products change
  useEffect(() => {
    let filtered = [...products];
    let related: typeof products = [];

    // Apply category filter
    if (selectedCategory !== "Tất cả") {
      const categoryValue =
        CATEGORY_MAP[selectedCategory as keyof typeof CATEGORY_MAP];
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

  // Product card component
  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <article className="rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative h-[60vw] w-full overflow-hidden rounded-t-xl md:h-56">
          <Image
            src={product.images}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
            {product.title}
          </h2>
          <p className="mb-4 line-clamp-3 text-gray-600">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500" suppressHydrationWarning>
              {new Date(product.createdAt).toLocaleDateString("vi-VN")}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );

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
  console.log(
    `products`,
    products.map((product) => product.category),
  );
  return (
    <div>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="sticky top-0 z-20 mb-8 bg-white shadow-sm">
            <div className="container mx-auto">
              <div className="flex flex-wrap gap-3 py-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Related Products */}
          {selectedCategory !== "Tất cả" && relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                Sản phẩm liên quan
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

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
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
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
