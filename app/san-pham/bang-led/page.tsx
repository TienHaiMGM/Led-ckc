import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Bảng Led | Giải Pháp Quảng Cáo Hiện Đại & Thu Hút",
  description:
    "Khám phá tất cả các loại bảng Led quảng cáo đẹp, tiết kiệm điện, độ sáng cao. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng Led chuyên nghiệp, thu hút khách hàng.",
  keywords: [
    "bảng Led",
    "bảng Led quảng cáo",
    "thiết kế bảng Led",
    "bảng Led đẹp",
    "bảng Led chuyên nghiệp",
  ],
  openGraph: {
    title: "Tổng Hợp Bảng Led | Giải Pháp Quảng Cáo Hiện Đại & Thu Hút",
    description:
      "Khám phá tất cả các loại bảng Led quảng cáo đẹp, tiết kiệm điện, độ sáng cao. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng Led chuyên nghiệp, thu hút khách hàng.",
    url: "https://sieuthibanghieu.com/bang-led",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp bảng Led - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Bảng Led | Giải Pháp Quảng Cáo Hiện Đại & Thu Hút",
    description:
      "Khám phá tất cả các loại bảng Led quảng cáo đẹp, tiết kiệm điện, độ sáng cao. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng Led chuyên nghiệp, thu hút khách hàng.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/bang-led",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default async function BangLedPage() {
  const product = await getProductByCategory("bangled", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Bảng Led" />
      </main>
    </div>
  );
}
