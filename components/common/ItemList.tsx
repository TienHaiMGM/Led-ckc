"use client";
import React from "react";
import ItemCard from "./ItemCard";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useProductEditor } from "../api/hooks/useProductEditor";
import { EditorProps } from "../../types/product-management";

const ItemList: React.FC<EditorProps> = ({ EditorContent }) => {
  const { products, loading, error, generateSlug } =
    useProductEditor(EditorContent);

  return (
    <section className="bg-gray-100 py-2">
      <div className="container mx-auto px-1">
        {/* Section Title */}
        <div className="mb-5 rounded-lg bg-white xl:mx-36">
          <div
            className={`group relative w-[35vw] overflow-hidden rounded-lg bg-red-700 bg-gradient-to-r shadow-lg transition-shadow duration-300 hover:w-[95vw] hover:shadow-xl md:w-[25vw] md:hover:w-[35vw] lg:w-[25vw] lg:hover:w-[35vw] xl:w-[15vw] xl:hover:w-[35vw]`}
          >
            <div className="relative py-2">
              <h2 className="transform pl-7 text-left text-xl font-bold text-white transition-transform duration-300 group-hover:scale-105 md:text-2xl">
                {EditorContent.title}
              </h2>

              {/* Decorative Circles */}
              <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 -rotate-45 transform rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:rotate-45" />
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-32 w-32 rotate-45 transform rounded-full bg-white opacity-10 transition-transform duration-500 group-hover:-rotate-45" />
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute inset-0 -skew-x-12 transform bg-gradient-to-r from-white/0 via-white/5 to-white/0" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:mx-36">
          {products
            .filter((item) => item.category == EditorContent.category)
            .slice(0, 8) // Limit to 8 items
            .map((item, index) => (
              <div
                key={item.id}
                className="animate-fadeIn opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ItemCard
                  title={item.title}
                  description={item.description}
                  image={item.images}
                  slug={item.slug}
                  priority={index === 0} // First item gets priority loading
                  index={index} // Pass index for loading strategy
                />
              </div>
            ))}
        </div>
        {/* Section Xem thêm */}
        <div className="mt-3 flex justify-center text-base font-bold text-blue-700">
          <Link
            href={`/san-pham/${EditorContent.slug}`}
            className="flex cursor-pointer hover:scale-105"
          >
            <p className="">Xem thêm sản phẩm</p>
            <FaChevronRight className="pt-1 text-xl" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .group:hover .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default ItemList;
