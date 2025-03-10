"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1741600756/Brown-and-White-Modern-Digital-Marketing-Agency-Twitter-Post_kbgwmk.webp",
    alt: "Siêu Thị Bảng Hiệu - Thiết kế và thi công bảng hiệu chuyên nghiệp tại TPHCM",
    title: "Bảng hiệu chuyên nghiệp",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1741600756/Brown-and-White-Modern-Digital-Marketing-Agency-Twitter-Post_kbgwmk.webp",
    alt: "Dịch vụ làm bảng hiệu LED, chữ nổi, hộp đèn quảng cáo chất lượng cao",
    title: "Bảng hiệu LED và chữ nổi",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1741600756/Brown-and-White-Modern-Digital-Marketing-Agency-Twitter-Post_kbgwmk.webp",
    alt: "Thi công bảng hiệu quảng cáo uy tín, giá tốt nhất thị trường",
    title: "Thi công bảng hiệu",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1,
    );
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <section
      aria-label="Banner chính"
      className="relative z-0 mx-auto my-4 h-[55vw] w-full max-w-7xl overflow-hidden xl:h-[80vh]"
    >
      {/* Nút điều hướng */}
      <div className="absolute inset-0 z-10 flex items-center justify-between">
        <button
          className="group relative h-14 w-14 cursor-pointer overflow-hidden border-0 bg-transparent outline-none"
          onClick={prevSlide}
          aria-label="Slide trước"
        >
          <span className="absolute inset-2.5 rounded-full border-4 border-gray-200 transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:opacity-0"></span>
          <span className="absolute inset-2.5 scale-125 rounded-full border-4 border-blue-300 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100"></span>
          <div className="duration-400 absolute left-0 top-0 flex transition-transform ease-in-out group-hover:-translate-x-14">
            <span className="mx-4 mt-4 block h-6 w-6 rotate-180 fill-gray-200">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>

        <button
          className="group relative h-14 w-14 cursor-pointer overflow-hidden border-0 bg-transparent outline-none"
          onClick={nextSlide}
          aria-label="Slide tiếp theo"
        >
          <span className="absolute inset-2.5 rounded-full border-4 border-gray-200 transition-all duration-500 ease-in-out group-hover:scale-75 group-hover:opacity-0"></span>
          <span className="absolute inset-2.5 scale-125 rounded-full border-4 border-blue-300 opacity-0 transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100"></span>
          <div className="duration-400 absolute left-0 top-0 flex transition-transform ease-in-out group-hover:-translate-x-14">
            <span className="mx-4 mt-4 block h-6 w-6 fill-gray-200">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
            </span>
          </div>
        </button>
      </div>

      {/* Hình ảnh banner */}
      <div className="relative h-full w-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
