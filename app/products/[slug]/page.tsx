"use client";
import React from "react";
import { useParams } from "next/navigation";
import { products } from "../../../data/products";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import Image from "next/image";

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Find the product with matching slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <Menu />
        <main className="container mx-auto flex-grow px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Không tìm thấy sản phẩm
            </h1>
            <p className="mt-4 text-gray-600">
              Sản phẩm bạn đang tìm kiếm không tồn tại.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[500px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {product.title}
              </h1>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-700">
                    Giá:
                  </span>
                  <span className="ml-2 text-xl text-blue-600">
                    {product.price}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-lg font-semibold text-gray-700">
                    Mô tả:
                  </span>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-lg font-semibold text-gray-700">
                    Danh mục:
                  </span>
                  <p className="text-gray-600">
                    {product.category.replace(/-/g, " ").toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-6">
                <a
                  href="tel:+84XXXXXXXXX"
                  className="inline-block rounded-md bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
