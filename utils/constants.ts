//Limit sản phẩm cho trang chủ
export const LIMITRESULTTRANGCHU = 8;
//Limit sản phẩm cho trang sản phẩm
export const LIMITRESULTTRANGSANPHAM = 24;
//Limit sản phẩm liên quan
export const LIMITSANPHAMLIENQUAN = 4; //Lấy 4 sp để ngoại trừ trường hợp id hiện tại trùng với id trong sp lấy về: -1sp
export const SLICESANPHAMLIENQUAN = 3; // Dùng slice để cho trường hợp id không trùng thì nó lại lấy 4 sp

//Limit tin tức liên quan
export const LIMITTINTUCLIENQUAN = 5; //Lấy 4 sp để ngoại trừ trường hợp id hiện tại trùng với id trong sp lấy về: -1sp
export const SLICETINTUCLIENQUAN = 4; // Dùng slice để cho trường hợp id không trùng thì nó lại lấy 4 sp

//Limit kiến thức liên quan
export const LIMITKIENHUCLIENQUAN = 4; //Lấy 4 sp để ngoại trừ trường hợp id hiện tại trùng với id trong sp lấy về: -1sp
export const SLICEKIENTHUCLIENQUAN = 3; // Dùng slice để cho trường hợp id không trùng thì nó lại lấy 4 sp

export const ITEMS_PER_PAGE = 12; //Số sản phẩm trên 1 trang của tin tức và kiến thức

interface CategoryOption {
  value: string;
  label: string;
}

export const categoryOptions: CategoryOption[] = [
  { value: "banghieu", label: "Bảng hiệu" },
  { value: "chunoi", label: "Chữ nổi" },
  { value: "hopden", label: "Hộp đèn" },
  { value: "bienbat", label: "Biển bạt" },
  { value: "bangled", label: "Bảng LED" },
  { value: "standee", label: "Standee" },
  { value: "bangsonha", label: "Bảng số nhà" },
  { value: "bangtencongty", label: "Bảng tên công ty" },
];
// Scroll lên 1 khoảng = menu khi nhấp vào mục lục
export const scrollTableLengthMenu = "scroll-mt-16";

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
