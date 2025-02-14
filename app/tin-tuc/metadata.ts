import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin Tức & Thông Tin Mới Nhất - Siêu Thị Bảng Hiệu",
  description:
    "Cập nhật tin tức mới nhất về ngành quảng cáo, bảng hiệu, công nghệ LED và các xu hướng thiết kế mới. Thông tin khuyến mãi, hướng dẫn và dự án tiêu biểu.",
  keywords: [
    "tin tức bảng hiệu",
    "tin tức quảng cáo",
    "thông tin bảng hiệu",
    "xu hướng thiết kế",
    "công nghệ LED mới",
    "khuyến mãi bảng hiệu",
    "dự án tiêu biểu",
    "hướng dẫn làm bảng hiệu",
    "tin tức ngành quảng cáo",
    "bảng hiệu mới nhất",
  ],
  alternates: {
    canonical: "https://sieuthibanghieu.vn/tin-tuc",
  },
  openGraph: {
    title: "Tin Tức & Thông Tin Mới Nhất - Siêu Thị Bảng Hiệu",
    description:
      "Cập nhật tin tức mới nhất về ngành quảng cáo, bảng hiệu, công nghệ LED và các xu hướng thiết kế mới.",
    url: "https://sieuthibanghieu.vn/tin-tuc",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/banghieu.jpg",
        width: 800,
        height: 400,
        alt: "Tin tức bảng hiệu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin Tức & Thông Tin Mới Nhất - Siêu Thị Bảng Hiệu",
    description:
      "Cập nhật tin tức mới nhất về ngành quảng cáo, bảng hiệu, công nghệ LED và các xu hướng thiết kế mới.",
    images: ["/images/banghieu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Tin tức",
  creator: "Siêu Thị Bảng Hiệu",
  publisher: "Siêu Thị Bảng Hiệu",
  metadataBase: new URL("https://sieuthibanghieu.vn"),
  authors: [
    {
      name: "Siêu Thị Bảng Hiệu",
      url: "https://sieuthibanghieu.vn",
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "google-site-verification": "your-verification-code",
  },
};
