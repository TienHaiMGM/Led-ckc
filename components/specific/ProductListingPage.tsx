"use client";
import React from "react";
import Head from "next/head";
import DataFetcher from "../api/DataFetcher";

interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
  category?: string;
  createdAt?: string;
}

interface ProductListingPageProps {
  initialProducts: Product[];
}

const ProductListingPage: React.FC<ProductListingPageProps> = ({
  initialProducts,
}) => {
  return (
    <>
      <Head>
        <title>Bảng Hiệu & Biển Quảng Cáo | Siêu Thị Bảng Hiệu</title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập bảng hiệu đa dạng, chất lượng cao. Thiết kế chuyên nghiệp, giá cả hợp lý ✓ Bảo hành dài hạn ✓ Lắp đặt nhanh chóng"
        />
        <meta
          name="keywords"
          content="bảng hiệu, biển quảng cáo, bảng hiệu led, chữ nổi, hộp đèn, biển bạt"
        />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                Bảng Hiệu & Biển Quảng Cáo Chất Lượng Cao
              </h1>
              <p className="mb-8 text-xl text-blue-100">
                Thiết kế chuyên nghiệp - Thi công nhanh chóng - Bảo hành dài hạn
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-12">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="border-b border-gray-200 p-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  Sản Phẩm Của Chúng Tôi
                </h2>
                <p className="text-lg text-gray-600">
                  Khám phá bộ sưu tập bảng hiệu đa dạng, phù hợp mọi nhu cầu
                </p>
              </div>
              <div className="relative">
                <DataFetcher initialProducts={initialProducts} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductListingPage;
