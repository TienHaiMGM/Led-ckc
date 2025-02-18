import { Metadata } from "next";
import Header from "../../../components/common/Header";
import Menu from "../../../components/common/Menu";
import Footer from "../../../components/common/Footer";
import SocialButtons from "../../../components/common/SocialButtons";
import { EditorProps } from "../../../types/product-management";
import Knowledge from "@/components/specific/Knowledge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
    description:
      "Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo. Cập nhật xu hướng và công nghệ mới nhất trong ngành.",
    keywords: [
      "kiến thức bảng hiệu",
      "thiết kế bảng hiệu",
      "thi công bảng hiệu",
      "công nghệ LED",
      "xu hướng quảng cáo",
    ],
    openGraph: {
      title: "Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
      description:
        "Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo. Cập nhật xu hướng và công nghệ mới nhất trong ngành.",
      url: "https://sieuthibanghieu.vn/pages/kien-thuc",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Siêu Thị Bảng Hiệu - Kiến Thức Chuyên Sâu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
      description:
        "Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/pages/kien-thuc",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  };
}

export const jsonLd = {
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

const KnowledgePage: React.FC<EditorProps> = ({ EditorContent }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header showSearch={false} />
      <Menu />
      <Knowledge EditorContent={EditorContent} />
      <SocialButtons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default KnowledgePage;
