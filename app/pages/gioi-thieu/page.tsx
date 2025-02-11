import { Metadata } from "next";
import About from "../../../components/specific/About";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import JsonLdWrapper from "components/common/JsonLdWrapper";
import SocialButtons from "@/components/common/SocialButtons";

export const metadata: Metadata = {
  title:
    "Giới Thiệu Siêu Thị Bảng Hiệu - Đơn Vị Thiết Kế & Thi Công Bảng Hiệu Hàng Đầu",
  description:
    "Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam. Chất lượng - Uy tín - Sáng tạo",
  keywords: [
    "giới thiệu công ty",
    "về chúng tôi",
    "lịch sử hình thành",
    "thiết kế bảng hiệu",
    "thi công bảng hiệu",
    "bảng hiệu chuyên nghiệp",
    "công ty bảng hiệu",
    "dịch vụ bảng hiệu",
  ],
  openGraph: {
    title:
      "Giới Thiệu Siêu Thị Bảng Hiệu - Đơn Vị Thiết Kế & Thi Công Bảng Hiệu Hàng Đầu",
    description:
      "Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam",
    images: ["/images/sieuthibanghieu.jpg"],
    type: "website",
  },
};

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
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Việt Nam",
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
      value: "50+",
    },
    award: "Đơn vị tiên phong trong lĩnh vực bảng hiệu quảng cáo",
  },
};

export default function AboutPage() {
  return (
    <>
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
