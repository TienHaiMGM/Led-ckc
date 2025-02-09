import "./globals.css";
import JsonLd from "../components/common/JsonLd";
import "./font.css"; // Import the new font settings

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = {
    name: "Siêu Thị Bảng Hiệu",
    url: "https://sieuthibanghieu.com",
    logo: "https://sieuthibanghieu.com/images/sieuthibanghieu.png",
    description:
      "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-XXX-XXX-XXX",
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/sieuthibanghieu",
      "https://twitter.com/sieuthibanghieu",
      "https://instagram.com/sieuthibanghieu",
    ],
  };

  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
      </head>
      <body className={`antialiased`}>
        <JsonLd type="Organization" data={organizationData} />
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://sieuthibanghieu.com"),
  title: {
    default: "Siêu Thị Bảng Hiệu - Chuyên Thiết Kế và Thi Công Bảng Hiệu",
    template: "%s | Siêu Thị Bảng Hiệu",
  },
  description:
    "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED với chất lượng cao và giá cả cạnh tranh",
  keywords: [
    "bảng hiệu",
    "chữ nổi",
    "hộp đèn",
    "biển bạt",
    "biển LED",
    "quảng cáo",
    "thiết kế bảng hiệu",
    "thi công bảng hiệu",
  ],
  authors: [{ name: "Siêu Thị Bảng Hiệu" }],
  creator: "Siêu Thị Bảng Hiệu",
  publisher: "Siêu Thị Bảng Hiệu",
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
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://sieuthibanghieu.com",
    title: "Siêu Thị Bảng Hiệu - Chuyên Thiết Kế và Thi Công Bảng Hiệu",
    description:
      "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED với chất lượng cao và giá cả cạnh tranh",
    siteName: "Siêu Thị Bảng Hiệu",
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
    title: "Siêu Thị Bảng Hiệu - Chuyên Thiết Kế và Thi Công Bảng Hiệu",
    description:
      "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED với chất lượng cao và giá cả cạnh tranh",
    images: ["https://sieuthibanghieu.com/images/sieuthibanghieu.jpg"],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com",
    languages: {
      "vi-VN": "https://sieuthibanghieu.com",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID", // Replace with actual Google verification ID
  },
};
