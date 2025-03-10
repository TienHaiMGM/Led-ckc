import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Logo | Thiết Kế Chuyên Nghiệp & Sáng Tạo",
  description:
    "Khám phá tất cả các loại logo đẹp, sáng tạo, chuyên nghiệp. Siêu Thị Bảng Hiệu cung cấp giải pháp thiết kế logo độc đáo, giúp thương hiệu của bạn nổi bật.",
  keywords: [
    "logo",
    "thiết kế logo",
    "logo chuyên nghiệp",
    "logo sáng tạo",
    "logo thương hiệu",
  ],
  openGraph: {
    title: "Tổng Hợp Logo | Thiết Kế Chuyên Nghiệp & Sáng Tạo",
    description:
      "Khám phá tất cả các loại logo đẹp, sáng tạo, chuyên nghiệp. Siêu Thị Bảng Hiệu cung cấp giải pháp thiết kế logo độc đáo, giúp thương hiệu của bạn nổi bật.",
    url: "https://sieuthibanghieu.com/logo",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp logo - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Logo | Thiết Kế Chuyên Nghiệp & Sáng Tạo",
    description:
      "Khám phá tất cả các loại logo đẹp, sáng tạo, chuyên nghiệp. Siêu Thị Bảng Hiệu cung cấp giải pháp thiết kế logo độc đáo, giúp thương hiệu của bạn nổi bật.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/logo",
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

export default async function LogoPage() {
  const product = await getProductByCategory("logo", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Logo" />
      </main>
    </div>
  );
}
