"use client";

import React from "react";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const LEDSignBoard = () => {
  return (
    <>
      {/* Thẻ Head để tối ưu SEO */}
      <Head>
        <title>Bảng Led - Siêu Thị Bảng Led</title>
        <meta
          name="description"
          content="Chuyên thiết kế và thi công các loại Bảng Led quảng cáo chất lượng cao"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Siêu Thị Bảng Hiệu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph (Facebook, Zalo) */}
        <meta property="og:title" content="Bảng Led - Siêu Thị Bảng Led" />
        <meta
          property="og:description"
          content="Chuyên thiết kế và thi công các loại Bảng Led quảng cáo chất lượng cao"
        />
        <meta
          property="og:image"
          content="https://sieuthibanghieu.com/images/bang-led.jpg"
        />
        <meta
          property="og:url"
          content="https://sieuthibanghieu.com/bang-led"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sieuthibanghieu.com/bang-led" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />
        <Menu />
        <Breadcrumb />

        <main className="flex-grow p-4 md:p-6 lg:p-8">
          {/* Thêm H1 để nhấn mạnh nội dung chính của trang */}
          <h1 className="mb-4 text-2xl font-bold">Bảng Led</h1>

          {/* Đoạn giới thiệu ngắn (nếu muốn) để thêm từ khóa & thông tin hữu ích cho người dùng */}
          <p className="mb-6">
            Khám phá những mẫu <strong>Bảng Led</strong> hiện đại, độ bền cao,
            giúp doanh nghiệp của bạn nổi bật với giải pháp quảng cáo ấn tượng.
          </p>

          {/* Component hiển thị danh mục “Bảng Led” */}
          <ProductCategory
            EditorContent={{
              title: "Bảng Led",
              content: "",
              images: "",
              category: "bangled",
              slug: "bang-led",
              description: "Các mẫu Bảng Led đẹp, chất lượng cao",
              tags: ["Bảng Led", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Bảng Led - Siêu Thị Bảng Led",
              seoDescription:
                "Chuyên thiết kế và thi công các loại Bảng Led quảng cáo chất lượng cao",
              featuredImage: "",
              thumbnail: "",
            }}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LEDSignBoard;
