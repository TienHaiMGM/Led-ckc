"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { FaSearch, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-50 bg-blue-600 text-white shadow-lg">
      {/* SEO Optimization */}
      <div className="hidden">
        <h1>Siêu Thị Bảng Hiệu - Chuyên cung cấp bảng hiệu chất lượng cao</h1>
        <meta
          name="description"
          content="Siêu Thị Bảng Hiệu - Đơn vị hàng đầu trong lĩnh vực thiết kế và thi công bảng hiệu, biển quảng cáo tại Việt Nam"
        />
      </div>

      {/* Main Header Content */}
      <div className="container mx-auto px-4 py-2 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              aria-label="Trang chủ Siêu Thị Bảng Hiệu"
              className="logo-link"
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="mx-4 hidden max-w-xl flex-grow lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="flex items-center rounded-lg bg-blue-700 px-4 py-2 text-xl transition-colors hover:bg-blue-800">
              <FaPhoneAlt className="mr-2" />
              <div>
                <a
                  href="tel:0123456789"
                  className="font-bold transition-colors hover:text-blue-200"
                >
                  0123-456-789
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="rounded-lg p-2 transition-colors hover:bg-blue-700"
              aria-label="Tìm kiếm"
            >
              <FaSearch className="text-xl" />
            </button>
            <a
              href="tel:0123456789"
              className="rounded-lg p-2 transition-colors hover:bg-blue-700"
              aria-label="Gọi ngay"
            >
              <FaPhoneAlt className="text-xl" />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 transition-colors hover:bg-blue-700"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden lg:hidden"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-blue-700 lg:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block rounded-lg px-4 py-2 transition-colors hover:bg-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
