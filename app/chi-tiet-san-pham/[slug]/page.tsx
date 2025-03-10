import ProductDetail_WithData from "@/components/specific/ProductDetail_WithData";
import { getProductBySlug } from "@/components/api/ProductService";
import Breadcrumb from "@/components/common/Breadcrumb";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại - Siêu Thị Bảng Hiệu",
      description: "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: `${product.seoTitle}`,
    description: `${product.seoDescription}`,
    keywords: [
      `${product.seoTitle}`,
      `${product.title}`,
      `Thiết kế ${product.title}`,
      `Làm ${product.title}`,
      `${product.title} giá rẻ`,
      "Siêu Thị Bảng Hiệu",
    ],
    openGraph: {
      title: `${product.seoTitle}`,
      description: `${product.seoDescription}`,
      url: `https://sieuthibanghieu.com/chi-tiet-san-pham/${params.slug}`,
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: product.images,
          width: 1200,
          height: 630,
          alt: product.seoTitle,
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.seoTitle}`,
      description: `${product.seoDescription}`,
      images: [
        "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
      ],
    },
    alternates: {
      canonical: `https://sieuthibanghieu.com/chi-tiet-san-pham/${params.slug}`,
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
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <Breadcrumb />
      <ProductDetail_WithData product={product} />
    </>
  );
}
