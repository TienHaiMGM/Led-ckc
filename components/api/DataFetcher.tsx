"use client";
import React, { useState, useEffect } from "react";
import DatabaseService from "./DatabaseService";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
  category?: string;
  createdAt?: string;
}

const categories = [
  { value: "all", label: "Tất Cả Danh Mục" },
  { value: "banghieu", label: "Bảng Hiệu" },
  { value: "chunoi", label: "Chữ Nổi" },
  { value: "hopden", label: "Hộp Đèn" },
  { value: "bienbat", label: "Biển Bạt" },
  { value: "bienled", label: "Biển LED" },
] as const;

const sortOptions = [
  { value: "newest", label: "Mới Nhất" },
  { value: "priceAsc", label: "Giá Tăng Dần" },
  { value: "priceDesc", label: "Giá Giảm Dần" },
] as const;

const defaultImage = "/images/sieuthibanghieu.jpg";

const DataFetcher = ({ initialProducts }: { initialProducts: Product[] }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(!initialProducts);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  useEffect(() => {
    if (!initialProducts) {
      fetchProducts();
    }
  }, [selectedCategory, sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      let fetchedProducts;
      if (selectedCategory === "all") {
        fetchedProducts = await DatabaseService.getCollection("collections");
      } else {
        fetchedProducts = await DatabaseService.queryCollection({
          collectionName: "collections",
          whereConditions: [
            {
              field: "category",
              operator: "==",
              value: selectedCategory,
            },
          ],
          orderByField: sortBy === "newest" ? "createdAt" : "price",
          orderDirection: sortBy === "priceAsc" ? "asc" : "desc",
        });
      }

      // Sort products if category is 'all'
      if (selectedCategory === "all") {
        fetchedProducts.sort((a: Product, b: Product) => {
          if (sortBy === "newest") {
            return (
              new Date(b.createdAt || 0).getTime() -
              new Date(a.createdAt || 0).getTime()
            );
          } else if (sortBy === "priceAsc") {
            return (a.price || 0) - (b.price || 0);
          } else if (sortBy === "priceDesc") {
            return (b.price || 0) - (a.price || 0);
          }
          return 0;
        });
      }

      setProducts(fetchedProducts as Product[]);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Có lỗi xảy ra khi tải dữ liệu",
      );
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div
          className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
          role="alert"
        >
          <strong className="font-bold">Lỗi: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 md:w-64"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 md:w-64"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex min-h-[200px] items-center justify-center text-center text-gray-600">
          Không có sản phẩm nào trong danh mục này.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || defaultImage}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e: any) => {
                      e.target.src = defaultImage;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                    {product.title}
                  </h2>
                  {product.description && (
                    <p className="mb-2 line-clamp-2 text-gray-600">
                      {product.description}
                    </p>
                  )}
                  {product.price && (
                    <p className="text-lg font-bold text-blue-600">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </p>
                  )}
                  {product.category && (
                    <div className="mt-2">
                      <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                        {categories.find(
                          (cat) => cat.value === product.category,
                        )?.label || product.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
