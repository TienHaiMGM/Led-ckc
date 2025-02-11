"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ItemCardProps {
  image: string;
  title: string;
  description: string;
  slug?: string;
  priority?: boolean;
  index?: number;
}

const ItemCard = ({
  image,
  title,
  slug = "#",
  priority = false,
  index = 0,
}: ItemCardProps): React.ReactElement => {
  // Determine if this card should be loaded eagerly (first 4 items)
  const shouldLoadEagerly = index < 4;

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
      <Link href={`/products/${slug}`} className="block">
        <motion.div
          className="h-56 overflow-hidden rounded-lg bg-white transition-all duration-500 ease-in-out sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72"
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
          <div className="group relative h-[19vh] sm:h-[20vh] md:h-[25vh] lg:h-[20vh] xl:h-[25vh]">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                mass: 0.8,
              }}
              className="relative h-full w-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover will-change-transform"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={priority || shouldLoadEagerly}
                loading={shouldLoadEagerly ? "eager" : "lazy"}
                quality={shouldLoadEagerly ? 85 : 75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTEwLS4xKSEoMC0vMSw5OTk5OTk5OTk5OTn/2wBDARUXFyAeIB4gHh4gIiEgMSohICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
            {/* Smooth Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
          </div>

          {/* Title Section with Enhanced Gradient */}
          <div className="relative overflow-hidden p-2 sm:p-3">
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <h3 className="text-center text-xs font-bold uppercase text-slate-600 sm:text-sm">
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
