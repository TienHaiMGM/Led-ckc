import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bảng Hiệu Mica - Thiết Kế & Thi Công Bảng Hiệu Deca Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
  description:
    "Chuyên thiết kế và thi công bảng hiệu deca chất lượng cao, bền đẹp. ✓ Tư vấn miễn phí ✓ Báo giá tốt nhất ✓ Bảo hành dài hạn ✓ Đội ngũ chuyên nghiệp",
  keywords: [
    "bảng hiệu deca",
    "làm bảng hiệu deca",
    "thiết kế bảng hiệu deca",
    "thi công bảng hiệu deca",
    "giá bảng hiệu deca",
    "bảng hiệu quảng cáo deca",
    "bảng hiệu deca cao cấp",
    "bảng hiệu deca chữ nổi",
    "bảng hiệu cửa hàng deca",
    "bảng hiệu công ty deca",
  ],
  alternates: {
    canonical: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-deca",
  },
  openGraph: {
    title:
      "Bảng Hiệu Deca - Thiết Kế & Thi Công Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu deca chất lượng cao, bền đẹp. Tư vấn miễn phí, báo giá tốt nhất thị trường.",
    url: "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-deca",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/images/banghieu.jpg",
        width: 800,
        height: 400,
        alt: "Bảng hiệu Deca chuyên nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Hiệu Deca - Thiết Kế & Thi Công Chuyên Nghiệp",
    description:
      "Chuyên thiết kế và thi công bảng hiệu deca chất lượng cao, bền đẹp. Tư vấn miễn phí, báo giá tốt nhất.",
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
