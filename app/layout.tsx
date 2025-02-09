import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${geist.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

// Metadata configuration
export const metadata = {
  title: "Siêu Thị Bảng Hiệu",
  description: "Chuyên cung cấp các loại bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED",
  keywords: "bảng hiệu, chữ nổi, hộp đèn, biển bạt, biển LED, quảng cáo",
  viewport: "width=device-width, initial-scale=1",
};
