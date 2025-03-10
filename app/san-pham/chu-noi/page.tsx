import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export const metadata = {
  title: "Tổng Hợp Chữ Nổi | Giải Pháp Quảng Cáo Ấn Tượng & Chuyên Nghiệp",
  description:
    "Khám phá tất cả các loại chữ nổi đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp chữ nổi chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
  keywords: [
    "chữ nổi",
    "thiết kế chữ nổi",
    "chữ nổi quảng cáo",
    "chữ nổi đẹp",
    "chữ nổi sang trọng",
  ],
  openGraph: {
    title: "Tổng Hợp Chữ Nổi | Giải Pháp Quảng Cáo Ấn Tượng & Chuyên Nghiệp",
    description:
      "Khám phá tất cả các loại chữ nổi đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp chữ nổi chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
    url: "https://sieuthibanghieu.com/chu-noi",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Tổng hợp chữ nổi - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tổng Hợp Chữ Nổi | Giải Pháp Quảng Cáo Ấn Tượng & Chuyên Nghiệp",
    description:
      "Khám phá tất cả các loại chữ nổi đẹp, sang trọng, bền bỉ. Siêu Thị Bảng Hiệu cung cấp giải pháp chữ nổi chuyên nghiệp, giúp thương hiệu của bạn nổi bật.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/chu-noi",
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

export default async function ChuNoiPage() {
  const product = await getProductByCategory("chunoi", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Chữ nổi" />
      </main>
    </div>
  );
}
