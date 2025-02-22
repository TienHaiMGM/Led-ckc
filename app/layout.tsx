import "./globals.css";
import "./font.css";
import { StrictMode } from "react";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  metadataBase: new URL("https://sieuthibanghieu.com"),
  title: {
    template: "%s | Siêu Thị Bảng Hiệu",
    default:
      "Siêu Thị Bảng Hiệu - Chuyên Thiết Kế & Thi Công Bảng Hiệu Quảng Cáo",
  },
  description:
    "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp, uy tín tại TP.HCM. Cung cấp đa dạng dịch vụ làm bảng hiệu, chữ nổi, hộp đèn quảng cáo.",
  author: "Siêu thị bảng hiệu",
  openGraph: {
    type: "website",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    images: [
      {
        url: "https://sieuthibanghieu.com/images/sieuthibanghieu.jpg",
        width: 1200,
        height: 630,
        alt: "Siêu Thị Bảng Hiệu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sieuthibanghieu.com/images/sieuthibanghieu.jpg"],
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
    google: "verification_token",
  },
  alternates: {
    canonical: "https://sieuthibanghieu.vn",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Siêu Thị Bảng Hiệu",
      url: "https://sieuthibanghieu.com",
      logo: "https://sieuthibanghieu.com/images/logo_sieuthibanghieu.png",
      telephone: "+84962630679",
      address: {
        "@type": "PostalAddress",
        streetAddress: "129 Thoại Ngọc Hầu",
        addressLocality: "Phường Hòa Thạnh, Quận Tân Phú",
        addressRegion: "TP.Hồ Chí Minh",
        addressCountry: "Việt Nam",
      },
      description:
        "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp, uy tín tại TP.HCM",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Danh mục sản phẩm",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Bảng hiệu",
          },
          {
            "@type": "OfferCatalog",
            name: "Chữ nổi",
          },
          {
            "@type": "OfferCatalog",
            name: "Led",
          },
          {
            "@type": "OfferCatalog",
            name: "Backdrop",
          },
          {
            "@type": "OfferCatalog",
            name: "Logo",
          },
        ],
      },
    },
  ],
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
          <div className="flex min-h-screen flex-col">{children}</div>
        </StrictMode>
      </body>
    </html>
  );
}
