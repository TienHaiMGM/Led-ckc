"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ image, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Link href="#" className="block">
        <motion.div
          className="overflow-hidden rounded-xl bg-white transition-all duration-500 ease-in-out"
          initial={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          whileHover={{
            scale: 1.02,
            boxShadow:
              "0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 5px 15px -5px rgba(37, 99, 235, 0.1)",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            boxShadow: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          {/* Image Container with Enhanced Hover Effect */}
          <div className="group relative h-[25vh]">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.8,
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
          </div>

          {/* Title Section with Enhanced Gradient */}
          <div className="relative overflow-hidden py-3">
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <h3 className="text-center text-base font-bold uppercase text-slate-600">
                {title}
              </h3>
            </motion.div>
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-white"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ItemCard;
