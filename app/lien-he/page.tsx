import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactForm from "@/components/common/ContactForm";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Thông Tin Liên Hệ | Siêu Thị Bảng Hiệu - Hỗ Trợ Nhanh Chóng",
  description:
    "Liên hệ Siêu Thị Bảng Hiệu ngay để được tư vấn về bảng hiệu quảng cáo. Gồm địa chỉ, số điện thoại, bản đồ và form liên hệ tiện lợi, hỗ trợ nhanh chóng.",
  keywords: [
    "thông tin liên hệ bảng hiệu",
    "liên hệ siêu thị bảng hiệu",
    "hỗ trợ bảng hiệu quảng cáo",
    "tư vấn bảng hiệu",
  ],
  openGraph: {
    title: "Thông Tin Liên Hệ | Siêu Thị Bảng Hiệu - Hỗ Trợ Nhanh Chóng",
    description:
      "Liên hệ Siêu Thị Bảng Hiệu ngay để được tư vấn về bảng hiệu quảng cáo. Gồm địa chỉ, số điện thoại, bản đồ và form liên hệ tiện lợi, hỗ trợ nhanh chóng.",
    url: "https://sieuthibanghieu.com/lien-he",
    siteName: "Siêu Thị Bảng Hiệu",
    images: [
      {
        url: "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
        width: 1200,
        height: 630,
        alt: "Thông tin liên hệ - Siêu Thị Bảng Hiệu",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thông Tin Liên Hệ | Siêu Thị Bảng Hiệu - Hỗ Trợ Nhanh Chóng",
    description:
      "Liên hệ Siêu Thị Bảng Hiệu ngay để được tư vấn về bảng hiệu quảng cáo. Gồm địa chỉ, số điện thoại, bản đồ và form liên hệ tiện lợi, hỗ trợ nhanh chóng.",
    images: [
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/mica_ckc_1_fkgbgo.jpg",
    ],
  },
  alternates: {
    canonical: "https://sieuthibanghieu.com/lien-he",
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

const Contact = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Breadcrumb />
        <main className="flex-grow py-1">
          <div className="container mx-auto px-1 sm:px-2 lg:px-8">
            {/* Hero Section */}
            <div className="mb-2 p-3 text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Liên Hệ Với Chúng Tôi
              </h1>
              <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
                Hãy để chúng tôi giúp bạn tạo nên những tác phẩm quảng cáo ấn
                tượng
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-lg sm:p-6 md:p-8">
              {/* Contact Info and Map Section */}
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Contact Info */}
                <div className="w-full lg:w-2/5">
                  <h2 className="mb-6 text-xl font-bold uppercase text-gray-900 sm:text-2xl">
                    Thông Tin Liên Hệ
                  </h2>
                  <div className="space-y-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaPhoneAlt className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Điện thoại
                        </p>
                        <p className="text-base font-bold text-blue-500 sm:text-lg">
                          082 702 4567
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaEnvelope className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Email
                        </p>
                        <p className="text-base font-bold text-blue-500 sm:text-lg">
                          sieuthibanghieu@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaClock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Giờ làm việc
                        </p>
                        <p className="text-base font-bold text-blue-500 sm:text-lg">
                          8:00 - 22:00 (Thứ 2 - Thứ 8)
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FaMapMarkerAlt className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 sm:text-base">
                          Địa chỉ
                        </p>
                        <p className="text-base font-bold text-blue-500 sm:text-lg">
                          129 Thoại Ngọc Hầu, Phú Thạnh, Tân Phú, Hồ Chí Minh
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
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDhg4nn5MmpjlyOjJCs6cdreduS3ne1ENI&q=Siêu+Thị+Bảng+Hiệu,129+Thoại+Ngọc+Hầu,Tân+Phú,Hồ+Chí+Minh"
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
      </div>
    </>
  );
};

export default Contact;
