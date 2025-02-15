import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import Banner from "../components/specific/Banner";
import ExploreCategories from "../components/specific/ExploreCategories";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import SocialButtons from "../components/common/SocialButtons";
import JsonLdScript from "../components/common/JsonLdScript";
import { products } from "../data/products";

// Homepage specific metadata
export const metadata = {
  title: "Siêu Thị Bảng Hiệu",
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

  // Filter products by category
  const bangHieuProducts = products.filter(
    (product) => product.category === "bang-hieu",
  );
  const hopDenProducts = products.filter(
    (product) => product.category === "hop-den",
  );
  const chuNoiProducts = products.filter(
    (product) => product.category === "chu-noi",
  );
  const ledProducts = products.filter(
    (product) => product.category === "bang-led",
  );

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdScript type="WebPage" data={homePageSchema} />
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
          EditorContent={{
            title: "Bảng Hiệu",
            content: "",
            images: "",
            category: "banghieu",
            slug: "bang-hieu",
            description: "Các mẫu Logo đẹp, chất lượng cao",
            tags: ["bảng hiệu", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng hiệu - Siêu Thị Bảng hiệu",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </section>

      {/* Hộp đèn */}
      <section className="" aria-label="Hộp đèn">
        <ItemList
          EditorContent={{
            title: "Hộp đèn",
            content: "",
            images: "",
            category: "hopden",
            slug: "hop-den",
            description: "Các mẫu Logo đẹp, chất lượng cao",
            tags: ["họp đèn", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Hộp đèn - Siêu Thị Hộp đèn",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Hộp đèn quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </section>

      {/* Chữ nổi */}
      <section aria-label="Chữ nổi">
        <ItemList
          EditorContent={{
            title: "Chữ nổi",
            content: "",
            images: "",
            category: "chunoi",
            slug: "chu-noi",
            description: "Các mẫu Logo đẹp, chất lượng cao",
            tags: ["chữ nổi", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Chữ nổi - Siêu Thị Chữ nổi",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Chữ nổi quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
        />
      </section>

      {/* LED */}
      <section aria-label="LED">
        <ItemList
          EditorContent={{
            title: "Bảng Led",
            content: "",
            images: "",
            category: "bangled",
            slug: "bang-led",
            description: "Các mẫu Led đẹp, chất lượng cao",
            tags: ["bảng-led", "quảng cáo"],
            status: "published",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            seoTitle: "Bảng Led - Siêu Thị Led",
            seoDescription:
              "Chuyên thiết kế và thi công các loại Led quảng cáo chất lượng cao",
            featuredImage: "",
            thumbnail: "",
          }}
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
