import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 p-1 transition-all duration-300 hover:scale-105">
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px] lg:h-[60px] lg:w-[180px]">
        <Image
          src="/images/sieuthibanghieu.png"
          alt="Siêu Thị Bảng Hiệu - Logo chính thức"
          fill
          priority
          sizes="(max-width: 768px) 120px, (max-width: 1200px) 150px, 180px"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
