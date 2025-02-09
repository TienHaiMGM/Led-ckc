"use client"
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
  bgGradient?: string;
}

const ItemList: React.FC<ItemListProps> = ({ 
  title, 
  items, 
  bgGradient = "from-blue-600 via-purple-600 to-indigo-600"
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12">
          <div className={`relative bg-gradient-to-r ${bgGradient} rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300`}>
            <div className="relative px-6 py-8 md:px-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center group-hover:scale-105 transform transition-transform duration-300">
                {title}
              </h2>
              
              {/* Decorative Circles */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full transform -rotate-45 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full transform rotate-45 group-hover:-rotate-45 transition-transform duration-500" />
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ItemCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .group:hover .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default ItemList;
