"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../ui/Logo";
import {
  FaSearch,
  FaPhoneAlt,
  FaBars,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../../utils/menuItems"; // Corrected import path

interface HeaderProps {
  showSearch?: boolean; // Optional prop to control search bar visibility
}

const Header: React.FC<HeaderProps> = ({ showSearch = true }) => {
  // Default to true if not provided
  const [search, setSearch] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/tim-kiem?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setIsSearchOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header id="main-header" className="z-50 bg-white text-black shadow-lg">
      {/* SEO Optimization */}
      <div className="hidden">
        <h1>Siêu Thị Bảng Hiệu - Chuyên cung cấp bảng hiệu chất lượng cao</h1>
      </div>
      {/* Main Header Content */}
      <div className="container mx-auto px-4 py-2 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
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
          {showSearch && (
            <div
              id="thanh-tim-kiem"
              className="mx-4 hidden max-w-xl flex-grow rounded-lg border-2 lg:block"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <FaSearch className="text-black-500" />
                </button>
              </form>
            </div>
          )}

          {/* Desktop Contact Info */}
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="flex items-center rounded-lg px-4 py-2 text-xl text-blue-700 transition-colors hover:scale-105 hover:text-blue-800">
              <FaPhoneAlt className="mr-2" />
              <div>
                <a
                  href="tel:0123456789"
                  className="font-bold text-blue-700 transition-colors hover:text-blue-800"
                >
                  0962630679
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div
            id="thanh-tim-kiem-mo-mobile"
            className="flex items-center space-x-2 py-2 lg:hidden"
          >
            {/* Mobile Search Bar */}
            {showSearch && (
              <>
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 overflow-hidden rounded-lg border-2 lg:hidden"
                    >
                      <form onSubmit={handleSearch} className="relative">
                        <input
                          type="text"
                          placeholder="Tìm kiếm..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-[35vw] rounded-lg p-10 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                          type="submit"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        ></button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={toggleSearch}
                  className="hover:bg-black-700 rounded-lg p-2 transition-colors"
                  aria-label="Tìm kiếm"
                >
                  <FaSearch className="text-xl" />
                </button>
              </>
            )}
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <ul className="space-y-2 px-4 py-2">
              {menuItems.map((item, index) => (
                <li key={index} className="rounded-lg">
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-black transition-colors hover:bg-white/10"
                      >
                        <span className="text-base font-semibold">
                          {item.label}
                        </span>
                        <FaChevronDown
                          className={`h-4 w-4 transform transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-1"
                          >
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block rounded-lg px-4 py-2 text-sm text-black transition-colors hover:bg-white/10"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-2 text-base font-semibold text-black transition-colors hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
