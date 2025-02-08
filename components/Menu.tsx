import Link from 'next/link';
import React from 'react';
import DropdownList from '../components/DropdownList'

const Menu: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-4 shadow-md z-50 relative">
        <ul className="flex justify-center space-x-8 gap-8">
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            <Link href="/" passHref>
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-transform">Trang chủ</span>
            </Link>
          </li>
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500 '>
            <Link href="/about" >
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300">Giới thiệu</span>
            </Link>
          </li>
          <li className='hover:scale-100 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            {/* <Link href="/mau-san-pham" passHref> */}
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300"><DropdownList/></span>
              
            {/* </Link> */}
          </li>
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            <Link href="/lam-bang-hieu" passHref>
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300">Làm bảng hiệu</span>
            </Link>
          </li>
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            <Link href="/policy" passHref>
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300">Chính sách</span>
            </Link>
          </li>
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            <Link href="/new" passHref>
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300">Tin tức</span>
            </Link>
          </li>
          <li className='hover:scale-125 cursor-pointer hover:border-b-2 hover:border-b-orange-400 transform transition-all duration-500'>
            <Link href="/contact" passHref>
              <span className="text-white uppercase text-lg font-semibold hover:text-yellow-300 hover:scale-120 transition-all duration-300">Liên hệ</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    );
  };
  
  export default Menu;
  