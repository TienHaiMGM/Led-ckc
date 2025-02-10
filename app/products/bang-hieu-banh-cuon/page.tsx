import { Metadata } from "next";
import ProductDetail from "../../../components/specific/ProductDetail";
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

const productData = {
  id: "bang-hieu-banh-cuon",
  title: "Bảng Hiệu Bánh Cuốn",
  description:
    "Thiết kế và thi công bảng hiệu bánh cuốn với phong cách hiện đại, thu hút. Sử dụng chất liệu cao cấp, hệ thống đèn LED tiết kiệm điện và độ bền cao.",
  mainImage: "/images/bang-hieu-banh-cuon-nong-1.jpg",
  gallery: [
    "/images/bang-hieu-banh-cuon-nong-1.jpg",
    "/images/bang-hieu-cua-hang-thuc-pham-6.jpg",
    "/images/bang-hieu-dich-vu-chuyen-tien-1.jpg",
    "/images/bang-hieu-dung-spa-5.jpg",
    "/images/bang-hieu-nuoc-mia-9.jpg",
    "/images/bang-hieu-pickleball-1.jpg",
    "/images/banghieu.jpg",
    "/images/sieuthibanghieu.jpg",
  ],
  features: [
    "Thiết kế độc đáo, phù hợp với phong cách ẩm thực truyền thống",
    "Chất liệu Alu cao cấp, chống oxi hóa, bền màu",
    "Hệ thống đèn LED tiết kiệm điện, tuổi thọ cao",
    "Thi công nhanh chóng, lắp đặt chuyên nghiệp",
    "Bảo hành dài hạn, hỗ trợ bảo trì 24/7",
    "Giá cả cạnh tranh, phù hợp mọi ngân sách",
  ],
  specifications: {
    material: ["Alu cao cấp", "Mica trong suốt", "Đèn LED", "Khung sắt mạ kẽm"],
    size: "Tùy chỉnh theo yêu cầu (Phổ biến: 2m x 0.8m đến 4m x 1.2m)",
    lighting: "Hệ thống LED tiết kiệm điện, tuổi thọ >50.000 giờ",
    warranty: "Bảo hành 2 năm cho phần cứng, 1 năm cho hệ thống điện",
  },
  benefits: [
    {
      title: "Thiết Kế Chuyên Nghiệp",
      description:
        "Đội ngũ thiết kế giàu kinh nghiệm, sáng tạo mẫu theo yêu cầu",
      icon: "FaTools",
    },
    {
      title: "Thi Công Nhanh Chóng",
      description: "Hoàn thành thi công và lắp đặt trong 3-5 ngày",
      icon: "FaClock",
    },
    {
      title: "Bảo Hành Tận Tâm",
      description: "Chế độ bảo hành dài hạn, hỗ trợ kỹ thuật 24/7",
      icon: "FaShieldAlt",
    },
  ],
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
      <ProductDetail product={productData} />
      <JsonLdWrapper data={schemaData} />
      <Footer />
    </>
  );
}
