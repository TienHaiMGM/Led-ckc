"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Breadcrumb from "@/components/common/Breadcrumb";
import JsonLdScript from "@/components/common/JsonLdScript";
import SocialButtons from "@/components/common/SocialButtons";
import TabarLeft from "@/components/common/TabarLeft";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng Hiệu Inox - Giải Pháp Quảng Cáo Sang Trọng",
  description:
    "Tìm hiểu về bảng hiệu inox - giải pháp quảng cáo sang trọng, bền đẹp và đẳng cấp cho doanh nghiệp của bạn.",
  image: "/images/banghieu.jpg",
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Siêu Thị Bảng Hiệu",
    url: "https://sieuthibanghieu.vn",
    logo: "/images/sieuthibanghieulogo.png",
  },
  publisher: {
    "@type": "Organization",
    name: "Siêu Thị Bảng Hiệu",
    url: "https://sieuthibanghieu.vn",
    logo: {
      "@type": "ImageObject",
      url: "/images/sieuthibanghieulogo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-inox",
  },
  about: {
    "@type": "Product",
    name: "Bảng Hiệu Inox",
    description:
      "Bảng hiệu được làm từ chất liệu inox cao cấp, sang trọng và bền bỉ theo thời gian",
    brand: {
      "@type": "Brand",
      name: "Siêu Thị Bảng Hiệu",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
  },
};

const BangHieuInox = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-4 py-8">
        <JsonLdScript type="Article" data={jsonLd} />
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* {TabarLeft} */}
          <TabarLeft />
          {/* Main Content */}
          <article className="prose max-w-none lg:w-3/4">
            <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-50 to-white p-6">
              <h1 className="mb-4 text-3xl font-bold text-blue-800 lg:text-4xl">
                Bảng Hiệu Inox - Giải Pháp Quảng Cáo Sang Trọng
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu inox
                cao cấp, thiết kế sang trọng và độ bền vượt trội cho doanh
                nghiệp của bạn.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Năm Kinh Nghiệm</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">2000+</div>
                  <div className="text-gray-600">Khách Hàng</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Hài Lòng</div>
                </div>
              </div>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              <div>
                <Image
                  src="/images/banghieu.jpg"
                  alt="Bảng hiệu Inox chuyên nghiệp"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Bảng Hiệu Inox Là Gì?
                </h2>
                <p className="text-gray-600">
                  Bảng hiệu Inox là loại bảng hiệu được làm từ chất liệu thép
                  không gỉ (stainless steel) cao cấp, mang đến vẻ đẹp sang
                  trọng, hiện đại và độ bền vượt trội theo thời gian.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Độ bền cao, chống gỉ sét hoàn toàn
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sang trọng, đẳng cấp
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dễ dàng vệ sinh, bảo dưỡng
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12 rounded-lg bg-gray-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Ứng Dụng Của Bảng Hiệu Inox
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Nhà Hàng & Khách Sạn
                  </h3>
                  <p className="text-gray-600">
                    Tạo ấn tượng sang trọng với bảng hiệu inox cho nhà hàng,
                    khách sạn cao cấp.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Văn Phòng</h3>
                  <p className="text-gray-600">
                    Nâng tầm thương hiệu với bảng hiệu inox đẳng cấp cho văn
                    phòng công ty.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Showroom</h3>
                  <p className="text-gray-600">
                    Thu hút khách hàng với bảng hiệu inox sang trọng cho
                    showroom.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Quy Trình Thi Công Chuyên Nghiệp
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Khảo Sát & Tư Vấn
                    </h3>
                    <p className="text-gray-600">
                      Đội ngũ chuyên viên sẽ khảo sát địa điểm, tư vấn kích
                      thước và phương án thiết kế phù hợp nhất.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Thiết Kế Mẫu</h3>
                    <p className="text-gray-600">
                      Tạo bản thiết kế 3D chi tiết để khách hàng có cái nhìn
                      tổng quan trước khi thi công.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Thi Công & Lắp Đặt
                    </h3>
                    <p className="text-gray-600">
                      Triển khai thi công chuyên nghiệp với đội ngũ thợ lành
                      nghề và trang thiết bị hiện đại.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Báo Giá Bảng Hiệu Inox
              </h2>
              <p className="mb-6 text-gray-600">
                Giá thành bảng hiệu Inox phụ thuộc vào nhiều yếu tố khác nhau.
                Liên hệ ngay với chúng tôi để được:
              </p>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Tư Vấn Miễn Phí</h3>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Báo Giá Chi Tiết</h3>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Giá Cạnh Tranh</h3>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <SocialButtons />
      <Footer />
    </div>
  );
};

export default BangHieuInox;
