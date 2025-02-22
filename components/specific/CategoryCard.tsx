import React from "react";

interface CategoryCardProps {
  image: string;
  title: string;
  caption?: string; // Added caption property
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title }) => {
  return (
    <div className="m-4 max-w-xs overflow-hidden rounded shadow-lg">
      <div className="h-[15vw] w-[20vw] overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
