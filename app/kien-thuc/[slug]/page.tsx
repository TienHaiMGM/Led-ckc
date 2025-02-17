"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import JsonLdWrapper from "@/components/common/JsonLdWrapper";
import Breadcrumb from "@/components/common/Breadcrumb";
import Knowledge_WithData from "@/components/specific/Knowledge_WithData";
import {
  getKnowledgeBySlug,
  Knowledge,
} from "@/components/api/KnowledgeService";

export default function KnowledgePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [product, setProduct] = useState<Knowledge | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(slug);

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
        const fetchedProduct = await getKnowledgeBySlug(slug);
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: [product.image],
    description: product.description || "",
    brand: {
      "@type": "Brand",
      name: "Siêu Thị Bảng Hiệu",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Siêu Thị Bảng Hiệu",
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      lowPrice: "1000000",
      highPrice: "5000000",
      priceCurrency: "VND",
      offerCount: "5",
      url: `https://sieuthibanghieu.com/products/${slug}`,
    },
  };

  return (
    <>
      <Header />
      <Menu />
      <Breadcrumb />
      <Knowledge_WithData Knowledge={product} />
      <JsonLdWrapper data={schemaData} />
      <Footer />
    </>
  );
}
