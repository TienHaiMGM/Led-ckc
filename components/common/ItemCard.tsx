"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <Link href="#" className="block">
        <motion.div 
          className="bg-white rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
          initial={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 5px 15px -5px rgba(37, 99, 235, 0.1)",
          }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            boxShadow: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
        >
          {/* Image Container with Enhanced Hover Effect */}
          <div className="relative h-56 group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.8
              }}
              className="h-full w-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover will-change-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            {/* Smooth Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
          </div>

          {/* Title Section with Enhanced Gradient */}
          <div className="relative p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 overflow-hidden">
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>
            </motion.div>
            {/* Animated background gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
              whileHover={{ 
                opacity: [0, 1],
                scale: 1.05
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Description Section */}
          <div className="p-4 space-y-4">
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
            
            {/* Action Section with Enhanced Animations */}
            <div className="flex items-center justify-between">
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-600"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgb(219 234 254)",
                  boxShadow: "0 2px 4px -1px rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
              >
                Mới
              </motion.span>
              <motion.div
                className="flex items-center text-blue-600 font-medium group/link"
                whileHover={{ x: 5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <span className="mr-2 transition-colors duration-300 group-hover/link:text-blue-700">
                  Chi tiết
                </span>
                <motion.svg 
                  className="w-4 h-4 transition-colors duration-300 group-hover/link:text-blue-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 3 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
