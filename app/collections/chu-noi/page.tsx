import { Metadata } from "next";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Chữ Nổi - Siêu Thị Bảng Hiệu",
    description: "Khám phá các mẫu Chữ nổi đẹp, chất lượng cao cho quảng cáo.",
    keywords: ["chữ nổi", "quảng cáo", "thiết kế chữ nổi"],
    openGraph: {
      title: "Chữ Nổi - Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại Chữ nổi quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/chu-noi",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Chữ Nổi - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Chữ Nổi - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu Chữ nổi đẹp, chất lượng cao.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/chu-noi",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/chu-noi",
      url: "https://sieuthibanghieu.vn/collections/chu-noi",
      name: "Chữ Nổi",
      description:
        "Khám phá các mẫu Chữ nổi đẹp, chất lượng cao cho quảng cáo.",
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
      "@id": "https://sieuthibanghieu.vn/collections/chu-noi#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/collections/chu-noi",
            url: "https://sieuthibanghieu.vn/collections/chu-noi",
            name: "Chữ Nổi",
          },
        },
      ],
    },
  ],
};

const EmbossedLetters = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory
          EditorContent={{
            title: "Chữ nổi",
            content: "",
            images: "",
            category: "chunoi",
            slug: "chu-noi",
            description: "Các mẫu Chữ nổi đẹp, chất lượng cao",
            tags: ["Chữ nổi", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Chữ nổi - Siêu Thị Chữ nổi",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Chữ nổi quảng cáo chất lượng cao",
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

export default EmbossedLetters;
