import { Metadata } from "next";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bảng Hiệu - Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công các loại bảng hiệu quảng cáo chất lượng cao.",
    keywords: ["bảng hiệu", "quảng cáo", "bảng led", "thiết kế bảng hiệu"],
    openGraph: {
      title: "Bảng Hiệu - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu bảng hiệu đẹp và chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/bang-hieu",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "/images/banghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng Hiệu - Siêu Thị Bảng Hiệu",
        },
      ],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/bang-hieu",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/bang-hieu",
      url: "https://sieuthibanghieu.vn/collections/bang-hieu",
      name: "Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại bảng hiệu quảng cáo chất lượng cao.",
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
      "@id": "https://sieuthibanghieu.vn/collections/bang-hieu#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/collections/bang-hieu",
            url: "https://sieuthibanghieu.vn/collections/bang-hieu",
            name: "Bảng Hiệu",
          },
        },
      ],
    },
  ],
};

const SignBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory
          EditorContent={{
            title: "Bảng hiệu",
            content: "",
            images: "",
            category: "banghieu",
            slug: "bang-hieu",
            description: "Các mẫu Bảng hiệu đẹp, chất lượng cao",
            tags: ["Bảng Led", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng hiệu - Siêu Thị Bảng Led",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao",
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

export default SignBoard;
