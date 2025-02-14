import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bảng Hiệu Inox - Thiết Kế & Thi Công Bảng Hiệu Inox Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
  description:
    "Chuyên thiết kế và thi công bảng hiệu inox cao cấp, sang trọng. ✓ Tư vấn miễn phí ✓ Báo giá tốt nhất ✓ Bảo hành dài hạn ✓ Đội ngũ chuyên nghiệp",
  keywords: [
    "bảng hiệu inox",
    "làm bảng hiệu inox",
    "thiết kế bảng hiệu inox",
    "thi công bảng hiệu inox",
    "giá bảng hiệu inox",
    "bảng hiệu quảng cáo inox",
    "bảng hiệu inox chữ nổi",
    "bảng hiệu cửa hàng inox",
    "bảng hiệu công ty inox",
    "bảng hiệu nhà hàng inox",
  ],
  alternates: {
    canonical: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-inox",
  },
  openGraph: {
    title:
      "Bảng Hiệu Inox - Thiết Kế & Thi Công Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu inox cao cấp, sang trọng. Tư vấn miễn phí, báo giá tốt nhất thị trường.",
    url: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-inox",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/images/banghieu.jpg",
        width: 800,
        height: 400,
        alt: "Bảng hiệu Inox chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Hiệu Inox - Thiết Kế & Thi Công Chuyên Nghiệp",
    description:
      "Chuyên thiết kế và thi công bảng hiệu inox cao cấp, sang trọng. Tư vấn miễn phí, báo giá tốt nhất.",
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
