// Site Configuration
export const SITE_CONFIG = {
  name: 'Siêu Thị Bảng Hiệu',
  shortName: 'STBH',
  description: 'Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sieuthibanghieu.vn',
  locale: 'vi-VN',
  themeColor: '#0284c7',
  contactEmail: 'contact@sieuthibanghieu.vn',
  contactPhone: '0123.456.789',
  address: '123 Đường ABC, Quận XYZ, TP.HCM',
};

// Firebase Collections
export const COLLECTIONS = {
  news: 'news',
  products: 'products',
  categories: 'categories',
  users: 'users',
  settings: 'settings',
};

// Image Configuration
export const IMAGE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  dimensions: {
    thumbnail: {
      width: 300,
      height: 200,
    },
    medium: {
      width: 800,
      height: 600,
    },
    large: {
      width: 1920,
      height: 1080,
    },
  },
};

// Pagination
export const PAGINATION = {
  defaultLimit: 10,
  maxLimit: 50,
};

// News Categories
export const NEWS_CATEGORIES = [
  {
    id: 'tin-tuc',
    name: 'Tin Tức',
    description: 'Tin tức mới nhất về ngành quảng cáo',
  },
  {
    id: 'khuyen-mai',
    name: 'Khuyến Mãi',
    description: 'Các chương trình khuyến mãi đặc biệt',
  },
  {
    id: 'huong-dan',
    name: 'Hướng Dẫn',
    description: 'Hướng dẫn và tips về bảng hiệu',
  },
  {
    id: 'du-an',
    name: 'Dự Án',
    description: 'Các dự án tiêu biểu đã thực hiện',
  },
  {
    id: 'cong-nghe',
    name: 'Công Nghệ',
    description: 'Công nghệ mới trong ngành quảng cáo',
  },
] as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
  {
    id: 'bang-hieu',
    name: 'Bảng Hiệu',
    description: 'Các loại bảng hiệu quảng cáo',
  },
  {
    id: 'bang-led',
    name: 'Bảng LED',
    description: 'Bảng hiệu LED hiện đại',
  },
  {
    id: 'chu-noi',
    name: 'Chữ Nổi',
    description: 'Chữ nổi các loại',
  },
  {
    id: 'hop-den',
    name: 'Hộp Đèn',
    description: 'Hộp đèn quảng cáo',
  },
] as const;

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Vui lòng điền thông tin này',
  INVALID_EMAIL: 'Email không hợp lệ',
  INVALID_PHONE: 'Số điện thoại không hợp lệ',
  INVALID_PASSWORD: 'Mật khẩu phải có ít nhất 6 ký tự',
  NETWORK_ERROR: 'Lỗi kết nối, vui lòng thử lại',
  UNAUTHORIZED: 'Bạn không có quyền truy cập',
  NOT_FOUND: 'Không tìm thấy dữ liệu',
  SERVER_ERROR: 'Lỗi hệ thống, vui lòng thử lại sau',
};

// Route Configuration
export const ROUTES = {
  HOME: '/',
  NEWS: '/tin-tuc',
  PRODUCTS: '/products',
  COLLECTIONS: '/collections',
  ABOUT: '/pages/gioi-thieu',
  CONTACT: '/pages/lien-he',
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin',
    NEWS: '/admin/news-management',
    PRODUCTS: '/admin/products',
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  NEWS: '/api/news',
  PRODUCTS: '/api/products',
  UPLOAD: '/api/upload',
};

// Time Constants
export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
};

// Cache Duration
export const CACHE_DURATION = {
  SHORT: 5 * 60, // 5 minutes
  MEDIUM: 30 * 60, // 30 minutes
  LONG: 24 * 60 * 60, // 1 day
  VERY_LONG: 7 * 24 * 60 * 60, // 1 week
};
