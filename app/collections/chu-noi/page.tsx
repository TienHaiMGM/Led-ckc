"use client";
import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import { products } from "../../../data/products";

const EmbossedLetters = () => {
  // Filter products for this category
  const chuNoiProducts = products.filter(
    (product) => product.category === "chu-noi",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />
        <ProductCategory
          title="Chữ nổi"
          products={chuNoiProducts}
          category="chu-noi"
          description="Khám phá bộ sưu tập chữ nổi 3D với nhiều chất liệu đa dạng"
        />
      </main>
      <Footer />
    </div>
  );
};

export default EmbossedLetters;
