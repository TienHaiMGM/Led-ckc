import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { image: '/images/banghieu.jpg', title: 'BẢNG HIỆU' },
  { image: '/images/hopden.jpg', title: 'HỘP ĐÈN' },
  { image: '/images/chunoi.jpg', title: 'CHỮ NỔI' },
  { image: '/images/bienquangcao.jpg', title: 'LED' },
];

const ExploreCategories: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">SẢN PHẨM TIÊU BIỂU </h1>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} title={category.title} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;