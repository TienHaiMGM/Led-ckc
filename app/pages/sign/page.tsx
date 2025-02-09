"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Menu from '@/components/common/Menu';

// Dynamically import DataFetcher with loading state
const DataFetcher = dynamic(
  () => import('@/components/api/DataFetcher'),
  {
    loading: () => (
      <div className="flex-grow flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    ),
    ssr: false // Disable server-side rendering
  }
);

const SignPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Menu />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sản Phẩm</h1>
            <p className="text-gray-600">
              Khám phá bộ sưu tập sản phẩm đa dạng của chúng tôi
            </p>
          </div>
          <div className="relative">
            <DataFetcher />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignPage;
