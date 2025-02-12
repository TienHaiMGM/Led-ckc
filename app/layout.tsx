import "./globals.css";
import JsonLdScript from "../components/common/JsonLdScript";
import "./font.css";
import { StrictMode } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = {
    name: "Siêu Thị Bảng Hiệu",
    url: "https://sieuthibanghieu.com",
    logo: "https://sieuthibanghieu.com/images/logo_sieuthibanghieu.png",
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
        <style>
          {`
            .favicon-text {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              background-color: #ee3337;
              color: white;
              font-family: Arial, sans-serif;
              font-weight: bold;
              font-size: 20px;
              border-radius: 50%;
            }
          `}
        </style>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%23ee3337'/><text x='16' y='22' fill='white' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle'>S</text></svg>"
          type="image/svg+xml"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
      </head>
      <body className={`antialiased`}>
        <StrictMode>
          <JsonLdScript type="Organization" data={organizationData} />
          <div className="flex min-h-screen flex-col">{children}</div>
        </StrictMode>
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
        url: "https://sieuthibanghieu.com/images/logo_sieuthibanghieu.png",
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
    images: ["https://sieuthibanghieu.com/images/logo_sieuthibanghieu.png"],
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
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%234f46e5'/><text x='16' y='22' fill='white' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle'>S</text></svg>",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
  },
};
