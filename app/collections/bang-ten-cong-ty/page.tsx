import React from "react";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const CompanyNameBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Bảng tên công ty",
            content: "",
            images: "",
            category: "bangtencongty",
            slug: "bang-ten-cong-ty",
            description: "Các mẫu Bảng tên công ty đẹp, chất lượng cao",
            tags: ["Bảng tên công ty", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng tên công ty - Siêu Thị Bảng tên công ty",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng tên công ty quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CompanyNameBoard;
