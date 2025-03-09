"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProductCollections from "../../components/common/ProductCollections";
import { FaSearch } from "react-icons/fa";

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow bg-gray-50">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Bộ Sưu Tập Bảng Hiệu
                </h1>
                <p className="mb-8 text-base text-gray-100 sm:text-lg md:text-xl lg:text-2xl">
                  Khám phá các mẫu bảng hiệu độc đáo và chất lượng cao
                </p>

                {/* Search Form */}
                <div className="mx-auto max-w-2xl">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                      }}
                      placeholder="Tìm kiếm sản phẩm..."
                      className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 sm:py-4"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-blue-600 transition-all hover:bg-blue-50 sm:px-6"
                    >
                      <span className="hidden sm:inline">Tìm kiếm</span>
                      <FaSearch className="h-4 w-4 sm:hidden" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <ProductCollections
            EditorContent={undefined}
            searchQuery={searchQuery}
          />
        </main>
      </div>
    </>
  );
}
