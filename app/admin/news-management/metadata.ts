import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản Lý Tin Tức - Admin Dashboard",
  description: "Trang quản lý tin tức và bài viết của Siêu Thị Bảng Hiệu",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  other: {
    // Prevent caching of admin pages
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    "Surrogate-Control": "no-store",
  },
};

// Add security headers
export const headers = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "same-origin",
  "Content-Security-Policy": `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    connect-src 'self' https://firestore.googleapis.com;
    frame-ancestors 'none';
  `
    .replace(/\s+/g, " ")
    .trim(),
};
