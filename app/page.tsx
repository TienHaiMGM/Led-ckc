import Banner from "../components/specific/Banner";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import NeonLogo from "@/components/specific/NeonLogo";
import { getProductByCategory } from "@/components/api/ProductService";
import SchemaMarkup from "@/components/common/SchemaMarkup";

export const metadata = {
  title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
  description:
    "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
  keywords: [
    "bảng hiệu quảng cáo",
    "thiết kế bảng hiệu",
    "bảng hiệu LED",
    "hộp đèn quảng cáo",
    "chữ nổi",
  ],
  openGraph: {
    title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
    description:
      "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
    url: "https://sieuthibanghieu.com/",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Bảng hiệu quảng cáo - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Hiệu Quảng Cáo Chất Lượng Cao | Siêu Thị Bảng Hiệu",
    description:
      "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo, hộp đèn, chữ nổi, đèn LED với thiết kế đẹp, bền bỉ, giá tốt. Liên hệ ngay!",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/",
  },
};

export default async function Home() {
  const banghieu = await getProductByCategory("banghieu");
  const hopDen = await getProductByCategory("hopden");
  const chunoi = await getProductByCategory("chunoi");
  const standee = await getProductByCategory("standee");

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sieuthibanghieu.com/#website",
        url: "https://sieuthibanghieu.com/",
        name: "Siêu Thị Bảng Hiệu",
        description:
          "Siêu Thị Bảng Hiệu - Chuyên sản xuất, thiết kế và lắp đặt bảng hiệu quảng cáo chất lượng cao, đa dạng mẫu mã.",
        publisher: {
          "@id": "https://sieuthibanghieu.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://sieuthibanghieu.com/san-pham?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: "vi",
      },
      {
        "@type": "Organization",
        "@id": "https://sieuthibanghieu.com/#organization",
        name: "Siêu Thị Bảng Hiệu",
        url: "https://sieuthibanghieu.com/",
        logo: "https://chatgpt.com/share/67ce5758-7224-8004-952d-e4dc4150c560",
        sameAs: [
          "https://www.facebook.com/sieuthibanghieu",
          "https://www.youtube.com/sieuthibanghieu",
          "https://www.instagram.com/sieuthibanghieu",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "082 702 4567",
          contactType: "customer service",
          areaServed: "VN",
          availableLanguage: ["Vietnamese", "English"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sieuthibanghieu.com/#localbusiness",
        name: "Siêu Thị Bảng Hiệu",
        url: "https://sieuthibanghieu.com/",
        logo: "https://sieuthibanghieu.com/uploads/logo.png",
        image: "https://sieuthibanghieu.com/uploads/storefront.jpg",
        description:
          "Siêu Thị Bảng Hiệu chuyên cung cấp bảng hiệu quảng cáo LED, hộp đèn, chữ nổi mica, inox, lắp đặt toàn quốc.",
        telephone: "082 702 4567",
        email: "sieuthibanghieu.@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "129 Thoại Ngọc Hầu, Phú Thạnh, Tân Phú, Hồ Chí Minh",
          addressLocality: "Quận 1",
          addressRegion: "Hồ Chí Minh",
          postalCode: "700000",
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "10.781154732411922",
          longitude: "106.63532453142261",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/sieuthibanghieu",
          "https://www.youtube.com/sieuthibanghieu",
          "https://www.instagram.com/sieuthibanghieu",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://sieuthibanghieu.com/",
        url: "https://sieuthibanghieu.com/",
        name: "Siêu Thị Bảng Hiệu - Bảng Hiệu Quảng Cáo Chất Lượng",
        isPartOf: {
          "@id": "https://sieuthibanghieu.com/#website",
        },
        about: {
          "@id": "https://sieuthibanghieu.com/#organization",
        },
        primaryImageOfPage: {
          "@id": "https://sieuthibanghieu.com/#primaryimage",
        },
        image: {
          "@id": "https://sieuthibanghieu.com/#primaryimage",
        },
        thumbnailUrl: "https://sieuthibanghieu.com/uploads/logo.png",
        datePublished: "2024-03-10T12:00:00+00:00",
        dateModified: "2024-03-10T12:00:00+00:00",
        description:
          "Siêu Thị Bảng Hiệu chuyên cung cấp các loại bảng hiệu quảng cáo hiện đại, bao gồm bảng hiệu LED, hộp đèn, chữ nổi inox, mica với giá tốt nhất.",
        breadcrumb: {
          "@id": "https://sieuthibanghieu.com/#breadcrumb",
        },
        inLanguage: "vi",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sieuthibanghieu.com/",
        },
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://sieuthibanghieu.com/"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sieuthibanghieu.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: "https://sieuthibanghieu.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sản phẩm",
            item: "https://sieuthibanghieu.com/san-pham",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Liên hệ",
            item: "https://sieuthibanghieu.com/lien-he",
          },
        ],
      },
    ],
  };
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Banner />
        <section aria-label="Giới thiệu dịch vụ">
          <HowItWorks />
        </section>
        <section className="bg-gray-50" aria-label="Danh mục sản phẩm">
          {/* <ExploreCategories /> */}
          <NeonLogo />
        </section>
        <section aria-label="Bảng hiệu">
          <ItemList products={banghieu} title="Bảng hiệu" slug="bang-hieu" />
        </section>
        <section className="bg-gray-50" aria-label="Hộp đèn">
          <ItemList products={hopDen} title="Hộp đèn" slug="hop-den" />
        </section>
        <section aria-label="Chữ nổi">
          <ItemList products={chunoi} title="Chữ nổi" slug="chu-noi" />
        </section>
        <section className="bg-gray-50" aria-label="Standee">
          <ItemList products={standee} title="Standee" slug="standee" />
        </section>
        <section aria-label="Đánh giá khách hàng">
          <Testimonials />
        </section>
        <SchemaMarkup schemaData={schemaData} />
      </main>
    </div>
  );
}
