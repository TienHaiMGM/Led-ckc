"use client";

import Head from "next/head";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import SocialButtons from "../../../components/common/SocialButtons";
import Breadcrumb from "../../../components/common/Breadcrumb";
import ContactForm from "../../../components/common/ContactForm";
import JsonLdWrapper from "../../../components/common/JsonLdWrapper";
import { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Comprehensive Schema.org JSON-LD for Contact Page
const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Liên Hệ | Siêu Thị Bảng Hiệu",
  description:
    "Liên hệ với Siêu Thị Bảng Hiệu để được tư vấn và báo giá chi tiết về dịch vụ thiết kế, thi công bảng hiệu quảng cáo.",
  url: "https://sieuthibanghieu.vn/pages/lien-he",
  isPartOf: {
    "@type": "WebSite",
    name: "Siêu Thị Bảng Hiệu",
    url: "https://sieuthibanghieu.vn",
  },
  mainEntity: {
    "@type": "Organization",
    name: "Siêu Thị Bảng Hiệu",
    description:
      "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
    url: "https://sieuthibanghieu.vn",
    logo: {
      "@type": "ImageObject",
      url: "https://sieuthibanghieu.vn/images/logo_sieuthibanghieu.png",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "129 Đường ABC",
      addressLocality: "Quận XYZ",
      addressRegion: "Hồ Chí Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.781176959104327",
      longitude: "106.63277367589112",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "(123) 456-7890",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["Vietnamese"],
        contactOption: "TollFree",
        hoursAvailable: {
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
          closes: "17:00",
        },
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@example.com",
        areaServed: "VN",
        availableLanguage: ["Vietnamese"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/sieuthibanghieu",
      "https://www.messenger.com/sieuthibanghieu",
      "https://wa.me/sieuthibanghieu",
      "skype:sieuthibanghieu?chat",
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://sieuthibanghieu.vn",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Liên hệ",
        item: "https://sieuthibanghieu.vn/pages/lien-he",
      },
    ],
  },
  potentialAction: {
    "@type": "ContactAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sieuthibanghieu.vn/pages/lien-he",
      inLanguage: "vi-VN",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Message",
      description: "Yêu cầu tư vấn và báo giá",
    },
  },
};

const Contact = () => {
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
        <title>Liên Hệ | Siêu Thị Bảng Hiệu - Tư Vấn & Báo Giá</title>
        <meta
          name="description"
          content="Liên hệ với Siêu Thị Bảng Hiệu để được tư vấn và báo giá chi tiết về dịch vụ thiết kế, thi công bảng hiệu quảng cáo. Đội ngũ chuyên nghiệp, nhiều năm kinh nghiệm."
        />
        <meta
          name="keywords"
          content="liên hệ, tư vấn bảng hiệu, báo giá bảng hiệu, thiết kế bảng hiệu, thi công bảng hiệu"
        />
        <meta
          property="og:title"
          content="Liên Hệ | Siêu Thị Bảng Hiệu - Tư Vấn & Báo Giá"
        />
        <meta
          property="og:description"
          content="Liên hệ với Siêu Thị Bảng Hiệu để được tư vấn và báo giá chi tiết về dịch vụ thiết kế, thi công bảng hiệu quảng cáo."
        />
        <meta property="og:image" content="/images/sieuthibanghieu.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="canonical" href="https://sieuthibanghieu.vn/pages/lien-he" />
      </Head>

      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header />
        <Menu />
        <Breadcrumb />

        <main className="flex-grow py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="mb-6 flex justify-center"></div>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Liên Hệ Với Chúng Tôi
              </h1>
              <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
                Hãy để chúng tôi giúp bạn tạo nên những tác phẩm quảng cáo ấn
                tượng
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:p-8">
              {/* Contact Info and Map Section */}
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Contact Info */}
                <div className="w-full lg:w-2/5">
                  <h2 className="mb-6 text-xl font-bold uppercase text-gray-900 sm:text-2xl">
                    Thông Tin Liên Hệ
                  </h2>
                  <div className="space-y-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaPhoneAlt className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Điện thoại
                        </p>
                        <p className="text-base text-blue-600 sm:text-lg">
                          (123) 456-7890
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaEnvelope className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Email
                        </p>
                        <p className="text-base text-blue-600 sm:text-lg">
                          contact@example.com
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaClock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Giờ làm việc
                        </p>
                        <p className="text-base text-blue-600 sm:text-lg">
                          8:00 - 17:00 (Thứ 2 - Thứ 7)
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaMapMarkerAlt className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Địa chỉ
                        </p>
                        <p className="text-base text-blue-600 sm:text-lg">
                          129 Đường ABC, Quận XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="w-full lg:w-3/5">
                  <h2 className="mb-6 text-xl font-bold uppercase text-gray-900 sm:text-2xl">
                    Vị Trí Cửa Hàng
                  </h2>
                  <div className="relative h-[300px] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg sm:h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.786135175627!2d106.63277367589112!3d10.781176959104327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f112bd74627%3A0xb85cda85682f9202!2zU2nDqnUgVGjhu4sgQuG6o25nIEhp4buHdQ!5e0!3m2!1sen!2sus!4v1738910558517!5m2!1sen!2sus"
                      className="absolute inset-0 h-full w-full border-0"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-12 sm:mt-16">
                <h2 className="mb-8 text-center text-xl font-bold uppercase text-gray-900 sm:text-2xl">
                  Gửi Yêu Cầu Cho Chúng Tôi
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </main>

        <JsonLdWrapper data={schemaData} />
        <SocialButtons />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
