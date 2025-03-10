import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Standeee | Giải Pháp Quảng Cáo Di Động & Hiệu Quả",
  description:
    "Khám phá tất cả các loại Standeee quảng cáo đẹp, tiện lợi, dễ di chuyển. Siêu Thị Bảng Hiệu cung cấp giải pháp Standeee chuyên nghiệp, thu hút khách hàng.",
  keywords: [
    "Standeee",
    "thiết kế Standeee",
    "Standeee quảng cáo",
    "Standeee đẹp",
    "Standeee di động",
  ],
  openGraph: {
    title: "Tổng Hợp Standeee | Giải Pháp Quảng Cáo Di Động & Hiệu Quả",
    description:
      "Khám phá tất cả các loại Standeee quảng cáo đẹp, tiện lợi, dễ di chuyển. Siêu Thị Bảng Hiệu cung cấp giải pháp Standeee chuyên nghiệp, thu hút khách hàng.",
    url: "https://sieuthibanghieu.com/standee",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp Standeee - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Standeee | Giải Pháp Quảng Cáo Di Động & Hiệu Quả",
    description:
      "Khám phá tất cả các loại Standeee quảng cáo đẹp, tiện lợi, dễ di chuyển. Siêu Thị Bảng Hiệu cung cấp giải pháp Standeee chuyên nghiệp, thu hút khách hàng.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/standee",
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

export default async function StandeePage() {
  const product = await getProductByCategory("standee", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Standee" />
      </main>
    </div>
  );
}
