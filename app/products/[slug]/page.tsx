"use client";

import { useParams } from "next/navigation";
import ProductDetail_WithData from "../../../components/specific/ProductDetail_WithData";
import Header from "components/common/Header";
import Menu from "components/common/Menu";
import Footer from "components/common/Footer";
import JsonLdWrapper from "components/common/JsonLdWrapper";
import { products } from "../../../data/products";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find product for metadata
  const product = products.find((p) => p.slug === slug);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title || "Sản phẩm",
    image: [product?.image || "/images/default.jpg"],
    description: product?.description || "",
    brand: {
      "@type": "Brand",
      name: "Siêu Thị Bảng Hiệu",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Siêu Thị Bảng Hiệu",
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      lowPrice: "1000000",
      highPrice: "5000000",
      priceCurrency: "VND",
      offerCount: "5",
      url: `https://sieuthibanghieu.com/products/${slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "147",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Nguyễn Văn A",
      },
      reviewBody: "Chất lượng sản phẩm tuyệt vời, dịch vụ chuyên nghiệp",
    },
  };

  return (
    <>
      <Header />
      <Menu />
      <Breadcrumb />
      <ProductDetail_WithData slug={slug} />
      <JsonLdWrapper data={schemaData} />
      <Footer />
    </>
  );
}
