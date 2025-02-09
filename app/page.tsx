import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import Banner from "../components/specific/Banner";
import ExploreCategories from "../components/specific/ExploreCategories";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import SocialButtons from "../components/specific/SocialButtons";
import JsonLd from "../components/common/JsonLd";
import {
  itemCardSign,
  itemCardLightBox,
  itemCardBraille,
  itemCardAdvertisingSign,
} from "../utils/listItems";

// Homepage specific metadata
export const metadata = {
  title:
    "Siêu Thị Bảng Hiệu - Thiết Kế & Thi Công Bảng Hiệu Chuyên Nghiệp Tại TPHCM",
  description:
    "Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED với 10+ năm kinh nghiệm. ✓ Giá tốt nhất ✓ Bảo hành dài hạn ✓ Tư vấn miễn phí",
  keywords: [
    "thiết kế bảng hiệu",
    "thi công bảng hiệu",
    "làm bảng hiệu",
    "bảng hiệu quảng cáo",
    "bảng hiệu đẹp",
    "bảng hiệu giá rẻ",
    "bảng hiệu led",
  ],
  alternates: {
    canonical: "https://sieuthibanghieu.com",
  },
};

export default function Home() {
  const homePageSchema = {
    "@type": "WebPage",
    name: "Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED chất lượng cao",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Siêu Thị Bảng Hiệu",
      image: "/images/sieuthibanghieu.jpg",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
      telephone: "+84-XXX-XXX-XXX",
      openingHours: "Mo-Su 08:00-20:00",
      hasMap: "https://goo.gl/maps/your-location",
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd type="WebPage" data={homePageSchema} />
      <Header />
      <Menu />

      {/* Main Banner Section */}
      <Banner />

      {/* Giới thiệu dịch vụ */}
      <HowItWorks />
      {/* Danh mục sản phẩm */}
      <ExploreCategories />

      {/* Bảng hiệu */}
      <section className="" aria-label="Bảng hiệu">
        <ItemList
          bgGradient="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          title="BẢNG HIỆU"
          items={itemCardSign}
        />
      </section>

      {/* Hộp đèn */}
      <section className="" aria-label="Hộp đèn">
        <ItemList
          bgGradient="bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16]"
          title="HỘP ĐÈN"
          items={itemCardLightBox}
        />
      </section>

      {/* Chữ nổi */}
      <section aria-label="Chữ nổi">
        <ItemList
          bgGradient="bg-gradient-to-bl from-[#86efac] via-[#fcd34d] to-[#f9a8d4]"
          title="CHỮ NỔI"
          items={itemCardBraille}
        />
      </section>

      {/* LED */}
      <section aria-label="LED">
        <ItemList
          bgGradient="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#dc2626] via-[#f87171] to-[#fecaca]"
          title="LED"
          items={itemCardAdvertisingSign}
        />
      </section>

      {/* Đánh giá khách hàng */}
      <section aria-label="Video về sản phẩm">
        <Testimonials />
      </section>

      <SocialButtons />
      <Footer />
    </div>
  );
}
