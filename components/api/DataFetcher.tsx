"use client"
import React, { useState, useEffect } from 'react';
import DatabaseService from './DatabaseService';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
  category?: string;
  createdAt?: string;
}

const categories = [
  { value: 'all', label: 'Tất Cả Danh Mục' },
  { value: 'banghieu', label: 'Bảng Hiệu' },
  { value: 'chunoi', label: 'Chữ Nổi' },
  { value: 'hopden', label: 'Hộp Đèn' },
  { value: 'bienbat', label: 'Biển Bạt' },
  { value: 'bienled', label: 'Biển LED' }
] as const;

const sortOptions = [
  { value: 'newest', label: 'Mới Nhất' },
  { value: 'priceAsc', label: 'Giá Tăng Dần' },
  { value: 'priceDesc', label: 'Giá Giảm Dần' }
] as const;

const defaultImage = '/images/sieuthibanghieu.jpg';

const DataFetcher = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, sortBy]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      let fetchedProducts;
      if (selectedCategory === 'all') {
        fetchedProducts = await DatabaseService.getCollection('collections');
      } else {
        fetchedProducts = await DatabaseService.queryCollection({
          collectionName: 'collections',
          whereConditions: [{
            field: 'category',
            operator: '==',
            value: selectedCategory
          }],
          orderByField: sortBy === 'newest' ? 'createdAt' : 'price',
          orderDirection: sortBy === 'priceAsc' ? 'asc' : 'desc'
        });
      }

      // Sort products if category is 'all'
      if (selectedCategory === 'all') {
        fetchedProducts.sort((a: Product, b: Product) => {
          if (sortBy === 'newest') {
            return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
          } else if (sortBy === 'priceAsc') {
            return (a.price || 0) - (b.price || 0);
          } else if (sortBy === 'priceDesc') {
            return (b.price || 0) - (a.price || 0);
          }
          return 0;
        });
      }

      setProducts(fetchedProducts as Product[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Lỗi: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full md:w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-600 min-h-[200px] flex items-center justify-center">
          Không có sản phẩm nào trong danh mục này.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              href={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || defaultImage}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e: any) => {
                      e.target.src = defaultImage;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h2>
                  {product.description && (
                    <p className="text-gray-600 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  {product.price && (
                    <p className="text-lg font-bold text-blue-600">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                      }).format(product.price)}
                    </p>
                  )}
                  {product.category && (
                    <div className="mt-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {categories.find(cat => cat.value === product.category)?.label || product.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;
