import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-4 w-full md:mb-0 md:w-1/4">
            <h2 className="text-xl font-bold">Sieu Thi Bang Hieu</h2>
            <p className="text-gray-400">
              Siêu Thị Bảng Hiệu – Tạo dấu ấn, vươn tầm thương hiệu! 🚀
            </p>
          </div>
          <div className="mb-4 w-full md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold">Menu Hỗ Trợ</h3>
            <ul>
              <li>
                <Link href="/">
                  <span className="cursor-pointer text-gray-400 hover:text-white">
                    Giới thiệu
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="cursor-pointer text-gray-400 hover:text-white">
                    Chính sách
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="cursor-pointer text-gray-400 hover:text-white">
                    Liên hệ
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="cursor-pointer text-gray-400 hover:text-white">
                    Câu hỏi thường gặp
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 w-full md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold">Theo Dõi Chúng Tôi</h3>
            <div className="flex space-x-4">
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-400 hover:text-white">
                  <i className="fab fa-tiktok"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold">Vị Trí Cửa Hàng</h3>
            <div className="mb-4 h-64 overflow-hidden rounded-lg bg-gray-200">
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
        <div className="mt-8 text-center text-gray-400">
          &copy; 2025 Siêu Thị Bảng Hiệu. Designed by AceMegamind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
