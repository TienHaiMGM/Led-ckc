import { Metadata } from "next";
import About from "../../../components/specific/About";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import SocialButtons from "../../../components/common/SocialButtons";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Siêu Thị Bảng Hiệu - Dẫn Đầu Thiết Kế & Thi Công Bảng Hiệu Quảng Cáo",
    description:
      "Hơn 10 năm kinh nghiệm thiết kế & thi công bảng hiệu quảng cáo chuyên nghiệp. Nhận tư vấn miễn phí - Báo giá nhanh chóng!",
    openGraph: {
      title:
        "Giới Thiệu Siêu Thị Bảng Hiệu - Đơn Vị Thiết Kế & Thi Công Bảng Hiệu Hàng Đầu",
      description:
        "Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam",
      url: "https://sieuthibanghieu.com/pages/gioi-thieu",
      siteName: "Siêu Thị Bảng Hiệu CKC",
      images: [
        {
          url: "/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Giới thiệu Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Giới Thiệu Siêu Thị Bảng Hiệu",
      description:
        "Với hơn 10 năm kinh nghiệm, Siêu Thị Bảng Hiệu là đơn vị tiên phong trong lĩnh vực thiết kế và thi công bảng hiệu quảng cáo tại Việt Nam",
      images: ["/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.com/pages/gioi-thieu",
    },
  };
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Siêu Thị Bảng Hiệu CKC",
  url: "https://sieuthibanghieu.com",
  logo: "/images/sieuthibanghieu.jpg",
  description:
    "Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED với 10+ năm kinh nghiệm.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84962630679",
    contactType: "customer service",
    areaServed: "VN",
    availableLanguage: ["Vietnamese"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "129 Thoại Ngọc Hầu",
    addressLocality: "Phường Hòa Thạnh, Quận Tân Phú",
    addressRegion: "Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN",
  },
  sameAs: [
    "https://facebook.com/sieuthibanghieu",
    "https://twitter.com/sieuthibanghieu",
    "https://instagram.com/sieuthibanghieu",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Menu />
      <main>
        <About />
      </main>
      <SocialButtons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
