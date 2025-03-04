import { Metadata } from "next";
import React from "react";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

const Standee = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory
          EditorContent={{
            title: "Standee",
            content: "",
            images: "",
            category: "standee",
            slug: "standee",
            description: "Các mẫu Standee đẹp, chất lượng cao",
            tags: ["Standee", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Standee - Siêu Thị Standee",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Logo quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
    </div>
  );
};

export default Standee;
