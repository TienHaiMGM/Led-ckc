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
  FaTimes,
} from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import { extractImagesFromHtml } from "@/utils/imageExtractor";
import { Product } from "../../types/product";
import RelatedProducts from "./RelatedProducts";
import TableOfContent from "@/components/editor/Toc";
import { AnimatePresence, motion } from "framer-motion";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail_WithData = ({ product }: ProductDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [fullScreenIndex, setFullScreenIndex] = useState(0);

  const [gallery, setGallery] = useState<string[]>([]);

  useEffect(() => {
    // Initialize gallery with main image and content images
    const contentImages = extractImagesFromHtml(product.content);
    const allImages = [
      product.images, // Handle both image fields
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

  const openFullImage = (index: number) => {
    setSelectedImage(gallery[index]);
    setFullScreenIndex(index);

    setShowFullImage(true);
  };
  useEffect(() => {
    if (showFullImage) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") closeFullImage();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [showFullImage]);
  // Đóng full-screen
  const closeFullImage = () => {
    setShowFullImage(false);
  };
  // Chuyển ảnh tiếp theo
  const nextFullScreenImage = () => {
    const nextIndex = (fullScreenIndex + 1) % gallery.length;
    setFullScreenIndex(nextIndex);
    setSelectedImage(gallery[nextIndex]);
  };

  // Chuyển ảnh trước
  const prevFullScreenImage = () => {
    const prevIndex = (fullScreenIndex - 1 + gallery.length) % gallery.length;
    setFullScreenIndex(prevIndex);
    setSelectedImage(gallery[prevIndex]);
  };
  // Đóng full-screen khi nhấn ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFullImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  return (
    <main
      className="min-h-screen bg-gray-50"
      role="main"
      aria-label={`Chi tiết sản phẩm ${product.title}`}
    >
      {gallery[0] && (
        <Head>
          <link rel="" href={gallery[0]} as="image" />
        </Head>
      )}
      {/* Hero Section */}
      <section className="py-2">
        <div className="container mx-auto px-1 xl:px-36">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Image Gallery */}
            <div className="relative space-y-4">
              {/* Main Image */}
              <div className="relative h-[50vw] max-w-[100vw] overflow-hidden rounded-lg shadow-2xl md:h-[40vw] lg:h-96 xl:h-96">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[50vw] max-w-[100vw] overflow-hidden rounded-lg shadow-2xl md:h-[40vw] lg:h-96 xl:h-96"
                >
                  <Image
                    src={
                      gallery[currentImageIndex] ||
                      "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798280/Led_ckc_bkwijt.jpg"
                    }
                    alt={`${product.title} - Hình ảnh ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                    className="h-[20vh] w-full object-fill"
                    priority
                    loading="eager"
                    onClick={() => openFullImage(currentImageIndex)}
                  />
                </motion.div>
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
              <div className="flex justify-around space-x-2">
                {gallery.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-[18vw] w-[27vw] rounded-lg transition-all lg:h-[14vh] ${
                      currentImageIndex === index
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "opacity-70 hover:scale-105 hover:opacity-100"
                    }`}
                    aria-label={`Xem hình ảnh ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - Hình thu nhỏ ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="flex flex-col justify-center space-y-6">
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
                <div className="mt-2 flex items-center space-x-2">
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
          <div className="container mx-auto px-3 xl:px-36">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Giới thiệu</h2>
              {product.description && (
                <p className="mt-2 text-base text-[#444444]">
                  {product.description}
                </p>
              )}
            </div>
            {/* Tabe of content */}
            <TableOfContent content={product.content} />
            <div className="prose prose-custome scroll-mt-96 text-base">
              <div dangerouslySetInnerHTML={{ __html: product.content }} />
            </div>
          </div>
        </section>
      )}

      {/* Related Products Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-3 text-center xl:px-36">
          <h2 className="mb-8 text-2xl font-bold">Sản phẩm liên quan</h2>
          <RelatedProducts productId={product.id} category={product.category} />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-red-600 to-red-800 py-16 text-white"
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
              href="/lien-he"
              className="rounded-full bg-white px-8 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Chuyển đến trang liên hệ"
            >
              Liên Hệ Ngay
            </Link>
            <a
              href="tel:+0827034567"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Gọi điện thoại cho chúng tôi"
            >
              Gọi Điện Thoại
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeFullImage} // Click ra ngoài để đóng
          >
            {/* Wrapper để ngăn click trên ảnh cũng đóng modal */}
            <motion.div
              onClick={(e) => e.stopPropagation()} // Ngăn việc click vào ảnh cũng đóng modal
            >
              {/* Hình ảnh full */}
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Ảnh sản phẩm full-screen"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />

              {/* Nút đóng */}
              <button
                onClick={closeFullImage}
                className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                aria-label="Đóng ảnh"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              {/* Nút Previous */}
              <button
                onClick={prevFullScreenImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black"
                aria-label="Ảnh trước"
              >
                <FaChevronLeft className="h-6 w-6" />
              </button>

              {/* Nút Next */}
              <button
                onClick={nextFullScreenImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black"
                aria-label="Ảnh tiếp theo"
              >
                <FaChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetail_WithData;
