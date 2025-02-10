import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    image: "/images/banghieu.jpg",
    title: "BẢNG HIỆU",
    description: "Thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
    alt: "Bảng hiệu quảng cáo đẹp, chất lượng cao",
    slug: "signboard",
  },
  {
    image: "/images/hopden.jpg",
    title: "HỘP ĐÈN",
    description: "Thiết kế hộp đèn quảng cáo sáng tạo, bắt mắt",
    alt: "Hộp đèn quảng cáo hiện đại, tiết kiệm điện",
    slug: "light-box",
  },
  {
    image: "/images/chunoi.jpg",
    title: "CHỮ NỔI",
    description: "Gia công chữ nổi đẹp, độc đáo theo yêu cầu",
    alt: "Chữ nổi inox, mica chất lượng cao",
    slug: "raised-letters",
  },
  {
    image: "/images/bienquangcao.jpg",
    title: "LED",
    description: "Thiết kế và thi công biển LED hiện đại",
    alt: "Biển LED quảng cáo chuyên nghiệp",
    slug: "led",
  },
];

const ExploreCategories: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="mb-4 text-center text-3xl font-bold">
        SẢN PHẨM TIÊU BIỂU
      </h2>
      <p className="mb-8 text-center text-lg text-gray-600">
        Khám phá các sản phẩm và dịch vụ chất lượng cao của chúng tôi
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Link
            href={`/collections/${category.slug}`}
            key={index}
            className="group overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-lg"
          >
            <article className="overflow-hidden rounded-lg bg-white">
              <div className="relative h-64 w-full">
                <Image
                  src={category.image}
                  alt={category.alt}
                  title={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="transform object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
