import React from 'react';
import Image from 'next/image';
const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src='/images/sieuthibanghieu.png' // Đường dẫn đến hình ảnh logo của bạn
        alt="Siêu Thị Bảng Hiệu Logo"
        width={200} // Chiều rộng của logo
        height={200} // Chiều cao của logo
        className="rounded-sm" // Bo tròn góc nếu cần
      />
      <span className="text-xl font-bold text-blue-600">Siêu Thị Bảng Hiệu</span>
    </div>
  );
};

export default Logo;