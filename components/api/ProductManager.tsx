"use client";
import React from "react";
import Image from "next/image";
import {
  ProductContent,
  BaseDocument,
  EmptyProductContent,
  EditorProps,
} from "../../types/product-management";
import { useProductEditor } from "../../components/api/hooks/useProductEditor";
const categories = [
  { value: "banghieu", label: "Bảng Hiệu" },
  { value: "chunoi", label: "Chữ Nổi" },
  { value: "hopden", label: "Hộp Đèn" },
  { value: "bienbat", label: "Biển Bạt" },
  { value: "bienled", label: "Biển LED" },
] as const;

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

interface ProductManagerProps {
  EditorContent?: any;
}

const ProductManager: React.FC<ProductManagerProps> = ({ EditorContent }) => {
  const { products, loading, error, formData, setFormData, generateSlug } =
    useProductEditor(EditorContent);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Quản Lý Sản Phẩm</h1>

      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.images}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{product.title}</h3>
              {product.description && (
                <p className="mb-2 line-clamp-2 text-gray-600">
                  {product.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {EditorContent ? (
        <div>{EditorContent}</div>
      ) : (
        <div>No content available</div>
      )}
    </div>
  );
};

export default ProductManager;
