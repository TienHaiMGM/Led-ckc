import { Metadata } from "next";
import News from "@/components/specific/News";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tin Tức & Cập Nhật Mới Nhất | Siêu Thị Bảng Hiệu",
    description:
      "Cập nhật tin tức mới nhất về ngành bảng hiệu, xu hướng thiết kế, công nghệ LED và các giải pháp quảng cáo hiện đại từ Siêu Thị Bảng Hiệu",
    keywords: [
      "tin tức bảng hiệu",
      "xu hướng quảng cáo",
      "công nghệ LED mới",
      "thiết kế bảng hiệu",
      "tin tức quảng cáo",
    ],
    openGraph: {
      title: "Tin Tức & Cập Nhật Mới Nhất | Siêu Thị Bảng Hiệu",
      description:
        "Cập nhật tin tức mới nhất về ngành bảng hiệu, xu hướng thiết kế, công nghệ LED và các giải pháp quảng cáo hiện đại",
      url: "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Siêu Thị Bảng Hiệu - Tin Tức Mới Nhất",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tin Tức & Cập Nhật Mới Nhất | Siêu Thị Bảng Hiệu",
      description: "Cập nhật tin tức mới nhất về ngành bảng hiệu và quảng cáo",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/pages/tin-tuc-moi",
    },
  };
}

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
    <div className="flex min-h-screen flex-col">
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
