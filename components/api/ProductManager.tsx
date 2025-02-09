"use client"
import React, { useState, useEffect } from 'react';
import DatabaseService from './DatabaseService';
import Image from 'next/image';

// Base Product interface for form data
interface Product {
  title: string;
  description?: string;
  image: string;
  price: number;
  category: string;
}

// Extended interface for Firestore documents
interface FirestoreProduct extends Product {
  id: string;
  createdAt?: any;
  updatedAt?: any;
}

// Categories data
const categories = [
  { value: 'banghieu', label: 'Bảng Hiệu' },
  { value: 'chunoi', label: 'Chữ Nổi' },
  { value: 'hopden', label: 'Hộp Đèn' },
  { value: 'bienbat', label: 'Biển Bạt' },
  { value: 'bienled', label: 'Biển LED' }
] as const;

// Initial form state
const initialFormState: Product = {
  title: '',
  description: '',
  image: '',
  price: 0,
  category: 'banghieu'
};

const ProductManager = () => {
  const [products, setProducts] = useState<FirestoreProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<FirestoreProduct | null>(null);
  const [formData, setFormData] = useState<Product>(initialFormState);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await DatabaseService.getCollection('collections');
      const productData = data.map(doc => ({
        id: doc.id,
        title: doc.title || '',
        description: doc.description || '',
        image: doc.image || '',
        price: Number(doc.price) || 0,
        category: doc.category || 'banghieu',
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt
      }));
      setProducts(productData);
    } catch (err) {
      setError('Lỗi khi tải dữ liệu sản phẩm');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData(initialFormState);
    setEditingProduct(null);
  };

  // Add new product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await DatabaseService.addDocument('collections', formData);
      resetForm();
      await fetchProducts();
      alert('Thêm sản phẩm thành công!');
    } catch (err) {
      setError('Lỗi khi thêm sản phẩm');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update product
  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.id) return;

    try {
      setLoading(true);
      await DatabaseService.updateDocument('collections', editingProduct.id, formData);
      resetForm();
      await fetchProducts();
      alert('Cập nhật sản phẩm thành công!');
    } catch (err) {
      setError('Lỗi khi cập nhật sản phẩm');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;

    try {
      setLoading(true);
      await DatabaseService.deleteDocument('collections', id);
      await fetchProducts();
      alert('Xóa sản phẩm thành công!');
    } catch (err) {
      setError('Lỗi khi xóa sản phẩm');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Start editing a product
  const handleEdit = (product: FirestoreProduct) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description || '',
      image: product.image,
      price: product.price,
      category: product.category
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Quản Lý Sản Phẩm</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Product Form */}
      <form 
        onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} 
        className="mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingProduct ? 'Cập Nhật Sản Phẩm' : 'Thêm Sản Phẩm Mới'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Tên sản phẩm</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label className="block mb-2">URL Hình ảnh</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Danh mục</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Mô tả</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            {editingProduct ? 'Cập Nhật' : 'Thêm Sản Phẩm'}
          </button>
          
          {editingProduct && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Hủy
            </button>
          )}
        </div>
      </form>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              {product.description && (
                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              )}
              <p className="text-lg font-bold text-blue-600 mb-2">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
                }).format(product.price)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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
