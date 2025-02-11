import React from "react";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import Header from "components/common/Header";
import SocialButtons from "@/components/common/SocialButtons";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <Menu />
      <main className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-6xl flex-col rounded-lg bg-white p-6 shadow-lg">
          {/* Map and Contact Info Container - Keeping original layout for sx/sm, new layout for lg/xl */}
          <div className="flex w-full flex-col lg:flex-row lg:space-x-8 lg:p-6">
            {/* Contact Info Section - Moved to first position */}
            <div className="w-2/1 lg:w-2/5">
              <h2 className="mb-2 text-2xl font-bold uppercase lg:text-3xl">
                Thông tin liên hệ
              </h2>
              <div className="rounded-lg bg-red-100 p-4 shadow-md lg:p-6">
                <div className="mb-4 flex items-center lg:mb-6">
                  <svg
                    className="mr-2 h-6 w-6 text-red-400 lg:h-7 lg:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                  </svg>
                  <p className="mb-2 lg:text-lg">
                    <strong>Email:</strong> contact@example.com
                  </p>
                </div>
                <div className="mb-4 flex items-center lg:mb-6">
                  <svg
                    className="mr-2 h-6 w-6 text-red-400 lg:h-7 lg:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                  </svg>
                  <p className="mb-2 lg:text-lg">
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                </div>
                <div className="mb-4 flex items-center lg:mb-6">
                  <svg
                    className="mr-2 h-6 w-6 text-red-400 lg:h-7 lg:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                  </svg>
                  <p className="mb-2 lg:text-lg">
                    <strong>Giờ làm việc:</strong> 8:00 - 17:00 (Thứ 2 - Thứ 7)
                  </p>
                </div>
                <div className="mb-4 flex items-center lg:mb-6">
                  <svg
                    className="mr-2 h-6 w-6 text-red-400 lg:h-7 lg:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                  </svg>
                  <p className="mb-2 lg:text-lg">
                    <strong>Địa chỉ:</strong> 129
                  </p>
                </div>
                <div className="mb-4 flex items-center lg:mb-6">
                  <svg
                    className="mr-2 h-6 w-6 text-red-400 lg:h-7 lg:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-13h2v6h-2V5zm0 8h2v2h-2v-2z" />
                  </svg>
                  <p className="mb-2 lg:text-lg">
                    <strong>Facebook:</strong>{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Facebook Page
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section - Moved to second position */}
            <div className="w-2/1 lg:w-3/5">
              <h1 className="mb-2 mt-4 text-2xl font-bold uppercase lg:mt-0 lg:text-3xl xl:mt-0">
                Vị Trí Cửa Hàng
              </h1>
              <div className="mb-4 h-72 overflow-hidden rounded-lg bg-gray-200 lg:h-[40vh]">
                <iframe
                  className="h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.786135175627!2d106.63277367589112!3d10.781176959104327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f112bd74627%3A0xb85cda85682f9202!2zU2nDqnUgVGjhu4sgQuG6o25nIEhp4buHdQ!5e0!3m2!1sen!2sus!4v1738910558517!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full p-4 lg:mt-8">
            <h2 className="mt-4 text-center text-xl font-bold uppercase lg:text-2xl">
              Gửi yêu cầu cho chúng tôi
            </h2>
            <form className="mb-4 lg:mx-auto lg:max-w-4xl lg:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="mb-4">
                  <label className="mb-2 block" htmlFor="name"></label>
                  <input
                    className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Họ và Tên"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-2 block" htmlFor="phone"></label>
                  <input
                    className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2 block" htmlFor="email"></label>
                <input
                  className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block" htmlFor="message"></label>
                <textarea
                  className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Nội dung yêu cầu "
                  required
                ></textarea>
              </div>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600 lg:px-8 lg:py-3 lg:text-lg"
                type="submit"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      </main>
      <SocialButtons />
      <Footer />
    </div>
  );
};

export default Contact;
