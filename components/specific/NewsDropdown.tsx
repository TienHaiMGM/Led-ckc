"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const NewsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const newsItems = [
    { href: "/pages/tin-tuc-moi", label: "Tin tức mới" },
    { href: "/pages/kien-thuc", label: "Kiến thức" },
    ,
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
        id="news-menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>TIN TỨC</span>
        <FaChevronDown
          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute -left-8 z-50 w-36 origin-top-left transform rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="news-menu"
        >
          <div className="py-1">
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2.5 text-xs text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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

export default NewsDropdown;
