"use client";
import React from "react";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const LightBox = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Hộp đèn",
            content: "",
            images: "",
            category: "hopden",
            slug: "hop-den",
            description: "Các mẫu Hộp đèn đẹp, chất lượng cao",
            tags: ["Hộp đèn", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Hộp đèn - Siêu Thị Hộp đèn",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Hộp đèn quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default LightBox;
