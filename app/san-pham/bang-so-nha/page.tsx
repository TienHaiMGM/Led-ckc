import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Bảng Số Nhà | Thiết Kế Đẹp & Chất Liệu Cao Cấp",
  description:
    "Khám phá tất cả các loại bảng số nhà đẹp, bền bỉ, chất liệu cao cấp. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng số nhà chuyên nghiệp, phù hợp với mọi nhu cầu.",
  keywords: [
    "bảng số nhà",
    "thiết kế bảng số nhà",
    "bảng số nhà đẹp",
    "bảng số nhà cao cấp",
    "bảng số nhà bền đẹp",
  ],
  openGraph: {
    title: "Tổng Hợp Bảng Số Nhà | Thiết Kế Đẹp & Chất Liệu Cao Cấp",
    description:
      "Khám phá tất cả các loại bảng số nhà đẹp, bền bỉ, chất liệu cao cấp. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng số nhà chuyên nghiệp, phù hợp với mọi nhu cầu.",
    url: "https://sieuthibanghieu.com/bang-so-nha",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp bảng số nhà - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Bảng Số Nhà | Thiết Kế Đẹp & Chất Liệu Cao Cấp",
    description:
      "Khám phá tất cả các loại bảng số nhà đẹp, bền bỉ, chất liệu cao cấp. Siêu Thị Bảng Hiệu cung cấp giải pháp bảng số nhà chuyên nghiệp, phù hợp với mọi nhu cầu.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/bang-so-nha",
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

export default async function BangSoNhaPage() {
  const product = await getProductByCategory("bangsonha", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Bảng số nhà" />
      </main>
    </div>
  );
}
