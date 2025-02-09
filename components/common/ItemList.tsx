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
    <section className="py-2 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-5">
          <div className={`relative bg-gradient-to-r ${bgGradient} w-[20vw] rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:w-[30vw] transition-shadow duration-300 `}>
            <div className="relative py-2">
              <h2 className="text-2xl md:text-2xl font-bold text-white text-left pl-10 group-hover:scale-105 transform transition-transform duration-300">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-4">
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
