"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/images/Banner1.jpg",
    alt: "Siêu Thị Bảng Hiệu - Thiết kế và thi công bảng hiệu chuyên nghiệp tại TPHCM",
    title: "Bảng hiệu chuyên nghiệp",
  },
  {
    id: 2,
    image: "/images/Banner2.jpg",
    alt: "Dịch vụ làm bảng hiệu LED, chữ nổi, hộp đèn quảng cáo chất lượng cao",
    title: "Bảng hiệu LED và chữ nổi",
  },
  {
    id: 3,
    image: "/images/Banner3.jpg",
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
      className="relative z-0 mx-auto my-4 h-[60vh] w-full max-w-7xl overflow-hidden"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-between">
        <button
          aria-label="Slide trước"
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
          onClick={prevSlide}
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            &lt;
          </span>
        </button>
        <button
          aria-label="Slide tiếp theo"
          onClick={nextSlide}
          className="group relative mb-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
        >
          <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
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
              title={banner.title}
              fill
              priority={index === 0}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-xl font-bold md:text-2xl">{banner.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
