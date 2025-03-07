import { Metadata } from "next";
import React from "react";
import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Logo - Siêu Thị Bảng Hiệu",
    description: "Khám phá các mẫu Logo đẹp, chất lượng cao cho quảng cáo.",
    keywords: ["logo", "quảng cáo", "thiết kế logo"],
    openGraph: {
      title: "Logo - Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công các loại Logo quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/collections/logo",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Logo - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Logo - Siêu Thị Bảng Hiệu",
      description: "Khám phá các mẫu Logo đẹp, chất lượng cao.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/collections/logo",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/collections/logo",
      url: "https://sieuthibanghieu.vn/collections/logo",
      name: "Logo",
      description: "Khám phá các mẫu Logo đẹp, chất lượng cao cho quảng cáo.",
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
      "@id": "https://sieuthibanghieu.vn/collections/logo#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/collections/logo",
            url: "https://sieuthibanghieu.vn/collections/logo",
            name: "Logo",
          },
        },
      ],
    },
  ],
};

const BienBat = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory
          EditorContent={{
            title: "Biển Bạt",
            content: "",
            images: "",
            category: "bienbat",
            slug: "bien-bat",
            description: "Các mẫu Biển Bạt đẹp, chất lượng cao",
            tags: ["Biển Bạt", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Biển Bạt - Siêu Thị Biển Bạt",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Biển Bạt quảng cáo chất lượng cao",
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

export default BienBat;
