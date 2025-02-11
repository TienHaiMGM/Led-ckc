"use client";
import React, { useState, useEffect } from "react";
import { Product } from "../../types/product"; // Corrected import path
import {
  getProductsByCategory,
  getLatestProducts,
} from "../../utils/productHelpers"; // Corrected import path
import ProductCategory from "@/components/common/ProductCategory";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";

const ProductsPage = () => {
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, Product[]>
  >({});
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Get products grouped by category
    const groupedProducts = getProductsByCategory();
    setProductsByCategory(groupedProducts);

    // Get latest products
    const latest = getLatestProducts(6);
    setLatestProducts(latest);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="flex-grow">
        {/* Latest Products Section */}
        <section className="py-8 md:py-12">
          <ProductCategory
            title="Sản phẩm mới nhất"
            products={latestProducts}
            showViewAll={false}
          />
        </section>

        {/* Products by Category Sections */}
        {Object.entries(productsByCategory).map(([category, products]) => (
          <section key={category} className="bg-gray-50 py-8 md:py-12">
            <ProductCategory
              title={category.replace(/-/g, " ").toUpperCase()}
              products={products}
              category={category}
              description={`Khám phá bộ sưu tập ${category.replace(/-/g, " ")} của chúng tôi`}
            />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
