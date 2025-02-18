import React from "react";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "@/components/common/ProductCategory";
import Breadcrumb from "@/components/common/Breadcrumb";

const LEDSignBoard = () => {
  return (
    <>
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
