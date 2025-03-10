import News from "@/components/specific/News";

export const metadata = {
  title: "Tin Tức & Cập Nhật Xu Hướng Quảng Cáo | Siêu Thị Bảng Hiệu",
  description:
    "Chia sẻ tin tức mới nhất về ngành bảng hiệu, cập nhật xu hướng quảng cáo sáng tạo và hiệu quả. Theo dõi Siêu Thị Bảng Hiệu để không bỏ lỡ thông tin quan trọng.",
  keywords: [
    "xu hướng bảng hiệu quảng cáo",
    "tin tức bảng hiệu",
    "cập nhật ngành quảng cáo",
    "thiết kế bảng hiệu mới nhất",
  ],
  openGraph: {
    title: "Tin Tức & Cập Nhật Xu Hướng Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Chia sẻ tin tức mới nhất về ngành bảng hiệu, cập nhật xu hướng quảng cáo sáng tạo và hiệu quả. Theo dõi Siêu Thị Bảng Hiệu để không bỏ lỡ thông tin quan trọng.",
    url: "https://sieuthibanghieu.com/tin-tuc",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tin tức bảng hiệu - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Tức & Cập Nhật Xu Hướng Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Chia sẻ tin tức mới nhất về ngành bảng hiệu, cập nhật xu hướng quảng cáo sáng tạo và hiệu quả. Theo dõi Siêu Thị Bảng Hiệu để không bỏ lỡ thông tin quan trọng.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/tin-tuc",
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
      "@id": "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
      url: "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
      name: "Tin Tức & Cập Nhật Mới Nhất",
      description:
        "Cập nhật tin tức mới nhất về ngành bảng hiệu, xu hướng thiết kế, công nghệ LED và các giải pháp quảng cáo hiện đại",
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
      "@type": "CollectionPage",
      "@id": "https://sieuthibanghieu.vn/pages/tin-tuc-moi#collection",
      url: "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
      name: "Tin Tức & Cập Nhật Mới Nhất",
      description: "Tổng hợp tin tức mới nhất về ngành bảng hiệu và quảng cáo",
      isPartOf: {
        "@id": "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sieuthibanghieu.vn/pages/tin-tuc-moi#breadcrumb",
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
            "@id": "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
            url: "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
            name: "Tin tức mới",
          },
        },
      ],
    },
  ],
};

const NewsPage = () => {
  return (
    <div>
      <News
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

export default NewsPage;
