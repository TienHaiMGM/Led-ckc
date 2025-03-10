import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Hộp Đèn | Giải Pháp Quảng Cáo Nổi Bật & Hiệu Quả",
  description:
    "Khám phá tất cả các loại hộp đèn quảng cáo đẹp, bền bỉ, thu hút. Siêu Thị Bảng Hiệu cung cấp giải pháp hộp đèn chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
  keywords: [
    "hộp đèn",
    "thiết kế hộp đèn",
    "hộp đèn quảng cáo",
    "hộp đèn đẹp",
    "hộp đèn LED",
  ],
  openGraph: {
    title: "Tổng Hợp Hộp Đèn | Giải Pháp Quảng Cáo Nổi Bật & Hiệu Quả",
    description:
      "Khám phá tất cả các loại hộp đèn quảng cáo đẹp, bền bỉ, thu hút. Siêu Thị Bảng Hiệu cung cấp giải pháp hộp đèn chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
    url: "https://sieuthibanghieu.com/hop-den",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp hộp đèn - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Hộp Đèn | Giải Pháp Quảng Cáo Nổi Bật & Hiệu Quả",
    description:
      "Khám phá tất cả các loại hộp đèn quảng cáo đẹp, bền bỉ, thu hút. Siêu Thị Bảng Hiệu cung cấp giải pháp hộp đèn chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/hop-den",
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

export default async function HopDenPage() {
  const product = await getProductByCategory("hopden", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Hộp đèn" />
      </main>
    </div>
  );
}
