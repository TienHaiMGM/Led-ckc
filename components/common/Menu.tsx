"use client";
import Link from "next/link";
import React from "react";
import DropdownList from "../specific/DropdownList";
import NewsDropdown from "../specific/NewsDropdown";

const Menu: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-3 shadow-md">
      <ul className="flex justify-center gap-8 space-x-8">
        <li className="transform cursor-pointer transition-all duration-500 hover:scale-125 hover:border-b-2 hover:border-b-orange-400">
          <Link href="/">
            <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-transform hover:text-yellow-300">
              Trang chủ
            </span>
          </Link>
        </li>
        <li className="transform cursor-pointer transition-all duration-500 hover:scale-125 hover:border-b-2 hover:border-b-orange-400">
          <Link href="/pages/about">
            <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
              Giới thiệu
            </span>
          </Link>
        </li>
        <li className="transform cursor-pointer transition-all duration-500 hover:scale-100 hover:border-b-2 hover:border-b-orange-400">
          <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
            <DropdownList />
          </span>
        </li>

        <li className="transform cursor-pointer transition-all duration-500 hover:scale-125 hover:border-b-2 hover:border-b-orange-400">
          <Link href="/pages/sign">
            <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
              Làm bảng hiệu
            </span>
          </Link>
        </li>
        <li className="transform cursor-pointer transition-all duration-500 hover:scale-125 hover:border-b-2 hover:border-b-orange-400">
          <Link href="/pages/new">
            <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
              <NewsDropdown />
            </span>
          </Link>
        </li>
        <li className="transform cursor-pointer transition-all duration-500 hover:scale-125 hover:border-b-2 hover:border-b-orange-400">
          <Link href="/pages/contact">
            <span className="hover:scale-120 text-lg font-semibold uppercase text-white transition-all duration-300 hover:text-yellow-300">
              Liên hệ
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
