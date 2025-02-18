"use client";

import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import Menu from "../../components/common/Menu";
import Footer from "../../components/common/Footer";
import SocialButtons from "../../components/common/SocialButtons";
import ProductCollections from "../../components/common/ProductCollections";
import { FaSearch } from "react-icons/fa";

export default function CollectionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Bộ Sưu Tập Bảng Hiệu | Siêu Thị Bảng Hiệu</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập bảng hiệu đa dạng với thiết kế độc đáo và chất lượng cao. Dịch vụ thiết kế và thi công bảng hiệu theo yêu cầu."
        />
        <meta
          name="keywords"
          content="bảng hiệu, làm bảng hiệu, thiết kế bảng hiệu, thi công bảng hiệu, bảng hiệu quảng cáo, bảng hiệu LED, bảng hiệu alu"
        />
        <meta
          property="og:title"
          content="Bộ Sưu Tập Bảng Hiệu | Siêu Thị Bảng Hiệu"
        />
        <meta
          property="og:description"
          content="Khám phá bộ sưu tập bảng hiệu đa dạng với thiết kế độc đáo và chất lượng cao."
        />
        <meta property="og:image" content="/images/banghieu.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="canonical" href="https://sieuthibanghieu.vn/collections" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header showSearch={false} />
        <Menu />

        <main className="flex-grow bg-gray-50">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
            <div className="absolute inset-0">
              <Image
                src="/images/banghieu.jpg"
                alt="Bộ sưu tập bảng hiệu chuyên nghiệp"
                fill
                className="object-cover opacity-20"
                priority
                sizes="100vw"
                quality={90}
              />
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
                        setCurrentPage(1);
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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
        <SocialButtons />
        <Footer />
      </div>
    </>
  );
}
