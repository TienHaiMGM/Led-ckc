"use client";
import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from "react-icons/fa";
import Editor from "app/admin/product-content/editor";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
}

const DataManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialFormState = {
    title: "",
    description: "",
    image: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, "collections"),
        orderBy("createdAt", "desc"),
      );
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Product,
      );
      setProducts(productsData);
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newProduct = {
        ...formData,
        createdAt: new Date().toISOString(),
      };
      await addDoc(collection(db, "collections"), newProduct);
      setFormData(initialFormState);
      setIsAdding(false);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi thêm sản phẩm");
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  // Update product
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    try {
      setLoading(true);
      const productRef = doc(db, "collections", editingProduct.id);
      await updateDoc(productRef, {
        ...formData,
        updatedAt: new Date().toISOString(),
      });
      setEditingProduct(null);
      setFormData(initialFormState);
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi cập nhật sản phẩm");
      console.error("Error updating product:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;

    try {
      setLoading(true);
      await deleteDoc(doc(db, "collections", id));
      fetchProducts();
    } catch (err) {
      setError("Lỗi khi xóa sản phẩm");
      console.error("Error deleting product:", err);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      image: product.image,
      category: product.category,
    });
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setFormData(initialFormState);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản Lý Sản Phẩm</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          disabled={loading}
        >
          <FaPlus className="mr-2" /> Thêm Sản Phẩm
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Add/Edit Form */}
      {(isAdding || editingProduct) && (
        <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">
            {editingProduct ? "Sửa Sản Phẩm" : "Thêm Sản Phẩm Mới"}
          </h2>
          <form onSubmit={editingProduct ? handleUpdate : handleAdd}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Tên sản phẩm</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full rounded-lg border p-2"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-medium">Danh mục</label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full rounded-lg border p-2"
                  required
                >
                  <option value="">Chọn danh mục</option>
                  <option value="banghieu">Bảng hiệu</option>
                  <option value="chunoi">Chữ nổi</option>
                  <option value="hopden">Hộp đèn</option>
                  <option value="bienbat">Biển bạt</option>
                  <option value="bienled">Biển LED</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">Link hình ảnh</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full rounded-lg border p-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block font-medium">Mô tả</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full rounded-lg border p-2"
                  rows={4}
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  cancelEdit();
                  setIsAdding(false);
                }}
                className="flex items-center rounded-lg border px-4 py-2 hover:bg-gray-100"
                disabled={loading}
              >
                <FaTimes className="mr-2" /> Hủy
              </button>
              <button
                type="submit"
                className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                disabled={loading}
              >
                <FaSave className="mr-2" /> {loading ? "Đang xử lý..." : "Lưu"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Sản phẩm
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Danh mục
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {product.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                  {product.category}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => startEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManagement;
