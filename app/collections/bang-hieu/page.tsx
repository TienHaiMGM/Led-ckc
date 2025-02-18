"use client";

import React from "react";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const SignBoard = () => {
  return (
    <>
      {/* Thẻ Head để tối ưu SEO */}
      <Head>
        <title>Bảng hiệu - Siêu Thị Bảng Led</title>
        <meta
          name="description"
          content="Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Siêu Thị Bảng Hiệu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph (Facebook, Zalo) */}
        <meta property="og:title" content="Bảng hiệu - Siêu Thị Bảng Led" />
        <meta
          property="og:description"
          content="Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao"
        />
        <meta
          property="og:image"
          content="https://sieuthibanghieu.com/images/bang-hieu.jpg"
        />
        <meta
          property="og:url"
          content="https://sieuthibanghieu.com/bang-hieu"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sieuthibanghieu.com/bang-hieu" />
      </Head>

      <div className="flex min-h-screen flex-col">
        {/* (Tuỳ chọn) Chèn JSON-LD */}

        <Header />
        <Menu />
        <Breadcrumb />

        <main className="flex-grow p-4 md:p-6 lg:p-8">
          {/* Triển khai component danh mục sản phẩm */}
          <ProductCategory
            EditorContent={{
              title: "Bảng hiệu",
              content: "",
              images: "",
              category: "banghieu",
              slug: "bang-hieu",
              description: "Các mẫu Bảng hiệu đẹp, chất lượng cao",
              tags: ["Bảng Led", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Bảng hiệu - Siêu Thị Bảng Led",
              seoDescription:
                "Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao",
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

export default SignBoard;
