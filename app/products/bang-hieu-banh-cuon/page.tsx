import { Metadata } from "next";

import Header from "components/common/Header";
import Menu from "components/common/Menu";
import Footer from "components/common/Footer";
import JsonLdWrapper from "components/common/JsonLdWrapper";

export const metadata: Metadata = {
  title:
    "Bảng Hiệu Bánh Cuốn - Thiết Kế & Thi Công Bảng Hiệu Chuyên Nghiệp | Siêu Thị Bảng Hiệu",
  description:
    "Thiết kế và thi công bảng hiệu bánh cuốn chuyên nghiệp, sang trọng. Chất liệu cao cấp, đèn LED tiết kiệm điện, bảo hành dài hạn. Tư vấn miễn phí, giá cạnh tranh.",
  keywords: [
    "bảng hiệu bánh cuốn",
    "làm bảng hiệu bánh cuốn",
    "thiết kế bảng hiệu bánh cuốn",
    "bảng hiệu quán bánh cuốn",
    "bảng hiệu LED bánh cuốn",
    "mẫu bảng hiệu bánh cuốn đẹp",
    "giá bảng hiệu bánh cuốn",
  ],
  openGraph: {
    title: "Bảng Hiệu Bánh Cuốn - Thiết Kế & Thi Công Chuyên Nghiệp",
    description:
      "Thiết kế và thi công bảng hiệu bánh cuốn chuyên nghiệp, sang trọng. Chất liệu cao cấp, đèn LED tiết kiệm điện, bảo hành dài hạn.",
    images: ["/images/bang-hieu-banh-cuon-nong-1.jpg"],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bảng Hiệu Bánh Cuốn",
  image: ["https://sieuthibanghieu.com/images/bang-hieu-banh-cuon-nong-1.jpg"],
  description:
    "Thiết kế và thi công bảng hiệu bánh cuốn chuyên nghiệp, sang trọng. Chất liệu cao cấp, đèn LED tiết kiệm điện, bảo hành dài hạn.",
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
    url: "https://sieuthibanghieu.com/products/bang-hieu-banh-cuon",
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

export default function ProductPage() {
  return (
    <>
      <Header />
      <Menu />
      {/* <ProductDetail_Updated slug="bang-hieu-banh-cuon" /> */}
      <JsonLdWrapper data={schemaData} />
      <Footer />
    </>
  );
}
