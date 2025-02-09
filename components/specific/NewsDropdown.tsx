"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown, FaNewspaper, FaTools } from "react-icons/fa";

const NewsDropdown = () => {
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
      title: "Kiến thức",
      icon: <FaNewspaper className="h-5 w-5" />,
      items: [
        { href: "/news/knowledge/signboard", label: "Kiến thức về bảng hiệu" },
        { href: "/news/knowledge/led", label: "Tư vấn đèn LED" },
        { href: "/news/knowledge/design", label: "Thiết kế quảng cáo" },
        { href: "/news/knowledge/materials", label: "Vật liệu quảng cáo" },
      ],
    },
    {
      title: "Dịch vụ",
      icon: <FaTools className="h-5 w-5" />,
      items: [
        { href: "/news/services/installation", label: "Thi công bảng hiệu" },
        { href: "/news/services/maintenance", label: "Bảo trì bảng hiệu" },
        { href: "/news/services/repair", label: "Sửa chữa bảng hiệu" },
        { href: "/news/services/consultation", label: "Tư vấn thiết kế" },
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
        className="group inline-flex items-center"
        id="news-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        TIN TỨC
        <FaChevronDown
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute -left-40 z-50 mt-0 w-[500px] rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="news-menu"
        >
          <div className="grid grid-cols-2 gap-4 p-4">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                <div className="flex items-center space-x-2 rounded-lg bg-blue-50 px-1 py-1 font-medium text-blue-600">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block rounded-lg px-2 py-2 text-xs text-gray-700 transition-colors duration-150 hover:bg-gray-50 hover:text-blue-600"
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

export default NewsDropdown;
