"use client";
import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import { products } from "../../../data/products";

const LightBox = () => {
  // Filter products for this category
  const hopDenProducts = products.filter(
    (product) => product.category === "hop-den",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />
        <ProductCategory
          title="Hộp đèn"
          products={hopDenProducts}
          category="hop-den"
          description="Khám phá bộ sưu tập hộp đèn quảng cáo chất lượng cao"
        />
      </main>
      <Footer />
    </div>
  );
};

export default LightBox;
