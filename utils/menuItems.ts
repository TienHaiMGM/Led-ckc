export const menuItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/pages/gioi-thieu", label: "Giới thiệu" },
  {
    label: "Sản phẩm",
    isDropdown: true,
    items: [
      { href: "/collections/bang-hieu", label: "Bảng hiệu" },
      { href: "/collections/chu-noi", label: "Chữ nổi" },
      { href: "/collections/hop-den", label: "Hộp đèn" },
      { href: "/collections/bang-led", label: "LED" },
      { href: "/collections/bang-so-nha", label: "Bảng số nhà" },
      { href: "/collections/bang-ten-cong-ty", label: "Bảng tên công ty" },
      { href: "/collections/logo", label: "Logo" },
    ],
  },
  { href: "/pages/lam-bang-hieu", label: "Làm bảng hiệu" },
  {
    label: "Tin tức",
    isDropdown: true,
    items: [
      { href: "/pages/tin-tuc-moi", label: "Tin tức mới" },
      { href: "/pages/kien-thuc", label: "Kiến thức" },
    ],
  },
  { href: "/pages/lien-he", label: "Liên hệ" },
];
