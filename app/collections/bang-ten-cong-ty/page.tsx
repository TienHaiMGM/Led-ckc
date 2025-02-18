import { Metadata } from "next";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bảng Tên Công Ty - Siêu Thị Bảng Hiệu",
    description:
      "Khám phá các mẫu Bảng tên công ty đẹp, chất lượng cao cho quảng cáo.",
    keywords: ["bảng tên công ty", "quảng cáo", "thiết kế bảng tên"],
    openGraph: {
      title: "Bảng Tên Công Ty - Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại Bảng tên công ty quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng Tên Công Ty - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bảng Tên Công Ty - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu Bảng tên công ty đẹp, chất lượng cao.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
      url: "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
      name: "Bảng Tên Công Ty",
      description:
        "Khám phá các mẫu Bảng tên công ty đẹp, chất lượng cao cho quảng cáo.",
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
      "@id":
        "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
            url: "https://sieuthibanghieu.vn/collections/bang-ten-cong-ty",
            name: "Bảng Tên Công Ty",
          },
        },
      ],
    },
  ],
};

const CompanyNameBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-4 md:p-6 lg:p-8">
        <ProductCategory
          EditorContent={{
            title: "Bảng tên công ty",
            content: "",
            images: "",
            category: "bangtencongty",
            slug: "bang-ten-cong-ty",
            description: "Các mẫu Bảng tên công ty đẹp, chất lượng cao",
            tags: ["Bảng tên công ty", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng tên công ty - Siêu Thị Bảng tên công ty",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng tên công ty quảng cáo chất lượng cao",
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

export default CompanyNameBoard;
