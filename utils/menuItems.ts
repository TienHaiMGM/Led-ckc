export const menuItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  {
    label: "Sản phẩm",
    isDropdown: true,
    items: [
      { href: "/san-pham/bang-hieu", label: "Bảng hiệu" },
      { href: "/san-pham/chu-noi", label: "Chữ nổi" },
      { href: "/san-pham/hop-den", label: "Hộp đèn" },
      { href: "/san-pham/standee", label: "Standee" },
      { href: "/san-pham/bang-led", label: "LED" },
      { href: "/san-pham/bang-so-nha", label: "Bảng số nhà" },
      { href: "/san-pham/bang-ten-cong-ty", label: "Bảng tên công ty" },
      { href: "/san-pham/logo", label: "Logo" },
    ],
  },
  {
    label: "Làm bảng hiệu",
    isDropdown: true,
    items: [
      { href: "/lam-bang-hieu/bang-hieu-alu", label: "Bảng hiệu Alu" },
      { href: "/lam-bang-hieu/bang-hieu-inox", label: "Bảng hiệu Inox" },
      { href: "/lam-bang-hieu/bang-hieu-mica", label: "Bảng hiệu Mica" },
      { href: "/lam-bang-hieu/bang-hieu-led", label: "Bảng hiệu Led" },
      { href: "/lam-bang-hieu/bang-hieu-go", label: "Bảng hiệu Gỗ" },
      {
        href: "/lam-bang-hieu/bang-hieu-decal",
        label: "Bảng hiệu Decal",
      },
      {
        href: "/lam-bang-hieu/bang-hieu-hiflex",
        label: "Bảng hiệu Hiflex",
      },
    ],
  },
  {
    label: "Tin tức",
    isDropdown: true,
    items: [
      { href: "/tin-tuc-moi", label: "Tin tức mới" },
      { href: "/kien-thuc-moi", label: "Kiến thức" },
    ],
  },
  { href: "/lien-he", label: "Liên hệ" },
];
