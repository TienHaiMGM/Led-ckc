import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import { products } from "../../../data/products";

const LEDSignBoard = () => {
  // Filter products for this category
  const ledProducts = products.filter(
    (product) => product.category === "bang-led",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />
        <ProductCategory title="Bảng LED" products={ledProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default LEDSignBoard;
