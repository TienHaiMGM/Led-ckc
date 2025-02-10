"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

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
    { href: "/collections/bang-hieu", label: "Bảng hiệu" },
    { href: "/collections/chu-noi", label: "Chữ nổi" },
    { href: "/collections/hop-den", label: "Hộp đèn" },
    { href: "/collections/led", label: "LED" },
    { href: "/collections/bang-so-nha", label: "Bảng số nhà" },
    { href: "/collections/bang-ten-cong-ty", label: "Bảng tên công ty" },
    { href: "/collections/logo", label: "Logo" },
  ];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        className="inline-flex items-center"
        id="options-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>SẢN PHẨM</span>
        <FaChevronDown
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute -left-16 z-50 w-64 origin-top-left transform rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
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
