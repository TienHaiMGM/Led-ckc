"use client";
import React from "react";
import Footer from "../../../components/common/Footer";
import Menu from "../../../components/common/Menu";
import Header from "../../../components/common/Header";
import SocialButtons from "../../../components/common/SocialButtons";
import Breadcrumb from "../../../components/common/Breadcrumb";
import ContactForm from "../../../components/common/ContactForm";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="flex flex-grow items-center justify-center py-8">
        <div className="container mx-auto px-4">
          <div className="flex w-full flex-col rounded-lg bg-white p-6 shadow-lg">
            {/* Contact Info and Map Section */}
            <div className="flex w-full flex-col lg:flex-row lg:space-x-8 lg:p-6">
              {/* Contact Info */}
              <div className="w-full lg:w-2/5">
                <h2 className="mb-6 text-2xl font-bold uppercase">
                  Thông tin liên hệ
                </h2>
                <div className="rounded-lg bg-red-100 p-6 shadow-md">
                  <div className="mb-4">
                    <p className="text-lg">
                      <strong>Email:</strong> contact@example.com
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      <strong>Điện thoại:</strong> (123) 456-7890
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      <strong>Giờ làm việc:</strong> 8:00 - 17:00 (Thứ 2 - Thứ
                      7)
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      <strong>Địa chỉ:</strong> 129 Đường ABC, Quận XYZ
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 w-full lg:mt-0 lg:w-3/5">
                <h2 className="mb-6 text-2xl font-bold uppercase">
                  Vị Trí Cửa Hàng
                </h2>
                <div className="h-[400px] overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.786135175627!2d106.63277367589112!3d10.781176959104327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f112bd74627%3A0xb85cda85682f9202!2zU2nDqnUgVGjhu4sgQuG6o25nIEhp4buHdQ!5e0!3m2!1sen!2sus!4v1738910558517!5m2!1sen!2sus"
                    className="h-full w-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 w-full">
              <h2 className="mb-6 text-center text-2xl font-bold uppercase">
                Gửi yêu cầu cho chúng tôi
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <SocialButtons />
      <Footer />
    </div>
  );
};

export default Contact;
