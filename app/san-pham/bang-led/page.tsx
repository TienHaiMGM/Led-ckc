import { Metadata } from "next";
import React from "react";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bảng Led - Siêu Thị Bảng Hiệu",
    description:
      "Khám phá các mẫu Bảng Led hiện đại, chất lượng cao cho quảng cáo.",
    keywords: ["bảng led", "quảng cáo", "thiết kế bảng led"],
    openGraph: {
      title: "Bảng Led - Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại Bảng Led quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/bang-led",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng Led - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bảng Led - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu Bảng Led hiện đại, chất lượng cao.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/bang-led",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/bang-led",
      url: "https://sieuthibanghieu.vn/collections/bang-led",
      name: "Bảng Led",
      description:
        "Khám phá các mẫu Bảng Led hiện đại, chất lượng cao cho quảng cáo.",
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
      "@id": "https://sieuthibanghieu.vn/collections/bang-led#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/collections/bang-led",
            url: "https://sieuthibanghieu.vn/collections/bang-led",
            name: "Bảng Led",
          },
        },
      ],
    },
  ],
};

const LEDSignBoard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory
          EditorContent={{
            title: "Bảng Led",
            content: "",
            images: "",
            category: "bangled",
            slug: "bang-led",
            description: "Các mẫu Bảng Led đẹp, chất lượng cao",
            tags: ["Bảng Led", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng Led - Siêu Thị Bảng Led",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng Led quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default LEDSignBoard;
