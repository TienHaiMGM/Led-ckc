import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import { products } from "../../../data/products";

const SignBoard = () => {
  // Filter products for this category
  const bangHieuProducts = products.filter(
    (product) => product.category === "bang-hieu",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />
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
