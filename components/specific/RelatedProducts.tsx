"use client";

import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { getRelatedProducts } from "../api/ProductService";
import Link from "next/link";
import Image from "next/image";

interface RelatedProductsProps {
  productId: string;
  category: string;
  maxResults: number;
}

const RelatedProducts = ({
  productId,
  category,
  maxResults,
}: RelatedProductsProps) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const products = await getRelatedProducts(productId, category);
        setRelatedProducts(products.slice(0, maxResults));
      } catch (error) {
        console.error("Error fetching related products:", error);
        setError("Không thể tải sản phẩm liên quan.");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [productId, category, maxResults]);

  if (loading)
    return <p className="text-center">Đang tải sản phẩm liên quan...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (relatedProducts.length === 0)
    return <p className="text-center">Không có sản phẩm liên quan.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {relatedProducts.map((product) => (
        <div
          className="col-span-1 rounded-xl shadow-2xl transition-all hover:scale-105"
          key={product.id}
        >
          <div className="h-56 overflow-hidden rounded-lg bg-white transition-all duration-500 ease-in-out sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
            <Link href={`/chi-tiet-san-pham/${product.slug}`} className="block">
              <div className="relative h-[19vh] sm:h-[20vh] md:h-[25vh] lg:h-[20vh] xl:h-[25vh]">
                <Image
                  src={product.images || "/images/default-product.jpg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/..."
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-center text-xs font-bold uppercase text-slate-600 sm:text-sm">
                  {product.title}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
