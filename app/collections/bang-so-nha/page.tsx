"use client";
import React from "react";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const HouseNumberBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb items={[]} />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Bảng số nhà",
            content: "",
            images: "",
            category: "bangsonha",
            slug: "bang-so-nha",
            description: "Các mẫu Bảng số nhà đẹp, chất lượng cao",
            tags: ["Bảng số nhà", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng số nhà - Siêu Thị Bảng số nhà",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng số nhà quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HouseNumberBoard;
