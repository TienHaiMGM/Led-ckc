"use client";
import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import ProductCategory from "components/common/ProductCategory";
import Breadcrumb from "components/common/Breadcrumb";
import { EDITOR_CONTENT } from "constants";

const SignBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory EditorContent={EDITOR_CONTENT} />
      </main>
      <Footer />
    </div>
  );
};

export default SignBoard;
