import ItemCard from "./ItemCard";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Product } from "../../types/product";
interface ProductDetailProps {
  products: Product[];
  title: string;
  slug: string;
}

const ItemList = ({ products, title, slug }: ProductDetailProps) => {
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
                {title}
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
          {products.map((item, index) => (
            <div
              key={item.id}
              className="animate-fadeIn transition"
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
              />
            </div>
          ))}
        </div>
        {/* Section Xem thêm */}
        <div className="mt-3 flex justify-center text-base font-bold text-blue-700">
          <Link
            href={`/san-pham/${slug}`}
            className="flex cursor-pointer hover:scale-105"
          >
            <p className="">Xem thêm sản phẩm</p>
            <FaChevronRight className="pt-1 text-xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
