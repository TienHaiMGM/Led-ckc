import React from "react";
import About from "../../../components/specific/About";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu | Siêu Thị Bảng Hiệu",
  description:
    "Tìm hiểu về Siêu Thị Bảng Hiệu - đơn vị hàng đầu trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao với giá cả cạnh tranh.",
  keywords: [
    "giới thiệu siêu thị bảng hiệu",
    "về chúng tôi",
    "công ty bảng hiệu",
    "dịch vụ bảng hiệu",
  ],
  openGraph: {
    title: "Giới Thiệu | Siêu Thị Bảng Hiệu",
    description:
      "Tìm hiểu về Siêu Thị Bảng Hiệu - đơn vị hàng đầu trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
