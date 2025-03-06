import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-gray-900 py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="mb-4 w-full text-gray-300 md:mb-0 md:w-1/4">
            <div>
              <img
                src="https://res.cloudinary.com/dsyidnrat/image/upload/v1741234963/sieuthibanghieulogo_hki2df.png"
                alt="logo sieuthibanghieu"
                className="w-48"
              />
            </div>
            <h3 className="mt-3 text-gray-200">
              CÔNG TY TNNH SIÊU THỊ BẢNG HIỆU
            </h3>
            <p>
              <strong>Địa chỉ: </strong> 129 Thoại Ngọc Hầu, Phú Thạnh, Tân Phú,
              Hồ Chí Minh
            </p>
            <p>
              <strong>Số điện thoại: </strong> 0962630679
            </p>
            <p>
              <strong>Gmail: </strong> sieuthibanghieu@gmail.com
            </p>
            <p>
              <strong>Thời gian hoạt động: </strong> 8h - 20h
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">MENU HỖ TRỢ</h3>
            <ul>
              <li>
                <Link href="/gioi-thieu">
                  <span className="cursor-pointer text-gray-300 hover:text-white">
                    Giới thiệu
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/san-pham">
                  <span className="cursor-pointer text-gray-300 hover:text-white">
                    Sản phẩm
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/san-pham">
                  <span className="cursor-pointer text-gray-300 hover:text-white">
                    Làm bảng hiệu
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc-moi">
                  <span className="cursor-pointer text-gray-300 hover:text-white">
                    Tin tức
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/lien-he">
                  <span className="cursor-pointer text-gray-300 hover:text-white">
                    Liên hệ
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dsyidnrat/image/upload/v1740824063/qr-zalo-me-zalo-me-0987902715_k1vs0h.png"
              alt="qr code cho zalo"
              className="w-48"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Theo Dõi Chúng Tôi</h3>
            <div className="flex space-x-4">
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-300 hover:text-white">
                  <i className="fab fa-tiktok"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-300 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </span>
              </Link>
              <Link href="#">
                <span className="cursor-pointer text-2xl text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/4">
            <h3 className="text-lg font-semibold">Vị Trí Cửa Hàng</h3>
            <div className="mb-4 h-64 overflow-hidden rounded-lg bg-gray-200">
              {" "}
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDhg4nn5MmpjlyOjJCs6cdreduS3ne1ENI&q=Siêu+Thị+Bảng+Hiệu,129+Thoại+Ngọc+Hầu,Tân+Phú,Hồ+Chí+Minh"
                style={{ border: 0 }}
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          &copy; 2025 Siêu Thị Bảng Hiệu. Designed by AceMegamind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
