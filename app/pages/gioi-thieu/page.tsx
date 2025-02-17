"use client";

import Head from "next/head";
import About from "../../../components/specific/About";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import JsonLdWrapper from "../../../components/common/JsonLdWrapper";
import SocialButtons from "../../../components/common/SocialButtons";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Giới Thiệu Siêu Thị Bảng Hiệu",
  description:
    "Thông tin về công ty và lịch sử phát triển của Siêu Thị Bảng Hiệu",
  publisher: {
    "@type": "Organization",
    name: "Siêu Thị Bảng Hiệu",
    logo: {
      "@type": "ImageObject",
      url: "https://sieuthibanghieu.vn/images/logo_sieuthibanghieu.png",
    },
    description: "Đơn vị thiết kế và thi công bảng hiệu hàng đầu tại Việt Nam",
    foundingDate: "2013-01-01", // Định dạng YYYY-MM-DD
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Hồ Chí Minh, Việt Nam",
    },
    sameAs: [
      "https://www.facebook.com/sieuthibanghieu",
      "https://www.youtube.com/sieuthibanghieu",
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      unitText: "employees",
    },
    award: "Đơn vị tiên phong trong lĩnh vực bảng hiệu quảng cáo",
  },
};

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
        <JsonLdWrapper data={schemaData} />
      </main>
      <SocialButtons />
      <Footer />
    </>
  );
}
