"use client";
import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import Breadcrumb from "components/common/Breadcrumb";

const SignBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Bảng hiệu",
            content: "",
            images: "",
            category: "banghieu",
            slug: "bang-hieu",
            description: "Các mẫu bảng hiệu đẹp, chất lượng cao",
            tags: ["bảng hiệu", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng hiệu - Siêu Thị Bảng Hiệu",
            seoDescription:
              "Chuyên thiết kế và thi công các loại bảng hiệu quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SignBoard;
