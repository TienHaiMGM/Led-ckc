import React from 'react';

interface CategoryCardProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <div className="w-[20vw] h-[15vw] overflow-hidden">
      <img className="w-full h-full object-cover" src={image} alt={title} />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
    </div>
  </div>
  );
};

export default CategoryCard;