import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Bảng Hiệu Quảng Cáo | Đa Dạng Mẫu Mã & Thiết Kế Đẹp",
  description:
    "Khám phá tất cả các loại bảng hiệu quảng cáo đẹp, chất lượng, đa dạng mẫu mã. Siêu Thị Bảng Hiệu cung cấp giải pháp quảng cáo chuyên nghiệp, phù hợp mọi nhu cầu.",
  keywords: [
    "bảng hiệu quảng cáo",
    "thiết kế bảng hiệu",
    "bảng hiệu đẹp",
    "bảng hiệu chuyên nghiệp",
    "bảng hiệu giá rẻ",
  ],
  openGraph: {
    title: "Tổng Hợp Bảng Hiệu Quảng Cáo | Đa Dạng Mẫu Mã & Thiết Kế Đẹp",
    description:
      "Khám phá tất cả các loại bảng hiệu quảng cáo đẹp, chất lượng, đa dạng mẫu mã. Siêu Thị Bảng Hiệu cung cấp giải pháp quảng cáo chuyên nghiệp, phù hợp mọi nhu cầu.",
    url: "https://sieuthibanghieu.com/bang-hieu",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp bảng hiệu quảng cáo - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Bảng Hiệu Quảng Cáo | Đa Dạng Mẫu Mã & Thiết Kế Đẹp",
    description:
      "Khám phá tất cả các loại bảng hiệu quảng cáo đẹp, chất lượng, đa dạng mẫu mã. Siêu Thị Bảng Hiệu cung cấp giải pháp quảng cáo chuyên nghiệp, phù hợp mọi nhu cầu.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/bang-hieu",
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

export default async function BangHieuPage() {
  const product = await getProductByCategory("banghieu", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Bảng hiệu" />
      </main>
    </div>
  );
}
