import React, { useState, useEffect, useCallback } from "react";
import { FaSearch, FaHistory, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  getSearchHistory,
  saveToSearchHistory,
  clearSearchHistory,
  searchProducts,
} from "../../utils/searchUtils";
import { ProductContent } from "../../types/product-management";

interface UnifiedSearchProps {
  mode?: "direct" | "submit";
  products?: ProductContent[];
  onSearch: (query: string, results?: ProductContent[]) => void;
  placeholder?: string;
  className?: string;
  showHistory?: boolean;
  maxHistoryItems?: number;
  initialQuery?: string;
  maxSuggestions?: number;
  debounceTime?: number;
}

const UnifiedSearchComponent: React.FC<UnifiedSearchProps> = ({
  mode = "submit",
  products = [],
  onSearch,
  placeholder = "Tìm kiếm sản phẩm...",
  className = "",
  showHistory = true,
  maxHistoryItems = 5,
  initialQuery = "",
  maxSuggestions = 5,
  debounceTime = 1000,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<ProductContent[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  // Load search history on component mount
  useEffect(() => {
    setSearchHistory(getSearchHistory());
  }, []);

  // Handle search suggestions with debounce
  const updateSuggestions = useCallback(
    (query: string) => {
      if (!query.trim() || !products) {
        setSuggestions([]);
        return;
      }

      const results = searchProducts(products, query).slice(0, maxSuggestions);
      setSuggestions(results);
      setShowSuggestions(true);
    },
    [products, maxSuggestions],
  );

  // Handle search completion (when user actually performs a search)
  const completeSearch = useCallback(
    (query: string) => {
      if (!query.trim()) return;

      // Only save to history when search is completed
      saveToSearchHistory(query);
      setSearchHistory(getSearchHistory());

      setIsHistoryVisible(false);
      setShowSuggestions(false);

      if (mode === "direct" && products) {
        const results = searchProducts(products, query);
        onSearch(query, results);
      } else {
        onSearch(query);
      }
    },
    [mode, products, onSearch],
  );

  // Handle search input (without saving to history)
  const handleSearchInput = useCallback(
    (query: string) => {
      if (!query.trim()) return;

      if (mode === "direct" && products) {
        const results = searchProducts(products, query);
        onSearch(query, results);
      }
    },
    [mode, products, onSearch],
  );

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeSearch(searchQuery);
  };

  // Handle history item click
  const handleHistoryItemClick = (query: string) => {
    setSearchQuery(query);
    completeSearch(query);
  };

  // Handle suggestion click
  const handleSuggestionClick = (product: ProductContent) => {
    setSearchQuery(product.title);
    completeSearch(product.title);
  };

  // Handle history clear
  const handleClearHistory = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearSearchHistory();
    setSearchHistory([]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = suggestions.length;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < totalItems - 1 ? prev + 1 : -1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > -1 ? prev - 1 : totalItems - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSubmit(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById(
        "unified-search-container",
      );
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsHistoryVisible(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="unified-search-container" className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            const newQuery = e.target.value;
            setSearchQuery(newQuery);
            setIsHistoryVisible(showHistory && !newQuery);

            // Clear any existing timeout
            if (typingTimeout) {
              clearTimeout(typingTimeout);
            }

            // Set new timeout for suggestions
            const newTimeout = setTimeout(() => {
              updateSuggestions(newQuery);
              handleSearchInput(newQuery); // For direct mode updates
            }, debounceTime);

            setTypingTimeout(newTimeout);
          }}
          onFocus={() => {
            if (searchQuery) {
              setShowSuggestions(true);
            } else {
              setIsHistoryVisible(showHistory && searchHistory.length > 0);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-full border border-gray-300 bg-white px-6 py-3 pr-12 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSuggestions([]);
              handleSearchInput("");
            }}
            className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
        >
          <FaSearch className="h-4 w-4" />
        </button>
      </form>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <ul>
            {suggestions.map((product, index) => (
              <li
                key={product.id}
                className={`cursor-pointer border-b border-gray-100 px-4 py-3 hover:bg-gray-50 ${
                  index === selectedIndex ? "bg-gray-50" : ""
                }`}
                onClick={() => handleSuggestionClick(product)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={product.images}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="line-clamp-1 font-medium text-gray-900">
                      {product.title}
                    </h4>
                    <p className="line-clamp-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search History Dropdown */}
      {isHistoryVisible && searchHistory.length > 0 && !showSuggestions && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <span className="flex items-center text-sm text-gray-600">
              <FaHistory className="mr-2" />
              Lịch sử tìm kiếm
            </span>
            <button
              onClick={handleClearHistory}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Xóa lịch sử
            </button>
          </div>
          <ul>
            {searchHistory.slice(0, maxHistoryItems).map((query, index) => (
              <li
                key={index}
                className="cursor-pointer border-b border-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => handleHistoryItemClick(query)}
              >
                <div className="flex items-center justify-between">
                  <span>{query}</span>
                  <FaSearch className="h-3 w-3 text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UnifiedSearchComponent;
