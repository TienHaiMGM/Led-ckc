import React from 'react';
import ItemCard from './ItemCard';

interface Item {
  image: string;
  title: string;

  description: string;
}

interface ItemListProps {
  title: string;
  items: Item[];
  bgGradient:string;
}

const ItemList: React.FC<ItemListProps> = ({ title, items, bgGradient="bg-gradient-to-r from-blue-500 to-purple-500"}) => {
  return (
    <div className="container mx-auto py-8">
      <div className="relative mb-8 w-[30vw] hover:w-[80vw] -skew-y-1 cursor-pointer ">
        <div className={`absolute inset-0 rounded-lg ${bgGradient}`}></div>
        <div className="relative text-white text-3xl font-bold text-left p-5 ml-10 ">
          {title}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;