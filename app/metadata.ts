import { Metadata } from "next";

const siteConfig = {
  name: "Siêu Thị Bảng Hiệu",
  description: "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED",
  url: "https://sieuthibanghieu.com",
  keywords: [
    "bảng hiệu",
    "chữ nổi",
    "hộp đèn",
    "biển bạt",
    "biển LED",
    "quảng cáo",
    "bảng hiệu quảng cáo",
    "thiết kế bảng hiệu",
    "thi công bảng hiệu",
    "bảng hiệu đẹp",
    "bảng hiệu giá rẻ",
    "bảng hiệu chuyên nghiệp"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#312e81' },
  ],
  
  manifest: "/manifest.json",
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#4f46e5" },
    ],
  },
  
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'vi-VN': siteConfig.url,
    },
  },
  
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
  },
  
  category: "Business",
};
