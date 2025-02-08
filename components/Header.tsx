"use client"
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { FaSearch, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
      const [search, setSearch] = useState<string>("");
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center -mr-60">
          <Link href="/" className="text-2xl font-bold">
          <Logo/></Link>
        </div>

        {/* Thanh tìm kiếm */}
               <div className="relative w-1/4">
                 <input
                   type="text"
                   placeholder="Tìm kiếm..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   className="w-full p-2 pl-10 rounded-lg text-black focus:outline-none"
                 />
                 <FaSearch className="absolute left-3 top-3 text-gray-500" />
               </div>

        {/* Contact Info */}
        <div className="flex items-center">
          <img src="\images\telephone.png" alt="phone" width={50} className='mr-4'/>
          <span className="font-semibold text-3xl">0123-456-789</span>
        </div>
      </div>
    </header>
  );
};

export default Header;