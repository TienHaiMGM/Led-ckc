"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDetail_WithData from "@/components/specific/ProductDetail_WithData";
import { getProductBySlug } from "@/components/api/ProductService";
import { Product } from "@/types/product";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

function SkeletonLoader() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="space-y-4 p-6"
    >
      <div className="h-10 w-3/4 rounded bg-gray-300"></div>
      <div className="h-6 w-1/2 rounded bg-gray-300"></div>
      <div className="h-96 w-full rounded bg-gray-300"></div>
      <div className="h-6 w-full rounded bg-gray-300"></div>
      <div className="h-6 w-5/6 rounded bg-gray-300"></div>
      <div className="h-6 w-4/6 rounded bg-gray-300"></div>
    </motion.div>
  );
}

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setError("Không tìm thấy sản phẩm");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedProduct = await getProductBySlug(slug);

        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setError(null);
        } else {
          setError("Không tìm thấy sản phẩm");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Có lỗi xảy ra khi tải sản phẩm",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Breadcrumb />
        <div className="flex min-h-screen items-start justify-center">
          <SkeletonLoader />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <p className="mb-2 text-red-600">{error}</p>
          <p className="text-gray-600">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-yellow-50 p-6 text-center">
          <p className="mb-2 text-yellow-600">Không tìm thấy sản phẩm</p>
          <p className="text-gray-600">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProductDetail_WithData product={product} />
      </motion.div>
    </>
  );
}
