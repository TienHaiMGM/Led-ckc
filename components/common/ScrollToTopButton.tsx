// components/ScrollToTopButton.tsx
"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Kiểm tra vị trí scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🆙 Xử lý scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:bg-red-600"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
