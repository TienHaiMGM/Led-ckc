"use client";

import { useEffect, useState } from "react";
import ProductDetail_WithData from "@/components/specific/ProductDetail_WithData";
import { getProductBySlug, Product } from "@/components/api/ProductService";
import Header from "@/components/common/Header";
import Menu from "@/components/common/Menu";
import Footer from "@/components/common/Footer";
import JsonLdWrapper from "@/components/common/JsonLdWrapper";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function BangHieuBanhCuonPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProductBySlug("bang-hieu-banh-cuon");
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Sản phẩm không tồn tại");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Lỗi khi tải sản phẩm");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-4 text-red-600">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-yellow-50 p-4 text-yellow-600">
          Không tìm thấy sản phẩm
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
      url: "https://sieuthibanghieu.com/products/bang-hieu-banh-cuon",
    },
  };

  return (
    <>
      <Header />
      <Menu />
      <Breadcrumb />
      <ProductDetail_WithData product={product} />
      <JsonLdWrapper data={schemaData} />
      <Footer />
    </>
  );
}
