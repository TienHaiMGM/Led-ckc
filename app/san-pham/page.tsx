import CollectionsPage from "@/components/specific/CollectionsPage";

export const metadata = {
  title: "Sản Phẩm | Bảng Hiệu Quảng Cáo Đẹp & Chất Lượng",
  description:
    "Khám phá các bảng hiệu quảng cáo chất lượng cao tại Siêu Thị Bảng Hiệu. Thiết kế đẹp, gia công nhanh chóng, phù hợp với mọi nhu cầu thương hiệu.",
  keywords: [
    "bảng hiệu quảng cáo",
    "bảng hiệu đẹp",
    "thiết kế bảng hiệu",
    "bảng hiệu LED",
    "hộp đèn quảng cáo",
  ],
  openGraph: {
    title: "Sản Phẩm | Bảng Hiệu Quảng Cáo Đẹp & Chất Lượng",
    description:
      "Khám phá các bảng hiệu quảng cáo chất lượng cao tại Siêu Thị Bảng Hiệu. Thiết kế đẹp, gia công nhanh chóng, phù hợp với mọi nhu cầu thương hiệu.",
    url: "https://sieuthibanghieu.com/san-pham",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Sản phẩm bảng hiệu quảng cáo - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sản Phẩm | Bảng Hiệu Quảng Cáo Đẹp & Chất Lượng",
    description:
      "Khám phá các bảng hiệu quảng cáo chất lượng cao tại Siêu Thị Bảng Hiệu. Thiết kế đẹp, gia công nhanh chóng, phù hợp với mọi nhu cầu thương hiệu.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/san-pham",
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
export default function SanPhamPage() {
  return (
    <>
      <CollectionsPage />
    </>
  );
}
