"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  images: string;
  title: string;
  description?: string;
  slug?: string;
  href?: string;
}

const ProductCard = ({
  images,
  title,
  description,
  slug = "#",
  href = "tin-tuc",
}: ProductCardProps): React.ReactElement => {
  const linkHref = slug ? `${href}${slug}` : "#";

  return (
    <div className="group relative transition-all duration-500 ease-in-out hover:scale-105">
      <Link href={linkHref} className="block">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <Image
            src={images}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={85}
          />
        </div>
        {/* Hiệu ứng Holographic */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-10 transition-all duration-700 ease-in-out group-hover:animate-shimmer group-hover:opacity-50"></div>

        <div className="p-4 sm:p-6">
          <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-xl">
            {title}
          </h2>
          <p className="line-clamp-3 text-sm text-gray-600 sm:text-base">
            {description}
          </p>
          <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 sm:text-base">
            Đọc thêm →
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
