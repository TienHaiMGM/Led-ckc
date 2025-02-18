"use client";

import Head from "next/head";
import About from "../../../components/specific/About";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";

import SocialButtons from "../../../components/common/SocialButtons";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>
          Giới Thiệu Siêu Thị Bảng Hiệu - Đơn Vị Thiết Kế & Thi Công Bảng Hiệu
          Hàng Đầu
        </title>
        <meta
          name="description"
          content="Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam. Chất lượng - Uy tín - Sáng tạo"
        />
        <meta
          name="keywords"
          content="giới thiệu công ty, về chúng tôi, lịch sử hình thành, thiết kế bảng hiệu, thi công bảng hiệu, bảng hiệu chuyên nghiệp, công ty bảng hiệu, dịch vụ bảng hiệu"
        />
        <meta
          property="og:title"
          content="Giới Thiệu Siêu Thị Bảng Hiệu - Đơn Vị Thiết Kế & Thi Công Bảng Hiệu Hàng Đầu"
        />
        <meta
          property="og:description"
          content="Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam"
        />
        <meta property="og:image" content="/images/sieuthibanghieu.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link
          rel="canonical"
          href="https://sieuthibanghieu.vn/pages/gioi-thieu"
        />
      </Head>
      <Header />
      <Menu />
      <main>
        <About />
      </main>
      <SocialButtons />
      <Footer />
    </>
  );
}
