"use client";

import Head from "next/head";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import Header from "../components/common/Header";
import Banner from "../components/specific/Banner";
import ExploreCategories from "../components/specific/ExploreCategories";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import SocialButtons from "../components/common/SocialButtons";
import JsonLdWrapper from "../components/common/JsonLdWrapper";
import { useEffect } from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Siêu Thị Bảng Hiệu",
  url: "https://sieuthibanghieu.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://sieuthibanghieu.com/tim-kiem?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Siêu Thị Bảng Hiệu",
    image: "https://sieuthibanghieu.com/images/sieuthibanghieu.jpg",
    description:
      "Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED chất lượng cao",
    "@id": "https://sieuthibanghieu.com",
    url: "https://sieuthibanghieu.com",
    telephone: "+84-XXX-XXX-XXX",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 ABC Street",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "Ho Chi Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.7758439,
      longitude: 106.7017555,
    },
    openingHoursSpecification: {
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
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/sieuthibanghieu",
      "https://www.youtube.com/sieuthibanghieu",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dịch vụ bảng hiệu",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Bảng hiệu",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Thiết kế bảng hiệu",
                description: "Dịch vụ thiết kế bảng hiệu chuyên nghiệp",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Thi công bảng hiệu",
                description: "Dịch vụ thi công bảng hiệu chất lượng cao",
              },
            },
          ],
        },
      ],
    },
  },
};

export default function Home() {
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=5.0",
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Siêu Thị Bảng Hiệu - Thiết Kế & Thi Công Bảng Hiệu Chuyên Nghiệp
        </title>
        <meta
          name="description"
          content="Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED với 10+ năm kinh nghiệm. ✓ Giá tốt nhất ✓ Bảo hành dài hạn ✓ Tư vấn miễn phí"
        />
        <meta
          name="keywords"
          content="thiết kế bảng hiệu, thi công bảng hiệu, làm bảng hiệu, bảng hiệu quảng cáo, bảng hiệu đẹp, bảng hiệu giá rẻ, bảng hiệu led"
        />
        <meta
          property="og:title"
          content="Siêu Thị Bảng Hiệu - Thiết Kế & Thi Công Bảng Hiệu Chuyên Nghiệp"
        />
        <meta
          property="og:description"
          content="Chuyên thiết kế và thi công bảng hiệu, chữ nổi, hộp đèn, biển LED với 10+ năm kinh nghiệm. Giá tốt nhất, bảo hành dài hạn."
        />
        <meta property="og:image" content="/images/sieuthibanghieu.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sieuthibanghieu.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="canonical" href="https://sieuthibanghieu.com" />
        <link
          rel="alternate"
          hrefLang="vi-VN"
          href="https://sieuthibanghieu.com"
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <JsonLdWrapper data={schemaData} />
        <Header />
        <Menu />

        {/* Main Banner Section */}
        <Banner />

        {/* Giới thiệu dịch vụ */}
        <section className="" aria-label="Giới thiệu dịch vụ">
          <HowItWorks />
        </section>

        {/* Danh mục sản phẩm */}
        <section className="bg-gray-50" aria-label="Danh mục sản phẩm">
          <ExploreCategories />
        </section>

        {/* Bảng hiệu */}
        <section className="" aria-label="Bảng hiệu">
          <ItemList
            EditorContent={{
              title: "Bảng Hiệu",
              content: "",
              images: "",
              category: "banghieu",
              slug: "bang-hieu",
              description: "Các mẫu bảng hiệu đẹp, chất lượng cao",
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
        <section className="bg-gray-50" aria-label="Hộp đèn">
          <ItemList
            EditorContent={{
              title: "Hộp đèn",
              content: "",
              images: "",
              category: "hopden",
              slug: "hop-den",
              description: "Các mẫu hộp đèn đẹp, chất lượng cao",
              tags: ["hộp đèn", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Hộp đèn - Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại hộp đèn quảng cáo chất lượng cao",
              featuredImage: "",
              thumbnail: "",
            }}
          />
        </section>

        {/* Chữ nổi */}
        <section className="" aria-label="Chữ nổi">
          <ItemList
            EditorContent={{
              title: "Chữ nổi",
              content: "",
              images: "",
              category: "chunoi",
              slug: "chu-noi",
              description: "Các mẫu chữ nổi đẹp, chất lượng cao",
              tags: ["chữ nổi", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Chữ nổi - Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại chữ nổi quảng cáo chất lượng cao",
              featuredImage: "",
              thumbnail: "",
            }}
          />
        </section>

        {/* LED */}
        <section className="bg-gray-50" aria-label="LED">
          <ItemList
            EditorContent={{
              title: "Bảng Led",
              content: "",
              images: "",
              category: "bangled",
              slug: "bang-led",
              description: "Các mẫu bảng LED đẹp, chất lượng cao",
              tags: ["bảng-led", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Bảng Led - Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại bảng LED quảng cáo chất lượng cao",
              featuredImage: "",
              thumbnail: "",
            }}
          />
        </section>

        {/* Đánh giá khách hàng */}
        <section className="" aria-label="Đánh giá khách hàng">
          <Testimonials />
        </section>

        <SocialButtons />
        <Footer />
      </div>
    </>
  );
}
