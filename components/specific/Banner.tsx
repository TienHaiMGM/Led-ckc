"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1739938056/Banner3_agbop9.jpg",
    alt: "Siêu Thị Bảng Hiệu - Thiết kế và thi công bảng hiệu chuyên nghiệp tại TPHCM",
    title: "Bảng hiệu chuyên nghiệp",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1739938056/Banner1_wzjbgx.jpg",
    alt: "Dịch vụ làm bảng hiệu LED, chữ nổi, hộp đèn quảng cáo chất lượng cao",
    title: "Bảng hiệu LED và chữ nổi",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsyidnrat/image/upload/v1739938056/Banner2_addvaw.jpg",
    alt: "Thi công bảng hiệu quảng cáo uy tín, giá tốt nhất thị trường",
    title: "Thi công bảng hiệu",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-label="Banner chính"
      className="relative z-0 mx-auto my-4 h-[50vw] w-full max-w-7xl overflow-hidden xl:h-[60vh]"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-between">
        <button
          aria-label="Slide trước"
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
          onClick={prevSlide}
        >
          <span className="relative rounded-md bg-white px-2.5 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 md:px-3.5 md:py-2 lg:px-5 lg:py-2.5 xl:px-5 xl:py-2.5">
            &lt;
          </span>
        </button>
        <button
          aria-label="Slide tiếp theo"
          onClick={nextSlide}
          className="group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
        >
          <span className="relative rounded-md bg-white px-2.5 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900 md:px-3.5 md:py-2 lg:px-5 lg:py-2.5 xl:px-5 xl:py-2.5">
            &gt;
          </span>
        </button>
      </div>
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
              priority={index === 0}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
