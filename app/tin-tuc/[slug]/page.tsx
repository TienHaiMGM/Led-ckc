"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getNewsBySlug, News } from "@/components/api/NewsService";
import Breadcrumb from "@/components/common/Breadcrumb";
import News_WithData from "@/components/specific/News_WithData";

export default function NewsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [product, setProduct] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        console.error("No slug provided");
        setError("Không tìm thấy sản phẩm");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedProduct = await getNewsBySlug(slug);
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-gray-600">Đang tải sản phẩm...</p>
        </div>
      </div>
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
      <News_WithData News={product} />
    </>
  );
}
