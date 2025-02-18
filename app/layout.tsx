import "./globals.css";
import "./font.css";
import { StrictMode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Siêu Thị Bảng Hiệu",
    default:
      "Siêu Thị Bảng Hiệu - Chuyên Thiết Kế & Thi Công Bảng Hiệu Quảng Cáo",
  },
  description:
    "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp, uy tín tại TP.HCM. Cung cấp đa dạng dịch vụ làm bảng hiệu, chữ nổi, hộp đèn quảng cáo.",
  keywords: [
    "bảng hiệu",
    "quảng cáo",
    "chữ nổi",
    "hộp đèn",
    "bảng led",
    "thiết kế bảng hiệu",
  ],
  openGraph: {
    type: "website",
    siteName: "Siêu Thị Bảng Hiệu",
    locale: "vi_VN",
    images: [
      {
        url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
        width: 1200,
        height: 630,
        alt: "Siêu Thị Bảng Hiệu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sieuthibanghieu.vn/#organization",
      name: "Siêu Thị Bảng Hiệu",
      url: "https://sieuthibanghieu.vn",
      logo: {
        "@type": "ImageObject",
        url: "https://sieuthibanghieu.vn/images/sieuthibanghieulogo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-XXX-XXX-XXX",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: "Vietnamese",
      },
      sameAs: [
        "https://facebook.com/sieuthibanghieu",
        "https://twitter.com/sieuthibanghieu",
        "https://instagram.com/sieuthibanghieu",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sieuthibanghieu.vn/#website",
      url: "https://sieuthibanghieu.vn",
      name: "Siêu Thị Bảng Hiệu",
      description:
        "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
      publisher: {
        "@id": "https://sieuthibanghieu.vn/#organization",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
