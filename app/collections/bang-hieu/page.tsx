"use client";
import React, { useState, useEffect } from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import { products } from "../../../data/products";
import Breadcrumb from "@/components/common/Breadcrumb";

const SignBoard = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Filter products for this category
  const bangHieuProducts = products.filter(
    (product) => product.category === "bang-hieu",
  );

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <Menu />
        <main className="flex-grow p-4 md:p-6 lg:p-8">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          title="Bảng hiệu"
          products={bangHieuProducts}
          category="bang-hieu"
          description="Khám phá bộ sưu tập bảng hiệu đa dạng và chất lượng của chúng tôi"
        />
      </main>
      <Footer />
    </div>
  );
};

export default SignBoard;
