"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaClock,
  FaShieldAlt,
  FaTools,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import { extractImagesFromHtml } from "@/utils/imageExtractor";
import { Product } from "../api/ProductService";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail_WithData = ({ product }: ProductDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [gallery, setGallery] = useState<string[]>([]);

  useEffect(() => {
    // Initialize gallery with main image and content images
    const contentImages = extractImagesFromHtml(product.content);
    const allImages = [
      product.image || product.images, // Handle both image fields
      ...(product.additionalImages || []),
      ...contentImages,
    ].filter(Boolean); // Remove any undefined/null values

    // Remove duplicates and ensure we have at least 3 images
    const uniqueImages = Array.from(new Set(allImages));
    const finalGallery =
      uniqueImages.length >= 3
        ? uniqueImages
        : [
            ...uniqueImages,
            ...Array(3 - uniqueImages.length).fill(uniqueImages[0]),
          ];

    setGallery(finalGallery);
  }, [product]);

  const openFullImage = (image: string) => {
    setSelectedImage(image);
    setShowFullImage(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1,
    );
  };

  const benefits = [
    {
      title: "Thiết Kế Chuyên Nghiệp",
      description:
        "Đội ngũ thiết kế giàu kinh nghiệm, sáng tạo mẫu theo yêu cầu",
      icon: "FaTools",
    },
    {
      title: "Thi Công Nhanh Chóng",
      description: "Hoàn thành thi công và lắp đặt trong 3-5 ngày",
      icon: "FaClock",
    },
    {
      title: "Bảo Hành Tận Tâm",
      description: "Chế độ bảo hành dài hạn, hỗ trợ kỹ thuật 24/7",
      icon: "FaShieldAlt",
    },
  ];

  return (
    <main
      className="min-h-screen bg-gray-50"
      role="main"
      aria-label={`Chi tiết sản phẩm ${product.title}`}
    >
      <Head>
        <link rel="preload" href={gallery[0]} as="image" />
      </Head>
      {/* Hero Section */}
      <section className="py-2">
        <div className="container mx-auto px-1 lg:px-28">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Image Gallery */}
            <div className="relative space-y-4">
              {/* Main Image */}
              <div className="lg:h-6/6 relative h-[50vw] max-w-[100vw] overflow-hidden rounded-lg shadow-2xl md:h-[40vw] xl:h-96">
                <Image
                  src={gallery[currentImageIndex]}
                  alt={`${product.title} - Hình ảnh ${currentImageIndex + 1}`}
                  fill
                  className="h-[20vh] w-full object-cover"
                  priority
                  loading="eager"
                  onClick={() => openFullImage(gallery[currentImageIndex])}
                />
                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
                  aria-label="Xem hình ảnh trước"
                >
                  <FaChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white"
                  aria-label="Xem hình ảnh tiếp theo"
                >
                  <FaChevronRight className="h-6 w-6 text-gray-800" />
                </button>
                <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-lg text-white">
                  {currentImageIndex + 1}/{gallery.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex justify-between space-x-2">
                {gallery.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-[18vw] w-[27vw] rounded-lg transition-all lg:h-[14vh] ${
                      currentImageIndex === index
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Xem hình ảnh ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - Hình thu nhỏ ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Title with decorative border */}
              <div className="relative pl-2">
                <h1 className="text-2xl font-bold leading-tight text-red-500 lg:text-3xl">
                  {product.title}
                </h1>
              </div>

              {/* Features with icons */}
              <div className="rounded-lg bg-white p-2 shadow-lg">
                <h2 className="mb-2 mr-3 flex px-3 text-2xl font-semibold text-gray-900">
                  <span className="mr-2 inline-block h-8 w-2 bg-blue-500"></span>
                  <p className="">Tại Sao Chọn Chúng Tôi?</p>
                </h2>
                <div className="grid gap-1">
                  <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <FaTools className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700">
                      Thiết kế chuyên nghiệp và sáng tạo
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <FaClock className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-gray-700">
                      Thi công nhanh chóng và hiệu quả
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <FaShieldAlt className="h-6 w-6 text-yellow-600" />
                    </div>
                    <p className="text-gray-700">
                      Bảo hành dài hạn và dịch vụ hậu mãi tận tâm
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact section with gradient background */}
              <div className="overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">
                      Liên hệ với chúng tôi
                    </h3>
                    <p className="text-blue-100">Tư vẫn miễn phí 24/7</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <FaAward className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <a
                    href="tel:+84123456789"
                    className="flex items-center space-x-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-50"
                  >
                    <span>+84 123 456 789</span>
                  </a>
                  <Link
                    href="/pages/lien-he"
                    className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
                  >
                    Gửi Yêu Cầu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Content Section */}
      {product.content && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-28">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Thông tin chi tiết</h2>
              {product.description && (
                <p className="mt-2 text-gray-600">{product.description}</p>
              )}
            </div>
            <div className="prose mx-auto">
              <div dangerouslySetInnerHTML={{ __html: product.content }} />
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16" aria-label="Lợi ích khi chọn dịch vụ">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Lợi Ích Khi Chọn Chúng Tôi
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl text-blue-600" aria-hidden="true">
                  {benefit.icon === "FaTools" && <FaTools />}
                  {benefit.icon === "FaClock" && <FaClock />}
                  {benefit.icon === "FaShieldAlt" && <FaShieldAlt />}
                  {benefit.icon === "FaAward" && <FaAward />}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
        aria-label="Liên hệ"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">
            Bạn Quan Tâm Đến Sản Phẩm?
          </h2>
          <p className="mb-8 text-lg">
            Liên hệ ngay với chúng tôi để được tư vấn chi tiết và báo giá tốt
            nhất
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pages/lien-he"
              className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Chuyển đến trang liên hệ"
            >
              Liên Hệ Ngay
            </Link>
            <a
              href="tel:+84123456789"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Gọi điện thoại cho chúng tôi"
            >
              Gọi Điện Thoại
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail_WithData;
