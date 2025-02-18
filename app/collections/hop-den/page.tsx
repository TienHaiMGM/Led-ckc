import { Metadata } from "next";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hộp Đèn - Siêu Thị Bảng Hiệu",
    description: "Khám phá các mẫu Hộp đèn đẹp, chất lượng cao cho quảng cáo.",
    keywords: ["hộp đèn", "quảng cáo", "thiết kế hộp đèn"],
    openGraph: {
      title: "Hộp Đèn - Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại Hộp đèn quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/hop-den",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Hộp Đèn - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hộp Đèn - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu Hộp đèn đẹp, chất lượng cao.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/hop-den",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/hop-den",
      url: "https://sieuthibanghieu.vn/collections/hop-den",
      name: "Hộp Đèn",
      description:
        "Khám phá các mẫu Hộp đèn đẹp, chất lượng cao cho quảng cáo.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://sieuthibanghieu.vn/#website",
        url: "https://sieuthibanghieu.vn",
        name: "Siêu Thị Bảng Hiệu",
        description:
          "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
        publisher: {
          "@id": "https://sieuthibanghieu.vn/#organization",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sieuthibanghieu.vn/collections/hop-den#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/",
            url: "https://sieuthibanghieu.vn/",
            name: "Trang chủ",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/collections/hop-den",
            url: "https://sieuthibanghieu.vn/collections/hop-den",
            name: "Hộp Đèn",
          },
        },
      ],
    },
  ],
};

const LightBox = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Hộp đèn",
            content: "",
            images: "",
            category: "hopden",
            slug: "hop-den",
            description: "Các mẫu Hộp đèn đẹp, chất lượng cao",
            tags: ["Hộp đèn", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Hộp đèn - Siêu Thị Hộp đèn",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Hộp đèn quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default LightBox;
