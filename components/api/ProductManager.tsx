"use client";
import React, { useState, useEffect } from "react";
import DatabaseService from "./DatabaseService";
import Image from "next/image";

interface Product {
  title: string;
  description?: string;
  image: string;
  price: number;
  category: string;
  slug: string;
  content: string;
}

interface FirestoreProduct extends Product {
  id: string;
  createdAt?: any;
  updatedAt?: any;
}

const categories = [
  { value: "banghieu", label: "Bảng Hiệu" },
  { value: "chunoi", label: "Chữ Nổi" },
  { value: "hopden", label: "Hộp Đèn" },
  { value: "bienbat", label: "Biển Bạt" },
  { value: "bienled", label: "Biển LED" },
] as const;

const initialFormState: Product = {
  title: "",
  description: "",
  image: "",
  price: 0,
  category: "banghieu",
  slug: "",
  content: "",
};

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const ProductManager = () => {
  const [products, setProducts] = useState<FirestoreProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<FirestoreProduct | null>(
    null,
  );
  const [formData, setFormData] = useState<Product>(initialFormState);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await DatabaseService.getCollection("collections");
      const productData = data.map((doc) => ({
        id: doc.id,
        title: doc.title || "",
        description: doc.description || "",
        image: doc.image || "",
        price: Number(doc.price) || 0,
        category: doc.category || "banghieu",
        slug: doc.slug || "",
        content: doc.content || "",
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      }));
      setProducts(productData);
    } catch (err) {
      setError("Lỗi khi tải dữ liệu sản phẩm");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingProduct(null);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const productData = {
        ...formData,
        slug: formData.slug || generateSlug(formData.title),
      };
      await DatabaseService.addDocument("collections", productData);
      resetForm();
      await fetchProducts();
      alert("Thêm sản phẩm thành công!");
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.id) return;

    try {
      setLoading(true);
      const productData = {
        ...formData,
        slug: formData.slug || generateSlug(formData.title),
      };
      await DatabaseService.updateDocument(
        "collections",
        editingProduct.id,
        productData,
      );
      resetForm();
      await fetchProducts();
      alert("Cập nhật sản phẩm thành công!");
    } catch (err) {
      setError("Lỗi khi cập nhật sản phẩm");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

    try {
      setLoading(true);
      await DatabaseService.deleteDocument("collections", id);
      await fetchProducts();
      alert("Xóa sản phẩm thành công!");
    } catch (err) {
      setError("Lỗi khi xóa sản phẩm");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: FirestoreProduct) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description || "",
      image: product.image,
      price: product.price,
      category: product.category,
      slug: product.slug,
      content: product.content || "",
    });
  };

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

      <form
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
        className="mb-8 rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-xl font-semibold">
          {editingProduct ? "Cập Nhật Sản Phẩm" : "Thêm Sản Phẩm Mới"}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block">Tên sản phẩm</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="mb-2 block">Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              required
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label className="mb-2 block">URL Hình ảnh</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="mb-2 block">Danh mục</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              required
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block">Mô tả</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              rows={3}
            />
          </div>

          <div>
            <label className="mb-2 block">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block">Nội dung bài viết</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full rounded border p-2"
              rows={6}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            {editingProduct ? "Cập Nhật" : "Thêm Sản Phẩm"}
          </button>

          {editingProduct && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              Hủy
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
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
              <p className="mb-2 text-lg font-bold text-blue-600">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
