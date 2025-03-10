import Knowledge from "@/components/specific/Knowledge";

export const metadata = {
  title: "Hướng Dẫn & Kiến Thức Ngành Quảng Cáo | Siêu Thị Bảng Hiệu",
  description:
    "Khám phá hướng dẫn, mẹo và thông tin chuyên sâu về bảng hiệu quảng cáo. Siêu Thị Bảng Hiệu cung cấp kiến thức giúp bạn thiết kế bảng hiệu chuyên nghiệp và hiệu quả.",
  keywords: [
    "kiến thức bảng hiệu",
    "hướng dẫn làm bảng hiệu",
    "cẩm nang quảng cáo",
    "mẹo thiết kế bảng hiệu",
    "bảng hiệu quảng cáo",
  ],
  openGraph: {
    title: "Hướng Dẫn & Kiến Thức Ngành Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Khám phá hướng dẫn, mẹo và thông tin chuyên sâu về bảng hiệu quảng cáo. Siêu Thị Bảng Hiệu cung cấp kiến thức giúp bạn thiết kế bảng hiệu chuyên nghiệp và hiệu quả.",
    url: "https://sieuthibanghieu.com/kien-thuc",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Kiến thức bảng hiệu - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hướng Dẫn & Kiến Thức Ngành Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Khám phá hướng dẫn, mẹo và thông tin chuyên sâu về bảng hiệu quảng cáo. Siêu Thị Bảng Hiệu cung cấp kiến thức giúp bạn thiết kế bảng hiệu chuyên nghiệp và hiệu quả.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/kien-thuc",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/pages/kien-thuc",
      url: "https://sieuthibanghieu.vn/pages/kien-thuc",
      name: "Kiến Thức Bảng Hiệu & Quảng Cáo",
      description:
        "Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo. Cập nhật xu hướng và công nghệ mới nhất trong ngành.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://sieuthibanghieu.vn/#website",
        url: "https://sieuthibanghieu.vn",
        name: "Siêu Thị Bảng Hiệu",
        description:
          "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
        publisher: {
          "@type": "Organization",
          name: "Siêu Thị Bảng Hiệu",
          logo: {
            "@type": "ImageObject",
            url: "https://sieuthibanghieu.vn/images/sieuthibanghieulogo.png",
          },
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sieuthibanghieu.vn/pages/kien-thuc/#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/pages/kien-thuc",
            url: "https://sieuthibanghieu.vn/pages/kien-thuc",
            name: "Kiến thức",
          },
        },
      ],
    },
  ],
};

const KnowledgePage = () => {
  return (
    <div>
      <Knowledge
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default KnowledgePage;
