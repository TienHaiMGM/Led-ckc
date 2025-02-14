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
  {
    label: "Làm bảng hiệu",
    isDropdown: true,
    items: [
      { href: "/pages/lam-bang-hieu/bang-hieu-alu", label: "Bảng hiệu Alu" },
      { href: "/pages/lam-bang-hieu/bang-hieu-inox", label: "Bảng hiệu Inox" },
      { href: "/pages/lam-bang-hieu/bang-hieu-mica", label: "Bảng hiệu Mica" },
      { href: "/pages/lam-bang-hieu/bang-hieu-led", label: "Bảng hiệu Led" },
      { href: "/pages/lam-bang-hieu/bang-hieu-go", label: "Bảng hiệu Gỗ" },
      { href: "/pages/lam-bang-hieu/bang-hieu-deca", label: "Bảng hiệu Deca" },
      {
        href: "/pages/lam-bang-hieu/bang-hieu-hiflex",
        label: "Bảng hiệu Hiflex",
      },
    ],
  },
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
