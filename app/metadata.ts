import { Metadata } from "next";

const siteConfig = {
  name: "Siêu Thị Bảng Hiệu",
  description:
    "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED - Đơn vị thi công uy tín hàng đầu tại Việt Nam",
  url: "https://sieuthibanghieu.vn",
  keywords: [
    "bảng hiệu quảng cáo",
    "thi công bảng hiệu",
    "công ty quảng cáo",
    "biển LED",
    "chữ nổi inox",
    "hộp đèn",
    "giới thiệu công ty",
    "về chúng tôi",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "/images/logo_sieuthibanghieu.png",
        width: 1200,
        height: 630,
        alt: "Siêu Thị Bảng Hiệu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siêu Thị Bảng Hiệu - Đơn vị thi công uy tín",
    description: "Chuyên thiết kế & thi công bảng hiệu chuyên nghiệp",
    images: ["/images/logo_sieuthibanghieu.png"],
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  metadataBase: new URL(siteConfig.url),
};
