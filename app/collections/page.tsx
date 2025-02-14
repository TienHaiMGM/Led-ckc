"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Header from "components/common/Header";
import Menu from "components/common/Menu";
import Footer from "components/common/Footer";
import SocialButtons from "components/common/SocialButtons";
import ProductCollections from "components/common/ProductCollections";

export default function SignPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by ProductCollections component
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/banghieu.jpg"
              alt="Làm bảng hiệu chuyên nghiệp"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Làm Bảng Hiệu Chuyên Nghiệp
              </h1>
              <p className="mb-8 text-lg text-gray-100 md:text-xl">
                Thiết kế và thi công bảng hiệu theo yêu cầu với chất lượng cao
              </p>
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
                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white px-6 py-2 text-blue-600 transition-colors hover:bg-blue-50"
                  >
                    Tìm kiếm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

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
  );
}
