import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Bảng Tên Công Ty | Thiết Kế Chuyên Nghiệp & Sang Trọng",
  description:
    "Khám phá tất cả các loại bảng tên công ty đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng tên công ty chuyên nghiệp, phù hợp với mọi doanh nghiệp.",
  keywords: [
    "bảng tên công ty",
    "thiết kế bảng tên công ty",
    "bảng tên công ty đẹp",
    "bảng tên công ty cao cấp",
    "bảng tên công ty chuyên nghiệp",
  ],
  openGraph: {
    title: "Tổng Hợp Bảng Tên Công Ty | Thiết Kế Chuyên Nghiệp & Sang Trọng",
    description:
      "Khám phá tất cả các loại bảng tên công ty đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng tên công ty chuyên nghiệp, phù hợp với mọi doanh nghiệp.",
    url: "https://sieuthibanghieu.com/bang-ten-cong-ty",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp bảng tên công ty - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Bảng Tên Công Ty | Thiết Kế Chuyên Nghiệp & Sang Trọng",
    description:
      "Khám phá tất cả các loại bảng tên công ty đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng tên công ty chuyên nghiệp, phù hợp với mọi doanh nghiệp.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/bang-ten-cong-ty",
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

export default async function BangTenCongTyPage() {
  const product = await getProductByCategory("bangtencongty", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Bảng công ty" />
      </main>
    </div>
  );
}
