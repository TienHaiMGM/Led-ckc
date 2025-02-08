import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { href: '/braille', label: 'Chữ nổi' },
    { href: '/about', label: 'Bảng hiệu' },
    { href: '/services', label: 'Bảng led' },
    { href: '/contact', label: 'Hộp đèn' },
    { href: '/policy', label: 'Led' },
    { href: '/policy', label: 'Bảng số nhà' },
    { href: '/policy', label: 'Bảng tên công ty' },
    { href: '/policy', label: 'Logo' },
    { href: '/policy', label: 'Sản phẩm gia công' },
    { href: '/policy', label: 'Sản phẩm thi công nội thất' },
    { href: '/policy', label: 'Sản phẩm thiết kế' },
  ];

  return (
    <div className="relative inline-block text-left " 
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="hover:scale-125 inline-flex justify-center w-full"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          SẢN PHẨM 
          <FaChevronDown className="ml-3 mt-1" />
        </button>
      </div>

      {isOpen && (
        <div
          className="text-3xl text-white font-bold italic bg-gradient-to-bl from-[#56ec8d] via-[#fcd34d] to-[#f9a8d4] origin-top-right absolute -left-16 top-5 mt-2 w-60 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}
                className="capitalize block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 hover:rounded-lg"  role="menuitem">
                  {item.label}
                
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownList;