import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Biển Bạt | Giải Pháp Quảng Cáo Tiết Kiệm & Hiệu Quả",
  description:
    "Khám phá tất cả các loại biển bạt quảng cáo đẹp, bền bỉ, giá rẻ. Siêu Thị Bảng Hiệu cung cấp giải pháp biển bạt chuyên nghiệp, phù hợp với mọi nhu cầu kinh doanh.",
  keywords: [
    "biển bạt",
    "thiết kế biển bạt",
    "biển bạt quảng cáo",
    "biển bạt đẹp",
    "biển bạt giá rẻ",
  ],
  openGraph: {
    title: "Tổng Hợp Biển Bạt | Giải Pháp Quảng Cáo Tiết Kiệm & Hiệu Quả",
    description:
      "Khám phá tất cả các loại biển bạt quảng cáo đẹp, bền bỉ, giá rẻ. Siêu Thị Bảng Hiệu cung cấp giải pháp biển bạt chuyên nghiệp, phù hợp với mọi nhu cầu kinh doanh.",
    url: "https://sieuthibanghieu.com/bien-bat",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp biển bạt - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Biển Bạt | Giải Pháp Quảng Cáo Tiết Kiệm & Hiệu Quả",
    description:
      "Khám phá tất cả các loại biển bạt quảng cáo đẹp, bền bỉ, giá rẻ. Siêu Thị Bảng Hiệu cung cấp giải pháp biển bạt chuyên nghiệp, phù hợp với mọi nhu cầu kinh doanh.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/bien-bat",
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

export default async function BienBatPage() {
  const product = await getProductByCategory("bienbat", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Biển bạt" />
      </main>
    </div>
  );
}
