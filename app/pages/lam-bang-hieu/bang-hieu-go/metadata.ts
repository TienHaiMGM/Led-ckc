import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bảng Hiệu Gỗ - Thiết Kế & Thi Công Bảng Hiệu Gỗ Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
  description:
    "Chuyên thiết kế và thi công bảng hiệu gỗ sang trọng, độc đáo. ✓ Tư vấn miễn phí ✓ Báo giá tốt nhất ✓ Bảo hành dài hạn ✓ Đội ngũ chuyên nghiệp",
  keywords: [
    "bảng hiệu gỗ",
    "làm bảng hiệu gỗ",
    "thiết kế bảng hiệu gỗ",
    "thi công bảng hiệu gỗ",
    "giá bảng hiệu gỗ",
    "bảng hiệu quảng cáo gỗ",
    "bảng hiệu gỗ tự nhiên",
    "bảng hiệu gỗ cao cấp",
    "bảng hiệu cửa hàng gỗ",
    "bảng hiệu nhà hàng gỗ",
  ],
  alternates: {
    canonical: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-go",
  },
  openGraph: {
    title:
      "Bảng Hiệu Gỗ - Thiết Kế & Thi Công Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu gỗ sang trọng, độc đáo. Tư vấn miễn phí, báo giá tốt nhất thị trường.",
    url: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-go",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/images/banghieu.jpg",
        width: 800,
        height: 400,
        alt: "Bảng hiệu gỗ chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Hiệu Gỗ - Thiết Kế & Thi Công Chuyên Nghiệp",
    description:
      "Chuyên thiết kế và thi công bảng hiệu gỗ sang trọng, độc đáo. Tư vấn miễn phí, báo giá tốt nhất.",
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
  category: "Bảng Hiệu",
  creator: "Siêu Thị Bảng Hiệu",
  publisher: "Siêu Thị Bảng Hiệu",
};
