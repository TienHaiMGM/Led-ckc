import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 p-1">
      <div className="relative w-[120px] h-[40px] md:w-[150px] md:h-[50px] lg:w-[180px] lg:h-[60px]">
        <Image
          src='/images/sieuthibanghieu.png'
          alt="Siêu Thị Bảng Hiệu - Logo chính thức"
          fill
          priority
          sizes="(max-width: 768px) 120px, (max-width: 1200px) 150px, 180px"
          className="object-contain"
        />
      </div>
      <span className="hidden md:inline-block font-bold text-white text-lg lg:text-xl transition-colors duration-300 group-hover:text-blue-200">
        Siêu Thị Bảng Hiệu
      </span>
    </div>
  );
};

export default Logo;
