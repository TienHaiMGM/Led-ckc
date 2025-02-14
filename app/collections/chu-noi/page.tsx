"use client";
import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const EmbossedLetters = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Chữ nổi",
            content: "",
            images: "",
            category: "chunoi",
            slug: "chu-noi",
            description: "Các mẫu Chữ nổi đẹp, chất lượng cao",
            tags: ["Chữ nổi", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Chữ nổi - Siêu Thị Chữ nổi",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Chữ nổi quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default EmbossedLetters;
