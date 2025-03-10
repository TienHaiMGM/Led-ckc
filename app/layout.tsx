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
