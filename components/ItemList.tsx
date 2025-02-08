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
}

const ItemList: React.FC<ItemListProps> = ({ title, items }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>  
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