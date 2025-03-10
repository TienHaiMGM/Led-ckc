import "./globals.css";
import "./font.css";
import { StrictMode } from "react";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import SocialButtons from "@/components/common/SocialButtons";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
  description:
    "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
  keywords: [
    "bảng hiệu quảng cáo",
    "thiết kế bảng hiệu",
    "bảng hiệu LED",
    "hộp đèn quảng cáo",
    "chữ nổi",
  ],
  openGraph: {
    title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
    description:
      "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
    url: "https://sieuthibanghieu.com/",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Bảng hiệu quảng cáo - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
    description:
      "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={`antialiased`}>
        <StrictMode>
          <Header />
          <Menu />
          {children}
          <SocialButtons />
          <ScrollToTopButton />
          <Footer />
        </StrictMode>
      </body>
    </html>
  );
}
