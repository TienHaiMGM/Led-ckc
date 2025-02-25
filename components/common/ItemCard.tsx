"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [mounted, setMounted] = React.useState(false);
  const shouldLoadEagerly = index < 4;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simpler version during SSR
    return (
      <div className="h-56 overflow-hidden rounded-lg bg-white sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
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
    <div className="h-56 overflow-hidden rounded-lg bg-white transition-all duration-500 ease-in-out sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
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
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTEwLS4xKSEoMC0vMSw5OTk5OTk5OTk5OTn/2wBDARUXFyAeIB4gHh4gIiEgMSohICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
};

export default ItemCard;
