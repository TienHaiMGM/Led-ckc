"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaSign,
  FaLightbulb,
  FaPencilRuler,
  FaTools,
} from "react-icons/fa";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const menuCategories = [
    {
      title: "Bảng hiệu & Biển quảng cáo",
      icon: <FaSign className="h-5 w-5" />,
      items: [
        { href: "/collections/signboard", label: "Bảng hiệu" },
        { href: "/collections/house-number-board", label: "Bảng số nhà" },
        { href: "/collections/company-name-board", label: "Bảng tên công ty" },
      ],
    },
    {
      title: "Chữ nổi & Đèn",
      icon: <FaLightbulb className="h-5 w-5" />,
      items: [
        { href: "/collections/raised-letters", label: "Chữ nổi" },
        { href: "/collections/light-box", label: "Hộp đèn" },
        { href: "/collections/led", label: "LED" },
      ],
    },
    {
      title: "Thiết kế & Thi công",
      icon: <FaPencilRuler className="h-5 w-5" />,
      items: [
        { href: "/collections/logo", label: "Logo" },
        { href: "/collections/design-products", label: "Sản phẩm thiết kế" },
        {
          href: "/collections/interior-construction-products",
          label: "Thi công nội thất",
        },
      ],
    },
    {
      title: "Gia công",
      icon: <FaTools className="h-5 w-5" />,
      items: [
        { href: "/collections/processed-products", label: "Sản phẩm gia công" },
      ],
    },
  ];

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="group inline-flex items-center transition-colors duration-200"
        id="options-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        SẢN PHẨM
        <FaChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute -right-96 z-50 mt-0 w-[800px] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="grid grid-cols-4 gap-4 p-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                <div className="flex items-center space-x-2 rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-600">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50 hover:text-blue-600"
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownList;
