//Limit sản phẩm cho trang chủ
export const LIMITRESULTTRANGCHU = 8;
//Limit sản phẩm cho trang sản phẩm
export const LIMITRESULTTRANGSANPHAM = 24;

// Site Configuration
export const SITE_CONFIG = {
  name: "Siêu Thị Bảng Hiệu",
  shortName: "STBH",
  description: "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sieuthibanghieu.vn",
  locale: "vi-VN",
  themeColor: "#0284c7",
  contactEmail: "contact@sieuthibanghieu.vn",
  contactPhone: "0123.456.789",
  address: "123 Đường ABC, Quận XYZ, TP.HCM",
};

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: "Vui lòng điền thông tin này",
  INVALID_EMAIL: "Email không hợp lệ",
  INVALID_PHONE: "Số điện thoại không hợp lệ",
  INVALID_PASSWORD: "Mật khẩu phải có ít nhất 6 ký tự",
  NETWORK_ERROR: "Lỗi kết nối, vui lòng thử lại",
  UNAUTHORIZED: "Bạn không có quyền truy cập",
  NOT_FOUND: "Không tìm thấy dữ liệu",
  SERVER_ERROR: "Lỗi hệ thống, vui lòng thử lại sau",
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
