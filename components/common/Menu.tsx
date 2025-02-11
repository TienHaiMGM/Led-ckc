"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { menuItems } from "@/utils/menuItems";
const Menu: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shadow-md">
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex justify-center gap-8 p-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative transform cursor-pointer transition-all duration-500 hover:scale-105"
              onMouseEnter={() =>
                item.isDropdown && setActiveDropdown(item.label)
              }
              onMouseLeave={() => item.isDropdown && setActiveDropdown(null)}
            >
              {item.isDropdown ? (
                <div className="group relative inline-block">
                  <button className="inline-flex items-center text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
                    <span>{item.label}</span>
                    <FaChevronDown className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 hidden w-48 rounded-lg bg-white py-2 shadow-xl group-hover:block">
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.href}>
                  <span className="text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
                    {item.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden"></div>
      {/* Tablet/Mobile Menu */}
      <div className="md:hidden"></div>
    </nav>
  );
};

export default Menu;
