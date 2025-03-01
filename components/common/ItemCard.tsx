"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ItemCardProps {
  image: string;
  title: string;
  description?: string;
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
  const [mounted, setMounted] = React.useState(false);
  const shouldLoadEagerly = index < 4;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-56 overflow-hidden rounded-lg bg-white sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
        <Link href={`/chi-tiet-san-pham/${slug}`} className="block">
          <div className="relative h-[19vh] sm:h-[20vh] md:h-[25vh] lg:h-[20vh] xl:h-[25vh]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={priority || shouldLoadEagerly}
              loading={shouldLoadEagerly ? "eager" : "lazy"}
            />
          </div>
          <div className="p-2 sm:p-3">
            <h3 className="text-center text-xs font-bold uppercase text-slate-600 sm:text-sm">
              {title}
            </h3>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative h-56 overflow-hidden rounded-lg bg-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(128,128,128,0.5)] sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
      <Link href={`/chi-tiet-san-pham/${slug}`} className="block">
        <div className="relative h-[19vh] sm:h-[20vh] md:h-[25vh] lg:h-[20vh] xl:h-[25vh]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority || shouldLoadEagerly}
            loading={shouldLoadEagerly ? "eager" : "lazy"}
            quality={shouldLoadEagerly ? 85 : 75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSk..."
          />
        </div>

        {/* Hiệu ứng Holographic */}
        <div className="absolute left-[-50%] top-[-50%] h-[200%] w-[200%] rotate-[-45deg] bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.3)] opacity-80 transition-all duration-200 ease-in-out group-hover:translate-y-full group-hover:opacity-100"></div>

        <div className="p-2 sm:p-3">
          <h3 className="relative z-10 text-center text-xs font-bold uppercase sm:text-sm">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
